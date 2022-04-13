<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Kelas;

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

    public function store(Request $request){
        try{
            $this->validate($request, [
                'nama' => 'required',
            ]);
            $request = Kelas::create([
                'nama' => $request->nama,
            ]);
            return response("success", 200);
        }catch(\Illuminate\Validation\ValidationException $e){
            return response("Nama Tidak Valid", 400);
        }catch(\Exception $e){
            return response("Internal Server Error", 500);
        }
    }



}
