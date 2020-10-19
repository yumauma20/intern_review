<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
  return $request->user();
});

Route::get('/articles', 'Api\ArticlesController@index');

Route::get('/articles/detail/{id}', 'Api\ArticlesController@detail');

Route::post('/articles/create', 'Api\ArticlesController@create');

Route::post('/register', 'Auth\RegisterController@register');

Route::post('/login', 'Auth\AuthController@login');

Route::group(['middleware' => ['jwt.auth']], function () {

  Route::post('/logout', 'Auth\AuthController@logout');

});