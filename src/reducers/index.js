import { combineReducers  } from 'redux'
import moviesReducer from './moviesReducer'
// import productosReducer from './productosReducer'
// import validacionReducer from './validacionReducer'


    // productos: productosReducer,
    // error: validacionReducer
export default combineReducers({ 
    movies: moviesReducer
})