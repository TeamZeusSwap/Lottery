(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[18],{1369:function(e,n,t){"use strict";t.r(n);t(1);var c,i,r,s,a,l,o,j,d=t(2),b=t(258),u=t.n(b),x=t(812),h=t(238),O=t(13),p=t(10),m=t(4),f=t(87),g=t(0),v=m.e.div(c||(c=Object(p.a)(["\n  align-self: stretch;\n  background: ",";\n  flex: none;\n  padding: 16px 0;\n  text-align: center;\n  width: 56px;\n"])),(function(e){return function(e){return e.isDark?"linear-gradient(139.73deg, #142339 0%, #24243D 47.4%, #37273F 100%)":"linear-gradient(139.73deg, #E6FDFF 0%, #EFF4F5 46.87%, #F3EFFF 100%)"}(e.theme)})),y=m.e.div(i||(i=Object(p.a)(["\n  align-items: start;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  padding: 24px;\n\n  "," {\n    align-items: center;\n    flex-direction: row;\n    font-size: 40px;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),w=m.e.div(r||(r=Object(p.a)(["\n  flex: 1;\n"]))),S=m.e.img(s||(s=Object(p.a)(["\n  border-radius: 50%;\n"]))),F=Object(m.e)(d.Y).attrs({as:"h3"})(a||(a=Object(p.a)(["\n  font-size: 24px;\n\n  "," {\n    font-size: 40px;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),k=m.e.div(l||(l=Object(p.a)(["\n  flex: none;\n  margin-right: 8px;\n\n  "," {\n    height: 64px;\n    width: 64px;\n  }\n\n  "," {\n    display: none;\n  }\n"])),S,(function(e){return e.theme.mediaQueries.md})),z=m.e.div(o||(o=Object(p.a)(["\n  display: none;\n\n  "," {\n    display: block;\n    margin-left: 24px;\n\n    "," {\n      height: 128px;\n      width: 128px;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.md}),S),W=Object(m.e)(d.u)(j||(j=Object(p.a)(["\n  margin-bottom: 16px;\n"]))),I=function(e){var n=e.rank,t=e.team,c=Object(O.b)().t,i=Object(g.jsx)(S,{src:"/images/teams/".concat(t.images.md),alt:"team avatar"});return Object(g.jsx)(W,{children:Object(g.jsxs)(d.W,{children:[Object(g.jsx)(v,{children:Object(g.jsx)(d.hc,{bold:!0,fontSize:"24px",children:n})}),Object(g.jsxs)(y,{children:[Object(g.jsxs)(w,{children:[Object(g.jsxs)(d.W,{alignItems:"center",mb:"16px",children:[Object(g.jsx)(k,{children:i}),Object(g.jsx)(F,{children:t.name})]}),Object(g.jsx)(d.hc,{as:"p",color:"textSubtle",pr:"24px",mb:"16px",children:c(t.description)}),Object(g.jsxs)(d.W,{children:[Object(g.jsxs)(d.W,{children:[Object(g.jsx)(d.Mb,{width:"24px",mr:"8px",style:{alignSelf:"center"}}),Object(g.jsx)(d.hc,{fontSize:"24px",bold:!0,children:t.points.toLocaleString()})]}),Object(g.jsxs)(d.W,{ml:"24px",children:[Object(g.jsx)(d.N,{width:"24px",mr:"8px",style:{alignSelf:"center"}}),Object(g.jsx)(d.hc,{fontSize:"24px",bold:!0,children:t.users.toLocaleString()})]})]})]}),Object(g.jsx)(d.q,{as:f.a,to:"/teams/".concat(null===t||void 0===t?void 0:t.id),variant:"secondary",scale:"sm",children:c("See More")}),Object(g.jsx)(z,{children:i})]})]})})},Y=t(892);n.default=function(){var e=Object(O.b)().t,n=Object(x.b)(),t=n.teams,c=n.isLoading,i=Object.values(t),r=u()(i,["points","id","name"],["desc","asc","asc"]);return Object(g.jsxs)(h.a,{children:[Object(g.jsx)(Y.a,{}),Object(g.jsxs)(d.W,{alignItems:"center",justifyContent:"space-between",mb:"32px",children:[Object(g.jsx)(d.Y,{scale:"xl",children:e("Teams")}),c&&Object(g.jsx)(d.h,{spin:!0})]}),r.map((function(e,n){return Object(g.jsx)(I,{rank:n+1,team:e},e.id)}))]})}},812:function(e,n,t){"use strict";t.d(n,"a",(function(){return a})),t.d(n,"b",(function(){return l}));var c=t(1),i=t(33),r=t(69),s=t(167),a=function(e){var n=Object(i.c)((function(n){return n.teams.data[e]})),t=Object(r.b)();return Object(c.useEffect)((function(){t(Object(s.b)(e))}),[e,t]),n},l=function(){var e=Object(i.c)((function(e){return e.teams})),n=e.isInitialized,t=e.isLoading,a=e.data,l=Object(r.b)();return Object(c.useEffect)((function(){l(Object(s.c)())}),[l]),{teams:a,isInitialized:n,isLoading:t}}},813:function(e,n,t){"use strict";var c,i=t(10),r=t(4).e.div(c||(c=Object(i.a)(["\n  border-bottom: 2px solid ",";\n  margin-bottom: 24px;\n  padding-bottom: 24px;\n"])),(function(e){return e.theme.colors.textSubtle}));n.a=r},892:function(e,n,t){"use strict";t(1);var c=t(2),i=t(181),r=t(13),s=t(813),a=t(87),l=t(0),o=function(){var e=Object(r.b)().t;return Object(l.jsx)(c.u,{mb:"32px",isActive:!0,children:Object(l.jsx)(c.v,{children:Object(l.jsxs)(c.W,{alignItems:["start",null,"center"],justifyContent:["start",null,"space-between"],flexDirection:["column",null,"row"],children:[Object(l.jsxs)("div",{children:[Object(l.jsx)(c.Y,{scale:"lg",mb:"8px",children:e("You haven\u2019t set up your profile yet!")}),Object(l.jsx)(c.hc,{children:e("You can do this at any time by clicking on your profile picture in the menu")})]}),Object(l.jsx)(c.q,{as:a.a,to:"/profile",id:"teamsPageSetUpProfile",mt:["16px",null,0],children:e("Set up now")})]})})})};n.a=function(){var e=Object(r.b)().t,n=Object(i.b)(),t=n.isInitialized,a=n.profile,j=t&&!a;return Object(l.jsxs)(l.Fragment,{children:[j&&Object(l.jsx)(o,{}),Object(l.jsxs)(s.a,{children:[Object(l.jsx)(c.Y,{as:"h1",scale:"xxl",color:"secondary",children:e("Teams & Profiles")}),Object(l.jsx)(c.hc,{bold:!0,children:e("Show off your stats and collectibles with your unique profile. Team features will be revealed soon!")})]})]})}}}]);
//# sourceMappingURL=18.1a45c028.chunk.js.map