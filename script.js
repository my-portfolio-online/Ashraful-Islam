const bar=document.getElementById("progress"),menu=document.getElementById("menu"),nav=document.getElementById("nav");function update(){const max=document.documentElement.scrollHeight-innerHeight;bar.style.width=(max>0?scrollY/max*100:0)+"%"}addEventListener("scroll",update,{passive:true});update();menu.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",String(open));menu.setAttribute("aria-label",open?"Close navigation":"Open navigation")});nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");menu.setAttribute("aria-expanded","false")}));document.getElementById("year").textContent=new Date().getFullYear();const items=document.querySelectorAll(".metric,.section-content,.gallery figure,.expertise-grid article,.job,.education-list article");items.forEach(x=>x.classList.add("reveal"));if("IntersectionObserver"in window){const ob=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");ob.unobserve(e.target)}}),{threshold:.12});items.forEach(x=>ob.observe(x))}else items.forEach(x=>x.classList.add("visible"));

const themeToggle=document.getElementById("themeToggle");
const themeIcon=document.getElementById("themeIcon");
const themeLabel=document.getElementById("themeLabel");
function applyTheme(theme){
  const isLight=theme==="light";
  document.body.dataset.theme=isLight?"light":"dark";
  themeIcon.textContent=isLight?"☾":"☼";
  themeLabel.textContent=isLight?"Dark mode":"Light mode";
  themeToggle.setAttribute("aria-label",isLight?"Switch to dark theme":"Switch to light theme");
  themeToggle.setAttribute("title",isLight?"Switch to dark theme":"Switch to light theme");
  try{localStorage.setItem("ashraful-portfolio-theme",isLight?"light":"dark")}catch(e){}
}
let savedTheme="dark";
try{savedTheme=localStorage.getItem("ashraful-portfolio-theme")||"dark"}catch(e){}
applyTheme(savedTheme);
themeToggle.addEventListener("click",()=>{
  applyTheme(document.body.dataset.theme==="dark"?"light":"dark");
});

