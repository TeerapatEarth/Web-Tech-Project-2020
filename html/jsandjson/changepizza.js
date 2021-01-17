let num = 0
let num2 = 0
let toggleM = 1
let toggleL = 0
let toggleingredients = 0
let pizzanum = 0
let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
function setnum(){
    let pizza = document.getElementById("pizzatype").value;
    pizzanum = pizza
    if(pizza == 0 || pizza == 10 || pizza == 12 || pizza == 13 || pizza == 15){
        num = 299
        num2 = num+100
    }
    else if(pizza == 1 || pizza == 2 || pizza == 6 || pizza == 8 || pizza == 11){
        num = 339
        num2 = num+100
    }
    else if (pizza == 3 || pizza == 4 || pizza == 5 || pizza == 7 || pizza == 9){
        num = 399
        num2 = num+100
    }
    else if (pizza == 14){
        num = 259
        num2 = num+100
    }
    console.log(num)
    console.log(num2)
}
function changesize(val){
    if (val == 0 && toggleM == 0){
        let butm = document.getElementById("sizem")
        let butl = document.getElementById("sizel")
        let priceselect = document.getElementById("price")
        let type1 = document.getElementById("item1")
        let type2 = document.getElementById("item2")
        let type3 = document.getElementById("item3")
        let type4 = document.getElementById("item4")
        butm.style = "border-radius: 50px; width: 30px; background-color: hsl(139, 69%, 22%); color: white; border: 2px solid white;"
        butl.style = "border-radius: 50px; width: 30px; background-color: grey; color: white; border: 2px solid gray;"
        type1.innerHTML = "พิซซ่าแป้งหนานุ่ม ถาดกลาง"
        type2.innerHTML = "พิซซ่าแป้งบางกรอบ ถาดกลาง"
        type3.innerHTML = "พิซซ่าขอบชีส ถาดกลาง"
        type4.innerHTML = "พิซซ่าขอบไส้กรอกและชีส ถาดกลาง"
        priceselect.innerHTML = "ราคา "+ num +" ฿"
        toggleM = 1
        toggleL = 0
    }
    else if(val == 1 && toggleL == 0){
        let butm = document.getElementById("sizem")
        let butl = document.getElementById("sizel")
        let priceselect = document.getElementById("price")
        let type1 = document.getElementById("item1")
        let type2 = document.getElementById("item2")
        let type3 = document.getElementById("item3")
        let type4 = document.getElementById("item4")
        butl.style = "border-radius: 50px; width: 30px; background-color: hsl(139, 69%, 22%); color: white; border: 2px solid white;"
        butm.style = "border-radius: 50px; width: 30px; background-color: grey; color: white; border: 2px solid gray;"
        type1.innerHTML = "พิซซ่าแป้งหนานุ่ม ถาดใหญ่"
        type2.innerHTML = "พิซซ่าแป้งบางกรอบ ถาดใหญ่"
        type3.innerHTML = "พิซซ่าขอบชีส ถาดใหญ่"
        type4.innerHTML = "พิซซ่าขอบไส้กรอกและชีส ถาดใหญ่"
        priceselect.innerHTML = "ราคา "+ num2 +" ฿"
        toggleM = 0
        toggleL = 1
    }
}
function changecrust(){
    let type = document.getElementById("crusttype").value;
    let priceselect = document.getElementById("price");
    console.log(count[0])
    if (pizzanum == 0){
        num = 299
        num2 = 399
        if (toggleM == 1){
            if(type == 1){
                num = 299 + count[0]*49
                num2 = num + 100 + count[0]*49
            }
            else if (type == 2){
                num = num - 60 + count[0]*49
                num2 = num2 - 40 + count[0]*49
            }
            else{
                num = num + 100 + count[0]*49
                num2 = num2 + 150 + count[0]*49
            }
            priceselect.innerHTML = "ราคา "+num+" ฿"
        }
        else{
            if(type == 1){
                num = 299 + count[0]*49
                num2 = 399 + count[0]*49
            }
            else if (type == 2){
                num = num - 60 + count[0]*49
                num2 = num2 - 40 + count[0]*49
            }
            else{
                num = num + 100 + count[0]*49
                num2 = num2 + 150 + count[0]*49
            }
            priceselect.innerHTML = "ราคา "+num2+" ฿"
        }
    }
    else if (pizzanum == 1){
        num = 339
        num2 = 439
        if (toggleM == 1){
            if(type == 1){
                num = num + count[0]*49
                num2 = num2 + count[0]*49
            }
            else if (type == 2){
                num = num - 60 + count[0]*49
                num2 = num2 - 40 + count[0]*49
            }
            else{
                num = num + 100 + count[0]*49
                num2 = num2 + 150 + count[0]*49
            }
            priceselect.innerHTML = "ราคา "+num+" ฿"
        }
        else{
            if(type == 1){
                num = num + count[0]*49
                num2 = num2 + count[0]*49
            }
            else if (type == 2){
                num = num - 60 + count[0]*49
                num2 = num2 - 40 + count[0]*49
            }
            else{
                num = num + 100 + count[0]*49
                num2 = num2 + 150 + count[0]*49
            }
            priceselect.innerHTML = "ราคา "+num2+" ฿"
        }
    }
    else if (pizzanum == 2){
        num = 339
        num2 = 439
        if (toggleM == 1){
            if(type == 1){
                num = num + count[0]*49
                num2 = num2 + count[0]*49
            }
            else if (type == 2){
                num = num - 60 + count[0]*49
                num2 = num2 - 40 + count[0]*49
            }
            else{
                num = num + 100 + count[0]*49
                num2 = num2 + 150 + count[0]*49
            }
            priceselect.innerHTML = "ราคา "+num+" ฿"
        }
        else{
            if(type == 1){
                num = num + count[0]*49
                num2 = num2 + count[0]*49
            }
            else if (type == 2){
                num = num - 60 + count[0]*49
                num2 = num2 - 40 + count[0]*49
            }
            else{
                num = num + 100 + count[0]*49
                num2 = num2 + 150 + count[0]*49
            }
            priceselect.innerHTML = "ราคา "+num2+" ฿"
        }
    }
    else if (pizzanum == 3){
        num = 399
        num2 = 499
        if (toggleM == 1){
            if(type == 1){
                num = num + count[0]*49
                num2 = num2 + count[0]*49
            }
            else if (type == 2){
                num = num - 60 + count[0]*49
                num2 = num2 - 40 + count[0]*49
            }
            else{
                num = num + 100 + count[0]*49
                num2 = num2 + 150 + count[0]*49
            }
            priceselect.innerHTML = "ราคา "+num+" ฿"
        }
        else{
            if(type == 1){
                num = num + count[0]*49
                num2 = num2 + count[0]*49
            }
            else if (type == 2){
                num = num - 60 + count[0]*49
                num2 = num2 - 40 + count[0]*49
            }
            else{
                num = num + 100 + count[0]*49
                num2 = num2 + 150 + count[0]*49
            }
            priceselect.innerHTML = "ราคา "+num2+" ฿"
        }
    }
    else if (pizzanum == 4){
        num = 399
        num2 = 499
        if (toggleM == 1){
            if(type == 1){
                num = num + count[0]*49
                num2 = num2 + count[0]*49
            }
            else if (type == 2){
                num = num - 60 + count[0]*49
                num2 = num2 - 40 + count[0]*49
            }
            else{
                num = num + 100 + count[0]*49
                num2 = num2 + 150 + count[0]*49
            }
            priceselect.innerHTML = "ราคา "+num+" ฿"
        }
        else{
            if(type == 1){
                num = num + count[0]*49
                num2 = num2 + count[0]*49
            }
            else if (type == 2){
                num = num - 60 + count[0]*49
                num2 = num2 - 40 + count[0]*49
            }
            else{
                num = num + 100 + count[0]*49
                num2 = num2 + 150 + count[0]*49
            }
            priceselect.innerHTML = "ราคา "+num2+" ฿"
        }
    }
    else if (pizzanum == 5){
        num = 399
        num2 = 499
        if (toggleM == 1){
            if(type == 1){
                num = num + count[0]*49
                num2 = num2 + count[0]*49
            }
            else if (type == 2){
                num = num - 60 + count[0]*49
                num2 = num2 - 40 + count[0]*49
            }
            else{
                num = num + 100 + count[0]*49
                num2 = num2 + 150 + count[0]*49
            }
            priceselect.innerHTML = "ราคา "+num+" ฿"
        }
        else{
            if(type == 1){
                num = num + count[0]*49
                num2 = num2 + count[0]*49
            }
            else if (type == 2){
                num = num - 60 + count[0]*49
                num2 = num2 - 40 + count[0]*49
            }
            else{
                num = num + 100 + count[0]*49
                num2 = num2 + 150 + count[0]*49
            }
            priceselect.innerHTML = "ราคา "+num2+" ฿"
        }
    }
    else if (pizzanum == 6){
        num = 339
        num2 = 439
        if (toggleM == 1){
            if(type == 1){
                num = num + count[0]*49
                num2 = num2 + count[0]*49
            }
            else if (type == 2){
                num = num - 60 + count[0]*49
                num2 = num2 - 40 + count[0]*49
            }
            else{
                num = num + 100 + count[0]*49
                num2 = num2 + 150 + count[0]*49
            }
            priceselect.innerHTML = "ราคา "+num+" ฿"
        }
        else{
            if(type == 1){
                num = num + count[0]*49
                num2 = num2 + count[0]*49
            }
            else if (type == 2){
                num = num - 60 + count[0]*49
                num2 = num2 - 40 + count[0]*49
            }
            else{
                num = num + 100 + count[0]*49
                num2 = num2 + 150 + count[0]*49
            }
            priceselect.innerHTML = "ราคา "+num2+" ฿"
        }
    }
    else if (pizzanum == 7){
        num = 399
        num2 = 499
        if (toggleM == 1){
            if(type == 1){
                num = num + count[0]*49
                num2 = num2 + count[0]*49
            }
            else if (type == 2){
                num = num - 60 + count[0]*49
                num2 = num2 - 40 + count[0]*49
            }
            else{
                num = num + 100 + count[0]*49
                num2 = num2 + 150 + count[0]*49
            }
            priceselect.innerHTML = "ราคา "+num+" ฿"
        }
        else{
            if(type == 1){
                num = num + count[0]*49
                num2 = num2 + count[0]*49
            }
            else if (type == 2){
                num = num - 60 + count[0]*49
                num2 = num2 - 40 + count[0]*49
            }
            else{
                num = num + 100 + count[0]*49
                num2 = num2 + 150 + count[0]*49
            }
            priceselect.innerHTML = "ราคา "+num2+" ฿"
        }
    }
    else if (pizzanum == 8){
        num = 339
        num2 = 439
        if (toggleM == 1){
            if(type == 1){
                num = num + count[0]*49
                num2 = num2 + count[0]*49
            }
            else if (type == 2){
                num = num - 60 + count[0]*49
                num2 = num2 - 40 + count[0]*49
            }
            else{
                num = num + 100 + count[0]*49
                num2 = num2 + 150 + count[0]*49
            }
            priceselect.innerHTML = "ราคา "+num+" ฿"
        }
        else{
            if(type == 1){
                num = num + count[0]*49
                num2 = num2 + count[0]*49
            }
            else if (type == 2){
                num = num - 60 + count[0]*49
                num2 = num2 - 40 + count[0]*49
            }
            else{
                num = num + 100 + count[0]*49
                num2 = num2 + 150 + count[0]*49
            }
            priceselect.innerHTML = "ราคา "+num2+" ฿"
        }
    }
    else if (pizzanum == 9){
        num = 399
        num2 = 499
        if (toggleM == 1){
            if(type == 1){
                num = num + count[0]*49
                num2 = num2 + count[0]*49
            }
            else if (type == 2){
                num = num - 60 + count[0]*49
                num2 = num2 - 40 + count[0]*49
            }
            else{
                num = num + 100 + count[0]*49
                num2 = num2 + 150 + count[0]*49
            }
            priceselect.innerHTML = "ราคา "+num+" ฿"
        }
        else{
            if(type == 1){
                num = num + count[0]*49
                num2 = num2 + count[0]*49
            }
            else if (type == 2){
                num = num - 60 + count[0]*49
                num2 = num2 - 40 + count[0]*49
            }
            else{
                num = num + 100 + count[0]*49
                num2 = num2 + 150 + count[0]*49
            }
            priceselect.innerHTML = "ราคา "+num2+" ฿"
        }
    }
    else if (pizzanum == 10){
        num = 299
        num2 = 399
        if (toggleM == 1){
            if(type == 1){
                num = 299 + count[0]*49
                num2 = num + 100 + count[0]*49
            }
            else if (type == 2){
                num = num - 60 + count[0]*49
                num2 = num2 - 40 + count[0]*49
            }
            else{
                num = num + 100 + count[0]*49
                num2 = num2 + 150 + count[0]*49
            }
            priceselect.innerHTML = "ราคา "+num+" ฿"
        }
        else{
            if(type == 1){
                num = 299 + count[0]*49
                num2 = 399 + count[0]*49
            }
            else if (type == 2){
                num = num - 60 + count[0]*49
                num2 = num2 - 40 + count[0]*49
            }
            else{
                num = num + 100 + count[0]*49
                num2 = num2 + 150 + count[0]*49
            }
            priceselect.innerHTML = "ราคา "+num2+" ฿"
        }
    }
    else if (pizzanum == 11){
        num = 339
        num2 = 439
        if (toggleM == 1){
            if(type == 1){
                num = num + count[0]*49
                num2 = num2 + count[0]*49
            }
            else if (type == 2){
                num = num - 60 + count[0]*49
                num2 = num2 - 40 + count[0]*49
            }
            else{
                num = num + 100 + count[0]*49
                num2 = num2 + 150 + count[0]*49
            }
            priceselect.innerHTML = "ราคา "+num+" ฿"
        }
        else{
            if(type == 1){
                num = num + count[0]*49
                num2 = num2 + count[0]*49
            }
            else if (type == 2){
                num = num - 60 + count[0]*49
                num2 = num2 - 40 + count[0]*49
            }
            else{
                num = num + 100 + count[0]*49
                num2 = num2 + 150 + count[0]*49
            }
            priceselect.innerHTML = "ราคา "+num2+" ฿"
        }
    }
    else if (pizzanum == 12){
        num = 299
        num2 = 399
        if (toggleM == 1){
            if(type == 1){
                num = 299 + count[0]*49
                num2 = num + 100 + count[0]*49
            }
            else if (type == 2){
                num = num - 60 + count[0]*49
                num2 = num2 - 40 + count[0]*49
            }
            else{
                num = num + 100 + count[0]*49
                num2 = num2 + 150 + count[0]*49
            }
            priceselect.innerHTML = "ราคา "+num+" ฿"
        }
        else{
            if(type == 1){
                num = 299 + count[0]*49
                num2 = 399 + count[0]*49
            }
            else if (type == 2){
                num = num - 60 + count[0]*49
                num2 = num2 - 40 + count[0]*49
            }
            else{
                num = num + 100 + count[0]*49
                num2 = num2 + 150 + count[0]*49
            }
            priceselect.innerHTML = "ราคา "+num2+" ฿"
        }
    }
    else if (pizzanum == 13){
        num = 299
        num2 = 399
        if (toggleM == 1){
            if(type == 1){
                num = num + count[0]*49
                num2 = num2 + count[0]*49
            }
            else if (type == 2){
                num = num - 60 + count[0]*49
                num2 = num2 - 40 + count[0]*49
            }
            else{
                num = num + 100 + count[0]*49
                num2 = num2 + 150 + count[0]*49
            }
            priceselect.innerHTML = "ราคา "+num+" ฿"
        }
        else{
            if(type == 1){
                num = num + count[0]*49
                num2 = num2 + count[0]*49
            }
            else if (type == 2){
                num = num - 60 + count[0]*49
                num2 = num2 - 40 + count[0]*49
            }
            else{
                num = num + 100 + count[0]*49
                num2 = num2 + 150 + count[0]*49
            }
            priceselect.innerHTML = "ราคา "+num2+" ฿"
        }
    }
    else if (pizzanum == 14){
        num = 259
        num2 = 369
        if (toggleM == 1){
            if(type == 1){
                num = num + count[0]*49
                num2 = num2 + count[0]*49
            }
            else if (type == 2){
                num = num - 60 + count[0]*49
                num2 = num2 - 40 + count[0]*49
            }
            else{
                num = num + 100 + count[0]*49
                num2 = num2 + 150 + count[0]*49
            }
            priceselect.innerHTML = "ราคา "+num+" ฿"
        }
        else{
            if(type == 1){
                num = num + count[0]*49
                num2 = num2 + count[0]*49
            }
            else if (type == 2){
                num = num - 60 + count[0]*49
                num2 = num2 - 40 + count[0]*49
            }
            else{
                num = num + 100 + count[0]*49
                num2 = num2 + 150 + count[0]*49
            }
            priceselect.innerHTML = "ราคา "+num2+" ฿"
        }
    }
    else if (pizzanum == 15){
        num = 299
        num2 = 399
        if (toggleM == 1){
            if(type == 1){
                num = num + count[0]*49
                num2 = num2 + count[0]*49
            }
            else if (type == 2){
                num = num - 60 + count[0]*49
                num2 = num2 - 40 + count[0]*49
            }
            else{
                num = num + 100 + count[0]*49
                num2 = num2 + 150 + count[0]*49
            }
            priceselect.innerHTML = "ราคา "+num+" ฿"
        }
        else{
            if(type == 1){
                num = num + count[0]*49
                num2 = num2 + count[0]*49
            }
            else if (type == 2){
                num = num - 60 + count[0]*49
                num2 = num2 - 40 + count[0]*49
            }
            else{
                num = num + 100 + count[0]*49
                num2 = num2 + 150 + count[0]*49
            }
            priceselect.innerHTML = "ราคา "+num2+" ฿"
        }
    }
}
function change() {
    let box = document.getElementById("pizzatype").value;
    let pic = document.getElementById("pizzaimg");
    let headselect = document.getElementById("head");
    let detailselect = document.getElementById("detail");
    let priceselect = document.getElementById("price");
    let type = document.getElementById("crusttype").value;
    if (box == 0) {
        pic.innerHTML = "<img src='https://cdn.1112.com/1112/public//images/products/pizza/JUL2020/102723.png'\
        style='width: 100%;'>"
        headselect.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;หมูรวมฮิต"
        detailselect.innerHTML = "แฮม, ไส้กรอกรมควัน, เป๊ปเปอโรนี, เห็ด, สับปะรด และซอสพิซซ่า"
        num = 299
        num2 = num + 100
        pizzanum = 0
        if(toggleM == 1){
            if(type == 1){
                num = 299
                num2 = num + 100
            }
            else if (type == 2){
                num -= 60
                num2 -= 40
            }
            else{
                num += 100
                num2 += 150
            }
            priceselect.innerHTML = "ราคา "+num+" ฿"
        }
        else{
            if(type == 1){
                num = 299
                num2 = 399
            }
            else if (type == 2){
                num -= 60
                num2 -= 40
            }
            else{
                num += 100
                num2 += 150
            }
            priceselect.innerHTML = "ราคา "+num2+" ฿"
        }
        itemingredients()
        resetcount()
    }
    else if (box == 1) {
        pic.innerHTML = "<img src='https://cdn.1112.com/1112/public//images/products/pizza/JUL2020/102724.png'\
         style='width: 100%;'>"
        headselect.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ชิคเก้นเดอลุกซ์"
        detailselect.innerHTML = "ไก่อบซอส, ไก่บาร์บีคิว, เห็ด, สับปะรด, หอมใหญ่, พริกหวาน และซอสพิซซ่า"
        num = 339
        num2 = num + 100
        pizzanum = 1
        if(toggleM == 1){
            if(type == 1){
                num = 339
                num2 = num + 100
            }
            else if (type == 2){
                num -= 60
                num2 -= 40
            }
            else{
                num += 100
                num2 += 150
            }
            priceselect.innerHTML = "ราคา "+num+" ฿"
        }
        else{
            if(type == 1){
                num = 339
                num2 = num + 100
            }
            else if (type == 2){
                num -= 60
                num2 -= 40
            }
            else{
                num += 100
                num2 += 150
            }
            priceselect.innerHTML = "ราคา "+num2+" ฿"
        }
        itemingredients()
        resetcount()
    }
    else if (box == 2) {
        pic.innerHTML = "<img src='https://cdn.1112.com/1112/public//images/products/pizza/JUL2020/102201.png'\
         style='width: 100%;'>"
        headselect.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ซุปเปอร์เดอลุกซ์"
        detailselect.innerHTML = "แฮม, เบคอน, เป๊ปเปอโรนี, ไส้กรอกรมควัน, ไส้กรอกอิตาเลี่ยน, เห็ด, สับปะรด, หอมใหญ่, พริกหวาน และซอสพิซซ่า"
        num = 339
        num2 = num + 100
        pizzanum = 2
        if(toggleM == 1){
            if(type == 1){
                num = 339
                num2 = num + 100
            }
            else if (type == 2){
                num -= 60
                num2 -= 40
            }
            else{
                num += 100
                num2 += 150
            }
            priceselect.innerHTML = "ราคา "+num+" ฿"
        }
        else{
            if(type == 1){
                num = 339
                num2 = num + 100
            }
            else if (type == 2){
                num -= 60
                num2 -= 40
            }
            else{
                num += 100
                num2 += 150
            }
            priceselect.innerHTML = "ราคา "+num2+" ฿"
        }
        itemingredients()
        resetcount()
    }
    else if (box == 3) {
        pic.innerHTML = "<img src='https://cdn.1112.com/1112/public//images/products/pizza/JUL2020/102228.png'\
         style='width: 100%;'>"
        headselect.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ซีฟู้ดเดอลุกซ์"
        detailselect.innerHTML = "กุ้ง, หอย, ปลาหมึก, ปูอัด, หอมใหญ่, พริกหวาน และซอสมารินาร่า"
        num = 399
        num2 = num + 100
        pizzanum = 3
        if(toggleM == 1){
            if(type == 1){
                num = 399
                num2 = num + 100
            }
            else if (type == 2){
                num -= 60
                num2 -= 40
            }
            else{
                num += 100
                num2 += 150
            }
            priceselect.innerHTML = "ราคา "+num+" ฿"
        }
        else{
            if(type == 1){
                num = 399
                num2 = num + 100
            }
            else if (type == 2){
                num -= 60
                num2 -= 40
            }
            else{
                num += 100
                num2 += 150
            }
            priceselect.innerHTML = "ราคา "+num2+" ฿"
        }
        itemingredients()
        resetcount()
    }
    else if (box == 4) {
        pic.innerHTML = "<img src='https://cdn.1112.com/1112/public//images/products/pizza/JUL2020/102208.png'\
         style='width: 100%;'>"
        headselect.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ซีฟู้ดค็อกเทล"
        detailselect.innerHTML = "กุ้ง, ปูอัด, แฮม, สับปะรด และซอสเทาซันไอส์แลนด์"
        num = 399
        num2 = num + 100
        pizzanum = 4
        if(toggleM == 1){
            if(type == 1){
                num = 399
                num2 = num + 100
            }
            else if (type == 2){
                num -= 60
                num2 -= 40
            }
            else{
                num += 100
                num2 += 150
            }
            priceselect.innerHTML = "ราคา "+num+" ฿"
        }
        else{
            if(type == 1){
                num = 399
                num2 = num + 100
            }
            else if (type == 2){
                num -= 60
                num2 -= 40
            }
            else{
                num += 100
                num2 += 150
            }
            priceselect.innerHTML = "ราคา "+num2+" ฿"
        }
        itemingredients()
        resetcount()
    }
    else if (box == 5) {
        pic.innerHTML = "<img src='https://cdn.1112.com/1112/public//images/products/pizza/JUL2020/102722.png'\
         style='width: 100%;'>"
        headselect.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ซุปเปอร์ซีฟู้ด"
        detailselect.innerHTML = "ปลาหมึก, กุ้งกระเทียมพริกไทย, โหระพา, หอมใหญ่, พริกหวาน และซอสมารินาร่า"
        num = 399
        num2 = num + 100
        pizzanum = 5
        if(toggleM == 1){
            if(type == 1){
                num = 399
                num2 = num + 100
            }
            else if (type == 2){
                num -= 60
                num2 -= 40
            }
            else{
                num += 100
                num2 += 150
            }
            priceselect.innerHTML = "ราคา "+num+" ฿"
        }
        else{
            if(type == 1){
                num = 399
                num2 = num + 100
            }
            else if (type == 2){
                num -= 60
                num2 -= 40
            }
            else{
                num += 100
                num2 += 150
            }
            priceselect.innerHTML = "ราคา "+num2+" ฿"
        }
        itemingredients()
        resetcount()
    }
    else if (box == 6) {
        pic.innerHTML = "<img src='https://cdn.1112.com/1112/public//images/products/pizza/JUL2020/102210.png'\
         style='width: 100%;'>"
        headselect.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;มีทเดอลุกซ์"
        detailselect.innerHTML = "แฮม, เบคอน, เป๊ปเปอโรนี, ไส้กรอกรมควัน, ไส้กรอกอิตาเลี่ยน, เบคอนไดซ์ และซอสพิซซ่า"
        num = 339
        num2 = num + 100
        pizzanum = 6
        if(toggleM == 1){
            if(type == 1){
                num = 339
                num2 = num + 100
            }
            else if (type == 2){
                num -= 60
                num2 -= 40
            }
            else{
                num += 100
                num2 += 150
            }
            priceselect.innerHTML = "ราคา "+num+" ฿"
        }
        else{
            if(type == 1){
                num = 339
                num2 = num + 100
            }
            else if (type == 2){
                num -= 60
                num2 -= 40
            }
            else{
                num += 100
                num2 += 150
            }
            priceselect.innerHTML = "ราคา "+num2+" ฿"
        }
        itemingredients()
        resetcount()
    }
    else if (box == 7) {
        pic.innerHTML = "<img src='https://cdn.1112.com/1112/public//images/products/pizza/JUL2020/102209.png'\
         style='width: 100%;'>"
        headselect.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ค็อกเทลกุ้ง"
        detailselect.innerHTML = "กุ้ง, เห็ด, สับปะรด, มะเขือเทศ และซอสเทาซันไอส์แลนด์"
        num = 399
        num2 = num + 100
        pizzanum = 7
        if(toggleM == 1){
            if(type == 1){
                num = 399
                num2 = num + 100
            }
            else if (type == 2){
                num -= 60
                num2 -= 40
            }
            else{
                num += 100
                num2 += 150
            }
            priceselect.innerHTML = "ราคา "+num+" ฿"
        }
        else{
            if(type == 1){
                num = 399
                num2 = num + 100
            }
            else if (type == 2){
                num -= 60
                num2 -= 40
            }
            else{
                num += 100
                num2 += 150
            }
            priceselect.innerHTML = "ราคา "+num2+" ฿"
        }
        itemingredients()
        resetcount()
    }
    else if (box == 8) {
        pic.innerHTML = "<img src='https://cdn.1112.com/1112/public//images/products/pizza/JUL2020/102225.png'\
         style='width: 100%;'>"
        headselect.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;เห็ดและมะเขือเทศ"
        detailselect.innerHTML = "ผักโขม, เห็ด, หอมใหญ่. มะเขือเทศ, พริกแดง, พริกเขียว และซอสพิซซ่า"
        num = 339
        num2 = num + 100
        pizzanum = 8
        if(toggleM == 1){
            if(type == 1){
                num = 339
                num2 = num + 100
            }
            else if (type == 2){
                num -= 60
                num2 -= 40
            }
            else{
                num += 100
                num2 += 150
            }
            priceselect.innerHTML = "ราคา "+num+" ฿"
        }
        else{
            if(type == 1){
                num = 339
                num2 = num + 100
            }
            else if (type == 2){
                num -= 60
                num2 -= 40
            }
            else{
                num += 100
                num2 += 150
            }
            priceselect.innerHTML = "ราคา "+num2+" ฿"
        }
        itemingredients()
        resetcount()
    }
    else if (box == 9) {
        pic.innerHTML = "<img src='https://cdn.1112.com/1112/public//images/products/pizza/JUL2020/102212.png'\
         style='width: 100%;'>"
        headselect.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ต้มยำกุ้ง"
        detailselect.innerHTML = "กุ้ง, ปลาหมึก, เห็ด และซอสต้มยำ"
        num = 399
        num2 = num + 100
        pizzanum = 9
        if(toggleM == 1){
            if(type == 1){
                num = 399
                num2 = num + 100
            }
            else if (type == 2){
                num -= 60
                num2 -= 40
            }
            else{
                num += 100
                num2 += 150
            }
            priceselect.innerHTML = "ราคา "+num+" ฿"
        }
        else{
            if(type == 1){
                num = 399
                num2 = num + 100
            }
            else if (type == 2){
                num -= 60
                num2 -= 40
            }
            else{
                num += 100
                num2 += 150
            }
            priceselect.innerHTML = "ราคา "+num2+" ฿"
        }
        itemingredients()
        resetcount()
    }
    else if (box == 10) {
        pic.innerHTML = "<img src='https://cdn.1112.com/1112/public//images/products/pizza/JUL2020/102226.png'\
         style='width: 100%;'>"
        headselect.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;แฮมและปูอัด"
        detailselect.innerHTML = "แฮม, ปูอัด, สับปะรด และซอสเทาซันไอส์แลนด์"
        num = 299
        num2 = num + 100
        pizanum = 10
        if(toggleM == 1){
            if(type == 1){
                num = 299
                num2 = num + 100
            }
            else if (type == 2){
                num -= 60
                num2 -= 40
            }
            else{
                num += 100
                num2 += 150
            }
            priceselect.innerHTML = "ราคา "+num+" ฿"
        }
        else{
            if(type == 1){
                num = 299
                num2 = num + 100
            }
            else if (type == 2){
                num -= 60
                num2 -= 40
            }
            else{
                num += 100
                num2 += 150
            }
            priceselect.innerHTML = "ราคา "+num2+" ฿"
        }
        itemingredients()
        resetcount()
    }
    else if (box == 11) {
        pic.innerHTML = "<img src='https://cdn.1112.com/1112/public//images/products/pizza/JUL2020/102204.png'\
         style='width: 100%;'>"
        headselect.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ฮาวายเอี้ยน"
        detailselect.innerHTML = "แฮม, เบคอน, สับปะรด และซอสพิซซ่า"
        num = 339
        num2 = num + 100
        pizzanum = 11
        if(toggleM == 1){
            if(type == 1){
                num = 339
                num2 = num + 100
            }
            else if (type == 2){
                num -= 60
                num2 -= 40
            }
            else{
                num += 100
                num2 += 150
            }
            priceselect.innerHTML = "ราคา "+num+" ฿"
        }
        else{
            if(type == 1){
                num = 339
                num2 = num + 100
            }
            else if (type == 2){
                num -= 60
                num2 -= 40
            }
            else{
                num += 100
                num2 += 150
            }
            priceselect.innerHTML = "ราคา "+num2+" ฿"
        }
        itemingredients()
        resetcount()
    }
    else if (box == 12) {
        pic.innerHTML = "<img src='https://cdn.1112.com/1112/public//images/products/pizza/JUL2020/102216.png'\
         style='width: 100%;'>"
        headselect.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ดับเบิ้ลชีสพิซซ่า"
        detailselect.innerHTML = "เพิ่มชีส 2 เท่าจากปกติ และซอสพิซซ่า"
        num = 299
        num2 = num + 100
        pizzanum = 12
        if(toggleM == 1){
            if(type == 1){
                num = 299
                num2 = num + 100
            }
            else if (type == 2){
                num -= 60
                num2 -= 40
            }
            else{
                num += 100
                num2 += 150
            }
            priceselect.innerHTML = "ราคา "+num+" ฿"
        }
        else{
            if(type == 1){
                num = 299
                num2 = num + 100
            }
            else if (type == 2){
                num -= 60
                num2 -= 40
            }
            else{
                num += 100
                num2 += 150
            }
            priceselect.innerHTML = "ราคา "+num2+" ฿"
        }
        itemingredients()
        resetcount()
    }
    else if (box == 13) {
        pic.innerHTML = "<img src='https://cdn.1112.com/1112/public//images/products/pizza/JUL2020/102203.png'\
         style='width: 100%;'>"
        headselect.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ไก่สามรส"
        detailselect.innerHTML = "ไก่บาร์บีคิว, ไก่เนยกระเทียม, ไก่อบซอส, เห็ด, พริกแดง พริกเขียว และซอสพิซซ่า"
        num = 299
        num2 = num + 100
        pizzanum = 13
        if(toggleM == 1){
            if(type == 1){
                num = 299
                num2 = num + 100
            }
            else if (type == 2){
                num -= 60
                num2 -= 40
            }
            else{
                num += 100
                num2 += 150
            }
            priceselect.innerHTML = "ราคา "+num+" ฿"
        }
        else{
            if(type == 1){
                num = 299
                num2 = num + 100
            }
            else if (type == 2){
                num -= 60
                num2 -= 40
            }
            else{
                num += 100
                num2 += 150
            }
            priceselect.innerHTML = "ราคา "+num2+" ฿"
        }
        itemingredients()
        resetcount()
    }
    else if (box == 14) {
        pic.innerHTML = "<img src='https://cdn.1112.com/1112/public//images/products/pizza/JUL2020/102216.png'\
         style='width: 100%;'>"
        headselect.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ฟรีสไตล์"
        detailselect.innerHTML = "ออกแบบพิซซ่า ได้ตามใจคุณ"
        num = 259
        num2 = num + 110
        pizzanum = 14
        if(toggleM == 1){
            if(type == 1){
                num = 259
                num2 = num + 110
            }
            else if (type == 2){
                num = 189
                num2 = 309
            }
            else{
                num = 359
                num2 = 519
            }
            priceselect.innerHTML = "ราคา "+num+" ฿"
        }
        else{
            if(type == 1){
                num = 259
                num2 = num + 110
            }
            else if (type == 2){
                num = 189
                num2 = 309
            }
            else{
                num = 359
                num2 = 519
            }
            priceselect.innerHTML = "ราคา "+num2+" ฿"
        }
        itemingredients()
        resetcount()
    }
    else if (box == 15) {
        pic.innerHTML = "<img src='https://cdn.1112.com/1112/public//images/products/pizza/JUL2020/102217.png'\
         style='width: 100%;'>"
        headselect.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ดับเบิ้ลเป๊ปเปอโรนี"
        detailselect.innerHTML = "เป๊ปเปอโรนี และซอสพิซซ่า"
        num = 299
        num2 = num + 100
        pizzanum = 15
        if(toggleM == 1){
            if(type == 1){
                num = 299
                num2 = num + 100
            }
            else if (type == 2){
                num -= 60
                num2 -= 40
            }
            else{
                num += 100
                num2 += 150
            }
            priceselect.innerHTML = "ราคา "+num+" ฿"
        }
        else{
            if(type == 1){
                num = 299
                num2 = num + 100
            }
            else if (type == 2){
                num -= 60
                num2 -= 40
            }
            else{
                num += 100
                num2 += 150
            }
            priceselect.innerHTML = "ราคา "+num2+" ฿"
        }
        itemingredients()
        resetcount()
    }
}
function ingredients(){
    let sauce = document.getElementById("headsauce")
    let saccese = document.getElementById("sauceselect")
    let headin = document.getElementById("headingredients")
    let headin2 = document.getElementById("headingredients2")
    let btn = document.getElementById("buttonpizza2")
    if(toggleingredients == 0 && pizzanum != 9){

        sauce.innerHTML = "\
        <div style='margin-left: 20px;'>\
            <p style='font-size: 20px;'>เลือกซอส</p>\
        </div>\
        <hr style='border: 1px solid gray; width: 90%;'>"

        saccese.innerHTML = "\
        <div style='margin-left: 20px;'>\
                <form action='' method='POST'>\
                    <select style='background-color: black;color: white; border-radius: 10px;\
                    height: 50px;padding: 3px;width: 250px; border: 0px; border: 2px solid hsl(139, 69%, 22%); margin-bottom: 20px;'>\
                        <option>พิซซ่าซอส</option>\
                        <option>ซอสมารีนาร่า</option>\
                        <option>ซอสเทาซันไอส์แลนด์</option>\
                    </select>\
                </form>\
            </div>"

        headin.innerHTML = "\
        <div style='margin-left: 20px;'>\
                <p style='font-size: 20px;'>ส่วนผสมหลัก</p>\
            </div>\
            <hr style='border: 1px solid gray; width: 87%;'></hr>"
        
        headin2.innerHTML ="\
        <div style='margin-left: 20px;'>\
                <p style='font-size: 20px;'>ส่วนผสมอื่นๆ</p>\
            </div>\
            <hr style='border: 1px solid gray; width: 87%;'></hr>"

        btn.innerHTML = "\
        <div class='col-md-8'></div>\
            <div class='col-md-4'>\
                <a href='pizza2.html'><button style='margin-top: 40px; background-color: hsl(139, 69%, 22%);color: white; border: 0px; border-radius: 10px; width: 300px;\
                height: 40px;'>เลือกพิซซ่าถาดสอง</button></a>\
            </div>"
        toggleingredients = 1
    }
    else if (pizzanum == 9){
        toggleingredients = toggleingredients
    }
    else{
        sauce.innerHTML = ""
        saccese.innerHTML = ""
        headin.innerHTML = ""
        headin2.innerHTML = ""
        btn.innerHTML = ""
        toggleingredients = 0
    }
    itemingredients()
}
function itemingredients(){
    let in1 = document.getElementById("itemmain")
    let in2 = document.getElementById("itemanother")
    let sauce = document.getElementById("headsauce")
    let saccese = document.getElementById("sauceselect")
    let headin = document.getElementById("headingredients")
    let headin2 = document.getElementById("headingredients2")
    let btn = document.getElementById("buttonpizza2")
    in1.innerHTML = ""
    in2.innerHTML = ""
    for (let i = 1; i<=20; i++){
        if(count[i] == 0){
            count[i] = ""
        }
    }
    if(pizzanum == 0 && toggleingredients == 1){
        let ingredientpic = ["Mushrooms", "Pepperoni", "Smoked-Pork-Sausage", "Capsicum", "Onions", "Pineapple", "Sliced-Ham",
                            "Italian-Sausage", "Anchovies", "Bacon-Bits", "GarlicButterChicken", "Prawn", "RoastedChicken",
                            "Sliced-Bacon", "BBQChicken", "Crab-Stick", "Mozzarella-Cheese", "Red-&-Green-Chilli", "Seafood", "Tomato"]
        let ingredientstext = ["เห็ด", "เป๊ปเปอโรนี", "ไส้กรอกหมู", "พริกหวาน", "หอมใหญ่", "สับปะรด", "แฮมแผ่น", "ไส้กรอกอิตาเลียน", "แอนโชวี่",
                            "เบคอนบิทส์", "ไก่เนยกระเทียม", "กุ้งสด", "ไก่ย่าง", "เบคอนแผ่น", "ไก่หมักซอส", "ปูอัด", "ชีสมอสซาเรลล่า", "พริกแดง พริกเขียว", "ซีฟู้ดรวม", "มะเขือเทศ"]
        for (let i = 1; i <= 7;i++){
            in1.innerHTML += "\
            <div class='col-md-2' id='cardmargin'>\
                    <div class='card' id='ingredients'>\
                        <img class='imgingredients' src='https://cdn.1112.com/1112/public/images/products/ingredients/website/"+ingredientpic[i-1]+".jpg'>\
                        <p style='margin: 20px auto 0px auto; font-size: 15px'>"+ingredientstext[i-1]+"</p>\
                        <p style='margin-left: auto; margin-right: auto; margin-top: 20px;'>49 ฿ / ส่วน</p>\
                        <div class='row'>\
                            <div class='col-md-1'>\
                                <button onclick='disingredients("+i+")'style='border-radius: 50%; width: 30px; background-color: hsl(139, 69%, 22%);\
                                border: 0px; height: 30px;'>-</button>\
                            </div>\
                            <div class='col-md-5'><p id='numitem"+i+"' style='margin-left: 25px;'>"+count[i]+"<p></div>\
                            <div class='col-md-1'>\
                                <button onclick='addingredients("+i+")' style='border-radius: 50%; width: 30px; background-color:hsl(139, 69%, 22%);\
                                 border: 0px; height: 30px;'>+</button></div></div></div></div>"
        }
        for (let i = 8; i <= 20;i++){
            in2.innerHTML += "\
            <div class='col-md-2' id='cardmargin'>\
                    <div class='card' id='ingredients'>\
                        <img class='imgingredients' src='https://cdn.1112.com/1112/public/images/products/ingredients/website/"+ingredientpic[i-1]+".jpg'>\
                        <p style='margin: 20px auto 0px auto; font-size: 15px;'>"+ingredientstext[i-1]+"</p>\
                        <p style='margin-left: auto; margin-right: auto; margin-top: 20px;'>49 ฿ / ส่วน</p>\
                        <div class='row'>\
                            <div class='col-md-1'>\
                                <button onclick='disingredients("+i+")'style='border-radius: 50%; width: 30px; background-color: hsl(139, 69%, 22%);\
                                border: 0px; height: 30px;'>-</button>\
                            </div>\
                            <div class='col-md-5'><p id='numitem"+i+"' style='margin-left: 25px;'>"+count[i]+"<p></div>\
                            <div class='col-md-1'>\
                                <button onclick='addingredients("+i+")' style='border-radius: 50%; width: 30px; background-color:hsl(139, 69%, 22%);\
                                 border: 0px; height: 30px;'>+</button></div></div></div></div>"
        }
    }
    else if (pizzanum == 1 && toggleingredients == 1){
        let ingredientpic = ["Mushrooms", "RoastedChicken", "BBQChicken", "Capsicum", "Onions", "Pineapple", "Italian-Sausage", "Anchovies", 
                            "Bacon-Bits", "GarlicButterChicken", "Pepperoni", "Prawn", "Sliced-Bacon", "Smoked-Pork-Sausage", "Crab-Stick",
                            "Mozzarella-Cheese", "Red-&-Green-Chilli", "Seafood", "Sliced-Ham", "Tomato"]
        let ingredientstext = ["เห็ด", "ไก่ย่าง", "ไก่หมักซอส", "พริกหวาน", "หอมใหญ่", "สับปะรด", "ไส้กรอกอิตาเลียน", "แอนโชวี่", "เบคอนบิทส์", "ไก่เนยกระเทียม",
                            "เป๊ปเปอโรนี", "กุ้งสด", "เบคอนแผ่น", "ไส้กรอกหมู", "ปูอัด", "ชีสมอสซาเรลล่า", "พริกแดง พริกเขียว", "ซีฟู้ดรวม", "แฮมแผ่น", "มะเขือเทศ"]
        for (let i = 1; i <= 6;i++){
            in1.innerHTML += "\
            <div class='col-md-2' id='cardmargin'>\
                    <div class='card' id='ingredients'>\
                        <img class='imgingredients' src='https://cdn.1112.com/1112/public/images/products/ingredients/website/"+ingredientpic[i-1]+".jpg'>\
                        <p style='margin: 20px auto 0px auto; font-size: 15px'>"+ingredientstext[i-1]+"</p>\
                        <p style='margin-left: auto; margin-right: auto; margin-top: 20px;'>49 ฿ / ส่วน</p>\
                        <div class='row'>\
                            <div class='col-md-1'>\
                                <button onclick='disingredients("+i+")'style='border-radius: 50%; width: 30px; background-color: hsl(139, 69%, 22%);\
                                border: 0px; height: 30px;'>-</button>\
                            </div>\
                            <div class='col-md-5'><p id='numitem"+i+"' style='margin-left: 25px;'>"+count[i]+"<p></div>\
                            <div class='col-md-1'>\
                                <button onclick='addingredients("+i+")' style='border-radius: 50%; width: 30px; background-color:hsl(139, 69%, 22%);\
                                 border: 0px; height: 30px;'>+</button></div></div></div></div>"
        }
        for (let i = 7; i <= 20;i++){
            in2.innerHTML += "\
            <div class='col-md-2' id='cardmargin'>\
                    <div class='card' id='ingredients'>\
                        <img class='imgingredients' src='https://cdn.1112.com/1112/public/images/products/ingredients/website/"+ingredientpic[i-1]+".jpg'>\
                        <p style='margin: 20px auto 0px auto; font-size: 15px;'>"+ingredientstext[i-1]+"</p>\
                        <p style='margin-left: auto; margin-right: auto; margin-top: 20px;'>49 ฿ / ส่วน</p>\
                        <div class='row'>\
                            <div class='col-md-1'>\
                                <button onclick='disingredients("+i+")'style='border-radius: 50%; width: 30px; background-color: hsl(139, 69%, 22%);\
                                border: 0px; height: 30px;'>-</button>\
                            </div>\
                            <div class='col-md-5'><p id='numitem"+i+"' style='margin-left: 25px;'>"+count[i]+"<p></div>\
                            <div class='col-md-1'>\
                                <button onclick='addingredients("+i+")' style='border-radius: 50%; width: 30px; background-color:hsl(139, 69%, 22%);\
                                 border: 0px; height: 30px;'>+</button></div></div></div></div>"
        }
    }
    else if (pizzanum == 2 && toggleingredients == 1){
        let ingredientpic = ["Italian-Sausage", "Mushrooms", "Pepperoni", "Sliced-Bacon", "Smoked-Pork-Sausage", "Capsicum","Mozzarella-Cheese",
                            "Onions", "Pineapple", "Sliced-Ham", "Anchovies", "Bacon-Bits", "GarlicButterChicken", "Prawn", "RoastedChicken",
                            "BBQChicken", "Crab-Stick", "Red-&-Green-Chilli", "Seafood", "Tomato"]
        let ingredientstext = ["ไส้กรอกอิตาเลียน", "เห็ด", "เป๊ปเปอโรนี", "เบคอนแผ่น", "ไส้กรอกหมู", "พริกหวาน", "ชีสมอสซาเรลล่า", "หอมใหญ่", "สับปะรด", "แฮมแผ่น",
                            "แอนโชวี่", "เบคอนบิทส์", "ไก่เนยกระเทียม", "กุ้งสด", "ไก่ย่าง", "ไก่หมักซอส", "ปูอัด", "พริกแดง พริกเขียว", "ซีฟู้ดรวม", "มะเขือเทศ"]
        for (let i = 1; i <= 10;i++){
            in1.innerHTML += "\
            <div class='col-md-2' id='cardmargin'>\
                    <div class='card' id='ingredients'>\
                        <img class='imgingredients' src='https://cdn.1112.com/1112/public/images/products/ingredients/website/"+ingredientpic[i-1]+".jpg'>\
                        <p style='margin: 20px auto 0px auto; font-size: 15px'>"+ingredientstext[i-1]+"</p>\
                        <p style='margin-left: auto; margin-right: auto; margin-top: 20px;'>49 ฿ / ส่วน</p>\
                        <div class='row'>\
                            <div class='col-md-1'>\
                                <button onclick='disingredients("+i+")'style='border-radius: 50%; width: 30px; background-color: hsl(139, 69%, 22%);\
                                border: 0px; height: 30px;'>-</button>\
                            </div>\
                            <div class='col-md-5'><p id='numitem"+i+"' style='margin-left: 25px;'>"+count[i]+"<p></div>\
                            <div class='col-md-1'>\
                                <button onclick='addingredients("+i+")' style='border-radius: 50%; width: 30px; background-color:hsl(139, 69%, 22%);\
                                 border: 0px; height: 30px;'>+</button></div></div></div></div>"
        }
        for (let i = 11; i <= 20;i++){
            in2.innerHTML += "\
            <div class='col-md-2' id='cardmargin'>\
                    <div class='card' id='ingredients'>\
                        <img class='imgingredients' src='https://cdn.1112.com/1112/public/images/products/ingredients/website/"+ingredientpic[i-1]+".jpg'>\
                        <p style='margin: 20px auto 0px auto; font-size: 15px;'>"+ingredientstext[i-1]+"</p>\
                        <p style='margin-left: auto; margin-right: auto; margin-top: 20px;'>49 ฿ / ส่วน</p>\
                        <div class='row'>\
                            <div class='col-md-1'>\
                                <button onclick='disingredients("+i+")'style='border-radius: 50%; width: 30px; background-color: hsl(139, 69%, 22%);\
                                border: 0px; height: 30px;'>-</button>\
                            </div>\
                            <div class='col-md-5'><p id='numitem"+i+"' style='margin-left: 25px;'>"+count[i]+"<p></div>\
                            <div class='col-md-1'>\
                                <button onclick='addingredients("+i+")' style='border-radius: 50%; width: 30px; background-color:hsl(139, 69%, 22%);\
                                 border: 0px; height: 30px;'>+</button></div></div></div></div>"
        }
    }
    else if (pizzanum == 3 && toggleingredients == 1){
        let ingredientpic = ["Prawn", "Capsicum", "Crab-Stick", "Mozzarella-Cheese", "Onions", "Seafood", "Italian-Sausage", "Anchovies",
                            "Bacon-Bits", "GarlicButterChicken", "Mushrooms", "Pepperoni", "RoastedChicken", "Sliced-Bacon", "Smoked-Pork-Sausage",
                            "BBQChicken", "Pineapple", "Red-&-Green-Chilli", "Sliced-Ham", "Tomato"]
        let ingredientstext = ["กุ้งสด", "พริกหวาน", "ปูอัด", "ชีสมอสซาเรลล่า", "หอมใหญ่", "ซีฟู้ดรวม", "ไส้กรอกอิตาเลียน", "แอนโชวี่", "เบคอนบิทส์",
                            "ไก่เนยกระเทียม", "เห็ด", "เป๊ปเปอโรนี", "ไก่ย่าง", "เบคอนแผ่น", "ไส้กรอกหมู", "ไก่หมักซอส", "สับปะรด", "พริกแดง พริกเขียว",
                            "แฮมแผ่น", "มะเขือเทศ"]
        for (let i = 1; i <= 6;i++){
            in1.innerHTML += "\
            <div class='col-md-2' id='cardmargin'>\
                    <div class='card' id='ingredients'>\
                        <img class='imgingredients' src='https://cdn.1112.com/1112/public/images/products/ingredients/website/"+ingredientpic[i-1]+".jpg'>\
                        <p style='margin: 20px auto 0px auto; font-size: 15px'>"+ingredientstext[i-1]+"</p>\
                        <p style='margin-left: auto; margin-right: auto; margin-top: 20px;'>49 ฿ / ส่วน</p>\
                        <div class='row'>\
                            <div class='col-md-1'>\
                                <button onclick='disingredients("+i+")'style='border-radius: 50%; width: 30px; background-color: hsl(139, 69%, 22%);\
                                border: 0px; height: 30px;'>-</button>\
                            </div>\
                            <div class='col-md-5'><p id='numitem"+i+"' style='margin-left: 25px;'>"+count[i]+"<p></div>\
                            <div class='col-md-1'>\
                                <button onclick='addingredients("+i+")' style='border-radius: 50%; width: 30px; background-color:hsl(139, 69%, 22%);\
                                 border: 0px; height: 30px;'>+</button></div></div></div></div>"
        }
        for (let i = 7; i <= 20;i++){
            in2.innerHTML += "\
            <div class='col-md-2' id='cardmargin'>\
                    <div class='card' id='ingredients'>\
                        <img class='imgingredients' src='https://cdn.1112.com/1112/public/images/products/ingredients/website/"+ingredientpic[i-1]+".jpg'>\
                        <p style='margin: 20px auto 0px auto; font-size: 15px;'>"+ingredientstext[i-1]+"</p>\
                        <p style='margin-left: auto; margin-right: auto; margin-top: 20px;'>49 ฿ / ส่วน</p>\
                        <div class='row'>\
                            <div class='col-md-1'>\
                                <button onclick='disingredients("+i+")'style='border-radius: 50%; width: 30px; background-color: hsl(139, 69%, 22%);\
                                border: 0px; height: 30px;'>-</button>\
                            </div>\
                            <div class='col-md-5'><p id='numitem"+i+"' style='margin-left: 25px;'>"+count[i]+"<p></div>\
                            <div class='col-md-1'>\
                                <button onclick='addingredients("+i+")' style='border-radius: 50%; width: 30px; background-color:hsl(139, 69%, 22%);\
                                 border: 0px; height: 30px;'>+</button></div></div></div></div>"
        }
    }
    else if (pizzanum == 4 && toggleingredients == 1) {
        let ingredientpic = ["Prawn", "Crab-Stick", "Mozzarella-Cheese", "Pineapple", "Sliced-Ham", "Italian-Sausage", "Anchovies", "Bacon-Bits",
            "GarlicButterChicken", "Mushrooms", "Pepperoni", "RoastedChicken", "Sliced-Bacon", "Smoked-Pork-Sausage",
            "BBQChicken", "Capsicum", "Onions", "Red-&-Green-Chilli", "Seafood", "Tomato"]
        let ingredientstext = ["กุ้งสด", "ปูอัด", "ชีสมอสซาเรลล่า", "สับปะรด", "แฮมแผ่น", "ไส้กรอกอิตาเลียน", "แอนโชวี่", "เบคอนบิทส์", "ไก่เนยกระเทียม",
            "เห็ด", "เป๊ปเปอโรนี", "ไก่ย่าง", "เบคอนแผ่น", "ไส้กรอกหมู", "ไก่หมักซอส", "พริกหวาน", "หอมใหญ่", "พริกแดง พริกเขียว",
            "ซีฟู้ดรวม", "มะเขือเทศ"]
        for (let i = 1; i <= 5; i++) {
            in1.innerHTML += "\
            <div class='col-md-2' id='cardmargin'>\
                    <div class='card' id='ingredients'>\
                        <img class='imgingredients' src='https://cdn.1112.com/1112/public/images/products/ingredients/website/"+ ingredientpic[i - 1] + ".jpg'>\
                        <p style='margin: 20px auto 0px auto; font-size: 15px'>"+ ingredientstext[i - 1] + "</p>\
                        <p style='margin-left: auto; margin-right: auto; margin-top: 20px;'>49 ฿ / ส่วน</p>\
                        <div class='row'>\
                            <div class='col-md-1'>\
                                <button onclick='disingredients("+ i + ")'style='border-radius: 50%; width: 30px; background-color: hsl(139, 69%, 22%);\
                                border: 0px; height: 30px;'>-</button>\
                            </div>\
                            <div class='col-md-5'><p id='numitem"+ i + "' style='margin-left: 25px;'>" + count[i] + "<p></div>\
                            <div class='col-md-1'>\
                                <button onclick='addingredients("+ i + ")' style='border-radius: 50%; width: 30px; background-color:hsl(139, 69%, 22%);\
                                 border: 0px; height: 30px;'>+</button></div></div></div></div>"
        }
        for (let i = 6; i <= 20; i++) {
            in2.innerHTML += "\
            <div class='col-md-2' id='cardmargin'>\
                    <div class='card' id='ingredients'>\
                        <img class='imgingredients' src='https://cdn.1112.com/1112/public/images/products/ingredients/website/"+ ingredientpic[i - 1] + ".jpg'>\
                        <p style='margin: 20px auto 0px auto; font-size: 15px;'>"+ ingredientstext[i - 1] + "</p>\
                        <p style='margin-left: auto; margin-right: auto; margin-top: 20px;'>49 ฿ / ส่วน</p>\
                        <div class='row'>\
                            <div class='col-md-1'>\
                                <button onclick='disingredients("+ i + ")'style='border-radius: 50%; width: 30px; background-color: hsl(139, 69%, 22%);\
                                border: 0px; height: 30px;'>-</button>\
                            </div>\
                            <div class='col-md-5'><p id='numitem"+ i + "' style='margin-left: 25px;'>" + count[i] + "<p></div>\
                            <div class='col-md-1'>\
                                <button onclick='addingredients("+ i + ")' style='border-radius: 50%; width: 30px; background-color:hsl(139, 69%, 22%);\
                                 border: 0px; height: 30px;'>+</button></div></div></div></div>"
        }
    }
    else if (pizzanum == 5 && toggleingredients == 1) {
        let ingredientpic = ["Prawn", "Capsicum", "Onions", "Red-&-Green-Chilli", "Italian-Sausage", "Anchovies", "Bacon-Bits",
            "GarlicButterChicken", "Mushrooms", "Pepperoni", "RoastedChicken", "Sliced-Bacon", "Smoked-Pork-Sausage",
            "BBQChicken", "Crab-Stick", "Mozzarella-Cheese", "Pineapple", "Seafood", "Sliced-Ham", "Tomato"]
        let ingredientstext = ["กุ้งสด", "พริกหวาน", "หอมใหญ่", "พริกแดง พริกเขียว", "ไส้กรอกอิตาเลียน", "แอนโชวี่", "เบคอนบิทส์", "ไก่เนยกระเทียม", "เห็ด",
            "เป๊ปเปอโรนี", "ไก่ย่าง", "เบคอนแผ่น", "ไส้กรอกหมู", "ไก่หมักซอส", "ปูอัด", "ชีสมอสซาเรลล่า", "สับปะรด", "ซีฟู้ดรวม", "แฮมแผ่น",
            "มะเขือเทศ"]
        for (let i = 1; i <= 4; i++) {
            in1.innerHTML += "\
            <div class='col-md-2' id='cardmargin'>\
                    <div class='card' id='ingredients'>\
                        <img class='imgingredients' src='https://cdn.1112.com/1112/public/images/products/ingredients/website/"+ ingredientpic[i - 1] + ".jpg'>\
                        <p style='margin: 20px auto 0px auto; font-size: 15px'>"+ ingredientstext[i - 1] + "</p>\
                        <p style='margin-left: auto; margin-right: auto; margin-top: 20px;'>49 ฿ / ส่วน</p>\
                        <div class='row'>\
                            <div class='col-md-1'>\
                                <button onclick='disingredients("+ i + ")'style='border-radius: 50%; width: 30px; background-color: hsl(139, 69%, 22%);\
                                border: 0px; height: 30px;'>-</button>\
                            </div>\
                            <div class='col-md-5'><p id='numitem"+ i + "' style='margin-left: 25px;'>" + count[i] + "<p></div>\
                            <div class='col-md-1'>\
                                <button onclick='addingredients("+ i + ")' style='border-radius: 50%; width: 30px; background-color:hsl(139, 69%, 22%);\
                                 border: 0px; height: 30px;'>+</button></div></div></div></div>"
        }
        for (let i = 5; i <= 20; i++) {
            in2.innerHTML += "\
            <div class='col-md-2' id='cardmargin'>\
                    <div class='card' id='ingredients'>\
                        <img class='imgingredients' src='https://cdn.1112.com/1112/public/images/products/ingredients/website/"+ ingredientpic[i - 1] + ".jpg'>\
                        <p style='margin: 20px auto 0px auto; font-size: 15px;'>"+ ingredientstext[i - 1] + "</p>\
                        <p style='margin-left: auto; margin-right: auto; margin-top: 20px;'>49 ฿ / ส่วน</p>\
                        <div class='row'>\
                            <div class='col-md-1'>\
                                <button onclick='disingredients("+ i + ")'style='border-radius: 50%; width: 30px; background-color: hsl(139, 69%, 22%);\
                                border: 0px; height: 30px;'>-</button>\
                            </div>\
                            <div class='col-md-5'><p id='numitem"+ i + "' style='margin-left: 25px;'>" + count[i] + "<p></div>\
                            <div class='col-md-1'>\
                                <button onclick='addingredients("+ i + ")' style='border-radius: 50%; width: 30px; background-color:hsl(139, 69%, 22%);\
                                 border: 0px; height: 30px;'>+</button></div></div></div></div>"
        }
    }
    else if (pizzanum == 6 && toggleingredients == 1) {
        let ingredientpic = ["Italian-Sausage", "Bacon-Bits", "Pepperoni", "Sliced-Bacon", "Smoked-Pork-Sausage", "Mozzarella-Cheese",
            "Sliced-Ham", "Anchovies", "GarlicButterChicken", "Mushrooms", "Prawn", "RoastedChicken", "BBQChicken",
            "Capsicum", "Crab-Stick", "Onions", "Pineapple", "Red-&-Green-Chilli", "Seafood", "Tomato"]
        let ingredientstext = ["ไส้กรอกอิตาเลียน", "เบคอนบิทส์", "เป๊ปเปอโรนี", "เบคอนแผ่น", "ไส้กรอกหมู", "ชีสมอสซาเรลล่า", "แฮมแผ่น", "แอนโชวี่", "ไก่เนยกระเทียม",
            "เห็ด", "กุ้งสด", "ไก่ย่าง", "ไก่หมักซอส", "พริกหวาน", "ปูอัด", "หอมใหญ่", "สับปะรด", "พริกแดง พริกเขียว", "ซีฟู้ดรวม", "มะเขือเทศ"]
        for (let i = 1; i <= 7; i++) {
            in1.innerHTML += "\
            <div class='col-md-2' id='cardmargin'>\
                    <div class='card' id='ingredients'>\
                        <img class='imgingredients' src='https://cdn.1112.com/1112/public/images/products/ingredients/website/"+ ingredientpic[i - 1] + ".jpg'>\
                        <p style='margin: 20px auto 0px auto; font-size: 15px'>"+ ingredientstext[i - 1] + "</p>\
                        <p style='margin-left: auto; margin-right: auto; margin-top: 20px;'>49 ฿ / ส่วน</p>\
                        <div class='row'>\
                            <div class='col-md-1'>\
                                <button onclick='disingredients("+ i + ")'style='border-radius: 50%; width: 30px; background-color: hsl(139, 69%, 22%);\
                                border: 0px; height: 30px;'>-</button>\
                            </div>\
                            <div class='col-md-5'><p id='numitem"+ i + "' style='margin-left: 25px;'>" + count[i] + "<p></div>\
                            <div class='col-md-1'>\
                                <button onclick='addingredients("+ i + ")' style='border-radius: 50%; width: 30px; background-color:hsl(139, 69%, 22%);\
                                 border: 0px; height: 30px;'>+</button></div></div></div></div>"
        }
        for (let i = 8; i <= 20; i++) {
            in2.innerHTML += "\
            <div class='col-md-2' id='cardmargin'>\
                    <div class='card' id='ingredients'>\
                        <img class='imgingredients' src='https://cdn.1112.com/1112/public/images/products/ingredients/website/"+ ingredientpic[i - 1] + ".jpg'>\
                        <p style='margin: 20px auto 0px auto; font-size: 15px;'>"+ ingredientstext[i - 1] + "</p>\
                        <p style='margin-left: auto; margin-right: auto; margin-top: 20px;'>49 ฿ / ส่วน</p>\
                        <div class='row'>\
                            <div class='col-md-1'>\
                                <button onclick='disingredients("+ i + ")'style='border-radius: 50%; width: 30px; background-color: hsl(139, 69%, 22%);\
                                border: 0px; height: 30px;'>-</button>\
                            </div>\
                            <div class='col-md-5'><p id='numitem"+ i + "' style='margin-left: 25px;'>" + count[i] + "<p></div>\
                            <div class='col-md-1'>\
                                <button onclick='addingredients("+ i + ")' style='border-radius: 50%; width: 30px; background-color:hsl(139, 69%, 22%);\
                                 border: 0px; height: 30px;'>+</button></div></div></div></div>"
        }
    }
    else if (pizzanum == 7 && toggleingredients == 1) {
        let ingredientpic = ["Mushrooms", "Prawn", "Mozzarella-Cheese", "Pineapple", "Tomato", "Italian-Sausage", "Anchovies", "Bacon-Bits",
            "GarlicButterChicken", "Pepperoni", "RoastedChicken", "Sliced-Bacon", "Smoked-Pork-Sausage", "BBQChicken",
            "Capsicum", "Crab-Stick", "Onions", "Red-&-Green-Chilli", "Seafood", "Sliced-Ham"]
        let ingredientstext = ["เห็ด", "กุ้งสด", "ชีสมอสซาเรลล่า", "สับปะรด", "มะเขือเทศ", "ไส้กรอกอิตาเลียน", "แอนโชวี่", "เบคอนบิทส์", "ไก่เนยกระเทียม",
            "เป๊ปเปอโรนี", "ไก่ย่าง", "เบคอนแผ่น", "ไส้กรอกหมู", "ไก่หมักซอส", "พริกหวาน", "ปูอัด", "หอมใหญ่", "พริกแดง พริกเขียว",
            "ซีฟู้ดรวม", "แฮมแผ่น"]
        for (let i = 1; i <= 5; i++) {
            in1.innerHTML += "\
            <div class='col-md-2' id='cardmargin'>\
                    <div class='card' id='ingredients'>\
                        <img class='imgingredients' src='https://cdn.1112.com/1112/public/images/products/ingredients/website/"+ ingredientpic[i - 1] + ".jpg'>\
                        <p style='margin: 20px auto 0px auto; font-size: 15px'>"+ ingredientstext[i - 1] + "</p>\
                        <p style='margin-left: auto; margin-right: auto; margin-top: 20px;'>49 ฿ / ส่วน</p>\
                        <div class='row'>\
                            <div class='col-md-1'>\
                                <button onclick='disingredients("+ i + ")'style='border-radius: 50%; width: 30px; background-color: hsl(139, 69%, 22%);\
                                border: 0px; height: 30px;'>-</button>\
                            </div>\
                            <div class='col-md-5'><p id='numitem"+ i + "' style='margin-left: 25px;'>" + count[i] + "<p></div>\
                            <div class='col-md-1'>\
                                <button onclick='addingredients("+ i + ")' style='border-radius: 50%; width: 30px; background-color:hsl(139, 69%, 22%);\
                                 border: 0px; height: 30px;'>+</button></div></div></div></div>"
        }
        for (let i = 6; i <= 20; i++) {
            in2.innerHTML += "\
            <div class='col-md-2' id='cardmargin'>\
                    <div class='card' id='ingredients'>\
                        <img class='imgingredients' src='https://cdn.1112.com/1112/public/images/products/ingredients/website/"+ ingredientpic[i - 1] + ".jpg'>\
                        <p style='margin: 20px auto 0px auto; font-size: 15px;'>"+ ingredientstext[i - 1] + "</p>\
                        <p style='margin-left: auto; margin-right: auto; margin-top: 20px;'>49 ฿ / ส่วน</p>\
                        <div class='row'>\
                            <div class='col-md-1'>\
                                <button onclick='disingredients("+ i + ")'style='border-radius: 50%; width: 30px; background-color: hsl(139, 69%, 22%);\
                                border: 0px; height: 30px;'>-</button>\
                            </div>\
                            <div class='col-md-5'><p id='numitem"+ i + "' style='margin-left: 25px;'>" + count[i] + "<p></div>\
                            <div class='col-md-1'>\
                                <button onclick='addingredients("+ i + ")' style='border-radius: 50%; width: 30px; background-color:hsl(139, 69%, 22%);\
                                 border: 0px; height: 30px;'>+</button></div></div></div></div>"
        }
    }
    else if (pizzanum == 8 && toggleingredients == 1) {
        let ingredientpic = ["Mushrooms", "Mozzarella-Cheese", "Onions", "Red-&-Green-Chilli", "Tomato", "Italian-Sausage", "Anchovies",
            "Bacon-Bits", "GarlicButterChicken", "Pepperoni", "Prawn", "RoastedChicken", "Sliced-Bacon",
            "Smoked-Pork-Sausage", "BBQChicken", "Capsicum", "Crab-Stick", "Pineapple", "Seafood", "Sliced-Ham"]
        let ingredientstext = ["เห็ด", "ชีสมอสซาเรลล่า", "หอมใหญ่", "พริกแดง พริกเขียว", "มะเขือเทศ", "ไส้กรอกอิตาเลียน", "แอนโชวี่", "เบคอนบิทส์", "ไก่เนยกระเทียม",
            "เป๊ปเปอโรนี", "กุ้งสด", "ไก่ย่าง", "เบคอนแผ่น", "ไส้กรอกหมู", "ไก่หมักซอส", "พริกหวาน", "ปูอัด", "สับปะรด", "ซีฟู้ดรวม", "แฮมแผ่น"]
        for (let i = 1; i <= 5; i++) {
            in1.innerHTML += "\
            <div class='col-md-2' id='cardmargin'>\
                    <div class='card' id='ingredients'>\
                        <img class='imgingredients' src='https://cdn.1112.com/1112/public/images/products/ingredients/website/"+ ingredientpic[i - 1] + ".jpg'>\
                        <p style='margin: 20px auto 0px auto; font-size: 15px'>"+ ingredientstext[i - 1] + "</p>\
                        <p style='margin-left: auto; margin-right: auto; margin-top: 20px;'>49 ฿ / ส่วน</p>\
                        <div class='row'>\
                            <div class='col-md-1'>\
                                <button onclick='disingredients("+ i + ")'style='border-radius: 50%; width: 30px; background-color: hsl(139, 69%, 22%);\
                                border: 0px; height: 30px;'>-</button>\
                            </div>\
                            <div class='col-md-5'><p id='numitem"+ i + "' style='margin-left: 25px;'>" + count[i] + "<p></div>\
                            <div class='col-md-1'>\
                                <button onclick='addingredients("+ i + ")' style='border-radius: 50%; width: 30px; background-color:hsl(139, 69%, 22%);\
                                 border: 0px; height: 30px;'>+</button></div></div></div></div>"
        }
        for (let i = 6; i <= 20; i++) {
            in2.innerHTML += "\
            <div class='col-md-2' id='cardmargin'>\
                    <div class='card' id='ingredients'>\
                        <img class='imgingredients' src='https://cdn.1112.com/1112/public/images/products/ingredients/website/"+ ingredientpic[i - 1] + ".jpg'>\
                        <p style='margin: 20px auto 0px auto; font-size: 15px;'>"+ ingredientstext[i - 1] + "</p>\
                        <p style='margin-left: auto; margin-right: auto; margin-top: 20px;'>49 ฿ / ส่วน</p>\
                        <div class='row'>\
                            <div class='col-md-1'>\
                                <button onclick='disingredients("+ i + ")'style='border-radius: 50%; width: 30px; background-color: hsl(139, 69%, 22%);\
                                border: 0px; height: 30px;'>-</button>\
                            </div>\
                            <div class='col-md-5'><p id='numitem"+ i + "' style='margin-left: 25px;'>" + count[i] + "<p></div>\
                            <div class='col-md-1'>\
                                <button onclick='addingredients("+ i + ")' style='border-radius: 50%; width: 30px; background-color:hsl(139, 69%, 22%);\
                                 border: 0px; height: 30px;'>+</button></div></div></div></div>"
        }
    }
    else if (pizzanum == 10 && toggleingredients == 1) {
        let ingredientpic = ["Crab-Stick", "Mozzarella-Cheese", "Pineapple", "Sliced-Ham", "Italian-Sausage", "Anchovies","Bacon-Bits", 
                            "GarlicButterChicken", "Mushrooms", "Pepperoni", "Prawn", "RoastedChicken", "Sliced-Bacon",
                            "Smoked-Pork-Sausage", "BBQChicken", "Capsicum", "Onions", "Red-&-Green-Chilli", "Seafood", "Tomato"]
        let ingredientstext = ["ปูอัด", "ชีสมอสซาเรลล่า", "สับปะรด", "แฮมแผ่น", "ไส้กรอกอิตาเลียน", "แอนโชวี่", "เบคอนบิทส์", "ไก่เนยกระเทียม", "เห็ด", "เป๊ปเปอโรนี",
                                "กุ้งสด", "ไก่ย่าง", "เบคอนแผ่น", "ไส้กรอกหมู", "ไก่หมักซอส", "พริกหวาน", "หอมใหญ่", "พริกแดง พริกเขียว", "ซีฟู้ดรวม", "มะเขือเทศ"]
        for (let i = 1; i <= 4; i++) {
            in1.innerHTML += "\
            <div class='col-md-2' id='cardmargin'>\
                    <div class='card' id='ingredients'>\
                        <img class='imgingredients' src='https://cdn.1112.com/1112/public/images/products/ingredients/website/"+ ingredientpic[i - 1] + ".jpg'>\
                        <p style='margin: 20px auto 0px auto; font-size: 15px'>"+ ingredientstext[i - 1] + "</p>\
                        <p style='margin-left: auto; margin-right: auto; margin-top: 20px;'>49 ฿ / ส่วน</p>\
                        <div class='row'>\
                            <div class='col-md-1'>\
                                <button onclick='disingredients("+ i + ")'style='border-radius: 50%; width: 30px; background-color: hsl(139, 69%, 22%);\
                                border: 0px; height: 30px;'>-</button>\
                            </div>\
                            <div class='col-md-5'><p id='numitem"+ i + "' style='margin-left: 25px;'>" + count[i] + "<p></div>\
                            <div class='col-md-1'>\
                                <button onclick='addingredients("+ i + ")' style='border-radius: 50%; width: 30px; background-color:hsl(139, 69%, 22%);\
                                 border: 0px; height: 30px;'>+</button></div></div></div></div>"
        }
        for (let i = 5; i <= 20; i++) {
            in2.innerHTML += "\
            <div class='col-md-2' id='cardmargin'>\
                    <div class='card' id='ingredients'>\
                        <img class='imgingredients' src='https://cdn.1112.com/1112/public/images/products/ingredients/website/"+ ingredientpic[i - 1] + ".jpg'>\
                        <p style='margin: 20px auto 0px auto; font-size: 15px;'>"+ ingredientstext[i - 1] + "</p>\
                        <p style='margin-left: auto; margin-right: auto; margin-top: 20px;'>49 ฿ / ส่วน</p>\
                        <div class='row'>\
                            <div class='col-md-1'>\
                                <button onclick='disingredients("+ i + ")'style='border-radius: 50%; width: 30px; background-color: hsl(139, 69%, 22%);\
                                border: 0px; height: 30px;'>-</button>\
                            </div>\
                            <div class='col-md-5'><p id='numitem"+ i + "' style='margin-left: 25px;'>" + count[i] + "<p></div>\
                            <div class='col-md-1'>\
                                <button onclick='addingredients("+ i + ")' style='border-radius: 50%; width: 30px; background-color:hsl(139, 69%, 22%);\
                                 border: 0px; height: 30px;'>+</button></div></div></div></div>"
        }
    }
    else if (pizzanum == 11 && toggleingredients == 1) {
        let ingredientpic = ["Sliced-Bacon", "Mozzarella-Cheese", "Pineapple", "Sliced-Ham", "Italian-Sausage", "Anchovies","Bacon-Bits", 
                            "GarlicButterChicken", "Mushrooms", "Pepperoni", "Prawn", "RoastedChicken", "Smoked-Pork-Sausage", "BBQChicken", 
                            "Capsicum", "Crab-Stick", "Onions", "Red-&-Green-Chilli", "Seafood", "Tomato"]
        let ingredientstext = ["เบคอนแผ่น", "ชีสมอสซาเรลล่า", "สับปะรด", "แฮมแผ่น", "ไส้กรอกอิตาเลียน", "แอนโชวี่", "เบคอนบิทส์", "ไก่เนยกระเทียม", "เห็ด",
                                "เป๊ปเปอโรนี", "กุ้งสด", "ไก่ย่าง", "ไส้กรอกหมู", "ไก่หมักซอส", "พริกหวาน", "ปูอัด", "หอมใหญ่", "พริกแดง พริกเขียว", "ซีฟู้ดรวม", "มะเขือเทศ"]
        for (let i = 1; i <= 4; i++) {
            in1.innerHTML += "\
            <div class='col-md-2' id='cardmargin'>\
                    <div class='card' id='ingredients'>\
                        <img class='imgingredients' src='https://cdn.1112.com/1112/public/images/products/ingredients/website/"+ ingredientpic[i - 1] + ".jpg'>\
                        <p style='margin: 20px auto 0px auto; font-size: 15px'>"+ ingredientstext[i - 1] + "</p>\
                        <p style='margin-left: auto; margin-right: auto; margin-top: 20px;'>49 ฿ / ส่วน</p>\
                        <div class='row'>\
                            <div class='col-md-1'>\
                                <button onclick='disingredients("+ i + ")'style='border-radius: 50%; width: 30px; background-color: hsl(139, 69%, 22%);\
                                border: 0px; height: 30px;'>-</button>\
                            </div>\
                            <div class='col-md-5'><p id='numitem"+ i + "' style='margin-left: 25px;'>" + count[i] + "<p></div>\
                            <div class='col-md-1'>\
                                <button onclick='addingredients("+ i + ")' style='border-radius: 50%; width: 30px; background-color:hsl(139, 69%, 22%);\
                                 border: 0px; height: 30px;'>+</button></div></div></div></div>"
        }
        for (let i = 5; i <= 20; i++) {
            in2.innerHTML += "\
            <div class='col-md-2' id='cardmargin'>\
                    <div class='card' id='ingredients'>\
                        <img class='imgingredients' src='https://cdn.1112.com/1112/public/images/products/ingredients/website/"+ ingredientpic[i - 1] + ".jpg'>\
                        <p style='margin: 20px auto 0px auto; font-size: 15px;'>"+ ingredientstext[i - 1] + "</p>\
                        <p style='margin-left: auto; margin-right: auto; margin-top: 20px;'>49 ฿ / ส่วน</p>\
                        <div class='row'>\
                            <div class='col-md-1'>\
                                <button onclick='disingredients("+ i + ")'style='border-radius: 50%; width: 30px; background-color: hsl(139, 69%, 22%);\
                                border: 0px; height: 30px;'>-</button>\
                            </div>\
                            <div class='col-md-5'><p id='numitem"+ i + "' style='margin-left: 25px;'>" + count[i] + "<p></div>\
                            <div class='col-md-1'>\
                                <button onclick='addingredients("+ i + ")' style='border-radius: 50%; width: 30px; background-color:hsl(139, 69%, 22%);\
                                 border: 0px; height: 30px;'>+</button></div></div></div></div>"
        }
    }
    else if (pizzanum == 12 || pizzanum == 14 && toggleingredients == 1) {
        let ingredientpic = ["Mozzarella-Cheese", "Italian-Sausage", "Anchovies","Bacon-Bits", "GarlicButterChicken", "Mushrooms",
                            "Pepperoni", "Prawn", "RoastedChicken", "Sliced-Bacon", "Smoked-Pork-Sausage", "BBQChicken", 
                            "Capsicum", "Crab-Stick", "Onions", "Pineapple", "Red-&-Green-Chilli", "Seafood", "Sliced-Ham", "Tomato"]
        let ingredientstext = ["ชีสมอสซาเรลล่า", "ไส้กรอกอิตาเลียน", "แอนโชวี่", "เบคอนบิทส์", "ไก่เนยกระเทียม", "เห็ด", "เป๊ปเปอโรนี", "กุ้งสด", "ไก่ย่าง",
                                "เบคอนแผ่น", "ไส้กรอกหมู", "ไก่หมักซอส", "พริกหวาน", "ปูอัด", "หอมใหญ่", "สับปะรด", "พริกแดง พริกเขียว", "ซีฟู้ดรวม", "แฮมแผ่น", "มะเขือเทศ"]
        for (let i = 1; i <= 1; i++) {
            in1.innerHTML += "\
            <div class='col-md-2' id='cardmargin'>\
                    <div class='card' id='ingredients'>\
                        <img class='imgingredients' src='https://cdn.1112.com/1112/public/images/products/ingredients/website/"+ ingredientpic[i - 1] + ".jpg'>\
                        <p style='margin: 20px auto 0px auto; font-size: 15px'>"+ ingredientstext[i - 1] + "</p>\
                        <p style='margin-left: auto; margin-right: auto; margin-top: 20px;'>49 ฿ / ส่วน</p>\
                        <div class='row'>\
                            <div class='col-md-1'>\
                                <button onclick='disingredients("+ i + ")'style='border-radius: 50%; width: 30px; background-color: hsl(139, 69%, 22%);\
                                border: 0px; height: 30px;'>-</button>\
                            </div>\
                            <div class='col-md-5'><p id='numitem"+ i + "' style='margin-left: 25px;'>" + count[i] + "<p></div>\
                            <div class='col-md-1'>\
                                <button onclick='addingredients("+ i + ")' style='border-radius: 50%; width: 30px; background-color:hsl(139, 69%, 22%);\
                                 border: 0px; height: 30px;'>+</button></div></div></div></div>"
        }
        for (let i = 2; i <= 20; i++) {
            in2.innerHTML += "\
            <div class='col-md-2' id='cardmargin'>\
                    <div class='card' id='ingredients'>\
                        <img class='imgingredients' src='https://cdn.1112.com/1112/public/images/products/ingredients/website/"+ ingredientpic[i - 1] + ".jpg'>\
                        <p style='margin: 20px auto 0px auto; font-size: 15px;'>"+ ingredientstext[i - 1] + "</p>\
                        <p style='margin-left: auto; margin-right: auto; margin-top: 20px;'>49 ฿ / ส่วน</p>\
                        <div class='row'>\
                            <div class='col-md-1'>\
                                <button onclick='disingredients("+ i + ")'style='border-radius: 50%; width: 30px; background-color: hsl(139, 69%, 22%);\
                                border: 0px; height: 30px;'>-</button>\
                            </div>\
                            <div class='col-md-5'><p id='numitem"+ i + "' style='margin-left: 25px;'>" + count[i] + "<p></div>\
                            <div class='col-md-1'>\
                                <button onclick='addingredients("+ i + ")' style='border-radius: 50%; width: 30px; background-color:hsl(139, 69%, 22%);\
                                 border: 0px; height: 30px;'>+</button></div></div></div></div>"
        }
    }
    else if (pizzanum == 13 && toggleingredients == 1) {
        let ingredientpic = ["GarlicButterChicken", "Mushrooms", "RoastedChicken", "BBQChicken", "Mozzarella-Cheese", "Red-&-Green-Chilli",
                            "Italian-Sausage", "Anchovies", "Bacon-Bits", "Pepperoni", "Prawn", "Sliced-Bacon", "Smoked-Pork-Sausage",
                            "Capsicum", "Crab-Stick", "Onions", "Pineapple", "Seafood", "Sliced-Ham", "Tomato"]
        let ingredientstext = ["ไก่เนยกระเทียม", "เห็ด", "ไก่ย่าง", "ไก่หมักซอส", "ชีสมอสซาเรลล่า", "พริกแดง พริกเขียว", "ไส้กรอกอิตาเลียน", "แอนโชวี่", "เบคอนบิทส์",
                            "เป๊ปเปอโรนี", "กุ้งสด", "เบคอนแผ่น", "ไส้กรอกหมู", "พริกหวาน", "ปูอัด", "หอมใหญ่", "สับปะรด", "ซีฟู้ดรวม", "แฮมแผ่น", "มะเขือเทศ"]
        for (let i = 1; i <= 6; i++) {
            in1.innerHTML += "\
            <div class='col-md-2' id='cardmargin'>\
                    <div class='card' id='ingredients'>\
                        <img class='imgingredients' src='https://cdn.1112.com/1112/public/images/products/ingredients/website/"+ ingredientpic[i - 1] + ".jpg'>\
                        <p style='margin: 20px auto 0px auto; font-size: 15px'>"+ ingredientstext[i - 1] + "</p>\
                        <p style='margin-left: auto; margin-right: auto; margin-top: 20px;'>49 ฿ / ส่วน</p>\
                        <div class='row'>\
                            <div class='col-md-1'>\
                                <button onclick='disingredients("+ i + ")'style='border-radius: 50%; width: 30px; background-color: hsl(139, 69%, 22%);\
                                border: 0px; height: 30px;'>-</button>\
                            </div>\
                            <div class='col-md-5'><p id='numitem"+ i + "' style='margin-left: 25px;'>" + count[i] + "<p></div>\
                            <div class='col-md-1'>\
                                <button onclick='addingredients("+ i + ")' style='border-radius: 50%; width: 30px; background-color:hsl(139, 69%, 22%);\
                                 border: 0px; height: 30px;'>+</button></div></div></div></div>"
        }
        for (let i = 7; i <= 20; i++) {
            in2.innerHTML += "\
            <div class='col-md-2' id='cardmargin'>\
                    <div class='card' id='ingredients'>\
                        <img class='imgingredients' src='https://cdn.1112.com/1112/public/images/products/ingredients/website/"+ ingredientpic[i - 1] + ".jpg'>\
                        <p style='margin: 20px auto 0px auto; font-size: 15px;'>"+ ingredientstext[i - 1] + "</p>\
                        <p style='margin-left: auto; margin-right: auto; margin-top: 20px;'>49 ฿ / ส่วน</p>\
                        <div class='row'>\
                            <div class='col-md-1'>\
                                <button onclick='disingredients("+ i + ")'style='border-radius: 50%; width: 30px; background-color: hsl(139, 69%, 22%);\
                                border: 0px; height: 30px;'>-</button>\
                            </div>\
                            <div class='col-md-5'><p id='numitem"+ i + "' style='margin-left: 25px;'>" + count[i] + "<p></div>\
                            <div class='col-md-1'>\
                                <button onclick='addingredients("+ i + ")' style='border-radius: 50%; width: 30px; background-color:hsl(139, 69%, 22%);\
                                 border: 0px; height: 30px;'>+</button></div></div></div></div>"
        }
    }
    else if (pizzanum == 15 && toggleingredients == 1) {
        let ingredientpic = ["Pepperoni", "Mozzarella-Cheese", "Italian-Sausage", "Anchovies", "Bacon-Bits", "GarlicButterChicken", "Mushrooms",
                            "Prawn", "RoastedChicken", "Sliced-Bacon", "Smoked-Pork-Sausage", "BBQChicken", "Capsicum", "Crab-Stick", 
                            "Onions", "Pineapple", "Red-&-Green-Chilli", "Seafood", "Sliced-Ham", "Tomato"]
        let ingredientstext = ["เป๊ปเปอโรนี", "ชีสมอสซาเรลล่า", "ไส้กรอกอิตาเลียน", "แอนโชวี่", "เบคอนบิทส์", "ไก่เนยกระเทียม", "เห็ด", "กุ้งสด", "ไก่ย่าง", "เบคอนแผ่น",
                                "ไส้กรอกหมู", "ไก่หมักซอส", "พริกหวาน", "ปูอัด", "หอมใหญ่", "สับปะรด", "พริกแดง พริกเขียว", "ซีฟู้ดรวม", "แฮมแผ่น", "มะเขือเทศ"]
        for (let i = 1; i <= 2; i++) {
            in1.innerHTML += "\
            <div class='col-md-2' id='cardmargin'>\
                    <div class='card' id='ingredients'>\
                        <img class='imgingredients' src='https://cdn.1112.com/1112/public/images/products/ingredients/website/"+ ingredientpic[i - 1] + ".jpg'>\
                        <p style='margin: 20px auto 0px auto; font-size: 15px'>"+ ingredientstext[i - 1] + "</p>\
                        <p style='margin-left: auto; margin-right: auto; margin-top: 20px;'>49 ฿ / ส่วน</p>\
                        <div class='row'>\
                            <div class='col-md-1'>\
                                <button onclick='disingredients("+ i + ")'style='border-radius: 50%; width: 30px; background-color: hsl(139, 69%, 22%);\
                                border: 0px; height: 30px;'>-</button>\
                            </div>\
                            <div class='col-md-5'><p id='numitem"+ i + "' style='margin-left: 25px;'>" + count[i] + "<p></div>\
                            <div class='col-md-1'>\
                                <button onclick='addingredients("+ i + ")' style='border-radius: 50%; width: 30px; background-color:hsl(139, 69%, 22%);\
                                 border: 0px; height: 30px;'>+</button></div></div></div></div>"
        }
        for (let i = 3; i <= 20; i++) {
            in2.innerHTML += "\
            <div class='col-md-2' id='cardmargin'>\
                    <div class='card' id='ingredients'>\
                        <img class='imgingredients' src='https://cdn.1112.com/1112/public/images/products/ingredients/website/"+ ingredientpic[i - 1] + ".jpg'>\
                        <p style='margin: 20px auto 0px auto; font-size: 15px;'>"+ ingredientstext[i - 1] + "</p>\
                        <p style='margin-left: auto; margin-right: auto; margin-top: 20px;'>49 ฿ / ส่วน</p>\
                        <div class='row'>\
                            <div class='col-md-1'>\
                                <button onclick='disingredients("+ i + ")'style='border-radius: 50%; width: 30px; background-color: hsl(139, 69%, 22%);\
                                border: 0px; height: 30px;'>-</button>\
                            </div>\
                            <div class='col-md-5'><p id='numitem"+ i + "' style='margin-left: 25px;'>" + count[i] + "<p></div>\
                            <div class='col-md-1'>\
                                <button onclick='addingredients("+ i + ")' style='border-radius: 50%; width: 30px; background-color:hsl(139, 69%, 22%);\
                                 border: 0px; height: 30px;'>+</button></div></div></div></div>"
        }
    }
    else{
        in1.innerHTML =""
        in2.innerHTML =""
        sauce.innerHTML = ""
        saccese.innerHTML = ""
        headin.innerHTML = ""
        headin2.innerHTML = ""
        btn.innerHTML = ""
    }
    for (let i = 1; i<=20; i++){
        if(count[i] == ""){
            count[i] = 0
        }
    }
}
function resetcount(){
    count[0] = 0
    for (let i = 1 ; i<=20; i++){
        count[i] = 0
        document.getElementById("numitem"+i).innerHTML = ""
    }
}
function addingredients(numcount){
    if(count[0]+1 <= 7){
        count[0]++
        let priceselect = document.getElementById("price")
        num += 49
        num2 += 49
        if(toggleM == 1){
            priceselect.innerHTML = "ราคา "+num+" ฿"
        }
        else{
            priceselect.innerHTML = "ราคา "+num2+" ฿"
        }
        count[numcount]++
        let numcard = document.getElementById("numitem"+numcount)
        numcard.innerHTML = ""+count[numcount]
    }
    else{
        alert("เพิ่มส่วนผสมได้ไม่เกิน 7 อย่าง")
        countall = 7
    }
}

function disingredients(numcount){
    let priceselect = document.getElementById("price")
    let numcard = document.getElementById("numitem"+numcount)
    if(count[numcount]-1 >= 0){
        num -= 49
        num2 -= 49
        count[numcount]--
        count[0]--
        if(toggleM == 1){
            priceselect.innerHTML = "ราคา "+num+" ฿"
        }
        else{
            priceselect.innerHTML = "ราคา "+num2+" ฿"
        }
        if(count[numcount] != 0){
            numcard.innerHTML = ""+count[numcount]
        }
        else{
            numcard.innerHTML = ""
        }
    }
}
