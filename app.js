const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const cityResults = document.getElementById('search-container');
const currentTemp = document.getElementById('current-temp');
const currentWind = document.getElementById("current-wind");
const currentHumidity = document.getElementById("current-humidity");
const currentUv = document.getElementById("current-uv");

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
        currentTemp.textContent = "Temp: " + cityData.main.temp + "C";
        currentWind.textContent = "Wind: " + cityData.wind.speed + "C";
        currentHumidity.textContent = "Humidity: " + cityData.main.humidity + "C";
    




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
            console.log(forcast);
            for (let index = 0; index < forcast.list.length; index++) {
                const day = forcast.list[index];
                console.log(day);
                let thisMoment = moment.unix(day.dt);
                console.log(thisMoment);
                
            }
        //     <div class="card">
        //     <div class="card-body">
        //       <h4 id="forcast-date0" class="card-title">Date</h4>
        //       <p id= "icon0" class="card-text">icon</p>
        //       <p id= "temp0" class="card-text">temp</p>
        //       <p id= "humidity0" class="card-text">Humidity</p>
        //     </div>
        //   </div>


        })

    }


function getApiUv(){
}

function search(){
    console.log(searchInput.value);
    getApiTempWindHumidity()


    }