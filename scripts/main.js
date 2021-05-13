
let myHeading = document.querySelector('h1');

let myButton = document.querySelector("button")

function setUserName(){
    let name = prompt('请输入你的名字')
    console.log(name);
    if(name===null||!name.trim()){
        setUserName()
    }else{
        localStorage.setItem("name",name)
        myHeading.textContent = 'Mozilla 酷毙了，' + name;
    }
   
}

if(!localStorage.getItem('name')){
    setUserName()
}else{
    let name = localStorage.getItem('name')
    myHeading.textContent = 'Mozilla 酷毙了，' + name;
}

myButton.onclick = function(){
    setUserName();
}
