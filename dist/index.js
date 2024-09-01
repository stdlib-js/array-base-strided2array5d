"use strict";var D=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var B=D(function(J,A){
var E=require('@stdlib/array-base-resolve-getter/dist');function F(a,r,v,C){var p,x,q,g,h,l,m,s,y,G,e,b,j,k,w,z,f,t,i,u,o,S,d,n,c;for(p=E(a),z=r[0],w=r[1],k=r[2],j=r[3],b=r[4],m=v[0],l=v[1],h=v[2],g=v[3],q=v[4],x=[],o=0;o<z;o++){for(S=[],s=C+m*o,u=0;u<w;u++){for(d=[],y=s+l*u,i=0;i<k;i++){for(n=[],G=y+h*i,t=0;t<j;t++){for(c=[],e=G+g*t,f=0;f<b;f++)c.push(p(a,e)),e+=q;n.push(c)}d.push(n)}S.push(d)}x.push(S)}return x}A.exports=F
});var H=B();module.exports=H;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
