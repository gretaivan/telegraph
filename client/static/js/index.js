let helloDiv = document.getElementById('hello'); 

function getHello(){
    fetch('http://localhost:3000/')
        .then(r => r.text())
        .then(appendHello)
        .catch(console.warn)
}

function appendHello(data){
    console.log("I am trying to append")
    let parag = document.createElement('P'); 
    parag.textContent = data; 
    helloDiv.appendChild(parag);
} 

getHello();