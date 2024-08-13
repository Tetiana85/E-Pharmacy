import{s as o,a as w,r as p,j as e,b as f,l as C,e as q}from"./index-251363dc.js";import{F as R,a as j,c as b,b as r,Q as y,d as v,B as k}from"./ReactToastify-0334fdf1.js";const M=o.div`
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(17, 18, 19, 0.4);
  overflow: auto;
`,B=o.div`
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
`,A=o.h3`
  font-weight: 600;
  font-size: 28px;
  line-height: 114%;
  text-align: center;
  color: #1d1e21;
`,L=o(R)`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 323px;
  @media screen and (max-width: 767px) {
    width: 280px;
  }
`,u=o(j)`
  width: 100%;
  border: 1px solid rgba(29, 30, 33, 0.1);
  border-radius: 60px;
  padding: 13px 18px;
`,E=o.button`
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
`,S=o.span`
  color: #59b17a;
  text-decoration: underline;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  &:hover,
  &:focus,
  &:active {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`,z=o.svg`
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
`,d=o.div`
  color: red;
  margin-top: 8px;
`,F=b({email:r().matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).required("Email is required"),password:r().required("Password is required").min(6,"The password must contain at least 6 characters")}),N=({close:n,openReg:l})=>{const x=w(),t=p.useCallback(i=>{i.key==="Escape"&&n()},[n]);p.useEffect(()=>(document.addEventListener("keydown",t),()=>{document.removeEventListener("keydown",t)}),[t]);const h=async i=>{var s;const a=await x(C(i));((s=a.error)==null?void 0:s.message)==="Rejected"?k(a.payload.message):(localStorage.setItem("e-pharmacy",JSON.stringify(a.payload)),n())},g=i=>{i.target===i.currentTarget&&n()},m=()=>{n(),l()};return e.jsxs(M,{onClick:g,children:[e.jsx(y,{toastStyle:{background:"#f30e0e",color:"white"}}),e.jsxs(B,{children:[e.jsx(z,{width:"24",height:"24",onClick:n,children:e.jsx("use",{href:`${f}#xB`})}),e.jsx(A,{children:"Log in to your account"}),e.jsx("p",{children:"Please login to your account before continuing."}),e.jsx(v,{initialValues:{email:"",password:""},validationSchema:F,onSubmit:(i,{setSubmitting:a})=>{h(i),a(!1)},children:({isSubmitting:i,errors:a,touched:s})=>e.jsxs(L,{children:[e.jsxs("div",{children:[e.jsx(u,{type:"email",name:"email",placeholder:"Email"}),a.email&&s.email?e.jsx(d,{children:a.email}):null]}),e.jsxs("div",{children:[e.jsx(u,{type:"password",name:"password",placeholder:"Password"}),a.password&&s.password?e.jsx(d,{children:a.password}):null]}),e.jsx(E,{type:"submit",disabled:i,children:"Login"})]})}),e.jsxs("p",{children:["Don't have an account?",e.jsx(S,{onClick:m,children:"Register"})]})]})]})},P=o.div`
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
`,c=o(j)`
  width: 100%;
  border: 1px solid rgba(29, 30, 33, 0.1);
  border-radius: 60px;
  padding: 13px 18px;
`,T=o.h3`
  font-weight: 600;
  font-size: 28px;
  line-height: 114%;
  text-align: center;
  color: #1d1e21;
`,$=b({name:r().min(2,"The Name must contain at least 2 characters").required("Name is required"),email:r().matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).required("Email is required"),phone:r().required("Phone number is required").matches(/^[+]?[0-9]{10,15}$/,"The phone number must consist of numbers only").min(10,"The phone number must contain at least 10 digits"),password:r().required("Password is required").min(6,"The password must contain at least 6 characters")}),I=({close:n,openLog:l})=>{const x=w(),t=p.useCallback(i=>{i.key==="Escape"&&n()},[n]);p.useEffect(()=>(document.addEventListener("keydown",t),()=>{document.removeEventListener("keydown",t)}),[t]);const h=i=>{i.target===i.currentTarget&&n()},g=async i=>{var s;const a=await x(q(i));((s=a.error)==null?void 0:s.message)==="Rejected"?k(a.payload.message):(n(),l())},m=()=>{n(),l()};return e.jsxs(M,{onClick:h,children:[e.jsx(y,{toastStyle:{background:"#f30e0e",color:"white"}}),e.jsxs(P,{children:[e.jsx(z,{width:"24",height:"24",onClick:n,children:e.jsx("use",{href:`${f}#xB`})}),e.jsx(T,{children:"Sign Up"}),e.jsx("p",{children:"Before proceeding, please register on our site."}),e.jsx(v,{initialValues:{name:"",email:"",phone:"",password:""},validationSchema:$,onSubmit:(i,{setSubmitting:a})=>{g(i),a(!1)},children:({isSubmitting:i,errors:a,touched:s})=>e.jsxs(L,{children:[e.jsxs("div",{children:[e.jsx(c,{type:"text",name:"name",placeholder:"User Name"}),a.password&&s.password?e.jsx(d,{children:a.name}):null]}),e.jsxs("div",{children:[e.jsx(c,{type:"text",name:"email",placeholder:"Email address"}),a.password&&s.password?e.jsx(d,{children:a.email}):null]}),e.jsxs("div",{children:[e.jsx(c,{type:"text",name:"phone",placeholder:"Phone number"}),a.password&&s.password?e.jsx(d,{children:a.phone}):null]}),e.jsxs("div",{children:[e.jsx(c,{type:"password",name:"password",placeholder:"Password"}),a.password&&s.password?e.jsx(d,{children:a.password}):null]}),e.jsx(E,{type:"submit",disabled:i,children:"Sign Up"})]})}),e.jsxs("p",{children:["Already have an account?",e.jsx(S,{onClick:m,children:"LogIn"})]})]})]})};export{N as M,I as a};
