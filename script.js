var h2 = document.querySelector(".calender-picture h2");
var h3 = document.querySelector(".calender-picture h3");

var monthArr = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
    
var dayArr = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

var day31MonthArr = [
    "January",
    "March",
    "May",
    "July",
    "August",
    "October",
    "December"
];

var d = new Date();
var obj = getDate();

function getDate() {
    var month = d.getMonth();
    month = monthArr[month];

    var day = d.getDay();
    day = dayArr[day];

    var date = d.getDate();
    h2.innerHTML = day + ", " + date; // Changed day to date
    h3.innerHTML = month; // Added missing assignment operator

    return { m: month, dy: day, dt: date, yr: d.getFullYear() };
}

function generateCalendar() { // Changed function name to generateCalendar
    var days;

    if (obj.m === "February" && (obj.yr % 4 === 0 && obj.yr % 100 !== 0 || obj.yr % 400 === 0)) { // Corrected leap year calculation
        days = 29;
    } else if (obj.m === "February") {
        days = 28;
    } else if (day31MonthArr.includes(obj.m)) {
        days = 31;
    } else {
        days = 30;
    }

    var startOfMonth = moment().clone().startOf("month").format("dddd"); // Changed variable name to startOfMonth
    var dayIndex = dayArr.indexOf(startOfMonth);
    for (var j = 0; j < dayIndex; j++) {
        var element = document.createElement("div");
        element.className = "calender-number-empty"; // Corrected class name
        document.getElementById("lc").appendChild(element);
    }

    for (var k = 1; k <= days; k++) { // Changed condition to include last day of the month
        var element = document.createElement("div");
        obj.dt === k ? (element.className = "calender-number calender-number--current") : (element.className = "calender-number"); // Corrected class name
        element.appendChild(document.createTextNode(k));
        document.getElementById("lc").appendChild(element);
    }
}

generateCalendar();


