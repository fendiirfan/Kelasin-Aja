<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User_Kelas extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'class_id'
    ];

    public function kelas() {
        return $this->belongsTo(Kelas::class);
    }
}
