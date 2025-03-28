document.getElementById("logform").addEventListener('submit',function (e){
    e.preventDefault()
    const username=document.getElementById('username').value
    const password=document.getElementById('password').value
    const message=document.getElementById('message')
    if(username==="bala@" && password==="12324")
{
    message.style.color="green"
    message.textContent="Login successfully"
    console.log("Login success fully");
    
}
else{
     message.style.color="red"
    message.textContent="invalid Data"
    console.log("Login fail");
}
})