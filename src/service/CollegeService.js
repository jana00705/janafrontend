import axios from 'axios';
export default{
   
    putCollege: function(college){
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
                .post("/college/insert", college, config)
                .then(response => {
                    resolve(response);
                })
                .catch(err => {
                    reject(err);
                });
        }); 
    },
    getAllColleges: function() {
        var axi = axios.create({
          baseURL: "http://localhost:8080",
        });
        return new Promise((resolve, reject) => {
          axi({
            method: "get",
            url: "/college/getAll",
          }).then((response) => {
             
              resolve(response);
            }).catch((err) => {
              reject(err);
            });
        });
      },
      deleteCollege: function(id){
        var ax = axios.create({
            baseURL: "http://localhost:8080",
        }); 
        return new Promise((resolve, reject) => {
            ax({
                method: 'get',
                url: '/college/delete/' + id,
            }).then((response) => {                     
                resolve(response);
            }).catch((err) => {
                reject(err);
            });
        });             
    },
    getCollege: function(id){
        var ax1 = axios.create({
            baseURL: "http://localhost:8080",
        }); 
        return new Promise((resolve, reject) => {
            ax1({
                method: 'get',
                url: '/college/get/' + id,
            }).then((response) => {                     
                resolve(response);
            }).catch((err) => {
                reject(err);
            });
        });             
    },
   
}