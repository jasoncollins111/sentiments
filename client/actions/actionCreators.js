import fetch from 'isomorphic-fetch'


export function requestSentiment(){
  return {
    type: 'SENTIMENT_REQUEST'
  }
}

export function recieveSentiment(sentiments){
  return {
    type: 'SENTIMENT_RECIEVE',
    payload: sentiments,
    recievedAt: Date.now()
  }
}

export function fetchSentiment(){

  return function(dispatch) {
    dispatch(requestSentiment())
    console.log('fetch action creator')
    return fetch(`/api/getSentiment`)
      .then(response => response.json())
      .then(sentiments => {
        console.log('sentiment', sentiments)
        dispatch(recieveSentiment(sentiments))
      })
  }


}
