# intern_review

**Hamee インターンで使用した技術をアウトプットしたサービスです**

フロント版https://github.com/yuyaamano23/intern_review_front

### 【セットアップ】

```
docker-compose build

docker-compose up -d

docker-compose exec php composer install
```

.env.example ファイルをコピーして.env ファイルを作成

#### データベースサーバーにログイン

```
docker-compose exec db bash //dbコンテナに入る
>mysql -u root -p
Enter password: root
```

## コンテナ内での操作

まずはコンテナに入る

```
docker-compose exec php bash
```

#### データベースをマイグレーションで作成

```
php artisan migrate
```

#### データベースの seeder 挿入

```
php artisan migrate:refresh --seed
```

#### ファイルの更新を監視し、更新されたら自動でビルドを行う

```
npm run watch
```

## ポート

```
localhost:80 トップページ
localhost:1000 phpMyAdmin
```

## バージョン

nginx 1.19.2<br>
PHP 7.2.33<br>
MySQL 8.0.21<br>
Laravel 6.18.40<br>
Node 11.15.0<br>
npm 6.14.8<br>
Bootstrap 4.5.2<br>
React 16.13.1<br>

## npm run watch でエラーが出たら...

```
$ rm -rf node_modules
$ rm package-lock.json
$ rm -rf ~/.node-gyp/

$ docker-compose exec php npm install
```

なんかゴミが残ってて邪魔してたりするので、一回きれいにするため
node_modules と package-lock.json を 削除する。
↑2 つ削除してもだめそうだったら~/.node-gyp/も削除してみる。
そのあと再度 npm install 実行。

## migration でエラーがでたら...

[MySQL 8.0 へ接続時に”SQLSTATE[HY000] [2054] The server requested authentication method unknown to the client”になる場合の対処法](https://blog.janjan.net/2018/11/01/mysql8-request-authentication-method-unknown-to-the-client/)

## devtool failed to sourcemap エラーが出たら...

[chrome の設定から enable javascript sourcemap のチェックを外す](https://stackoverflow.com/questions/61339968/devtools-failed-to-load-sourcemap-could-not-load-content-for-chrome-extension)

## 認証まわり（jwt） エラーが出たら...

[Laravel で JWT 認証！ jwt-auth 導入手順](https://blog.proglearn.com/2020/04/21/%E3%80%902020%E5%B9%B44%E6%9C%88-%E6%99%82%E7%82%B9%E3%80%91laravel%E3%81%A7jwt%E8%AA%8D%E8%A8%BC%EF%BC%81-jwt-auth-%E5%B0%8E%E5%85%A5%E6%89%8B%E9%A0%86/)

```
$ composer require tymon/jwt-auth
```

```
$ php artisan vendor:publish --provider="Tymon\JWTAuth\Providers\LaravelServiceProvider"
```

```
$ php artisan jwt:secret
```

## db-host_intern_review コンテナ(DB コンテナ)が立ち上がらなかったら ...

一旦 docker の image と container と volume を削除しよう

それでもだめなら docker/db 配下の 3 つのディレクトリを削除（自分はこれで解決）

```
$ rm -rf ./docker/db/*
```
