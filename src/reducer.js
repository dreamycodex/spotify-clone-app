//initial state of the data layer

export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    
    //REMOVE after finished developing
    token: 'BQCKPSLZWKStFt14iAwifX_8kXEszYMZ4vimnC2sfvN4pNoQnw-wc_4tIioHSKY6sViBjDXDY-6rsBhX3-N5PMZbms0c0SWP-X4qTB03omrQo4TcxFAGsYu_0OLwtSdwmzd3Wc1uCNL4Y-mgWb6Fvk6XkAm58N0xtIDIYPhtZq9Qd-RL',
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
        case "SET_TOKEN":
        return {
            ...state,
            token: action.token
        }
        default: 
        return state;
    }
}

export default reducer; 