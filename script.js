const m = moment();
$("#currentDay").text(m.format("dddd") + ", " + m.format("MMMM") + " " + m.format("Do"));

var currentHour = m.format("H");
var items = []; 
var hoursArr = [];
if (localStorage.getItem("schedule")) {
    hoursArr = JSON.parse(localStorage.getItem("schedule"));
} else {
    hoursArr = [
        {
            label: "9 AM",
            contents: "",
            hour: "9"
        },
        
        {
            label: "10 AM",
            contents: "",
            hour: "10"
        },
    
        {
            label: "11 AM",
            contents: "",
            hour: "11"
        },
    
        {
            label: "12 PM",
            contents: "",
            hour: "12"
        },
    
        {
            label: "1 PM",
            contents: "",
            hour: "13"
        },
    
        {
            label: "2 PM",
            contents: "",
            hour: "14"
        },
    
        {
            label: "3 PM",
            contents: "",
            hour: "15"
        },
    
        {
            label: "4 PM",
            contents: "",
            hour: "16"
        },
    
        {
            label: "5 PM",
            contents: "",
            hour: "17"
        }];
    
}

  
for (i = 0; i < hoursArr.length; i++) {
    
    var tBlock = $( "#t-block" ).clone();
    var hProp = tBlock.find(".hour");
    var nId = hoursArr[i].hour;
    var eventCol = tBlock.find(".event-col");
    var saveBtn = tBlock.find(".saveBtn");
    saveBtn.attr('hour', nId);
    var inputField = tBlock.find(".form-control");
    inputField.attr('hour', nId);

    inputField.val(hoursArr[i].contents);

    hProp.text(hoursArr[i].label);
    tBlock.appendTo(".container");
    
currentHour = 10;
    if (nId < currentHour) {
        eventCol.addClass("past");
    }
    else if (nId == currentHour) {
        eventCol.addClass("present");
    }
    else {
        eventCol.addClass("future");
    }

    
};

$("#block-list").eq(0).remove();

$(".saveBtn").click(function (e) {
    var btn = $(e.target);
    var parent = btn.parent();
    var formControl = parent.find(".form-control");
    var value = formControl.val();
    for (i = 0; i < hoursArr.length; i++) {
        if (hoursArr[i].hour == btn.attr("hour")) {
            hoursArr[i].contents = value;
        }
    }
    localStorage.setItem("schedule", JSON.stringify(hoursArr));
});
