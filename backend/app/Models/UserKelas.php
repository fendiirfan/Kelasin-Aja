<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserKelas extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'class_id'
    ];

    public function kelas() {
        return $this->belongsTo(Kelas::class);
    }
    public function user() {
        return $this->belongsTo(User::class);
    }
}
