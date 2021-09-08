import  {RECEIVE_MOVIES} from '../actions';

export default (state={}, {type,data})=>{
    switch(type){
        case RECEIVE_MOVIES: 
            return data;
        default:
            return state;
    }
}