<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Kelas;
use App\Models\UserKelas;

class KelasController extends Controller
{
    //
    public function index()
    {
        try{
            $kelas = Kelas::all();
            dd($kelas);
            // response($kelas,200);
        }catch(\Exception $e){
            response("Internal Server Error", 500);
        }
    }

    public function showbyid(int $id)
    {
        try{
            $kelas = Kelas::find($id);
            dd($kelas);
            // response($kelas,200);
        }catch(\Exception $e){
            response("Internal Server Error", 500);
        }
    }

    public function createKelas(Request $request){
        // return response("create kelas " . $request->nama, 200);
        try{
            $data = $request->validate([
                'nama' => 'required',
            ]);
            Kelas::create($data);
            return response("Kelas Terbuat", 200);
        }catch(\Illuminate\Validation\ValidationException $e){
            return response("Nama Tidak Valid", 400);
        }catch(\Exception $e){
            return response("Internal Server Error", 500);
        }
    }

    public function getKelasByIdUser(int $id){
        try{
            $listKelas = UserKelas::where('user_id', $id)->get();
            // dd(UserKelas::all());
        }catch(\Exception $e){
            response("Internal Server Error", 500);
        }
    }

}
