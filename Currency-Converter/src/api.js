export default function ApiCurrency({fromCurrency}) {
    return fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`, {cache : "no-store"})
        .then(response => response.json())
        .then(response => response)
        .catch(err => console.error(err));
}
