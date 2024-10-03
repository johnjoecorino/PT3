function getMessage() {
    let userName = document.getElementById("uName").value;
    let passWord = document.getElementById("pWord").value;
    
    let regEx = /[a-z 0-10]{5,10}/; 
    let regUser =  /[a-z 0-10]{5,10}/; 
    
    if (regEx.test(passWord)) {
        document.getElementById("pMsg").innerHTML = "valid password!";
    } else {
        document.getElementById("pMsg").innerHTML = "Invalid password.";
    }
    
    if (regEx.test(userName)) {
        document.getElementById("pMsg").innerHTML = "valid password!";
    } else {
        document.getElementById("pMsg").innerHTML = "Invalid password.";
    }
    
}//end of the function

document.getElementById('btnLogin').addEventListener("click", getMessage);