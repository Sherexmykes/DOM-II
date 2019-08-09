// Your code goes here
        const mainNav = document.querySelector('.main-navigation'); 
        mainNav.addEventListener('click', (evt)=>{alert('You Rock!!!')
        });


        const buttons = document.querySelectorAll(".btn");
        buttons[0].addEventListener("mouseover", (evt) => {
        event.target.style.backgroundColor = "black"
            
        });

        buttons[1].addEventListener("dblclick", (evt) => {
        event.target.style.backgroundColor ="blue" ;
        
        });

        buttons[2].addEventListener("mouseleave", (evt) => {
        event.target.style.backgroundColor ="yellow" ;
        
        });


        const dragImg = document.querySelector(".content-destination img");
        dragImg.addEventListener("drag", (evt) => {
        console.log("Really!! Drag me like A race car why dont you?");
            });
        

        window.addEventListener("load", function(evt) {
        alert("Locked and Loaded");
        });

        

const eventHandler = (event) => { event.stopPropagation() };