(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[9],{1141:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Pe}));var c=n(15),r=n(0),a=n(7),i=n(3),o=n(18),s=n(186),u=n(4),b=n.n(u),l=n(208);function j(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=Object(l.a)(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var c=0,r=function(){};return{s:r,n:function(){return c>=e.length?{done:!0}:{done:!1,value:e[c++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,o=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){o=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(o)throw a}}}}var d,O,f,p,x,h,m,g,v,y,S,k,w,E,z,N,Q,C,T,U=n(14),A=n(17),D=n(64),F=n(32),H=n(10),L=n(13),Z=n.n(L),P=n(57),I=n(19),R=n(109),B=n(161),G=n(139),q=function(){var e=Object(r.useState)([]),t=Object(A.a)(e,2),n=t[0],c=t[1],a=Object(F.c)().account,i=Object(G.a)().fastRefresh;return Object(r.useEffect)((function(){a&&function(){var e=Object(U.a)(b.a.mark((function e(){var t,n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=B.a.map((function(e){return{address:Object(I.l)(),name:"pendingCake",params:[e.pid,a]}})),e.next=3,Object(P.a)(R,t);case 3:n=e.sent,r=B.a.map((function(e,t){return Object(H.a)(Object(H.a)({},e),{},{balance:new Z.a(n[t])})})),c(r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[a,i]),n},M=n(47),V=n(138),$=function(){var e=Object(r.useState)([]),t=Object(A.a)(e,2),n=t[0],c=t[1],a=Object(F.c)().account,i=Object(G.a)().fastRefresh;return Object(r.useEffect)((function(){a&&function(){var e=Object(U.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=B.a.map((function(e){return{address:Object(I.l)(),name:"pendingCake",params:[e.pid,a]}})),e.next=3,Object(P.a)(R,t);case 3:n=e.sent,c(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[a,i]),n},J=n(31),W=n(30),_=n(881),K=n(888),X=n(1),Y=a.e.div(d||(d=Object(c.a)(["\n  margin-bottom: 24px;\n"]))),ee=function(){var e=Object(o.b)().t,t=Object(F.c)().account,n=$().reduce((function(e,t){var n=new Z.a(t);return n.eq(0)?e:e+n.div(W.j).toNumber()}),0),c=Object(J.G)(),r=new Z.a(n).multipliedBy(c).toNumber();return t?Object(X.jsxs)(Y,{children:[Object(X.jsx)(_.a,{value:n,lineHeight:"1.5"}),c.gt(0)&&Object(X.jsx)(K.a,{value:r})]}):Object(X.jsx)(i.Nb,{color:"textDisabled",style:{lineHeight:"76px"},children:e("Locked")})},te=n(880),ne=n(22),ce=function(){var e=Object(o.b)().t,t=Object(te.a)(Object(I.d)()).balance,n=Object(J.G)(),c=new L.BigNumber(Object(ne.c)(t)).multipliedBy(n).toNumber();return Object(F.c)().account?Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)(_.a,{value:Object(ne.c)(t),decimals:4,fontSize:"24px",lineHeight:"36px"}),n.gt(0)?Object(X.jsx)(K.a,{value:c}):Object(X.jsx)("br",{})]}):Object(X.jsx)(i.Nb,{color:"textDisabled",style:{lineHeight:"54px"},children:e("Locked")})},re=Object(a.e)(i.s)(O||(O=Object(c.a)(["\n background-position: center;\nbackground-repeat: no-repeat;\nbackground-size: cover;\n  min-height: 376px;\n   opacity: 0.9;\n    ) ;\n\n "]))),ae=a.e.div(f||(f=Object(c.a)(["\n  margin-bottom: 16px;\n"]))),ie=a.e.img(p||(p=Object(c.a)(["\n  margin-bottom: 10px;\n"]))),oe=a.e.div(x||(x=Object(c.a)(["\n  color: ",";\n  font-size: 17px;\n"])),(function(e){return e.theme.colors.textSubtle})),se=a.e.div(h||(h=Object(c.a)(["\n  margin-top: 24px;\n"]))),ue=function(){var e=Object(r.useState)(!1),t=Object(A.a)(e,2),n=t[0],c=t[1],a=Object(F.c)().account,s=Object(o.b)().t,u=q(),l=Object(M.n)(),d=u.filter((function(e){return e.balance.toNumber()>0})),O=Object(r.useCallback)(Object(U.a)(b.a.mark((function e(){var t,n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c(!0),t=j(d),e.prev=2,t.s();case 4:if((n=t.n()).done){e.next=15;break}return r=n.value,e.prev=6,e.next=9,Object(D.b)(l,r.pid,a);case 9:e.next=13;break;case 11:e.prev=11,e.t0=e.catch(6);case 13:e.next=4;break;case 15:e.next=20;break;case 17:e.prev=17,e.t1=e.catch(2),t.e(e.t1);case 20:return e.prev=20,t.f(),e.finish(20);case 23:c(!1);case 24:case"end":return e.stop()}}),e,null,[[2,17,20,23],[6,11]])}))),[a,d,l]);return Object(X.jsx)(re,{children:Object(X.jsxs)(i.t,{children:[Object(X.jsx)(i.Q,{scale:"xl",mb:"15px",color:"secondary",children:s("Farms & Staking")}),Object(X.jsx)(ie,{src:"/images/zeus.svg",alt:"zeus logo",width:64,height:64}),Object(X.jsxs)(ae,{children:[Object(X.jsxs)(oe,{children:[s("Zeus to Harvest"),":"]}),Object(X.jsx)(ee,{})]}),Object(X.jsxs)(ae,{children:[Object(X.jsxs)(oe,{children:[s("Zeus in Wallet"),":"]}),Object(X.jsx)(ce,{})]}),Object(X.jsx)(se,{children:a?Object(X.jsx)(i.o,{id:"harvest-all",disabled:d.length<=0||n,onClick:O,width:"100%",children:n?s("Collecting Zeus"):s("Harvest all (%count%)",{count:d.length})}):Object(X.jsx)(V.a,{width:"100%"})})]})})},be=n(218),le=Object(a.e)(i.s)(m||(m=Object(c.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  opacity: 0.9;\n  max-height: 100%;\n"]))),je=a.e.div(g||(g=Object(c.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),de=a.e.div(v||(v=Object(c.a)(["\n font-size: 40px;\n margin-bottom: 20px;\n color: ",";\n font-weight: 900;\n  "])),(function(e){return e.theme.colors.textSubtle})),Oe=function(){var e=Object(o.b)().t,t=Object(te.d)(),n=Object(te.b)(Object(I.d)()),c=Object(J.G)(),r=t?t.minus(n):new be.a(0),a=Object(ne.c)(r),s=c.times(r);return Object(X.jsx)(le,{children:Object(X.jsxs)(i.t,{children:[Object(X.jsx)(de,{children:e("Zeus Stats")}),Object(X.jsxs)(je,{children:[Object(X.jsx)(i.Nb,{fontSize:"17px",color:"secondary",children:e(" ZEUS circ. market cap")}),Object(X.jsx)(_.a,{fontSize:"17px",value:Object(ne.c)(s),decimals:0,prefix:"$"})]}),Object(X.jsxs)(je,{children:[Object(X.jsx)(i.Nb,{fontSize:"17px",color:"secondary",children:e("ZEUS total supply")}),t&&Object(X.jsx)(_.a,{fontSize:"17px",value:Object(ne.c)(t),decimals:0})]}),Object(X.jsxs)(je,{children:[Object(X.jsx)(i.Nb,{fontSize:"17px",color:"secondary",children:e("ZEUS in circulation")}),a&&Object(X.jsx)(_.a,{fontSize:"17px",value:a,decimals:0})]}),Object(X.jsxs)(je,{children:[Object(X.jsx)(i.Nb,{fontSize:"17px",color:"secondary",children:e("ZEUS total burned")}),Object(X.jsx)(_.a,{fontSize:"17px",value:Object(ne.c)(n),decimals:0})]}),Object(X.jsxs)(je,{children:[Object(X.jsx)(i.Nb,{fontSize:"17px",color:"secondary",children:e("ZEUS/block")}),Object(X.jsx)(_.a,{fontSize:"17px",decimals:0,value:0})]}),Object(X.jsxs)(je,{children:[Object(X.jsx)(i.Nb,{fontSize:"17px",color:"secondary",children:e("ACTIVE POOLS")}),Object(X.jsx)(_.a,{fontSize:"17px",decimals:0,value:0})]})]})})},fe=Object(a.e)(i.s)(y||(y=Object(c.a)(["\n  align-items: center;\n  flex: 1; \n  opacity: 0.9;\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n  height: 100%;\n      "]))),pe=function(){var e=Object(o.b)().t,t=function(){var e=Object(r.useState)(null),t=Object(A.a)(e,2),n=t[0],c=t[1];return Object(r.useEffect)((function(){!function(){var e=Object(U.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://openapi.debank.com/v1/protocol?id=zeusswap");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,c(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error("Unable to fetch data:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()()}),[c]),n}(),n=t?t.tvl.toLocaleString("en-US",{maximumFractionDigits:0}):null;return Object(X.jsx)(fe,{children:Object(X.jsxs)(i.t,{children:[Object(X.jsx)(i.Q,{scale:"lg",mb:"0px",color:"secondary",children:e("Total Value Locked (TVL)")}),t?Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)(i.Q,{scale:"xl",children:"$".concat(n)}),Object(X.jsx)(i.Nb,{color:"textSubtle",children:e("Across all LPs and Zeus Pool")})]}):Object(X.jsx)(i.Db,{height:66})]})})},xe=n(956),he=n.n(xe),me=n(106),ge=n(50),ve=n(112),ye=n(309),Se=Object(a.f)(S||(S=Object(c.a)(["\n\t0% {\n\t\tbackground-position: 0% 100%;\n\t}\n\t50% {\n\t\tbackground-position: 0% 0%;\n\t}\n\t100% {\n\t\tbackground-position: 100% 0%;\n\t}\n"]))),ke=Object(a.e)(i.s)(k||(k=Object(c.a)(["\nbackground: linear-gradient(\n  45deg,\n  rgb(0,0,0) 0%,\n  rgb(0,0,0) 10%,\n  rgb(0, 16, 36)20%,\n  rgb(0, 21, 46) 30%,\n  rgb(0, 32, 71) 40%,\n  rgb(0, 53, 117) 50%,\n  rgb(0, 32, 71)60%,\n  rgb(0, 21, 46) 70%,\n  rgb(0, 16, 36) 80%,\n  rgb(0,0,0) 90%,\n  rgb(0,0,0) 100%);\n  );\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n  background-size: 500% 500%;\n  animation: "," 2.5s linear infinite;\n  border-radius: 25px;\n  opacity: 0.94;\n  \n  "," {\n    margin: 0;\n    max-width: none;\n  }\n\n  transition: opacity 200ms;\n  &:hover {\n    opacity: 0.65;\n  }\n"])),Se,(function(e){return e.theme.mediaQueries.lg})),we=Object(a.e)(i.Q).attrs({scale:"xl"})(w||(w=Object(c.a)(["\n  line-height: 44px;\n"]))),Ee=function(){var e=Object(r.useState)(!0),t=Object(A.a)(e,2),n=t[0],c=t[1],a=Object(o.b)().t,s=Object(J.f)().data,u=Object(J.G)(),l=Object(ge.b)();Object(r.useEffect)((function(){(function(){var e=Object(U.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l(Object(ve.c)(ve.d.map((function(e){return e.pid}))));case 3:return e.prev=3,c(!1),e.finish(3);case 6:case"end":return e.stop()}}),e,null,[[0,,3,6]])})));return function(){return e.apply(this,arguments)}})()()}),[l,c]);var j=Object(r.useMemo)((function(){if(u.gt(0)){var e=s.map((function(e){if(0!==e.pid&&"0X"!==e.multiplier&&e.lpTotalInQuoteToken&&e.quoteToken.busdPrice){var t=new Z.a(e.lpTotalInQuoteToken).times(e.quoteToken.busdPrice);return Object(ye.a)(new Z.a(e.poolWeight),u,t)}return null})),t=he()(e);return null===t||void 0===t?void 0:t.toLocaleString("en-US",{maximumFractionDigits:2})}return null}),[u,s]),d=j||"-",O=a("Earn up to %highestApr% APR in Farms",{highestApr:d}).split(d),f=Object(A.a)(O,2),p=f[0],x=f[1];return Object(X.jsx)(ke,{children:Object(X.jsx)(me.b,{exact:!0,activeClassName:"active",to:"/farms",id:"farm-apr-cta",children:Object(X.jsxs)(i.t,{children:[Object(X.jsx)(i.Q,{color:"secondary",scale:"lg",children:p}),Object(X.jsx)(we,{color:"text",children:j&&!n?"".concat(j,"%"):Object(X.jsx)(i.Db,{animation:"pulse",variant:"rect",height:"44px"})}),Object(X.jsxs)(i.P,{justifyContent:"space-between",children:[Object(X.jsx)(i.Q,{color:"secondary",scale:"lg",children:x}),Object(X.jsx)(i.e,{mt:30,color:"secondary"})]})]})})})},ze=n(206),Ne=n.n(ze),Qe=n(68),Ce=Object(a.f)(E||(E=Object(c.a)(["\n\t0% {\n\t\tbackground-position: 0% 100%;\n\t}\n\t50% {\n\t\tbackground-position: 0% 0%;\n\t}\n\t100% {\n\t\tbackground-position: 100% 0%;\n\t}\n"]))),Te=Object(a.e)(i.s)(z||(z=Object(c.a)(["\nbackground: linear-gradient(\n  45deg,\n  rgb(0,0,0) 0%,\n  rgb(0,0,0) 10%,\n  rgb(0, 16, 36)20%,\n  rgb(0, 21, 46) 30%,\n  rgb(0, 32, 71) 40%,\n  rgb(0, 53, 117) 50%,\n  rgb(0, 32, 71)60%,\n  rgb(0, 21, 46) 70%,\n  rgb(0, 16, 36) 80%,\n  rgb(0,0,0) 90%,\n  rgb(0,0,0) 100%);\n  );\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n  background-size: 500% 500%;\n  animation: "," 2.5s linear infinite;\n  border-radius: 25px;\n  opacity: 0.94;\n  "," {\n    margin: 0;\n    max-width: none;\n  }\n\n  transition: opacity 200ms;\n  &:hover {\n    opacity: 0.65;\n  }\n"])),Ce,(function(e){return e.theme.mediaQueries.lg})),Ue=Object(a.e)(i.Q).attrs({scale:"xl"})(N||(N=Object(c.a)(["\n  line-height: 44px;\n"]))),Ae=Qe.a.filter((function(e){return!e.isFinished&&!e.earningToken.symbol.includes("CAKE")})),De=[Ne()(Ae,["sortOrder","pid"],["desc","desc"]).slice(0,3).map((function(e){return e.earningToken.symbol}))].join(", "),Fe=function(){var e=(0,Object(o.b)().t)("Earn %assets% in Pools",{assets:De}).split(De),t=Object(A.a)(e,2),n=t[0],c=t[1];return Object(X.jsx)(Te,{children:Object(X.jsx)(me.b,{exact:!0,activeClassName:"active",to:"/syrup",id:"pool-cta",children:Object(X.jsxs)(i.t,{children:[Object(X.jsx)(i.Q,{color:"secondary",scale:"lg",children:n}),Object(X.jsx)(Ue,{color:"text",children:De}),Object(X.jsxs)(i.P,{justifyContent:"space-between",children:[Object(X.jsx)(i.Q,{color:"secondary",scale:"lg",children:c}),Object(X.jsx)(i.e,{mt:30,color:"primary"})]})]})})})},He=a.e.div(Q||(Q=Object(c.a)(["\n  align-items: center;\n   background-repeat: no-repeat;\n  background-position: top center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin: auto;\n  margin-bottom: 32px;\n  padding-top: 116px;\n  text-align: center;\n\n  "," {\n     background-position: left center, right center;\n    height: 165px;\n    padding-top: 0;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),Le=Object(a.e)(i.i)(C||(C=Object(c.a)(["\n  align-items: stretch;\n  justify-content: stretch;\n  margin-bottom: 24px;\n  grid-gap: 24px;\n\n  & > div {\n    grid-column: span 6;\n    width: 100%;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    margin-bottom: 32px;\n    grid-gap: 32px;\n\n    & > div {\n      grid-column: span 6;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),Ze=Object(a.e)(i.i)(T||(T=Object(c.a)(["\n  align-items: start;\n  margin-bottom: 24px;\n  grid-gap: 24px;\n\n  & > div {\n    grid-column: span 6;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    margin-bottom: 32px;\n    grid-gap: 32px;\n\n    & > div {\n      grid-column: span 4;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),Pe=function(){var e=Object(o.b)().t;return Object(X.jsxs)(s.a,{children:[Object(X.jsxs)(He,{children:[Object(X.jsx)(i.Q,{as:"h1",scale:"xl",mb:"24px",color:"secondary",children:e("ZeusSwap")}),Object(X.jsx)(i.Nb,{children:e("The #1 AMM and yield farm in Slovakia.")})]}),Object(X.jsxs)("div",{children:[Object(X.jsxs)(Le,{children:[Object(X.jsx)(ue,{}),Object(X.jsx)(Oe,{})]}),Object(X.jsxs)(Ze,{children:[Object(X.jsx)(pe,{}),Object(X.jsx)(Ee,{}),Object(X.jsx)(Fe,{})]})]})]})}},880:function(e,t,n){"use strict";n.d(t,"d",(function(){return h})),n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return g}));var c,r=n(4),a=n.n(r),i=n(10),o=n(14),s=n(17),u=n(0),b=n(13),l=n.n(b),j=n(32),d=n(33),O=n(23),f=n(55),p=n(139),x=n(297);!function(e){e.NOT_FETCHED="not-fetched",e.SUCCESS="success",e.FAILED="failed"}(c||(c={}));var h=function(){var e=Object(p.a)().slowRefresh,t=Object(u.useState)(),n=Object(s.a)(t,2),c=n[0],r=n[1];return Object(u.useEffect)((function(){function e(){return(e=Object(o.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(d.d)(),e.next=3,t.methods.totalSupply().call();case 3:n=e.sent,r(new l.a(n));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[e]),c},m=function(e){var t=Object(u.useState)(O.d),n=Object(s.a)(t,2),c=n[0],r=n[1],i=Object(p.a)().slowRefresh,b=Object(f.a)();return Object(u.useEffect)((function(){(function(){var t=Object(o.a)(a.a.mark((function t(){var n,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(d.a)(e,b),t.next=3,n.methods.balanceOf("0x000000000000000000000000000000000000dEaD").call();case 3:c=t.sent,r(new l.a(c));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[b,e,i]),c},g=function(){var e=Object(u.useState)(O.d),t=Object(s.a)(e,2),n=t[0],c=t[1],r=Object(j.c)().account,i=Object(x.a)(),b=i.lastUpdated,d=i.setLastUpdated,p=Object(f.a)();return Object(u.useEffect)((function(){r&&function(){var e=Object(o.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.eth.getBalance(r);case 2:t=e.sent,c(new l.a(t));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[r,p,b,c]),{balance:n,refresh:d}};t.a=function(e){var t=c.NOT_FETCHED,n=c.SUCCESS,r=c.FAILED,b=Object(u.useState)({balance:O.d,fetchStatus:t}),x=Object(s.a)(b,2),h=x[0],m=x[1],g=Object(f.a)(),v=Object(j.c)().account,y=Object(p.a)().fastRefresh;return Object(u.useEffect)((function(){v&&function(){var t=Object(o.a)(a.a.mark((function t(){var c,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=Object(d.a)(e,g),t.prev=1,t.next=4,c.methods.balanceOf(v).call();case 4:o=t.sent,m({balance:new l.a(o),fetchStatus:n}),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),console.error(t.t0),m((function(e){return Object(i.a)(Object(i.a)({},e),{},{fetchStatus:r})}));case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(){return t.apply(this,arguments)}}()()}),[v,e,g,y,n,r]),h}},881:function(e,t,n){"use strict";var c=n(0),r=n(296),a=n(3),i=n(1);t.a=function(e){var t=e.value,n=e.decimals,o=e.fontSize,s=void 0===o?"40px":o,u=e.lineHeight,b=void 0===u?"1":u,l=e.prefix,j=void 0===l?"":l,d=e.bold,O=void 0===d||d,f=e.color,p=void 0===f?"text":f,x=Object(r.useCountUp)({start:0,end:t,duration:1,separator:",",decimals:void 0!==n?n:t<0?4:t>1e5?0:3}),h=x.countUp,m=x.update,g=Object(c.useRef)(m);return Object(c.useEffect)((function(){g.current(t)}),[t,g]),Object(i.jsxs)(a.Nb,{bold:O,fontSize:s,style:{lineHeight:b},color:p,children:[j,h]})}},888:function(e,t,n){"use strict";var c=n(10),r=(n(0),n(881)),a=n(1);t.a=function(e){return Object(a.jsx)(r.a,Object(c.a)({fontSize:"14px",lineHeight:"1.1",color:"textSubtle",prefix:"~$",bold:!1,decimals:2},e))}},956:function(e,t,n){var c=n(479),r=n(480),a=n(132);e.exports=function(e){return e&&e.length?c(e,a,r):void 0}}}]);
//# sourceMappingURL=9.568f9c03.chunk.js.map