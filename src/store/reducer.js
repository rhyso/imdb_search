export const initialState ={
    loading: false,
    movieList: [],
    tooMany:false,
    error: null
}

export const reducer = (state, action) => {

    switch(action.type) {
        case "SEARCH_MOVIES_REQUEST" :
            return {
                ...state,
                error: null,
                loading:true
            }
        case "SEARCH_MOVIES_SUCCESS" :
            return {
                ...state,
                loading:false,
                movieList: action.payload
            }            
        case "SEARCH_MOVIES_TOO_LARGE" :
            return {
                ...state,
                loading:false,
                tooMany: true,
                movieList: action.payload
            }            
        case "SEARCH_MOVIES_FAIL" :
            return {
                ...state,
                error: action.error,
                loading: false
            }    
        
        default:
          return state;
    }
}

