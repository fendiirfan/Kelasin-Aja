<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FormExam extends Model
{
    use HasFactory;

    protected $fillable = [
        'class_id',
        'title',
        'description',
        'link_embed_form'
    ];

    public function kelas() {
        return $this->belongsTo(Kelas::class);
    }
}
