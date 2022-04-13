<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kelas extends Model
{
    use HasFactory;
    protected $table = 'kelas'; 

    protected $fillable = [
        'nama',
    ];

    public function user() {
        return $this->hasMany(User::class);
    }

    public function file() {
        return $this->hasMany(File::class);
    }
    public function formexam() {
        return $this->hasMany(FormExam::class);
    }
}
