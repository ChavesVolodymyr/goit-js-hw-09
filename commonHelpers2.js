import"./assets/styles-2289e312.js";const e={email:"",message:""},a=document.querySelector(".form-feedback"),s="form-feedback-state";function m(){localStorage.setItem(s,JSON.stringify(e))}function o(){const t=localStorage.getItem(s);if(t){const l=JSON.parse(t);e.email=l.email,e.message=l.message,a.elements.email.value=e.email,a.elements.message.value=e.message}}function r(){localStorage.removeItem(s)}o();a.addEventListener("input",()=>{e.email=a.elements.email.value,e.message=a.elements.message.value.trim(),m()});a.addEventListener("submit",t=>{t.preventDefault(),e.email===""||e.message===""?alert("Fill please all fields"):(console.log("Form",e),r(),e.email="",e.message="",a.reset())});
//# sourceMappingURL=commonHelpers2.js.map
