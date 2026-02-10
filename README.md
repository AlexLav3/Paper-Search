# Paper-search, PubMed Research Paper Search Tool

A JavaScript tool to search and fetch academic papers from Europe PMC API.
d
## What It Does

Searches biomedical literature in the Europe PMC database

Fetches multiple pages of results automatically

Extracts key information for each paper:
Title
Authors
Journal
Publication year
Full text availability
Link to the article
Optionally includes the abstract in the results

## Requirements

- Node.js v12 or higher
- `node-fetch` package (if using Node < 18)

## Installation
git clone https://github.com/yourusername/paper-search.git
cd paper-search

dependencies:
npm install node-fetch
(Skip if using Node 18+ as fetch is built-in)

const result = await fetchAllPages('sleep ADHD', 3, 2025, 'Harvard');
fs.writeFileSync('results.json', JSON.stringify(result, null, 2));
fs.writeFileSync('results.csv', toCSV(result));


## Usage

Edit the main() function in index.js (or your main script) with your search parameters:

const result = await fetchAllPages('search term', int, 2025, 'affiliation');
fs.writeFileSync('results.json', JSON.stringify(result, null, 2));
fs.writeFileSync('results.csv', toCSV(result)); 

query – Search term (required)
maxpages – Maximum number of pages to fetch (optional)
searchYear – Year of publication (optional)
affiliation – Filter by author affiliation (optional)

Results will be saved as results.json and results.csv (if uncommented) in the current directory.

## License
MIT License