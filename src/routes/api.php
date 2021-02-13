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

Route::post('/register', 'Auth\RegisterController@register');

Route::post('/login', 'Auth\AuthController@login');

Route::group(['middleware' => ['jwt.auth']], function () {

  Route::get('/myArticles', 'Api\ArticlesController@myArticles');

  Route::post('/articles/create', 'Api\ArticlesController@create');

  Route::post('/logout', 'Auth\AuthController@logout');

  Route::put('/articles/edit/{id}', 'Api\ArticlesController@edit');

  Route::delete('/articles/delete/{id}', 'Api\ArticlesController@delete');

  Route::get('/me', 'Auth\AuthController@me');

});