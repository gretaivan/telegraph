(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const server = "http://localhost:3000/";
let helloDiv = document.getElementById('hello'); 

function getHello(){
    fetch('http://localhost:3000/')
        .then(r => r.text())
        .then(appendHello)
        .catch(console.warn)
}

function appendHello(data){
    let parag = document.createElement('P'); 
    parag.textContent = data; 
    helloDiv.appendChild(parag);
} 

async function submitPost (e) {
    
    e.preventDefault()
 
    let postData = createPost(); 
    //also get it back 
    //redirect to post.html 
    //append it 
    console.log("post data")
    console.log(postData)

    let response = await sendData(`${server}posts`, postData);
    let getResponse = await getData(`${server}posts/`) 
    console.log(getResponse)


}

function createPost(){
       //form data 
       let formTitle = document.getElementById('title').value;
       let name = document.getElementById('name').value;
       let story = document.getElementById('story').value;
   
       const postData = {
          title: formTitle,
          description: story,
          author_name: name
       }
       return postData;
}

async function sendData(url, data = {}){
    const options = {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify(data)
    };

    console.log("posting")
    // const response = await fetch()
    try{
        const response = await fetch(url, options)
        console.log(response);
        return response;
    } catch(err){console.log(err)} 
  
    // fetch(url, options)
    // .then(r => {console.log(r)})
    // .catch(console.warn)
 
}

async function getData(url){
    const options = {
        method: 'GET', 
        headers: {
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify(data)
    };

    const respose = await fetch(url, options);
} 


module.exports = {getHello, submitPost}
},{}],2:[function(require,module,exports){
const {submitPost, getHello} = require('./helpers');

const submitBtn = document.getElementById("submit-btn"); 
console.log(submitBtn)


submitBtn.addEventListener('click', submitPost)

getHello(); 


},{"./helpers":1}]},{},[2]);
