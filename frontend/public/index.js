const userData = {
    userName: "",
    userPassword: ""
};
const signupButton = document.getElementById("signUpButton");
const loginButton = document.getElementById("loginButton");
const apiUrl = "http://localhost:3005/";

function getUserData() {
    userData.userName = document.getElementById("userName").value;
    userData.userPassword = document.getElementById("userPassword").value;

    return userData;
}

function getLoginData() {
    userData.userName = document.getElementById("loginName").value;
    userData.userPassword = document.getElementById("loginPassword").value;

    return userData;
}

async function sendData(user) {
    data = {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    }
    try {
        let answer = await fetch(apiUrl+"signup",data);
        /* let answerJson = await answer.json();
        console.log(answerJson); */
        
    } catch (err) {
        console.log(err)
    } 
}  

async function loginUser(user) {
    data = {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': 'http://localhost:8180',
            'Access-Control-Allow-Credentials': true
        },
        credentials: 'include',
        body: JSON.stringify(user)
    }
    try {
        let answer = await fetch(apiUrl+"login",data);
        /* let answerJson = await answer.json();
        console.log(answerJson); */
        
    } catch (err) {
        console.log(err)
    } 
}  

signupButton.addEventListener("click", () => {
    
    let data = getUserData();
    sendData(data);
});

loginButton.addEventListener("click", () => {
    let data = getLoginData();
    loginUser(data);
})
