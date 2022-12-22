console.dir(document);

//selctionner un element:
let menuButton = document.querySelector("nav > svg");

//Ajouter un gestionnaire d'évenement a un élément
menuButton.addEventListener("click", function(){
    let menu = document.querySelector ('nav > ul');

    if(menu.style.left ==="0px"){
        menu.style.left = "-100%"

    }else{
        menu.style.left ="0px"
    }
})