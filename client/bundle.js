(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const server = "http://localhost:3000/posts";
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
    console.log("POST ATTEMPT")
    //form data 
    let formTitle = document.getElementById('title').value;
    let name = document.getElementById('name').value;
    let story = document.getElementById('story').value;

    // console.log(response)
    
    //send through fetch
    //also get it back 
    //redirect to post.html 
    //append it 

    const postData = {
       title: formTitle,
       description: story,
       author_name: name
    }

    let response = await sendData("http://localhost:3000/posts", postData);
    console.log(response)


}

async function sendData(url, data = {}){
    console.log("FUNCTION SEND DATA")
    console.log(data)
    console.log(url)
    
    

    // const options = {
    //     method: 'POST', 
    //     cache: 'no-cache', 
    //     headers: {
    //         'Content-Type': 'application/json', 
    //         'Accept': 'application/json'
    //     },
    //     redirect: 'follow',
    //     referrerPolicy: 'no-referrer', 
    //     body: JSON.stringfy(data)
    // }
    const options = {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify(data)
    };

    // try{
    //     const response = await fetch(url, options);
    //     console.log(response)
    //     return response.json();

    // } catch(err){ console.warn }

    fetch(url, options)
    .then(r => r.json())
    .catch(console.warn)
 
}


module.exports = {getHello, submitPost}
},{}],2:[function(require,module,exports){
const {submitPost, getHello} = require('./helpers');

const submitBtn = document.getElementById("submit-btn"); 
console.log(submitBtn)


submitBtn.addEventListener('click', submitPost)

getHello(); 


},{"./helpers":1}]},{},[2]);
