"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[701],{713:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(294);a.Z.defaults.params={api_key:"ac8fbb226a37f835673d1586bcf6a4c6"},a.Z.defaults.baseURL="https://api.themoviedb.org/3";const s=new class{async getTrending(){const{data:e}=await a.Z.get("trending/movie/day");return e.results}async searchMovies(e){const{data:t}=await a.Z.get("search/movie?".concat(e));return t}async getMovieDetails(e){const{data:t}=await a.Z.get("movie/".concat(e));return t}async getMovieCast(e){const{data:t}=await a.Z.get("movie/".concat(e,"/credits"));return t}async getMovieReviews(e){const{data:t}=await a.Z.get("movie/".concat(e,"/reviews"));return t}}},701:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var a,s,c=n(713),i=n(791),r=n(110),o=n(168),l=n(867);const d=l.ZP.h1(a||(a=(0,o.Z)(["\n  text-align: center;\n  margin: 0 0 10px 0;\n"]))),g=l.ZP.ul(s||(s=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n"])));var h=n(184);const u=e=>{let{movies:t}=e;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(d,{children:"Trending today"}),(0,h.jsx)(g,{children:t.length>0&&t.map((e=>(0,h.jsx)("li",{children:(0,h.jsx)(r.Fg,{to:"/movies/".concat(e.id),state:{from:"/"},children:e.title})},e.id)))})]})},v=()=>{const[e,t]=(0,i.useState)([]),[n,a]=(0,i.useState)(null),[s,o]=(0,i.useState)(!1);return(0,i.useEffect)((()=>{o(!0);(async()=>{try{const e=await c.Z.getTrending();t(e)}catch({message:e}){a(e)}finally{o(!1)}})()}),[]),(0,h.jsx)(r.W2,{children:s?(0,h.jsx)("p",{children:"Loading..."}):n?(0,h.jsx)("p",{children:n}):(0,h.jsx)(u,{movies:e})})}},110:(e,t,n)=>{n.d(t,{Fg:()=>h,Or:()=>g,W2:()=>Z,hX:()=>u,hb:()=>v});var a,s,c,i,r,o=n(168),l=n(87),d=n(867);const g=d.ZP.div(a||(a=(0,o.Z)(["\n  height: 100vh;\n"]))),h=(0,d.ZP)(l.rU)(s||(s=(0,o.Z)(["\n  color: blue;\n"]))),u=(0,d.ZP)(l.OL)(c||(c=(0,o.Z)(["\n  color: black;\n  &.active {\n    color: red;\n  }\n"]))),v=(0,d.ZP)(h)(i||(i=(0,o.Z)(["\n  display: block;\n"]))),Z=d.ZP.div(r||(r=(0,o.Z)(["\n  padding: 20px;\n"])))}}]);
//# sourceMappingURL=701.ebb25481.chunk.js.map