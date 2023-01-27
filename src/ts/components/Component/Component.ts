import { type ComponentStructure } from "./types";

class Component implements ComponentStructure {
  public element: Element;
  public parentElement: Element;
  constructor(parentElement: Element, className = "", tagName = "") {
    this.element = document.createElement(tagName);
    this.element.className = className;
    this.parentElement = parentElement;
  }

  public render() {
    this.parentElement.appendChild(this.element);
  }
}
export default Component;
