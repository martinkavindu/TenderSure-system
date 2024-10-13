<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Tymon\JWTAuth\Facades\JWTAuth;

class ApiController extends Controller
{
    //register api

    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' =>'required|confirmed',
        ]);

        User::create([
            "name" => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            ]);
            return response()->json(["success"=>true,"message"=>"user created successfully"]);

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
