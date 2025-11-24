var password ="give code"
function passcheck(){
    if(document.getElementById('pass1').value != password){
        alert('Wrong Password, Please Try Again')
        return false;
    }
     if(document.getElementById('pass1').value == password){
        alert('Logged in successfully, Please Click OK To Get Started')
    }
}