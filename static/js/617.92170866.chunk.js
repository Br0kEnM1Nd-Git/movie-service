"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[617],{713:(e,t,n)=>{n.d(t,{Z:()=>a});var s=n(294);s.Z.defaults.params={api_key:"ac8fbb226a37f835673d1586bcf6a4c6"},s.Z.defaults.baseURL="https://api.themoviedb.org/3";const a=new class{async getTrending(){const{data:e}=await s.Z.get("trending/movie/day");return e.results}async searchMovies(e){const{data:t}=await s.Z.get("search/movie?".concat(e));return t}async getMovieDetails(e){const{data:t}=await s.Z.get("movie/".concat(e));return t}async getMovieCast(e){const{data:t}=await s.Z.get("movie/".concat(e,"/credits"));return t}async getMovieReviews(e){const{data:t}=await s.Z.get("movie/".concat(e,"/reviews"));return t}}},868:(e,t,n)=>{n.d(t,{Z:()=>a});var s=n(791);const a=()=>{const[e,t]=(0,s.useState)(!1),[n,a]=(0,s.useState)(null);return{isLoading:e,setIsLoading:t,error:n,setError:a}}},617:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});var s,a,r,i,c=n(713),o=n(868),l=n(791),d=n(689),h=n(110),v=n(168),g=n(867);const p=g.ZP.div(s||(s=(0,v.Z)(["\n  display: flex;\n  gap: 30px;\n  margin: 0 0 30px 0;\n"]))),x=g.ZP.div(a||(a=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n"]))),u=g.ZP.ul(r||(r=(0,v.Z)(["\n  display: flex;\n  gap: 10px;\n"]))),m=g.ZP.ul(i||(i=(0,v.Z)(["\n  display: flex;\n  gap: 10px;\n  margin: 0 0 15px 0;\n"])));var Z=n(184);const j=e=>{var t;let{movie:n,from:s}=e;const{poster_path:a,overview:r,title:i,release_date:c,genres:o,vote_average:l}=null!==n&&void 0!==n?n:{},d=null===c||void 0===c?void 0:c.split("-")[0],v=null===(t=10*l)||void 0===t?void 0:t.toFixed(0);return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(p,{children:[(0,Z.jsx)("img",{height:500,weight:500,src:a?"https://image.tmdb.org/t/p/w500/".concat(a):"https://i.imgur.com/jtwlswk.png",alt:r}),(0,Z.jsxs)(x,{children:[(0,Z.jsx)("h2",{children:"".concat(i," (").concat(d,")")}),(0,Z.jsxs)("p",{children:["User score: ",v,"%"]}),(0,Z.jsx)("h3",{children:"Overwiew"}),(0,Z.jsx)("p",{children:r}),(0,Z.jsx)("h3",{children:"Genres"}),(0,Z.jsx)(u,{children:o.map((e=>{let{id:t,name:n}=e;return(0,Z.jsx)("span",{children:n},t)}))})]})]}),(0,Z.jsx)("span",{children:"Additional information:"}),(0,Z.jsxs)(m,{children:[(0,Z.jsx)("li",{children:(0,Z.jsx)(h.Fg,{to:"cast",state:{from:s},children:"Cast"})}),(0,Z.jsx)("li",{children:(0,Z.jsx)(h.Fg,{to:"reviews",state:{from:s},children:"Reviews"})})]})]})},f=()=>{const{movieId:e}=(0,d.UO)(),{isLoading:t,setIsLoading:n,error:s,setError:a}=(0,o.Z)(),[r,i]=(0,l.useState)(null),{state:v}=(0,d.TH)();(0,l.useEffect)((()=>{(async()=>{n(!0),a(null);try{const t=await c.Z.getMovieDetails(e);i(t)}catch({message:t}){a(t)}finally{n(!1)}})()}),[e,a,n]);const{from:g}=null!==v&&void 0!==v?v:{};return(0,Z.jsxs)(h.W2,{children:[(0,Z.jsx)(h.hb,{to:g||"/",children:"<- Back"}),t?(0,Z.jsx)("p",{children:"Loading..."}):s?(0,Z.jsx)("p",{children:s}):r&&(0,Z.jsx)(j,{movie:r,from:g}),(0,Z.jsx)(d.j3,{})]})}},110:(e,t,n)=>{n.d(t,{Fg:()=>v,Or:()=>h,W2:()=>x,hX:()=>g,hb:()=>p});var s,a,r,i,c,o=n(168),l=n(87),d=n(867);const h=d.ZP.div(s||(s=(0,o.Z)(["\n  height: 100vh;\n"]))),v=(0,d.ZP)(l.rU)(a||(a=(0,o.Z)(["\n  color: blue;\n"]))),g=(0,d.ZP)(l.OL)(r||(r=(0,o.Z)(["\n  color: black;\n  &.active {\n    color: red;\n  }\n"]))),p=(0,d.ZP)(v)(i||(i=(0,o.Z)(["\n  display: block;\n"]))),x=d.ZP.div(c||(c=(0,o.Z)(["\n  padding: 20px;\n"])))}}]);
//# sourceMappingURL=617.92170866.chunk.js.map