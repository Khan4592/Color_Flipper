let colors=['red','blue','green','black','white','purple','grey']


let btn = document.querySelector('.btn')
btn.addEventListener('click',e=>{
    let randomno=random_no_generator()
    console.log(randomno)
    btn.style.backgroundColor= colors[randomno]
    
})
function random_no_generator(){
var min = 0;
var max = 6;
var randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
return randomInt
}