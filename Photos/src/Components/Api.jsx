function apiCollection(category, setIsLoading, page) {
    return fetch(`https://65f0aed7da8c6584131c4398.mockapi.io/photo_collection?page=${page}&limit=3&${category ? `category=${category}` : "" }`, {cache : "no-store"})
        .then(response => response.json())
        .then(response => response)
        .catch(err => console.error(err))
        .finally(() => setIsLoading(false));
}

function apiCategory() {
    return fetch(`./categories.json`, {cache : "no-store"})
        .then(response => response.json())
        .then(response => response)
        .catch(err => console.error(err));
}


export {apiCollection, apiCategory}