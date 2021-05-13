const menu = document.querySelector('.menu-toggle');
const darkMode = document.querySelector('.darkmode');
const nav = document.querySelector('nav');
const registerBtn = document.querySelector('#register_btn');
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

var j=0,text1;
text1 = "Want to have proper understanding of web ?   Access all material of web dev here--   Join Us for a good learning path to get your passion.";

function typing1() {
if(j<text1.length){
document.getElementById("text2").innerHTML += text1.charAt(j);
j++;
setTimeout(typing1,300);
}
}
typing1();

    registerBtn.addEventListener('click', () =>{
        document.querySelector('.container').style.display = "none";
        swal("Good job!", "We will reach out to you soon", "success").then(function() {
            document.querySelector('.container').style.display = "block"; 
        });
       
    });
        

   
