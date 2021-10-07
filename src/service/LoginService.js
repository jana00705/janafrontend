import axios from 'axios';
export default{
loginCollege: function(clg){
    var axio = axios.create({
        baseURL: "http://localhost:8080",
    });
    let config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    return new Promise((resolve, reject) => {
        axio
            .post("/college/login",clg, config)
            .then(response => {
                resolve(response);
            })
            .catch(err => {
                reject(err);
            });
    }); 
 }
}