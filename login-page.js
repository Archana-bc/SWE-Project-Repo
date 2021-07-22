// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCziOBzOn0M_NpghDUiKQYKk3_DDn8TcwI",
  authDomain: "swe-graphical-password.firebaseapp.com",
  projectId: "swe-graphical-password",
  storageBucket: "swe-graphical-password.appspot.com",
  messagingSenderId: "78275528816",
  appId: "1:78275528816:web:379da07703a58460f08cb5",
  measurementId: "G-TT0D2G4EZK"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();


const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const imgButton0 = document.getElementById("button0");
const imgButton1 = document.getElementById("button1");
const imgButton2 = document.getElementById("button2");
const imgButton3 = document.getElementById("button3");
const imgButton4 = document.getElementById("button4");
const imgButton5 = document.getElementById("button5");
const imgButton6 = document.getElementById("button6");
const imgButton7 = document.getElementById("button7");
const imgButton8 = document.getElementById("button8");
const imgButton9 = document.getElementById("button9");
//incresing the security feature by adding more images to choose password
const imgButton10 = document.getElementById("button10");
const imgButton11 = document.getElementById("button11");
const imgButton12 = document.getElementById("button12");
const imgButton13 = document.getElementById("button13");
const imgButton14 = document.getElementById("button14");
const imgButton15 = document.getElementById("button15");
const imgButton16 = document.getElementById("button16");
const imgButton17 = document.getElementById("button17");
const imgButton18 = document.getElementById("button18");
const imgButton19 = document.getElementById("button19");
const imgButton20 = document.getElementById("button20");
const imgButton21 = document.getElementById("button21");
const imgButton22 = document.getElementById("button22");
const imgButton23 = document.getElementById("button23");
const imgButton24 = document.getElementById("button24");
const imgButton25 = document.getElementById("button25");
const imgButton26 = document.getElementById("button26");
const imgButton27 = document.getElementById("button27");
const imgButton28 = document.getElementById("button28");
const imgButton29 = document.getElementById("button29");
const imgButton30 = document.getElementById("button30");
const imgButton31 = document.getElementById("button31");
const imgButton32 = document.getElementById("button32");
const imgButton33 = document.getElementById("button33");
const imgButton34 = document.getElementById("button34");
const imgButton35 = document.getElementById("button35");
const imgButton36 = document.getElementById("button36");
const imgButton37 = document.getElementById("button37");
const imgButton38 = document.getElementById("button38");
const imgButton39 = document.getElementById("button39");
const imgButton40 = document.getElementById("button40");
const imgButton41 = document.getElementById("button41");
const imgButton42 = document.getElementById("button42");
const imgButton43 = document.getElementById("button43");
const imgButton44 = document.getElementById("button44");
const imgButton45 = document.getElementById("button45");
const imgButton46 = document.getElementById("button46");
const imgButton47 = document.getElementById("button47");
const imgButton48 = document.getElementById("button48");
const imgButton49 = document.getElementById("button49");
let loginString = "";

// Buttons to create the login string
imgButton0.addEventListener("click", (e) => {
  e.preventDefault();
  loginString += "corgi";
})

imgButton1.addEventListener("click", (e) => {
  e.preventDefault();
  loginString += "soccerball";
})

imgButton2.addEventListener("click", (e) => {
  e.preventDefault();
  loginString += "passport";
})

imgButton3.addEventListener("click", (e) => {
  e.preventDefault();
  loginString += "tori";
})

imgButton4.addEventListener("click", (e) => {
  e.preventDefault();
  loginString += "moon";
})

imgButton5.addEventListener("click", (e) => {
  e.preventDefault();
  loginString += "shirt";
})

imgButton6.addEventListener("click", (e) => {
  e.preventDefault();
  loginString += "king";
})

imgButton7.addEventListener("click", (e) => {
  e.preventDefault();
  loginString += "controller";
})

imgButton8.addEventListener("click", (e) => {
  e.preventDefault();
  loginString += "bike";
})
//extra buttons
// Buttons to create the login string
imgButton9.addEventListener("click", (e) => {
  e.preventDefault();
  loginString += "alpMountain";
})

imgButton10.addEventListener("click", (e) => {
  e.preventDefault();
  loginString += "electricThunder";
})

imgButton11.addEventListener("click", (e) => {
  e.preventDefault();
  loginString += "stone";
})

imgButton12.addEventListener("click", (e) => {
  e.preventDefault();
  loginString += "guastallaPiazza";
})

imgButton13.addEventListener("click", (e) => {
  e.preventDefault();
  loginString += "street1";
})

imgButton14.addEventListener("click", (e) => {
  e.preventDefault();
  loginString += "house";
})

imgButton15.addEventListener("click", (e) => {
  e.preventDefault();
  loginString += "monument";
})

imgButton16.addEventListener("click", (e) => {
  e.preventDefault();
  loginString += "building";
})

imgButton17.addEventListener("click", (e) => {
  e.preventDefault();
  loginString += "kamienna";
})

imgButton18.addEventListener("click", (e) => {
  e.preventDefault();
  loginString += "womenwithflowers";
})
imgButton19.addEventListener("click", (e) => {
  e.preventDefault();
  loginString += "harbour";
})

imgButton20.addEventListener("click", (e) => {
  e.preventDefault();
  loginString += "earthview1";
})

imgButton21.addEventListener("click", (e) => {
  e.preventDefault();
  loginString += "steamboat";
})

imgButton22.addEventListener("click", (e) => {
  e.preventDefault();
  loginString += "snowstreet";
})

imgButton23.addEventListener("click", (e) => {
  e.preventDefault();
  loginString += "whiterock";
})

imgButton24.addEventListener("click", (e) => {
  e.preventDefault();
  loginString += "snowmountains";
})

imgButton25.addEventListener("click", (e) => {
  e.preventDefault();
  loginString += "dud";
})

imgButton26.addEventListener("click", (e) => {
  e.preventDefault();
  loginString += "santaritahotel";
})

imgButton27.addEventListener("click", (e) => {
  e.preventDefault();
  loginString += "vimmerby";
})

imgButton28.addEventListener("click", (e) => {
  e.preventDefault();
  loginString += "lynncanal";
})
imgButton29.addEventListener("click", (e) => {
  e.preventDefault();
  loginString += "dakeyama";
})

imgButton30.addEventListener("click", (e) => {
  e.preventDefault();
  loginString += "trainstation";
})

imgButton31.addEventListener("click", (e) => {
  e.preventDefault();
  loginString += "hoanbridge";
})

imgButton32.addEventListener("click", (e) => {
  e.preventDefault();
  loginString += "wlm14es";
})

imgButton33.addEventListener("click", (e) => {
  e.preventDefault();
  loginString += "wienvotivkirche";
})

imgButton34.addEventListener("click", (e) => {
  e.preventDefault();
  loginString += "fontana";
})

imgButton35.addEventListener("click", (e) => {
  e.preventDefault();
  loginString += "ubkg12";
})

imgButton36.addEventListener("click", (e) => {
  e.preventDefault();
  loginString += "kolkwitz";
})

imgButton37.addEventListener("click", (e) => {
  e.preventDefault();
  loginString += "smeeren";
})

imgButton38.addEventListener("click", (e) => {
  e.preventDefault();
  loginString += "auburn";
})

imgButton39.addEventListener("click", (e) => {
  e.preventDefault();
  loginString += "stourvalleywalk";
})

imgButton40.addEventListener("click", (e) => {
  e.preventDefault();
  loginString += "tremella";
})

imgButton41.addEventListener("click", (e) => {
  e.preventDefault();
  loginString += "flowergrassland";
})

imgButton42.addEventListener("click", (e) => {
  e.preventDefault();
  loginString += "overzicht";
})

imgButton43.addEventListener("click", (e) => {
  e.preventDefault();
  loginString += "monastry";
})

imgButton44.addEventListener("click", (e) => {
  e.preventDefault();
  loginString += "nvmground";
})

imgButton45.addEventListener("click", (e) => {
  e.preventDefault();
  loginString += "dorthea";
})

imgButton46.addEventListener("click", (e) => {
  e.preventDefault();
  loginString += "bwtosr";
})

imgButton47.addEventListener("click", (e) => {
  e.preventDefault();
  loginString += "jiaxiang";
})

imgButton48.addEventListener("click", (e) => {
  e.preventDefault();
  loginString += "farmland";
})
imgButton49.addEventListener("click", (e) => {
  e.preventDefault();
  loginString += "viewofearth2";
})

function signUp(){
  var email = document.getElementById("email");
  var password = loginString;
  const promise = auth.createUserWithEmailAndPassword(email.value, password);

  promise.catch(e => alert(e.message));
  //alert("Signup Successful!");
}

function signOut(){
  auth.signOut();
  alert("SignOut Successfully from System");
  window.location.href = 'login-page.html';
}

function  signIn(){
  var email = document.getElementById("email");
  var password  = loginString;
  const promise = auth.signInWithEmailAndPassword(email.value,password);
  promise.catch(e=>alert(e.message));
  
}

function reset(){
  loginString = "";
}

//active user to homepage
firebase.auth().onAuthStateChanged((user)=>{
  if(user){
    var email = user.email;
    alert("Active user "+email);
    location.replace("main.html");

  }else{
    //alert("No Active user Found");
  }
})


function toggle() {
var prevDiv = document.getElementById('previous');
var nextDiv = document.getElementById('next');

var prevBtn = document.getElementById('Previous_Btn');
var nextBtn = document.getElementById('Next_Btn');

prevBtn.onclick = function() {
    nextDiv.setAttribute('class', 'hide');
    prevDiv.setAttribute('class', 'show');
};

nextBtn.onclick = function() {
    prevDiv.setAttribute('class', 'hide');
    nextDiv.setAttribute('class', 'show');
};
}


/*
// Login Button checking the current string against the password
loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginString;

    // Alert if successful, then reload page
    if (username === "user" && password === "corgipassportmoon") {
        alert("You have successfully logged in.");
        location.reload();

    // Otherwise show hidden error and reset the string
    } else {
        loginErrorMsg.style.opacity = 1;
        loginString = "";
    }
})
*/