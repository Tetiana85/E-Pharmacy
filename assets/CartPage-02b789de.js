import{s as a,r as h,u as A,f as F,j as e,i as T,p as U,q as R,t as $,b as H,v as Q,w as Y}from"./index-d0f78743.js";import{c as J,b as C,u as L,Q as V,B as G}from"./ReactToastify-f2023969.js";const K=a.div`
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
`,W=a.div`
  display: flex;
  gap: 96px;
  margin-top: 32px;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    flex-direction: column;
  }
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`,X=a.div`
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
`,O=a.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 140%;
  color: #1d1e21;
  margin-bottom: 14px;
`,D=a.input`
  border: 1px solid rgba(29, 30, 33, 0.2);
  border-radius: 60px;
  width: 260px;
  height: 44px;
  padding: 18px;
  display: flex;
  margin-top: 8px;
  @media screen and (max-width: 767px) {
    width: 295px;
  }
`,q=a.label`
  font-weight: 600;
  font-size: 14px;
  line-height: 129%;
  color: #1d1e21;
  position: relative;
  left: 20px;
`,Z=a.form`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 40px;
  @media screen and (max-width: 767px) {
    justify-content: flex-start;
  }
`,ee=a.div`
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
`,te=a.button`
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
  cursor: ${d=>d.disabled?"none":"pointer"};
  transition: box-shadow 0.3s ease;
  &:hover,
  &:focus,
  &:active {
    box-shadow: ${d=>d.disabled?"none":" 0 4px 8px rgba(0, 0, 0, 0.2);"};
  }
`,S=a.hr`
  width: 530px;
  margin: 40px auto;
  border: 0.5px solid rgba(29, 30, 33, 0.1);
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`,ne=a.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 20px;
`,E=a.div`
  color: red;
  position: relative;
  left: 20px;
`,ae=a.div`
  color: red;
`,re=a.ul`
  width: 460px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) and (max-width: 1280px) {
    width: 704px;
  }
  @media screen and (max-width: 767px) {
    width: 355px;
    margin-bottom: 40px;
  }
`,ie=a.li`
  width: 100%;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(29, 30, 33, 0.1);
  display: flex;
  gap: 20px;
  &:last-child {
    border-bottom: none;
  }
`,oe=a.div`
  border: 1.15px solid #f1f1f1;
  border-radius: 27px;
  width: 122px;
  height: 133px;
  display: flex;
`,se=a.div`
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
`,de=a.div`
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
`,ce=a.div`
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
`,le=a.button`
  border-radius: 40px;
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
`,z=a.button`
  background: none;
  border: none;
  color: #59b17a;
  font-size: 27px;
`,pe=a.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    gap: 19px;
  }
`,he=a.div`
  display: flex;
  justify-content: center;
  margin-top: 48px;
  font-weight: 600;
  font-size: 18px;
  line-height: 140%;
  color: #1d1e21;
`,xe=a.div`
  display: block;
  @media screen and (max-width: 767px) {
    display: none;
  }
`,ue=a.div`
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
`,me=a.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 117%;
  color: #6a6a6f;
`,fe=({priceChange:d,arr:x})=>{const[u,m]=h.useState({}),f=A(),[g,P]=h.useState(!1),[w,j]=h.useState([]),k=F(n=>n.cart);h.useEffect(()=>{k==="0"&&j([])},[k]),h.useEffect(()=>{const n=async()=>{const s=localStorage.getItem("e-pharmacy");if(s&&s!=="[]"){const i=JSON.parse(s);T(i.token);const r=await f(U());if(r.payload._id&&(P(!0),r.payload.cart.length>0)){const c=r.payload.cart.map(p=>p.productId),b=await f(R(c));j(b.payload);const B=r.payload.cart.reduce((p,v)=>(p[v.productId]=v.quantity,p),{});m(B);const _=Object.keys(B).map(p=>({productId:p,quantity:B[p]}));x(_);const I=b.payload.reduce((p,v)=>{const N=B[v._id]||0;return p+v.price*N},0);d(I)}}};g||n()},[x,f,g,d]);const t=n=>{const s=w.reduce((i,r)=>{const c=n[r._id]||0;return i+r.price*c},0);d(s)},M=async n=>{m(s=>{const i={...s,[n]:(s[n]||1)+1};t(i);const r=Object.keys(i).map(c=>({productId:c,quantity:i[c]}));return x(r),i})},o=n=>{m(s=>{const i={...s,[n]:s[n]>1?s[n]-1:1};t(i);const r=Object.keys(i).map(c=>({productId:c,quantity:i[c]}));return x(r),i})},l=async n=>{(await f($(n))).type==="removeCart/fulfilled"&&(j(i=>i.filter(r=>r._id!==n)),m(i=>{const r={...i};delete r[n],t(r);const c=Object.keys(r).map(b=>({productId:b,quantity:r[b]}));return x(c),r}))},y=n=>n.toFixed(2);return e.jsx(e.Fragment,{children:g&&w.length!==0?e.jsx(re,{children:w.map(n=>e.jsxs(ie,{children:[e.jsx(oe,{children:e.jsx("img",{src:n.photo,alt:n.name,width:"100%",height:"100%"})}),e.jsxs(se,{children:[e.jsxs(xe,{children:[e.jsxs(de,{children:[e.jsx("p",{children:n.name}),e.jsxs("p",{children:["৳ ",y(n.price*(u[n._id]||1))]})]}),e.jsxs("p",{children:["For ",n.category," Health"]})]}),e.jsxs(ue,{children:[e.jsx("p",{children:n.name}),e.jsxs(me,{children:["For ",n.category," Health"]}),e.jsxs("p",{children:["৳ ",y(n.price*(u[n._id]||1))]})]}),e.jsxs(pe,{children:[e.jsxs(ce,{children:[e.jsx(z,{onClick:()=>M(n._id),children:"+"}),e.jsx("p",{children:u[n._id]}),e.jsx(z,{onClick:()=>o(n._id),children:"-"})]}),e.jsx(le,{onClick:()=>l(n._id),children:"Remove"})]})]})]},n._id))}):e.jsx(he,{children:"You don't have any saved products yet"})})},ge=J({name:C().required("Name is required"),email:C().email("Enter a valid email").required("Email is required"),phone:C().matches(/^[0-9]+$/,"Phone must be only digits").required("Phone is required"),address:C().required("Address is required"),paymentMethod:C().oneOf(["Cash On Delivery","Bank"],"Invalid Payment Method").required("Payment Method is required")}),je=()=>{const[d,x]=h.useState([]),[u,m]=h.useState(0),f=F(o=>o.user),g=H(),P=A();h.useEffect(()=>{(async()=>{const l=localStorage.getItem("e-pharmacy");if(l&&l!=="[]"){const y=JSON.parse(l);T(y.token)}else g("/home")})()},[g,f]);const w=o=>{m(o)},j=o=>{x(o)},k=async(o,l)=>{const y={...o,totalAmount:u,products:[...d]};try{await P(Q(y)),await P(Y()),m(0),l(),G("Order placed successfully and cart cleared",{style:{background:"#59b17a",color:"white"},autoClose:2e3})}catch(n){console.error("Error placing order:",n)}},t=L({initialValues:{name:"",email:"",phone:"",address:"",paymentMethod:""},validationSchema:ge,onSubmit:(o,{resetForm:l})=>{k(o,l)}}),M=o=>o.toFixed(2);return e.jsxs(K,{children:[e.jsx(V,{}),e.jsx("h3",{children:"Cart"}),e.jsxs(W,{children:[e.jsxs(X,{children:[e.jsx(O,{children:"Enter shipping info "}),e.jsx("p",{children:"Enter your delivery address where you get the product. You can also send any other location where you send the products."}),e.jsxs(Z,{onSubmit:t.handleSubmit,children:[e.jsxs("div",{children:[e.jsx(q,{children:"Name"}),e.jsx(D,{name:"name",type:"text",placeholder:"Enter text",onChange:t.handleChange,onBlur:t.handleBlur,value:t.values.name}),t.touched.name&&t.errors.name?e.jsx(E,{children:t.errors.name}):null]}),e.jsxs("div",{children:[e.jsx(q,{children:"Email"}),e.jsx(D,{name:"email",type:"email",placeholder:"Enter text",onChange:t.handleChange,onBlur:t.handleBlur,value:t.values.email}),t.touched.email&&t.errors.email?e.jsx(E,{children:t.errors.email}):null]}),e.jsxs("div",{children:[e.jsx(q,{children:"Phone"}),e.jsx(D,{name:"phone",type:"text",placeholder:"Enter text",onChange:t.handleChange,onBlur:t.handleBlur,value:t.values.phone}),t.touched.phone&&t.errors.phone?e.jsx(E,{children:t.errors.phone}):null]}),e.jsxs("div",{children:[e.jsx(q,{children:"Address"}),e.jsx(D,{name:"address",type:"text",placeholder:"Enter text",onChange:t.handleChange,onBlur:t.handleBlur,value:t.values.address}),t.touched.address&&t.errors.address?e.jsx(E,{children:t.errors.address}):null]}),e.jsxs("div",{children:[e.jsx(S,{}),e.jsx(O,{children:"Payment Method"}),e.jsx("p",{children:"You can pay us in a multiple way in our payment gateway system."}),e.jsxs(ne,{role:"group","aria-labelledby":"paymentMethod",children:[e.jsxs("label",{children:[e.jsx("input",{type:"radio",name:"paymentMethod",value:"Cash On Delivery",onChange:t.handleChange,onBlur:t.handleBlur,checked:t.values.paymentMethod==="Cash On Delivery"}),e.jsx("span",{children:"Cash On Delivery"})]}),e.jsxs("label",{children:[e.jsx("input",{type:"radio",name:"paymentMethod",value:"Bank",onChange:t.handleChange,onBlur:t.handleBlur,checked:t.values.paymentMethod==="Bank"}),e.jsx("span",{children:"Bank"})]})]}),t.touched.paymentMethod&&t.errors.paymentMethod?e.jsx(ae,{children:t.errors.paymentMethod}):null]}),e.jsx(S,{}),e.jsx(O,{children:"Order details "}),e.jsx("p",{children:"Shipping and additionnal costs are calculated based on values you have entered."}),e.jsxs(ee,{children:[e.jsx("p",{children:"Total:"}),e.jsxs("p",{children:["৳ ",M(u)]})]}),e.jsx(te,{type:"submit",disabled:u===0,children:"Place order"})]})]}),e.jsx(fe,{priceChange:w,arr:j})]})]})};export{je as default};
