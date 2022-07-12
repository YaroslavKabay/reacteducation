export class CommentApiService {

    _url ='https://jsonplaceholder.typicode.com/comments'

    getComments(){
        return fetch(this._url)
            .then(value => value.json());
    }

    getComment(id){
        return fetch(this._url +'/' + id)
            .then(value => value.json());
    }


}