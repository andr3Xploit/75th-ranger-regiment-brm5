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



(function(){
    const _0x4b92=["getElementById","applyForm","addEventListener","submit","preventDefault","value","username","callsign","fetch","POST","headers","Content-Type","application/json","body","stringify","then","reset","catch"];
    
    document[_0x4b92[0]](_0x4b92[1])[_0x4b92[2]](_0x4b92[3], async function(e){
        e[_0x4b92[4]]();

        const u=document[_0x4b92[0]](_0x4b92[6])[_0x4b92[5]];
        const c=document[_0x4b92[0]](_0x4b92[7])[_0x4b92[5]];

        const w=atob("aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTQ3MTk1OTc2MTY3ODM2ODg4OS9OYlR6dlNtVXFXaTJ1NnBqSVgxUGhLeVpja1VXT09oNE1UQkZMX0JMRmNHR0lJSi13QnA2YldReU5BUk1OWTQ5Rlp6dg==");

        const d={
            embeds:[{
                title:"Nueva Postulación",
                color:12632256,
                fields:[
                    {name:"Usuario",value:u,inline:true},
                    {name:"Escuadrón a aspirar",value:c,inline:true}
                ],
                footer:{text:"75th Ranger Regiment Recruitment"},
                timestamp:new Date()
            }]
        };

        await window[_0x4b92[8]](w,{
            method:_0x4b92[9],
            headers:{[_0x4b92[11]]:_0x4b92[12]},
            body:JSON[_0x4b92[14]](d)
        })[_0x4b92[15]](()=>{
            document[_0x4b92[0]](_0x4b92[1])[_0x4b92[16]]();
        })[_0x4b92[17]](()=>{});
    });
})();
