<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Article;

class ArticlesController extends Controller
{
  /**
   * 記事全件取得
   * Todo: 指定した件数分取得できるように変更
   * 
   * @return array json形式で記事データ全件取得
   */
  public function index()
  {
    $articles = Article::all();
    return response()->json(['articles' => $articles]);
  }

  /**
   * 記事1件取得
   * 
   * @param $id int 記事のID
   * @return object 1件分の記事データ
   */
  public function detail($id)
  {
    $article = Article::find($id);
    return response()->json(['article' => $article]);
  }
}
