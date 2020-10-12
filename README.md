# intern_review
__Hameeインターンで使用した技術をアウトプットしたサービスです__

フロント版https://github.com/yuyaamano23/intern_review_front


### 【セットアップ】
```
docker-compose build

docker-compose up -d

docker-compose exec php composer install
```
.env.exampleファイルをコピーして.envファイルを作成


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
#### データベースのseeder挿入
```
php artisan migrate:refresh --seed
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
↑2つ削除してもだめそうだったら~/.node-gyp/も削除してみる。
そのあと再度 npm install 実行。

