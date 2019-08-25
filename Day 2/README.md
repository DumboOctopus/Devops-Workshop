# Day 2

## Summary
1. Create a basic notes app
2. Use mongodb to store notes
3. This is the application we will devops with

## Details

* Use mongoose to communicate to mongodb
* Create notes model
* Create endpoints for creating notes, viewing notes and deleting notes

## Commands

NOTE: these commands are for creating this project from SCRATCH. If you just want to run the code in this repo, just
cd into `nodeproject` and run `npm install -g nodemon` and `npm start`.

1. Set up
```
mkdir nodeproject
cd nodeproject
npm init
npm install express
npm install bodyParser
npm install pug
npm install mongoose
```
2. If you are mac, you will need to do some set up for mongodb. Try running
`mongod`
If this gives you an error about `/data/db` not existing, you will need to create it and CHange OWNership of it
```
alias please="sudo"    # jk this is not necessary but it makes a wholesome linux experience according to "I am a Programmer, I have no life". Add to bash profile or zsh profile for permanent wholesomeness"
please mkdir /data
please mkdir /data/db
please chown -R `id -un` /data/db
```
Once that is set up, keep `mongod` running in another terminal window.
If you are using windows, this set up is not necessary.
3. Change your package.json and add the `start` script. See this repo's `nodeproject/package.json` for how to do that exactly
