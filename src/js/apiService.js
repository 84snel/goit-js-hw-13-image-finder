const apiKey = '20814652-dfe55ccb2fafedca1b4762012';
const options = {
  headers: {},
};

export default class ApiService {
  constructor() {
    this._query = '';
    this.page = 1;
    this.perPage = 12;
  }

  fetchData() {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=${this.perPage}&key=${apiKey}`;

    return fetch(url, options)
      .then(response => response.json())
      .then(({ hits }) => {
        this.incrementPage();
        return hits;
      });
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this._query;
  }

  set query(newQuery) {
    this._query = newQuery;
  }
}
