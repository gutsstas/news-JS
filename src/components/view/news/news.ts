import './news.css';
import { Article } from '../../../interface';

class News {
  draw(data: Article[]) {
    const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;
    const fragment = document.createDocumentFragment();
    const newsItemTemp = <HTMLTemplateElement>document.querySelector('#newsItemTemp');

    news.forEach((item, idx) => {
      const newsClone = <HTMLTemplateElement>newsItemTemp.content.cloneNode(true);

      if (idx % 2) newsClone.querySelector('.news__item')?.classList.add('alt');

      (newsClone.querySelector('.news__meta-photo') as HTMLTemplateElement).style.backgroundImage = `url(${
        item.urlToImage || 'img/news_placeholder.jpg'
      })`;
      (newsClone.querySelector('.news__meta-author') as HTMLTemplateElement).textContent =
        item.author || item.source.name;
      (newsClone.querySelector('.news__meta-date') as HTMLTemplateElement).textContent = item.publishedAt
        .slice(0, 10)
        .split('-')
        .reverse()
        .join('-');

      (newsClone.querySelector('.news__description-title') as HTMLTemplateElement).textContent = item.title;
      (newsClone.querySelector('.news__description-source') as HTMLTemplateElement).textContent = item.source.name;
      (newsClone.querySelector('.news__description-content') as HTMLTemplateElement).textContent = item.description;
      (newsClone.querySelector('.news__read-more a') as HTMLTemplateElement).setAttribute('href', item.url);

      fragment.append(newsClone);
    });

    (document.querySelector('.news') as HTMLTemplateElement).innerHTML = '';
    (document.querySelector('.news') as HTMLTemplateElement).appendChild(fragment);
  }
}

export default News;
