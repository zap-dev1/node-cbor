!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("bignumber.js")):"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.cborBigDecimal=t(require("bignumber.js")):e.cborBigDecimal=t(e.BigNumber)}(this,(function(e){return(()=>{"use strict";var t={143:(e,t,n)=>{const{BigNumber:i}=n(937);let r=null;const u=new i("0x20000000000000"),o=new i(2);function s(e,t){if(t.isNaN())return e._pushNaN();if(!t.isFinite())return e._pushInfinity(t.isNegative()?-1/0:1/0);if(t.isInteger())return e._pushJSBigint(BigInt(t.toFixed()));if(!e._pushTag(4)||!e._pushInt(2,4))return!1;const n=t.decimalPlaces(),i=t.shiftedBy(n);return!!e._pushIntNum(-n)&&(i.abs().isLessThan(u)?e._pushIntNum(i.toNumber()):e._pushJSBigint(BigInt(i.toFixed())))}function f(e){return new i(e[1]).shiftedBy(e[0])}function p(e){return o.pow(e[0]).times(e[1])}function c(e){r=e,r.Encoder.SEMANTIC_TYPES[i.name]=s,r.Tagged.TAGS[4]=f,r.Tagged.TAGS[5]=p}c.BigNumber=i,e.exports=c},937:t=>{t.exports=e}},n={};return function e(i){var r=n[i];if(void 0!==r)return r.exports;var u=n[i]={exports:{}};return t[i](u,u.exports,e),u.exports}(143)})()}));