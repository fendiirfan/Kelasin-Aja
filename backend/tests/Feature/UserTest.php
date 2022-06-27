<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class UserTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    // public function test_example()
    // {
    //     $response = $this->get('/');

    //     $response->assertStatus(200);
    // }
    
    public function test_search_user()
    {
        $this->assertDatabaseMissing('users',[
            'email' => "test123@gmail.com",
            'password' => "test123"
        ]);
    }

    public function test_login_api(){
        $response = $this->postJson('/api/login', [
            'email' => 'test123@gmail.com', 
            'password' => 'test123'
        ]);

        $response->assertStatus(200);
    }

    public function test_register_user(){
        $response = $this->postJson('/api/register', [
            'email' => 'test@gmail.com', 
            'password' => 'test', 
            'nama' => 'zendy', 
            'jenis_user' => 'pelajar'
        ]);

        $response->assertStatus(200);
    }
}
