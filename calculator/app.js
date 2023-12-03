 const buttons = document.querySelectorAll("[type='button']");
 const input = document.getElementById('input');
 
 buttons.forEach((btn) => {
     btn.addEventListener('click', () => {
         if(btn.value == 'AC'){
             input.value=""
         }
        else if(btn.value=="c"){
         input.value=input.value.substr(0,input.value.length-1);
         }
           else if (btn.value == '='){
             try{
                input.value = eval(input.value);
             }
             catch(error){
                 input.value = "Error"; 
             }
           }
         else{
             input.value += btn.value;
         }        
      })  ;  
 });


