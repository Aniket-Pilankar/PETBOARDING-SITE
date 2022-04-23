import { ALLPETSERVICES_LIST } from "./action"


const initState = {
    petServiceDetails : [],
    
}

export const petServiceReducer = (store=initState,{type,payload}) => {
    switch(type){
        case ALLPETSERVICES_LIST : 
            return {...store,petServiceDetails:[...payload]} 

        default :
            return store
    }
}