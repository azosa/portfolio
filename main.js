
let loaderCenter = window.document.querySelector(".center");
let right=window.document.querySelector(".right");
let left=window.document.querySelector(".left");
let name=window.document.querySelectorAll(".section-name");
let opacity=75;
let container=window.document.querySelector(".container");
let innerContainer=window.document.querySelector(".inner-container");
let btn =document.querySelector(".scroll-icon")



let btnUp=window.document.querySelector(".btn-up");
let btnLeft=window.document.querySelector(".btn-left");
let btnDown=window.document.querySelector(".btn-down");
let btnRight=window.document.querySelector(".btn-right");
let aboutBtn=window.document.querySelector(".section-about-icon");
let skillsBtn=window.document.querySelector(".section-skills-icon");
let projectsBtn=window.document.querySelector(".section-projects-icon");
let contactBtn=window.document.querySelector(".section-contact-icon");

let about=window.document.querySelector(".about");
let skills=window.document.querySelector(".skills");
let projects=window.document.querySelector(".projects");
let contact=window.document.querySelector(".contact");
let type1=window.document.querySelector(".type-one");
let type2=window.document.querySelector(".type-two");

let wndHeight=window.document.documentElement.clientHeight;
let wndWidth=window.document.documentElement.clientWidth;

about.style.top="-"+wndHeight+"px";
projects.style.top=wndHeight+"px";
skills.style.left="-"+wndWidth+"px";
contact.style.left=wndWidth+"px";





let innerContainerTop=30;
let innerContainerLeft=0;
innerContainer.style.top=innerContainerTop+"px";
innerContainer.style.left=innerContainerLeft+"px";

about.style.display="none";
skills.style.display="none";
projects.style.display="none";
contact.style.display="none";

aboutAnimation();
loadListeners();
function loadListeners(){
 name[0].addEventListener("click",aboutAnimation);
 name[1].addEventListener("click",skillsAnimation);
 name[2].addEventListener("click",projectsAnimation);
 name[3].addEventListener("click",contactAnimation);
btnUp.addEventListener("click",aboutAnimation);
aboutBtn.addEventListener("click",aboutBtnAnimation);
btnLeft.addEventListener("click",skillsAnimation);
skillsBtn.addEventListener("click", skillsBtnAnimation);
btnDown.addEventListener("click", projectsAnimation);
btn.addEventListener("click", scrollFunction);
projectsBtn.addEventListener("click", projectsBtnAnimation);
btnRight.addEventListener("click",contactAnimation);
contactBtn.addEventListener("click",contactBtnAnimation);
}



requestAnimationFrame(fadeOut);


function contactBtnAnimation(){
    wndWidth+=80;
    innerContainerLeft+=80;
   contact.style.left=wndWidth+"px";
   innerContainer.style.left=innerContainerLeft+"px";
   innerContainer.style.display="grid";
   innerContainer.style.display="-ms-grid";
 
   if(innerContainerLeft<0){
       requestAnimationFrame(contactBtnAnimation);
   }
   else{
       contact.style.display="none";
       wndWidth=window.document.documentElement.clientWidth;
       innerContainerLeft=0;
   }

   }
function contactAnimation(){
    wndWidth-=80;
    innerContainerLeft-=80;
   contact.style.left=wndWidth+"px";
   innerContainer.style.left=innerContainerLeft+"px";
   contact.style.display="block";
   if(wndWidth>0){
       requestAnimationFrame(contactAnimation);
   }
   else{
    wndWidth=0;
   contact.style.left=wndWidth+"px";
    innerContainer.style.display="none";
   }

   }




function projectsBtnAnimation(){
    wndHeight+=80;
    innerContainerTop+=80;
   projects.style.top=wndHeight+"px";
   innerContainer.style.top=innerContainerTop+"px";innerContainer.style.display="grid";
   innerContainer.style.display="-ms-grid";
   if(innerContainerTop<30){
       requestAnimationFrame(projectsBtnAnimation);
   }
   else{
       projects.style.display="none";
       wndHeight=window.document.documentElement.clientHeight;
       innerContainerTop=30;
   }
}
function projectsAnimation(){
    wndHeight-=80;
     innerContainerTop-=80;
    projects.style.top=wndHeight+"px";
    innerContainer.style.top=innerContainerTop+"px";
    projects.style.display="block";
    if(wndHeight>0){
        requestAnimationFrame(projectsAnimation);
    }
    else{
        wndHeight=0;
        projects.style.top=wndHeight+"px";
        innerContainer.style.display="none";
   
    }
}

function aboutBtnAnimation(){
     wndHeight-=80;
     innerContainerTop-=80;
    about.style.top=wndHeight+"px";
    innerContainer.style.top=innerContainerTop+"px";innerContainer.style.display="grid";
    innerContainer.style.display="-ms-grid";
    if(innerContainerTop>30){
        requestAnimationFrame(aboutBtnAnimation);
    }
    else{
        about.style.display="none";
        
        wndHeight=window.document.documentElement.clientHeight;
        innerContainerTop=30;
    }
}

function aboutAnimation(){
     wndHeight-=80;
     innerContainerTop+=80;
    about.style.top="-"+wndHeight+"px";
    innerContainer.style.top=innerContainerTop+"px";
    about.style.display="block";
    if(wndHeight>0){
        requestAnimationFrame(aboutAnimation);
    }
    else {
     
        wndHeight=0;
        about.style.top=wndHeight+"px";
        innerContainer.style.display="none";
        type1.classList.add("type1");
        type2.classList.add("type2");
        type1.classList.remove("type-one");
        type2.classList.remove("type-two");
    }
    }
    function skillsBtnAnimation(){
        wndWidth-=80;
        innerContainerLeft-=80;
       skills.style.left=wndWidth+"px";
       innerContainer.style.left=innerContainerLeft+"px";
       innerContainer.style.display="grid";
       innerContainer.style.display="-ms-grid";
       
       if(innerContainerLeft>0){
           requestAnimationFrame(skillsBtnAnimation);
       }
       else{
           skills.style.display="none";
           wndWidth=window.document.documentElement.clientWidth;
           innerContainerLeft=0;
       }
   
       }
    function skillsAnimation(){
        wndWidth-=80;
        innerContainerLeft+=80;
       skills.style.left="-"+wndWidth+"px";
       innerContainer.style.left=innerContainerLeft+"px";
       skills.style.display="block";
       if(wndWidth>0){
           
           requestAnimationFrame(skillsAnimation);
          
       }
       else{
        wndWidth=0;
        skills.style.left=wndWidth+"px";
        innerContainer.style.display="none";
       }
   
       }

function fadeOut(){
    opacity--;
    loaderCenter.style.opacity=opacity;
    
    if (opacity > 0){
        requestAnimationFrame(fadeOut);
    }
    else if(opacity==0){
       right.classList.add("right-out");
       left.classList.add("left-out");
     setTimeout(function removeClasses(){ right.classList.remove("right"); left.classList.remove("left");} ,1800)
     loaderCenter.style.display="none";
       
    }
} 


function scrollFunction(){
    document.documentElement.scrollTop = 0;
}
