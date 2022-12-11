type loaderType = {
  endpoint: string;
  options?: {
    sources: string;
  };
};

enum Err {
  status1 = 401,
  status2 = 404,
}

type optionType = {
  sources: string;
};

type callback<T> = (data: T) => void;

class Loader {
  readonly options: { apiKey: string };
  readonly baseLink: string;

  constructor(baseLink: string, options: { apiKey: string }) {
    this.baseLink = baseLink;
    this.options = options;
  }

  getResp<T>(link: loaderType, callback: callback<T>) {
    this.load('GET', link.endpoint, callback, link.options || {});
  }

  errorHandler(res: Response): Response | never {
    if (!res.ok) {
      if (res.status === Err.status1 || res.status === Err.status2)
        console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
      throw Error(res.statusText);
    }
    return res;
  }

  makeUrl(options: Partial<optionType>, endpoint: string) {
    const urlOptions: Record<string, string> = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key: string) => {
      url += `${key}=${urlOptions[key]}&`;
    });

    return url.slice(0, -1);
  }

  load<T>(method: string, endpoint: string, callback: callback<T>, options: Partial<optionType>) {
    fetch(this.makeUrl(options, endpoint), { method })
      .then((res) => this.errorHandler(res))
      .then((res) => res.json())
      .then((data: T) => callback(data))
      .catch((err: Error) => console.error(err));
  }
}

export default Loader;
