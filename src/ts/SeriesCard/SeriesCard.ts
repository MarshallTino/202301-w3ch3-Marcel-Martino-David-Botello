import series from "../data/series";
import type SeriesDataStructure from "../data/types";
import { type SeriesCardStructure } from "./types";

class SeriesCard implements SeriesCardStructure {
  id: number;
  name: string;
  creator: string;
  year: number;
  poster: string;
  isWatched: boolean;
  score: number;
  emmies: number;

  constructor(seriesData: SeriesDataStructure) {
    this.id = seriesData.id;
    this.name = seriesData.name;
    this.year = seriesData.year;
    this.poster = seriesData.poster;
    this.isWatched = seriesData.isWatched;
    this.score = seriesData.score;
    this.emmies = seriesData.emmies;
  }
}
export default SeriesCard;
