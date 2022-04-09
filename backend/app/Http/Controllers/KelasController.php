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
            $kelas = Kelas::with('user')->get();
        }catch(\Exception $e){

        }
    }

}
