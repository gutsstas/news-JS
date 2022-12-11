import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://newsapi-redirect-production.up.railway.app/', {
      apiKey: '50946d7e46834c9984b646746a5f8de4', // получите свой ключ https://newsapi.org/
    });
  }
}

export default AppLoader;
