import mustache from 'mustache';
import template from './template.html';
import './style.css';

export default class SearchResult {
  constructor(dataParent){
    this.dataParent = dataParent;
    this.defaultData = {
      value: 'value',
      description: 'description',
      score: 1
    }
  }

  render(data = this.defaultData) {
    const output = mustache.render(template, data);
    document.querySelector(`[data-parent = ${this.dataParent}]`).insertAdjacentHTML('beforeend', output);
  }
}


