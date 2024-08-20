import{s as t,a as w,r as p,j as e,b as f,l as L,e as C}from"./index-d966e263.js";import{F as q,a as b,c as j,b as r,Q as y,d as v,B as k}from"./ReactToastify-380b45b3.js";const z=t.div`
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(17, 18, 19, 0.4);
  overflow: auto;
`,R=t.div`
  background: #fff;
  border-radius: 20px;
  width: 463px;
  /* height: 414px; */
  margin: 10% auto;
  position: relative;
  padding: 50px 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 101;
  gap: 14px;
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  text-align: center;
  color: #6a6a6f;
  @media screen and (max-width: 767px) {
    padding: 40px 32px;
    width: 343px;
  }
`,T=t.h3`
  font-weight: 600;
  font-size: 28px;
  line-height: 114%;
  text-align: center;
  color: #1d1e21;
`,M=t(q)`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 323px;
  @media screen and (max-width: 767px) {
    width: 280px;
  }
`,g=t(b)`
  width: 100%;
  border: 1px solid rgba(29, 30, 33, 0.1);
  border-radius: 60px;
  padding: 13px 18px;
`,S=t.button`
  border-radius: 60px;
  border: none;
  padding: 13px;
  width: 100%;
  background: #59b17a;
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 11px;
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  color: #fff;
`;t.span`
  color: #59b17a;
  text-decoration: underline;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  &:hover,
  &:focus,
  &:active {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;const E=t.svg`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  &:hover,
  &:focus,
  &:active {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`,d=t.div`
  color: red;
  margin-top: 8px;
`,B=j({email:r().matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,"The email must be in the format: example@example.com").required("Email is required"),password:r().required("Password is required").min(6,"The password must contain at least 6 characters")}),D=({close:n,openReg:l})=>{const x=w(),o=p.useCallback(i=>{i.key==="Escape"&&n()},[n]);p.useEffect(()=>(document.addEventListener("keydown",o),()=>{document.removeEventListener("keydown",o)}),[o]);const h=async i=>{var s;const a=await x(L(i));((s=a.error)==null?void 0:s.message)==="Rejected"?k(a.payload.message,{fontSize:"16px"}):(localStorage.setItem("e-pharmacy",JSON.stringify(a.payload)),n())},m=i=>{i.target===i.currentTarget&&n()},u=()=>{n(),l()};return e.jsxs(z,{onClick:m,children:[e.jsx(y,{toastStyle:{background:"#f30e0e",color:"white"}}),e.jsxs(R,{children:[e.jsx(E,{width:"24",height:"24",onClick:n,children:e.jsx("use",{href:`${f}#xB`})}),e.jsx(T,{children:"Log in to your account"}),e.jsx("p",{children:"Please login to your account before continuing."}),e.jsx(v,{initialValues:{email:"",password:""},validationSchema:B,onSubmit:(i,{setSubmitting:a})=>{h(i),a(!1)},children:({isSubmitting:i,errors:a,touched:s})=>e.jsxs(M,{children:[e.jsxs("div",{children:[e.jsx(g,{type:"email",name:"email",placeholder:"Email"}),a.email&&s.email?e.jsx(d,{children:a.email}):null]}),e.jsxs("div",{children:[e.jsx(g,{type:"password",name:"password",placeholder:"Password"}),a.password&&s.password?e.jsx(d,{children:a.password}):null]}),e.jsx(S,{type:"submit",disabled:i,children:"Login"})]})}),e.jsx("p",{onClick:u,style:{cursor:"pointer"},children:"Don't have an account?"})]})]})},A=t.div`
  background: #fff;
  border-radius: 20px;
  width: 463px;
  margin: 10% auto;
  position: relative;
  padding: 50px 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 101;
  gap: 14px;
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  text-align: center;
  color: #6a6a6f;
  @media screen and (max-width: 767px) {
    padding: 40px 32px;
    width: 343px;
  }
`,c=t(b)`
  width: 100%;
  border: 1px solid rgba(29, 30, 33, 0.1);
  border-radius: 60px;
  padding: 13px 18px;
`,F=t.h3`
  font-weight: 600;
  font-size: 28px;
  line-height: 114%;
  text-align: center;
  color: #1d1e21;
`,P=j({name:r().min(2,"The Name must contain at least 2 characters").required("Name is required"),email:r().matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,"The email must be in the format: example@example.com").required("Email is required"),phone:r().required("Phone number is required").matches(/^[+]?[0-9]{10,15}$/,"The phone number must be in the format: +1234567890").min(10,"The phone number must contain at least 10 digits"),password:r().required("Password is required").min(6,"The password must contain at least 6 characters")}),N=({close:n,openLog:l})=>{const x=w(),o=p.useCallback(i=>{i.key==="Escape"&&n()},[n]);p.useEffect(()=>(document.addEventListener("keydown",o),()=>{document.removeEventListener("keydown",o)}),[o]);const h=i=>{i.target===i.currentTarget&&n()},m=async i=>{var s;const a=await x(C(i));((s=a.error)==null?void 0:s.message)==="Rejected"?k(a.payload.message,{fontSize:"16px"}):(n(),l())},u=()=>{n(),l()};return e.jsxs(z,{onClick:h,children:[e.jsx(y,{toastStyle:{background:"#f30e0e",color:"white"}}),e.jsxs(A,{children:[e.jsx(E,{width:"24",height:"24",onClick:n,children:e.jsx("use",{href:`${f}#xB`})}),e.jsx(F,{children:"Sign Up"}),e.jsx("p",{children:"Before proceeding, please register on our site."}),e.jsx(v,{initialValues:{name:"",email:"",phone:"",password:""},validationSchema:P,onSubmit:(i,{setSubmitting:a})=>{m(i),a(!1)},children:({isSubmitting:i,errors:a,touched:s})=>e.jsxs(M,{children:[e.jsxs("div",{children:[e.jsx(c,{type:"text",name:"name",placeholder:"User Name"}),a.password&&s.password?e.jsx(d,{children:a.name}):null]}),e.jsxs("div",{children:[e.jsx(c,{type:"text",name:"email",placeholder:"Email address"}),a.password&&s.password?e.jsx(d,{children:a.email}):null]}),e.jsxs("div",{children:[e.jsx(c,{type:"text",name:"phone",placeholder:"Phone number"}),a.password&&s.password?e.jsx(d,{children:a.phone}):null]}),e.jsxs("div",{children:[e.jsx(c,{type:"password",name:"password",placeholder:"Password"}),a.password&&s.password?e.jsx(d,{children:a.password}):null]}),e.jsx(S,{type:"submit",disabled:i,children:"Sign Up"})]})}),e.jsx("p",{onClick:u,style:{cursor:"pointer"},children:"Already have an account?"})]})]})};export{D as M,N as a};
