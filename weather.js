import API_KEY from "/apikey.js";


const showDay = document.getElementById("day");
const currentDate = document.getElementById("currentDate");
const weatherMusic = document.getElementById("weatherMusic");
const imageContainer=document.getElementById("weatherSymb");
const apiKey =API_KEY;

let href = "";

//show the day
const day = new Date().getDay();

const dayOfTheWeek = [
  "Monday",
  "Tueday",
  "Wendesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
showDay.innerText = dayOfTheWeek[day - 1];

//show the date
const newDate = new Date();
const options = { month: "long" };
const monthName = newDate.toLocaleString("en-US", options);

currentDate.innerText = newDate.getDate() + ", " + monthName;

//WEATHER RELATED


//from the browser

if ("geolocation" in navigator) {
    weatherMusic.textContent = "Loading...";
    navigator.geolocation.getCurrentPosition(function (position) {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
  
      const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
  
      
      showData(apiURL);
    });
  } else {
    console.log("there was an error");
    weatherMusic.textContent = " En egy ringy rongy torpe vagyok";
  }

  export function randomNumbers(data) {
    const number = Math.floor(Math.random() * data.length);
    return number;
  }
  
 export  function showData(url) {
    const dataList = {
      clear: [
        "bNowU63PF5E",
        "VNfFTuIk-dQ",
        "KIYiGA_rIls",
        "KQetemT1sWc",
        "WTrNsAsjEmY",
        "nbXgHAzUWB0",
        "gte3BoXKwP0",
      ],
  
      clouds: [
        "MiGooY-Wsao",
        "10Jg_25ytU0",
        "-T8_o-hCDvk",
        "Dp8sYTlLQRY",
        "V91GRYjlR2I",
        "MBfK4UoHsuo",
      ],
      rain: [
        "PjFoQxjgbrs",
        "cFFBSSntZgs",
        "WxBM5odToA8",
        "sySlY1XKlhM",
        "vhucF6E_x4A",
      ],
      thunderstorm: [
        "T5al0HmR4to",
        "6yP1tcy9a10",
        "a2giXO6eyuI",
        "6VwC2P_gYGg",
        "7G2-FPlvY58",
      ],
      snow: ["p0vM9iINl28", "f9tA5XcYBqc"],
    };
  
    getWeatherData(url, (result) => {
      
  
      if (result.cod === 200) {
          const temp =(result?.main.temp).toFixed(0);
         
        const description = result?.weather[0]?.description;
        const imageIcon=result?.weather[0]?.icon
  
  
        const singleSong = Object.keys(dataList).filter((item) =>
          description.includes(item)
        );
  
        const songArray = dataList[singleSong];
        const randomSongChoose = songArray[randomNumbers(songArray)];
        
  
        href = `https://www.youtube.com/watch?v=${randomSongChoose}`;
  
        weatherMusic.innerHTML = `<a href=${href} target="_blank" class="weather-music">${singleSong} in songs <i class="fa-brands fa-youtube"></i></a>`;
  
        const src=`https://openweathermap.org/img/wn/${imageIcon}.png`
        imageContainer.innerHTML =`<div class="temp-display"><img src=${src} alt=${singleSong}/>
        <span >${temp} °C</span>
        </div>`
  
      }
    });
  }
  
  export function getWeatherData(url, callback) {
    fetch(url).then((response) => {
      response.json().then((data) => {
        callback(data);
      });
    });
  }