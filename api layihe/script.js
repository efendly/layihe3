const leftBtnList=document.querySelectorAll('.left-btn');
const leftShowCurrency=document.querySelector('.left-show-currency');
const rightShowCurrency=document.querySelector('.right-show-currency');
const rightInput=document.querySelector('.rightInput');
const leftInput=document.querySelector('.leftInput');
let getLeftActiveBtn='RUB';
let getRightActiveBtn='USD';
getCurrency('https://api.exchangerate.host/latest')

leftBtnList.forEach(element=>{
    element.addEventListener('click',(event)=>{
        deleteLeft();
       
        event.target.classList.add('isActive');
        getLeftActiveBtn=event.target.innerText;
        getCurrency('https://api.exchangerate.host/latest')
       
    })
})

 const rightBtnList=document.querySelectorAll('.right-btn')
 rightBtnList.forEach(element=>{
    element.addEventListener('click',(event)=>{
        deleteRight();
       
        event.target.classList.add('isActive');
        getRightActiveBtn=event.target.innerText;
        getCurrency('https://api.exchangerate.host/latest')
       
    })
 })
 function deleteLeft(){
    leftBtnList.forEach(element=>{
        element.classList.remove('isActive')
     
        
})
 }
 function deleteRight(){
    rightBtnList.forEach(element=>{
        element.classList.remove('isActive')
       
})
 }

async function getCurrency(url){
const promiseLeft= await fetch(`${url}?base=${getLeftActiveBtn}&symbols=${getRightActiveBtn}`)
const promiseRight= await fetch(`${url}?base=${getRightActiveBtn}&symbols=${getLeftActiveBtn}`)
const responseLeft= await promiseLeft.json();
const responseRight= await promiseRight.json();
leftShowCurrency.innerText=`1 ${getLeftActiveBtn}=${responseLeft.rates[`${getRightActiveBtn}`]} ${getRightActiveBtn}`;
rightInput.value=Number(leftInput.value)*responseLeft.rates[getRightActiveBtn];
rightShowCurrency.innerText=`1 ${getRightActiveBtn}=${responseRight.rates[`${getLeftActiveBtn}`]}${getLeftActiveBtn}`;
console.log(responseLeft);
}
