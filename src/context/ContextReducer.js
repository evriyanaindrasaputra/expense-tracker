const contextReducer = (state, action) => {
    let activity;

    switch (action.type) {
        case 'DELETE_ACTIVITY':
            activity = state.filter((act) => act.id !== action.payload)
            localStorage.setItem('activity', JSON.stringify(activity))
            return activity;
        case 'ADD_ACTIVITY':
            activity = [action.payload, ...state]
            localStorage.setItem('activity', JSON.stringify(activity))
            return activity;
        default:
            return state;
    }
}
export default contextReducer;