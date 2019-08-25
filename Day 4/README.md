# Day 4

## Summary
1. Review
2. Dangers of unescaped characters
3. set up mongo db server on aws
4. set up express app on aws (DID NOT FINISH)


## Commands
1. Create AWS EC2 instance using amazon web console. *BE SURE TO USE FREE TIER ELIGIBLE SETTINGS*
2. Obtain key and copy it to your ~/.ssh folder. Create the folder if it doesn't exist. For windows, you will need to use putty. Google how to add key files to putty.
For mac and linux only:
`chmod 400 /path/to/your/key.pem`

3. Find ip address in aws console. Mac: ssh using `ssh -i /path/to/your/key.pem ec2-user@ipaddressofinstance`. Windows: use putty
4. [Install](https://gist.github.com/npearce/6f3c7826c7499587f00957fee62f8ee9) docker and docker-compose
5. Create a folder `mongodb_docker` (`mkdir mongodb_docker`)
5. Log out and copy docker-compose.yml and mongo-init from your computer to the folder on the AWS EC2 instance.
`scp -i /path/to/your/key -r /path/to/folder/containing/both/files ec2-user@ipaddress:~/mongodb`
NOTE: this should work for windows, mac and linux
6. Log back in and run `docker-compose up` inside the `mongodb_docker` folder.
7. If it throws errors, debug and google.
8. Run `docker-compose up -d`. Now it is running in the background
9. Open up port on AWS security group (Custom TCP/IP, Port 27017, Anywhere)



## Review:
package.json:
* stores the dependencies
* stores scripts:
   * start script run by doing `npm start`
index.js
* require => importing
* express is used for creating the app variable
   * the app variable is the server basically
   * we tell the server how to respond to requests through app.get(..)
* bodyParser
   * If the client fills out a form and wants to send that form data to the server,
   it will send it as a POST request
   * bodyParser accepts this post request and puts the form data in request.body object.
       For example, request.body might equal {title: "My first note", note: "AAAAAAAAAAAAAA"}
* mongoose
   * so mongodb is a database
   * it can be used with any language and any framework
   * mongoose is a wrapper which provides simple javascript functions to use mongodb.
   * basically makes it easier to use mongodb
* const mongoDB = "..."
   * this string tell mongodb and mongoose what database to connect to.
   * the format is "mongodb://user:password@ipaddress:port/db_name"
* mongoose.connect(mongoDB, {useNewUrlParser: true})
   * actually connects to the database described by mongoDB string
* db = mongoose.connection
   * gets a javascript object which represents the database connection
   * used for db.on('error', console.error.bind(console, 'MongoDB connection error:'))
      * whenever an event of type 'error' occurs, the function console.err.. will run
      * that function just prints out the error
* app.use(bodyParser...)
   * tell express to use bodyParser (see description above).
   * bodyParser is a middleware
   * How server's process requests:
       1. Request is made by client
       2. Request data is passed through all middleware
       3. Middleware computes stuff and puts results in the request object
       4. The function (request, response) => {...} is ran.
