<?php

namespace App\Http\Controllers\Api;

use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UsersController extends Controller
{
  /**
   * 会員登録機能
   */
  /* public function register(Request $request)
  {
    $user = new User();
    $hashed_password = password_hash($request->password, PASSWORD_DEFAULT);
    $user->name = $request->name;
    $user->email = $request->email;
    $user->password = $hashed_password;
    $user->save();
    return;
  } */
}