<?php 

namespace App;

use Illuminate\Database\Eloquent\Model;

class Candidate_president extends Model{

    public $timestamps = false; //처음에는 없이 해. updated_at error가 뜨면 이거 넣어주세욥
    protected $table ="candidate_president"; //실제 테이블 명

}
?>