import React, {useEffect} from 'react'
import MatTable from '../MaterialTable'
// Redux
import { useDispatch, useSelector } from 'react-redux'
import { moviesActions,myListActions } from '../../actions/MoviesActions';

import Switch from '@material-ui/core/Switch';

// Componente Spinner 
import Spinner from '../Spinner'

const headCells = [
  { id: 'title', numeric: false, disablePadding: true, label: 'Title' },
  { id: 'year', numeric: true, disablePadding: false, label: 'Year' },
  { id: 'poster', numeric: true, disablePadding: false, label: 'Poster' },
];

function filtering(origMovies,myList,state) {  
    let filtered = '';
    console.log(myList,'myList');
    const list = (state.checkedA) ? myList.addtomylist : myList.addtomywatchlist;
    if(list){
        filtered = origMovies.filter(function(o1){
            return list.some(function(o2){
                return o1.imdbID == o2.imdbId;  
            });
        });
        return filtered;
    }else{
        return [];
    }
}

const MyList = () => {

    const [state, setState] = React.useState({
        checkedA: true,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const dispatch = useDispatch();
    
    useEffect( () => {
        const callMovies = () => dispatch( moviesActions() )
        callMovies();
        const myListMovies = () => dispatch( myListActions() )
        myListMovies();
        ;
    }, [dispatch])

    const loading = useSelector((state => state.movies.loading ));
    const error = useSelector((state => state.movies.error ));
    const movies = useSelector((state => state.movies.movies ));
    const mylist = useSelector((state => state.movies.mylist ));
    const moviesCollection = (movies.length==0 || movies.Response=="False") ? [] : movies.Search;
    const filteredMovies = filtering(moviesCollection,mylist,state);

   

    return ( 
        <React.Fragment>
            <Switch
                checked={state.checkedA}
                onChange={handleChange}
                name="checkedA"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
            />         
            {(moviesCollection.length==0 && movies.Response=="False") ? <div className="font-weight-bold alert alert-danger text-center mt-5">{movies.Error}</div> : null }            
                <h2 className="text-center my-5">{state.checkedA ? 'ADD TO MY LIST' : 'ADD TO WATCH LIST'}</h2>
                    <MatTable
                        state={state}
                        columns={headCells}
                        rows={filteredMovies}
                    />
            {loading ? <Spinner /> : null}
        </React.Fragment>
     );
}
 
export default MyList;