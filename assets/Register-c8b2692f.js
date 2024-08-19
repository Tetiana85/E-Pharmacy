import{s as a,a as S,u as z,c as q,j as e,e as F,l as h}from"./index-7f27b733.js";import{F as f,a as N,E,c as b,b as o,Q as T,d as g,B as l}from"./ReactToastify-803ea0f0.js";import{e as B}from"./elements-2a1dc22d.js";const P=a.div`
  margin: auto;
  display: flex;
  box-sizing: border-box;
  position: relative;
  flex-direction: column;
  align-items: center;
  padding: 106px 10px;
  max-width: 335px;

  @media screen and (min-width: 375px) {
    padding: 106px 0;
  }

  @media screen and (min-width: 768px) {
    max-width: 100%;
    padding: 168px 122px 0 32px;
    justify-content: center;
    gap: 54px;
    align-items: flex-start;
  }
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    padding: 226px 122px 0 32px;
  }
`,A=a.div`
  /* width: 540px; */
  position: relative;
  color: #1d1e21;
  margin-bottom: 20px;
  @media screen and (min-width: 375px) {
  }
  @media screen and (min-width: 768px) {
    line-height: 121%;
    width: 614px;
  }
  h3 {
    font-size: calc(26px + (28 - 26) * ((100vw - 320px) / (375 - 320)));
    font-weight: 600;
    line-height: 121%;
    @media screen and (min-width: 375px) {
      font-size: 28px;
    }
    @media screen and (min-width: 768px) {
      font-size: 54px;
      line-height: 121%;
    }
  }
`,L=a.img`
  position: absolute;
  width: calc(85px + (95 - 85) * ((100vw - 320px) / (375 - 320)));
  height: calc(83px + (93 - 83) * ((100vw - 320px) / (375 - 320)));
  top: -58px;
  right: calc(15px + (10 - 15) * ((100vw - 320px) / (375 - 320)));

  @media screen and (min-width: 375px) {
    right: 15px;
    width: 95px;
    height: 93px;
  }
  @media screen and (min-width: 768px) {
    width: 179px;
    height: 175px;
    top: -100px;
    right: 16px;
  }
`,k=a.span`
  color: #59b17a;
`,D=a(f)`
  max-width: 335px;
  width: 100%;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: rgba(29, 30, 33, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  @media screen and (min-width: 375px) {
  }
  @media screen and (min-width: 768px) {
    max-width: 574px;
    align-items: flex-start;
  }
`,Z=a(f)`
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
`,I=a.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  max-width: 100%;
  @media screen and (min-width: 768px) {
    & > :last-child {
      margin-bottom: 62px;
    }
  }
  .inputBox {
    width: 100%;
    @media screen and (min-width: 768px) {
      width: auto;
    }
  }
`,$=a.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`,s=a(N)`
  border: 1px solid rgba(29, 30, 33, 0.1);
  border-radius: 60px;
  width: 100%;
  height: 44px;
  background: #fff;
  padding: 0 18px;
  @media screen and (min-width: 768px) {
    width: 280px;
  }
`,w=a.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 14px;
  @media screen and (min-width: 768px) {
    width: auto;
  }
`,u=a.button`
  border-radius: 60px;
  border: none;
  width: 100%;
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
  @media screen and (min-width: 768px) {
    width: 280px;
  }
`,n=a(E)`
  color: red;
`,C=a.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 10px;
  bottom: -170px;
  right: 0;
  @media screen and (max-width: 767px) {
    bottom: -122px;
  }
`,J="/E-Pharmacy/assets/white round pill-232bb2d4.png",O=b({name:o().min(2,"The Name must contain at least 2 characters").required("Name is required"),email:o().matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,"The email must be in the format: example@example.com").required("Email is required"),phone:o().required("Phone number is required").matches(/^[+]?[0-9]{10,15}$/,"The phone number must be in the format: +1234567890").min(10,"The phone number must contain at least 10 digits"),password:o().required("Password is required").min(6,"The password must contain at least 6 characters")}),V=b({email:o().matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,"The email must be in the format: example@example.com").required("Email is required"),password:o().required("Password is required").min(6,"The password must contain at least 6 characters")}),U=()=>{const p=S(),m=z(),d=q(),j=async i=>{var r,x;const t=await p(F(i));if(((r=t.error)==null?void 0:r.message)==="Rejected")l(t.payload.message);else{const c=await p(h({email:i.email,password:i.password}));((x=c.error)==null?void 0:x.message)==="Rejected"?l(c.payload.message):(localStorage.setItem("e-pharmacy",JSON.stringify(c.payload)),d("/medicine"))}},y=async i=>{var r;const t=await p(h(i));((r=t.error)==null?void 0:r.message)==="Rejected"?l(t.payload.message):(localStorage.setItem("e-pharmacy",JSON.stringify(t.payload)),d("/medicine"))},v=()=>{d("/login")},R=()=>{d("/register")};return e.jsxs(P,{children:[e.jsx(T,{toastStyle:{background:"#f30e0e",color:"white"}}),e.jsxs(A,{children:[e.jsxs("h3",{children:["Your medication, delivered Say goodbye to all",e.jsx(k,{children:" your healthcare"})," worries with us"]}),e.jsx(L,{src:J,alt:"Pills"})]}),m.pathname==="/register"&&e.jsx(g,{initialValues:{name:"",email:"",phone:"",password:""},validationSchema:O,onSubmit:(i,{setSubmitting:t})=>{j(i),t(!1)},children:({isSubmitting:i})=>e.jsxs(D,{children:[e.jsxs(I,{children:[e.jsxs("div",{className:"inputBox",children:[e.jsx(s,{type:"text",name:"name",placeholder:"User Name"}),e.jsx(n,{name:"name",component:"div"})]}),e.jsxs("div",{className:"inputBox",children:[e.jsx(s,{type:"text",name:"email",placeholder:"Email address"}),e.jsx(n,{name:"email",component:"div"})]}),e.jsxs("div",{className:"inputBox",children:[e.jsx(s,{type:"text",name:"phone",placeholder:"Phone number"}),e.jsx(n,{name:"phone",component:"div"})]}),e.jsxs("div",{className:"inputBox",children:[e.jsx(s,{type:"password",name:"password",placeholder:"Password"}),e.jsx(n,{name:"password",component:"div"})]})]}),e.jsxs(w,{children:[e.jsx(u,{type:"submit",disabled:i,children:"Register"}),e.jsx("p",{onClick:v,style:{cursor:"pointer"},children:"Already have an account?"})]})]})}),m.pathname==="/login"&&e.jsx(g,{initialValues:{email:"",password:""},validationSchema:V,onSubmit:(i,{setSubmitting:t})=>{y(i),t(!1)},children:({isSubmitting:i})=>e.jsxs(Z,{children:[e.jsxs($,{children:[e.jsxs("div",{children:[e.jsx(s,{type:"text",name:"email",placeholder:"Email address"}),e.jsx(n,{name:"email",component:"div"})]}),e.jsxs("div",{children:[e.jsx(s,{type:"password",name:"password",placeholder:"Password"}),e.jsx(n,{name:"password",component:"div"})]})]}),e.jsxs(w,{children:[e.jsx(u,{type:"submit",disabled:i,children:"Login"}),e.jsx("p",{onClick:R,style:{cursor:"pointer"},children:"Don't have an account yet?"})]})]})}),e.jsx(C,{children:e.jsx("img",{src:B,alt:"",width:"196px"})})]})};export{U as default};
