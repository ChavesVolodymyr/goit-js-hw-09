import"./assets/styles-2289e312.js";const s={email:"",message:""},e=document.querySelector(".feedback-form"),l="feedback-form-state";function m(){localStorage.setItem(l,JSON.stringify(s))}function o(){const t=localStorage.getItem(l);if(t){const a=JSON.parse(t);s.email.elements.value=a.email,s.message.elements.value=a.message}}o();e.addEventListener("input",()=>{e.elements.email.value,e.elements.message.value.trim(),m()});e.addEventListener("submit",t=>{t.preventDefault();const a={email:e.elements.email.value,message:e.elements.message.value.trim()};a.email===""||a.message===""?alert("Fill please all fields"):(console.log("Form:",a),localStorage.removeItem(l),e.reset())});
//# sourceMappingURL=commonHelpers2.js.map
