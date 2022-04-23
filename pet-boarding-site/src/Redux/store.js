import { combineReducers, createStore } from "redux";
import { loginReducer } from "./LoginSignUp/reducer";
import { petServiceReducer } from "./PetServiceInfo/reducer";

const rootReducer = combineReducers({
    login: loginReducer,
    petServiceall:petServiceReducer
})

export const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)