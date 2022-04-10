<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    //
    public function index()
    {
        try{
            $user = User::all();
            dd($user);
            // response($kelas,200);
        }catch(\Exception $e){
            response("Internal Server Error", 500);
        }
    }

    public function register(Request $request){
        try{
            $data = $request->validate([
                'jenis_user'=>'required',
                'nama'=>'required',
                'password'=>'required',
                'email'=>'required|email',
            ]);
            $user = User::create([
                'jenis_user'=>$data['jenis_user'],
                'nama'=>$data['nama'],
                'password'=>$data['pasword'],
                'email'=>$data['email'],
            ]);

            $token = $user()->createToken('kelasinToken')->plainTextToken;

            $response = [ 
                "user"=>$user,
                "token"=>$token,
            ];

            return response($response, 200);
        }catch(\Illuminate\Validation\ValidationException $e){
            return response("Nama Tidak Valid", 400);
        }catch(\Exception $e){
            return response("Internal Server Error", 500);
        }
    }
}
