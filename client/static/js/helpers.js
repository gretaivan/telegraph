const server = 'http://localhost:3000';
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
    let title = document.getElementById('title').value;
    let name = document.getElementById('name').value;
    let story = document.getElementById('story').value;

    let data = {title, name, story}
    let response = await sendData("http://localhost:3000/posts/", data);
    console.log(response)
    
    //send through fetch
    //also get it back 
    //redirect to post.html 
    //append it 


}

async function sendData(url, data = {}){
    console.log("FUNCTION SEND DATA")
    try{
        const response = await fetch(url, {
            method: 'POST', 
            cache: 'no-cache', 
            headers: {
                'Content-Type': 'application/json', 
                'Accept': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer', 
            body: JSON.stringfy(data)
        });
        return response.json()

    } catch(err){ console.warn }
    

 
}


module.exports = {getHello, submitPost}