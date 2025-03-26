"use strict";(self.webpackChunkn2_workable_pier=self.webpackChunkn2_workable_pier||[]).push([[7995,8618],{1484:(e,t,n)=>{n.d(t,{A:()=>o});class o{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];this.lengths=e??[],this.coords=t??[]}static fromJSON(e){return new o(e.lengths,e.coords)}static fromRect(e){const[t,n,r,s]=e,l=r-t,i=s-n;return new o([5],[t,n,l,0,0,i,-l,0,0,-i])}get isPoint(){return 0===this.lengths.length&&this.coords.length>=2}get maxLength(){return Math.max(...this.lengths)}get size(){return this.lengths.reduce(((e,t)=>e+t))}forEachVertex(e){let t=0;this.lengths.length||e(this.coords[0],this.coords[1]);for(let n=0;n<this.lengths.length;n++){const o=this.lengths[n];for(let n=0;n<o;n++)e(this.coords[2*(n+t)],this.coords[2*(n+t)+1]);t+=o}}deltaDecode(){const e=this.clone(),{coords:t,lengths:n}=e;let o=0;for(const r of n){for(let e=1;e<r;e++)t[2*(o+e)]+=t[2*(o+e)-2],t[2*(o+e)+1]+=t[2*(o+e)-1];o+=r}return e}clone(e){if(0===this.lengths.length)return new o([],[this.coords[0],this.coords[1]]);const t=2*(0===this.lengths.length?1:this.lengths.reduce(((e,t)=>e+t))),n=this.coords.slice(0,t);return e?(e.set(n),new o(this.lengths,e)):new o(Array.from(this.lengths),Array.from(n))}}},20176:(e,t,n)=>{n.d(t,{N3:()=>s,Om:()=>r});var o=n(1484);class r{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,o=arguments.length>3?arguments[3]:void 0;this.geometry=e,this.attributes=t,this.centroid=n,this.objectId=o,this.displayId=0,this.geohashX=0,this.geohashY=0}static fromJSON(e,t){const n=e.geometry?o.A.fromJSON(e.geometry):null,s=e.centroid?o.A.fromJSON(e.centroid):null,l=e.attributes[t];return new r(n,e.attributes,s,l)}weakClone(){const e=new r(this.geometry,this.attributes,this.centroid,this.objectId);return e.displayId=this.displayId,e.geohashX=this.geohashX,e.geohashY=this.geohashY,e}clone(){const e=this.geometry?.clone(),t=new r(e,{...this.attributes},this.centroid?.clone(),this.objectId);return t.displayId=this.displayId,t.geohashX=this.geohashX,t.geohashY=this.geohashY,t}}function s(e){return!!e.geometry?.coords?.length}},75146:(e,t,n)=>{n.d(t,{A:()=>o});class o{constructor(){this.objectIdFieldName=null,this.globalIdFieldName=null,this.geohashFieldName=null,this.geometryProperties=null,this.geometryType=null,this.spatialReference=null,this.hasZ=!1,this.hasM=!1,this.features=[],this.fields=[],this.transform=null,this.exceededTransferLimit=!1,this.uniqueIdField=null,this.queryGeometryType=null,this.queryGeometry=null}weakClone(){const e=new o;return e.objectIdFieldName=this.objectIdFieldName,e.globalIdFieldName=this.globalIdFieldName,e.geohashFieldName=this.geohashFieldName,e.geometryProperties=this.geometryProperties,e.geometryType=this.geometryType,e.spatialReference=this.spatialReference,e.hasZ=this.hasZ,e.hasM=this.hasM,e.features=this.features,e.fields=this.fields,e.transform=this.transform,e.exceededTransferLimit=this.exceededTransferLimit,e.uniqueIdField=this.uniqueIdField,e.queryGeometry=this.queryGeometry,e.queryGeometryType=this.queryGeometryType,e}}},98618:(e,t,n)=>{n.d(t,{B2:()=>N,BW:()=>L,Ch:()=>re,DF:()=>M,Di:()=>V,E2:()=>C,IE:()=>I,Nl:()=>W,Q4:()=>se,Rk:()=>ie,Ux:()=>B,Ye:()=>R,ZF:()=>D,eU:()=>S,eY:()=>H,jH:()=>K,jQ:()=>oe,kz:()=>ee,oN:()=>X,q3:()=>Q,qK:()=>O,qN:()=>j,z5:()=>E,zv:()=>J});var o=n(50076),r=n(76460),s=n(30726),l=n(42294),i=n(2413),u=n(19902),c=n(20176),h=n(75146),a=n(1484);function f(e,t){return e?t?4:3:t?3:2}const d=()=>r.A.getLogger("esri.layers.graphics.featureConversionUtils"),g={esriGeometryPoint:0,esriGeometryPolyline:2,esriGeometryPolygon:3,esriGeometryMultipoint:0,esriGeometryMultiPatch:3,esriGeometryEnvelope:0},m=(e,t,n,o,r,s)=>{e[n]=r,e[n+1]=s},y=(e,t,n,o,r,s)=>{e[n]=r,e[n+1]=s,e[n+2]=t[o+2]},p=(e,t,n,o,r,s)=>{e[n]=r,e[n+1]=s,e[n+2]=t[o+3]},b=(e,t,n,o,r,s)=>{e[n]=r,e[n+1]=s,e[n+2]=t[o+2],e[n+3]=t[o+3]};function w(e,t,n,o){if(e){if(n)return t&&o?b:y;if(t&&o)return p}else if(t&&o)return y;return m}function I(e,t){let{scale:n,translate:o}=e;return Math.round((t-o[0])/n[0])}function N(e,t){let{scale:n,translate:o}=e;return Math.round((o[1]-t)/n[1])}function v(e,t,n){let{scale:o,translate:r}=e;return t*o[n]+r[n]}function M(e,t,n){return e?t?n?Z(e):T(e):n?P(e):G(e):null}function G(e){const t=e.coords;return{x:t[0],y:t[1]}}function F(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e}function T(e){const t=e.coords;return{x:t[0],y:t[1],z:t[2]}}function A(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e.coords[2]=t.z,e}function P(e){const t=e.coords;return{x:t[0],y:t[1],m:t[2]}}function x(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e.coords[2]=t.m,e}function Z(e){const t=e.coords;return{x:t[0],y:t[1],z:t[2],m:t[3]}}function k(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e.coords[2]=t.z,e.coords[3]=t.m,e}function q(e,t){return e&&t?k:e?A:t?x:F}function j(e,t){return(arguments.length>2&&void 0!==arguments[2]?arguments[2]:q(null!=t.z,null!=t.m))(e,t)}function O(e,t,n){if(null==e)return null;const o=f(t,n),r=[];for(let s=0;s<e.coords.length;s+=o){const t=[];for(let n=0;n<o;n++)t.push(e.coords[s+n]);r.push(t)}return t?n?{points:r,hasZ:t,hasM:n}:{points:r,hasZ:t}:n?{points:r,hasM:n}:{points:r}}function z(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:f(t.hasZ,t.hasM);e.lengths[0]=t.points.length;const o=e.coords;let r=0;for(const s of t.points)for(let e=0;e<n;e++)o[r++]=s[e];return e}function L(e,t,n){if(!e)return null;const o=f(t,n),{coords:r,lengths:s}=e,l=[];let i=0;for(const u of s){const e=[];for(let t=0;t<u;t++){const t=[];for(let e=0;e<o;e++)t.push(r[i++]);e.push(t)}l.push(e)}return t?n?{paths:l,hasZ:t,hasM:n}:{paths:l,hasZ:t}:n?{paths:l,hasM:n}:{paths:l}}function Y(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:f(t.hasZ,t.hasM);const{lengths:o,coords:r}=e;let s=0;for(const l of t.paths){for(const e of l)for(let t=0;t<n;t++)r[s++]=e[t];o.push(l.length)}return e}function E(e,t,n){if(!e)return null;const o=f(t,n),{coords:r,lengths:s}=e,l=[];let i=0;for(const u of s){const e=[];for(let t=0;t<u;t++){const t=[];for(let e=0;e<o;e++)t.push(r[i++]);e.push(t)}l.push(e)}return t?n?{rings:l,hasZ:t,hasM:n}:{rings:l,hasZ:t}:n?{rings:l,hasM:n}:{rings:l}}function R(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.hasZ,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:t.hasM;return S(e,t.rings,n,o)}function S(e,t,n,o){const r=f(n,o),{lengths:s,coords:l}=e;let i=0;ue(e);for(const u of t){for(const e of u)for(let t=0;t<r;t++)l[i++]=e[t];s.push(u.length)}return e}const U=[],_=[];function C(e,t,n,o,r){U[0]=e;const[s]=V(_,U,t,n,o,r);return ce(U),ce(_),s}function V(e,t,n,r,s,l){if(ce(e),!n){for(const n of t){const t=l?n.attributes[l]:void 0;e.push(new c.Om(null,n.attributes,null,t))}return e}switch(n){case"esriGeometryPoint":return function(e,t,n,o,r){const s=q(n,o);for(const{geometry:l,attributes:i}of t){const t=null!=l?s(new a.A,l):null;e.push(new c.Om(t,i,null,r?i[r]:void 0))}return e}(e,t,r,s,l);case"esriGeometryMultipoint":return function(e,t,n,o,r){const s=f(n,o);for(const{geometry:l,attributes:i}of t){const t=null!=l?z(new a.A,l,s):null;e.push(new c.Om(t,i,null,r?i[r]:void 0))}return e}(e,t,r,s,l);case"esriGeometryPolyline":return function(e,t,n,o,r){const s=f(n,o);for(const{geometry:l,attributes:i,centroid:u}of t){const t=null!=l?Y(new a.A,l,s):null,n=null!=u?j(new a.A,u):null;e.push(new c.Om(t,i,n,r?i[r]:void 0))}return e}(e,t,r,s,l);case"esriGeometryPolygon":case"esriGeometryMultiPatch":return function(e,t,n,o,r){for(const{geometry:s,centroid:l,attributes:i}of t){const t=null!=s?R(new a.A,s,n,o):null,u=r?i[r]:void 0;null!=l?e.push(new c.Om(t,i,F(new a.A,l),u)):e.push(new c.Om(t,i,null,u))}return e}(e,t,r,s,l);default:d().error("convertToFeatureSet:unknown-geometry",new o.A(`Unable to parse unknown geometry type '${n}'`)),ce(e)}return e}function X(e,t,n,o){_[0]=e,$(U,_,t,n,o);const r=U[0];return ce(U),ce(_),r}function B(e,t,n){if(null==e)return null;const r=new a.A;return"hasZ"in e&&null==t&&(t=e.hasZ),"hasM"in e&&null==n&&(n=e.hasM),(0,u.fT)(e)?q(null!=t?t:null!=e.z,null!=n?n:null!=e.m)(r,e):(0,u.Bi)(e)?R(r,e,t,n):(0,u.Rg)(e)?Y(r,e,f(t,n)):(0,u.U9)(e)?z(r,e,f(t,n)):void d().error("convertFromGeometry:unknown-geometry",new o.A(`Unable to parse unknown geometry type '${e}'`))}function J(e,t,n,r){const s=e&&("coords"in e?e:e.geometry);if(null==s)return null;switch(t){case"esriGeometryPoint":{let e=G;return n&&r?e=Z:n?e=T:r&&(e=P),e(s)}case"esriGeometryMultipoint":return O(s,n,r);case"esriGeometryPolyline":return L(s,n,r);case"esriGeometryPolygon":return E(s,n,r);default:return d().error("convertToGeometry:unknown-geometry",new o.A(`Unable to parse unknown geometry type '${t}'`)),null}}function $(e,t,n,r,s){if(ce(e),null==n)return function(e,t){for(const n of t)e.push({attributes:n.attributes});return e}(e,t);switch(n){case"esriGeometryPoint":return function(e,t,n,o){let r=G;n&&o?r=Z:n?r=T:o&&(r=P);for(const s of t){const{geometry:t,attributes:n}=s,o=null!=t?r(t):null;e.push({attributes:n,geometry:o})}return e}(e,t,r,s);case"esriGeometryMultipoint":return function(e,t,n,o){for(const{geometry:r,attributes:s}of t)e.push({attributes:s,geometry:null!=r?O(r,n,o):null});return e}(e,t,r,s);case"esriGeometryPolyline":return function(e,t,n,o){for(const{geometry:r,attributes:s}of t)e.push({attributes:s,geometry:null!=r?L(r,n,o):null});return e}(e,t,r,s);case"esriGeometryPolygon":return function(e,t,n,o){for(const{geometry:r,attributes:s,centroid:l}of t){const t=null!=r?E(r,n,o):null;if(null!=l){const n=G(l);e.push({attributes:s,centroid:n,geometry:t})}else e.push({attributes:s,geometry:t})}return e}(e,t,r,s);default:d().error("convertToFeatureSet:unknown-geometry",new o.A(`Unable to parse unknown geometry type '${n}'`))}return e}function D(e){const{objectIdFieldName:t,spatialReference:n,transform:o,fields:r,hasM:s,hasZ:l,features:i,geometryType:u,exceededTransferLimit:c,uniqueIdField:h,queryGeometry:a,queryGeometryType:f}=e,d={features:$([],i,u,l,s),fields:r,geometryType:u,objectIdFieldName:t,spatialReference:n,uniqueIdField:h,queryGeometry:J(a,f,!1,!1)};return o&&(d.transform=o),c&&(d.exceededTransferLimit=c),s&&(d.hasM=s),l&&(d.hasZ=l),d}function Q(e,t){const n=new h.A,{hasM:r,hasZ:s,features:l,objectIdFieldName:i,spatialReference:u,geometryType:c,exceededTransferLimit:a,transform:f,fields:g}=e;return g&&(n.fields=g),n.geometryType=c??null,n.objectIdFieldName=i??t??null,n.spatialReference=u??null,n.objectIdFieldName?(l&&V(n.features,l,c,s,r,n.objectIdFieldName),a&&(n.exceededTransferLimit=a),r&&(n.hasM=r),s&&(n.hasZ=s),f&&(n.transform=f),n):(d().error(new o.A("optimized-features:invalid-objectIdFieldName","objectIdFieldName is missing")),n)}function H(e){const{transform:t,features:n,hasM:o,hasZ:r}=e;if(!t)return e;for(const s of n)null!=s.geometry&&re(s.geometry,s.geometry,o,r,t),null!=s.centroid&&re(s.centroid,s.centroid,o,r,t);return e.transform=null,e}function K(e,t){const{geometryType:n,features:o,hasM:r,hasZ:s}=t;if(!e)return t;for(let l=0;l<o.length;l++){const t=o[l],i=t.weakClone();i.geometry=new a.A,W(i.geometry,t.geometry,r,s,n,e),t.centroid&&(i.centroid=new a.A,W(i.centroid,t.centroid,r,s,"esriGeometryPoint",e)),o[l]=i}return t.transform=e,t}function W(e,t,n,o,r,s){let l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:n,i=arguments.length>7&&void 0!==arguments[7]?arguments[7]:o;if(ue(e),!t?.coords.length)return null;const u=g[r],{coords:c,lengths:h}=t,a=f(n,o),d=f(n&&l,o&&i),m=w(n,o,l,i);if(!h.length)return m(e.coords,c,0,0,I(s,c[0]),N(s,c[1])),ue(e,a,0),e;let y,p,b,v,M=0,G=0,F=G;for(const f of h){if(f<u)continue;let t=0;G=F,b=y=I(s,c[M]),v=p=N(s,c[M+1]),m(e.coords,c,G,M,b,v),t++,M+=a,G+=d;for(let n=1;n<f;n++,M+=a)b=I(s,c[M]),v=N(s,c[M+1]),b===y&&v===p||(m(e.coords,c,G,M,b-y,v-p),G+=d,t++,y=b,p=v);t>=u&&(e.lengths.push(t),F=G)}return ce(e.coords,F),e.coords.length?e:null}function ee(e,t,n,o,r,s){let l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:n,i=arguments.length>7&&void 0!==arguments[7]?arguments[7]:o;if(ue(e),!t?.coords.length)return null;const u=g[r],{coords:c,lengths:h}=t,a=f(n,o),d=f(n&&l,o&&i),m=w(n,o,l,i);if(!h.length)return m(e.coords,c,0,0,c[0],c[1]),ue(e,a,0),e;let y=0;const p=s*s;for(const f of h){if(f<u){y+=f*a;continue}const t=e.coords.length/d,n=y,o=y+(f-1)*a;m(e.coords,c,e.coords.length,n,c[n],c[n+1]),ne(e.coords,c,a,p,m,n,o),m(e.coords,c,e.coords.length,o,c[o],c[o+1]);const r=e.coords.length/d-t;r>=u?e.lengths.push(r):ce(e.coords,t*d),y+=f*a}return e.coords.length?e:null}function te(e,t,n,o){const r=e[t],s=e[t+1],l=e[n],i=e[n+1],u=e[o],c=e[o+1];let h=l,a=i,f=u-h,d=c-a;if(0!==f||0!==d){const e=((r-h)*f+(s-a)*d)/(f*f+d*d);e>1?(h=u,a=c):e>0&&(h+=f*e,a+=d*e)}return f=r-h,d=s-a,f*f+d*d}function ne(e,t,n,o,r,s,l){let i,u=o,c=0;for(let h=s+n;h<l;h+=n)i=te(t,h,s,l),i>u&&(c=h,u=i);u>o&&(c-s>n&&ne(e,t,n,o,r,s,c),r(e,t,e.length,c,t[c],t[c+1]),l-c>n&&ne(e,t,n,o,r,c,l))}function oe(e,t,n,o){if(!t?.coords?.length)return null;const r=f(n,o);let s=Number.POSITIVE_INFINITY,u=Number.POSITIVE_INFINITY,c=Number.NEGATIVE_INFINITY,h=Number.NEGATIVE_INFINITY;if(t&&t.coords){const e=t.coords;for(let t=0;t<e.length;t+=r){const n=e[t],o=e[t+1];s=Math.min(s,n),c=Math.max(c,n),u=Math.min(u,o),h=Math.max(h,o)}}return(0,l.is)(e)?(0,l.BI)(e,s,u,c,h):(0,i.fA)(s,u,c,h,e),e}function re(e,t,n,o,r){const{coords:l,lengths:i}=t,u=f(n,o);if(!l.length)return e!==t&&ue(e),e;(0,s.Lw)(r);const{originPosition:c,scale:h,translate:a}=r,d=he;d.originPosition=c;const g=d.scale;g[0]=h[0]??1,g[1]=-(h[1]??1),g[2]=h[2]??1,g[3]=h[3]??1;const m=d.translate;if(m[0]=a[0]??0,m[1]=a[1]??0,m[2]=a[2]??0,m[3]=a[3]??0,!i.length){for(let t=0;t<u;++t)e.coords[t]=v(d,l[t],t);return e!==t&&ue(e,u,0),e}let y=0;for(let s=0;s<i.length;s++){const t=i[s];e.lengths[s]=t;for(let r=0;r<u;++r)e.coords[y+r]=v(d,l[y+r],r);let n=e.coords[y],o=e.coords[y+1];y+=u;for(let r=1;r<t;r++,y+=u){n+=l[y]*g[0],o+=l[y+1]*g[1],e.coords[y]=n,e.coords[y+1]=o;for(let t=2;t<u;++t)e.coords[y+t]=v(d,l[y+t],t)}}return e!==t&&ue(e,l.length,i.length),e}function se(e,t,n,o,r,s){if(ue(e),e.lengths.push(...t.lengths),n===r&&o===s)for(let l=0;l<t.coords.length;l++)e.coords.push(t.coords[l]);else{const l=f(n,o),i=w(n,o,r,s),u=t.coords;for(let t=0;t<u.length;t+=l)i(e.coords,u,e.coords.length,t,u[t],u[t+1])}return e}function le(e,t,n,o){let r=0,s=e[o*t],l=e[o*(t+1)];for(let i=1;i<n;i++){const n=s+e[o*(t+i)],u=l+e[o*(t+i)+1],c=(n-s)*(u+l);s=n,l=u,r+=c}return.5*r}function ie(e,t){const{coords:n,lengths:o}=e;let r=0,s=0;for(let l=0;l<o.length;l++){const e=o[l];s+=le(n,r,e,t),r+=e}return Math.abs(s)}function ue(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;ce(e.lengths,n),ce(e.coords,t)}function ce(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;e.length!==t&&(e.length=t)}const he={originPosition:"lowerLeft",scale:[1,1,1,1],translate:[0,0,0,0]}}}]);
//# sourceMappingURL=8618.19807b5a.chunk.js.map