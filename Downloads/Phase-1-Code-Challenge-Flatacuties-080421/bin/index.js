let animal = [];
let selectedAnimal = null;

fetchAnimals ()
function fetchAnimals(){
    fetch ("https://local/host:3000/characters", {
        method:"GET",
    })
    .then((response) => response.json())
    .then((data) => {
        animal = data;
        characterBarAnimals();
    });
function postAnimal(name, url){
    fetch("https://local/host:3000/characters", {
        method: "POST",
        body: JSON.stringify({name: name, url: url, votes: o})
    })
    .then((response)=> response.json())
    .then((data)=>{
        console.log(data);
        
    })
}

}