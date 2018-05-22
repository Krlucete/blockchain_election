<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();

Route::resource('/','MainController');
Route::resource('/president','VoteController');

Route::get('/shareholder','VoteController@shareholder');

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/presidentElection', function() {
    return File::get('../../build/contracts/presidentElection.json');
});