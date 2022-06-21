// function makeid(length) {
//       var result           = '';
//       var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//       var charactersLength = characters.length;
//       for ( var i = 0; i < length; i++ ) {
//          result += characters.charAt(Math.floor(Math.random() * charactersLength));
//       }
//       return result;
//    }
   

// function userID_Alpha() {
//   var email = "ghulam.nabi+"
//   var text = "";
  
//   var possible = "qwertyuioplkjhgfdazxcvbnm1234567890";
  
//   for (var i = 0; i < 4; i++)
//   text += possible.charAt(Math.floor(Math.random() * possible.length));
//   var value = email + text.concat('@gmail.com')
//   return value;
//   }
   

var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
    var id = '';
    var i = 0;
    while (i < 8) {
      id += chars[Math.floor(Math.random() * chars.length)];
      i++;
    }
    var mail = id + '@gmail.com' //Random e-mail ID

    var digits = Math.floor(Math.random() * 9000000000) + 1000000000; // random ph no
    var pwd = Math.random().toString(36).slice(2, 10); //random password


    export default mail;
    // export default digits;
    // export default pwd;