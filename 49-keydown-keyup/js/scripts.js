// keydown

document.addEventListener("keydown", function(event){

    

    if(event.key === "Enter"){
        console.log("apertou Enter");
    }
});


//keyup

document.addEventListener("keyup", function(e){

    if(event.key === "Enter"){
        console.log("soltou o Enter")
    }
});