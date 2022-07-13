(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[22],{1365:function(e,t,n){"use strict";n.r(t);var r,c,a,i,s,o,l,d,b,j,u,f,O,p,x,h=n(10),m=n(1),v=n(4),g=n(2),w=n(13),k=n(238),y=n(258),C=n.n(y),S=n(43),I=n(154),N=n(69),T=n(364),F=n(811),q=n(3),P=n.n(q),A=n(12),D=n(9),E=n(181),W=v.e.div(r||(r=Object(h.a)(["\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n"]))),G=n(65),J=n(241),L=n(93),Y=n(42),z=n(0),Q=Object(v.e)(g.hc)(c||(c=Object(h.a)(["\n  font-weight: 600;\n"]))),U=v.e.div(a||(a=Object(h.a)(["\n  margin-bottom: 16px;\n"]))),_=v.e.div(i||(i=Object(h.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 8px;\n"]))),B=v.e.label(s||(s=Object(h.a)(["\n  color: ",";\n  display: block;\n  margin-bottom: 8px;\n  margin-top: 24px;\n"])),(function(e){return e.theme.colors.text})),R=function(e){var t=e.nft,n=e.tokenIds,r=e.onSuccess,c=e.onDismiss,a=Object(m.useState)(!1),i=Object(D.a)(a,2),s=i[0],o=i[1],l=Object(m.useState)(""),d=Object(D.a)(l,2),b=d[0],j=d[1],u=Object(m.useState)(null),f=Object(D.a)(u,2),O=f[0],p=f[1],x=Object(w.b)().t,h=Object(S.c)().account,v=Object(Y.i)(Object(J.a)(t.type)),k=Object(L.a)().toastSuccess,y=function(){var e=Object(A.a)(P.a.mark((function e(){var t;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,G.a.utils.isAddress(b)){e.next=6;break}p(x("Please enter a valid wallet address")),e.next=14;break;case 6:return e.next=8,v.transferFrom(h,b,n[0]);case 8:return t=e.sent,o(!0),e.next=12,t.wait();case 12:e.sent.status?(c(),r(),k(x("NFT successfully transferred!"))):(p(x("Unable to transfer NFT")),o(!1));case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),console.error("Unable to transfer NFT:",e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(){return e.apply(this,arguments)}}();return Object(z.jsxs)(g.vb,{title:x("Transfer NFT"),onDismiss:c,children:[Object(z.jsxs)(U,{children:[O&&Object(z.jsx)(g.hc,{color:"failure",mb:"8px",children:O}),Object(z.jsxs)(W,{children:[Object(z.jsxs)(g.hc,{children:[x("Transferring"),":"]}),Object(z.jsx)(Q,{children:x("1x %nftName% NFT",{nftName:t.name})})]}),Object(z.jsxs)(B,{htmlFor:"transferAddress",children:[x("Receiving address"),":"]}),Object(z.jsx)(g.eb,{id:"transferAddress",name:"address",type:"text",placeholder:x("Paste address"),value:b,onChange:function(e){var t=e.target.value;j(t)},isWarning:O,disabled:s})]}),Object(z.jsxs)(_,{children:[Object(z.jsx)(g.q,{width:"100%",variant:"secondary",onClick:c,children:x("Cancel")}),Object(z.jsx)(g.q,{width:"100%",onClick:y,disabled:!h||s||!b,children:x("Confirm")})]})]})},H=v.e.div(o||(o=Object(h.a)(["\n  margin-bottom: 16px;\n"]))),K=v.e.div(l||(l=Object(h.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 8px;\n"]))),M=function(e){var t=e.nft,n=e.onSuccess,r=e.onClaim,c=e.onDismiss,a=Object(m.useState)(!1),i=Object(D.a)(a,2),s=i[0],o=i[1],l=Object(w.b)().t,d=Object(S.c)().account,b=Object(L.a)(),j=b.toastError,u=b.toastSuccess,f=function(){var e=Object(A.a)(P.a.mark((function e(){var t;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r();case 2:return t=e.sent,o(!0),e.next=6,t.wait();case 6:e.sent.status?(u(l("Successfully claimed!")),c(),n()):(j(l("Error"),l("Please try again. Confirm the transaction and make sure you are paying enough gas!")),o(!1));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(z.jsxs)(g.vb,{title:l("Claim Collectible"),onDismiss:c,children:[Object(z.jsx)(H,{children:Object(z.jsxs)(g.W,{alignItems:"center",mb:"8px",justifyContent:"space-between",children:[Object(z.jsxs)(g.hc,{children:[l("You will receive"),":"]}),Object(z.jsx)(g.hc,{bold:!0,children:l("1x %nftName% Collectible",{nftName:t.name})})]})}),Object(z.jsxs)(K,{children:[Object(z.jsx)(g.q,{width:"100%",variant:"secondary",onClick:c,children:l("Cancel")}),Object(z.jsx)(g.q,{width:"100%",onClick:f,disabled:!d,isLoading:s,endIcon:s?Object(z.jsx)(g.h,{color:"currentColor",spin:!0}):null,children:l("Confirm")})]})]})},V=v.e.div(d||(d=Object(h.a)(["\n  background-color: ",";\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  padding-bottom: 100%;\n"])),(function(e){return e.theme.colors.cardBorder})),X=v.e.img(b||(b=Object(h.a)(["\n  position: absolute;\n  width: 100%;\n  top: 0;\n  left: 0;\n  transition: opacity 1s linear;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 24px 24px 0 0;\n"]))),Z=v.e.video(j||(j=Object(h.a)(["\n  height: 100%;\n  width: 100%;\n"]))),$=function(e){var t=e.nft,n=e.isOwned,r=void 0!==n&&n,c=t.images,a=t.name,i=t.video,s="/images/nfts/".concat(c.lg);if(i){var o=Object(z.jsxs)(Z,{autoPlay:!0,controls:!1,loop:!0,muted:!0,poster:s,children:[Object(z.jsx)("source",{src:i.webm,type:"video/webm"}),Object(z.jsx)("source",{src:i.mp4,type:"video/mp4"})]});return r?Object(z.jsx)("a",{href:c.ipfs,target:"_blank",rel:"noreferrer noopener",children:o}):o}var l=Object(z.jsx)(X,{src:s,alt:a});return Object(z.jsx)(V,{children:r?Object(z.jsx)("a",{href:c.ipfs,target:"_blank",rel:"noreferrer noopener",children:l}):l})},ee=Object(v.e)(W)(u||(u=Object(h.a)(["\n  min-height: 28px;\n"]))),te=Object(v.e)(g.q).attrs({variant:"text"})(f||(f=Object(h.a)(["\n  height: auto;\n  padding: 16px 24px;\n\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n\n  &:focus:not(:active) {\n    box-shadow: none;\n  }\n"]))),ne=v.e.div(O||(O=Object(h.a)(["\n  padding: 24px;\n"]))),re=function(e){var t,n=e.nft,r=e.canClaim,c=void 0!==r&&r,a=e.tokenIds,i=void 0===a?[]:a,s=e.onClaim,o=e.refresh,l=Object(m.useState)(!1),d=Object(D.a)(l,2),b=d[0],j=d[1],u=Object(w.b)().t,f=Object(E.b)().profile,O=n.identifier,p=n.name,x=n.description,h=i.length>0,v=b?g.J:g.G,k=function(){var e=Object(A.a)(P.a.mark((function e(){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:j(!b);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){o()},C=Object(g.Gc)(Object(z.jsx)(R,{nft:n,tokenIds:i,onSuccess:y})),S=Object(D.a)(C,1)[0],I=Object(g.Gc)(Object(z.jsx)(M,{nft:n,onSuccess:y,onClaim:s})),N=Object(D.a)(I,1)[0];return Object(z.jsxs)(g.u,{isActive:h,children:[Object(z.jsx)($,{nft:n,isOwned:h}),Object(z.jsxs)(g.v,{children:[Object(z.jsxs)(ee,{children:[Object(z.jsx)(g.Y,{children:p}),h&&Object(z.jsx)(g.fc,{outline:!0,variant:"secondary",children:u("In Wallet")}),(null===f||void 0===f||null===(t=f.nft)||void 0===t?void 0:t.identifier)===O&&Object(z.jsx)(g.fc,{outline:!0,variant:"success",children:u("Profile Pic")})]}),c&&Object(z.jsx)(g.q,{width:"100%",mt:"24px",onClick:N,children:u("Claim this NFT")}),h&&Object(z.jsx)(g.q,{width:"100%",variant:"secondary",mt:"24px",onClick:S,children:u("Transfer")})]}),Object(z.jsxs)(g.w,{p:"0",children:[Object(z.jsx)(te,{width:"100%",endIcon:Object(z.jsx)(v,{width:"24px",color:"primary"}),onClick:k,children:u("Details")}),b&&Object(z.jsx)(ne,{children:Object(z.jsx)(g.hc,{as:"p",color:"textSubtle",style:{textAlign:"center"},children:u(x)})})]})]})},ce=v.e.div(p||(p=Object(h.a)(["\n  display: grid;\n  grid-gap: 32px;\n  grid-template-columns: 1fr;\n  padding-bottom: 24px;\n  padding-top: 24px;\n\n  "," {\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  "," {\n    grid-template-columns: repeat(3, 1fr);\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.md})),ae=n(6),ie=n(50),se=["nft"],oe={"easter-storm":1,"easter-flipper":2,"easter-caker":3},le=function(e){var t=e.nft,n=Object(ie.a)(e,se),r=Object(m.useState)(!1),c=Object(D.a)(r,2),a=c[0],i=c[1],s=Object(S.c)().account,o=Object(E.b)().profile,l=t.identifier,d=(null!==o&&void 0!==o?o:{}).team,b=Object(Y.j)(),j=function(){var e=Object(A.a)(P.a.mark((function e(){var t;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.mintNFT();case 2:return t=e.sent,e.next=5,t.wait();case 5:return e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.useEffect)((function(){s&&d&&function(){var e=Object(A.a)(P.a.mark((function e(){var t;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.canClaim(s);case 2:t=e.sent,i(!!t&&d.id===oe[l]);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[s,l,d,b,i]),Object(z.jsx)(re,Object(ae.a)(Object(ae.a)({nft:t},n),{},{canClaim:a,onClaim:j}))},de={"easter-storm":le,"easter-flipper":le,"easter-caker":le},be=function(){var e=Object(F.a)().tokenIds,t=Object(N.b)(),n=Object(S.c)().account,r=function(){t(Object(T.b)(n))};return Object(z.jsx)(ce,{children:C()(I.b,"sortOrder").map((function(t){var n=de[t.identifier]||re;return Object(z.jsx)("div",{children:Object(z.jsx)(n,{nft:t,tokenIds:e[t.identifier],refresh:r})},t.name)}))})},je=v.e.div(x||(x=Object(h.a)(["\n  border-bottom: 2px solid ",";\n  margin-bottom: 24px;\n  padding-bottom: 32px;\n"])),(function(e){return e.theme.colors.textSubtle}));t.default=function(){var e=Object(w.b)().t;return Object(z.jsxs)(k.a,{children:[Object(z.jsx)(je,{children:Object(z.jsx)(g.Y,{as:"h1",scale:"xxl",color:"secondary",children:e("Pancake Collectibles")})}),Object(z.jsx)(be,{})]})}},811:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(1),c=n(43),a=n(33),i=n(69),s=n(154),o=n(364),l=function(){var e=Object(c.c)().account,t=Object(i.b)(),n=Object(a.c)((function(e){return e.collectibles})),l=n.isInitialized,d=n.isLoading,b=n.data,j=Object.keys(b);return Object(r.useEffect)((function(){l||t(Object(o.b)(e))}),[l,e,t]),{isInitialized:l,isLoading:d,tokenIds:b,nftsInWallet:s.b.filter((function(e){return j.includes(e.identifier)}))}}}}]);
//# sourceMappingURL=22.f250d22d.chunk.js.map