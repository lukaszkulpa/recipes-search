export interface QueryState {
    query: string;
}

const initialState = {
    query: ""
}

type Action = {type: "ADD_QUERY", payload: string}

export const queryReducer = (state: QueryState = initialState, action: Action) => {
    switch (action.type) {
        case 'ADD_QUERY':
            return { ...state, query: action.payload };
        default:
            return state;
    }    
}