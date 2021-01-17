let chic1 = 1
let chic2 = 0
function changechicken(){
    let type = document.getElementById("chickentype").value
    let pic = document.getElementById("imgchicken")
    if(type == 0){
        pic.innerHTML = "<img src='https://cdn.1112.com/1112/public/images/products/appetizer/mobile/itm116554.png' style='width: 45%;'>"
    }
    else if (type == 1){
        pic.innerHTML = "<img src='https://cdn.1112.com/1112/public/images/products/appetizer/mobile/Korean-Spicy-Wing-6pcs-resize2.png' style='width: 45%;'>"
    }
}

function chicken1(){
    let btn = document.getElementById("btnchic2")
    if(chic2 == 1){
        btn.style = "color: white; background-color: black; width: 284px; height: 40px; border: none;"
        chic2--
    }
}

function chicken2(){
    let btn = document.getElementById("btnchic2")
    if(chic2 == 0){
        btn.style = "color: white; background-color: hsl(139, 69%, 22%); width: 284px; height: 40px; border: none;"
        chic2++
    }
}