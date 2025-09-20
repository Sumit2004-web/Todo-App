let form=document.querySelector('.form')
let input=document.querySelector('input')
let save=document.querySelector('button')
let list=document.querySelector('.list-sect')
const savetask=(e)=>{
      e.preventDefault(); 
   let li=document.createElement('li');
   li.className='gp';
   li.innerText=input.value;
       console.log("Input value is:", input.value); // <-- Add this line
   let bt1=document.createElement('button');
 bt1.innerText="Delete";
 bt1.className="dt";
   li.appendChild(bt1);
   list.appendChild(li);
   console.log(li)
   form.reset();
}
 const removeTodo=(e)=>{
   if(e.target.className=="dt")
   {
      if(confirm("are you sure "))
       list.removeChild(e.target.parentElement);
   }
 }
list.addEventListener('click',removeTodo)
form.addEventListener('submit',savetask);



