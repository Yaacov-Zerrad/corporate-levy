// import Metric from "../models/metric";
// axios
import axios from "axios";

// const instance = axios.create(
//     {
//             baseURL: "http://127.0.0.1/api",
//             withCredentials: false,
//             headers: {
//               'Access-Control-Allow-Origin' : '*',
//               'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',   
//           }
//       })
// const apiUrl = "http://13.37.107.254";
const apiUrl = "http://127.0.0.1:8000";
export default class ServicesApi {


    static getServices(): Promise<any | null> {
        // static getMetrics(address: any): Promise<Metric|any|null> {
        console.log('caller');
        
        return axios.get(`${apiUrl}/services/`)
            // .then((response) => response.json())
            .then((res) => (this.isEmpty(res) ? null : res.data))
            .catch((error) => this.handleError(error));
    }

    static getPosts(): Promise<any | null> {
        // static getMetrics(address: any): Promise<Metric|any|null> {
        console.log('caller');
        
        return axios.get(`${apiUrl}/services-posts/`)
            // .then((response) => response.json())
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
        console.log(contact);
        
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

    // static dataPrepa(res:any) {
    //   // console.log(res);

    //     let metric: Metric[] = [
    //         {isLink:false, name:'Name', value:res.name !== null? res.name : 'No find'},
    //         {isLink:false, name:'Symbol', value: res.symbol !== null? res.symbol: 'No find'},
    //         {isLink:false, name:'First Transfer Date', value: res.firstTransferDate !== null?  res.firstTransferDate: null} ,
    //         {isLink:false, name:'Last Transfer Date', value: res.lastTransferDate !== null?  res.lastTransferDate: null} ,
    //         {isLink:false, name:'Nb Of Transfers', value: res.nbOfTransfer !== null? res.nbOfTransfer: null },
    //         {isLink:false, name:'Top Holders Repartition', value: res.holdersRepartition !== null? res.holdersRepartition.toFixed(2): null },
    //         {isLink:false, name:'Nb Of Holders', value: res.db !== null? res.db.uniqHolderNb: null },
    //         {isLink:false, name:'Description', value: res.db !== null? res.db.description:null },
    //         {isLink:true, name:'Official Website', value: res.db !== null? res.db.official_website_url:null },
    //         {isLink:true, name:'Twitter', value: res.db !== null? res.db.official_website_url:null },
    //         {isLink:true, name:'Discord', value: res.db !== null? res.db.discord_url:null },
    //         {name: "status",  value: res.db !== null? define_status(res.db.is_scam) : 'Not Certified'}

    //       ]
    //       return metric
    //     }
}

