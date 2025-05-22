// const buttons = document.querySelectorAll(".button");
// const body = document.querySelector("body")

// buttons.forEach(function (button){
//     console.log(button)
//     button.addEventListener('click' ,   function(e){
//         console.log(e)
//         console.log(e.target)

//         if(e.target.id === "red"){
//             body.style.backgroundColor = e.target.id;
//         }

//         if(e.target.id === "blue"){
//             body.style.backgroundColor = e.target.id;
//         }

//         if(e.target.id === "yellow"){
//             body.style.backgroundColor = e.target.id;
//         }
//     })

// })


const getcolor = () =>{
       
    // hex code
    const randomNum = Math.floor(Math.random () * 16777215)
    const randomCode = "#" + randomNum.toString(16)
    document.body.style.background = randomCode;
    document.getElementById("color-code").innerText = randomCode;
}

document.getElementById("btn").addEventListener("click" , getcolor)