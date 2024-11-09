const input= document.getElementById('input');
const searchButton = document.getElementById('searchButton');
const cities = document.getElementById('city');
const temperature = document.getElementById('temperature');
const comment = document.getElementById('comment');
const error= document.getElementById('error');

const key = '19ba8ab464ff4579d588462c639c781e'; 

searchButton.onclick = async () => {
  const city = input.value.trim();
  if (!city) {
    error.textContent = "Please enter a city name.";
    return;
  }

 
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`;

  try {
    const res = await fetch(apiUrl);
    const data = await res.json();

    // Check the city
    if (data.cod !== 200) {
      error.textContent = `City not found please check your city name.`;
      return;
    }

    // Display the weather 
    cities.textContent = `${data.name}, ${data.sys.country}`;
    temperature.textContent = `${data.main.temp.toFixed(1)}°C`;
    comment.textContent = data.weather[0].description;
    

  } catch (error) {
    error.textContent = "Error fetching weather.";
  }
};
