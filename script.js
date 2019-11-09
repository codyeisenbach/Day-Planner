const m = moment();

$("#currentDay").text(m.format("dddd") + ", " + m.format("MMMM") + " " + m.format("Do"));

var currentHour = m.format("H");

var hoursArr = [
    {
        label: "9 AM",
        contents: "placeholder",
        hour: "9"
    },
    
    {
        label: "10 AM",
        contents: "placeholder",
        hour: "10"
    },

    {
        label: "11 AM",
        contents: "placeholder",
        hour: "11"
    },

    {
        label: "12 PM",
        contents: "placeholder",
        hour: "12"
    },

    {
        label: "1 PM",
        contents: "placeholder",
        hour: "13"
    },

    {
        label: "2 PM",
        contents: "placeholder",
        hour: "14"
    },

    {
        label: "3 PM",
        contents: "placeholder",
        hour: "15"
    },

    {
        label: "4 PM",
        contents: "placeholder",
        hour: "16"
    },

    {
        label: "5 PM",
        contents: "placeholder",
        hour: "17"
    }];


for (i = 0; i < hoursArr.length; i++) {
    var hProp = $('#h').prop("h", hoursArr[i].hour);
    $(hProp).text(hoursArr[i].label);
    $( "#t-block" ).clone().appendTo(".container");
};

$("#block-list").eq(0).remove();