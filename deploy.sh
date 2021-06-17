#!/usr/bin/env sh

# 發生錯誤時執行終止指令
set -e

# 打包編譯
yarn build

# 移動到打包資料夾下，若你有調整的話打包後的資料夾請務必調整
cd build

# 部署到自定義網域
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 部署到 https://<USERNAME>.github.io
git push -f git@github.com:RexHung0302/react-router-practice.git master:gh-pages
# 除此之外，也可以改走 HTTPS 模式
# git push -f https://github.com/RexHung0302/Hexschool-firebase-bmi-practice.git master:gh-pages

cd -