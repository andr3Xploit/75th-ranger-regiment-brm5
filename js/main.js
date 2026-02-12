(function(){
function _0x4a1c(){const _0x2d9f=document.querySelectorAll('.reveal');_0x2d9f.forEach(_0x3c1a=>{const _0x5f8b=window.innerHeight;const _0x7d2e=_0x3c1a.getBoundingClientRect().top;if(_0x7d2e<_0x5f8b-100){_0x3c1a.classList.add('active')}})}
window.addEventListener('scroll',_0x4a1c);
window.addEventListener('load',_0x4a1c);
window.addEventListener('scroll',function(){const _0x9b2f=document.querySelector('header');_0x9b2f.classList.toggle('scrolled',window.scrollY>50)});
document.addEventListener("contextmenu",function(_0x1e){_0x1e.preventDefault()});
document.addEventListener("keydown",function(_0x6f){
if(_0x6f.key==="F12"){_0x6f.preventDefault()}
if(_0x6f.ctrlKey&&_0x6f.shiftKey&&_0x6f.key==="I"){_0x6f.preventDefault()}
if(_0x6f.ctrlKey&&_0x6f.shiftKey&&_0x6f.key==="J"){_0x6f.preventDefault()}
if(_0x6f.ctrlKey&&_0x6f.key==="u"){_0x6f.preventDefault()}
});
})();



setInterval(function(){
    const _0xcheck = window.outerWidth - window.innerWidth > 160 || window.outerHeight - window.innerHeight > 160;
    if(_0xcheck){
        document.body.innerHTML="";
        document.body.style.background="#000";
    }
},1000);
