import mustache from 'mustache';
import template from './template.html';
import './style.css';

export default class Header {
  constructor(dataParent){
    this.dataParent = dataParent;
    this.defaultData = {
      title: 'Title'
    }
  }

  render(data = this.defaultData) {
    const output = mustache.render(template, data);
    document.querySelector(`[data-parent = ${this.dataParent}]`).insertAdjacentHTML('beforeend', output);
  }
}