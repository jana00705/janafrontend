import axios from 'axios';
export default{
   
    putCollegefb: function(feedback){
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
                .post("/feedback/insert",feedback, config)
                .then(response => {
                    resolve(response);
                })
                .catch(err => {
                    reject(err);
                });
        }); 
    },
    // getAllColleges: function() {
    //     var axi = axios.create({
    //       baseURL: "http://localhost:8080",
    //     });
    //     return new Promise((resolve, reject) => {
    //       axi({
    //         method: "get",
    //         url: "/college/getAll",
    //       }).then((response) => {
             
    //           resolve(response);
    //         }).catch((err) => {
    //           reject(err);
    //         });
    //     });
    //   },
 
   
   
    
   
   
}