let requestURL = 'puffjson.json';
let request = new XMLHttpRequest();
request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
        dataReportStatus(JSON.parse(request.responseText));
    }
};
request.open("GET", requestURL, true);
request.send();
function dataReportStatus(data) {
    let box = document.getElementById("puff");
    for(let i = 0; i < 4; i++){
        box.innerHTML += "<div class='col-md-3'><div class='card'\
         style='background-color: black; border-radius: 20px; margin: 10px;'>\
        <img src='"+data[i].img+"' style='width: 100%; margin-top: 20px;'><p style='text-align: center; font-size: 12px;'>"+data[i].name+"</p>\
        <div class='row' style='margin: auto;'><button id='but' style='height: 30px; margin-bottom: 15px;\
         border: 0px; border-radius: 10px;'><p>"+data[i].price+
        " ฿&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\
        &nbsp;&nbsp;&nbsp;&nbsp;+ <i class='fa fa-shopping-basket'></i></p></button></div>\
        </div></div></div></div></div>";
    }
}
