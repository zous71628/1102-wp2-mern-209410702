import { CLEAR_ALERT, DISPLAY_ALERT } from './action_02';

const reducer_02 = (state, action) => {
  if(action.type === DISPLAY_ALERT){
      return {
          ...state,
          showAlert: true,
          alertText: 'please provide all values',
          alertType: 'danger'
      }
  }
  if(action.type === CLEAR_ALERT){
      return {
          ...state,
          showAlert: false,
          alertType: '',
          alertText: ''
      }
  }

  throw new Error(`no such actions ${action.type}`);
}
export default reducer_02;
