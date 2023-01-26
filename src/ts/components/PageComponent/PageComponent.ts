import Component from "../Component/Component";

export default class PageComponent extends Component {
  title: string;
  constructor() {
    super(document.body, "container");
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
      <section class= list">
      </section>
      <section class="list">
      </section>
    `;
  }
}
