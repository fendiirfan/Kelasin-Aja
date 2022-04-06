<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory;

    protected $fillable = [
        'jenis_user',
        'nama',
        'password',
        'email',
        'class_id',
    ];

    protected $hidden = [
        'password',
    ];

    public function kelas() {
        return $this->belongsTo(Kelas::class);
    }
}
