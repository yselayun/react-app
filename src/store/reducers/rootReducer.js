//state nay la cua redux

const initState = {
    users: [
        {id: 1, name: 'Sel'},
        {id: 2, name: 'Ayun'}
    ]
}
const generateID = () => {
    let letter = '1234567890abcdefghiklmnopqrstuvwxyz';
    let user = 'user:';
    for (let i = 0; i < 5; i++) {
        user += letter[Math.floor(Math.random() * letter.length)];
    }
    return user;
}
const generateName = () => {
    let letter = '1234567890abcdefghiklmnopqrstuvwxyz';
    let name = '';
    for (let i = 0; i < 5; i++) {
        name += letter[Math.floor(Math.random() * letter.length)];
    }
    return name;
}
const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DELETE_USER':
            console.log('run into delete user', action);
            let users = state.users;
            users = users.filter(item => item.id !== action.payload.id);
            return {
                ...state, users
            }
            break;
        case 'CREATE_USER':
            let user = {id: generateID(), name: generateName()}    
            return {
                ...state, users: [...state.users, user]
            }
        default:
            return state;
    }
  
}

export default rootReducer;