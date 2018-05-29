<?php
Auth::routes();

Route::resource('/','MainController');
Route::resource('/president','VoteController');
Route::get('/presidentElection.json', function() {
    return File::get('../../build/contracts/presidentElection.json');
});


Route::get('/shareholder','VoteController@shareholder');
Route::get('/home', 'HomeController@index')->name('home');


