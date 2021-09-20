$(function(){

    // Constants and Variables
    const BASE_URL = 'https://api.openweathermap.org/';
    const API_KEY = '0ce87aa2100a69592418d2c072b88da3';
    let weatherData;
    
    // Cached Element References
    const $cityName = $('#city-name'); // selecting the element for the city name
    const $weather = $('#weather');
    const $mainWeather = $('#main-weather');
    const $temp = $('#temp');
    const $form = $('form'); // step 1 is always select the dom element first
    const $input = $('input[type="text"]');
    
    // step attach an event listener
    
    // Event Listeners
    // event handler functions are passed an object containing data representing the event
    $form.on('submit', handleGetData)
    
    
    // Functions
    
    function handleGetData(event) {
        // Set up a request to our api using Javascript
        event.preventDefault(); 
        // this method is used to turn off the default page refresh behavior
        const cityName = $input.val();
        $input.val("");
        // $.ajax() returns a Promise object that is used to resolve the request
        // We call .then to register our success callback and our failure callback
        // one of the functions will be called based on the failure or success of our request
        // if successful the success callback will receive an object representing the resulting data
        $.ajax(`${BASE_URL}data/2.5/weather?q=${cityName}&units=imperial&APPID=${API_KEY}`).then(function (data) {
            // the success callback
            // instead visualizing our data in the console here
            // we will add the data as text to the three elements
            weatherData = data; // data comes from our success callback once the data comes 
            render();
        }, function (error) {
            // the failure callback
            console.log(error);
        });
    }
    
    
    function render() {
        $cityName.text(weatherData.name);
        $weather.text(weatherData.weather[0].main);
        $mainWeather.text(weatherData.main.feels_like);
        $temp.text(weatherData.main.temp);
    }
    
        
    });