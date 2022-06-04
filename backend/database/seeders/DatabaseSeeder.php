<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Kelas;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'jenis_user' => 'Pelajar',
            'nama' => 'Azhar Baihaqi Nugraha',
            'password' => 'azhar03.,',
            'email' => 'azhar03456789@gmail.com',
        ]);
        User::create([
            'jenis_user' => 'Pelajar',
            'nama' => 'Zendy Bramantia Alfareza',
            'password' => 'qwerty123',
            'email' => 'zendy@gmail.com',
        ]);
        User::create([
            'jenis_user' => 'Pelajar',
            'nama' => 'Bijak',
            'password' => 'qwerty123',
            'email' => 'bijak@gmail.com',
        ]);
        User::create([
            'jenis_user' => 'Pelajar',
            'nama' => 'Fendi',
            'password' => 'qwerty123',
            'email' => 'fendi@gmail.com',
        ]);

        Kelas::create([
            'nama' => 'ABP'
        ]);
        Kelas::create([
            'nama' => 'NLP'
        ]);
        Kelas::create([
            'nama' => 'PBO'
        ]);
        Kelas::create([
            'nama' => 'DAP'
        ]);
    }
}
