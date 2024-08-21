import{s as a,r as x,a as _,f as N,j as e,S as H,n as I,v as L,w as Q,x as Y,c as J,y as V,z as X}from"./index-ce6fc3b8.js";import{c as G,b as v,u as K,Q as W,B as Z}from"./ReactToastify-816971a4.js";const ee=a.div`
  padding: 39px 20px 0;
  .cartName {
    max-width: 335px;
    margin: 0 auto;
    font-size: 28px;
    @media screen and (min-width: 768px) {
      max-width: 704px;
    }
    @media screen and (min-width: 1440px) {
      max-width: 704px;
      margin: 0 auto 0 0;
    }
  }

  @media screen and (min-width: 375px) {
    padding: 39px 0;
  }
  @media screen and (min-width: 768px) {
    padding: 80px 32px 0;
  }
  @media screen and (min-width: 1440px) {
    width: 1184px;
    margin: auto;
    padding: 92px 0 120px;
  }
`,te=a.div`
  display: flex;
  flex-direction: column;
  max-width: 375px;
  margin-top: 40px;

  @media screen and (min-width: 375px) {
    padding: 0;
    align-items: center;
    max-width: 100%;
  }
  @media screen and (min-width: 768px) {
    max-width: 100%;
    margin-top: 32px;
  }
  @media screen and (min-width: 1440px) {
    gap: 96px;
    margin-top: 40px;
    flex-direction: row;
    align-items: flex-start;
  }
`,ne=a.div`
  border-radius: 27px;
  max-width: 335px;
  padding: 20px 20px 40px;
  background: #fff;
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: #6a6a6f;
  margin-bottom: 80px;
  @media screen and (min-width: 375px) {
  }
  @media screen and (min-width: 768px) {
    padding: 40px 92px 40px 78px;
    max-width: 704px;
    margin-bottom: 64px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 628px;
    padding: 40px;
    margin-bottom: 0;
  }
`,O=a.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 140%;
  color: #1d1e21;
  margin-bottom: 14px;
`,z=a.input`
  border: 1px solid rgba(29, 30, 33, 0.2);
  border-radius: 60px;
  width: 100%;
  height: 44px;
  padding: 18px;
  font-size: 12px;
  margin-top: 8px;

  &::placeholder {
    font-size: 12px;
    font-weight: 400;
  }

  &:hover,
  &:focus,
  &:active {
    border-color: #59b17a;
    outline: none;
  }

  @media screen and (min-width: 375px) {
    width: 295px;
  }
  @media screen and (min-width: 768px) {
    width: 260px;
    display: flex;
  }
`,B=a.label`
  font-weight: 600;
  font-size: 14px;
  line-height: 129%;
  color: #1d1e21;
  position: relative;
  left: 20px;
`,ae=a.form`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 40px;
  @media screen and (min-width: 768px) {
    gap: 20px 14px;
  }
`,ie=a.div`
  border-radius: 8px;
  width: 100%;
  height: 65px;
  background: #e7f1ed;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 18px;
  line-height: 140%;
  color: #1d1e21;
`,re=a.button`
  border-radius: 60px;
  border: none;
  padding: 13px 32px;
  max-width: 141px;
  height: 44px;
  background: ${d=>d.disabled?"rgb(136, 178, 152)":"#59b17a"};
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  color: #fff;
  margin-top: 6px;
  cursor: ${d=>d.disabled?"none":"pointer"};
  transition: box-shadow 0.3s ease;
  &:hover,
  &:focus,
  &:active {
    box-shadow: ${d=>d.disabled?"none":" 0 4px 8px rgba(0, 0, 0, 0.2);"};
  }
`,F=a.hr`
  max-width: 530px;
  width: 100%;
  margin: 26px auto 40px auto;
  border: 0.5px solid rgba(29, 30, 33, 0.1);
  @media screen and (min-width: 768px) {
    margin: 24px auto 40px auto;
  }
`,oe=a.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 20px;
  list-style-type: none;
  padding: 0;

  span {
    margin-left: 8px;
  }
`;a.li`
  position: relative;
  display: flex;
  gap: 8px;
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  color: #fcfcfc;
  align-items: center;

  @media only screen and (min-width: 768px) {
    font-size: 14px;
  }
`;const A=a.input`
  height: 14px;
  width: 14px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  cursor: pointer;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    border: 2px solid rgba(18, 20, 23, 0.2);
  }

  &:checked:before {
    border-color: #59b17a;
    background-color: #fff;
  }

  &:checked::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background-color: #59b17a;
    transform: translate(-50%, -50%);
    visibility: visible;
  }
`,D=a.div`
  color: red;
  position: relative;
  left: 20px;
  font-size: 12px;
`,se=a.div`
  color: red;
  font-size: 12px;
`,de=a.div`
  position: absolute;
  top: 300px;
  right: 20%;
  transform: translateX(-50%);
`,ce=a.ul`
  max-width: 355px;
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  position: relative;

  @media screen and (min-width: 375px) {
  }
  @media screen and (min-width: 768px) {
    max-width: 704px;
    margin-bottom: 100px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 460px;
  }
`,le=a.li`
  width: 100%;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(29, 30, 33, 0.1);
  display: flex;
  gap: 20px;
  &:last-child {
    border-bottom: none;
  }
  @media screen and (min-width: 768px) {
  }
`,pe=a.div`
  border: 1.15px solid #f1f1f1;
  border-radius: 27px;
  min-width: 120px;
  height: 120px;
  display: flex;
  @media screen and (min-width: 768px) {
    min-width: auto;
    width: 122px;
    height: 133px;
  }
`,xe=a.div`
  display: flex;
  flex-direction: column;
  width: 203px;
  justify-content: space-between;
  font-weight: 400;
  font-size: 14px;
  line-height: 129%;
  color: #6a6a6f;
  @media screen and (min-width: 768px) {
    width: 562px;
  }
  @media screen and (min-width: 768px) {
    width: 318px;
  }
`,he=a.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-weight: 600;
  font-size: 18px;
  line-height: 140%;
  color: #1d1e21;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`,me=a.div`
  display: flex;
  width: 108px;
  padding: 0 18px;
  border-radius: 40px;
  border: 1px solid rgba(29, 30, 33, 0.1);
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  text-align: center;
  color: #1d1e21;
  gap: 12px;
  @media screen and (max-width: 767px) {
    width: 95px;
  }
`,ue=a.button`
  border-radius: 40px;
  cursor: pointer;
  border: none;
  padding: 8px 12px;
  width: 89px;
  height: 33px;
  background: rgba(232, 80, 80, 0.1);
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.05em;
  text-align: center;
  color: #e85050;
`,T=a.button`
  background: none;
  border: none;
  color: #59b17a;
  font-size: 27px;

  &:hover,
  &:focus,
  &:active {
    color: rgba(89, 177, 122, 0.4);
  }
`,ge=a.div`
  display: flex;
  gap: 19px;
  justify-content: space-between;
  flex-wrap: wrap;
  @media screen and (min-width: 375px) {
    flex-wrap: nowrap;
  }
  @media screen and (min-width: 768px) {
  }
`,fe=a.div`
  display: flex;
  justify-content: center;
  margin-top: 48px;
  font-weight: 600;
  font-size: 18px;
  line-height: 140%;
  color: #1d1e21;
`,ye=a.div`
  display: block;
  @media screen and (max-width: 767px) {
    display: none;
  }
`,we=a.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-weight: 600;
  font-size: 16px;
  line-height: 140%;
  color: #1d1e21;
  margin-bottom: 18px;
  @media screen and (min-width: 375px) {
    margin-bottom: 0;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`,be=a.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 117%;
  color: #6a6a6f;
`,je=({priceChange:d,arr:h})=>{const[m,u]=x.useState({}),[S,C]=x.useState(!0),g=_(),[f,q]=x.useState(!1),[y,t]=x.useState([]),k=N(n=>n.cart);x.useEffect(()=>{k==="0"&&t([])},[k]),x.useEffect(()=>{const n=async()=>{const s=localStorage.getItem("e-pharmacy");if(s&&s!=="[]"){const r=JSON.parse(s);I(r.token);const i=await g(L());if(i.payload._id&&(q(!0),i.payload.cart.length>0)){const c=i.payload.cart.map(p=>p.productId),b=await g(Q(c));t(b.payload);const P=i.payload.cart.reduce((p,j)=>(p[j.productId]=j.quantity,p),{});u(P);const R=Object.keys(P).map(p=>({productId:p,quantity:P[p]}));h(R);const U=b.payload.reduce((p,j)=>{const $=P[j._id]||0;return p+j.price*$},0);d(U)}}C(!1)};f||n()},[h,g,f,d]);const o=n=>{const s=y.reduce((r,i)=>{const c=n[i._id]||0;return r+i.price*c},0);d(s)},l=async n=>{u(s=>{const r={...s,[n]:(s[n]||1)+1};o(r);const i=Object.keys(r).map(c=>({productId:c,quantity:r[c]}));return h(i),r})},w=n=>{u(s=>{const r={...s,[n]:s[n]>1?s[n]-1:1};o(r);const i=Object.keys(r).map(c=>({productId:c,quantity:r[c]}));return h(i),r})},E=async n=>{(await g(Y(n))).type==="removeCart/fulfilled"&&(t(r=>r.filter(i=>i._id!==n)),u(r=>{const i={...r};delete i[n],o(i);const c=Object.keys(i).map(b=>({productId:b,quantity:i[b]}));return h(c),i}))},M=n=>n.toFixed(2);return e.jsx(e.Fragment,{children:S?e.jsx(de,{children:e.jsx(H,{size:50,thickness:100,speed:100,color:"rgba(57, 172, 115, 1)",secondaryColor:"rgba(172, 212, 182, 0.6)"})}):f&&y.length!==0?e.jsx(ce,{children:y.map(n=>e.jsxs(le,{children:[e.jsx(pe,{children:e.jsx("img",{src:n.photo,alt:n.name,width:"100%",height:"100%"})}),e.jsxs(xe,{children:[e.jsxs(ye,{children:[e.jsxs(he,{children:[e.jsx("p",{children:n.name}),e.jsxs("p",{children:["₴ ",M(n.price*(m[n._id]||1))]})]}),e.jsxs("p",{children:["For ",n.category," Health"]})]}),e.jsxs(we,{children:[e.jsx("p",{children:n.name}),e.jsxs(be,{children:["For ",n.category," Health"]}),e.jsxs("p",{children:["₴ ",M(n.price*(m[n._id]||1))]})]}),e.jsxs(ge,{children:[e.jsxs(me,{children:[e.jsx(T,{onClick:()=>l(n._id),children:"+"}),e.jsx("p",{children:m[n._id]}),e.jsx(T,{onClick:()=>w(n._id),children:"-"})]}),e.jsx(ue,{onClick:()=>E(n._id),children:"Remove"})]})]})]},n._id))}):e.jsx(fe,{children:"You don't have any saved products yet"})})},ve=G({name:v().required("Name is required"),email:v().email("Enter a valid email").required("Email is required"),phone:v().matches(/^[0-9]+$/,"Phone must be only digits").required("Phone is required"),address:v().required("Address is required"),paymentMethod:v().oneOf(["Cash On Delivery","Bank"],"Invalid Payment Method").required("Payment Method is required")}),Pe=()=>{const[d,h]=x.useState([]),[m,u]=x.useState(0),S=N(o=>o.user),C=J(),g=_();x.useEffect(()=>{(async()=>{const l=localStorage.getItem("e-pharmacy");if(l&&l!=="[]"){const w=JSON.parse(l);I(w.token)}else C("/home")})()},[C,S]);const f=o=>{u(o)},q=o=>{h(o)},y=async(o,l)=>{const w={...o,totalAmount:m,products:[...d]};try{await g(V(w)),await g(X()),u(0),l(),Z("Order placed successfully",{style:{background:"#59b17a",color:"white",fontSize:"16px"},autoClose:2e3})}catch(E){console.error("Error placing order:",E)}},t=K({initialValues:{name:"",email:"",phone:"",address:"",paymentMethod:"Cash On Delivery"},validationSchema:ve,onSubmit:(o,{resetForm:l})=>{y(o,l)}}),k=o=>o.toFixed(2);return e.jsxs(ee,{children:[e.jsx(W,{}),e.jsx("h3",{className:"cartName",children:"Cart"}),e.jsxs(te,{children:[e.jsxs(ne,{children:[e.jsx(O,{children:"Enter shipping info "}),e.jsx("p",{children:"Enter your delivery address where you get the product. You can also send any other location where you send the products."}),e.jsxs(ae,{onSubmit:t.handleSubmit,children:[e.jsxs("div",{children:[e.jsx(B,{children:"Name"}),e.jsx(z,{name:"name",type:"text",placeholder:"Enter text",onChange:t.handleChange,onBlur:t.handleBlur,value:t.values.name}),t.touched.name&&t.errors.name?e.jsx(D,{children:t.errors.name}):null]}),e.jsxs("div",{children:[e.jsx(B,{children:"Email"}),e.jsx(z,{name:"email",type:"email",placeholder:"Enter text",onChange:t.handleChange,onBlur:t.handleBlur,value:t.values.email}),t.touched.email&&t.errors.email?e.jsx(D,{children:t.errors.email}):null]}),e.jsxs("div",{children:[e.jsx(B,{children:"Phone"}),e.jsx(z,{name:"phone",type:"text",placeholder:"Enter text",onChange:t.handleChange,onBlur:t.handleBlur,value:t.values.phone}),t.touched.phone&&t.errors.phone?e.jsx(D,{children:t.errors.phone}):null]}),e.jsxs("div",{children:[e.jsx(B,{children:"Address"}),e.jsx(z,{name:"address",type:"text",placeholder:"Enter text",onChange:t.handleChange,onBlur:t.handleBlur,value:t.values.address}),t.touched.address&&t.errors.address?e.jsx(D,{children:t.errors.address}):null]}),e.jsxs("div",{children:[e.jsx(F,{}),e.jsx(O,{children:"Payment Method"}),e.jsx("p",{children:"You can pay us in a multiple way in our payment gateway system."}),e.jsxs(oe,{role:"group","aria-labelledby":"paymentMethod",children:[e.jsxs("li",{children:[e.jsx(A,{type:"radio",name:"paymentMethod",value:"Cash On Delivery",onChange:t.handleChange,onBlur:t.handleBlur,checked:t.values.paymentMethod==="Cash On Delivery"}),e.jsx("span",{children:"Cash On Delivery"})]}),e.jsxs("li",{children:[e.jsx(A,{type:"radio",name:"paymentMethod",value:"Bank",onChange:t.handleChange,onBlur:t.handleBlur,checked:t.values.paymentMethod==="Bank"}),e.jsx("span",{children:"Bank"})]})]}),t.touched.paymentMethod&&t.errors.paymentMethod?e.jsx(se,{children:t.errors.paymentMethod}):null]}),e.jsx(F,{}),e.jsx(O,{children:"Order details "}),e.jsx("p",{children:"Shipping and additionnal costs are calculated based on values you have entered."}),e.jsxs(ie,{children:[e.jsx("p",{children:"Total:"}),e.jsxs("p",{children:["₴ ",k(m)]})]}),e.jsx(re,{type:"submit",disabled:m===0,children:"Place order"})]})]}),e.jsx(je,{priceChange:f,arr:q})]})]})};export{Pe as default};
