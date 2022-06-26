//when the user types in the search form they choose a city - auto complete?
//when the user clicks search the data base is search and results are displayed. 
// the search results are saved to the history
// the for the most recent search should display on the weather dashboard
// the 5 day forcast should be presented for that weather
//there should be an icon to show the weather. 

//when the user searches the database they should be taken to the result page where they can select from 5 different areas with the same name.
//once selected that should be saved to local storage and then go back to index.

// geo code the location and then search the api with those details. 

//api.openweathermap.org/data/2.5/weather?id=524901&appid=75da345c5502ba66bc2eb539c0c3e2f0


//below finds the lat and long for a city
//http://api.openweathermap.org/geo/1.0/direct?q=Perth&limit=5&appid=75da345c5502ba66bc2eb539c0c3e2f0

//below finds the weather using lat and long
//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=75da345c5502ba66bc2eb539c0c3e2f0

//example //https://api.openweathermap.org/data/2.5/weather?lat=55.7522&lon=37.6156&appid=75da345c5502ba66bc2eb539c0c3e2f0


const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const cityResults = document.getElementById('search-container');

searchBtn.addEventListener('click', search);


const attriNum = 0




//search geo location api with  users city input 
function getAPIcityLatLong (){
    const requestUrlCity = "http://api.openweathermap.org/geo/1.0/direct?q=" + searchInput.value + "&limit=5&appid=75da345c5502ba66bc2eb539c0c3e2f0";
    fetch(requestUrlCity)
    .then(function (responseCity){
        return responseCity.json();
    })
    .then(function (cityData){
        //console.log(cityData);
        
        // separate cityData in to 5 separate arrays.    
        for (let index = 0; index < cityData.length; index++) {
            // const element = cityData[index];
            console.log(cityData[index].name);
            console.log(cityData[index].country);
            
            
            
            
            //create variables to display city & contries
            // for (let attr = 0; attr < 5; attr++) {                
            //     console.log(attr);
            //     const buttonattr = "CityButton" + attr;    
                
                
                const city = document.createElement('button');
                city.setAttribute('id', "cityButton" + index);                                
                //Print out text content for city & country
                city.textContent = cityData[index].name + " " + cityData[index].state + " " + cityData[index].country;
                //country.textContent = cityData[index].country;
                
                // append child element search - container
                cityResults.appendChild(city);
                
                // const cityBtn = document.getElementById('buttonCity');
                // cityBtn.addEventListener('click', addToHistory);
                // addToHistory();
                // function addToHistory(){
                //     console.log(cityBtn);
                // }
        }
        //get lat & long
        //add eventListener to save city to history. 
       //when i click on the city name, it adds it to the history    
   // }
})

} // end of getAPIcityLatLong




//grab users city input from search
function search(){
    console.log(searchInput.value);
    getAPIcityLatLong()

}