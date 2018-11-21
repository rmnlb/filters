export default function (url) {
    return fetch(url, {
        type: 'GET',
        contentType: 'JSON'
    })
        .then(res => {
            console.log(res.text());
            res.text()

        })
}