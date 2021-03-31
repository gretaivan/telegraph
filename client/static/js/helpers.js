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