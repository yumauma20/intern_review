<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ArticlesTableSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    DB::table('articles')->insert([
      [
        'id' => 1,
        'company' => 'hamee',
        'term' => 1,
        'task' => '楽しいこと',
        'impressions' => '感想だよーーーー',
        'user_id' => 1,
      ],
      [
        'id' => 2,
        'company' => 'hamee',
        'term' => 1,
        'task' => '業務内容だよーーーーー',
        'impressions' => '感想だよーーーー',
        'user_id' => 2,
      ],
      [
        'id' => 3,
        'company' => 'hamee',
        'term' => 1,
        'task' => '楽しいこと',
        'impressions' => '感想だよーーーー',
        'user_id' => 3,
      ],
      [
        'id' => 4,
        'company' => 'hamee',
        'term' => 1,
        'task' => '楽しいこと',
        'impressions' => '感想だよーーーー',
        'user_id' => 4,
      ],
      [
        'id' => 5,
        'company' => 'hamee',
        'term' => 1,
        'task' => '楽しいこと',
        'impressions' => '感想だよーーーー',
        'user_id' => 4,
      ],
    ]);
  }
}
