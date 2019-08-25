# Day 1

## Summary
1. Create a basic express web application
2. Send text and html files using express
3. Use the pug template language bc its useful
4. Send data using post requests and html forms

## Details

* Wesbite with one endpoint ('/') using response.send
* Website with two endpoints ('/' and '/about')
* /about endpoint using response.sendFile()
* Learn difference between GET and POST
* Create a POST endpoint and put an HTML form in the '/' endpoint
* console.log POST data and discuss importance of body-parser
* modify home to use pug instead of pure HTML

## Commands

NOTE: these commands are for creating this project from SCRATCH. If you just want to run the code in this repo, just
cd into `nodehelloworld` and run `node index.js`.

1. Set up
```
mkdir nodehelloworld
cd nodehelloworld
npm init
npm install express
```
2. Create index.js
3. To run the server, run `node index.js`
4. To deal with post data, you will need `body-parser`. Install this with `npm install body-parser`
Likewise, install pug with `npm install pug`
