const baseURL = `https://api.weatherapi.com/v1/forecast.json?key=`
const apiKey = `cfe035ef31c74d5a9d6204728232808`;
//=Indianapolis

/**
 * The function `getData` makes an AJAX request to retrieve JSON data from a file and logs the data to
 * the console, or logs an error if the request fails.
 */
function getData() {
    $.getJSON('./data/data.json', (data) => {
        let students = data.STUDENTS;
        $.each(students, (idx, student) => {
            
            $(".students").append(`<p>${student.firstName}</p>`);
            $.each(student.classes, (idx, course) => {
                $(".students").append(`${course.number}`);
            })

        })
    })
    .fail((e) => {
        console.log("error", e)
    })
}

function initListeners() {
    $("#submit").on("click", (e) => {
        e.preventDefault();
        let city = $("#city").val();
        let zip = $("#zip").val();

        if(city != ''){
            let cityURL = baseURL + apiKey + "&q=" + city + "&days=10&aqi=no&alerts=no";
            console.log(cityURL);
            $.getJSON(cityURL, (data) => {
                console.log(data)
            });
        }
        if(zip != ''){
            let zipURL = baseURL + apiKey + "&q=" + zip + "&days=10&aqi=no&alerts=no";
            console.log(zipURL);
            $.getJSON(zipURL, (data) => {
                console.log(data)
            });
        }
    })
}
 
$(document).ready(function () { 
    initListeners(); 
    getData();
});