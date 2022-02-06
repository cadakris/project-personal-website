var newDescriptionTribute = document.getElementById("tributeProject");
    newDescriptionTribute.addEventListener("click",changeDescription);

var newDescriptionCeramics = document.getElementById("commerceProject");    
    newDescriptionCeramics.addEventListener("click", changeDescription);


function changeDescription () {
    if (newDescriptionTribute === this) {
        document.getElementById("revealDescriptionTribute").innerHTML = "A tribute landing page for Anthony Bourdain utilizing HTML and CSS. This project is from freecodecamp.";
    } if (newDescriptionCeramics === this) {
        document.getElementById("revealDescriptionCeramics").innerHTML = "This is a service landing page for a local ceramasist in upstate New York. This project is from freecodecamp."
    }
}



const button = document.getElementById('tributeProject')
button.onclick = function () {
    var div = document.getElementById('projectDescription');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
    } else {
        div.style.display = 'block';
    }
};


const button2 = document.getElementById('commerceProject')
button2.onclick = function () {
    var div2 = document.getElementById('projectDescription2');
    if (div2.style.display !== 'none') {
        div2.style.display = 'none';
    } else {
        div2.style.display = 'block';
    }
};
