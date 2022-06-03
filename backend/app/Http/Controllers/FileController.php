<?php

namespace App\Http\Controllers;

use App\Models\File;
use Illuminate\Http\Request;

class FileController extends Controller
{
    public function store(Request $request){
        try{
            $data = $request->validate([
                'title' => 'required',
                'file' => 'required',
                'class_id' => 'required',
            ]);
            File::create($data);
            return response("success", 200);
        }catch(\Illuminate\Validation\ValidationException $e){
            return response("Input Tidak Valid", 400);
        }catch(\Exception $e){
            return response("Internal Server Error", 500);
        }
    }
}
