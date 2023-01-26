import CardHtml from "./CardHtml/CardHtml";
import series from "./data/series";
import SeriesCard from "./SeriesCard/SeriesCard";

const container = document.querySelector(".container")!;

const cardElement = new CardHtml(container);
cardElement.render();
