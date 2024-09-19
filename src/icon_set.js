import snow from '../icons/snow.svg';
import rain from '../icons/rain.svg';
import fog from '../icons/fog.svg';
import wind from '../icons/wind.svg';
import cloudy from '../icons/cloudy.svg';
import partlyCloudyDay from '../icons/partly-cloudy-day.svg';
import partlyCloudyNight from '../icons/partly-cloudy-night.svg';
import clearDay from '../icons/clear-day.svg';
import clearNight from '../icons/clear-night.svg';

export default function iconSet(icon) {
  switch (icon) {
    case 'snow':
      return snow;
    case 'rain':
      return rain;
    case 'fog':
      return fog;
    case 'wind':
      return wind;
    case 'cloudy':
      return cloudy;
    case 'partly-cloudy-day':
      return partlyCloudyDay;
    case 'partly-cloudy-night':
      return partlyCloudyNight;
    case 'clear-day':
      return clearDay;
    case 'clear-night':
      return clearNight;
    default:
      return null;
  }
}
