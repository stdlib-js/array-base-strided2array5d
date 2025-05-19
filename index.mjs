// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-resolve-getter@v0.2.2-esm/index.mjs";function s(s,e,t,o){var f,p,u,h,a,n,d,i,l,m,v,j,b,c,g,x,y,k,q,w,z,A,B,C,D;for(f=r(s),x=e[0],g=e[1],c=e[2],b=e[3],j=e[4],d=t[0],n=t[1],a=t[2],h=t[3],u=t[4],p=[],z=0;z<x;z++){for(A=[],i=o+d*z,w=0;w<g;w++){for(B=[],l=i+n*w,q=0;q<c;q++){for(C=[],m=l+a*q,k=0;k<b;k++){for(D=[],v=m+h*k,y=0;y<j;y++)D.push(f(s,v)),v+=u;C.push(D)}B.push(C)}A.push(B)}p.push(A)}return p}export{s as default};
//# sourceMappingURL=index.mjs.map
