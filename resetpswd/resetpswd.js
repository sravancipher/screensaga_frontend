
async function resetpswdd(){
    let mail=document.getElementById("email").value;
    let password=document.getElementById("pwd").value;
   
    axios.put( `http://localhost:8081/user/updatepassword/${mail}/${password}`)
    .then(response => {
        console.log('Success:', response.data);
        alert('Password reset link sent successfully.');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while sending the reset link.');
    });
        console.log("response",res)
        if(res.data){
            document.getElementById("result").innerHTML="Password Updated Successfully. Login Again"
        }else{
            document.getElementById("result").innerHTML="Account with this mail does not exists"
        }
    }
    
    