// const calculator = document.querySelector('.calculator');
const calcKeys = document.querySelectorAll(".btn");
const display = document.querySelector(".display");
const themeIndicator = document.querySelector('.theme-toggle');
const body = document.querySelector('.body');
const keypad = document.querySelector(".calc-keyspad");

calcKeys.forEach(btn=>{
  btn.addEventListener("click", (e) => {
     
      switch (e.target.value) {
          case "x":
              display.innerText += "*";
              break;
          case "RESET":
              display.innerText = "";
              break;
          case "DEL":
            let d =  display.innerText.slice(0, -1);
            display.innerText = d;
              break;
          case "=":
              try {
                   display.innerText = eval(display.innerText)
              } catch {
                  display.innerText = "ERROR";
              }
              break;
          default:
              display.innerText += e.target.value;
              break;
      }
  });
})


themeIndicator.addEventListener('click', ()=>{
  if (themeIndicator.classList.contains("theme1")){
     themeIndicator.classList.remove('theme1')
     themeIndicator.classList.add("theme2");
     body.classList.add('theme2');
     keypad.classList.add('theme2')
  }else if(themeIndicator.classList.contains("theme2")){
     themeIndicator.classList.remove("theme2");
     themeIndicator.classList.add("theme3");
     body.classList.remove('theme2');
     body.classList.add("theme3");
     keypad.classList.remove("theme2");
     keypad.classList.add("theme3");
  }else if(themeIndicator.classList.contains("theme3")){
    themeIndicator.classList.remove("theme3");
    themeIndicator.classList.add("theme1");
    body.classList.remove("theme3");
    keypad.classList.remove("theme3");
  }
       
  
})
   


   
   
   


   
 


