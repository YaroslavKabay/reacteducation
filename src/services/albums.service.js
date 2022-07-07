let getAlbums = fetch('https://jsonplaceholder.typicode.com/albums')
    .then(value => value.json());
export {getAlbums}