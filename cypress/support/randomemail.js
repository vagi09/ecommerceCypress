// function makeid(length) {
//       var result           = '';
//       var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//       var charactersLength = characters.length;
//       for ( var i = 0; i < length; i++ ) {
//          result += characters.charAt(Math.floor(Math.random() * charactersLength));
//       }
//       return result;
//    }
   

function userID_Alpha() {
  var email = "ghulam.nabi+"
  var text = "";
  
  var possible = "qwertyuioplkjhgfdazxcvbnm1234567890";
  
  for (var i = 0; i < 4; i++)
  text += possible.charAt(Math.floor(Math.random() * possible.length));
  var value = email + text.concat('@gmail.com')
  return value;
  }
   