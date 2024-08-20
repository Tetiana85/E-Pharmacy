import{s as r,r as h,a as _,f as I,j as e,S as H,n as N,v as L,w as Q,x as Y,c as J,y as V,z as X}from"./index-86bab93a.js";import{c as G,b as v,u as K,Q as W,B as Z}from"./ReactToastify-f4d045f7.js";const ee=r.div`
  width: 1224px;
  padding: 20px;
  margin: auto;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    width: 704px;
  }
  @media screen and (max-width: 767px) {
    width: 335px;
    padding: 0;
  }
`,te=r.div`
  display: flex;
  gap: 96px;
  margin-top: 32px;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    flex-direction: column;
  }
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`,ne=r.div`
  border-radius: 27px;
  width: 628px;
  background: #fff;
  padding: 40px;
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: #6a6a6f;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    width: 704px;
  }
  @media screen and (max-width: 767px) {
    width: 355px;
    padding: 20px;
  }
`,O=r.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 140%;
  color: #1d1e21;
  margin-bottom: 14px;
`,z=r.input`
  border: 1px solid rgba(29, 30, 33, 0.2);
  border-radius: 60px;
  width: 260px;
  height: 44px;
  padding: 18px;
  font-size: 12px;
  display: flex;
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

  @media screen and (max-width: 767px) {
    width: 295px;
  }
`,B=r.label`
  font-weight: 600;
  font-size: 14px;
  line-height: 129%;
  color: #1d1e21;
  position: relative;
  left: 20px;
`,re=r.form`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 40px;
  @media screen and (max-width: 767px) {
    justify-content: flex-start;
  }
`,ae=r.div`
  border-radius: 8px;
  width: 548px;
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
`,oe=r.button`
  border-radius: 60px;
  border: none;
  padding: 13px 32px;
  width: 141px;
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
`,F=r.hr`
  width: 530px;
  margin: 26px auto 40px auto;
  border: 0.5px solid rgba(29, 30, 33, 0.1);
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`,ie=r.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 20px;
  list-style-type: none;
  padding: 0;

  span {
    margin-left: 8px;
  }
`;r.li`
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
`;const A=r.input`
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
`,D=r.div`
  color: red;
  position: relative;
  left: 20px;
  font-size: 12px;
`,se=r.div`
  color: red;
  font-size: 12px;
`,de=r.div`
  position: absolute;
  top: 300px;
  right: 20%;
  transform: translateX(-50%);
`,ce=r.ul`
  width: 460px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  position: relative;

  @media screen and (min-width: 768px) and (max-width: 1280px) {
    width: 704px;
  }
  @media screen and (max-width: 767px) {
    width: 355px;
    margin-bottom: 40px;
  }
`,le=r.li`
  width: 100%;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(29, 30, 33, 0.1);
  display: flex;
  gap: 20px;
  &:last-child {
    border-bottom: none;
  }
`,pe=r.div`
  border: 1.15px solid #f1f1f1;
  border-radius: 27px;
  width: 122px;
  height: 133px;
  display: flex;
`,he=r.div`
  display: flex;
  flex-direction: column;
  width: 318px;
  justify-content: space-between;
  font-weight: 400;
  font-size: 14px;
  line-height: 129%;
  color: #6a6a6f;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    width: 549px;
  }
  @media screen and (max-width: 767px) {
    width: 199px;
  }
`,xe=r.div`
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
`,ue=r.div`
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
`,me=r.button`
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
`,T=r.button`
  background: none;
  border: none;
  color: #59b17a;
  font-size: 27px;

  &:hover,
  &:focus,
  &:active {
    color: rgba(89, 177, 122, 0.4);
  }
`,fe=r.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    gap: 19px;
  }
`,ge=r.div`
  display: flex;
  justify-content: center;
  margin-top: 48px;
  font-weight: 600;
  font-size: 18px;
  line-height: 140%;
  color: #1d1e21;
`,ye=r.div`
  display: block;
  @media screen and (max-width: 767px) {
    display: none;
  }
`,be=r.div`
  display: none;
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-weight: 600;
    font-size: 16px;
    line-height: 140%;
    color: #1d1e21;
  }
`,we=r.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 117%;
  color: #6a6a6f;
`,je=({priceChange:d,arr:x})=>{const[u,m]=h.useState({}),[S,C]=h.useState(!0),f=_(),[g,q]=h.useState(!1),[y,t]=h.useState([]),k=I(n=>n.cart);h.useEffect(()=>{k==="0"&&t([])},[k]),h.useEffect(()=>{const n=async()=>{const s=localStorage.getItem("e-pharmacy");if(s&&s!=="[]"){const o=JSON.parse(s);N(o.token);const a=await f(L());if(a.payload._id&&(q(!0),a.payload.cart.length>0)){const c=a.payload.cart.map(p=>p.productId),w=await f(Q(c));t(w.payload);const P=a.payload.cart.reduce((p,j)=>(p[j.productId]=j.quantity,p),{});m(P);const R=Object.keys(P).map(p=>({productId:p,quantity:P[p]}));x(R);const U=w.payload.reduce((p,j)=>{const $=P[j._id]||0;return p+j.price*$},0);d(U)}}C(!1)};g||n()},[x,f,g,d]);const i=n=>{const s=y.reduce((o,a)=>{const c=n[a._id]||0;return o+a.price*c},0);d(s)},l=async n=>{m(s=>{const o={...s,[n]:(s[n]||1)+1};i(o);const a=Object.keys(o).map(c=>({productId:c,quantity:o[c]}));return x(a),o})},b=n=>{m(s=>{const o={...s,[n]:s[n]>1?s[n]-1:1};i(o);const a=Object.keys(o).map(c=>({productId:c,quantity:o[c]}));return x(a),o})},E=async n=>{(await f(Y(n))).type==="removeCart/fulfilled"&&(t(o=>o.filter(a=>a._id!==n)),m(o=>{const a={...o};delete a[n],i(a);const c=Object.keys(a).map(w=>({productId:w,quantity:a[w]}));return x(c),a}))},M=n=>n.toFixed(2);return e.jsx(e.Fragment,{children:S?e.jsx(de,{children:e.jsx(H,{size:50,thickness:100,speed:100,color:"rgba(57, 172, 115, 1)",secondaryColor:"rgba(172, 212, 182, 0.6)"})}):g&&y.length!==0?e.jsx(ce,{children:y.map(n=>e.jsxs(le,{children:[e.jsx(pe,{children:e.jsx("img",{src:n.photo,alt:n.name,width:"100%",height:"100%"})}),e.jsxs(he,{children:[e.jsxs(ye,{children:[e.jsxs(xe,{children:[e.jsx("p",{children:n.name}),e.jsxs("p",{children:["৳ ",M(n.price*(u[n._id]||1))]})]}),e.jsxs("p",{children:["For ",n.category," Health"]})]}),e.jsxs(be,{children:[e.jsx("p",{children:n.name}),e.jsxs(we,{children:["For ",n.category," Health"]}),e.jsxs("p",{children:["৳ ",M(n.price*(u[n._id]||1))]})]}),e.jsxs(fe,{children:[e.jsxs(ue,{children:[e.jsx(T,{onClick:()=>l(n._id),children:"+"}),e.jsx("p",{children:u[n._id]}),e.jsx(T,{onClick:()=>b(n._id),children:"-"})]}),e.jsx(me,{onClick:()=>E(n._id),children:"Remove"})]})]})]},n._id))}):e.jsx(ge,{children:"You don't have any saved products yet"})})},ve=G({name:v().required("Name is required"),email:v().email("Enter a valid email").required("Email is required"),phone:v().matches(/^[0-9]+$/,"Phone must be only digits").required("Phone is required"),address:v().required("Address is required"),paymentMethod:v().oneOf(["Cash On Delivery","Bank"],"Invalid Payment Method").required("Payment Method is required")}),Pe=()=>{const[d,x]=h.useState([]),[u,m]=h.useState(0),S=I(i=>i.user),C=J(),f=_();h.useEffect(()=>{(async()=>{const l=localStorage.getItem("e-pharmacy");if(l&&l!=="[]"){const b=JSON.parse(l);N(b.token)}else C("/home")})()},[C,S]);const g=i=>{m(i)},q=i=>{x(i)},y=async(i,l)=>{const b={...i,totalAmount:u,products:[...d]};try{await f(V(b)),await f(X()),m(0),l(),Z("Order placed successfully",{style:{background:"#59b17a",color:"white",fontSize:"16px"},autoClose:2e3})}catch(E){console.error("Error placing order:",E)}},t=K({initialValues:{name:"",email:"",phone:"",address:"",paymentMethod:"Cash On Delivery"},validationSchema:ve,onSubmit:(i,{resetForm:l})=>{y(i,l)}}),k=i=>i.toFixed(2);return e.jsxs(ee,{children:[e.jsx(W,{}),e.jsx("h3",{children:"Cart"}),e.jsxs(te,{children:[e.jsxs(ne,{children:[e.jsx(O,{children:"Enter shipping info "}),e.jsx("p",{children:"Enter your delivery address where you get the product. You can also send any other location where you send the products."}),e.jsxs(re,{onSubmit:t.handleSubmit,children:[e.jsxs("div",{children:[e.jsx(B,{children:"Name"}),e.jsx(z,{name:"name",type:"text",placeholder:"Enter text",onChange:t.handleChange,onBlur:t.handleBlur,value:t.values.name}),t.touched.name&&t.errors.name?e.jsx(D,{children:t.errors.name}):null]}),e.jsxs("div",{children:[e.jsx(B,{children:"Email"}),e.jsx(z,{name:"email",type:"email",placeholder:"Enter text",onChange:t.handleChange,onBlur:t.handleBlur,value:t.values.email}),t.touched.email&&t.errors.email?e.jsx(D,{children:t.errors.email}):null]}),e.jsxs("div",{children:[e.jsx(B,{children:"Phone"}),e.jsx(z,{name:"phone",type:"text",placeholder:"Enter text",onChange:t.handleChange,onBlur:t.handleBlur,value:t.values.phone}),t.touched.phone&&t.errors.phone?e.jsx(D,{children:t.errors.phone}):null]}),e.jsxs("div",{children:[e.jsx(B,{children:"Address"}),e.jsx(z,{name:"address",type:"text",placeholder:"Enter text",onChange:t.handleChange,onBlur:t.handleBlur,value:t.values.address}),t.touched.address&&t.errors.address?e.jsx(D,{children:t.errors.address}):null]}),e.jsxs("div",{children:[e.jsx(F,{}),e.jsx(O,{children:"Payment Method"}),e.jsx("p",{children:"You can pay us in a multiple way in our payment gateway system."}),e.jsxs(ie,{role:"group","aria-labelledby":"paymentMethod",children:[e.jsxs("li",{children:[e.jsx(A,{type:"radio",name:"paymentMethod",value:"Cash On Delivery",onChange:t.handleChange,onBlur:t.handleBlur,checked:t.values.paymentMethod==="Cash On Delivery"}),e.jsx("span",{children:"Cash On Delivery"})]}),e.jsxs("li",{children:[e.jsx(A,{type:"radio",name:"paymentMethod",value:"Bank",onChange:t.handleChange,onBlur:t.handleBlur,checked:t.values.paymentMethod==="Bank"}),e.jsx("span",{children:"Bank"})]})]}),t.touched.paymentMethod&&t.errors.paymentMethod?e.jsx(se,{children:t.errors.paymentMethod}):null]}),e.jsx(F,{}),e.jsx(O,{children:"Order details "}),e.jsx("p",{children:"Shipping and additionnal costs are calculated based on values you have entered."}),e.jsxs(ae,{children:[e.jsx("p",{children:"Total:"}),e.jsxs("p",{children:["৳ ",k(u)]})]}),e.jsx(oe,{type:"submit",disabled:u===0,children:"Place order"})]})]}),e.jsx(je,{priceChange:g,arr:q})]})]})};export{Pe as default};
