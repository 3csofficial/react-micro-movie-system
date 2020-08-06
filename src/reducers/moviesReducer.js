// Actions
import {
    MOVIES_REQUESTING,
    MOVIES_SUCCESS,
    MOVIES_ERROR,
    ADD_TO_MY_LIST_REQUESTING,
    ADD_TO_MY_LIST_SUCCESS,
    ADD_TO_MY_LIST_ERROR,
    MYLISTING_REQUESTING,
    MYLISTING_SUCCESS,
    MYLISTING_ERROR
} from '../types'

// initial state reducer
const iniatialState = {
    mylist: [],
    movies: [],
    error: null,
    loading: false,
    producto: {}
}

// Function Reducer for application state changes
export default function(state = iniatialState, action){
    switch (action.type) {
           
        case MOVIES_REQUESTING:
            return {
                ...state,
                loading: true,
                producto: {}
            }
        case MOVIES_SUCCESS:
            return {
                ...state,
                movies: action.payload,
                loading: false,
                error: false,
                producto: {}
            } 
        case MOVIES_ERROR: 
            return {
                ...state,
                movies: [],
                error: true,
                loading: false,
                producto: {}
            }

            
        case MYLISTING_REQUESTING:
            return {
                ...state,
                loading: true,
                producto: {}
            }
        case MYLISTING_SUCCESS:
            return {
                ...state,
                mylist: action.payload,
                loading: false,
                error: false,
                producto: {}
            } 
        case MYLISTING_ERROR: 
            return {
                ...state,
                mylist: [],
                error: true,
                loading: false,
                producto: {}
            }

            

        case ADD_TO_MY_LIST_REQUESTING:
            return {
                ...state,
                error: null
            }
        case ADD_TO_MY_LIST_SUCCESS:
            return {
                ...state,
                productos: state.productos.filter( producto => producto._id !== action.payload )
            }
        case ADD_TO_MY_LIST_ERROR: 
            return {
                ...state,
                error: true
            }
        default:
            return state;
    }
}

