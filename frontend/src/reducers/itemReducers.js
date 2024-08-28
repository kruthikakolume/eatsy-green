import { ERROR, FETCH_ITEMS, FETCH_ITEMS_SUCCESS } from "../actions/types";


const itemReducer=(state={data:[],loading:true},action)=>{
     switch (action.type) {
         case FETCH_ITEMS:
             return {loading:true,data:action.payload}
         case FETCH_ITEMS_SUCCESS:
             return{loading:false,data:action.payload}
         case ERROR:
             return {loading:false,error:action.payload,data:[]}         
         default:
             return state
     }
}

export default itemReducer