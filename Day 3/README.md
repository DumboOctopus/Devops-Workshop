# Day 3 

create an aws account
*selected free tier*

create ec2 micro instance (free tier)
create and download key pair
put key pair in ~/.ssh and chmod 400 it
```
ssh -i ~/.ssh/keypair.pem ec2-user@ip address
```
install mongodb
Create a /etc/yum.repos.d/mongodb-org-4.0.repo file so that you can install MongoDB directly using yum:
```
[mongodb-org-4.0]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/4.0/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-4.0.asc
```
*NOTE:* had to replace $releasever to 6
then
```
sudo yum install -y mongodb-org
```

start mongodb
```
sudo mkdir /data/db -p
sudo chown $USER /data/db

sudo service mongod start
cat /var/log/mongodb/mongod.log | grep "waiting for connections on port 27017"
sudo service mongod stop
sudo service mongod restart

```
mongo
inside mongo shell (Run `mongo` command to enter shell)
```
> use admin
> db.createUser({user: "admin", pwd: "adminUser123", roles: [{role: "userAdminAnyDatabase", db: "admin"}]})
> ^C
sudo service mongod restart
mongo 27017 -u "admin" -p "adminUser123" --authenticationDatabase "admin"
> use notes_db
> db.createUser({user: "user", pwd: "user123", roles: [{role: "readWrite", db: "notes_db"}]})
```

opening up mongo to outside world
```
sudo vim /etc/mongod.conf
```
uncomment  bindip
```
bindip: 0.0.0.0 #very important
```
uncomment security and make it like this:
```
security:
  authorization: 'enabled'
```
create new inbound rule in security group
custom tcp, port 27017, source anywhere, 0.0.0.0/0, ::/0, description mongo

```
restart mongod
```

connect with:
```
mongo mongodb://user:user123@IP_ADDRESS:27017/notes_db
```
Change your express application's `const mongodb = "..."` to that url. Be sure to replace the ip with your actual one. Create a couple
notes and then go onto server and run
```
use notes_db
db.notes.find({})
```
to verify notes were created there and not locally.
