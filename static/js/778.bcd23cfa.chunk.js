"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[778],{5778:function(n,e,t){t.r(e),t.d(e,{default:function(){return K}});var i=t(3433),r=t(5861),o=t(9439),c=t(7757),s=t.n(c),l=t(2791),a=t(5294);a.Z.defaults.baseURL="https://65b96003b71048505a8ac506.mockapi.io/";var p=function(){var n=(0,r.Z)(s().mark((function n(){var e,t,i,r=arguments;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:1,t=r.length>1&&void 0!==r[1]?r[1]:12,n.prev=2,n.next=5,a.Z.get("adverts",{params:{page:e,limit:t}});case 5:return i=n.sent,console.log(i.data,"cars"),n.abrupt("return",i.data);case 10:throw n.prev=10,n.t0=n.catch(2),console.error("Error fetching cars:",n.t0),n.t0;case 14:case"end":return n.stop()}}),n,null,[[2,10]])})));return function(){return n.apply(this,arguments)}}(),d=t(6903);var u=t.p+"static/media/close.70f65c7e87a4e1e47d5b73074981fa46.svg",h=t(9173);var x,f,g,b,j,m,Z,w,v,y,P,k,C,z,S=t.p+"static/media/heart.4f90324bb1306c6788753df75e79ee15.svg",M=t(6959),W=t(4164),E=t(168),L=t(7924),F=L.ZP.div(x||(x=(0,E.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.5);\n"]))),_=L.ZP.div(f||(f=(0,E.Z)(["\n  z-index: 12000;\n  width: 541px;\n  /* height: 752px; */  \n  background: white;\n  padding: 40px;\n  border-radius: 8px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  right: auto;\n  bottom: auto;\n  border-radius: 24px;\n  transform: translate(-50%, -50%);\n"]))),A=L.ZP.button(g||(g=(0,E.Z)(["\n  position: absolute;\n  display: flex;\n  top: 16px;\n  right: 16px;\n  width: 24px;\n  height: 24px;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  background: none;\n"]))),D=L.ZP.img(b||(b=(0,E.Z)(["\n  width: 100%;\n  height: 248px;\n  object-fit: cover;\n  border-radius: 14px;\n"]))),R=L.ZP.h2(j||(j=(0,E.Z)(["\n  font-size: 18px;\n  font-weight: 500;\n  line-height: calc(24 / 18);\n  margin: 14px 0 8px 0;\n"]))),G=L.ZP.ul(m||(m=(0,E.Z)(["\n  /* width: 288px; */\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n"]))),H=L.ZP.li(Z||(Z=(0,E.Z)(["\n  position: relative;\n  padding-right: 6px;\n  margin-left: 2px;\n  color: rgba(18, 20, 23, 0.5);\n  font-size: 12px;\n  line-height: calc(18 / 12);\n\n  &::after {\n    content: '';\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    width: 1px;\n    background-color: rgba(18, 20, 23, 0.1);\n  }\n"]))),O=L.ZP.p(w||(w=(0,E.Z)(["\n  color: #121417;\n  font-size: 14px;\n  line-height: 20px calc(20 / 14);\n  margin-top: 14px;\n"]))),Q=L.ZP.h3(v||(v=(0,E.Z)(["\n  margin-top: 24px;\n  color: #121417;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: calc(20 / 14);\n  margin-bottom: 8px;\n"]))),T=L.ZP.ul(y||(y=(0,E.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n"]))),U=L.ZP.li(P||(P=(0,E.Z)(["\n  color: #363535;\n  padding: 7px 14px;\n  border-radius: 35px;\n  background: #f9f9f9;\n  /* font-family: Montserrat; */\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 18px; /* 150% */\n  letter-spacing: -0.24px;\n"]))),V=L.ZP.a(k||(k=(0,E.Z)(["\n  /* position: absolute; */\n  /* bottom: 0px; */\n  width:168px;\n  margin-top: 24px;\n  color: #ffffff;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: calc(20 / 14);\n  border-radius: 12px;\n  border: none;\n  background: #3470ff;\n  display: flex;\n  /* width: 274px;\n  height: 44px; */\n  padding: 12px 50px;\n  justify-content: center;\n  align-items: center;\n  &:hover {\n    background-color:#0B44CD;\n  }\n"]))),$=L.ZP.span(C||(C=(0,E.Z)(["\ncolor: #3470FF;\n\n"]))),q=L.ZP.span(z||(z=(0,E.Z)(["\ncolor: #3470FF;\nfont-family: Montserrat;\nfont-size: 12px;\nfont-style: normal;\nfont-weight: 600;\nline-height: 18px;\nletter-spacing: -0.24px;\n"]))),B=t(184),I=document.querySelector("#modal"),Y=function(n){var e=n.openModal,t=n.onClose,i=n.selectedCar,r=n.children,o=(0,l.useMemo)((function(){return document.createElement("div")}),[]);(0,l.useEffect)((function(){return I.appendChild(o),function(){I.removeChild(o)}}),[o]);return e&&i?(0,W.createPortal)((0,B.jsx)(F,{onClick:function(n){n.target===n.currentTarget&&t()},children:(0,B.jsxs)(_,{children:[r,(0,B.jsx)(D,{src:i.img||h,alt:i.make}),(0,B.jsxs)(R,{children:[i.make," ",(0,B.jsxs)($,{children:[" ",i.model]}),","," ",(0,B.jsx)("span",{children:i.year})]}),(0,B.jsxs)(G,{children:[(0,B.jsx)(H,{children:i.address.split(",")[1]}),(0,B.jsx)(H,{children:i.address.split(",")[2]}),(0,B.jsxs)(H,{children:["id: ",i.id]}),(0,B.jsxs)(H,{children:["Year: ",i.year]}),(0,B.jsxs)(H,{children:["Type: ",i.type]}),(0,B.jsxs)(H,{children:["Fuel Consumption: ",i.fuelConsumption]}),(0,B.jsxs)(H,{children:["Engine Size: ",i.engineSize]})]}),(0,B.jsx)(O,{children:i.description}),(0,B.jsx)(Q,{children:"Accessories and functionalities:"}),(0,B.jsxs)(G,{children:[(0,B.jsx)(H,{children:i.accessories[0]}),(0,B.jsx)(H,{children:i.accessories[1]}),(0,B.jsx)(H,{children:i.accessories[2]})]}),(0,B.jsxs)(G,{children:[(0,B.jsx)(H,{children:i.functionalities[0]}),(0,B.jsx)(H,{children:i.functionalities[1]}),(0,B.jsx)(H,{children:i.functionalities[2]})]}),(0,B.jsx)(Q,{children:"Rental Conditions: "}),(0,B.jsxs)(T,{children:[(0,B.jsxs)(U,{children:[i.rentalConditions.split("").slice(0,12).join("")," ",(0,B.jsx)(q,{children:i.rentalConditions.split("").slice(13,15).join("")})]}),(0,B.jsx)(U,{children:i.rentalConditions.split("").slice(15,38).join("")}),(0,B.jsx)(U,{children:i.rentalConditions.split("").slice(38,-1).join("")}),(0,B.jsxs)(U,{children:["Mileage: ",(0,B.jsx)(q,{children:i.mileage.toLocaleString("en-US")})]}),(0,B.jsxs)(U,{children:["Price: ",(0,B.jsx)(q,{children:i.rentalPrice})]})]}),(0,B.jsx)(V,{href:"tel:+380730000000",children:"Rental car"})]})}),o):null},J=t(4420),K=function(){var n=(0,l.useState)([]),e=(0,o.Z)(n,2),t=e[0],c=e[1],a=(0,l.useState)(!1),x=(0,o.Z)(a,2),f=x[0],g=x[1],b=(0,l.useState)(null),j=(0,o.Z)(b,2),m=j[0],Z=j[1],w=(0,l.useState)(!1),v=(0,o.Z)(w,2),y=v[0],P=v[1],k=(0,l.useState)(1),C=(0,o.Z)(k,2),z=C[0],W=C[1],E=(0,l.useState)(!0),L=(0,o.Z)(E,2),F=L[0],_=L[1],D=(0,J.I0)();(0,l.useEffect)((function(){var n=function(){var n=(0,r.Z)(s().mark((function n(){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,p(z);case 3:e=n.sent,console.log(e),0===e.length?_(!1):(c((function(n){return[].concat((0,i.Z)(n),(0,i.Z)(e))})),_(!0)),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.error("Error fetching cars:",n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();n()}),[z]);var R=function(){g(!1),P(!1)};return(0,l.useEffect)((function(){return document.body.style.overflow=y?"hidden":"auto",function(){document.body.style.overflow="auto"}}),[y]),(0,B.jsxs)("div",{children:[(0,B.jsx)(M.Hg,{children:t.map((function(n){return(0,B.jsxs)(M.G6,{children:[(0,B.jsx)(M.cL,{src:n.img||h,alt:n.make}),(0,B.jsxs)(M.Al,{children:[(0,B.jsxs)(M.v5,{children:[n.make," ",(0,B.jsxs)(M.Oi,{children:[" ",n.model]}),","," ",(0,B.jsx)("span",{children:n.year})]}),(0,B.jsx)(M.VP,{children:n.rentalPrice})]}),(0,B.jsxs)(M.Q4,{children:[(0,B.jsx)(M.bW,{children:n.address.split(",")[1]}),(0,B.jsx)(M.bW,{children:n.address.split(",")[2]}),(0,B.jsx)(M.bW,{children:n.rentalCompany}),(0,B.jsx)(M.bW,{children:n.type}),(0,B.jsx)(M.bW,{children:n.model}),(0,B.jsx)(M.bW,{children:n.id}),(0,B.jsx)(M.bW,{children:n.accessories[0].split(" ").slice(0,-1).join(" ")})]}),(0,B.jsx)(M.SZ,{onClick:function(){return function(n){Z(n),g(!0),P(!0)}(n)},children:"Learn more"}),(0,B.jsxs)(M.z$,{onClick:function(){return function(n){D((0,d._p)(n))}(n)},children:[" ",(0,B.jsx)("img",{src:S,alt:"close"})]})]},n.id)}))}),(0,B.jsx)(M.pD,{children:F&&(0,B.jsx)(M.nw,{onClick:function(){W((function(n){return n+1}))},children:"Load More"})}),(0,B.jsx)(Y,{openModal:f,onClose:R,selectedCar:m,children:(0,B.jsx)(A,{onClick:R,children:(0,B.jsx)("img",{src:u,alt:"close"})})})]})}},6959:function(n,e,t){t.d(e,{Al:function(){return S},G6:function(){return m},Hg:function(){return j},Oi:function(){return C},Q4:function(){return v},SZ:function(){return P},VP:function(){return z},bW:function(){return y},cL:function(){return Z},nw:function(){return W},pD:function(){return M},v5:function(){return w},z$:function(){return k}});var i,r,o,c,s,l,a,p,d,u,h,x,f,g=t(168),b=t(7924),j=b.ZP.ul(i||(i=(0,g.Z)(["\n  margin-top: 50px;\n  margin-bottom: 50px;\n  display: grid;\n  grid-template-columns: repeat(4, 274px);\n  column-gap: 30px;\n  row-gap: 50px;\n  justify-content: center;\n"]))),m=b.ZP.li(r||(r=(0,g.Z)(["\n  width: 274px;\n  height: 426px;\n  position: relative;\n"]))),Z=b.ZP.img(o||(o=(0,g.Z)(["\n  width: 100%;\n  height: 268px;\n  object-fit: cover;\n  border-radius: 14px;\n"]))),w=b.ZP.h2(c||(c=(0,g.Z)(["\n  color: #121417;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: calc(24 / 16);\n"]))),v=b.ZP.ul(s||(s=(0,g.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n"]))),y=b.ZP.li(l||(l=(0,g.Z)(["\n  position: relative;\n  padding-right: 6px;\n  margin-left: 2px;\n  color: rgba(18, 20, 23, 0.5);\n  font-size: 12px;\n  line-height: calc(18 / 12);\n\n  &::after {\n    content: '';\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    width: 1px;\n    background-color: rgba(18, 20, 23, 0.1);\n  }\n"]))),P=b.ZP.button(a||(a=(0,g.Z)(["\n  position: absolute;\n  bottom: 0px;\n  color: #ffffff;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: calc(20 / 14);\n  border-radius: 12px;\n  border: none;\n  background: #3470ff;\n  display: flex;\n  width: 274px;\n  height: 44px;\n  padding: 12px 99px;\n  justify-content: center;\n  align-items: center;\n  &:hover {\n    background-color: #0b44cd;\n  }\n"]))),k=b.ZP.button(p||(p=(0,g.Z)(["\n  position: absolute;\n  display: flex;\n  top: 14px;\n  right: 14px;\n  width: 18px;\n  height: 18px;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  background: none;\n"]))),C=b.ZP.span(d||(d=(0,g.Z)(["\n  color: #3470ff;\n"]))),z=b.ZP.p(u||(u=(0,g.Z)(["\n  color: #121417;\n  font-family: Manrope;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 24px;\n"]))),S=b.ZP.div(h||(h=(0,g.Z)(["\n  margin: 14px 0 8px 0;\n  display: flex;\n  justify-content: space-between;\n"]))),M=b.ZP.div(x||(x=(0,g.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),W=b.ZP.button(f||(f=(0,g.Z)(["\n  margin-bottom: 50px;\n  color: #ffffff;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: calc(20 / 14);\n  border-radius: 12px;\n  border: none;\n  background: #3470ff;\n  display: flex;\n  width: 274px;\n  height: 44px;\n  padding: 12px 99px;\n  justify-content: center;\n  align-items: center;\n  &:hover {\n    background-color: #0b44cd;\n  }\n"])))},9173:function(n,e,t){n.exports=t.p+"static/media/placeholder.2f1be133bc288b2230bf.webp"}}]);
//# sourceMappingURL=778.bcd23cfa.chunk.js.map