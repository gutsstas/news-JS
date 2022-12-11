import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    // super('https://nodenews.up.railway.app/', {
    super('https://newsapi-redirect-production.up.railway.app/', {
      // apiKey: '50946d7e46834c9984b646746a5f8de4', // получите свой ключ https://newsapi.org/
      apiKey: '62c6e92dfc0043788084d02eeee8fc7b', // получите свой ключ https://newsapi.org/
    });
  }
}

export default AppLoader;
