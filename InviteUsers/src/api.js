export default function apiUsers() {
    return fetch('https://reqres.in/api/users', {cache : "no-store"})
        .then(response => response.json())
        .then(response => response)
        .catch(err => console.error(err));
}

