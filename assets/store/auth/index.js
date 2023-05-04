import store from "../index";
import axios from "axios";

export default {
    namespace: true,
    state: {
        token: null,
        user: null
    },
    actions:{
        async register(_, form){
            return await axios.post('/register',form)
                .then((res)=>{
                    console.log(res);

                }).catch((error)=>error)
        }
    }
}
