const h=document.querySelector('.hdr');const f=()=>h.classList.toggle('s',scrollY>40);addEventListener('scroll',f,{passive:true});f();
if(new URLSearchParams(location.search).has('review'))document.body.classList.add('review');
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));
document.getElementById('yr').textContent=new Date().getFullYear();
/* Quote form: no backend yet. Opens a pre-filled text to Tyler. TODO(Reese): swap for Formspree/Jobber request form. */
document.getElementById('qf').addEventListener('submit',e=>{
  if(e.target.getAttribute('action')!=='#')return; e.preventDefault();
  const d=new FormData(e.target);
  const msg=`Hi Tyler, free estimate request:\nName: ${d.get('name')}\nPhone: ${d.get('phone')}\nService: ${d.get('service')}\nZIP: ${d.get('zip')}\n${d.get('details')||''}`;
  const ios=/iP(hone|ad|od)/.test(navigator.userAgent);
  location.href=`sms:+19414084609${ios?'&':'?'}body=${encodeURIComponent(msg)}`;
});
