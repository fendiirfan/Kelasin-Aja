<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    //
    public function index()
    {
        try{
            $user = User::all();
            response($user,200);
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
            $data['password'] = bcrypt($data['password']);
            $user = User::create($data);
            return response("Success", 200);
        }catch(\Illuminate\Validation\ValidationException $e){
            return response("Nama Tidak Valid", 400);
        }catch(\Exception $e){
            return response("Internal Server Error", 500);
        }
    }

    public function login(Request $request){
        try{
            $credentials = $request->validate([
                'email' => 'required|email:dns',
                'password' => 'required',
            ]);

            if(Auth::attempt($credentials)){
                $user = Auth::User();
                $token = $user->createToken('Laravel Password Grant Client')->accessToken;
                $data = [
                    'token'=>$token,
                    'user'=>$user,
                ];
                return response($data, 200);
            }else{
                return response("Invalid Credentials", 401);
            }
        }catch (\Illuminate\Validation\ValidationException $e) {
            return response("Email or Password not valid", 400);
        } catch (\Exception $e) {
            return response("Internal Server Error", 500);
        }
    }
}
