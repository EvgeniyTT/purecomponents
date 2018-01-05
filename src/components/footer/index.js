import mustache from 'mustache';
import template from './template.html';


export default class Footer {
  constructor(copyright){
    this.copyright = copyright;
    this.defaultData = {
      paraska: 'dedededd'
    }
  }

  render(data = this.defaultData) {
    const output = mustache.render(template, data);
    document.querySelector('#app').innerHTML = output;
  }
}