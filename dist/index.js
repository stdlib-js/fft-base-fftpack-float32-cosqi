"use strict";var c=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var s=c(function(L,o){
var x=require('@stdlib/math-base-special-cosf/dist'),m=require('@stdlib/constants-float32-half-pi/dist'),t=require('@stdlib/number-float64-base-to-float32/dist'),A=require('@stdlib/fft-base-fftpack-float32-rffti/dist');function F(e,r,i,f){var q,n,a,v,u;for(n=t(m/e),v=0,a=f,u=0;u<e;u++)v=t(v+1),r[a]=x(t(v*n)),a+=i;return q=f+e*i,A(e,r,i,q),r}o.exports=F
});var H=s();module.exports=H;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
