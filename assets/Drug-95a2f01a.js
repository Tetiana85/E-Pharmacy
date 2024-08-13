import{s,j as e,a as n,r as a,u as X,b as _,d as G,f as K,i as V,n as W}from"./index-783777d1.js";import{Q as M,B as Z}from"./ReactToastify-586649df.js";import{M as ee,a as se}from"./ModalReg-035aa3be.js";const ie=s.div`
  margin: 72px auto;
  display: flex;
  gap: 20px;
  justify-content: center;
  position: relative;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`,te=s.svg`
  position: absolute;
  transform: scaleX(-1);
  top: -32px;
  left: 178px;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  &:hover,
  &:focus,
  &:active {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`,ne=s.div`
  height: 531px;
  width: 364px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    flex-direction: row;
    width: 688px;
    height: 284px;
  }
  @media screen and (max-width: 767px) {
    width: 335px;
  }
`,re=s.div`
  border: 1.15px solid rgba(89, 177, 122, 0.6);
  border-radius: 27px;
  padding: 14px 18px;
  width: 364px;
  height: 337px;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    flex-direction: row;
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`,ae=s.div`
  border-radius: 20px;
  width: 364px;
  height: 174px;
  background: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    width: 324px;
    height: 284px;
    position: relative;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`,oe=s.div`
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  font-size: 20px;
  line-height: 140%;
  color: #1d1e21;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    flex-direction: column;
    gap: 54px;
  }
`,de=s.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  margin-top: 4px;
  color: rgba(29, 30, 33, 0.6);
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    position: absolute;
    top: 53px;
  }
`,ce=s.div`
  display: flex;
  justify-content: space-between;
  border-radius: 60px;
  margin-top: 40px;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    gap: 12px;
  }
`,he=s.button`
  border-radius: 60px;
  border: none;
  padding: 13px 32px;
  width: 140px;
  height: 44px;
  background: #59b17a;
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
`,xe=s.div`
  border-radius: 60px;
  display: flex;
  gap: 12px;
  width: 108px;
  height: 44px;
  padding: 12px 18px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  align-items: center;
  justify-content: center;
`,S=s.button`
  color: #59b17a;
  background: none;
  border: none;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    color: #28fc2f;
  }
`,le=s.div`
  border-radius: 27px;
  width: 800px;
  background: #fff;
  padding: 40px;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    width: 704px;
  }
  @media screen and (max-width: 767px) {
    width: 335px;
    padding: 20px;
  }
`,pe=s.div`
  display: flex;
  gap: 8px;
  margin-bottom: 40px;
`,Y=s.button`
  border-radius: 40px;
  border: none;
  padding: 8px 25px;
  width: 120px;
  height: 33px;
  background: ${({$prop:i})=>i?" #59b17a":"rgba(89, 177, 122, 0.1)"};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.05em;
  text-align: center;
  color: ${({$prop:i})=>i?" #fff":"#59b17a"};
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  &:hover,
  &:focus,
  &:active {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`,ge=s.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #6a6a6f;
  display: flex;
  flex-direction: column;
  gap: 20px;
`,o=s.p`
  color: #1d1e21;
`,d=s.span`
  color: #6a6a6f;
  margin-right: 5px;
`,fe=({prod:i})=>e.jsxs(ge,{children:[e.jsx("p",{children:"Although it's typically considered safe, excessive consumption can lead to side effects. Therefore, it's recommended to consult a healthcare professional before using moringa, especially if you're pregnant, nursing, or taking other medications. This balanced approach allows for the benefits of moringa while recognizing the importance of proper usage and caution."}),e.jsxs(o,{children:[e.jsx(d,{children:"Medicinal Uses: Antioxidant Properties:"}),i==null?void 0:i.uses]}),e.jsxs(o,{children:[e.jsx(d,{children:"Anti-Diabetic Effects:"}),i==null?void 0:i.effects]}),e.jsxs(o,{children:[e.jsx(d,{children:"Heart Health:"}),i==null?void 0:i.health]}),e.jsxs(o,{children:[e.jsx(d,{children:"Anti-Cancer Properties:"}),i==null?void 0:i.properties]}),e.jsxs(o,{children:[e.jsx(d,{children:"Immune Support:"}),i==null?void 0:i.support]}),e.jsxs(o,{children:[e.jsx(d,{children:"Digestive Aid:"}),i==null?void 0:i.aid]})]}),C=s.div`
  display: flex;
  gap: 3px;
`,ue=()=>e.jsxs(C,{children:[e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${n}#starY`})}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${n}#starY`})}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${n}#starY`})}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${n}#star`})}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${n}#star`})})]}),je=()=>e.jsxs(C,{children:[e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${n}#starY`})}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${n}#starY`})}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${n}#starY`})}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${n}#starY`})}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${n}#star`})})]}),me=()=>e.jsxs(C,{children:[e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${n}#starY`})}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${n}#starY`})}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${n}#starY`})}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${n}#starY`})}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${n}#starY`})})]}),we=s.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: auto;
`,j=s.li`
  border: 1px solid #f1f1f1;
  border-radius: 20px;
  padding: 14px 28px;
  width: 720px;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #6a6a6f;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    width: 640px;
  }
  @media screen and (max-width: 767px) {
    width: 295px;
  }
`,m=s.div`
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  font-size: 18px;
  line-height: 140%;
  color: #1d1e21;
  margin-bottom: 14px;
`,w=s.div`
  display: flex;
  gap: 20px;
`,v=s.img`
  border-radius: 30px;
  width: 44px;
  height: 44px;
  background: pink;
  object-fit: cover;
`,b=s.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: rgba(29, 30, 33, 0.6);
`,y=s.div`
  display: flex;
  gap: 6px;
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  color: #1d1e21;
`,k=s.div`
  display: flex;
  @media screen and (max-width: 767px) {
    display: none;
  }
`,D=s.svg`
  display: none;
  @media screen and (max-width: 767px) {
    display: block;
  }
`,ve=()=>e.jsxs(we,{children:[e.jsxs(j,{children:[e.jsxs(m,{children:[e.jsxs(w,{children:[e.jsx(v,{src:"https://i.pinimg.com/236x/c8/78/62/c878627eeec0b3dcd4630108ff23ccd6.jpg",alt:"Larin Jan"}),e.jsxs("div",{children:[e.jsx("p",{children:"Larin Jan"}),e.jsx(b,{children:"2 days ago"})]})]}),e.jsxs(y,{children:[e.jsx(k,{children:e.jsx(je,{})}),e.jsx(D,{width:"18",height:"18",children:e.jsx("use",{href:`${n}#starY`})}),e.jsx("p",{children:"4"})]})]}),e.jsx("p",{children:"I've been using this powder in my smoothies for a few weeks now. My energy levels are up, and I feel great. I followed the recommended dosage, and it seems to be a perfect addition to my daily routine. Highly recommend!"})]}),e.jsxs(j,{children:[e.jsxs(m,{children:[e.jsxs(w,{children:[e.jsx(v,{src:"https://i.pinimg.com/736x/94/0a/fc/940afc19cd0eb01c78904d43c2a80a8a.jpg",alt:"Leroy Jenkins"}),e.jsxs("div",{children:[e.jsx("p",{children:"Leroy Jenkins"}),e.jsx(b,{children:"5 days ago"})]})]}),e.jsxs(y,{children:[e.jsx(k,{children:e.jsx(me,{})}),e.jsx(D,{width:"18",height:"18",children:e.jsx("use",{href:`${n}#starY`})}),e.jsx("p",{children:"5"})]})]}),e.jsx("p",{children:"I tried pill capsules as part of my wellness regimen, and I've been pleasantly surprised by the results. My skin looks healthier, and I've noticed an improvement in my digestion. A natural and effective supplement!"})]}),e.jsxs(j,{children:[e.jsxs(m,{children:[e.jsxs(w,{children:[e.jsx(v,{src:"https://theperfecthumanface.wordpress.com/wp-content/uploads/2022/03/jackson-wang-face.jpg?w=620",alt:"Omap Epps"}),e.jsxs("div",{children:[e.jsx("p",{children:"Omap Epps"}),e.jsx(b,{children:"2 weeks ago"})]})]}),e.jsxs(y,{children:[e.jsx(k,{children:e.jsx(ue,{})}),e.jsx(D,{width:"18",height:"18",children:e.jsx("use",{href:`${n}#starY`})}),e.jsx("p",{children:"3"})]})]}),e.jsx("p",{children:"I added this oil to my skincare routine, and the results are amazing. My skin feels smoother and more nourished. I was skeptical at first, but now I'm a firm believer in its benefits."})]})]}),De=()=>{const[i,$]=a.useState("description"),[x,I]=a.useState(1),[l,p]=a.useState(0),[T,g]=a.useState(""),[z,f]=a.useState(!1),[L,R]=a.useState(!1),A=X(),u=_(),B=G(),{item:t,from:O,settings:F}=B.state||{},c=K(r=>r.user);a.useEffect(()=>{c.length===0?g(""):g(c.token)},[c.length,c.token]),a.useEffect(()=>{if(!t){u("/medicine");return}p(t.price);const r=localStorage.getItem("e-pharmacy");if(r&&r!=="[]"){const h=JSON.parse(r);h.token&&(V(h.token),g(h.token))}},[t,u]);const E=()=>{u(O,{state:{settings:F}})},J=()=>{I(r=>r+1),p(r=>parseFloat((r+t.price).toFixed(2)))},P=()=>{x!==1&&(I(r=>r-1),p(r=>parseFloat((r-t.price).toFixed(2))))},N=async r=>{T?(await A(W({quantity:x,productId:r}))).type==="updateToCart/fulfilled"&&Z("The product has been added to the cart",{style:{background:"#59b17a",color:"white"}}):f(!0)},Q=()=>{f(!0)},H=()=>{f(!1)},U=()=>{R(!0)},q=()=>{R(!1)};return e.jsxs(ie,{children:[e.jsx(M,{}),e.jsx(te,{width:"20",height:"20",onClick:E,children:e.jsx("use",{href:`${n}#arrow`})}),e.jsx(M,{toastStyle:{background:"#fb430b",color:"white"}}),e.jsxs(ne,{children:[e.jsx(re,{children:e.jsx("img",{src:t==null?void 0:t.photo,alt:t==null?void 0:t.name,width:"100%",height:"100%"})}),e.jsxs(ae,{children:[e.jsxs(oe,{children:[e.jsx("p",{children:t==null?void 0:t.name}),e.jsxs("p",{children:["৳",l==null?void 0:l.toFixed(2)]})]}),e.jsxs(de,{children:["Brand:",t==null?void 0:t.suppliers]}),e.jsxs(ce,{children:[e.jsxs(xe,{children:[e.jsx(S,{onClick:J,children:"+"}),e.jsx("p",{children:x}),e.jsx(S,{onClick:P,children:"-"})]}),e.jsx(he,{onClick:()=>N(t._id),children:"Add to cart"})]})]})]}),e.jsxs(le,{children:[e.jsxs(pe,{children:[e.jsx(Y,{onClick:()=>$("description"),$prop:i==="description",children:"Description"}),e.jsx(Y,{onClick:()=>$("reviews"),$prop:i==="reviews",children:"Reviews"})]}),i==="description"?e.jsx(fe,{prod:t}):e.jsx(ve,{})]}),z&&e.jsx(ee,{close:H,openReg:U}),L&&e.jsx(se,{close:q,openLog:Q})]})};export{De as default};
