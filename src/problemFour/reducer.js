const userReducer = (state = [], action) => {
    switch(action.type) {
      case 'CHANGE_NAME':
        state = action.data;
        return state
      default:
        return state;
    }
  }
  export default userReducer;