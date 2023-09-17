var arr = [];
var getEmail = document.getElementById('remail');
var getPassword = document.getElementById('rpass');
var users = localStorage.getItem('Users');
if(users !== null){
    arr = JSON.parse(users)
}



function signup(){
    var email = document.getElementById('remail');
    var password = document.getElementById('rpass');
    var obj ={
        Email : email.value,
        Password : password.value,
    }
    arr.push(obj);
    localStorage.setItem('Users',JSON.stringify(arr))
}

function signin(){
    var email = document.getElementById('lemail').value;
    var password = document.getElementById('lpass').value;
    var filterData = arr.filter(function(Data){
        return Data.email === email && Data.password === password
    })
    if(filterData.length){
        alert('ha mil gaya')
    }
    else{
        alert('chal nikal')
    }
    


}









