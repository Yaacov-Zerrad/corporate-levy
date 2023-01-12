import axios from "axios";

let apiUrl = "http://127.0.0.1:8000";
// apiUrl = "https://api.neurofeedbackhypnosemarseille.fr";
export default class ServicesApi {


    static getServices(): Promise<any | null> {

        return axios.get(`${apiUrl}/services/`)
            .then((res) => (this.isEmpty(res) ? null : res.data))
            .catch((error) => this.handleError(error));
    }

    static getPosts(): Promise<any | null> {

        
        return axios.get(`${apiUrl}/services-posts/`)

            .then((res) => (this.isEmpty(res) ? null : res.data))
            .catch((error) => this.handleError(error));
    }
    static getTestimony(): Promise<any | null> {

        return axios.get(`${apiUrl}/contact/testimony`)

        .then((res) => (this.isEmpty(res) ? null : res.data))
        .catch((error) => this.handleError(error));

    }

    static addHeart(data:any):Promise<any | null> {
        let heart = data.heart + 1
        let datat = {title:data.title, content:data.content,heart:heart}
        return axios.put(`${apiUrl}/services-posts/${data.id}/`,datat)
        .then((res) => (this.isEmpty(res) ? null : res.data))
        .catch((error) => this.handleError(error));
    }
    // static sendMessage(contact:any): Promise<any | null> {
        
    //     console.log(contact);
    //     const t = false
    //     return new Promise(function(resolve, reject){
    //         if (t) {
    //             resolve("There is a count value.");
    //         } else {
    //             reject("There is no count value");
    //         }
        

    //    });
    // }


    static sendMessage(contact:any): Promise<any | null> {
        
        return axios.post(`${apiUrl}/contact/send-message`, contact)
        .then((res) => {
            console.log(res);
            return this.isEmpty(res) ? null : res.data
        })
        .catch((error) => this.handleError(error));  
    }



    static isEmpty(data: Object): boolean {
        return Object.keys(data).length === 0;
    }
    static handleError(error: Error): void {
        console.error(error);
    }

}

