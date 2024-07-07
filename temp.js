const converter= document.getElementById("num");
const celsius=document.getElementById("celsius");
const fahrenite=document.getElementById("fahrenite");
const submitBtn=document.getElementById("submit");
const textBtn=document.getElementById("choose");
let tempVal;

submitBtn.addEventListener('click', (e)=>{
    e.preventDefault();
       if(celsius.checked)
        {
       tempVal=Number(converter.value);
       tempVal= 5/9*(tempVal-32);
       textBtn.textContent=tempVal;   
        }
        else if(fahrenite.checked)
            {   tempVal=Number(converter.value)
                tempVal=(9/5*tempVal) +32
                textBtn.textContent=tempVal;
            }
        else{
            textBtn.textContent="please select a unit"
        }
    }
);