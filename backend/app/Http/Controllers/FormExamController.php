<?php

namespace App\Http\Controllers;

use App\Models\FormExam;
use Illuminate\Http\Request;
use App\Models\Kelas;

class FormExamController extends Controller
{

    public function store(int $id_class,Request $request){
        try{
            $kelas = Kelas::findOrFail($id_class);
            $this->validate($request,[
                'title'=>'required',
                'description'=>'required',
                'link_embed_form'=>'required',
            ]);
            FormExam::create(
                [
                'title'=>$request->title,
                'description'=>$request->description,
                'link_embed_form'=>$request->link_embed_form,
                'class_id' => $kelas->id,
                ]);
            return response("success", 200);
        }catch(\Illuminate\Validation\ValidationException $e){
            return response("Input Tidak Valid", 400);
        }catch(\Exception $e){
            return response("Internal Server Error", 500);
        }
    }

    public function getFormExamByIdKelas(Request $request, $kelasId){
        try{
            $exam = FormExam::where('class_id', $kelasId)->get();
            return response($exam, 200);
        }catch(\Exception $e){
            return response("Internal Server Error", 500);
        }
    }

}
