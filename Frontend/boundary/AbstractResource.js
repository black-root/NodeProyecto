export default class AbstractResource {
    constructor() {
        this.baseURL = `http://172.25.0.30:3000/`;
    }

    /*

        Entity() {
            return this.entity;
        }
    */

    findAll(entity) {
        return fetch(this.baseURL + entity,
            {
                method: "GET",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            }
        ).then(function (request) {
            // Convertir a JSON
            return request.json();
        }).then(function (data) {
            // data es un objeto JSON
           // console.log(data);
            return data;

        });
    }
    findById(entity, id){
        return fetch(`${this.baseURL}${entity}/${id}`,
            {
                method: "GET",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            }
        ).then(function (request) {
            // Convertir a JSON
            return request.json();
        }).then(function (data) {
            // data es un objeto JSON
           // console.log(data);
            return data;

        });
    }

    create(entity, json) {
        return fetch(this.baseURL + entity,
            {
                method: 'post',
                headers: {
                    'Accept': 'application/json, application/xml, text/play, text/html, *.*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(json)
            }).then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err))
    }

    edit(entity, json) {
        return fetch(this.baseURL + entity,
            {
                method: 'put',
                headers: {
                    'Accept': 'application/json, application/xml, text/play, text/html, *.*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(json)
            }).then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err))
        }

        findByRange(first, pagesize)
        {

            let url = this.baseURL + "?pagesize=" + pagesize + "&first=" + first;

            fetch(url).then(function (respuesta) {

                return respuesta.json();


            });

        }
}