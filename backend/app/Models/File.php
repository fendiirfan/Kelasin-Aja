<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class File extends Model
{
    use HasFactory;

    protected $fillable = [
        'class_id',
        'file',
        'title',
    ];

    public function file() {
        return $this->belongsTo(Kelas::class);
    }
}
