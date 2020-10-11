<?php

namespace App\Http\Controllers\Api;

use App\Article;
use App\Http\Controllers\Controller;
use App\Http\Requests\ArticlesRequest;
use Illuminate\Http\Request;

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

  /**
   * 記事投稿機能
   * 
   * @Todo ArticlesRequestクラス作成しバリデーション記載
   */
  public function create(ArticlesRequest $request)
  {
    $article = new Article();
    $article->company = $request->companyName;
    $article->term = $request->term;
    $article->task = $request->task;
    $article->impressions = $request->impressions;
    $article->user_id = $request->user_id;
    $article->save();
    return redirect('/');
  }
}
