  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
//   firebase.analytics();

  //create student
//add event listener for the form

const studentId = document.getElementById('studentid');
const studentEmail = document.getElementById('studentemail');
const studentPassword = document.getElementById('password');
const studentCourse = document.getElementById('course');
const SignUpForm = document.getElementById("sign-up-form");


SignUpForm.addEventListener('submit' , function(e){
    e.preventDefault();
 
  
    
    console.log(studentId.value , studentEmail.value, studentPassword.value , studentCourse.value)

    firebase.auth().createUserWithEmailAndPassword( studentEmail.value, studentPassword.value )
    .then(function(response){
        console.log(response)

        firebase.database().ref('users').push({

            studentemail: firebase.auth().currentUser.email,
            studentcourse: studentCourse.value,
            studentid : studentId.value,
            studentfirebaseid: firebase.auth().currentUser.uid
        })

        alert("successful sign up")

            studentId.value = '';
            studentCourse.value ='';
            studentEmail.value ='';
            studentPassword.value ='';
        // Reset user form inputs 



    })
    .catch(function(error){
        //handling
        let errorCode = error.code;
        let errorMessage = error.message;

        console.log(errorCode);
        alert(errorMessage);
    });




});


