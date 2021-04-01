# TELEGRAPH API

Inspired by the minimalistic design of [Telegraph](https://telegra.ph/), this app can be used to make posts with your pseudonym, title and body. All entries stored in postgres database and can be consumed through API. 

## Installation & Usage 

**`bash _scripts/startDev.sh`**    
    - starts api & db services

**`npm run unitTests`** (from within api folder)   
    - triggers a test run of unit tests only 
    
**`bash _scripts/startTest.sh`**     
    - starts api & db services testing
  
**`bash _scripts/teardown.sh`**      
    - stop all running services with removal of data    

***Do not run both dev and test environments at the same time.***


## Technologies

**Client:** Nodemon, Watchify, Concurrently, Jest, Supertest    
**Server:** Postgres, Express, Cors   

## Process 
### application folder system setup
+ set up the appropriate folder structure
+ added script files 
+ installed dependencies for the application
+ added docker compose files
+ added testing suite with dependencies

### db\migrations 
1. Created database schema

### dbCongfig file
2. Setting up the DB configuration files 
3. Seeding in some data to the DB to start dev process

## Server functionality
4. Implementation of author and posts models 
5. Set up the server file
6. Addition of the route files for both post and author
7. Creation of controllers for author and post routes. Functionality:  get all, find by index for both objects and create post

### Client 
8. Creation of client side skeleton
9. Establishes connection between server and client
10. Add styling  

### Task Requirements
- [x] The app should have a browser client allowing users to write a post with a title, a pseudonym and a body
- [x] No login should be required to create a post or visit a post
- [ ] When a user hits 'publish', the post should be stored in a database and the client redirected to a show path
- [ ] The user should be able to access their post using that show path even after a server restart
- [x] Edit and delete functionality is not required

## Bugs
1. The app crashed - the cause was controller file exporting functions as an object. Fix to use appropriate module.exports with curly braces ```module.exports = { all };``` 
2. Trouble extracting data from fetch request 

## Wins & Challenges
- Routes all fully functioning
- Some bugs and small errors taking up a lot of time to debug 
