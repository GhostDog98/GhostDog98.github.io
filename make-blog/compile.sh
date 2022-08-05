rm -rf ./htdocs/
hexo generate
touch ./htdocs/.htaccess
mkdir ./htdocs/ErrorPages
cp ./404.html ./htdocs/404.html
cp ./BSOD_404.gif ./htdocs/BSOD_404.gif
mv ./htdocs/* ./../blog
