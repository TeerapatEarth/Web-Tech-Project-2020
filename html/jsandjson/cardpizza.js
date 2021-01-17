let requestURL = 'pizzajson.json';
let request = new XMLHttpRequest();
request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
        dataReportStatus(JSON.parse(request.responseText));
    }
};
request.open("GET", requestURL, true);
request.send();
function dataReportStatus(data) {
    let box = document.getElementById("pizza");
    let allpizza = ["MightyMeat", "ChickenDeluxe", "SuperDeluxe", "SeafoodDeluxe", "SeafoodCocktail", "SuperSeafood", "MeatDeluxe"
                    , "ShrimpCocktail", "ClassicMushroom&Tomato", "TomYumKung", "Ham&CrabSticks", "Hawaiian", "DoubleCheese", "ChickenTrio",
                    "Freestyle", "DoublePepperoni"]
    for(let i = 0; i < 16; i++){
        box.innerHTML += "\
        <div class='col-md-3'>\
            <div class='card'style='background-color: black; border-radius: 20px; margin: 10px;'>\
                <img src='"+data[i].img+"' style='width: 100%; margin-top: 20px;'>\
                    <p style='text-align: center;'>"+data[i].name+"</p>\
                <div class='row' style='margin: auto;'>\
                    <a href='"+allpizza[i]+".html'><button class='but' style='height: 30px; margin-bottom: 15px; border: 0px; border-radius: 10px;'>\
                        <p>"+data[i].price+" ฿&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+ เลือก</p>\
                    </button></a>\
                </div>\
            </div>\
        </div>";
    }
}
