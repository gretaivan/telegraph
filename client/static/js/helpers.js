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
 
    let post = createPost(); 
    //also get it back 
    //redirect to post.html 
    //append it 

    let response = await sendData(`${server}/posts`, postData);

    console.log(response)


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
    fetch(url, options)
    .then(r => r.json())
    .catch(console.warn)
 
}


module.exports = {getHello, submitPost}