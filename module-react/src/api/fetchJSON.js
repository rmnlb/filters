export default function (url) {
    return fetch(url, {
        type: 'GET',
        contentType: 'JSON'
    })
        .then(res => res.json())
}