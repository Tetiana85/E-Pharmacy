import{s,j as e,b as n,r as a,a as H,c as U,u as q,f as _,n as G,q as K}from"./index-08e53d42.js";import{Q as z}from"./ReactToastify-f9b518b3.js";import{M as V,a as W}from"./ModalReg-0ada8e11.js";const X=s.div`
  margin: 0 auto;
  display: flex;
  gap: 8px;
  justify-content: center;
  position: relative;
  max-width: 375px;
  flex-direction: column;
  margin-bottom: 60px;
  padding: 20px;

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
    align-items: center;
    max-width: 704px;
    padding: 32px 0;
    margin-bottom: 88px;
    gap: 16px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    max-width: 1184px;
    align-items: start;
    padding: 0;
    margin: 78px auto 120px;
    gap: 0;
  }
`,Z=s.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    width: 100%;

    gap: 16px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: column;
  }
`,ee=s.div`
  border: 1.15px solid rgba(89, 177, 122, 0.6);
  border-radius: 27px;
  padding: 14px 18px;
  max-width: 100%;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    width: 364px;
    height: 284px;
  }

  @media screen and (min-width: 1440px) {
    height: 337px;
  }
`,ie=s.div`
  border-radius: 20px;
  width: 100%;
  height: 160px;
  background: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    width: 324px;
    height: 284px;
    position: relative;
    padding: 32px;
  }
  @media screen and (min-width: 1440px) {
    width: 364px;
    height: 174px;
    padding: 20px;
  }
`,se=s.div`
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  font-size: 16px;
  line-height: 140%;
  color: #1d1e21;

  @media screen and (min-width: 768px) {
    flex-direction: column;
    gap: 54px;
    font-size: 20px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`,te=s.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  margin-top: 4px;
  color: rgba(29, 30, 33, 0.6);

  @media screen and (min-width: 768px) {
    position: absolute;
    top: 53px;
  }
`,ne=s.div`
  display: flex;
  justify-content: space-between;
  border-radius: 60px;
  margin-top: 32px;

  @media screen and (min-width: 375px) {
    gap: 47px;
  }

  @media screen and (min-width: 768px) {
    gap: 12px;
    margin-top: 66px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 60px;
  }
`,re=s.button`
  border-radius: 60px;
  border: none;
  padding: 13px 25px;
  width: 100%;
  max-width: calc(120px + (140 - 120) * ((100vw - 320px) / (375 - 320)));
  height: 44px;
  background: #59b17a;
  font-weight: 500;
  font-size: calc(12px + (14 - 12) * ((100vw - 320px) / (375 - 320)));
  line-height: 129%;
  color: #fff;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  &:hover,
  &:focus,
  &:active {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  @media screen and (min-width: 375px) {
    max-width: 140px;
    gap: 47px;
    padding: 13px 32px;
    font-size: 14px;
  }
`,ae=s.div`
  border-radius: 60px;
  display: flex;
  gap: 12px;
  max-width: 108px;
  height: 44px;
  padding: 12px 18px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  align-items: center;
  justify-content: center;
`,M=s.button`
  color: #59b17a;
  background: none;
  border: none;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    color: rgba(89, 177, 122, 0.4);
  }
`,de=s.div`
  border-radius: 27px;
  background: #fff;
  padding: 20px;
  max-width: 335px;

  @media screen and (min-width: 768px) {
    max-width: 704px;
    padding: 32px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 800px;
    padding: 40px;
  }
`,oe=s.div`
  display: flex;
  gap: 8px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`,S=s.button`
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
  font-size: calc(12px + (14 - 12) * ((100vw - 320px) / (375 - 320)));
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
  @media screen and (min-width: 375px) {
    font-size: 14px;
  }
`,ce=s.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #6a6a6f;
  display: flex;
  flex-direction: column;
  gap: 20px;
`,d=s.p`
  color: #1d1e21;
`,o=s.span`
  color: #6a6a6f;
  margin-right: 5px;
`,xe=({prod:i})=>e.jsxs(ce,{children:[e.jsx("p",{children:"Although it's typically considered safe, excessive consumption can lead to side effects. Therefore, it's recommended to consult a healthcare professional before using moringa, especially if you're pregnant, nursing, or taking other medications. This balanced approach allows for the benefits of moringa while recognizing the importance of proper usage and caution."}),e.jsxs(d,{children:[e.jsx(o,{children:"Medicinal Uses: Antioxidant Properties:"}),i==null?void 0:i.uses]}),e.jsxs(d,{children:[e.jsx(o,{children:"Anti-Diabetic Effects:"}),i==null?void 0:i.effects]}),e.jsxs(d,{children:[e.jsx(o,{children:"Heart Health:"}),i==null?void 0:i.health]}),e.jsxs(d,{children:[e.jsx(o,{children:"Anti-Cancer Properties:"}),i==null?void 0:i.properties]}),e.jsxs(d,{children:[e.jsx(o,{children:"Immune Support:"}),i==null?void 0:i.support]}),e.jsxs(d,{children:[e.jsx(o,{children:"Digestive Aid:"}),i==null?void 0:i.aid]})]}),D=s.div`
  display: flex;
  gap: 3px;
`,he=()=>e.jsxs(D,{children:[e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${n}#starY`})}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${n}#starY`})}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${n}#starY`})}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${n}#star`})}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${n}#star`})})]}),pe=()=>e.jsxs(D,{children:[e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${n}#starY`})}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${n}#starY`})}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${n}#starY`})}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${n}#starY`})}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${n}#star`})})]}),le=()=>e.jsxs(D,{children:[e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${n}#starY`})}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${n}#starY`})}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${n}#starY`})}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${n}#starY`})}),e.jsx("svg",{width:"16",height:"16",children:e.jsx("use",{href:`${n}#starY`})})]}),ge=s.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: auto;
`,m=s.li`
  border: 1px solid #f1f1f1;
  border-radius: 20px;
  padding: 14px 28px;
  width: 100%;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #6a6a6f;
  @media screen and (min-width: 768px) {
    width: 640px;
  }
  @media screen and (min-width: 1440px) {
    width: 720px;
    font-size: 16px;
  }
`,u=s.div`
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  font-size: 16px;
  line-height: 140%;
  color: #1d1e21;
  margin-bottom: 14px;

  @media screen and (min-width: 1440px) {
    font-size: 18px;
  }
`,j=s.div`
  display: flex;
  gap: 20px;
`,w=s.img`
  border-radius: 30px;
  width: 44px;
  height: 44px;
  background: pink;
  object-fit: cover;
`,v=s.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: rgba(29, 30, 33, 0.6);
`,b=s.div`
  display: flex;
  gap: 6px;
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  color: #1d1e21;
`,y=s.div`
  display: flex;
  @media screen and (max-width: 767px) {
    display: none;
  }
`,k=s.svg`
  display: none;
  @media screen and (max-width: 767px) {
    display: block;
  }
`,fe=()=>e.jsxs(ge,{children:[e.jsxs(m,{children:[e.jsxs(u,{children:[e.jsxs(j,{children:[e.jsx(w,{src:"https://i.pinimg.com/236x/c8/78/62/c878627eeec0b3dcd4630108ff23ccd6.jpg",alt:"Larin Jan"}),e.jsxs("div",{children:[e.jsx("p",{children:"Larin Jan"}),e.jsx(v,{children:"2 days ago"})]})]}),e.jsxs(b,{children:[e.jsx(y,{children:e.jsx(pe,{})}),e.jsx(k,{width:"18",height:"18",children:e.jsx("use",{href:`${n}#starY`})}),e.jsx("p",{children:"4"})]})]}),e.jsx("p",{children:"I've been using this powder in my smoothies for a few weeks now. My energy levels are up, and I feel great. I followed the recommended dosage, and it seems to be a perfect addition to my daily routine. Highly recommend!"})]}),e.jsxs(m,{children:[e.jsxs(u,{children:[e.jsxs(j,{children:[e.jsx(w,{src:"https://i.pinimg.com/736x/94/0a/fc/940afc19cd0eb01c78904d43c2a80a8a.jpg",alt:"Leroy Jenkins"}),e.jsxs("div",{children:[e.jsx("p",{children:"Leroy Jenkins"}),e.jsx(v,{children:"5 days ago"})]})]}),e.jsxs(b,{children:[e.jsx(y,{children:e.jsx(le,{})}),e.jsx(k,{width:"18",height:"18",children:e.jsx("use",{href:`${n}#starY`})}),e.jsx("p",{children:"5"})]})]}),e.jsx("p",{children:"I tried pill capsules as part of my wellness regimen, and I've been pleasantly surprised by the results. My skin looks healthier, and I've noticed an improvement in my digestion. A natural and effective supplement!"})]}),e.jsxs(m,{children:[e.jsxs(u,{children:[e.jsxs(j,{children:[e.jsx(w,{src:"https://theperfecthumanface.wordpress.com/wp-content/uploads/2022/03/jackson-wang-face.jpg?w=620",alt:"Omap Epps"}),e.jsxs("div",{children:[e.jsx("p",{children:"Omap Epps"}),e.jsx(v,{children:"2 weeks ago"})]})]}),e.jsxs(b,{children:[e.jsx(y,{children:e.jsx(he,{})}),e.jsx(k,{width:"18",height:"18",children:e.jsx("use",{href:`${n}#starY`})}),e.jsx("p",{children:"3"})]})]}),e.jsx("p",{children:"I added this oil to my skincare routine, and the results are amazing. My skin feels smoother and more nourished. I was skeptical at first, but now I'm a firm believer in its benefits."})]})]}),we=()=>{const[i,C]=a.useState("description"),[h,$]=a.useState(1),[p,l]=a.useState(0),[Y,g]=a.useState(""),[T,f]=a.useState(!1),[L,I]=a.useState(!1),A=H(),R=U(),O=q(),{item:t}=O.state||{},c=_(r=>r.user);a.useEffect(()=>{c.length===0?g(""):g(c.token)},[c.length,c.token]),a.useEffect(()=>{if(!t){R("/medicine");return}l(t.price);const r=localStorage.getItem("e-pharmacy");if(r&&r!=="[]"){const x=JSON.parse(r);x.token&&(G(x.token),g(x.token))}},[t,R]);const F=()=>{$(r=>r+1),l(r=>parseFloat((r+t.price).toFixed(2)))},E=()=>{h!==1&&($(r=>r-1),l(r=>parseFloat((r-t.price).toFixed(2))))},B=async r=>{Y?(await A(K({quantity:h,productId:r}))).type:f(!0)},J=()=>{f(!0)},P=()=>{f(!1)},N=()=>{I(!0)},Q=()=>{I(!1)};return e.jsxs(X,{children:[e.jsx(z,{}),e.jsx(z,{toastStyle:{background:"#fb430b",color:"white"}}),e.jsxs(Z,{children:[e.jsx(ee,{children:e.jsx("img",{src:t==null?void 0:t.photo,alt:t==null?void 0:t.name,width:"100%",height:"100%"})}),e.jsxs(ie,{children:[e.jsxs(se,{children:[e.jsx("p",{children:t==null?void 0:t.name}),e.jsxs("p",{children:["₴",p==null?void 0:p.toFixed(2)]})]}),e.jsxs(te,{children:["Brand:",t==null?void 0:t.suppliers]}),e.jsxs(ne,{children:[e.jsxs(ae,{children:[e.jsx(M,{onClick:F,children:"+"}),e.jsx("p",{children:h}),e.jsx(M,{onClick:E,children:"-"})]}),e.jsx(re,{onClick:()=>B(t._id),children:"Add to cart"})]})]})]}),e.jsxs(de,{children:[e.jsxs(oe,{children:[e.jsx(S,{onClick:()=>C("description"),$prop:i==="description",children:"Description"}),e.jsx(S,{onClick:()=>C("reviews"),$prop:i==="reviews",children:"Reviews"})]}),i==="description"?e.jsx(xe,{prod:t}):e.jsx(fe,{})]}),T&&e.jsx(V,{close:P,openReg:N}),L&&e.jsx(W,{close:Q,openLog:J})]})};export{we as default};
