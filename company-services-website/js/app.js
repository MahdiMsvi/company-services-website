const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#page");
// show sidebar
navBtn.addEventListener("click", function () {
    sidebar.classList.add("show-page");
});

// close sidebar
closeBtn.addEventListener("click", function () {
    sidebar.classList.remove("show-page");
});
// delete left image in desktop size
window.addEventListener('resize',function(){
    if(this.window.innerWidth>=1024){
        this.document.getElementById('left-mobile').style.display="none";
    }
    else{
        this.document.getElementById('left-mobile').style.display="block";
    }
})
if(window.innerWidth>=1024){
    document.getElementById('left-mobile').style.display="none";
}


window.addEventListener('resize',function(){
    if(this.window.innerWidth>=1024){
        this.document.getElementById('img-aside').style.display="none";
    }
    else{
        this.document.getElementById('img-aside').style.display="block";
    }
})
if(window.innerWidth>=1024){
    document.getElementById('img-aside').style.display="none";
}

window.addEventListener('resize',function(){
    if(this.window.innerWidth>=1024){
        this.document.getElementById('photo-footer').style.display="none";
    }
    else{
        this.document.getElementById('photo-footer').style.display="block";
    }
})
if(window.innerWidth>=1024){
    document.getElementById('photo-footer').style.display="none";
}