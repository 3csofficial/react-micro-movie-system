// Acciones
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


import clienteAxios from '../config/axios';

// Movie List API
export function moviesActions(){
    return(dispatch) => {
        dispatch( obtainMovies() )
            clienteAxios.get('http://www.omdbapi.com/?apikey=32395055&type=movie&s=bad')
            .then(response => {
                dispatch( onSuccess(response.data) )
            })
            .catch(error => {
                dispatch ( onError() )
            })
    }
}

export const obtainMovies = () => ({
    type: MOVIES_REQUESTING
})

export const onSuccess = productos => ({
    type: MOVIES_SUCCESS,
    payload: productos
})

export const onError = () => ({
    type: MOVIES_ERROR
})




// Add to My List and Watch List
export function addToMyListAction(id,status) {
    return (dispatch) => {
        dispatch( obtainMyAddList() )
        
        clienteAxios.post(`https://adonis-server-public-api.herokuapp.com/api/v1/add-to-list`,{
            imdbId:id,
            status:status
        })
        .then(response => {
            dispatch( onMyAddListSuccess(id) )
        })
        .catch(error => {
            // dispatch( onMyAddListError() )
        })

    }
}

export const obtainMyAddList = () => ({
    type: ADD_TO_MY_LIST_REQUESTING
}) 

export const onMyAddListSuccess = id => ({
    type: ADD_TO_MY_LIST_SUCCESS,
    payload: id
})

export const onMyAddListError = () => ({
    type: ADD_TO_MY_LIST_ERROR
})



// My List Actions
export function myListActions(){
    return(dispatch) => {
        dispatch( obtainMyList() )
            clienteAxios.get('https://adonis-server-public-api.herokuapp.com/api/v1/fetch-list')
            .then(response => {
                dispatch( onSuccessMyList(response.data) )
            })
            .catch(error => {
                dispatch ( onErrorMyList() )
            })
    }
}

export const obtainMyList = () => ({
    type: MYLISTING_REQUESTING
})

export const onSuccessMyList = data => ({
    type: MYLISTING_SUCCESS,
    payload: data
})

export const onErrorMyList = () => ({
    type: MYLISTING_ERROR
})


// My Remove List Actions
export function removeToMyListAction(id,status) {
    return (dispatch) => {
        dispatch( removeToMyList() )
        
        clienteAxios.post(`https://adonis-server-public-api.herokuapp.com/api/v1/delete-my-list`,{
            imdbId:id,
            status:status
        })
        .then(response => {
            dispatch( removeToMyListSuccess(id) )
        })
        .catch(error => {
            dispatch( removeToMyListError() )
        })

    }
}

export const removeToMyList = () => ({
    type: ADD_TO_MY_LIST_REQUESTING
}) 

export const removeToMyListSuccess = id => ({
    type: ADD_TO_MY_LIST_SUCCESS,
    payload: id
})

export const removeToMyListError = () => ({
    type: ADD_TO_MY_LIST_ERROR
})
