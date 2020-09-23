//initial state of the data layer

export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null
}

const reducer = (state, action) => {
    console.log(action); //for debugging

    // Action -> type, [payload]

    switch(action.type) {
        case 'SET_USER':
        return {
            ...state,
            user: action.user
        }
        default: 
        return state;
    }
}

export default reducer; 