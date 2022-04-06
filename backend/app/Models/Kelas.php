<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kelas extends Model
{
    use HasFactory;

    protected $fillable = [
        'nama',
    ];

    public function user() {
        return $this->hasMany(User::class);
    }

    public function conference() {
        return $this->hasMany(Conference::class);
    }

    public function file() {
        return $this->hasMany(File::class);
    }
}
