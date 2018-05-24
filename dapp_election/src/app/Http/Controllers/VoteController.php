<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Vote_president;
use App\Candidate_president;

class VoteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('vote.president');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function shareholder(){
        return view('vote.shareholder');
    }
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request) //$request -> from, ,  $request->candidate
    {
        $from = $request->from;
        $to = $request ->to;
        $candidates = $request->candidates;

        //db에 넣고 화면을 다시보여줘야해
        //db부터넣자

        $Vote_president = new Vote_president; 
        $Candidate_president = new Candidate_president;

        $Vote_president->date_start = $from;
        $Vote_president->date_fin = $to;
        $Vote_president->save(); //INSERT 구문
        $result= Vote_president::orderBy('id', 'desc')->first(); //방금 넣은  row 가져옴
        // $테이블명 -> 테이블 column name = $변수 명
        
        $total_array = array();
   
        for($count = 0; $count < $candidates; $count++){
            
            $temp_name = "candidates_name".$count;
            $temp_info = "info".$count;

            $candidate_name = $request -> $temp_name;
            $candidate_info = $request -> $temp_info;
            
            $temp_array = array('candidate_name'=>$candidate_name, 'candidate_info'=> $candidate_info,'vote_president_id'=> $result->id );
            array_push($total_array,$temp_array);

        }
        Candidate_president::insert($total_array); // multi array 사용할 때는 위에 처럼하세욥.
        

        return view('main.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
