import{t as d}from"./viewUtil-be301156.js";class g{static betterArray(){Array.prototype.distinct||(Array.prototype.distinct=function(t){const e={};return this.filter(n=>{let r=n;return t instanceof Function?r=t(n):t!=null&&(r=n[t]),e[r]?!1:(r!=null&&(e[r]=1),!0)})})}static arrayToObj(t,e,n){return Array.isArray(t)?t.reduce((r,i)=>{const o=e instanceof Function?e(i):i[e];return r[o]=n?i[n]:i,r},{}):t}static clone(t){return t.map(e=>({...e}))}static cloneWithProps(t,...e){return!t||!Array.isArray(t)?t:t.map(n=>{const r={};for(const i of e)r[i]=n[i];return r})}static getMax(t,e){let n=0;for(const r of t)n=Math.max(n,e(r));return n}static sum(t,e){return t.reduce((r,i)=>r+n(i,e),0);function n(r,i){let o=r;if(o&&i)for(const u of i.split("."))o=o==null?void 0:o[u];return d(o)}}static grouping(t,e){const{keyGenerator:n,groupGenerator:r,keepSingle:i,valueGenerator:o}=e,u=[],p={};for(const s of t){const f=n(s);let c=s;if(o&&(c=o(s)),f){const l=p[f];if(l)Array.isArray(l)?l.push(c):l.addChild(c);else{const a=r(f,s);Array.isArray(a)?a.push(c):a.addChild(c),u.push(a),p[f]=a}}else u.push(s)}if(i)return u;for(let s=0;s<u.length;s++){const c=u[s].childs;c&&c.length==1&&u.splice(s,1,c[0])}return u}static isMultipleResult(t){if(!Array.isArray(t))return!1;for(const e of t)if(Array.isArray(e))return!0}}export{g as A};