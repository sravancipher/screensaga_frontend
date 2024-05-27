
async function resetpswdd(){
    let mail=document.getElementById("email").value;
    let password=document.getElementById("pwd").value;
   
    axios.put( `https://screensagadb.up.railway.app/user/updatepassword/${mail}/${password}`)
    .then(response => {
        console.log('Success:', response.data);
        if(response.data){
            
            alert('Password Updated Successfully. Login Again');
            setTimeout(()=>{},3000)
        }
        else{
            alert("The email address provided does not correspond to an existing account")
            setTimeout(()=>{},3000)
        }
    })
    
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while sending the reset link.');
        setTimeout(()=>{},3000)
    });
        console.log("response",res)
    }
    
    