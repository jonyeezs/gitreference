var sjs = SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('results-container'),
  json: '/search/results.json',
  searchResultTemplate: '<li><a href="{url}">{title}</a></li>',
  fuzzy: true
});