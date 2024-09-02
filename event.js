let divv = document.querySelectorAll(".bubble")
const image=document.getElementsByClassName("image")[0];

function ab(){
    const alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const i = Math.floor(Math.random() * 26);
    return alphabet.charAt(i)
}

function random(){
    const left = Math.floor(Math.random() * 9.7) * 10

    return { 
         left 
        }
}


function createNewElement() {
    const char = ab()
    const div = document.createElement("div");
    div.setAttribute("class", "bubble");

    let {left} = random();

    div.style.left = `${left}%`
    div.dataset.key = char;
    div.innerText = char;
    console.log(image)
    image.appendChild(div)
    divv = document.querySelectorAll(".bubble")

}


document.addEventListener("keyup", (event) => {
    for (let i = 0; i < divv.length; i++) {
        let Keys = divv[i].dataset.key
        if (Keys === event.key.toUpperCase()) {
            console.log("matched")
            divv[i].remove();
            break;
            
        }
    }
    createNewElement();
})