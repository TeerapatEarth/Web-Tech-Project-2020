var left = 1;
var right = 0;
function toggle(data) {
    if (left == 1 && right == 0 && data != "sent1") {
        let change = document.getElementById("sent2");
        change.style = "background-color: hsl(4, 96%, 33%); margin-left: 10px;";
        let change2 = document.getElementById("sent1");
        change2.style = "background-color: hsl(127, 47%, 17%);";
        left = 0;
        right = 1;
        let dropdown = document.getElementById("selectlo");
        dropdown.innerHTML = "<form action='' method='POST'>\
        <select name='location' id='locations' style='\
        background-color: hsl(127, 47%, 17%);color: white; border-radius: 10px;height: 34px;padding: 3px;width: 340px;'>\
            <option disabled selected>เลือกสาขา</option>\
            <option>304 พลาซ่า ศรีมหาโพธิ์</option>\
            <option>5 แยก วารินชำราบ อุบล</option>\
            <option>กรมหลวงชุมพร</option>\
            <option>กระทู้ ภูเก็ต</option>\
            <option>จอมเทียน</option>\
        </select>\
    </form>";
    }
    else if (left == 0 && right == 1 && data != "sent2") {
        let change = document.getElementById("sent2");
        change.style = "background-color: hsl(127, 47%, 17%); margin-left: 10px;";
        let change2 = document.getElementById("sent1");
        change2.style = "background-color: hsl(4, 96%, 33%);"
        left = 1;
        right = 0;
        let dropdown = document.getElementById("selectlo");
        dropdown.innerHTML = "<form action='' method='POST'>\
        <select name='location' id='locations' style='\
        background-color: hsl(127, 47%, 17%);color: white; border-radius: 10px;height: 34px;padding: 3px;width: 340px;'>\
            <option disabled selected>เลือกที่อยู่ปัจจุบัน</option>\
            <option>ใช้ตำแหน่งปัจจุบันของฉัน</option>\
            <option>+ เพิ่มที่อยู่ใหม่</option>\
        </select>\
    </form>";
    }
}