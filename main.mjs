async function fetchAllPages(query, maxpages = 10) {
    try{
        const params = new URLSearchParams({
            query: query,
            format: 'json',
            pageSize: 25,
            resultType: 'core'
        });
        
        let url = `https://www.ebi.ac.uk/europepmc/webservices/rest/search?${params}`;
        const allItems = [];
        let pages = 0;
        
        while (url && pages < 25) {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            
            const data = await response.json();
            allItems.push(...data.resultList.result);
            pages++;
            url = data.nextPageUrl; 
        }    
        
        return allItems;

    } catch (error){
        console.error('Failed:' , error.message);
        return [];
    }
}

async function main() {
    const result = await fetchAllPages('sleep', 3);
    console.log(`Tot articles: ${result.length}`);
    //console.log(JSON.stringify(result.slice(0, 2), null, 2));
}

main();