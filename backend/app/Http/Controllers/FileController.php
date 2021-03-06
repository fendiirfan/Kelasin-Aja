<?php

namespace App\Http\Controllers;

use App\Models\File;
use Illuminate\Http\Request;
use App\Models\Kelas;

class FileController extends Controller
{
    public function store(Request $request,int $class_id){
        try{
            $kelas = Kelas::findOrFail($class_id);
            $this->validate($request,[
                'link'=>'required',
                'title'=>'required',
                'description'=>'required',
            ]);
            File::create([
                'link'=>$request->link,
                'title'=>$request->title,
                'description'=>$request->description,
                'class_id' => $kelas->id,
            ]);
            return response("success", 200);
        }catch(\Illuminate\Validation\ValidationException $e){
            return response("Input Tidak Valid", 400);
        }catch(\Exception $e){
            return response("Internal Server Error", 500);
        }
    }
    public function getFileByIdKelas(Request $request, $kelasId){
        try{
            $exam = File::where('class_id', $kelasId)->get();
            return response($exam, 200);
        }catch(\Exception $e){
            return response("Internal Server Error", 500);
        }
    }
}
