//side nav bar selecting , side menu bar
var sidenavbar= document.getElementById("sidenavbar");
var menuicon= document.getElementById("menuicon");
 var closenav=document.getElementById("closenav");

menuicon.addEventListener("click",function(){


    sidenavbar.style.right=0
})

closenav.addEventListener("click",function(){

    sidenavbar.style.right="-50%"
})


var productContainer = document.getElementById("product-container");

var input = document.getElementById("input-id");

var productList = document.querySelectorAll("#product-container > div");

input.addEventListener("keyup", function (event) {
    var enteredValue = event.target.value.toUpperCase();

    for (var count = 0; count < productList.length; count++) {
        var productName = productList[count].querySelector("p").textContent.toUpperCase();

        if (productName.indexOf(enteredValue) < 0) {
            productList[count].style.display = "none";
        } else {
            productList[count].style.display = "block";
        }
    }
});
