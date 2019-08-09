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
        event.target.style.color="black"
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

//Realized I didn't have to put (evt) after lecture
        const bgChangeColor = document.querySelector('body');
        document.addEventListener('keydown', () => {
	      bgChangeColor.style.background = 'orange';
});


        
        const bigPara = document.querySelector('p');
        document.addEventListener('mousedown', () => {
            bigPara.style.fontSize = '5rem';
        });
        document.addEventListener('mouseup', () => {
            bigPara.style.fontSize = '2rem';
           
        });

        const navLinks = document.querySelectorAll("a");
        navLinks[0].addEventListener("click", function(evt) {
         event.target.style["font-weight"] = 'bold';
         event.preventDefault();
        });
       
        navLinks[1].addEventListener("click", function(evt) {
         event.target.style["font-weight"] = 'bold';
         event.preventDefault();
        });
    
     navLinks[2].addEventListener("click", function(evt) {
        event.target.style["font-weight"] = 'bold';
        event.preventDefault();
    });

    navLinks[3].addEventListener("click", function(evt) {
        event.target.style["font-weight"] = 'bold';
        event.preventDefault();
    });
    
   const header2 = document.querySelector('.text-content h2');
    header2.addEventListener('mouseover', (evt) => {
           event.target.style.color = 'green';
           event.stopPropagation();
    });