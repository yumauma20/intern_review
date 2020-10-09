<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;


class UsersTableSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    DB::table('users')->insert([
      [
        'id' => 1,
        'name' => 'aaa',
        'email' => Str::random(10).'@gmail.com',
        'password' => Hash::make('123456789'),
      ],
      [
        'id' => 2,
        'name' => 'bbb',
        'email' => Str::random(10).'@gmail.com',
        'password' => Hash::make('123456789'),
      ],
      [
        'id' => 3,
        'name' => 'ccc',
        'email' => Str::random(10).'@gmail.com',
        'password' => Hash::make('123456789'),
      ],
      [
        'id' => 4,
        'name' => 'ddd',
        'email' => Str::random(10).'@gmail.com',
        'password' => Hash::make('123456789'),
      ],
      [
        'id' => 5,
        'name' => 'eee',
        'email' => Str::random(10).'@gmail.com',
        'password' => Hash::make('123456789'),
      ],
    ]);
  }
}
