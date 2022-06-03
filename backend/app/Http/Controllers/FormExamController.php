<?php

namespace App\Http\Controllers;

use App\Models\FormExam;
use Illuminate\Http\Request;

class FormExamController extends Controller
{

    public function store(Request $request){
        try{
            $data = $request->validate([
                'title' => 'required',
                'description' => 'required',
                'link_embed_form' => 'required',
                'class_id' => 'required',
            ]);
            FormExam::create($data);
            return response("success", 200);
        }catch(\Illuminate\Validation\ValidationException $e){
            return response("Input Tidak Valid", 400);
        }catch(\Exception $e){
            return response("Internal Server Error", 500);
        }
    }

}
