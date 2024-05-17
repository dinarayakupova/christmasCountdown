(function(k,c){function y(){var b;if(r!==v||s!==w)for(v=r,w=s,b=0;b<x;b++)if(!l[b]){h[b].style.left=(e[b]=r)+"px";h[b].style.top=(f[b]=s)+"px";h[b].style.clip="rect(2px, 5px, 5px, 2px)";h[b].style.visibility="visible";l[b]=110;break}for(b=0;b<x;b++){if(l[b]){var a=b;25===--l[a]&&(h[a].style.clip="rect(1px, 5px, 3px, 2px)");l[a]?(f[a]+=1+3*Math.random(),f[a]<n+g?(h[a].style.top=f[a]+"px",e[a]+=(a%5-2)/5,h[a].style.left=e[a]+"px"):(h[a].style.visibility="hidden",l[a]=0)):(m[a]=50,d[a].style.top=(p[a]=
    f[a])+"px",d[a].style.left=(t[a]=e[a])+"px",d[a].style.width="2px",d[a].style.height="2px",h[a].style.visibility="hidden",d[a].style.visibility="visible")}m[b]&&(a=b,25===--m[a]&&(d[a].style.width="1px",d[a].style.height="1px"),m[a]?(p[a]+=1+3*Math.random(),p[a]<n+g?(d[a].style.top=p[a]+"px",t[a]+=(a%5-2)/5,d[a].style.left=t[a]+"px"):(d[a].style.visibility="hidden",m[a]=0)):d[a].style.visibility="hidden")}k.setTimeout(y,50)}function z(){"number"===typeof k.innerWidth?n=k.innerHeight:c.documentElement&&
    c.documentElement.clientWidth?n=c.documentElement.clientHeight:c.body.clientWidth&&(n=c.body.clientHeight)}function u(b,a){var d=c.createElement("div");d.style.position="absolute";d.style.height=b+"px";d.style.width=a+"px";d.style.overflow="hidden";d.style.backgroundColor=A;return d}var A="#fff",x=150,v=600,w=300,r=v,s=w,n=600,q=0,g=q,d=[],h=[],l=[],e=[],f=[],t=[],p=[],m=[],B=k.setInterval(function(){if("complete"===c.readyState){if(c.getElementById){var b=0,a,f,g,e;e=c.createElement("div");c.body.appendChild(e);
    e.setAttribute("class","snowcursor");for(b=0;b<x;b++)a=u(3,3),a.style.visibility="hidden",e.appendChild(d[b]=a),l[b]=0,m[b]=0,a=u(5,5),a.style.backgroundColor="transparent",a.style.visibility="hidden",f=u(1,5),g=u(5,1),a.appendChild(f),a.appendChild(g),f.style.top="3px",f.style.left="0px",g.style.top="0px",g.style.left="3px",e.appendChild(h[b]=a);z();y()}k.clearInterval(B)}},100);c.onmousemove=function(b){"number"===typeof k.pageYOffset?(g=k.pageYOffset,q=k.pageXOffset):c.body.scrollTop||c.body.scrollLeft?
    (g=c.body.scrollTop,q=c.body.scrollLeft):c.documentElement&&(c.documentElement.scrollTop||c.documentElement.scrollLeft)?(q=c.documentElement.scrollLeft,g=c.documentElement.scrollTop):q=g=0;s="undefined"!==typeof b?b.pageY:event.clientY;r="undefined"!==typeof b?b.pageX:event.clientX};k.onresize=z})(window,document);


let text = "Coming home for Christmas in...";
let index = 0;
let speed = 150;

function type() {
    if(index < text.length) {
        document.querySelector("#text").textContent += text.charAt(index);
        index++;
        setTimeout(type, speed);
    
    }
}

type();

function christmasCountdown() {
    const christmasDate =  new Date("December 25, 2024 00:00");
    const now = new Date();
    const diff = christmasDate - now;

    const msInSecond = 1000; //number of milli-sec in sec - 1 000
    const msInMinute = 60 * 1000; //number of milli-sec in min - 60 000
    const msInHour = 60 * 60 * 1000; // number of milli-sec in hour - 3 600 000
    const msInDay = 24 * 60 * 60 * 1000; //number of milli-sec in day - 86 400 000

    const displayDay = Math.floor(diff / msInDay);
    document.querySelector(".days").textContent = displayDay;
   
    const displayHour = Math.floor((diff % msInDay) / msInHour);
    document.querySelector(".hours").textContent = displayHour;

    const displayMin = Math.floor((diff % msInHour) / msInMinute);
    document.querySelector(".minutes").textContent = displayMin;

    const displaySec = Math.floor ((diff % msInMinute) / msInSecond);
    document.querySelector(".seconds").textContent = displaySec; 

    if (diff <= 0) {
        document.querySelector(".days").textContent = 0;
        document.querySelector(".hours").textContent = 0;
        document.querySelector(".minutes").textContent = 0;
        document.querySelector(".seconds").textContent = 0; 
        clearInterval(timerID);
        console.log(timerID);
        merryChristmas();
    }

}

let timerID = setInterval (christmasCountdown, 1000);

