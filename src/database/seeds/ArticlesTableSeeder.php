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
        'company' => 'google',
        'term' => '1週間未満',
        'task' => 'バックエンド',
        'impressions' => 'めっちゃ良かった！',
        'user_id' => 1,
      ],
      [
        'id' => 2,
        'company' => 'yahoo',
        'term' => '1週間未満',
        'task' => 'フロントエンド ',
        'impressions' => '社員さんが優しかったー',
        'user_id' => 2,
      ],
      [
        'id' => 3,
        'company' => 'サイボウズ',
        'term' => '1週間未満',
        'task' => 'テスト',
        'impressions' => '社風が良かったー',
        'user_id' => 3,
      ],
      [
        'id' => 4,
        'company' => 'hamee',
        'term' => '1週間未満',
        'task' => 'アプリ開発',
        'impressions' => 'お昼ご飯連れてってくれたー',
        'user_id' => 4,
      ],
      [
        'id' => 5,
        'company' => 'Voyage Group',
        'term' => '1週間未満',
        'task' => 'web開発',
        'impressions' => '最高！',
        'user_id' => 4,
      ],
    ]);
  }
}
