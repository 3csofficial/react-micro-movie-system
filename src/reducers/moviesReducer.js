// Acciones
import {
    AGREGAR_PRODUCTOS,
    AGREGAR_PRODUCTOS_EXITO,
    AGREGAR_PRODUCTOS_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITOSA,
    DESCARGA_PRODUCTOS_ERROR,
    OBTENER_PRODUCTO_ELIMINAR,
    PRODUCTO_ELIMINADO_EXITO,
    PRODUCTO_ELIMINADO_ERROR,
    OBTENER_PRODUCTO_EDITAR,
    PRODUCTO_EDITAR_EXITO,
    PRODUCTO_EDITAR_ERROR,
    COMENZAR_EDICION_PRODUCTOS,
    PRODUCTO_EDITADO_EXITO,
    PRODUCTO_EDITADO_ERROR,
    MYLISTING_REQUESTING,
    MYLISTING_SUCCESS,
    MYLISTING_ERROR
} from '../types'

// Cada reducer tiene su state inicial
const iniatialState = {
    mylist: [],
    movies: [],
    error: null,
    loading: false,
    producto: {}
}

// Funcion del Reducer
export default function(state = iniatialState, action){
    switch (action.type) {
        
        
        case COMENZAR_DESCARGA_PRODUCTOS:
            return {
                ...state,
                loading: true,
                producto: {}
            }
        case DESCARGA_PRODUCTOS_EXITOSA:
            return {
                ...state,
                movies: action.payload,
                loading: false,
                error: false,
                producto: {}
            } 
        case DESCARGA_PRODUCTOS_ERROR: 
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

        case OBTENER_PRODUCTO_ELIMINAR:
            return {
                ...state,
                error: null
            }
        case PRODUCTO_ELIMINADO_EXITO:
            return {
                ...state,
                productos: state.productos.filter( producto => producto._id !== action.payload )
            }
        case PRODUCTO_ELIMINADO_ERROR: 
            return {
                ...state,
                error: true
            }

        case OBTENER_PRODUCTO_EDITAR: 
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
}

