import assign from 'lodash.assign';

function sentiment(state = { items: [] }, action) {
  console.log(state, action);
  switch(action.type) {

    case 'SENTIMENT_REQUEST' : 
      //make request to get current sentiment
      console.log('request reducer')
      return assign({}, state, {request: true});
    default:
      return state;
  }
  return state;
}




export default sentiment;