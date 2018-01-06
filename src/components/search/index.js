import mustache from 'mustache';
import template from './template.html';
import SearchResult from '../searchResult';

export default class Search {
  constructor(dataParent){
    this.dataParent = dataParent;
    this.defaultData = {
      title: 'Title'
    }
  }

  render(data = this.defaultData) {
    const output = mustache.render(template, data);
    document.querySelector(`[data-parent = ${this.dataParent}]`).insertAdjacentHTML('beforeend', output);
    document.querySelector('[data-click = searchBtn]').addEventListener('click', event => {
      let value = document.querySelector('[data-value = searchInput]').value;
      this.search(value)
    });
  }

  search(searchValue) {
    if (searchValue) {
      fetch(`https://ac.cnstrc.com/autocomplete/${searchValue}?autocomplete_key=CD06z4gVeqSXRiDL2ZNK&i=d48c29ae-18a2-4465-ae9c-5bc0317d3170&s=8&query=${searchValue}`)
      .then(res => res.json())
      .then(res => {
        const packages = res.sections.packages.map(pack => {
          return {
            value: pack.value,
            description: pack.data.description,
            score: pack.data.suggested_score
          }
        });
         packages.forEach(pack => {
          const searchResult = new SearchResult('search-result');
          searchResult.render(pack);
        });
      })
      .catch( alert );
    }
  }
}


