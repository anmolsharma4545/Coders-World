const menu = document.querySelector('.menu-toggle');
const darkMode = document.querySelector('.darkmode');
const nav = document.querySelector('nav');
const registerBtn = document.querySelector('#register_btn');
const subMenu = document.querySelector('.sub-menu');
menu.addEventListener('click', () =>{
    menu.classList.toggle('active')
    nav.classList.toggle('active')
});
AOS.init();

var i=0,text;
text = "Coder`s World";

function typing() {
if(i<text.length){
document.getElementById("text").innerHTML += text.charAt(i);
i++;
setTimeout(typing,500);
}
}
typing();


    registerBtn.addEventListener('click', () =>{
        document.querySelector('.container').style.display = "none";
        swal("Good job!", "We will reach out to you soon", "success").then(function() {
            document.querySelector('.container').style.display = "block"; 
        });
       
    });

    var typeText = document.querySelector(".typeText");
    var textToBeTypedArr = ["HTML", "CSS", "JavaScript", "Bootstrap"];
    var index = 0, isAdding = true, textToBeTypedIndex = 0
    typeText.style.color = '#ff7152';
    function playAnim() {
      setTimeout(function () {
        // set the text of typeText to a substring of the text to be typed using index.
        typeText.innerText = textToBeTypedArr[textToBeTypedIndex].slice(0, index)
        if (isAdding) {
          // adding text
          if (index > textToBeTypedArr[textToBeTypedIndex].length) {
            // no more text to add
            isAdding = false
            //break: wait 2s before playing again
            setTimeout(function () {
              playAnim()
            }, 2000)
            return
          } else {
            // increment index by 1
            index++
          }
        } else {
          // removing text
          if (index === 0) {
            // no more text to remove
            isAdding = true
            //switch to next text in text array
            textToBeTypedIndex = (textToBeTypedIndex + 1) % textToBeTypedArr.length
          } else {
            // decrement index by 1
            index--
          }
        }
        // call itself
        playAnim()
      }, isAdding ? 120 : 60)
    }
    // start animation
    playAnim();
   
  

   
