const myButton = document.querySelector(".ba");
myButton.addEventListener("click", () => {
    myButton.style.color = "red";
    if(myButton.style.color = "red") {
       let ref = myButton.addEventListener("click", () => {
            myButton.style.color = "black";
        })

        myButton.removeEventListener(ref)
    }
  
})
