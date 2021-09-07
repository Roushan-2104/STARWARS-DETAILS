let btn = document.getElementById("btn").addEventListener("click", (e)=>{
    e.preventDefault();
    let gender = document.getElementById("gender")
    let name = document.getElementById("name");
    let img = document.getElementById("img");
    const random_num = Math.ceil(Math.random()*88);
    name.innerHTML = "<i>Loading...</i>";
    gender.innerHTML = "<i>Loading...</i>";
    img.innerHTML = "<i>Loading...</i>";
    fetch(`https://akabab.github.io/starwars-api/api/id/${random_num}.json`)
    .then(response => response.json())
    .then(data =>{
        setTimeout(() => {
            name.innerText = data["name"];
            gender.innerText = data["gender"];
            img.innerHTML = `<img src = ${data["image"]} width = 100% height = 100%/>`
        }, 500);
        
    })
    
})
