(this["webpackJsonpmozartfinance-frontend"]=this["webpackJsonpmozartfinance-frontend"]||[]).push([[4],{1077:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Ne}));var c,r,i,a,s,o,u,j,l,b,d,O,f,x,p,h,m=n(17),g=n(0),v=n(8),k=n(9),w=n(44),z=n(155),S=n(2),y=n.n(S),N=n(12),C=n(21),P=n(27),E=n(254),T=n(15),A=n(13),H=n.n(A),I=n(58),Q=n(20),L=n(92),R=n(251),F=n(153),B=function(){var e=Object(g.useState)([]),t=Object(C.a)(e,2),n=t[0],c=t[1],r=Object(P.c)().account,i=Object(F.a)().fastRefresh;return Object(g.useEffect)((function(){r&&function(){var e=Object(N.a)(y.a.mark((function e(){var t,n,i;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=R.b.map((function(e){return{address:Object(Q.h)(),name:"pendingPiano",params:[e.pid,r]}})),e.next=3,Object(I.a)(L,t);case 3:n=e.sent,i=R.b.map((function(e,t){return Object(T.a)(Object(T.a)({},e),{},{balance:new H.a(n[t])})})),c(i);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[r,i]),n},D=n(248),M=function(){var e=Object(g.useState)([]),t=Object(C.a)(e,2),n=t[0],c=t[1],r=Object(P.c)().account,i=Object(F.a)().fastRefresh;return Object(g.useEffect)((function(){r&&function(){var e=Object(N.a)(y.a.mark((function e(){var t,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=R.b.map((function(e){return{address:Object(Q.h)(),name:"pendingPiano",params:[e.pid,r]}})),e.next=3,Object(I.a)(L,t);case 3:n=e.sent,c(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[r,i]),n},U=n(48),$=n(263),J=n(3),V=function(e){var t=e.value,n=e.decimals,c=e.fontSize,r=void 0===c?"40px":c,i=e.lineHeight,a=void 0===i?"1":i,s=e.prefix,o=void 0===s?"":s,u=e.bold,j=void 0===u||u,l=e.color,b=void 0===l?"text":l,d=Object($.useCountUp)({start:0,end:t,duration:1,separator:",",decimals:void 0!==n?n:t<0?4:t>1e5?0:3}),O=d.countUp,f=d.update,x=Object(g.useRef)(f);return Object(g.useEffect)((function(){x.current(t)}),[t,x]),Object(J.jsxs)(k.N,{bold:j,fontSize:r,style:{lineHeight:a},color:b,children:[o,O]})},W=function(e){return Object(J.jsx)(V,Object(T.a)({fontSize:"14px",lineHeight:"1.1",color:"textSubtle",prefix:"~$",bold:!1,decimals:2},e))},q=v.e.div(c||(c=Object(m.a)(["\n  margin-bottom: 24px;\n}\n"]))),K=function(){var e=Object(w.a)(),t=Object(P.c)().account,n=M().reduce((function(e,t){return e+new H.a(t).div(new H.a(10).pow(18)).toNumber()}),0),c=new H.a(n).multipliedBy(Object(U.k)()).toNumber();return t?Object(J.jsxs)(q,{children:[Object(J.jsx)(V,{value:n,lineHeight:"1.5"}),Object(J.jsx)(W,{value:c})]}):Object(J.jsx)(k.N,{color:"textDisabled",style:{lineHeight:"76px"},children:e(298,"Locked")})},X=n(865),G=n(62),Y=function(){var e=Object(w.a)(),t=Object(X.a)(Object(Q.d)()),n=new A.BigNumber(Object(G.a)(t)).multipliedBy(Object(U.k)()).toNumber();return Object(P.c)().account?Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)(V,{value:Object(G.a)(t),decimals:4,fontSize:"24px",lineHeight:"36px"}),Object(J.jsx)(W,{value:n})]}):Object(J.jsx)(k.N,{color:"textDisabled",style:{lineHeight:"54px"},children:e(298,"Locked")})},Z=Object(v.e)(k.k)(r||(r=Object(m.a)(["\n\n"]))),_=v.e.div(i||(i=Object(m.a)(["\n  margin-bottom: 16px;\n"]))),ee=v.e.img(a||(a=Object(m.a)(["\n  margin-bottom: 16px;\n"]))),te=v.e.div(s||(s=Object(m.a)(["\n  color: ",";\n  font-size: 14px;\n"])),(function(e){return e.theme.colors.textSubtle})),ne=v.e.div(o||(o=Object(m.a)(["\n  margin-top: 24px;\n"]))),ce=function(){var e=Object(g.useState)(!1),t=Object(C.a)(e,2),n=t[0],c=t[1],r=Object(P.c)().account,i=Object(w.a)(),a=B().filter((function(e){return e.balance.toNumber()>0})),s=Object(E.a)(a.map((function(e){return e.pid}))).onReward,o=Object(g.useCallback)(Object(N.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.prev=1,e.next=4,s();case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:return e.prev=8,c(!1),e.finish(8);case 11:case"end":return e.stop()}}),e,null,[[1,6,8,11]])}))),[s]);return Object(J.jsx)(Z,{children:Object(J.jsxs)(k.l,{children:[Object(J.jsx)(k.u,{size:"xl",mb:"24px",children:i(542,"Farms & Staking")}),Object(J.jsx)(ee,{src:"/images/piano.png",alt:"cake logo",width:64,height:64}),Object(J.jsxs)(_,{children:[Object(J.jsxs)(te,{children:[i(544,"PIANO to Harvest"),":"]}),Object(J.jsx)(K,{})]}),Object(J.jsxs)(_,{children:[Object(J.jsxs)(te,{children:[i(546,"PIANO in Wallet"),":"]}),Object(J.jsx)(Y,{})]}),Object(J.jsx)(ne,{children:r?Object(J.jsx)(k.g,{id:"harvest-all",disabled:a.length<=0||n,onClick:o,width:"100%",children:n?i(548,"Collecting PIANO"):i(532,"Harvest all (".concat(a.length,")"),{count:a.length})}):Object(J.jsx)(D.a,{width:"100%"})})]})})},re=n(186),ie=Object(v.e)(k.k)(u||(u=Object(m.a)(["\n  margin-left: auto;\n  margin-right: auto;\n"]))),ae=v.e.div(j||(j=Object(m.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),se=function(){var e=Object(w.a)(),t=Object(X.c)(),n=Object(X.b)(Object(Q.d)()),c=Object(U.k)(),r=t?t.minus(n):new re.a(0),i=Object(G.a)(r),a=c.times(r);return Object(J.jsx)(ie,{children:Object(J.jsxs)(k.l,{children:[Object(J.jsx)(k.u,{size:"xl",mb:"24px",children:e(534,"PIANO Stats")}),Object(J.jsxs)(ae,{children:[Object(J.jsx)(k.N,{fontSize:"14px",children:e(10005,"Market Cap")}),Object(J.jsx)(V,{fontSize:"14px",value:Object(G.a)(a),decimals:0,prefix:"$"})]}),Object(J.jsxs)(ae,{children:[Object(J.jsx)(k.N,{fontSize:"14px",children:e(536,"Total Minted")}),t&&Object(J.jsx)(V,{fontSize:"14px",value:Object(G.a)(t),decimals:0})]}),Object(J.jsxs)(ae,{children:[Object(J.jsx)(k.N,{fontSize:"14px",children:e(538,"Total Burned")}),Object(J.jsx)(V,{fontSize:"14px",value:Object(G.a)(n),decimals:0})]}),Object(J.jsxs)(ae,{children:[Object(J.jsx)(k.N,{fontSize:"14px",children:e(10004,"Circulating Supply")}),i&&Object(J.jsx)(V,{fontSize:"14px",value:i,decimals:0})]}),Object(J.jsxs)(ae,{children:[Object(J.jsx)(k.N,{fontSize:"14px",children:e(540,"New PIANO/block")}),Object(J.jsx)(k.N,{bold:!0,fontSize:"14px",children:1})]})]})})},oe=Object(v.e)(k.k)(l||(l=Object(m.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n"]))),ue=function(){var e=Object(w.a)(),t=Object(U.m)();return Object(J.jsx)(oe,{children:Object(J.jsxs)(k.l,{children:[Object(J.jsx)(k.u,{size:"lg",mb:"24px",children:e(762,"Total Value Locked (TVL)")}),Object(J.jsx)(V,{value:t.toNumber(),prefix:"$",decimals:0}),Object(J.jsx)(k.N,{color:"textSubtle",children:e(764,"Across all LPs and PIANO Pools")})]})})},je=n(914),le=n.n(je),be=n(63),de=n(262),Oe=Object(v.e)(k.k)(b||(b=Object(m.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n\n  "," {\n    margin: 0;\n    max-width: none;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),fe=Object(v.e)(k.u).attrs({size:"xl"})(d||(d=Object(m.a)(["\n  line-height: 44px;\n"]))),xe=function(){var e=Object(w.a)(),t=Object(U.d)(),n=Object(U.i)(),c=Object(U.k)(),r=Object(g.useMemo)((function(){var e=t.filter((function(e){return 0!==e.pid&&"0X"!==e.multiplier})).map((function(e){if(e.lpTotalInQuoteToken&&n){var t=n[e.quoteToken.symbol.toLowerCase()],r=new H.a(e.lpTotalInQuoteToken).times(t);return Object(de.a)(e.poolWeight,c,r)}return null})),r=le()(e);return null===r||void 0===r?void 0:r.toLocaleString("en-US",{maximumFractionDigits:2})}),[c,t,n]);return Object(J.jsx)(Oe,{children:Object(J.jsxs)(k.l,{children:[Object(J.jsx)(k.u,{color:"contrast",size:"lg",children:"Earn up to"}),Object(J.jsx)(fe,{color:"primary",children:r?"".concat(r,"% ").concat(e(736,"APR")):Object(J.jsx)(k.L,{animation:"pulse",variant:"rect",height:"44px"})}),Object(J.jsxs)(k.t,{justifyContent:"space-between",children:[Object(J.jsx)(k.u,{color:"contrast",size:"lg",children:"in Farms"}),Object(J.jsx)(be.c,{exact:!0,activeClassName:"active",to:"/farms",id:"farm-apy-cta",children:Object(J.jsx)(k.c,{mt:30,color:"primary"})})]})]})})},pe=n(61),he=n(185),me=n.n(he),ge=n(65),ve=Object(v.e)(k.k)(O||(O=Object(m.a)(["\n  background: ",";\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n  "," {\n    margin: 0;\n    max-width: none;\n  }\n"])),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.mediaQueries.lg})),ke=Object(v.e)(k.u).attrs({size:"xl"})(f||(f=Object(m.a)(["\n  line-height: 44px;\n"]))),we=function(){var e=ge.a.filter((function(e){return!e.isFinished&&!e.earningToken.symbol.includes("CAKE")})),t=me()(e,["sortOrder","pid"],["desc","desc"]).slice(0,3),n=Object(pe.a)(t.map((function(e){return e.earningToken.symbol}))).join(", ");return Object(J.jsx)(ve,{children:Object(J.jsxs)(k.l,{children:[Object(J.jsx)(k.u,{color:"invertedContrast",size:"lg",children:"Earn"}),Object(J.jsx)(ke,{color:"invertedContrast",children:n}),Object(J.jsxs)(k.t,{justifyContent:"space-between",children:[Object(J.jsx)(k.u,{color:"invertedContrast",size:"lg",children:"in Pools"}),Object(J.jsx)(be.c,{exact:!0,activeClassName:"active",to:"/pools",id:"pool-cta",children:Object(J.jsx)(k.c,{mt:30,color:"background"})})]})]})})},ze=v.e.div(x||(x=Object(m.a)(["\n  align-items: center;\n  background-image: url('/images/mozart.gif');\n  background-repeat: no-repeat;\n  background-position: top center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin: auto;\n  margin-bottom: 32px;\n  padding-top: 116px;\n  text-align: center;\n  height: 60px;\n  padding-top: 0;\n  background-position: left center, right center;\n  background-size: contain;\n\n  "," {\n    background-image: url('/images/mozart.gif');\n    background-position: left center, right center;\n    height: 165px;\n    padding-top: 0;\n    background-position: left center, right center;\n    background-size: contain;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),Se=Object(v.e)(k.d)(p||(p=Object(m.a)(["\n  align-items: stretch;\n  justify-content: stretch;\n  margin-bottom: 32px;\n\n  & > div {\n    grid-column: span 6;\n    width: 100%;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    & > div {\n      grid-column: span 6;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),ye=Object(v.e)(k.d)(h||(h=Object(m.a)(["\n  align-items: start;\n  margin-bottom: 32px;\n\n  & > div {\n    grid-column: span 6;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    & > div {\n      grid-column: span 4;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),Ne=function(){var e=Object(w.a)();return Object(J.jsxs)(z.a,{children:[Object(J.jsxs)(ze,{children:[Object(J.jsx)(k.u,{as:"h1",size:"xl",mb:"24px",color:"secondary",fontSize:"80px",children:e(576,"Mozart Finance")}),Object(J.jsx)(k.N,{children:e(578,"Classiest DEFI project on #BSC.")})]}),Object(J.jsxs)("div",{children:[Object(J.jsx)(Se,{children:Object(J.jsx)(ce,{})}),Object(J.jsxs)(ye,{children:[Object(J.jsx)(xe,{}),Object(J.jsx)(we,{})]}),Object(J.jsxs)(Se,{children:[Object(J.jsx)(se,{}),Object(J.jsx)(ue,{})]})]})]})}},865:function(e,t,n){"use strict";n.d(t,"c",(function(){return O})),n.d(t,"b",(function(){return f}));var c=n(2),r=n.n(c),i=n(12),a=n(21),s=n(0),o=n(13),u=n.n(o),j=n(27),l=n(42),b=n(66),d=n(153),O=function(){var e=Object(d.a)().slowRefresh,t=Object(s.useState)(),n=Object(a.a)(t,2),c=n[0],o=n[1];return Object(s.useEffect)((function(){function e(){return(e=Object(i.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(l.d)(),e.next=3,t.methods.totalSupply().call();case 3:n=e.sent,o(new u.a(n));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[e]),c},f=function(e){var t=Object(s.useState)(new u.a(0)),n=Object(a.a)(t,2),c=n[0],o=n[1],j=Object(d.a)().slowRefresh,O=Object(b.a)();return Object(s.useEffect)((function(){(function(){var t=Object(i.a)(r.a.mark((function t(){var n,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(l.a)(e,O),t.next=3,n.methods.balanceOf("0x000000000000000000000000000000000000dEaD").call();case 3:c=t.sent,o(new u.a(c));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[O,e,j]),c};t.a=function(e){var t=Object(s.useState)(new u.a(0)),n=Object(a.a)(t,2),c=n[0],o=n[1],O=Object(j.c)().account,f=Object(b.a)(),x=Object(d.a)().fastRefresh;return Object(s.useEffect)((function(){O&&function(){var t=Object(i.a)(r.a.mark((function t(){var n,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(l.a)(e,f),t.next=3,n.methods.balanceOf(O).call();case 3:c=t.sent,o(new u.a(c));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[O,e,f,x]),c}},914:function(e,t,n){var c=n(915),r=n(916),i=n(156);e.exports=function(e){return e&&e.length?c(e,i,r):void 0}},915:function(e,t,n){var c=n(131);e.exports=function(e,t,n){for(var r=-1,i=e.length;++r<i;){var a=e[r],s=t(a);if(null!=s&&(void 0===o?s===s&&!c(s):n(s,o)))var o=s,u=a}return u}},916:function(e,t){e.exports=function(e,t){return e>t}}}]);
//# sourceMappingURL=4.f980d477.chunk.js.map