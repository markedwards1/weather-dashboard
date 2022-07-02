const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const cityResults = document.getElementById('search-container');
const currentTemp = document.getElementById('current-temp');
const currentWind = document.getElementById("current-wind");
const currentHumidity = document.getElementById("current-humidity");
const currentUv = document.getElementById("current-uv");
const currentCity = document.getElementById("current-city");
const cityList = document.getElementById("city-list");







searchBtn.addEventListener('click', search);


const attriNum = 0



function getApiTempWindHumidity(){
    const requestUrlCity = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput.value + "&units=metric&appid=75da345c5502ba66bc2eb539c0c3e2f0"
    
    fetch(requestUrlCity)
    .then(function (responseCity){
        return responseCity.json();
    })
    .then(function (cityData){
        console.log(cityData);
        console.log(cityData.main.temp);
        console.log(cityData.wind.speed);
        console.log(cityData.name)
        ;        currentTemp.textContent = "Temp: " + cityData.main.temp + "C";
        currentWind.textContent = "Wind: " + cityData.wind.speed + "C";
        currentHumidity.textContent = "Humidity: " + cityData.main.humidity + "C";
        currentCity.textContent = cityData.name;
        
        
        
        
        
        let latitude = cityData.coord.lat;
        let longitude = cityData.coord.lon;
        
        console.log(latitude + " " + longitude);
        const requestUV = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&exclude=hourly,daily&appid=75da345c5502ba66bc2eb539c0c3e2f0";
        
        fetch(requestUV)
        .then (function (responseUv){
            return responseUv.json();
        })
        .then(function (UvData){
            console.log (UvData);
            console.log (UvData.current.uvi);
            currentUv.textContent = "UV Index: " + UvData.current.uvi;
        })
        
    })
    
    const requestForcast = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchInput.value + "&units=metric&appid=75da345c5502ba66bc2eb539c0c3e2f0";
    
    fetch(requestForcast)
    .then (function (requestForcast){
        return requestForcast.json();
    })
    .then (function (forcast){
        console.log(forcast.list);
        
        for (let index = 0; index < forcast.list.length; index++) {
            const day = forcast.list[index];
            //console.log(day);
            //console.log(day.dt_txt);
            let thisMoment = moment.unix(day.dt);
            //console.log({thisMoment});
            
            //const timeOfDay = moment.unix(thisMoment._i ).format("DD MM HH:mm");
            // console.log({timeOfDay});
            //console.log(thisMoment.format("HH:mm"));
            
            const cityName = searchInput;
            storeCity("city", cityName);
            
            // this creates the arrays for the weekly forcast. 
                const weatherSearch = [{ timeIndex : thisMoment.format("HH:mm"), 
                                        datetime : thisMoment.format("DD MM YYYY HH:mm"), 
                                        daytemp : day.main.temp, 
                                        dayHumid :day.main.humidity, 
                                        daytext: day.dt_txt}];          

                console.log(weatherSearch);
  
            }
        })
    }

function getItems(key){
    return JSON.parse(localStorage.getItem(key)) || []
}

function storeCity(key, itemName){

    
const exisitingItems = getItems(key);

exisitingItems.push(itemName);

if(exisitingItems.length >5){
    exisitingItems.splice(0, 1);

    localStorage.setItem(key, JSON.stringify(exisitingItems));
}


    
// localStorage.setItem("cityStorage", JSON.stringify(searchInput.index));
   }

   
   function renderCity(){
       
       
}



function search(){
    console.log(searchInput.value);
    getApiTempWindHumidity()
    renderCity();
    // storeCity();
    
    const cityLi = document.createElement("Li");
    cityLi.innerHTML = searchInput.value;
    cityList.appendChild(cityLi);
    
    
    }