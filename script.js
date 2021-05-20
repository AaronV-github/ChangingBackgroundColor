const button=document.querySelector('button');

const colors=['red', 'yellow', 'blue', 'green', 'pink', 'purple', 'orange'];


function ColorSelect(){
    let num=Math.floor(Math.random() * colors.length); 
     document.body.style.backgroundColor=colors[num];
}


button.addEventListener('click',ColorSelect);