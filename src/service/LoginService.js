import axios from 'axios';
export default{
loginCollege: function(log){
    var axio = axios.create({
        baseURL: "http://localhost:9090",
    });
    let config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    return new Promise((resolve, reject) => {
        axio
            .post("/college/login",log, config)
            .then(response => {
                resolve(response);
            })
            .catch(err => {
                reject(err);
            });
    }); 
 },
 loginStudent: function(log){
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
            .post("/student/login",log, config)
            .then(response => {
                resolve(response);
            })
            .catch(err => {
                reject(err);
            });
    }); 
 },
 loginAdmin: function(log){
    var axi = axios.create({
        baseURL: "http://localhost:9090",
    });
    let config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    return new Promise((resolve, reject) => {
        axi
            .post("/admin/login",log, config)
            .then(response => {
                resolve(response);
            })
            .catch(err => {
                reject(err);
            });
    }); 
 }
}