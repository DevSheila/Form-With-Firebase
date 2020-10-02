
  var firebaseConfig = {
    apiKey: "AIzaSyA6EhR_egTi-Cm7FPiWoD7KcctQVPyhp5o",
    authDomain: "firefireauth.firebaseapp.com",
    databaseURL: "https://firefireauth.firebaseio.com",
    projectId: "firefireauth",
    storageBucket: "firefireauth.appspot.com",
    messagingSenderId: "16256170393",
    appId: "1:16256170393:web:d9688ec3f94675d3e9fb08",
    measurementId: "G-H5W22XVWKJ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);




const  LogInForm = document.getElementById("log-in-form")
const GoogleLogIn = document.getElementById("btn-log-in-google")
const EmailLogIn =  document.getElementById("btn-log-in-email")

const studentEmail = document.getElementById('studentemail');
  const studentPassword = document.getElementById('password');

// LogInForm.addEventListener('submit', (e)=>{

//   //prevent default submit of form values
//   e.preventDefault();
//   const studentEmail = document.getElementById('studentemail');
//   const studentPassword = document.getElementById('password');
// signIn(studentEmail,studentPassword)

// })

 EmailLogIn.addEventListener('click',function EmailsignIn(studentEmail,studentPassword){

    firebase.auth().signInWithEmailAndPassword(studentEmail.value ,studentPassword.value).then(function(response){
      
        console.log(response);
          alert("You have succefully logged in")
          window.location = "/home.html";
    
          
       studentEmail.value = '';
       studentPassword.value = '';
       })
    
    
    
    
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        alert(errorCode + errorMessage)
        // ...
      });
})

GoogleLogIn.addEventListener('click' , function(){
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');


// To apply the default browser preference instead of explicitly setting it.
  firebase.auth().useDeviceLanguage()

  firebase.auth()
  
  .signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;

    console.log("you're logged in")
    console.log(user + token)

    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    alert( errorCode + errorMessage )
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });


 
})