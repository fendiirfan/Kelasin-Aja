<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class userApiTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    use WithFaker;
    public function test_register_benar()
    {
        $this->setUpFaker();
        $response = $this->postJson('/api/register', [
            'email' => $this->faker->email, 
            'password' => $this->faker->password, 
            'nama' => $this->faker->name, 
            'jenis_user' => $this->faker->randomElement(["admin","user"]),
        ]);

        $response->assertStatus(200);
    }

    public function test_register_salah()
    {
        $response = $this->postJson('/api/register', [
            'email' => 'testgmail.com', 
            'password' => 'test', 
            'nama' => 'zendy', 
            'jenis_user' => 'pelajar'
        ]);
        $response->assertStatus(400);
    }

    public function test_login_api(){
        $response = $this->postJson('/api/login', [
            'email' => 'test123@gmail.com', 
            'password' => 'test123'
        ]);

        $response->assertStatus(200);
    }

}
