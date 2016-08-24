
var credentials = require('./config/credentials.js');
var Promise = require('bluebird')
var watson = require('watson-developer-cloud');
var alchemyKey = credentials.alchemyCredentials.apikey;
var alchemy_language = watson.alchemy_language({
  api_key: alchemyKey
})

var Twit = require('twit')
var twitterCreds = credentials.twitterCredentials;
var T = new Twit({
  consumer_key: twitterCreds.consumerKey ,
  consumer_secret: twitterCreds.consumerSecret,
  access_token: twitterCreds.accessToken,
  access_token_secret: twitterCreds.accessTokenSecret,
  timeout_ms: 60*1000
})
var _ = require('lodash')

var getSentiment = function(words){
  var text = {text: words.text};
  var responseArr = []

  return new Promise(function(resolve, reject){
    alchemy_language.sentiment(text, function(err, response){
      if(err){

        console.log('error', [err, words.lang]);
        reject(err)
      } else{
        responseArr.push(response)
        console.log('response success', responseArr)
        var responseObj = {
            score: response.docSentiment,
            time: words.created_at,
            tweet: text
          }

        resolve(responseObj)
      }
    })
  })
}



var getTweets = function(subject){
  return new Promise(function(resolve, reject){
    T.get('search/tweets', { q: subject, count: 25}, function(err, data, response){
      if(err){
        return reject(err)
      } 
      resolve(data)
    })
  })
}



module.exports = function(app, express){       
  app.get('/api/getSentiment', function(req, res){
    getTweets('#singularity')
    .then(function(data){
      console.log('initial tweet data', data)
      var dataMap = data.statuses.map(function(val){
        var obj = {
          tweet: val.text,
          user: val.user.name,
          location: val.user.location
        }
        return obj;
      })
      return dataMap;
      }).then(function(data){
        console.log('data for client', data)
        res.status(200).json({type: "twitter data", data: data})
      })
  });
}







// module.exports = function(app, express){
//   var scores = [];
//   var unsupportedLanguages = ['it', 'tr', 'und','lt','vi'];
//   app.get('/api/getSentiment', function(req, res){
//     getTweets('#singularity')
//     .then(function(data){
//       console.log('initial tweet data', data)
//       Promise.map(data.statuses, function(status){
//         console.log('language', status.lang)
//         if(unsupportedLanguages.indexOf(status.lang) < 0){
//           console.log('get sentiment called with', status.lang)
//           return getSentiment(status)
//         }
//           console.log('get sentiment not called with', status.lang)

//       }).then(function(responses){
//         console.log('response2', responses)
//         var sentimentObj = responses.filter(function(response){
//           return response !== undefined
//         })
//         return sentimentObj;
        
//       }).then(function(sentiments){
//         console.log('finalProduct', sentiments)
//       })
      
//       })
      
//     })

  
// }

