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
   
}