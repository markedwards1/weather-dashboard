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
const currentTemp = document.getElementById('current-temp');
const currentWind = document.getElementById("current-wind");
const currentHumidity = document.getElementById("current-humidity");
searchBtn.addEventListener('click', search);


const attriNum = 0
//getHistory();


//search geo location api with  users city input 
function getAPIcityLatLong(){
    //const requestUrlCity = "http://api.openweathermap.org/geo/1.0/direct?q=" + searchInput.value + "&limit=5&appid=75da345c5502ba66bc2eb539c0c3e2f0";
   // let requestUrlCity = "https://api.openweathermap.org/data/2.5/weather?q=“ + "perth" + ”&units=metric” + "&appid=" + "75da345c5502ba66bc2eb539c0c3e2f0";
    const requestUrlCity = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput.value + "&units=metric&appid=75da345c5502ba66bc2eb539c0c3e2f0"

    fetch(requestUrlCity)
    .then(function (responseCity){
        return responseCity.json();
    })
    .then(function (cityData){
        console.log(cityData);
        console.log(cityData.main.temp);
        console.log(cityData.wind.speed);
        currentTemp.textContent = "Temp: " + cityData.main.temp + "C";
        currentWind.textContent = "Wind: " + cityData.wind.speed + "C";
        currentHumidity.textContent = "Humidity: " + cityData.main.humidity + "C";
        //uv index https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key}


           
        // for (let index = 0; index < cityData.length; index++) {
        //     // const element = cityData[index];
        //     console.log(cityData[index].name);
        //     console.log(cityData[index].country);                 
        //         const city = document.createElement('button');
            

        //       ;
        //         city.setAttribute('id', "cityButton" + index);                                
        //         //Print out text content for city & country
        //         city.textContent = cityData[index].name + " " + cityData[index].state + " " + cityData[index].country;                
                


        //         // append child element search - container
        //         cityResults.appendChild(city);         
        //         let city1 = document.getElementById('cityButton' + index);
        //         city1.addEventListener('click', saveCity);
        //         function saveCity(){
        //             city1 = city1.textContent;
        //             console.log("savecity()" + city1);
        //             // location.reload();

        //             //set local storage
        //             let storedCity = localStorage.setItem(index, city1);
        //             cityDisplay();
        //             //get local storage
               
        //         }

                // function cityDisplay(){
                //     let displaycity = localStorage.getItem(index);
                //     //displaycity = displaycity.textContent;
                //     console.log("getItem " + displaycity);
                //     const citySide1 = document.getElementById('city-side-1');
                //     citySide1.textContent = (displaycity);

                    //render search history into 
                      

                 
                    // we need to get the local storage to save multipul items with different keys. 




                  })
        }
        //get lat & long
        //add eventListener to save city to history. 
        
        //when i click on the city name, it adds it to the history    
        
        
        
   // })
    
    
//} // end of getAPIcityLatLong


// function getHistory(){
//     const getHistory = localStorage.getItem(0);
//     console.log('outside ' + getHistory)

// }



// //grab users city input from search




function search(){
    console.log(searchInput.value);
    getAPIcityLatLong()


    }