<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;

class DatabaseBackup extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'db:backup';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Backup the database and store the backup file.';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        // Database configuration
        $host = env('DB_HOST');
        $username = env('DB_USERNAME');
        $password = env('DB_PASSWORD');
        $database = env('DB_DATABASE');

        // Backup file name with date
        $backupFileName = $database . '_' . date('Y-m-d_H-i-s') . '.sql';
        
        // Storage path for the backup file
        $backupFilePath = storage_path('app/backups/' . $backupFileName);

        // Ensure the backup directory exists
        if (!File::exists(storage_path('app/backups'))) {
            File::makeDirectory(storage_path('app/backups'), 0755, true);
        }

        // Create the command to export the database
        $command = "mysqldump --user={$username} --password={$password} --host={$host} {$database} > {$backupFilePath}";

        // Execute the command
        exec($command, $output, $result);

        // Check if the backup was successful
        if ($result === 0) {
            $this->info("Database backup successfully created: {$backupFilePath}");
        } else {
            $this->error('Error: Unable to create the database backup.');
        }

        return $result;
    }
}
