import PageComponent from "./components/PageComponent/PageComponent";
import CardHtml from "./CardHtml/CardHtml";
import series from "./data/series";
import SeriesCard from "./SeriesCard/SeriesCard";


const renderPage = new PageComponent();

renderPage.render();


const container = document.querySelector(".container")!;

const cardElement = new CardHtml(container);
cardElement.render();
