import axios from 'axios';
export default{
   
   
    putStudent: function(student){
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
                .post("/student/insert", student, config)
                .then(response => {
                    resolve(response);
                })
                .catch(err => {
                    reject(err);
                });
        }); 
    },
    getAllStudents: function() {
        var ax = axios.create({
          baseURL: "http://localhost:8080",
        });
        return new Promise((resolve, reject) => {
          ax({
            method: "get",
            url: "/student/getAll",
          }).then((response) => {
             
              resolve(response);
            }).catch((err) => {
              reject(err);
            });
        });
      },
      deleteStudent: function(id){
        var ax1 = axios.create({
            baseURL: "http://localhost:8080",
        }); 
        return new Promise((resolve, reject) => {
            ax1({
                method: 'get',
                url: '/student/delete/' + id,
            }).then((response) => {                     
                resolve(response);
            }).catch((err) => {
                reject(err);
            });
        });             
    },
   
}