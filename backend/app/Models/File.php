<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class File extends Model
{
    use HasFactory;

    protected $fillable = [
        'class_id',
        'link',
        'title',
        'description',
    ];

    public function kelas() {
        return $this->belongsTo(Kelas::class);
    }
}
