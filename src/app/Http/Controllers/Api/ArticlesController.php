<?php

namespace App\Http\Controllers\Api;

use App\Article;
use App\Http\Controllers\Controller;
use App\Http\Requests\ArticlesRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class ArticlesController extends Controller
{
  const DEFAULT_PAGE = 1;
  const ARTICLE_LIMIT = 6;
  const MIN_PAGE = 1;
  const MAX_PAGE = 200;

  /**
   * 記事全件取得
   * May $articles = DB::table('articles');はArticle::query();に置き換えもできる
   * 
   * @return array json形式で記事データ全件取得
   */
  public function index()
  {
    $articles = DB::table('articles');

    //keyword[]パラメータがなければ全件表示をする。
    if(isset($_GET['keyword'])){
      //keyword[]パラメータがcompany,task,impressionsカラムのいずれかにマッチしたものをAND条件で取り出す。
      foreach($_GET['keyword'] as $keyword){
        //半角スペースと全角スペースがあったら削除する。
        $keyword = str_replace(array(" ", "　"), "", $keyword);
        $articles->where(DB::raw('CONCAT(company,",",task,",",impressions)'),'LIKE',"%$keyword%");
      }
    }

    $page = self::DEFAULT_PAGE;
    if(isset($_GET['page'])){
      $page = (int)$_GET['page'];
      if($page < self::MIN_PAGE || $page > self::MAX_PAGE){
        $page = self::DEFAULT_PAGE;
      }
    }
    $limit = self::ARTICLE_LIMIT;
    $offset = $limit * ($page - 1);
    $articles->offset($offset);
    $articles->limit($limit);

    $result = $articles->get();
    return response()->json(['articles' => $result]);
  }

  /**
   * ログインしてるユーザーの記事全件取得
   * 
   * @return array json形式で記事データ全件取得
   */
  public function myArticles()
  {
    $articles = DB::table('articles');

    $user = Auth::id();
    $articles->where('user_id',$user);

    $result = $articles->get();
    return response()->json(['articles' => $result]);
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
   */
  public function create(ArticlesRequest $request)
  {
    $article = new Article();
    $article->company = $request->companyName;
    $article->term = $request->term;
    $article->task = $request->task;
    $article->impressions = $request->impressions;
    $article->user_id = Auth::id();
    $article->save();
    return;
  }
}
