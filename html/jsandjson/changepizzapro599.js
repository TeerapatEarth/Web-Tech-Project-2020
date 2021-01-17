let pizzaurl = [0, "102217", "102203", "102723", "102226", "102216", "102210", "102201", "102204",
                "102724", "102209", "102228", "102208", "102722", "102212"]
let chicurl = [0, "https://cdn.1112.com/1112/public/images/products/NewYorker/116725.png", 
                "https://cdn.1112.com/1112/public/images/products/appetizer/mobile/itm116554.png", 
                "https://cdn.1112.com/1112/public/images/products/appetizer/mobile/Korean-Spicy-Wing-6pcs-resize2.png"]
let pizzanum2 = 0
let pizzanum3 = 0
let pizzanum4 = 0
function changepizza(){
    let pizzatype = document.getElementById("pizzatype").value
    let picpizza  = document.getElementById("img")
    picpizza.innerHTML = "<img src='https://cdn.1112.com/1112/public/images/products/pizza/JUL2020/"+pizzaurl[pizzatype]+".png' style='width: 80%;'></img>"
}

function changechic(){
    let chictype = document.getElementById("chictype").value
    let picchic = document.getElementById("img")
    if(chictype == 1){
        picchic.innerHTML = "<img src='"+chicurl[chictype]+"' style='width: 80%;'></img>"
    }
    else{
        picchic.innerHTML = "<img src='"+chicurl[chictype]+"' style='width: 60%;'></img>"
    }
}

function pizza1(){
    pizzanum2 = 0
    pizzanum3 = 0
    pizzanum4 = 0
    let pic = document.getElementById("img")
    let data = document.getElementById("info")
    let btn2 = document.getElementById("btn2")
    let btn3 = document.getElementById("btn3")
    let btn4 = document.getElementById("btn4")
    let ingre = document.getElementById("ingredients")
    pic.innerHTML = "<img src='https://cdn.1112.com/1112/public/images/products/pizza/JUL2020/102217.png' style='width: 80%;'></img>"
    btn2.style = "color: white; background-color: black; width: 285px; height: 40px; border: none;"
    btn3.style = "color: white; background-color: black; width: 285px; height: 40px; border: none;"
    btn4.style = "color: white; background-color: black; width: 264px; height: 40px; border: none;"
    data.innerHTML = "<p>เลือกขอบและขนาด</p><form action='' method='POST'><select name='crusttype'style='\
                    background-color: black;color: white; border-radius: 10px;height:50px;padding: 3px;\
                    width: 80%; border: 0px; border: 2px solid hsl(139, 69%, 22%); margin-bottom: 50px;'>\
                    <option value='1'>แป้งโฮมเมด สไตล์นิวยอร์ก 15 นิ้ว</option></select></form><p>เลือกซอส</p>\
                <form action='' method='POST'><select name='crusttype'style='background-color: black;color: white; border-radius: 10px;\
                height: 50px;padding: 3px;width: 80%; border: 0px; border: 2px solid hsl(139, 69%, 22%); margin-bottom: 50px;'>\
                <option value='1' disabled selected>ไม่มีซอส</option>\</select>\
                </form><p>เลือกหน้าอื่น</p><form action='' method='POST'><select name='crusttype' id='pizzatype'style='\
                    background-color: black;color: white; border-radius: 10px;height: 50px;\
                    padding: 3px;width: 80%; border: 0px; border: 2px solid hsl(139, 69%, 22%); margin-bottom: 50px;' onchange='changepizza()'>\
                        <option value='1'>ดับเบิ้ลเป๊ปเปอโรนี</option>\
                        <option value='2'>ไก่สามรส</option>\
                        <option value='3'>หมูรวมฮิต</option>\
                        <option value='4'>แฮมและปูอัด</option>\
                        <option value='5'>ดับเบิ้ลชีสพิซซ่า</option>\
                        <option value='6'>มีทเดอลุกซ์</option>\
                        <option value='7'>ซุปเปอร์เดอลุกซ์</option>\
                        <option value='8'>ฮาวายเอี้ยน</option>\
                        <option value='9'>ชิคเก้นเดอลุกซ์</option>\
                        <option value='10'>ค็อกเทลกุ้ง</option>\
                        <option value='11'>ซีฟู้ดเดอลุกซ์</option>\
                        <option value='12'>ซีฟู้ดค็อกเทล</option>\
                        <option value='13'>ซุปเปอร์ซีฟู้ด</option>\
                        <option value='14'>ต้มยำกุ้ง</option>\
                    </select>\
                </form>"
    ingre.innerHTML = "<div class='col-md-12' style='border-top: 1px solid gray;'>\
    <br>\
    <p>ปรับแต่งพิซซ่าด้วยตัวเอง &#8681;</p>\
    <p>* สามารถเพิ่มได้ไม่เกิน 7 ส่วน</p></div>"
}

function pizza2(){
    pizzanum2 = 1
    pizzanum3 = 0
    pizzanum4 = 0
    let pic = document.getElementById("img")
    let data = document.getElementById("info")
    let btn2 = document.getElementById("btn2")
    let btn3 = document.getElementById("btn3")
    let btn4 = document.getElementById("btn4")
    let ingre = document.getElementById("ingredients")
    pic.innerHTML = "<img src='https://cdn.1112.com/1112/public/images/products/NewYorker/116725.png' style='width: 80%;'></img>"
    btn2.style = "color: white; background-color: hsl(139, 69%, 22%);; width: 285px; height: 40px; border: none;"
    btn3.style = "color: white; background-color: black; width: 285px; height: 40px; border: none;"
    btn4.style = "color: white; background-color: black; width: 264px; height: 40px; border: none;"
    ingre.innerHTML = ""
    info.innerHTML = "<p>เลือกปีกไก่ 6 ชิ้น</p>\
    <form action='' method='POST'>\
        <select name='crusttype' id='chictype'\
            style='\
        background-color: black;color: white; border-radius: 10px;height: \
        50px;padding: 3px;width: 80%; border: 0px; border: 2px solid hsl(139, 69%, 22%); margin-bottom: 50px;' onchange='changechic()'>\
            <option value='1'>ปีกไก่ บัฟฟาโล 6 ชิ้น</option>\
            <option value='2'>ปีกไก่ทอด สไตล์เกาหลี 6 ชิ้น</option>\
            <option value='3'>ปีกไก่สไปซี่ 6 ชิ้น</option>\
        </select>\
    </form>"
}

function pizza3(){
    pizzanum2 = 1
    pizzanum3 = 1
    pizzanum4 = 0
    let pic = document.getElementById("img")
    let data = document.getElementById("info")
    let btn2 = document.getElementById("btn2")
    let btn3 = document.getElementById("btn3")
    let btn4 = document.getElementById("btn4")
    let ingre = document.getElementById("ingredients")
    pic.innerHTML = "<img src='https://cdn.1112.com/1112/public/images/products/appetizer/116816.png' style='width: 80%;'></img>"
    btn2.style = "color: white; background-color: hsl(139, 69%, 22%); width: 285px; height: 40px; border: none;"
    btn3.style = "color: white; background-color: hsl(139, 69%, 22%); width: 285px; height: 40px; border: none;"
    btn4.style = "color: white; background-color: black; width: 264px; height: 40px; border: none;"
    ingre.innerHTML = ""
    info.innerHTML = "<p>เลือกวาฟเฟิล ฟรายส์</p>\
    <form action='' method='POST'>\
        <select name='crusttype'\
            style='\
        background-color: black;color: white; border-radius: 10px;height: \
        50px;padding: 3px;width: 80%; border: 0px; border: 2px solid hsl(139, 69%, 22%); margin-bottom: 50px;' onchange='changechic()'>\
            <option value='1'>วาฟเฟิล ฟรายส์</option>\
        </select>\
    </form>"
}

function pizza4(){
    pizzanum2 = 1
    pizzanum3 = 1
    pizzanum4 = 1
    let pic = document.getElementById("img")
    let data = document.getElementById("info")
    let btn2 = document.getElementById("btn2")
    let btn3 = document.getElementById("btn3")
    let btn4 = document.getElementById("btn4")
    let ingre = document.getElementById("ingredients")
    pic.innerHTML = "<img src='https://cdn.1112.com/1112/public/images/products/appetizer/116525_1.png' style='width: 80%;'></img>"
    btn2.style = "color: white; background-color: hsl(139, 69%, 22%); width: 285px; height: 40px; border: none;"
    btn3.style = "color: white; background-color: hsl(139, 69%, 22%); width: 285px; height: 40px; border: none;"
    btn4.style = "color: white; background-color: hsl(139, 69%, 22%);; width: 264px; height: 40px; border: none;"
    ingre.innerHTML = ""
    info.innerHTML = "<p>เลือกขนมปังกระเทียม</p>\
    <form action='' method='POST'>\
        <select name='crusttype'\
            style='\
        background-color: black;color: white; border-radius: 10px;height: \
        50px;padding: 3px;width: 80%; border: 0px; border: 2px solid hsl(139, 69%, 22%); margin-bottom: 50px;' onchange='changechic()'>\
            <option value='1'>ขนมปังกระเทียม</option>\
        </select>\
    </form>"
}

function back(){
    let pic = document.getElementById("img")
    let data = document.getElementById("info")
    let btn2 = document.getElementById("btn2")
    let btn3 = document.getElementById("btn3")
    let btn4 = document.getElementById("btn4")
    let ingre = document.getElementById("ingredients")
    if (pizzanum2 == 1 && pizzanum3 == 1 && pizzanum4 == 1){
        pizzanum4 = 0
        pic.innerHTML = "<img src='https://cdn.1112.com/1112/public/images/products/appetizer/116816.png' style='width: 80%;'></img>"
        btn2.style = "color: white; background-color: hsl(139, 69%, 22%); width: 285px; height: 40px; border: none;"
        btn3.style = "color: white; background-color: hsl(139, 69%, 22%); width: 285px; height: 40px; border: none;"
        btn4.style = "color: white; background-color: black; width: 264px; height: 40px; border: none;"
        ingre.innerHTML = ""
        info.innerHTML = "<p>เลือกวาฟเฟิล ฟรายส์</p>\
        <form action='' method='POST'>\
            <select name='crusttype'\
            style='\
            background-color: black;color: white; border-radius: 10px;height: \
            50px;padding: 3px;width: 80%; border: 0px; border: 2px solid hsl(139, 69%, 22%); margin-bottom: 50px;' onchange='changechic()'>\
                <option value='1'>วาฟเฟิล ฟรายส์</option>\
            </select>\
        </form>"
    }
    else if(pizzanum2 == 1 && pizzanum3 == 1 && pizzanum4 == 0){
        pizzanum3 = 0
        pic.innerHTML = "<img src='https://cdn.1112.com/1112/public/images/products/NewYorker/116725.png' style='width: 80%;'></img>"
        btn2.style = "color: white; background-color: hsl(139, 69%, 22%);; width: 285px; height: 40px; border: none;"
        btn3.style = "color: white; background-color: black; width: 285px; height: 40px; border: none;"
        btn4.style = "color: white; background-color: black; width: 264px; height: 40px; border: none;"
        ingre.innerHTML = ""
        info.innerHTML = "<p>เลือกปีกไก่ 6 ชิ้น</p>\
        <form action='' method='POST'>\
            <select name='crusttype' id='chictype'\
                style='\
            background-color: black;color: white; border-radius: 10px;height: \
            50px;padding: 3px;width: 80%; border: 0px; border: 2px solid hsl(139, 69%, 22%); margin-bottom: 50px;' onchange='changechic()'>\
                <option value='1'>ปีกไก่ บัฟฟาโล 6 ชิ้น</option>\
                <option value='2'>ปีกไก่ทอด สไตล์เกาหลี 6 ชิ้น</option>\
                <option value='3'>ปีกไก่สไปซี่ 6 ชิ้น</option>\
            </select>\
        </form>"
    }
    else if (pizzanum2 == 1 && pizzanum3 == 0 && pizzanum4 == 0){
        pic.innerHTML = "<img src='https://cdn.1112.com/1112/public/images/products/pizza/JUL2020/102217.png' style='width: 80%;'></img>"
        btn2.style = "color: white; background-color: black; width: 285px; height: 40px; border: none;"
        btn3.style = "color: white; background-color: black; width: 285px; height: 40px; border: none;"
        btn4.style = "color: white; background-color: black; width: 264px; height: 40px; border: none;"
        data.innerHTML = "<p>เลือกขอบและขนาด</p><form action='' method='POST'><select name='crusttype'style='\
                    background-color: black;color: white; border-radius: 10px;height:50px;padding: 3px;\
                    width: 80%; border: 0px; border: 2px solid hsl(139, 69%, 22%); margin-bottom: 50px;'>\
                    <option value='1'>แป้งโฮมเมด สไตล์นิวยอร์ก 15 นิ้ว</option></select></form><p>เลือกซอส</p>\
                <form action='' method='POST'><select name='crusttype'style='background-color: black;color: white; border-radius: 10px;\
                height: 50px;padding: 3px;width: 80%; border: 0px; border: 2px solid hsl(139, 69%, 22%); margin-bottom: 50px;'>\
                <option value='1' disabled selected>ไม่มีซอส</option>\</select>\
                </form><p>เลือกหน้าอื่น</p><form action='' method='POST'><select name='crusttype' id='pizzatype'style='\
                    background-color: black;color: white; border-radius: 10px;height: 50px;\
                    padding: 3px;width: 80%; border: 0px; border: 2px solid hsl(139, 69%, 22%); margin-bottom: 50px;' onchange='changepizza()'>\
                        <option value='1'>ดับเบิ้ลเป๊ปเปอโรนี</option>\
                        <option value='2'>ไก่สามรส</option>\
                        <option value='3'>หมูรวมฮิต</option>\
                        <option value='4'>แฮมและปูอัด</option>\
                        <option value='5'>ดับเบิ้ลชีสพิซซ่า</option>\
                        <option value='6'>มีทเดอลุกซ์</option>\
                        <option value='7'>ซุปเปอร์เดอลุกซ์</option>\
                        <option value='8'>ฮาวายเอี้ยน</option>\
                        <option value='9'>ชิคเก้นเดอลุกซ์</option>\
                        <option value='10'>ค็อกเทลกุ้ง</option>\
                        <option value='11'>ซีฟู้ดเดอลุกซ์</option>\
                        <option value='12'>ซีฟู้ดค็อกเทล</option>\
                        <option value='13'>ซุปเปอร์ซีฟู้ด</option>\
                        <option value='14'>ต้มยำกุ้ง</option>\
                    </select>\
                </form>"
        ingre.innerHTML = "<div class='col-md-12' style='border-top: 1px solid gray;'>\
        <br>\
        <p>ปรับแต่งพิซซ่าด้วยตัวเอง &#8681;</p>\
        <p>* สามารถเพิ่มได้ไม่เกิน 7 ส่วน</p></div>"
    }
}