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

#### データベースをマイグレーションで作成
```
php artisan migrate
```
#### データベースのseeder挿入
```
php artisan migrate:refresh --seed
```
#### ポート
```
localhost:80 トップページ
localhost:1000 phpMyAdmin
```
#### バージョン
nginx 1.19.2<br>
PHP 7.2.33<br>
MySQL 8.0.21<br>
Laravel 6.18.40<br>
Node 11.15.0<br>
npm 6.14.8<br>
Bootstrap 4.5.2<br>
React 16.13.1<br>

