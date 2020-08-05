import { combineReducers  } from 'redux'
import moviesReducer from './moviesReducer'
import productosReducer from './productosReducer'
import validacionReducer from './validacionReducer'


export default combineReducers({ 
    productos: productosReducer,
    movies: moviesReducer,
    error: validacionReducer
})