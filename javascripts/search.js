SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('results-container'),
  json: '/gitreference/search/results.json',
  searchResultTemplate: `
    <div class="search-result-item list-item-container">
        <a href="{url}" class="link-decoration-none">{title}</a>
    </div>`,
  noResultsText:
    '<div class="search-result-item list-item-container">No results found.</div>',
  fuzzy: true,
});
