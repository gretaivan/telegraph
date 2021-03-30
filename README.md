# TELEGRAPH API

An app to post the posts with pseudonym, title and body. All entries stored in postgres database and can be consumed through API. 

## Installation & Usage 

+ **`bash _scripts/startDev.sh`**
    - starts api & db services
+ **`npm run unitTests`** (from within api folder)
    - triggers a test run of unit tests only
+ **`bash _scripts/startTest.sh`**
- starts api & db services testing

**`bash _scripts/teardown.sh`**
- stop all running services with removal of data

***Do not run both dev and test environments at the same time.***


## Technology

## License 

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
2. Setting up  the DB configuration files 
3. Seeding in some data to the DB to start dev process

## Server functionality
4. Implementation of author and posts models 
5. Set up the server file
6. Addition of the route files for both post and author
7. Creation of controllers for author and post routes. Functionality:  get all, find by index for both objects and create post



## Bugs
1. The app crashed - the cause was controller file exporting functions as an object. Fix to use appropriate module.exports with curly braces ```module.exports = { all };``` 

## Wins & Challenges
