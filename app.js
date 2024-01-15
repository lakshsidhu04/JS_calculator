let numbers=document.querySelectorAll('.number');

let operations=document.querySelectorAll('.operation');

let display=document.querySelector('.display');

let clear=document.querySelector('.clear');

let del=document.querySelector('.delete');

let equal=document.querySelector('.equal');





function addText(val){
    display.value+=val;
}
numbers.forEach((number,index)=>{
    number.addEventListener('click',()=>{
        addText(number.innerHTML);
    })
})

operations.forEach((operation,index)=>{
    operation.addEventListener('click',()=>{
        addText(operation.innerHTML);
    })
})

equal.addEventListener('click',()=>{
    display.value=eval(display.value);
})

clear.addEventListener('click',()=>{
    display.value='';
})

del.addEventListener('click',()=>{
    display.value=display.value.substring(0,display.value.length-1);
})

