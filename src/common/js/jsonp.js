import originJSOMP from 'jsonp';
import { resolve } from 'when';
export default function jsonp(url, data, option) {
    return new Promise((resolver, reject) => {
        originJSOMP(url,option,(err,data)=>{

        })
    })

}
