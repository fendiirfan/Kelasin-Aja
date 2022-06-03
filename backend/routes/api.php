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
});

// Kelas
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/kelas', [\App\Http\Controllers\KelasController::class, 'index']);
    Route::get('/kelas/{id}', [\App\Http\Controllers\KelasController::class, 'showbyid']);
    Route::post('/kelas', [\App\Http\Controllers\KelasController::class, 'store']);
});

Route::post('/create_kelas', [\App\Http\Controllers\KelasController::class, 'createKelas']);
Route::get('/getKelasByIdUser/{id}', [\App\Http\Controllers\KelasController::class, 'getKelasByIdUser']);