function changemes(num) {
    let bt1 = document.getElementById("btn1");
    let bt2 = document.getElementById("btn2");
    let bt3 = document.getElementById("btn3");
    let bt4 = document.getElementById("btn4");
    let bt5 = document.getElementById("btn5");
    let bt6 = document.getElementById("btn6");
    let card = document.getElementById("cardmes");
    if (num == 0) {
        bt1.style = "background-color: hsl(139, 69%, 22%); border-radius: 10px 10px 0px 0px; \
        width: 130px; color: white; height: 40px; padding: 5px; border: 0px;"
        bt2.style = "background-color: black; color: white; width: 130px; padding: 5px; border: 0px;"
        bt3.style = "background-color: black; color: white; width: 130px; padding: 5px; border: 0px; border-left: 1px solid gray;"
        bt4.style = "background-color: black; color: white; width: 130px; padding: 5px; border: 0px; border-left: 1px solid gray;"
        bt5.style = "background-color: black; color: white; width: 130px; padding: 5px; border: 0px; border-left: 1px solid gray;"
        bt6.style = "background-color: black; color: white; width: 130px; padding: 5px; border: 0px; border-left: 1px solid gray;"
        card.innerHTML = "<div class='col-md-12' style='margin-top: 30px;'>\
        <p style='font-size: 20px; margin-top: 100px; margin-bottom: 100px;'>ไม่รับข้อความ</p></div>"
    }
    else if (num == 1){
        bt2.style = "background-color: hsl(139, 69%, 22%); border-radius: 10px 10px 0px 0px; \
        width: 130px; color: white; height: 40px; padding: 5px; border: 0px;"
        bt1.style = "background-color: black; color: white; width: 130px; padding: 5px; border: 0px;"
        bt3.style = "background-color: black; color: white; width: 130px; padding: 5px; border: 0px; border-left: 1px solid gray;"
        bt4.style = "background-color: black; color: white; width: 130px; padding: 5px; border: 0px; border-left: 1px solid gray;"
        bt5.style = "background-color: black; color: white; width: 130px; padding: 5px; border: 0px; border-left: 1px solid gray;"
        bt6.style = "background-color: black; color: white; width: 130px; padding: 5px; border: 0px; border-left: 1px solid gray;"
        card.innerHTML = "<div class='col-md-9'><div class='row' style='margin: auto;'><div class='col-md-4'>\
                <div class='card' onclick=selectmes(1) id='mes1'><img src='https://cdn.1112.com/1112/public/images/Stickers/2B.png' style='padding: 20px;'>\
                <p style='font-size: 15px;'>ขอโทษที่ผิดไป เลยส่งพิซซ่าแทนใจ เพื่อขอปรับปรุง</p></div></div>\
                <div class='col-md-4'><div class='card' onclick=selectmes(2) id='mes2' style='background-color: black;'>\
                <img src='https://cdn.1112.com/1112/public/images/Stickers/2A.png' style='padding: 20px;'>\
                <p style='font-size: 15px;'>สั่งพิซซ่ามา แทนคำว่าขอโทษ อยากให้คุณหายโกรธ ขอโทษจริงๆนะ</p></div></div><div class='col-md-4'>\
                <div class='card' onclick=selectmes(3) id='mes3' style='background-color: black;'>\
                    <img src='https://cdn.1112.com/1112/public/images/Stickers/2C.png' style='padding: 20px;'>\
                    <p style='font-size: 15px;'>Sorry แปลว่าขอโทษ สั่งพิซซ่าหน้าโปรดมาขอไถ่โทษนะจ๊ะ</p></div></div></div></div>"
    }
    else if (num == 2){
        bt3.style = "background-color: hsl(139, 69%, 22%); border-radius: 10px 10px 0px 0px; \
        width: 130px; color: white; height: 40px; padding: 5px; border: 0px;"
        bt1.style = "background-color: black; color: white; width: 130px; padding: 5px; border: 0px;"
        bt2.style = "background-color: black; color: white; width: 130px; padding: 5px; border: 0px; border-left: 1px solid gray;"
        bt4.style = "background-color: black; color: white; width: 130px; padding: 5px; border: 0px; border-left: 1px solid gray;"
        bt5.style = "background-color: black; color: white; width: 130px; padding: 5px; border: 0px; border-left: 1px solid gray;"
        bt6.style = "background-color: black; color: white; width: 130px; padding: 5px; border: 0px; border-left: 1px solid gray;"
        card.innerHTML = "<div class='col-md-9'><div class='row' style='margin: auto;'><div class='col-md-4'>\
                <div class='card' onclick=selectmes(1) id='mes1'><img src='https://cdn.1112.com/1112/public/images/Stickers/4A.png' style='padding: 20px;'>\
                <p style='font-size: 15px;'>สู้ตาย! ไว้ลายให้โลกมันจำ</p></div></div>\
                <div class='col-md-4'><div class='card' onclick=selectmes(2) id='mes2' style='background-color: black;'>\
                <img src='https://cdn.1112.com/1112/public/images/Stickers/4B.png' style='padding: 20px;'>\
                <p style='font-size: 15px;'>สู้ๆ อยู่ข้างๆ เสมอนะ</p></div></div><div class='col-md-4'>\
                <div class='card' onclick=selectmes(3) id='mes3' style='background-color: black;'>\
                    <img src='https://cdn.1112.com/1112/public/images/Stickers/4C.png' style='padding: 20px;'>\
                    <p style='font-size: 15px;'>ส่งรอยยิ้ม ส่งน้ำใจ ส่งพิซซ่าถาดนี้มาให้ แทนกำลังใจนะเธอ</p></div></div></div></div>"
    }
    else if (num == 3){
        bt4.style = "background-color: hsl(139, 69%, 22%); border-radius: 10px 10px 0px 0px; \
        width: 130px; color: white; height: 40px; padding: 5px; border: 0px;"
        bt1.style = "background-color: black; color: white; width: 130px; padding: 5px; border: 0px;"
        bt2.style = "background-color: black; color: white; width: 130px; padding: 5px; border: 0px; border-left: 1px solid gray;"
        bt3.style = "background-color: black; color: white; width: 130px; padding: 5px; border: 0px; border-left: 1px solid gray;"
        bt5.style = "background-color: black; color: white; width: 130px; padding: 5px; border: 0px; border-left: 1px solid gray;"
        bt6.style = "background-color: black; color: white; width: 130px; padding: 5px; border: 0px; border-left: 1px solid gray;"
        card.innerHTML = "<div class='col-md-9'><div class='row' style='margin: auto;'><div class='col-md-4'>\
                <div class='card' onclick=selectmes(1) id='mes1'><img src='https://cdn.1112.com/1112/public/images/Stickers/5A.png' style='padding: 20px;'>\
                <p style='font-size: 15px;'>ปลี่ยนจากเป่าเค้ก เป็นกัดพิซซ่า เผื่อว่าปีหน้าจะได้มีแต่เรื่องฮาๆกันทั้งปีเนอะ HBD จ้า</p></div></div>\
                <div class='col-md-4'><div class='card' onclick=selectmes(2) id='mes2' style='background-color: black;'>\
                <img src='https://cdn.1112.com/1112/public/images/Stickers/5B.png' style='padding: 20px;'>\
                <p style='font-size: 15px;'>เริ่มต้นสิ่งดีๆ ด้วยพิซซ่าถาดนี้นะ HBD จ้า</p></div></div><div class='col-md-4'>\
                <div class='card' style='background-color: black;' onclick=selectmes(3) id='mes3'>\
                    <img src='https://cdn.1112.com/1112/public/images/Stickers/5C.png' style='padding: 20px;'>\
                    <p style='font-size: 15px;'>วันเกิดของใครก็ไม่รู้ แค่อยากจะร้อง HBD ทูยู</p></div></div></div></div>"
    }
    else if (num == 4){
        bt5.style = "background-color: hsl(139, 69%, 22%); border-radius: 10px 10px 0px 0px; \
        width: 130px; color: white; height: 40px; padding: 5px; border: 0px;"
        bt1.style = "background-color: black; color: white; width: 130px; padding: 5px; border: 0px;"
        bt2.style = "background-color: black; color: white; width: 130px; padding: 5px; border: 0px; border-left: 1px solid gray;"
        bt3.style = "background-color: black; color: white; width: 130px; padding: 5px; border: 0px; border-left: 1px solid gray;"
        bt4.style = "background-color: black; color: white; width: 130px; padding: 5px; border: 0px; border-left: 1px solid gray;"
        bt6.style = "background-color: black; color: white; width: 130px; padding: 5px; border: 0px; border-left: 1px solid gray;"
        card.innerHTML = "<div class='col-md-9'><div class='row' style='margin: auto;'><div class='col-md-4'>\
                <div class='card' onclick=selectmes(1) id='mes1'><img src='https://cdn.1112.com/1112/public/images/Stickers/6A.png' style='padding: 20px;'>\
                <p style='font-size: 15px;'>หน้ากากอะต้านไวรัส แต่เธอน่ารักอะ ต้านไม่ไหว</p></div></div>\
                <div class='col-md-4'><div class='card' style='background-color: black;' onclick=selectmes(2) id='mes2'>\
                <img src='https://cdn.1112.com/1112/public/images/Stickers/6B.png' style='padding: 20px;'>\
                <p style='font-size: 15px;'>ไหนๆก็ไม่มีใคร ลองคบกันหน่อยจะเป็นไรเล่า</p></div></div><div class='col-md-4'>\
                <div class='card' style='background-color: black;' onclick=selectmes(3) id='mes3'>\
                    <img src='https://cdn.1112.com/1112/public/images/Stickers/6C.png' style='padding: 20px;'>\
                    <p style='font-size: 15px;'>อ่านจบ เงยหน้า สบตา แล้วจะรู้ว่า ฉัน...เธอ</p></div></div></div></div>"
    }
    else if (num == 5){
        bt6.style = "background-color: hsl(139, 69%, 22%); border-radius: 10px 10px 0px 0px; \
        width: 130px; color: white; height: 40px; padding: 5px; border: 0px;"
        bt1.style = "background-color: black; color: white; width: 130px; padding: 5px; border: 0px;"
        bt2.style = "background-color: black; color: white; width: 130px; padding: 5px; border: 0px; border-left: 1px solid gray;"
        bt3.style = "background-color: black; color: white; width: 130px; padding: 5px; border: 0px; border-left: 1px solid gray;"
        bt4.style = "background-color: black; color: white; width: 130px; padding: 5px; border: 0px; border-left: 1px solid gray;"
        bt5.style = "background-color: black; color: white; width: 130px; padding: 5px; border: 0px; border-left: 1px solid gray;"
        card.innerHTML = "<div class='col-md-9'><div class='row' style='margin: auto;'><div class='col-md-4'>\
                <div class='card' onclick=selectmes(1) id='mes1'><img src='https://cdn.1112.com/1112/public/images/Stickers/7A.png' style='padding: 20px;'>\
                <p style='font-size: 15px;'>แด่น้องผู้หิวโหย</p></div></div>\
                <div class='col-md-4'><div class='card' style='background-color: black;' onclick=selectmes(2) id='mes2'>\
                <img src='https://cdn.1112.com/1112/public/images/Stickers/7B.png' style='padding: 20px;'>\
                <p style='font-size: 15px;'>หิวก็รีบทาน หารเท่าอยู่ดี</p></div></div><div class='col-md-4'>\
                <div class='card' style='background-color: black;' onclick=selectmes(3) id='mes3'>\
                    <img src='https://cdn.1112.com/1112/public/images/Stickers/7C.png' style='padding: 20px;'>\
                    <p style='font-size: 15px;'>ขอให้เจ้าภาพจงเจริญ</p></div></div></div></div>"
    }
}

function selectmes(num){
    let m1 = document.getElementById("mes1")
    let m2 = document.getElementById("mes2")
    let m3 = document.getElementById("mes3")
    if (num == 1){
        m1.style = "background-color: hsl(139, 69%, 22%); border-radius: 10px; margin: 20px; border: 2px solid hsl(139, 69%, 22%); height: 300px;"
        m2.style = "background-color: black"
        m3.style = "background-color: black"
    }
    else if (num == 2){
        m2.style = "background-color: hsl(139, 69%, 22%); border-radius: 10px; margin: 20px; border: 2px solid hsl(139, 69%, 22%); height: 300px;"
        m1.style = "background-color: black"
        m3.style = "background-color: black"
    }
    else if (num == 3){
        m3.style = "background-color: hsl(139, 69%, 22%); border-radius: 10px; margin: 20px; border: 2px solid hsl(139, 69%, 22%); height: 300px;"
        m1.style = "background-color: black"
        m2.style = "background-color: black"
    }
}