let darkLightMode = document.getElementById("darkLightMode");
let light = "true";
let formC = document.querySelector(".centerBlock");
let formFillColor = document.querySelector(".formFill")
let stylesheet;
localStorage.setItem("flag","true");

function addCss(fileName) {

    let head = document.head;
    let link = document.createElement("link");
    link.classList.add(`${fileName}`);
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = `${fileName}.css`;
    head.append(link);
}
function Mode(){

    if (localStorage.getItem('flag') == "true") {
        // formC.classList.add("colorChange")
        try {
            formFillColor.style.color ="white"
            formC.style.color ="wheat"
            
        } catch (error) {
            
        }
        darkLightMode.src = "https://static-00.iconduck.com/assets.00/moon-icon-1024x1024-97v3uka3.png";
        addCss('style3');
        light = false;
        localStorage.setItem("flag",light);
        setTimeout(() => {
            
            stylesheet = document.querySelector(".style");
            stylesheet.remove();
        }, 100);
      
        // addCss('style.css', light);
    }
    else {
        try {
            
            formFillColor.style.color ="black"
            formC.style.color ="black"
        } catch (error) {
            
        }
        darkLightMode.src = "https://cdn-icons-png.flaticon.com/512/831/831682.png";
        addCss('style');
        light = true;
        localStorage.setItem("flag",light);
        setTimeout(() => {
            stylesheet = document.querySelector(".style3");
            stylesheet.remove()
       
            
        }, 10);
            
        


   
    }
}
darkLightMode.addEventListener("click",Mode)
// Mode();