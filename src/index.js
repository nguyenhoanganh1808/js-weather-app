import { format } from 'date-fns';
import './style.css';
import { fetchWeather, toggleFOrC } from './weather';
import iconSet from './icon_set';

async function screenController() {
  let weatherData;
  let currentState = 'F';
  const searchField = document.querySelector('#location');
  const submitButton = document.querySelector('button');
  const celButton = document.querySelector('#cel');
  const fahButton = document.querySelector('#fah');

  async function firstRender() {
    weatherData = await fetchWeather('Ho Chi Minh');
  }
  await firstRender();

  function FToC(f) {
    return ((f - 32) / 1.8).toFixed(1);
  }

  function CToF(c) {
    return (c * 1.8 + 32).toFixed();
  }

  function createGridCard(title, imgSrc, temp) {
    const newDiv = document.createElement('div');
    const pTitle = document.createElement('p');
    const img = document.createElement('img');
    const pTemp = document.createElement('p');

    newDiv.className = 'weather-grid-card';
    pTitle.textContent = title;
    img.src = imgSrc;
    pTemp.textContent = `${temp}°`;

    newDiv.appendChild(pTitle);
    newDiv.appendChild(img);
    newDiv.appendChild(pTemp);

    return newDiv;
  }

  function updateScreen() {
    function updateLocationAndTime() {
      const pCurrentDate = document.querySelector('.currentDate');
      const h2City = document.querySelector('.city');
      const pShortDes = document.querySelector('.short-des');

      const date = new Date();

      const dateFormat = format(date, 'eee, dd MMM yyyy');
      const timeFormat = format(date, 'hh:mm a');

      pCurrentDate.textContent = `${dateFormat} | Local time: ${timeFormat}`;
      h2City.textContent = weatherData.address;
      pShortDes.textContent = weatherData.conditions;
    }
    updateLocationAndTime();

    function updateCurrentCondition() {
      const imgCurrentConditionIcon = document.querySelector(
        '.currentConditionIcon',
      );
      const h2CurrentTemp = document.querySelector('.currentTemp');
      const pRealFell = document.querySelector('.realFell');
      const pHumidity = document.querySelector('.humidity');
      const pWind = document.querySelector('.wind');
      const pRise = document.querySelector('.sunRise');
      const pSet = document.querySelector('.sunSet');

      imgCurrentConditionIcon.src = iconSet(weatherData.icon);
      h2CurrentTemp.textContent = `${weatherData.temperature}°`;
      pRealFell.textContent = `Real fell: ${weatherData.feelslike}°`;
      pHumidity.textContent = `Humidity: ${weatherData.humidity}%`;
      pWind.textContent = `Wind: ${weatherData.wind}km/h`;

      const riseFormat = format(weatherData.sunrise, 'hh:mm a');
      const sSetFormat = format(weatherData.sunset, 'hh:mm a');
      pRise.textContent = `Rise: ${riseFormat}`;
      pSet.textContent = `Set: ${sSetFormat}`;
    }
    updateCurrentCondition();

    function updateNextHour() {
      const weatherGridDiv = document.querySelector('.weather-grid');
      weatherGridDiv.textContent = '';
      [...weatherData.hours].forEach((hourData) => {
        const timeFormat = format(hourData.datetime, 'hh:mm a');
        const newCard = createGridCard(
          timeFormat,
          iconSet(hourData.icon),
          hourData.temp,
        );

        weatherGridDiv.appendChild(newCard);
      });
    }
    updateNextHour();

    function updateNextDay() {
      const weatherGridDiv = document.querySelector('.nextFiveDays > div');
      weatherGridDiv.textContent = '';
      [...weatherData.days].forEach((dayData) => {
        const dateFormat = format(dayData.date, 'E');
        const newCard = createGridCard(
          dateFormat,
          iconSet(dayData.icon),
          dayData.temp,
        );

        weatherGridDiv.appendChild(newCard);
      });
    }
    updateNextDay();
  }
  updateScreen();

  async function submitForm(e) {
    e.preventDefault();
    weatherData = await fetchWeather(searchField.value);
    if (currentState === 'C') {
      weatherData = toggleFOrC(weatherData, FToC);
    }
    updateScreen();
  }
  submitButton.addEventListener('click', submitForm);

  function toggleCelOrFah() {
    if (currentState === 'F') {
      currentState = 'C';
      celButton.className = 'buttonSelected';
      fahButton.className = '';
      weatherData = toggleFOrC(weatherData, FToC);
    } else {
      currentState = 'F';
      fahButton.className = 'buttonSelected';
      celButton.className = '';
      weatherData = toggleFOrC(weatherData, CToF);
    }
    updateScreen();
  }

  celButton.addEventListener('click', toggleCelOrFah);
  fahButton.addEventListener('click', toggleCelOrFah);
}

screenController();
