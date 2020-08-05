import React, {useEffect} from 'react'
import MatTable from '../MaterialTable'
// Redux
import { useDispatch, useSelector } from 'react-redux'
import { moviesActions } from '../../actions/MoviesActions';

// Componente Spinner 
import Spinner from '../Spinner'

const headCells = [
  { id: 'title', numeric: false, disablePadding: true, label: 'Title' },
  { id: 'year', numeric: true, disablePadding: false, label: 'Year' },
  { id: 'poster', numeric: true, disablePadding: false, label: 'Poster' },
];

const Movies = () => {

    const dispatch = useDispatch();
    
    useEffect( () => {
        const callMovies = () => dispatch( moviesActions() )
        callMovies();
        ;
    }, [dispatch])

    const loading = useSelector((state => state.movies.loading ));
    const error = useSelector((state => state.movies.error ));
    const movies = useSelector((state => state.movies.movies ));
    const moviesCollection = (movies.length==0 || movies.Response=="False") ? [] : movies.Search;

   

    return ( 
        <React.Fragment>
            {error ? <div className="font-weight-bold alert alert-danger text-center mt-5">There was a mistake</div> : null }            
            {(moviesCollection.length==0 && movies.Response=="False") ? <div className="font-weight-bold alert alert-danger text-center mt-5">{movies.Error}</div> : null }            
            
                <h2 className="text-center my-5">List of Movies</h2>
                    <MatTable
                        state={false}
                        columns={headCells}
                        rows={moviesCollection}
                    />
            {loading ? <Spinner /> : null}
        </React.Fragment>
     );
}
 
export default Movies;