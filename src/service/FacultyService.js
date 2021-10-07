import axios from 'axios';
export default{
   
   
    putFaculty: function(faculty){
        var axi = axios.create({
            baseURL: "http://localhost:8080",
        });
        let config = {
            headers: {
                "Content-Type": "application/json"
            }
        };
        return new Promise((resolve, reject) => {
            axi
                .post("/faculty/insert", faculty, config)
                .then(response => {
                    resolve(response);
                })
                .catch(err => {
                    reject(err);
                });
        }); 
    },
    getAllFaculty: function() {
        var axi = axios.create({
          baseURL: "http://localhost:8080",
        });
        return new Promise((resolve, reject) => {
          axi({
            method: "get",
            url: "/faculty/getAll",
          }).then((response) => {
             
              resolve(response);
            }).catch((err) => {
              reject(err);
            });
        });
      },
      deleteFaculty: function(id){
        var ax = axios.create({
            baseURL: "http://localhost:8080",
        }); 
        return new Promise((resolve, reject) => {
            ax({
                method: 'get',
                url: '/faculty/delete/' + id,
            }).then((response) => {                     
                resolve(response);
            }).catch((err) => {
                reject(err);
            });
        });             
    },
    getFaculty: function(id){
        var ax1 = axios.create({
            baseURL: "http://localhost:8080",
        }); 
        return new Promise((resolve, reject) => {
            ax1({
                method: 'get',
                url: '/faculty/get/' + id,
            }).then((response) => {                     
                resolve(response);
            }).catch((err) => {
                reject(err);
            });
        });             
    },
    updateFaculty: function(college){
        var ax = axios.create({
            baseURL: "http://localhost:8080",
        });
        let config = {
            headers: {
                "Content-Type": "application/json"
            }
        };
        return new Promise((resolve, reject) => {
            ax
                .post("/faculty/update", college, config)
                .then(response => {
                    resolve(response);
                })
                .catch(err => {
                    reject(err);
                });
        }); 
    } ,
   
}