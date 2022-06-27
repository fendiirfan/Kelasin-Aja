<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Kelas;
use App\Models\UserKelas;
use Illuminate\Support\Facades\DB;

class KelasController extends Controller
{
    //
    public function index()
    {
        try{
            $kelas = Kelas::all();
            // dd($kelas);
            return response($kelas,200);
        }catch(\Exception $e){
            return response("Internal Server Error", 500);
        }
    }

    public function showbyid(int $id)
    {
        try{
            $kelas = Kelas::find($id);
            // dd($kelas);
            return response($kelas,200);
        }catch(\Exception $e){
            return response("Internal Server Error", 500);
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
            //SELECT * FROM kelas JOIN user_kelas on user_kelas.class_id = kelas.id WHERE user_id = 1
            $listKelas = DB::table('kelas')
            ->join('user_kelas', function ($join) use($id) {
                $join->on('user_kelas.class_id', '=', 'kelas.id')
                     ->where('user_id', '=', $id);
            })
            ->get();
            return response($listKelas, 200);
        }catch(\Exception $e){
            response("Internal Server Error", 500);
        }
    }

    public function createUserclass(Request $request){
        try {
            $this->validate($request, [
                'namaUser' => 'required',
                'email' => 'required',
                'kelas' => 'required'
            ]);
            $user = DB::table('users')->where([
                ['nama', '=' ,$request->namaUser],
                ['email', '=', $request->email],
                ])->value('id');
            $kelas = DB::table('kelas')->where('nama', $request->kelas)->value('id');
            // dd($kelas, $user);
            UserKelas::create(['user_id' => $user, 'class_id' => $kelas]);
            return response("User Kelas Terbuat", 200);

        } catch (\Exception $e) {
            return response($e, 400);
        }
    }

    public function inputLinkMeet(int $id, Request $request){
        try {
            $this->validate($request, [
                'link_code_conference' => 'required',
            ]);
            Kelas::where('id' ,$id)->update([
                'link_code_conference' => $request->link_code_conference,
            ]);
            return response("Link Telah Terinput", 200);
        } catch (\Exception $e) {
            return response($e, 400);
        }
    }

}
