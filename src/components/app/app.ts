import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { Start, DrawSources} from '../../interface';


class App {
    controller: AppController;
    view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        document
            .querySelector('.sources')
            ?.addEventListener('click', (e) => this.controller.getNews(e, (data: Start) => {
                this.view.drawNews(data)}));
        this.controller.getSources((data: DrawSources) => this.view.drawSources(data));
    }
}

export default App;
