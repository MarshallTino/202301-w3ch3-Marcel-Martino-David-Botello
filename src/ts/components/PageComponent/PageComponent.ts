import Component from "../Component/Component";
import series from "../../data/series";
import { type Series } from "../../types/types";
export default class PageComponent extends Component {
  series;
  watchedSeriesCount: number;
  pendingSeriesCount: number;

  constructor() {
    super(document.body, "container");
    this.series = series;
    this.getWatchedSeriesCount(this.series);
  }

  public getWatchedSeriesCount(array: Series) {
    let count = 0;
    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for (let i = 0; i < array.length; i++) {
      if (array[i].isWatched) {
        count++;
      }
    }

    this.pendingSeriesCount = 5 - count;
    this.watchedSeriesCount = count;
  }

  public render() {
    super.render();
    this.element.innerHTML = `
    <header class="main-header">
      <h1 class="main-title">My Series</h1>
    </header>
    <main class="main-content">
      <h2 class="main-content__title">Series list</h2>
      </main>
        <section class= "list">
        <h3 class="list__title">Pending series</h3>
        <span class="list__info">You have ${this.pendingSeriesCount} series pending to watch</span>
          <ul class= "series">

          </ul>  
        </section>
        <section class="list">
        <h3 class="list__title">Watched series</h3>
        <span class="list__info">You have watched ${this.watchedSeriesCount} series</span>
          <ul class= "series">

          </ul>  
        </section>
    `;
  }
}
