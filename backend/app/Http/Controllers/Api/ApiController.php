<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Tymon\JWTAuth\Facades\JWTAuth;
use Mail;
use Illuminate\Support\Str;

class ApiController extends Controller
{
    //register api

    public function register(Request $request)
    {
        // Validate request inputs
    $request->validate([
        'name' => 'required',
        'email' => 'required|email|unique:users',
        'companyType' => 'required',
        'location' => 'required',
        'country' => 'required',
        'contactName' => 'required',
        'phone' => 'required',
        'kra' => 'required',
        'physicalAddress' => 'required',
        'categoriesofInterest' => 'required',
        'supplyLocations' => 'required',
    ]);

    // Generate a random password
    $generatedPassword = Str::random(8);  

    // Create the user 
    $user = User::create([
        "name" => $request->name,
        'email' => $request->email,
        'password' => Hash::make($generatedPassword),
        'companyType' => $request->companyType,
        'location' => $request->location,
        'country' => $request->country,
        'contactName' => $request->contactName,
        'phone' => $request->phone,
        'kra' => $request->kra,
        'physicalAddress' => $request->physicalAddress,
        'categoriesofInterest' => $request->categoriesofInterest,
        'supplyLocations' => $request->supplyLocations,
    ]);

   
    $data['name'] = $request->name;
    $data['email'] = $request->email;
    $data['password'] = $generatedPassword;  
    $data['title'] = "Your Account Password";

 
    Mail::send('password_mail', ['data' => $data], function($message) use($data) {
        $message->to($data['email'])->subject($data['title']);
    });

   
    return response()->json(["success" => true, "message" => "User created successfully, password sent to email."]);


    }


//login api
    public function login(Request $request)
    {
        $request->validate([
            'password'=>'required',
            'email' =>'required|email'
        
        ]);
        
        config(['jwt.ttl' => 180]);
        
        $token = JWTAuth::attempt([
            'email' => $request->email,
            'password' => $request->password,
        ]);
        if(!empty($token)){
        
         return response()->json(['success'=>true,'token'=>$token,'expiry'=>'180 mins']);
        
        }
        return response()->json(['success'=>false, 'message' => 'incorrect details' ]);

    }
    //supplier profile api

    public function ProfileApi()
    {
        $userData = auth()->user();

        return response()->json(['success'=>true,'user'=>$userData]);
    }
    //regenerate token
    public function Regeneratetoken()
    {
    
        $newToken = auth()->refresh();

        return response()->json([
            "status" => true,
            "message" => "New access token",
            "token" => $newToken
        ]);
    }
    //logout end point
    public function LogoutApi(){
        auth()->logout();

    return response()->json(['success'=>true,'message'=>'logout successful']);

    }
    //change password
    public function ChangePassword(Request $request){
        $request->validate([
            'new_password' => 'required',
            'old_password' => 'required'
        ]);
    
        $user = auth()->user();
        if (!Hash::check($request->old_password, $user->password)) {
            return response()->json(['success' => false, 'message' => 'Old password is incorrect'], 400);
        }
    
        $user->password = Hash::make($request->new_password);
        $user->save();
        return response()->json(['success' => true, 'message' => 'Password changed successfully']);

    }
}
