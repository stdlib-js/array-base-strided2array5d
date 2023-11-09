// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
function r(r,u,f,o){var p,s,h,t,a,e,n,c,d,i,l,v,x,b,g,j,k,m,q,w,y,z,A,B;for(g=u[0],b=u[1],x=u[2],v=u[3],l=u[4],e=f[0],a=f[1],t=f[2],h=f[3],s=f[4],p=[],w=0;w<g;w++){for(y=[],n=o+e*w,q=0;q<b;q++){for(z=[],c=n+a*q,m=0;m<x;m++){for(A=[],d=c+t*m,k=0;k<v;k++){for(B=[],i=d+h*k,j=0;j<l;j++)B.push(r[i]),i+=s;A.push(B)}z.push(A)}y.push(z)}p.push(y)}return p}export{r as default};
//# sourceMappingURL=index.mjs.map
