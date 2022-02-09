var newDescriptionTribute = document.getElementById("tributeButton");
    newDescriptionTribute.addEventListener("click",changeDescription);

var newDescriptionCeramics = document.getElementById("ceramicsButton");    
    newDescriptionCeramics.addEventListener("click", changeDescription);


function changeDescription () {
    if (newDescriptionTribute === this) {
        document.getElementById("revealDescriptionTribute").innerHTML = "A tribute landing page for Anthony Bourdain utilizing HTML and CSS. This project is from freecodecamp.";
    } if (newDescriptionCeramics === this) {
        document.getElementById("revealDescriptionCeramics").innerHTML = "This is a service landing page for a local ceramasist in upstate New York. This project is from freecodecamp."
    }
}



const button = document.getElementById('tributeButton')
button.onclick = function () {
    var div = document.getElementById('revealDescriptionTribute');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
    } else {
        div.style.display = 'block';
    }
};


const button2 = document.getElementById('ceramicsButton')
button2.onclick = function () {
    var div2 = document.getElementById('revealDescriptionCeramics');
    if (div2.style.display !== 'none') {
        div2.style.display = 'none';
    } else {
        div2.style.display = 'block';
    }
};
