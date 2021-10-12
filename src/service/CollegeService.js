import axios from 'axios';
export default{
   
    putCollege: function(college){
        var ax = axios.create({
            baseURL: "http://localhost:9090",
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
          baseURL: "http://localhost:9090",
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
      getAllRequests: function() {
        var axi2 = axios.create({
          baseURL: "http://localhost:9090",
        });
        return new Promise((resolve, reject) => {
          axi2({
            method: "get",
            url: "/sendrequest/getAll",
          }).then((response) => {
             
              resolve(response);
            }).catch((err) => {
              reject(err);
            });
        });
      },
      deleteCollege: function(id){
        var ax = axios.create({
            baseURL: "http://localhost:9090",
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
            baseURL: "http://localhost:9090",
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
   
   
    updateCollege: function(college){
        var ax = axios.create({
            baseURL: "http://localhost:9090",
        });
        let config = {
            headers: {
                "Content-Type": "application/json"
            }
        };
        return new Promise((resolve, reject) => {
            ax
                .post("/college/update", college, config)
                .then(response => {
                    resolve(response);
                })
                .catch(err => {
                    reject(err);
                });
        }); 
    } ,
    // loginCollege: function(clg){
    //     var axio = axios.create({
    //         baseURL: "http://localhost:9090",
    //     });
    //     let config = {
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     };
    //     return new Promise((resolve, reject) => {
    //         axio
    //             .post("/college/login",clg, config)
    //             .then(response => {
    //                 resolve(response);
    //             })
    //             .catch(err => {
    //                 reject(err);
    //             });
    //     }); 
    //  }
   
}