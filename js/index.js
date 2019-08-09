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


        window.addEventListener("load", function(evt) {
        alert("Locked and Loaded");
        });

        //Try to copy text
       const p = document.querySelectorAll('p');
        p.forEach((paragraph)=>{
            paragraph.addEventListener('copy',(evt)  =>{
                alert('Do not copy this text!');
            }) 
        }) 
        
        
        const  busImage = document.querySelector(".intro img")
        busImage.addEventListener('mouseenter',(evt) => {
            event.target.style.border = "solid"
         
        })

        const body = document.querySelector('body');
        body.addEventListener('wheel', function alertMeOnce(){
            alert("WEEEEEEEEEEEE!!!!!!");
            body.removeEventListener('wheel', alertMeOnce);
          });
          
        
const eventHandler = (event) => { event.stopPropagation() };