export default (state = {'test': '123'}, action) => {
  switch(action.type) {
    case 'LOGIN':
      return {
        uid: action.uid
      };
    case 'LOGOUT':
      return {};
    default:
      // console.log('auth reducer', state);
      
      return state;
  }
};