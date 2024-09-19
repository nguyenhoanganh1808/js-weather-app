import './style.css';

function weather(data) {
  function getNextFiveHours() {
    const date = new Date();
    const currentHour = date.getHours();

    return [...data.days[0].hours]
      .filter((hourData) => {
        const currentDateAndHour = date;
        currentDateAndHour.setHours(hourData.datetime.split(':')[0]);

        const hour = currentDateAndHour.getHours();

        return hour > currentHour && hour <= currentHour + 5;
      })
      .map((hourData) => ({
        temp: hourData.temp,
        icon: hourData.icon,
      }));
  }

  function getNextFiveDays() {
    const currentDate = new Date();
    return [...data.days]
      .filter((dayData, index) => {
        const dataDate = new Date(dayData.datetime);

        const diffInTime = dataDate.getTime() - currentDate.getTime();
        const diffInDays = diffInTime / (1000 * 3600 * 24);

        return diffInDays > 0 && diffInDays <= 5;
      })
      .map((dayData) => ({
        temp: dayData.temp,
        icon: dayData.icon,
        date: new Date(dayData.datetime),
      }));
  }
  console.log(getNextFiveDays());
  getNextFiveDays();
  return {
    address: data.resolvedAddress,
    temperature: data.currentConditions.temp,
    datetime: data.currentConditions.datetime,
    humidity: data.currentConditions.humidity,
    wind: data.currentConditions.windspeed,
    fellslike: data.currentConditions.fell,
    visibility: data.currentConditions.visibility,
    sunrise: data.currentConditions.sunrise,
    sunset: data.currentConditions.sunset,
    tempmax: data.currentConditions.tempmax,
    tempmin: data.currentConditions.tempmin,
    hours: getNextFiveHours(),
    days: getNextFiveDays(),
  };
}

async function fetWeather(location) {
  const API_KEY = 'VDKUKL8EQDV9T899DT62TFX73';
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${API_KEY}`;

  try {
    const response = await fetch(url, { mode: 'cors' });
    const data = await response.json();
    console.log(data);
    const hehe = weather(data);
    console.log(hehe);
  } catch (err) {
    console.log(err);
  }
}

fetWeather('Ho Chi Minh');
