/* ✏️ DATA: ganti isi di bawah ini dengan data asli kalian */
const DATA={
 bh:{name:"[FEIRA]",tag:"FEIRAA · hanya pelajar SMK yang bercita-cita sebagai programmer",
  about:"Halo, aku ARIEF bisa di panggil crot,arip atau bisa juga amba. aku adalah anak SMK yang bersekolah di SMK KRIAN 1 SIDOARJO,aku juga mengikuti ektra music,desain grafis,dan badminton.aku juga suka sekali dengan musik,game,dan pemrograman.aku sekarang berumur 16 tahun,rumahku berada di sidomukti kraton,sini lah main main kita.",
  skills:[["JavaScript",40],["HTML & CSS",75],["UI Design",75],["drummer",80],["gooning",100]],
  projects:[["depraved world","projek game yang di buat oleh FEIRA dengan tema seperti magic survival.","WEB · UI"],["broadcast","sistem untuk mengirim ke beberapa nomor sekaligus.","APP · API"],["unknown","in progress......","OPEN SOURCE"]],
  contacts:[["Email","ariefwicak0701@gmail.com"],["WhatsApp","https://wa.me/6285707632120"],["Instagram","https://www.instagram.com/arip_gembel?rpxt=MTAwc3Nya3Rsa3NuZg=="],["GitHub","https://github.com/"]]},
 cs:{name:"[Jildamnn]",tag:"[idunn] · pelajar SMK yang ingin jadi web development",
  about:"Hai, aku Jildan biasa di panggil (idunn / pentol). aku adalah siswa SMK yang bersekolah di SMK KRIAN 1 SIDOARJO,aku juga mengikuti ekstra Paskibra. aku juga suka sekali dengan musik,game,dan tentang dunia Otomotif. dann aku sekarang berumur 16 tahun,rumahku berada di TEMPEL asix.",
  skills:[["JavaScript",40],["HTML & CSS",75],["UI Design",75],["Otomotif",100]],
  projects:[["Kalkulator","aplikasi berbasis browser yang memungkinkan pengguna melakukan berbagai perhitungan matematika atau finansial secara langsung lewat halaman internet tanpa perlu menginstal perangkat lunak tambahan..","WEB · UI"]],
  contacts:[["Email","dannn4844@email.com"],["WhatsApp","https://wa.me/6289696777957"],["Instagram","https://www.instagram.com/jildamnf?obrf=eXpzMHRrcjZzb3V2"],["Tiktok","tiktok.com/@jldnnv18_"]]}
};
const $=s=>document.querySelector(s),R=Math.random,isM=()=>innerWidth<=760;
let cur="landing",busy=false,mx=0,my=0,W=0,H=0;
const mk=(n,f)=>Array.from({length:n},f);

/* Render profil */
function render(el,d){
 const parts=[
  `<div><div class="av">${d.name.replace(/[\[\]]/g,"").trim()[0]||"A"}</div><h1>${d.name}</h1><p class="tag">${d.tag}</p></div>`,
  `<div><h2>About</h2><p class="abt">${d.about}</p></div>`,
  `<div><h2>Skills</h2><div class="sk">${d.skills.map(s=>`<span class="st"><i class="dot" style="width:${8+s[1]/8}px;height:${8+s[1]/8}px"></i>${s[0]}</span>`).join("")}</div></div>`,
  `<div><h2>Projects</h2><div class="cards">${d.projects.map(p=>`<div class="card"><b>${p[0]}</b><p>${p[1]}</p><span class="tg">${p[2]}</span></div>`).join("")}</div></div>`,
  `<div><h2>Contact</h2><div class="ct">${d.contacts.map(c=>`<a href="${c[1]}" target="_blank" rel="noopener">${c[0]}</a>`).join("")}</div></div>`];
 el.innerHTML=parts.join("");
 [...el.children].forEach((c,i)=>c.style.setProperty("--i",i+1));
}
render($("#txB"),DATA.bh);render($("#txC"),DATA.cs);
$("#n1").textContent=DATA.bh.name;$("#n2").textContent=DATA.cs.name;

/* Canvas bintang */
const cv={L:$("#L"),B:$("#B"),C:$("#C"),F:$("#fx")},cx={};
for(const k in cv)cx[k]=cv[k].getContext("2d");
function size(){W=innerWidth;H=innerHeight;for(const k in cv){cv[k].width=W;cv[k].height=H}}
addEventListener("resize",size);size();
const sL=mk(230,()=>({x:R(),y:R(),r:R()*1.4+.3,p:R()*6.28,d:R()*.8+.2,h:180+R()*140}));
const sB=mk(170,()=>({x:R()*W,y:R()*H,r:R()*1.3+.3}));
const sC=mk(200,()=>({x:R()*W,y:R()*H,r:R()*1.5+.3,p:R()*6.28,h:170+R()*150,v:R()*.2+.05}));
function drawL(t){const c=cx.L;c.clearRect(0,0,W,H);
 for(const s of sL){const x=s.x*W+mx*s.d*22,y=s.y*H+my*s.d*22,bh=isM()?s.y<.5:s.x<.5,a=.35+.65*Math.abs(Math.sin(t/800+s.p));
  c.fillStyle=bh?`rgba(255,255,255,${a})`:`hsla(${s.h},95%,80%,${a})`;c.beginPath();c.arc(x,y,s.r,0,6.28);c.fill()}}
function drawB(){const c=cx.B,ox=isM()?W*.6:W*.76,oy=isM()?H*.82:H*.5;c.clearRect(0,0,W,H);
 for(const s of sB){const dx=ox-s.x,dy=oy-s.y,d=Math.hypot(dx,dy)||1,v=.25+70/d;
  s.x+=dx/d*v-dy/d*v*.45;s.y+=dy/d*v+dx/d*v*.45;
  if(d<30){const e=R()*4;s.x=e<1?0:e<2?W:R()*W;s.y=e<2?R()*H:e<3?0:H}
  c.fillStyle=`rgba(255,255,255,${Math.min(1,d/260)})`;c.fillRect(s.x,s.y,s.r,s.r)}}
function drawC(t){const c=cx.C;c.clearRect(0,0,W,H);
 for(const s of sC){s.x+=s.v;if(s.x>W)s.x=0;c.fillStyle=`hsla(${s.h},95%,80%,${.3+.7*Math.abs(Math.sin(t/900+s.p))})`;c.beginPath();c.arc(s.x,s.y,s.r,0,6.28);c.fill()}}
(function loop(t){({landing:drawL,bh:drawB,cs:drawC})[cur](t);requestAnimationFrame(loop)})(0);
addEventListener("pointermove",e=>{mx=e.clientX/W-.5;my=e.clientY/H-.5;const l=$("#landing").style;l.setProperty("--px",mx);l.setProperty("--py",my)});

/* Util scene */
function show(id){document.querySelectorAll(".scene").forEach(e=>e.classList.toggle("on",e.id===id));cur=id;
 $("#nav").classList.toggle("on",id!=="landing");$("#sw").textContent=id==="bh"?"⇄ Switch ke Cosmic":"⇄ Switch ke Blackhole";
 if(id==="landing")$("#sw").textContent="⇄ Switch"}
function reveal(id){const s=$("#"+id),b=s.querySelector(".big");s.classList.remove("rev");b.classList.remove("in");s.querySelector(".prof").scrollTop=0;void s.offsetWidth;s.classList.add("rev");setTimeout(()=>b.classList.add("in"),2300)}
function flash(bg){const f=$("#flash");f.style.background=bg;f.classList.remove("f");void f.offsetWidth;f.classList.add("f")}
const clearFx=()=>["suck","stretch","zoomout"].forEach(c=>document.querySelectorAll("."+c).forEach(e=>e.classList.remove(c)));

/* Masuk Blackhole (klik orb ATAU Switch dari Cosmic) */
function enterBlackhole(){if(busy)return;busy=true;
 $("#"+cur).classList.add("suck");$("#sing").classList.add("go");
 setTimeout(()=>flash("#fff"),1250);
 setTimeout(()=>{show("bh");clearFx();$("#sing").classList.remove("go");reveal("bh")},1650);
 setTimeout(()=>busy=false,2300)}

/* Masuk Cosmic (klik orb ATAU Switch dari Blackhole): warp speed */
function enterCosmic(){if(busy)return;busy=true;
 const prev=$("#"+cur),f=cv.F,c=cx.F;prev.classList.add("stretch");f.style.display="block";c.clearRect(0,0,W,H);
 const R0=Math.hypot(W,H)/2,st=mk(280,()=>({a:R()*6.28,b:R()*R0*.25+4,v:.6+R()*1.2,h:190+R()*130})),t0=performance.now();
 (function step(t){const k=(t-t0)/1700;c.fillStyle="rgba(10,4,30,.3)";c.fillRect(0,0,W,H);
  for(const s of st){const e=Math.max(0,k-.15),r=s.b*(1+60*k*k*s.v),r0=s.b*(1+60*e*e*s.v),co=Math.cos(s.a),si=Math.sin(s.a);
   c.strokeStyle=`hsl(${s.h},100%,${65+k*20}%)`;c.lineWidth=1+k*1.5;c.beginPath();c.moveTo(W/2+co*r0,H/2+si*r0);c.lineTo(W/2+co*r,H/2+si*r);c.stroke()}
  if(k<1)return requestAnimationFrame(step);
  flash("radial-gradient(circle,#fff,#ff7ad9 40%,#6b3dff)");
  setTimeout(()=>{show("cs");clearFx();f.style.display="none";reveal("cs")},250);
  setTimeout(()=>busy=false,1100)})(t0)}

function doSwitch(){cur==="bh"?enterCosmic():enterBlackhole()}
function goHome(){if(busy||cur==="landing")return;busy=true;
 const p=$("#"+cur);p.style.transition="opacity .7s";p.style.opacity=0;
 setTimeout(()=>{show("landing");p.style.opacity="";p.style.transition="";p.classList.remove("rev");p.querySelector(".big").classList.remove("in");$("#landing").classList.add("zoomout")},700);
 setTimeout(()=>{clearFx();busy=false},1950)}