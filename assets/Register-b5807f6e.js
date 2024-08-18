import{s,a as S,u as q,c as z,j as e,e as F,l as h}from"./index-ade7dc7a.js";import{F as f,a as E,E as P,c as j,b as o,Q as A,d as g,B as p}from"./ReactToastify-4c3cb953.js";import{e as L}from"./elements-2a1dc22d.js";const T=s.div`
  margin: auto;
  display: flex;
  justify-content: center;
  gap: 54px;
  padding: 199px 0;
  box-sizing: border-box;
  position: relative;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    flex-direction: column;
    align-items: center;
    padding: 64px 0px;
    width: 704px;
  }
  @media screen and (max-width: 767px) {
    flex-direction: column;
    width: 335px;
    padding: 81px 0;
  }
`,k=s.div`
  width: 540px;
  position: relative;
  font-weight: 600;
  font-size: 40px;
  line-height: 154%;
  color: #1d1e21;
  @media screen and (max-width: 767px) {
    font-size: 28px;
    line-height: 121%;
    width: 100%;
  }
`,D=s.img`
  position: absolute;
  top: -109px;
  right: 9px;
  @media screen and (max-width: 767px) {
    width: 95px;
    height: 93px;
    top: -25px;
    right: -19px;
  }
`,N=s.span`
  color: #59b17a;
`,Z=s(f)`
  width: 574px;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: rgba(29, 30, 33, 0.4);
  display: flex;
  flex-direction: column;
  gap: 62px;
  @media screen and (max-width: 767px) {
    width: 335px;
    align-items: center;
  }
`,I=s(f)`
  width: 323px;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: rgba(29, 30, 33, 0.4);
  display: flex;
  flex-direction: column;
  gap: 62px;
  @media screen and (max-width: 767px) {
    bottom: -122px;
    align-items: center;
  }
`,$=s.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  @media screen and (max-width: 767px) {
    width: 335px;
  }
`,B=s.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`,t=s(E)`
  border: 1px solid rgba(29, 30, 33, 0.1);
  border-radius: 60px;
  width: 280px;
  height: 44px;
  background: #fff;
  padding: 0 18px;
  @media screen and (max-width: 767px) {
    width: 335px;
  }
`,u=s.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  align-items: center;
  gap: 14px;
`,w=s.button`
  border-radius: 60px;
  border: none;
  width: 280px;
  height: 44px;
  background: #59b17a;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  color: #fff;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  &:hover,
  &:focus,
  &:active {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  @media screen and (max-width: 767px) {
    width: 335px;
  }
`,n=s(P)`
  color: red;
`,C=s.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 10px;
  bottom: 0;
  right: 0;
  @media screen and (max-width: 767px) {
    bottom: -122px;
  }
`,J="/E-Pharmacy/assets/white round pill-232bb2d4.png",O=j({name:o().min(2,"The Name must contain at least 2 characters").required("Name is required"),email:o().matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).required("Email is required"),phone:o().required("Phone number is required").matches(/^[+]?[0-9]{10,15}$/,"The phone number must consist of numbers only").min(10,"The phone number must contain at least 10 digits"),password:o().required("Password is required").min(6,"The password must contain at least 6 characters")}),V=j({email:o().matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).required("Email is required"),password:o().required("Password is required").min(6,"The password must contain at least 6 characters")}),U=()=>{const l=S(),m=q(),d=z(),b=async i=>{var r,x;const a=await l(F(i));if(((r=a.error)==null?void 0:r.message)==="Rejected")p(a.payload.message);else{const c=await l(h({email:i.email,password:i.password}));((x=c.error)==null?void 0:x.message)==="Rejected"?p(c.payload.message):(localStorage.setItem("e-pharmacy",JSON.stringify(c.payload)),d("/medicine"))}},y=async i=>{var r;const a=await l(h(i));((r=a.error)==null?void 0:r.message)==="Rejected"?p(a.payload.message):(localStorage.setItem("e-pharmacy",JSON.stringify(a.payload)),d("/medicine"))},v=()=>{d("/login")},R=()=>{d("/register")};return e.jsxs(T,{children:[e.jsx(A,{toastStyle:{background:"#f30e0e",color:"white"}}),e.jsxs(k,{children:[e.jsxs("h3",{children:["Your medication, delivered Say goodbye to all",e.jsx(N,{children:" your healthcare"})," worries with us"]}),e.jsx(D,{src:J,alt:"Pills"})]}),m.pathname==="/register"&&e.jsx(g,{initialValues:{name:"",email:"",phone:"",password:""},validationSchema:O,onSubmit:(i,{setSubmitting:a})=>{b(i),a(!1)},children:({isSubmitting:i})=>e.jsxs(Z,{children:[e.jsxs($,{children:[e.jsxs("div",{children:[e.jsx(t,{type:"text",name:"name",placeholder:"User Name"}),e.jsx(n,{name:"name",component:"div"})]}),e.jsxs("div",{children:[e.jsx(t,{type:"text",name:"email",placeholder:"Email address"}),e.jsx(n,{name:"email",component:"div"})]}),e.jsxs("div",{children:[e.jsx(t,{type:"text",name:"phone",placeholder:"Phone number"}),e.jsx(n,{name:"phone",component:"div"})]}),e.jsxs("div",{children:[e.jsx(t,{type:"password",name:"password",placeholder:"Password"}),e.jsx(n,{name:"password",component:"div"})]})]}),e.jsxs(u,{children:[e.jsx(w,{type:"submit",disabled:i,children:"Register"}),e.jsx("p",{onClick:v,style:{cursor:"pointer"},children:"Already have an account?"})]})]})}),m.pathname==="/login"&&e.jsx(g,{initialValues:{email:"",password:""},validationSchema:V,onSubmit:(i,{setSubmitting:a})=>{y(i),a(!1)},children:({isSubmitting:i})=>e.jsxs(I,{children:[e.jsxs(B,{children:[e.jsxs("div",{children:[e.jsx(t,{type:"text",name:"email",placeholder:"Email address"}),e.jsx(n,{name:"email",component:"div"})]}),e.jsxs("div",{children:[e.jsx(t,{type:"password",name:"password",placeholder:"Password"}),e.jsx(n,{name:"password",component:"div"})]})]}),e.jsxs(u,{children:[e.jsx(w,{type:"submit",disabled:i,children:"Login"}),e.jsx("p",{onClick:R,style:{cursor:"pointer"},children:"Don't have an account yet?"})]})]})}),e.jsx(C,{children:e.jsx("img",{src:L,alt:"",width:"196px"})})]})};export{U as default};
