import Component from "../Component/Component";
import series from "../data/series";

class CardHtml extends Component {
  public isWatched(): void {
    const ulElement: HTMLUListElement = document.createElement("ul");
    this.parentElement.appendChild(ulElement);

    const seriesNotWatched = series.filter((serie) => !serie.isWatched);
    seriesNotWatched.forEach((serie) => {
      this.element = document.createElement("li");
      ulElement.appendChild(this.element);
      this.element.innerHTML = `
      <img class="serie__poster"
              src="${serie.poster}"
              alt="Game of Thrones poster" />
      <h4 class="serie__title">${serie.name}</h4>
      <span class="serie__info">${serie.creator} (${serie.year})</span>
      <ul class="score">
              <li class="score__star">
                <button><i class="icon icon--score far fa-star" title="1/5"></i></button>
              </li>
              <li class="score__star">
                <button><i class="icon icon--score far fa-star" title="2/5"></i></button>
              </li>
              <li class="score__star">
                <button><i class="icon icon--score far fa-star" title="3/5"></i></button>
              </li>
              <li class="score__star">
                <button><i class="icon icon--score far fa-star" title="4/5"></i></button>
              </li>
              <li class="score__star">
                <button><i class="icon icon--score far fa-star" title="5/5"></i></button>
              </li>
            </ul>
    `;
    });

    const seriesWatched = series.filter((serie) => serie.isWatched);
    seriesWatched.forEach((serie) => {
      this.element = document.createElement("li");
      ulElement.appendChild(this.element);
      this.element.innerHTML = `
      <img class="serie__poster"
              src="${serie.poster}"
              alt="Game of Thrones poster" />
      <h4 class="serie__title">${serie.name}</h4>
      <span class="serie__info">${serie.creator} (${serie.year})</span>
      <ul class="score">
              <li class="score__star">
                <button><i class="icon icon--score far fa-star" title="1/5"></i></button>
              </li>
              <li class="score__star">
                <button><i class="icon icon--score far fa-star" title="2/5"></i></button>
              </li>
              <li class="score__star">
                <button><i class="icon icon--score far fa-star" title="3/5"></i></button>
              </li>
              <li class="score__star">
                <button><i class="icon icon--score far fa-star" title="4/5"></i></button>
              </li>
              <li class="score__star">
                <button><i class="icon icon--score far fa-star" title="5/5"></i></button>
              </li>
            </ul>
    `;
    });
  }

  public render(): void {
    super.render();
    this.isWatched();
  }
}
export default CardHtml;
