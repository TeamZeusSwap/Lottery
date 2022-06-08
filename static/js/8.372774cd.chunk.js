(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[8],{1363:function(e,t,n){"use strict";n.r(t);var c,r,o,a=n(3),s=n.n(a),i=n(12),l=n(1),b=n(2),j=n(43),u=n(74),d=n(87),x=n(69),p=n(64),h=n(814),O=n(366),f=n(13),m=n(237),v=n(893),g=n(363),w=n(785),S=n(829),k=n(858),y=n(10),C=n(4),B=n(758),I=n(36),A=n(782),L=n(787),V=n(0),D=Object(C.e)(b.m)(c||(c=Object(y.a)(["\n  background-color: ",";\n  border: 1px solid ",";\n  border-radius: 16px;\n"])),(function(e){return e.theme.colors.background}),(function(e){return e.theme.colors.cardBorder})),P=function(e){var t=e.proposal,n=Object(f.b)().t,c=new Date(1e3*t.start),r=new Date(1e3*t.end);return Object(V.jsxs)(b.u,{mb:"16px",children:[Object(V.jsx)(b.x,{children:Object(V.jsx)(b.Y,{as:"h3",scale:"md",children:n("Details")})}),Object(V.jsxs)(b.v,{children:[Object(V.jsxs)(b.W,{alignItems:"center",mb:"8px",children:[Object(V.jsx)(b.hc,{color:"textSubtle",children:n("Identifier")}),Object(V.jsx)(b.ib,{href:"".concat(L.b,"/").concat(t.id),ml:"8px",children:t.id.slice(0,8)})]}),Object(V.jsxs)(b.W,{alignItems:"center",mb:"8px",children:[Object(V.jsx)(b.hc,{color:"textSubtle",children:n("Creator")}),Object(V.jsx)(b.ib,{href:Object(I.e)(t.author,"address"),ml:"8px",children:Object(A.a)(t.author)})]}),Object(V.jsxs)(b.W,{alignItems:"center",mb:"16px",children:[Object(V.jsx)(b.hc,{color:"textSubtle",children:n("Snapshot")}),Object(V.jsx)(b.ib,{href:Object(I.e)(t.snapshot,"block"),ml:"8px",children:t.snapshot})]}),Object(V.jsxs)(D,{p:"16px",children:[Object(V.jsx)(S.a,{proposalState:t.state,mb:"8px"}),Object(V.jsxs)(b.W,{alignItems:"center",children:[Object(V.jsx)(b.hc,{color:"textSubtle",fontSize:"14px",children:n("Start Date")}),Object(V.jsx)(b.hc,{ml:"8px",children:Object(B.default)(c,"yyyy-MM-dd HH:mm")})]}),Object(V.jsxs)(b.W,{alignItems:"center",children:[Object(V.jsx)(b.hc,{color:"textSubtle",fontSize:"14px",children:n("End Date")}),Object(V.jsx)(b.hc,{ml:"8px",children:Object(B.default)(r,"yyyy-MM-dd HH:mm")})]})]})]})]})},E=n(815),N=n.n(E),W=Object(C.e)(b.hc)(r||(r=Object(y.a)(["\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"]))),z=function(e){var t=e.choices,n=e.votes,c=Object(f.b)().t,r=Object(w.a)(n),o=Object(h.e)(),a=Object(j.c)().account,s=Object(w.f)(n);return Object(V.jsxs)(b.u,{children:[Object(V.jsx)(b.x,{children:Object(V.jsx)(b.Y,{as:"h3",scale:"md",children:c("Current Results")})}),Object(V.jsxs)(b.v,{children:[o===p.g.IDLE&&t.map((function(e,t){var n=r[e]||[],o=Object(w.f)(n),i=s.eq(0)?0:o.div(s).times(100).toNumber(),l=n.some((function(e){return a&&e.voter.toLowerCase()===a.toLowerCase()}));return Object(V.jsxs)(b.m,{mt:t>0?"24px":"0px",children:[Object(V.jsxs)(b.W,{alignItems:"center",mb:"8px",children:[Object(V.jsx)(W,{mb:"4px",title:e,children:e}),l&&Object(V.jsxs)(b.fc,{variant:"success",outline:!0,ml:"8px",children:[Object(V.jsx)(b.E,{mr:"4px"})," ",c("Voted")]})]}),Object(V.jsx)(b.m,{mb:"4px",children:Object(V.jsx)(b.Nb,{primaryStep:i,scale:"sm"})}),Object(V.jsxs)(b.W,{alignItems:"center",justifyContent:"space-between",children:[Object(V.jsx)(b.hc,{color:"textSubtle",children:c("%total% Votes",{total:o.toFormat(3)})}),Object(V.jsxs)(b.hc,{children:[i.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),"%"]})]})]},e)})),o===p.g.LOADING&&N()(t.length).map((function(e,t){return Object(V.jsx)(b.m,{mt:t>0?"24px":"0px",children:Object(V.jsx)(b.Sb,{height:"36px",mb:"4px"})},e)}))]})]})},T=n(6),F=n(9),M=n(50),H=n(93),Y=n(103),q=n(18),G=n(189),J=n(23),K=n(95);!function(e){e.MAIN="main",e.DETAILS="details"}(o||(o={}));var Q,R,_,U,X,Z,$,ee,te=n(836),ne=function(e){var t=e.vote,n=e.total,c=e.isPending,r=e.isLoading,o=e.onConfirm,a=e.onViewDetails,s=e.onDismiss,i=Object(f.b)().t;return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsxs)(te.a,{children:[Object(V.jsx)(b.hc,{color:"secondary",mb:"8px",textTransform:"uppercase",fontSize:"12px",bold:!0,children:i("Voting For")}),Object(V.jsx)(W,{bold:!0,fontSize:"20px",mb:"8px",title:t.label,children:t.label}),Object(V.jsx)(b.hc,{color:"secondary",mb:"8px",textTransform:"uppercase",fontSize:"12px",bold:!0,children:i("Your Voting Power")}),r?Object(V.jsx)(b.Sb,{height:"64px",mb:"24px"}):Object(V.jsxs)(te.b,{onClick:a,style:{cursor:"pointer"},children:[Object(V.jsx)(b.hc,{bold:!0,fontSize:"20px",children:n.toFormat(3)}),Object(V.jsx)(b.bb,{scale:"sm",variant:"text",children:Object(V.jsx)(b.I,{width:"24px"})})]}),Object(V.jsx)(b.hc,{as:"p",color:"textSubtle",fontSize:"14px",children:i("Are you sure you want to vote for the above choice? This action cannot be undone.")})]}),Object(V.jsx)(b.q,{isLoading:c,endIcon:c?Object(V.jsx)(b.h,{spin:!0,color:"currentColor"}):null,disabled:r||n.eq(0),width:"100%",mb:"8px",onClick:o,children:i("Confirm Vote")}),Object(V.jsx)(b.q,{variant:"secondary",width:"100%",onClick:s,children:i("Cancel")})]})},ce=n(859),re=n(860),oe=function(e){var t,n=e.onSuccess,c=e.proposalId,r=e.vote,a=e.block,u=e.onDismiss,d=Object(l.useState)(o.MAIN),x=Object(F.a)(d,2),h=x[0],O=x[1],m=Object(l.useState)(!0),v=Object(F.a)(m,2),g=v[0],S=v[1],k=Object(l.useState)(!1),y=Object(F.a)(k,2),C=y[0],B=y[1],I=Object(j.c)().account,A=Object(f.b)().t,L=Object(H.a)().toastError,D=Object(J.a)().library,P=Object(K.a)().theme,E=Object(re.a)(a,g),N=E.isLoading,W=E.total,z=E.cakeBalance,M=E.cakeVaultBalance,Y=E.cakePoolBalance,Q=E.poolsBalance,R=E.cakeBnbLpBalance,_=E.verificationHash,U=h===o.MAIN,X=U?null:function(){return O(o.MAIN)},Z=(t={},Object(q.a)(t,o.MAIN,A("Confirm Vote")),Object(q.a)(t,o.DETAILS,A("Voting Power")),t),$=function(){S(!1),u()},ee=function(){var e=Object(i.a)(s.a.mark((function e(){var t,o,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,B(!0),t=JSON.stringify(Object(T.a)(Object(T.a)({},Object(w.e)()),{},{type:p.f.VOTE,payload:{proposal:c,choice:r.value,metadata:{votingPower:W.toString(),verificationHash:_}}})),e.next=5,Object(G.c)(D,I,t);case 5:return o=e.sent,a={address:I,msg:t,sig:o},e.next=9,Object(w.i)(a);case 9:return B(!1),e.next=12,n();case 12:$(),e.next=20;break;case 15:e.prev=15,e.t0=e.catch(0),B(!1),L(A("Error"),null===e.t0||void 0===e.t0?void 0:e.t0.message),console.error(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}();return Object(V.jsx)(b.vb,{title:Z[h],onBack:X,onDismiss:u,hideCloseButton:!U,headerBackground:P.colors.gradients.cardHeader,children:Object(V.jsxs)(b.m,{mb:"24px",width:"320px",children:[h===o.MAIN&&Object(V.jsx)(ne,{vote:r,isLoading:N,isPending:C,total:W,onConfirm:ee,onViewDetails:function(){return O(o.DETAILS)},onDismiss:$}),h===o.DETAILS&&Object(V.jsx)(ce.a,{total:W,cakeBalance:z,cakeVaultBalance:M,cakePoolBalance:Y,poolsBalance:Q,cakeBnbLpBalance:R})]})})},ae=["proposal"],se=C.e.label(Q||(Q=Object(y.a)(["\n  align-items: center;\n  border: 1px solid ",";\n  border-radius: 16px;\n  cursor: ",";\n  display: flex;\n  margin-bottom: 16px;\n  padding: 16px;\n"])),(function(e){var t=e.theme,n=e.isChecked;return t.colors[n?"success":"cardBorder"]}),(function(e){return e.isDisabled?"not-allowed":"pointer"})),ie=C.e.div(R||(R=Object(y.a)(["\n  flex: 1;\n  padding-left: 16px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 0;\n"]))),le=function(e){var t=e.proposal,n=Object(M.a)(e,ae),c=Object(l.useState)(null),r=Object(F.a)(c,2),o=r[0],a=r[1],u=Object(f.b)().t,d=Object(H.a)().toastSuccess,p=Object(x.b)(),h=Object(j.c)().account,m=function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d(u("Vote cast!")),p(Object(O.d)({proposalId:t.id,block:Number(t.snapshot)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=Object(b.Gc)(Object(V.jsx)(oe,{onSuccess:m,proposalId:t.id,vote:o,block:Number(t.snapshot)})),g=Object(F.a)(v,1)[0];return Object(V.jsxs)(b.u,Object(T.a)(Object(T.a)({},n),{},{children:[Object(V.jsx)(b.x,{children:Object(V.jsx)(b.Y,{as:"h3",scale:"md",children:u("Cast your vote")})}),Object(V.jsxs)(b.v,{children:[t.choices.map((function(e,t){var n=t+1===(null===o||void 0===o?void 0:o.value);return Object(V.jsxs)(se,{isChecked:n,isDisabled:!h,children:[Object(V.jsx)("div",{style:{flexShrink:0},children:Object(V.jsx)(b.Pb,{scale:"sm",value:e,checked:n,onChange:function(){a({label:e,value:t+1})},disabled:!h})}),Object(V.jsx)(ie,{children:Object(V.jsx)(b.hc,{as:"span",title:e,children:e})})]},e)})),h?Object(V.jsx)(b.q,{onClick:g,disabled:null===o,children:u("Cast Vote")}):Object(V.jsx)(Y.a,{})]})]}))},be=n(258),je=n.n(be),ue=Object(C.e)(b.W)(_||(_=Object(y.a)(["\n  border-bottom: 1px solid ",";\n  padding: 16px 24px;\n"])),(function(e){return e.theme.colors.cardBorder})),de=Object(C.e)(b.Sb)(U||(U=Object(y.a)(["\n  flex: 1;\n"]))),xe=function(){return Object(V.jsx)(b.m,{children:N()(10).map((function(e){return Object(V.jsxs)(ue,{children:[Object(V.jsx)(b.Sb,{height:"21px",mr:"32px",width:"100px"}),Object(V.jsx)(de,{height:"21px",mr:"32px",width:"100%"}),Object(V.jsx)(de,{height:"21px",width:"100%"})]},e)}))})},pe=n(14),he=n.n(pe),Oe=Object(C.e)(b.m).attrs({alignItems:"center"})(X||(X=Object(y.a)(["\n  grid-area: address;\n"]))),fe=Object(C.e)(b.m)(Z||(Z=Object(y.a)(["\n  grid-area: choice;\n  overflow: hidden;\n"]))),me=Object(C.e)(b.m)($||($=Object(y.a)(["\n  justify-self: end;\n  grid-area: vote;\n"]))),ve=Object(C.e)(b.X)(ee||(ee=Object(y.a)(["\n  border-bottom: 1px solid ",";\n  grid-gap: 8px;\n  grid-template-areas: 'address choice vote';\n  grid-template-columns: minmax(110px, 200px) 1fr 1fr;\n  padding: 8px 16px;\n\n  "," {\n    grid-gap: 16px;\n    padding: 16px 24px;\n  }\n"])),(function(e){return e.theme.colors.cardBorder}),(function(e){return e.theme.mediaQueries.sm})),ge=function(e){var t,n=e.vote,c=e.isVoter,r=Object(f.b)().t,o=!!(null===(t=n.metadata)||void 0===t?void 0:t.votingPower),a=o?new he.a(n.metadata.votingPower).toFormat(3):"--";return Object(V.jsxs)(ve,{children:[Object(V.jsx)(Oe,{children:Object(V.jsxs)(b.W,{alignItems:"center",children:[Object(V.jsx)(b.ib,{href:Object(I.e)(n.voter,"address"),children:Object(A.a)(n.voter)}),c&&Object(V.jsxs)(b.fc,{variant:"success",outline:!0,ml:"8px",children:[Object(V.jsx)(b.E,{mr:"4px"})," ",r("Voted")]})]})}),Object(V.jsx)(fe,{children:Object(V.jsx)(W,{title:n.proposal.choices[n.choice-1],children:n.proposal.choices[n.choice-1]})}),Object(V.jsx)(me,{children:Object(V.jsxs)(b.W,{alignItems:"center",justifyContent:"end",children:[Object(V.jsx)(b.hc,{title:n.metadata.votingPower,children:a}),o&&Object(V.jsx)(b.ib,{href:"".concat(L.b,"/").concat(n.id)})]})})]})},we=function(e){var t;return parseFloat(null===e||void 0===e||null===(t=e.metadata)||void 0===t?void 0:t.votingPower)},Se=function(e){var t=e.votes,n=Object(l.useState)(!1),c=Object(F.a)(n,2),r=c[0],o=c[1],a=Object(f.b)().t,s=Object(j.c)().account,i=je()(t,[we,"created"],["desc","desc"]),u=r?i:i.slice(0,20),d=Object(h.e)()===p.g.IDLE;return Object(V.jsxs)(b.u,{children:[Object(V.jsx)(b.x,{children:Object(V.jsxs)(b.W,{alignItems:"center",justifyContent:"space-between",children:[Object(V.jsx)(b.Y,{as:"h3",scale:"md",children:a("Votes (%count%)",{count:t.length.toLocaleString()})}),!d&&Object(V.jsx)(b.h,{spin:!0,width:"22px"})]})}),!d&&Object(V.jsx)(xe,{}),d&&u.length>0&&Object(V.jsxs)(V.Fragment,{children:[Object(V.jsxs)(ve,{children:[Object(V.jsx)(Oe,{children:Object(V.jsx)(b.hc,{fontSize:"12px",color:"textSubtle",textTransform:"uppercase",bold:!0,children:a("Voter")})}),Object(V.jsx)(fe,{children:Object(V.jsx)(b.hc,{fontSize:"12px",color:"textSubtle",textTransform:"uppercase",bold:!0,children:a("Decision")})}),Object(V.jsx)(me,{children:Object(V.jsx)(b.hc,{fontSize:"12px",color:"textSubtle",textTransform:"uppercase",bold:!0,children:a("Vote Weight")})})]}),u.map((function(e){var t=s&&e.voter.toLowerCase()===s.toLowerCase();return Object(V.jsx)(ge,{vote:e,isVoter:t},e.id)})),Object(V.jsx)(b.W,{alignItems:"center",justifyContent:"center",py:"8px",px:"24px",children:Object(V.jsx)(b.q,{width:"100%",onClick:function(){o(!r)},variant:"text",endIcon:r?Object(V.jsx)(b.J,{color:"primary",width:"21px"}):Object(V.jsx)(b.G,{color:"primary",width:"21px"}),disabled:!d,children:a(r?"Hide":"See All")})})]}),d&&0===u.length&&Object(V.jsx)(b.W,{alignItems:"center",justifyContent:"center",py:"32px",children:Object(V.jsx)(b.Y,{as:"h5",children:a("No votes found")})})]})};t.default=function(){var e=Object(u.i)().id,t=Object(h.a)(e),n=Object(f.b)().t,c=Object(j.c)().account,r=Object(x.b)(),o=Object(h.d)(e),a=Object(h.e)(),y=Object(h.b)(),C=c&&o.some((function(e){return e.voter.toLowerCase()===c.toLowerCase()})),B=null!==t&&void 0!==t?t:{},I=B.id,A=void 0===I?null:I,L=B.snapshot,D=void 0===L?null:L,E=a===p.g.LOADING||y===p.g.LOADING;return Object(l.useEffect)((function(){r(Object(O.b)(e))}),[e,r]),Object(l.useEffect)((function(){A&&D&&function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(Object(O.d)({proposalId:A,block:Number(D)}));case 2:r(Object(O.e)({proposalId:A,snapshot:D}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[A,D,r]),t?Object(V.jsxs)(m.a,{py:"40px",children:[Object(V.jsx)(b.m,{mb:"40px",children:Object(V.jsx)(b.q,{as:d.a,to:"/voting",variant:"text",startIcon:Object(V.jsx)(b.b,{color:"primary",width:"24px"}),px:"0",children:n("Back to Vote Overview")})}),Object(V.jsxs)(k.a,{children:[Object(V.jsxs)(b.m,{children:[Object(V.jsxs)(b.m,{mb:"32px",children:[Object(V.jsxs)(b.W,{alignItems:"center",mb:"8px",children:[Object(V.jsx)(S.a,{proposalState:t.state}),Object(V.jsx)(S.b,{isCoreProposal:Object(w.h)(t),ml:"8px"})]}),Object(V.jsx)(b.Y,{as:"h1",scale:"xl",mb:"16px",children:t.title}),Object(V.jsx)(b.m,{children:Object(V.jsx)(v.a,{children:t.body})})]}),!E&&!C&&t.state===p.d.ACTIVE&&Object(V.jsx)(le,{proposal:t,mb:"16px"}),Object(V.jsx)(Se,{votes:o})]}),Object(V.jsxs)(b.m,{children:[Object(V.jsx)(P,{proposal:t}),Object(V.jsx)(z,{choices:t.choices,votes:o})]})]})]}):Object(V.jsx)(g.a,{})}},782:function(e,t,n){"use strict";t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:4;return"".concat(e.substring(0,t),"...").concat(e.substring(e.length-n))}},785:function(e,t,n){"use strict";n.d(t,"h",(function(){return O})),n.d(t,"c",(function(){return f})),n.d(t,"b",(function(){return m})),n.d(t,"d",(function(){return v})),n.d(t,"e",(function(){return g})),n.d(t,"i",(function(){return w})),n.d(t,"g",(function(){return S})),n.d(t,"a",(function(){return k})),n.d(t,"f",(function(){return y}));var c=n(18),r=n(37),o=n(6),a=n(3),s=n.n(a),i=n(12),l=n(14),b=n.n(l),j=n(22),u=n(99),d=n(30),x=n(64),p=n(94),h=n(787),O=function(e){return e.author.toLowerCase()===h.a.toLowerCase()},f=function(e,t){switch(t){case x.e.COMMUNITY:return e.filter((function(e){return!O(e)}));case x.e.CORE:return e.filter((function(e){return O(e)}));case x.e.ALL:default:return e}},m=function(e,t){return e.filter((function(e){return e.state===t}))},v=function(){return{plugins:{},network:56,strategies:[{name:"cake",params:{symbol:"CAKE",address:Object(j.f)(),decimals:18}}]}},g=function(){return{version:h.e,timestamp:(Date.now()/1e3).toFixed(),space:h.c}},w=function(){var e=Object(i.a)(s.a.mark((function e(t){var n,c,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(u.e,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)});case 2:if((n=e.sent).ok){e.next=8;break}return e.next=6,n.json();case 6:throw c=e.sent,new Error(null===c||void 0===c?void 0:c.error_description);case 8:return e.next=10,n.json();case 10:return r=e.sent,e.abrupt("return",r);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(i.a)(s.a.mark((function e(t,n,c){var r,o,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=c,e.t0){e.next=5;break}return e.next=4,p.a.getBlockNumber();case 4:e.t0=e.sent;case 5:return r=e.t0,e.next=8,fetch("".concat(u.f,"/power"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({address:t,block:r,poolAddresses:n})});case 8:return o=e.sent,e.next=11,o.json();case 11:return a=e.sent,e.abrupt("return",a.data);case 13:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}(),k=function(e){return e.reduce((function(e,t){var n=t.proposal.choices[t.choice-1];return Object(o.a)(Object(o.a)({},e),{},Object(c.a)({},n,e[n]?[].concat(Object(r.a)(e[n]),[t]):[t]))}),{})},y=function(e){return e.reduce((function(e,t){var n,c=new b.a(null===(n=t.metadata)||void 0===n?void 0:n.votingPower);return e.plus(c)}),d.d)}},787:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"e",(function(){return a})),n.d(t,"c",(function(){return s})),n.d(t,"f",(function(){return i}));var c=10,r="0x6eaf1b33b8672c5dc40aB8f4bA3A0111723126c7",o="https://gateway.ipfs.io/ipfs",a="0.1.3",s="cake.eth",i=10},814:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return s})),n.d(t,"b",(function(){return i}));var c=n(33),r=function(){var e=Object(c.c)((function(e){return e.voting.proposals}));return Object.values(e)},o=function(e){return Object(c.c)((function(t){return t.voting.proposals[e]}))},a=function(e){var t=Object(c.c)((function(t){return t.voting.votes[e]}));return t?t.filter((function(e){return!0!==e._inValid})):[]},s=function(){return Object(c.c)((function(e){return e.voting.voteLoadingStatus}))},i=function(){return Object(c.c)((function(e){return e.voting.proposalLoadingStatus}))}},829:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return j}));var c=n(6),r=n(50),o=(n(1),n(187)),a=n(64),s=n(0),i=["proposalState"],l=["isCoreProposal"],b=function(e){var t=e.proposalState,n=Object(r.a)(e,i);return t===a.d.ACTIVE?Object(s.jsx)(o.h,Object(c.a)({},n)):t===a.d.PENDING?Object(s.jsx)(o.g,Object(c.a)({},n)):Object(s.jsx)(o.a,Object(c.a)({},n))},j=function(e){var t=e.isCoreProposal,n=Object(r.a)(e,l);return t?Object(s.jsx)(o.d,Object(c.a)({},n)):Object(s.jsx)(o.b,Object(c.a)({},n))}},836:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return b}));var c,r=n(6),o=n(10),a=(n(1),n(2)),s=n(4),i=n(0),l=s.e.div(c||(c=Object(o.a)(["\n  align-items: center;\n  border: 1px solid ",";\n  border-radius: 12px;\n  display: flex;\n  height: 64px;\n  justify-content: space-between;\n  margin-bottom: 24px;\n  padding: 0 16px;\n"])),(function(e){return e.theme.colors.cardBorder})),b=function(e){return Object(i.jsx)(a.m,Object(r.a)({mb:"24px",maxWidth:"320px"},e))}},858:function(e,t,n){"use strict";var c,r=n(10),o=n(4).e.div(c||(c=Object(r.a)(["\n  align-items: start;\n  display: grid;\n  grid-gap: 32px;\n  grid-template-columns: minmax(0, 1fr);\n\n  "," {\n    grid-template-columns: 1fr 332px;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg}));t.a=o},859:function(e,t,n){"use strict";n(1);var c=n(2),r=n(13),o=n(836),a=n(0);t.a=function(e){var t=e.total,n=e.cakeBalance,s=e.cakeVaultBalance,i=e.cakePoolBalance,l=e.poolsBalance,b=e.cakeBnbLpBalance,j=Object(r.b)().t;return Object(a.jsxs)(o.a,{mb:"0",children:[Object(a.jsx)(c.hc,{as:"p",mb:"24px",fontSize:"14px",color:"textSubtle",children:j("Your voting power is determined by the amount of CAKE you held at the block detailed below. CAKE held in other places does not contribute to your voting power.")}),Object(a.jsx)(c.hc,{color:"secondary",textTransform:"uppercase",mb:"4px",bold:!0,fontSize:"14px",children:j("Overview")}),Object(a.jsxs)(o.b,{children:[Object(a.jsx)(c.hc,{color:"secondary",children:j("Your Voting Power")}),Object(a.jsx)(c.hc,{bold:!0,fontSize:"20px",children:t.toFormat(3)})]}),Object(a.jsx)(c.hc,{color:"secondary",textTransform:"uppercase",mb:"4px",bold:!0,fontSize:"14px",children:j("Your Cake Held Now")}),Object(a.jsxs)(c.W,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(a.jsx)(c.hc,{color:"textSubtle",fontSize:"16px",children:j("Wallet")}),Object(a.jsx)(c.hc,{textAlign:"right",children:n.toFormat(3)})]}),Object(a.jsxs)(c.W,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(a.jsx)(c.hc,{color:"textSubtle",fontSize:"16px",children:j("Manual CAKE Pool")}),Object(a.jsx)(c.hc,{textAlign:"right",children:i.toFormat(3)})]}),Object(a.jsxs)(c.W,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(a.jsx)(c.hc,{color:"textSubtle",fontSize:"16px",children:j("Auto CAKE Pool")}),Object(a.jsx)(c.hc,{textAlign:"right",children:s.toFormat(3)})]}),Object(a.jsxs)(c.W,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(a.jsx)(c.hc,{color:"textSubtle",fontSize:"16px",children:j("Other Syrup Pools")}),Object(a.jsx)(c.hc,{textAlign:"right",children:l.toFormat(3)})]}),Object(a.jsxs)(c.W,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(a.jsx)(c.hc,{color:"textSubtle",fontSize:"16px",children:j("CAKE BNB LP")}),Object(a.jsx)(c.hc,{textAlign:"right",children:b.toFormat(3)})]})]})}},860:function(e,t,n){"use strict";var c=n(3),r=n.n(c),o=n(6),a=n(12),s=n(9),i=n(1),l=n(43),b=n(30),j=n(183),u=n(22),d=n(94),x=n(14),p=n.n(x),h=n(785),O={verificationHash:null,cakeBalance:b.d,cakeVaultBalance:b.d,cakePoolBalance:b.d,poolsBalance:b.d,cakeBnbLpBalance:b.d,total:b.d};t.a=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=Object(l.c)(),c=n.account,b=Object(i.useState)(O),x=Object(s.a)(b,2),f=x[0],m=x[1],v=Object(i.useState)(!!c),g=Object(s.a)(v,2),w=g[0],S=g[1];return Object(i.useEffect)((function(){c&&t&&function(){var n=Object(a.a)(r.a.mark((function n(){var a,s,i,l,b,x,O,f,v,g,w;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(S(!0),n.prev=1,n.t0=e,n.t0){n.next=7;break}return n.next=6,d.a.getBlockNumber();case 6:n.t0=n.sent;case 7:return a=n.t0,n.next=10,Object(j.b)(a);case 10:return s=n.sent,i=s.map((function(e){var t=e.contractAddress;return Object(u.a)(t)})),n.next=14,Object(h.g)(c,i,a);case 14:l=n.sent,b=l.cakeBalance,x=l.cakeBnbLpBalance,O=l.cakePoolBalance,f=l.total,v=l.poolsBalance,g=l.cakeVaultBalance,w=l.verificationHash,t&&m((function(e){return Object(o.a)(Object(o.a)({},e),{},{verificationHash:w,cakeBalance:new p.a(b),cakeBnbLpBalance:new p.a(x),cakePoolBalance:new p.a(O),poolsBalance:new p.a(v),cakeVaultBalance:new p.a(g),total:new p.a(f)})}));case 23:return n.prev=23,S(!1),n.finish(23);case 26:case"end":return n.stop()}}),n,null,[[1,,23,26]])})));return function(){return n.apply(this,arguments)}}()()}),[c,e,m,t,S]),Object(o.a)(Object(o.a)({},f),{},{isLoading:w})}},893:function(e,t,n){"use strict";var c,r,o,a=n(6),s=(n(1),n(898)),i=n.n(s),l=n(934),b=n.n(l),j=n(10),u=n(2),d=n(4),x=n(0),p=d.e.table(c||(c=Object(j.a)(["\n  margin-bottom: 32px;\n  margin-top: 32px;\n  width: 100%;\n\n  td,\n  th {\n    color: ",";\n    padding: 8px;\n  }\n"])),(function(e){return e.theme.colors.text})),h=d.e.div(r||(r=Object(j.a)(["\n  color: ",";\n  margin-bottom: 16px;\n  margin-top: 16px;\n\n  li {\n    margin-bottom: 8px;\n  }\n"])),(function(e){return e.theme.colors.text})),O=function(e){return Object(x.jsx)(u.Y,Object(a.a)({as:"h4",scale:"lg",my:"16px"},e))},f={h1:O,h2:O,h3:O,h4:O,h5:O,h6:O,p:function(e){return Object(x.jsx)(u.hc,Object(a.a)({as:"p",my:"16px"},e))},table:p,ol:function(e){return Object(x.jsx)(h,Object(a.a)({as:"ol"},e))},ul:function(e){return Object(x.jsx)(h,Object(a.a)({as:"ul"},e))},pre:d.e.pre(o||(o=Object(j.a)(["\n  color: ",";\n  margin-bottom: 16px;\n  margin-top: 16px;\n  max-width: 100%;\n  overflow-x: auto;\n"])),(function(e){return e.theme.colors.text}))};t.a=function(e){return Object(x.jsx)(i.a,Object(a.a)({remarkPlugins:[b.a],components:f},e))}}}]);
//# sourceMappingURL=8.372774cd.chunk.js.map