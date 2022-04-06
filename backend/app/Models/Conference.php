<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Conference extends Model
{
    use HasFactory;

    protected $fillable = [
        'link_code_conference',
        'class_id'
    ];

    public function conference() {
        return $this->belongsTo(Kelas::class);
    }
}
