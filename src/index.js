import './style.css';
import { fetchWeather } from './weather';

function screenController() {
  const searchField = document.querySelector('#location');
  const submitButton = document.querySelector('button');

  async function submitForm(e) {
    e.preventDefault();
    const weatherData = await fetchWeather(searchField.value);
    console.log(weatherData);
  }

  submitButton.addEventListener('click', submitForm);
}

screenController();
