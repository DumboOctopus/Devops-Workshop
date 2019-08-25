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
1. On server for express. First be sure to `git push` your local code.
```
nvm install 11.0.0
git clone http://github.com/username/repo
cd your_repo
vim .env # Write the environment variables
npm install
npm start # just test to see if everything is working
npm install -g pm2
pm2 run npm -- start
```
Note, when you try changing the `PORT` to 80, it will give you an error. This is because you need
sudo permissions to listen on it. To work around this, we can forward all connections from port 80 to
port 3000 and have our exprses application's `PORT` still be 3000.
```
sudo iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-port 8080
```

Lastly, be sure to open allow connections to your port on the Security Group.
