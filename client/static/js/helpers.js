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
    
    let response = await sendData(`${server}posts`, postData);
    
    const data = await response.json()
    
    // window.location.replace(`/posts`); //${response.author_name[path]}
    //let getResponse = await getData(`${server}posts`)
  //  console.log(getResponse)
    // location.replace("./posts.html");
    appendToView(data);
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
        console.log("Response to the client")
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
        body: JSON.stringify()
    };

    const respose = await fetch(url, options);
} 

function appendToView(data){

    // const title = data.title; 
    // const name = data.author_name;
    // const story = data.description; 

    let resultDiv = document.createElement('div'); 

    let header = document.createElement('h2'); 
    header.textContent = data.title; 
     
    let nameSlot = document.createElement('h3'); 
    nameSlot.textContent = data.author_name.name; 
     
    let storySlot = document.createElement('p'); 
    storySlot.textContent = data.description; 
    
    
    
    resultDiv.appendChild(header);
    resultDiv.appendChild(nameSlot);
    resultDiv.appendChild(storySlot);

    let resultSect = document.getElementById('result'); 
    resultSect.appendChild(resultDiv);
}


module.exports = {getHello, submitPost}