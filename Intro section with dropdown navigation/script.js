const companyVisible = document.querySelector('.companyVisible')
const featuresVisible = document.querySelector('.featuresVisible')
const companyPopUp = document.getElementById("companyPopUp")
const featuresPopUp = document.getElementById("featuresPopUp")
const arrowUp1 = document.querySelector('.arrowUp1')
const arrowUp2 = document.querySelector('.arrowUp2')
const menuBtn = document.querySelector('.menuBtn')
const closeBtn = document.querySelector('.closeBtn')
const list = document.querySelector('.list')
const signInUp = document.querySelector('.signInUp')
menuBtn.addEventListener("click", function(){
    list.style.display = "flex";
    menuBtn.style.display = "none";
    closeBtn.style.display = "flex";
    signInUp.style.display = "flex";
})
closeBtn.addEventListener("click", function(){
        list.style.display = "none";
        menuBtn.style.display = "flex";
        closeBtn.style.display = "none"
        signInUp.style.display = "none";
})
featuresVisible.addEventListener("click", function(){
   if(featuresPopUp.classList.contains('hidden')){
    featuresPopUp.classList.remove('hidden')
    arrowUp1.style.transform = "rotate(180deg)"
   }else{
    featuresPopUp.classList.add('hidden')
    arrowUp1.style.transform = "rotate(0deg)"
   };
   if(window.innerWidth <= 500){
    signInUp.style.marginTop = "200px"
}
})
companyVisible.addEventListener("click", function(){
    if(companyPopUp.classList.contains('hidden')){
     companyPopUp.classList.remove('hidden')
     arrowUp2.style.transform = "rotate(180deg)"
    }else{
     companyPopUp.classList.add('hidden')
     arrowUp2.style.transform = "rotate(0deg)"
    };
    if(window.innerWidth <= 500){
        signInUp.style.marginTop = "200px"
    }
 })
