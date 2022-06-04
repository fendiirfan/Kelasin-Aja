<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

// user
Route::post('/register', [\App\Http\Controllers\UserController::class, 'register']);
Route::post('/login', [\App\Http\Controllers\UserController::class, 'login']);
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', [\App\Http\Controllers\UserController::class, 'index']);
    Route::get('/user/{id}', [\App\Http\Controllers\UserController::class, 'showbyid']);
    Route::post('/logout', [\App\Http\Controllers\UserController::class, 'logout']);
});

// Kelas
Route::middleware('auth:sanctum')->group(function () {
    // Route::get('/kelas', [\App\Http\Controllers\KelasController::class, 'index']);
    // Route::get('/kelas/{id}', [\App\Http\Controllers\KelasController::class, 'showbyid']);
    // Route::post('/kelas', [\App\Http\Controllers\KelasController::class, 'store']);
    Route::post('/BuatKelas', [\App\Http\Controllers\KelasController::class, 'createKelas']);
    Route::get('/getKelasByIdUser/{id}', [\App\Http\Controllers\KelasController::class, 'getKelasByIdUser']);
    Route::post('/UserKelas', [\App\Http\Controllers\KelasController::class, 'createUserclass']);
});

//FormExam
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/exam/{classid}', [\App\Http\Controllers\FormExamController::class, 'store']);
    Route::get('/exam/kelasid/{classid}', [\App\Http\Controllers\FormExamController::class, 'getFormExamByIdKelas']);
});

//File
Route::middleware('auth:sanctum')->group(function(){
    Route::post('/file/{classid}', [\App\Http\Controllers\FileController::class, 'store']);
    Route::get('/file/{classid}', [\App\Http\Controllers\FileController::class, 'getFileByIdKelas']);
});
Route::post('/file/store', [\App\Http\Controllers\FileController::class, 'store']);
