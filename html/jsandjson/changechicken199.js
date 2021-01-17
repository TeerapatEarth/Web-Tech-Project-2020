let chic2 = 0
let chic3 = 0
let chic4 = 0
function changechicken() {
    let type = document.getElementById("chickentype").value
    let pic = document.getElementById("imgchicken")
    if (type == 1) {
        pic.innerHTML = "<img src='https://cdn.1112.com/1112/public/images/products/maindish/mobile/itm116535.png' style='width: 45%;'>"
    }
    else if (type == 2) {
        pic.innerHTML = "<img src='https://cdn.1112.com/1112/public/images/products/maindish/mobile/itm116553.png' style='width: 45%;'>"
    }
    else {
        pic.innerHTML = "<img src='https://cdn.1112.com/1112/public/images/products/appetizer/mobile/Korean-Spicy-Wing-4pcs-resize2.png' style='width: 45%;'>"
    }
}

function chicken1() {
    let btn = document.getElementById("btnchic2")
    let btn2 = document.getElementById("btnchic3")
    let btn3 = document.getElementById("btnchic4")
    let pic = document.getElementById("imgchicken")
    let text = document.getElementById("infochicken")
    if (chic2 == 1) {
        btn.style = "color: white; background-color: black; width: 285px; height: 40px; border: none;"
        btn2.style = "color: white; background-color: black; width: 285px; height: 40px; border: none;"
        btn3.style = "color: white; background-color: black; width: 264px; height: 40px; border: none;"
        chic2 = 0
        chic3 = 0
        chic4 = 0
        pic.innerHTML = "<img src='https://cdn.1112.com/1112/public/images/products/maindish/mobile/itm116535.png' style='width: 45%;'>"
        text.innerHTML = "<p>เลือกปีกไก่ 4 ชิ้น</p>\
        <form action='' method='POST'>\
            <select name='chickentype' id='chickentype'\
                style='\
            background-color: black;color: white; border-radius: 10px;height: 50px;\
            padding: 3px;width: 80%; border: 0px; border: 2px solid hsl(139, 69%, 22%); margin-bottom: 50px;' onchange='changechicken()'>\
                <option value='1'>ปีกไก่ บาร์บีคิว 4 ชิ้น</option>\
                <option value='2'>ปีกไก่สไตล์เกาหลี 4 ชิ้น</option>\
                <option value='3'>ปีกไก่สไปซี่เกาหลี 4 ชิ้น</option>\
            </select>\
        </form>"
    }
}

function chicken2() {
    let btn = document.getElementById("btnchic2")
    let btn2 = document.getElementById("btnchic3")
    let btn3 = document.getElementById("btnchic4")
    let pic = document.getElementById("imgchicken")
    let text = document.getElementById("infochicken")
    btn.style = "color: white; background-color: hsl(139, 69%, 22%); width: 285px; height: 40px; border: none;"
    btn2.style = "color: white; background-color: black; width: 285px; height: 40px; border: none;"
    btn3.style = "color: white; background-color: black; width: 264px; height: 40px; border: none;"
    chic2 = 1
    chic3 = 0
    chic4 = 0
    pic.innerHTML = "<img src='https://cdn.1112.com/1112/public/images/Apr2019/TeamChicken/116721.png' style='width: 45%;'>"
    text.innerHTML = "<p>เลือกชิกเก้นสติ๊กส์</p>\
        <form action='' method='POST'>\
            <select name='chickentype' id='chickentype'\
                style='\
            background-color: black;color: white; border-radius: 10px;height:\
            50px;padding: 3px;width: 80%; border: 0px; border: 2px solid hsl(139, 69%, 22%); margin-bottom: 50px;' onchange='changechicken()'>\
                <option value='1'>ชิกเก้นสติ๊กส์</option>\
            </select>\
        </form>"
}

function chicken3() {
    let btn = document.getElementById("btnchic2")
    let btn2 = document.getElementById("btnchic3")
    let btn3 = document.getElementById("btnchic4")
    let pic = document.getElementById("imgchicken")
    let text = document.getElementById("infochicken")
    btn.style = "color: white; background-color: hsl(139, 69%, 22%); width: 285px; height: 40px; border: none;"
    btn2.style = "color: white; background-color: hsl(139, 69%, 22%); width: 285px; height: 40px; border: none;"
    btn3.style = "color: white; background-color: black; width: 264px; height: 40px; border: none;"
    chic3 = 1
    chic2 = 1
    chic4 = 0
    pic.innerHTML = "<img src='https://cdn.1112.com/1112/public/images/products/chicken/website/116715.png' style='width: 45%;'>"
    text.innerHTML = "<p>เลือกไก่ป๊อป (ขนาดเล็ก)</p>\
        <form action='' method='POST'>\
            <select name='chickentype' id='chickentype'\
                style='\
            background-color: black;color: white; border-radius: 10px;height:\
            50px;padding: 3px;width: 80%; border: 0px; border: 2px solid hsl(139, 69%, 22%); margin-bottom: 50px;' onchange='changechicken()'>\
                <option value='1'>ไก่ป๊อป (ขนาดเล็ก)</option>\
            </select>\
        </form>"
}

function chicken4() {
    let btn = document.getElementById("btnchic2")
    let btn2 = document.getElementById("btnchic3")
    let btn3 = document.getElementById("btnchic4")
    let pic = document.getElementById("imgchicken")
    let text = document.getElementById("infochicken")
    btn.style = "color: white; background-color: hsl(139, 69%, 22%); width: 285px; height: 40px; border: none;"
    btn2.style = "color: white; background-color: hsl(139, 69%, 22%); width: 285px; height: 40px; border: none;"
    btn3.style = "color: white; background-color: hsl(139, 69%, 22%); width: 264px; height: 40px; border: none;"
    chic3 = 1
    chic2 = 1
    chic4 = 1
    pic.innerHTML = "<img src='https://cdn.1112.com/1112/public/images/Apr2019/TeamChicken/116720.png' style='width: 45%;'>"
    text.innerHTML = "<p>เลือกนักเก็ตส์</p>\
        <form action='' method='POST'>\
            <select name='chickentype' id='chickentype'\
                style='\
            background-color: black;color: white; border-radius: 10px;height:\
            50px;padding: 3px;width: 80%; border: 0px; border: 2px solid hsl(139, 69%, 22%); margin-bottom: 50px;' onchange='changechicken()'>\
                <option value='1'>เลือกนักเก็ตส์</option>\
            </select>\
        </form>"
}

function back() {
    let btn = document.getElementById("btnchic2")
    let btn2 = document.getElementById("btnchic3")
    let btn3 = document.getElementById("btnchic4")
    let pic = document.getElementById("imgchicken")
    let text = document.getElementById("infochicken")
    console.log(chic2)
    console.log(chic3)
    console.log(chic4)
    if (chic4 == 1 && chic3 == 1 && chic2 == 1) {
        btn.style = "color: white; background-color: hsl(139, 69%, 22%); width: 285px; height: 40px; border: none;"
        btn2.style = "color: white; background-color: hsl(139, 69%, 22%); width: 285px; height: 40px; border: none;"
        btn3.style = "color: white; background-color: black; width: 264px; height: 40px; border: none;"
        chic3 = 1
        chic2 = 1
        chic4 = 0
        pic.innerHTML = "<img src='https://cdn.1112.com/1112/public/images/products/chicken/website/116715.png' style='width: 45%;'>"
        text.innerHTML = "<p>เลือกไก่ป๊อป (ขนาดเล็ก)</p>\
        <form action='' method='POST'>\
            <select name='chickentype' id='chickentype'\
                style='\
            background-color: black;color: white; border-radius: 10px;height:\
            50px;padding: 3px;width: 80%; border: 0px; border: 2px solid hsl(139, 69%, 22%); margin-bottom: 50px;' onchange='changechicken()'>\
                <option value='1'>ไก่ป๊อป (ขนาดเล็ก)</option>\
            </select>\
        </form>"
    }
    else if (chic3 == 1 && chic2 == 1 && chic4 == 0) {
        btn.style = "color: white; background-color: hsl(139, 69%, 22%); width: 284px; height: 40px; border: none;"
        btn2.style = "color: white; background-color: black; width: 284px; height: 40px; border: none;"
        chic2 = 1
        chic3 = 0
        chic4 = 0
        pic.innerHTML = "<img src='https://cdn.1112.com/1112/public/images/Apr2019/TeamChicken/116721.png' style='width: 45%;'>"
        text.innerHTML = "<p>เลือกชิกเก้นสติ๊กส์</p>\
        <form action='' method='POST'>\
            <select name='chickentype' id='chickentype'\
                style='\
            background-color: black;color: white; border-radius: 10px;height:\
            50px;padding: 3px;width: 80%; border: 0px; border: 2px solid hsl(139, 69%, 22%); margin-bottom: 50px;' onchange='changechicken()'>\
                <option value='1'>ชิกเก้นสติ๊กส์</option>\
            </select>\
        </form>"
    }
    else if (chic3 == 0 && chic2 == 1 && chic4 == 0) {
        btn.style = "color: white; background-color: black; width: 284px; height: 40px; border: none;"
        btn2.style = "color: white; background-color: black; width: 284px; height: 40px; border: none;"
        chic2 = 0
        chic3 = 0
        chic4 = 0
        pic.innerHTML = "<img src='https://cdn.1112.com/1112/public/images/products/maindish/mobile/itm116535.png' style='width: 45%;'>"
        text.innerHTML = "<p>เลือกปีกไก่ 4 ชิ้น</p>\
        <form action='' method='POST'>\
            <select name='chickentype' id='chickentype'\
                style='\
            background-color: black;color: white; border-radius: 10px;height: 50px;\
            padding: 3px;width: 80%; border: 0px; border: 2px solid hsl(139, 69%, 22%); margin-bottom: 50px;' onchange='changechicken()'>\
                <option value='1'>ปีกไก่ บาร์บีคิว 4 ชิ้น</option>\
                <option value='2'>ปีกไก่สไตล์เกาหลี 4 ชิ้น</option>\
                <option value='3'>ปีกไก่สไปซี่เกาหลี 4 ชิ้น</option>\
            </select>\
        </form>"
    }
}

