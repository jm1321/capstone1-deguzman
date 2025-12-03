document.getElementById("year").textContent = new Date().getFullYear();

function handleSubmit(e){
  e.preventDefault();
  alert("Message sent! (Connect this to your backend)");
  e.target.reset();
}
/* Added animations & dark/light toggle */
.theme-toggle{position:fixed;bottom:20px;right:20px;padding:10px 14px;border:none;border-radius:12px;background:#fff;color:#000;cursor:pointer;z-index:999}
body.dark{background:#0b0f19;color:#f1f5f9}
body.dark .card,body.dark .proj,body.dark .profile{background:#111726}
.fade-in{opacity:0;transform:translateY(20px);animation:fadeInUp .6s forwards}
@keyframes fadeInUp{to{opacity:1;transform:translateY(0)}}
