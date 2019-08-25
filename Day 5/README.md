# Day 5

## Summary:
* Host mongodb
* Make node application production ready
* Host node application

## Details:
* nvm
* pm2
* production v development
* environment variables
* helmet
* node build production
* Good logging with winston

## commands
1. Locally:
```
npm install helmet
npm install winston
npm install compression # NOTE: we skipped this because in real life, we would use nginx instead of a javascript module like compression.
git init
vim .gitignore
git add -A
git commit -m "Commit message"
git push origin master
```
1. On server for express
```
nvm install 11.0.0
npm install
npm install -g pm2
pm2 run npm -- start
```
