const params=new URLSearchParams(window.location.search);

const nama=params.get("nama")||"Teman";

document.getElementById("judul").innerHTML=`Hai ${nama} 🌸`;

const text=

`Semoga harimu selalu menyenangkan 😊

Jangan lupa tersenyum.

Jangan lupa makan.

Dan semoga semua impianmu segera tercapai ❤️`;

let i=0;

function typing(){

if(i<text.length){

document.getElementById("typing").innerHTML+=text.charAt(i);

i++;

setTimeout(typing,40);

}

}

function flower(){

const x=document.createElement("div");

x.className="sakura";

x.innerHTML="🌸";

x.style.left=Math.random()*window.innerWidth+"px";

x.style.fontSize=(20+Math.random()*30)+"px";

x.style.animationDuration=(4+Math.random()*4)+"s";

document.body.appendChild(x);

setTimeout(()=>{

x.remove();

},8000);

}

document.getElementById("envelope").onclick=function(){

this.style.display="none";

document.getElementById("letter").style.display="block";

typing();

setInterval(flower,250);

}

document.getElementById("btn").onclick=function(){

for(let i=0;i<150;i++){

setTimeout(flower,i*15);

}

alert("🌸 Terima kasih sudah membaca 😊");

}
