"use strict";(self.webpackChunkn2_workable_pier=self.webpackChunkn2_workable_pier||[]).push([[5537],{420:(e,t,r)=>{r.d(t,{x:()=>i});var n=r(78393),o=r(38496),s=r(93345);function i(e,t){switch(t){case s.WR.TRIANGLES:return"number"==typeof(r=e)?(0,o.tM)(r):(0,n.mg)(r)?new Uint16Array(r):r;case s.WR.TRIANGLE_STRIP:return function(e){const t="number"==typeof e?e:e.length;if(t<3)return[];const r=t-2,n=(0,o.my)(3*r);if("number"==typeof e){let e=0;for(let t=0;t<r;t+=1)t%2==0?(n[e++]=t,n[e++]=t+1,n[e++]=t+2):(n[e++]=t+1,n[e++]=t,n[e++]=t+2)}else{let t=0;for(let o=0;o<r;o+=1)o%2==0?(n[t++]=e[o],n[t++]=e[o+1],n[t++]=e[o+2]):(n[t++]=e[o+1],n[t++]=e[o],n[t++]=e[o+2])}return n}(e);case s.WR.TRIANGLE_FAN:return function(e){const t="number"==typeof e?e:e.length;if(t<3)return new Uint16Array(0);const r=t-2,n=r<=65536?new Uint16Array(3*r):new Uint32Array(3*r);if("number"==typeof e){let e=0;for(let t=0;t<r;++t)n[e++]=0,n[e++]=t+1,n[e++]=t+2;return n}const o=e[0];let s=e[1],i=0;for(let a=0;a<r;++a){const t=e[a+2];n[i++]=o,n[i++]=s,n[i++]=t,s=t}return n}(e)}var r}},2e3:(e,t,r)=>{function n(e,t){o(e.typedBuffer,t,e.typedBufferStride)}function o(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:4;const n=t.typedBuffer,o=t.typedBufferStride,s=t.count;let i=0,a=0;for(let u=0;u<s;++u)e[i]=n[a],e[i+1]=n[a+1],e[i+2]=n[a+2],e[i+3]=n[a+3],i+=r,a+=o}function s(e,t,r,n,o,s){const i=e.typedBuffer,a=e.typedBufferStride,u=s?.count??e.count;let l=(s?.dstIndex??0)*a;for(let c=0;c<u;++c)i[l]=t,i[l+1]=r,i[l+2]=n,i[l+3]=o,l+=a}r.d(t,{a:()=>o,c:()=>n,f:()=>s});Object.freeze(Object.defineProperty({__proto__:null,copy:o,copyView:n,fill:s},Symbol.toStringTag,{value:"Module"}))},10947:(e,t,r)=>{r.d(t,{a:()=>o,b:()=>u,n:()=>i,s:()=>a,t:()=>s});r(81806);var n=r(76460);function o(e,t,r){s(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)}function s(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:4,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:n;if(e.length/n!=t.length/o)return;const s=e.length/n,i=r[0],a=r[1],u=r[2],l=r[3],c=r[4],f=r[5],d=r[6],p=r[7],m=r[8];let h=0,y=0;for(let g=0;g<s;g++){const r=t[h],s=t[h+1],g=t[h+2],x=t[h+3];e[y]=i*r+l*s+d*g,e[y+1]=a*r+c*s+p*g,e[y+2]=u*r+f*s+m*g,e[y+3]=x,h+=o,y+=n}}function i(e,t){const r=Math.min(e.count,t.count),n=e.typedBuffer,o=e.typedBufferStride,s=t.typedBuffer,i=t.typedBufferStride;for(let a=0;a<r;a++){const e=a*o,t=a*i,r=s[t],u=s[t+1],l=s[t+2],c=r*r+u*u+l*l;if(c>0){const t=1/Math.sqrt(c);n[e]=t*r,n[e+1]=t*u,n[e+2]=t*l}}}function a(e,t,r){u(e.typedBuffer,t,r,e.typedBufferStride)}function u(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:4;const o=Math.min(e.length/n,t.count),s=t.typedBuffer,i=t.typedBufferStride;let a=0,u=0;for(let l=0;l<o;l++)e[u]=r*s[a],e[u+1]=r*s[a+1],e[u+2]=r*s[a+2],e[u+3]=r*s[a+3],a+=i,u+=n}Object.freeze(Object.defineProperty({__proto__:null,normalize:i,scale:u,scaleView:a,transformMat3:s,transformMat3View:o,transformMat4:function(e,t,r){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:4,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:o;if(e.length/o!=t.length/s)return void n.A.getLogger("esri.views.3d.support.buffer.math").error("source and destination buffers need to have the same number of elements");const i=e.length/o,a=r[0],u=r[1],l=r[2],c=r[3],f=r[4],d=r[5],p=r[6],m=r[7],h=r[8],y=r[9],g=r[10],x=r[11],v=r[12],b=r[13],w=r[14],B=r[15];let T=0,S=0;for(let n=0;n<i;n++){const r=t[T],n=t[T+1],i=t[T+2],M=t[T+3];e[S]=a*r+f*n+h*i+v*M,e[S+1]=u*r+d*n+y*i+b*M,e[S+2]=l*r+p*n+g*i+w*M,e[S+3]=c*r+m*n+x*i+B*M,T+=s,S+=o}},transformMat4View:function(e,t,r){if(e.count!==t.count)return;const n=e.count,o=r[0],s=r[1],i=r[2],a=r[3],u=r[4],l=r[5],c=r[6],f=r[7],d=r[8],p=r[9],m=r[10],h=r[11],y=r[12],g=r[13],x=r[14],v=r[15],b=e.typedBuffer,w=e.typedBufferStride,B=t.typedBuffer,T=t.typedBufferStride;for(let S=0;S<n;S++){const e=S*w,t=S*T,r=B[t],n=B[t+1],M=B[t+2],R=B[t+3];b[e]=o*r+u*n+d*M+y*R,b[e+1]=s*r+l*n+p*M+g*R,b[e+2]=i*r+c*n+m*M+x*R,b[e+3]=a*r+f*n+h*M+v*R}}},Symbol.toStringTag,{value:"Module"}))},11109:(e,t,r)=>{r.d(t,{R:()=>u});var n=r(3825),o=r(98773),s=r(50076),i=r(50346),a=r(90534);class u{constructor(e){this._streamDataRequester=e}async loadJSON(e,t){return this._load("json",e,t)}async loadBinary(e,t){return(0,a.DB)(e)?((0,i.Te)(t),(0,a.lJ)(e)):this._load("binary",e,t)}async loadImage(e,t){return this._load("image",e,t)}async _load(e,t,r){if(null==this._streamDataRequester)return(await(0,n.A)(t,{responseType:l[e]})).data;const a=await(0,o.Ke)(this._streamDataRequester.request(t,e,r));if(!0===a.ok)return a.value;throw(0,i.QP)(a.error),new s.A("glt-loader-request-error",`Request for resource failed: ${a.error}`)}}const l={image:"image",binary:"array-buffer",json:"json","image+type":void 0}},37040:(e,t,r)=>{r.d(t,{KB:()=>a,Xi:()=>s,pn:()=>u,x3:()=>i});var n=r(81806),o=r(83490);class s{constructor(e){this.data=e,this.type="encoded-mesh-texture",this.encoding=o.JS.KTX2_ENCODING}}function i(e){return"encoded-mesh-texture"===e?.type}async function a(e){const t=new Blob([e]),r=await t.text();return JSON.parse(r)}async function u(e,t){if(t===o.JS.KTX2_ENCODING)return new s(e);const r=new Blob([e],{type:t}),i=URL.createObjectURL(r),a=new Image;if((0,n.A)("esri-iPhone"))return new Promise(((e,t)=>{const r=()=>{o(),e(a)},n=e=>{o(),t(e)},o=()=>{URL.revokeObjectURL(i),a.removeEventListener("load",r),a.removeEventListener("error",n)};a.addEventListener("load",r),a.addEventListener("error",n),a.src=i}));try{a.src=i,await a.decode()}catch(u){console.warn("Failed decoding HTMLImageElement")}return URL.revokeObjectURL(i),a}},45136:(e,t,r)=>{r.d(t,{a:()=>l,b:()=>i,c:()=>s,d:()=>n,e:()=>c,f:()=>u,n:()=>f,s:()=>a,t:()=>o});r(81806),r(76460);function n(e,t,r){o(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)}function o(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:n;if(e.length/n!==Math.ceil(t.length/o))return e;const s=e.length/n,i=r[0],a=r[1],u=r[2],l=r[4],c=r[5],f=r[6],d=r[8],p=r[9],m=r[10],h=r[12],y=r[13],g=r[14];let x=0,v=0;for(let b=0;b<s;b++){const r=t[x],s=t[x+1],b=t[x+2];e[v]=i*r+l*s+d*b+h,e[v+1]=a*r+c*s+p*b+y,e[v+2]=u*r+f*s+m*b+g,x+=o,v+=n}return e}function s(e,t,r){i(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)}function i(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:n;if(e.length/n!==Math.ceil(t.length/o))return;const s=e.length/n,i=r[0],a=r[1],u=r[2],l=r[3],c=r[4],f=r[5],d=r[6],p=r[7],m=r[8];let h=0,y=0;for(let g=0;g<s;g++){const r=t[h],s=t[h+1],g=t[h+2];e[y]=i*r+l*s+d*g,e[y+1]=a*r+c*s+p*g,e[y+2]=u*r+f*s+m*g,h+=o,y+=n}}function a(e,t,r){u(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)}function u(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:n;const s=Math.min(e.length/n,t.length/o);let i=0,a=0;for(let u=0;u<s;u++)e[a]=r*t[i],e[a+1]=r*t[i+1],e[a+2]=r*t[i+2],i+=o,a+=n;return e}function l(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:n;const s=e.length/n;if(s!==Math.ceil(t.length/o))return e;let i=0,a=0;for(let u=0;u<s;u++)e[a]=t[i]+r[0],e[a+1]=t[i+1]+r[1],e[a+2]=t[i+2]+r[2],i+=o,a+=n;return e}function c(e,t){f(e.typedBuffer,t.typedBuffer,e.typedBufferStride,t.typedBufferStride)}function f(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:r;const o=Math.min(e.length/r,t.length/n);let s=0,i=0;for(let a=0;a<o;a++){const o=t[s],a=t[s+1],u=t[s+2],l=o*o+a*a+u*u;if(l>0){const t=1/Math.sqrt(l);e[i]=t*o,e[i+1]=t*a,e[i+2]=t*u}s+=n,i+=r}}Object.freeze(Object.defineProperty({__proto__:null,normalize:f,normalizeView:c,scale:u,scaleView:a,shiftRight:function(e,t,r){const n=Math.min(e.count,t.count),o=e.typedBuffer,s=e.typedBufferStride,i=t.typedBuffer,a=t.typedBufferStride;let u=0,l=0;for(let c=0;c<n;c++)o[l]=i[u]>>r,o[l+1]=i[u+1]>>r,o[l+2]=i[u+2]>>r,u+=a,l+=s},transformMat3:i,transformMat3View:s,transformMat4:o,transformMat4View:n,translate:l},Symbol.toStringTag,{value:"Module"}))},50791:(e,t,r)=>{r.d(t,{T:()=>n});const n=2.1},52007:(e,t,r)=>{r.d(t,{a:()=>s,f:()=>i,n:()=>o});var n=r(78393);function o(e,t){s(e.typedBuffer,t.typedBuffer,e.typedBufferStride,t.typedBufferStride)}function s(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:r;const s=t.length/2;let i=0,a=0;if((0,n.cy)(t)||(0,n.dk)(t)){for(let n=0;n<s;++n)e[i]=t[a],e[i+1]=t[a+1],i+=r,a+=o;return}const u=(0,n.a3)(t);if((0,n.JI)(t))for(let n=0;n<s;++n)e[i]=Math.max(t[a]/u,-1),e[i+1]=Math.max(t[a+1]/u,-1),i+=r,a+=o;else for(let n=0;n<s;++n)e[i]=t[a]/u,e[i+1]=t[a+1]/u,i+=r,a+=o}function i(e,t,r,n){const o=e.typedBuffer,s=e.typedBufferStride,i=n?.count??e.count;let a=(n?.dstIndex??0)*s;for(let u=0;u<i;++u)o[a]=t,o[a+1]=r,a+=s}Object.freeze(Object.defineProperty({__proto__:null,fill:i,normalizeIntegerBuffer:s,normalizeIntegerBufferView:o},Symbol.toStringTag,{value:"Module"}))},64591:(e,t,r)=>{function n(e,t){o(e.typedBuffer,t.typedBuffer,e.typedBufferStride,t.typedBufferStride)}function o(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:r;const o=t.length/n;let s=0,i=0;for(let a=0;a<o;++a)e[s]=t[i],e[s+1]=t[i+1],e[s+2]=t[i+2],s+=r,i+=n}function s(e,t,r,n,o){const s=e.typedBuffer,i=e.typedBufferStride,a=o?.count??e.count;let u=(o?.dstIndex??0)*i;for(let l=0;l<a;++l)s[u]=t,s[u+1]=r,s[u+2]=n,u+=i}r.d(t,{a:()=>n,c:()=>o,f:()=>s});Object.freeze(Object.defineProperty({__proto__:null,copy:o,copyView:n,fill:s},Symbol.toStringTag,{value:"Module"}))},95537:(e,t,r)=>{r.d(t,{fetch:()=>te});var n=r(93795),o=r(15941),s=r(63919),i=r(44680),a=r(34761),u=r(13191),l=r(72745),c=r(20664),f=r(9392),d=r(42294),p=r(75002),m=r(88105),h=r(45136),y=r(10947),g=r(52007),x=r(64591),v=r(2e3),b=r(11109),w=r(420),B=r(37040),T=r(59422);function S(e){if(null==e)return null;const t=null!=e.offset?e.offset:T.uY,r=null!=e.rotation?e.rotation:0,n=null!=e.scale?e.scale:T.Un,o=(0,i.fA)(1,0,0,0,1,0,t[0],t[1],1),a=(0,i.fA)(Math.cos(r),-Math.sin(r),0,Math.sin(r),Math.cos(r),0,0,0,1),u=(0,i.fA)(n[0],0,0,0,n[1],0,0,0,1),l=(0,i.vt)();return(0,s.lw)(l,a,u),(0,s.lw)(l,o,l),l}class M{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}}class R{constructor(e,t,r){this.name=e,this.lodThreshold=t,this.pivotOffset=r,this.stageResources=new M,this.numberOfVertices=0}}var A=r(3825),O=r(98773),I=r(21499),E=r(50076),_=r(76460),P=r(75941),U=r(50346),L=r(19898),C=r(38496),F=r(49003),k=r(50468),N=r(83490),j=r(65883),V=r(18419),q=r(66470),D=r(18479),z=r(93345);const G=()=>_.A.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function $(e,t){const r=await async function(e,t){const r=t?.streamDataRequester;if(r)return async function(e,t,r){const n=await(0,O.Ke)(t.request(e,"json",r));if(!0===n.ok)return n.value;(0,U.QP)(n.error),W(n.error.details.url)}(e,r,t);const n=await(0,O.Ke)((0,A.A)(e,t));if(!0===n.ok)return n.value.data;(0,U.QP)(n.error),W(n.error)}(e,t),n=await async function(e,t){const r=new Array;for(const s in e){const n=e[s],o=n.images[0].data;if(!o){G().warn("Externally referenced texture data is not yet supported");continue}const i=n.encoding+";base64,"+o,a="/textureDefinitions/"+s,u="rgba"===n.channels?n.alphaChannelUsage||"transparency":"none",l={noUnpackFlip:!0,wrap:{s:z.pF.REPEAT,t:z.pF.REPEAT},preMultiplyAlpha:X(u)!==N.sf.Opaque},c=t?.disableTextures?Promise.resolve(null):(0,F.D)(i,t);r.push(c.then((e=>({refId:a,image:e,parameters:l,alphaChannelUsage:u}))))}const n=await Promise.all(r),o={};for(const s of n)o[s.refId]=s;return o}(r.textureDefinitions??{},t);let o=0;for(const s in n)if(n.hasOwnProperty(s)){const e=n[s];o+=e?.image?e.image.width*e.image.height*4:0}return{resource:r,textures:n,size:o+(0,I.iL)(r)}}function W(e){throw new E.A("",`Request for object resource failed: ${e}`)}function J(e){const t=e.params,r=t.topology;let n=!0;switch(t.vertexAttributes||(G().warn("Geometry must specify vertex attributes"),n=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const r in t.vertexAttributes){const t=e[r];t?.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(G().warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),n=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(G().warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),n=!1)):(G().warn(`Indexed geometry does not specify face indices for '${r}' attribute`),n=!1)}}else G().warn("Indexed geometries must specify faces"),n=!1;break}default:G().warn(`Unsupported topology '${r}'`),n=!1}e.params.material||(G().warn("Geometry requires material"),n=!1);const o=e.params.vertexAttributes;for(const s in o)o[s].values||(G().warn("Geometries with externally defined attributes are not yet supported"),n=!1);return n}function K(e){const t=(0,d.Ie)();return e.forEach((e=>{const r=e.boundingInfo;null!=r&&((0,d.iT)(t,r.bbMin),(0,d.iT)(t,r.bbMax))})),t}function X(e){switch(e){case"mask":return N.sf.Mask;case"maskAndTransparency":return N.sf.MaskBlend;case"none":return N.sf.Opaque;default:return N.sf.Blend}}function Q(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const H=new L.R(1,2,"wosr");var Y=r(59046),Z=r(50791),ee=r(78992);async function te(e,t){const i=function(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}((0,n.EM)(e));if("wosr"===i.fileType){const e=await(t.cache?t.cache.loadWOSR(i.url,t):$(i.url,t)),{engineResources:r,referenceBoundingBox:n}=function(e,t){const r=new Array,n=new Array,o=new Array,s=new P.O,i=e.resource,a=L.R.parse(i.version||"1.0","wosr");H.validate(a);const u=i.model.name,l=i.model.geometries,c=i.materialDefinitions??{},d=e.textures;let p=0;const m=new Map;for(let h=0;h<l.length;h++){const e=l[h];if(!J(e))continue;const i=Q(e),a=e.params.vertexAttributes,u=[],y=t=>{if("PerAttributeArray"===e.params.topology)return null;const r=e.params.faces;for(const e in r)if(e===t)return r[e].values;return null},g=a[q.r.POSITION],x=g.values.length/g.valuesPerElement;for(const t in a){const e=a[t],r=e.values,n=y(t)??(0,C.tM)(x);u.push([t,new k.n(r,n,e.valuesPerElement,!0)])}const v=i.texture,b=d&&d[v];if(b&&!m.has(v)){const{image:e,parameters:t}=b,r=new V.g(e,t);n.push(r),m.set(v,r)}const w=m.get(v),B=w?w.id:void 0,T=i.material;let S=s.get(T,v);if(null==S){const e=c[T.slice(T.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const r=b&&b.alphaChannelUsage,n=e.transparency>0||"transparency"===r||"maskAndTransparency"===r,o=b?X(b.alphaChannelUsage):void 0,i={ambient:(0,f.ci)(e.diffuse),diffuse:(0,f.ci)(e.diffuse),opacity:1-(e.transparency||0),transparent:n,textureAlphaMode:o,textureAlphaCutoff:.33,textureId:B,initTextureTransparent:!0,doubleSided:!0,cullFace:N.s2.None,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:b?.parameters.preMultiplyAlpha??!1};t?.materialParameters&&Object.assign(i,t.materialParameters),S=new D.$U(i,t),s.set(T,v,S)}o.push(S);const M=new j.V(S,u);p+=u.find((e=>e[0]===q.r.POSITION))?.[1]?.indices.length??0,r.push(M)}return{engineResources:[{name:u,stageResources:{textures:n,materials:o,geometries:r},pivotOffset:i.model.pivotOffset,numberOfVertices:p,lodThreshold:null}],referenceBoundingBox:K(r)}}(e,t);return{lods:r,referenceBoundingBox:n,isEsriSymbolResource:!1,isWosr:!0}}let T;if(t.cache)T=await t.cache.loadGLTF(i.url,t,!!t.usePBR);else{const{loadGLTF:e}=await r.e(6516).then(r.bind(r,56516));T=await e(new b.R(t.streamDataRequester),i.url,t,t.usePBR)}const M=T.model.meta?.ESRI_proxyEllipsoid,A=T.meta.isEsriSymbolResource&&null!=M&&"EsriRealisticTreesStyle"===T.meta.ESRI_webstyle;A&&!T.customMeta.esriTreeRendering&&(T.customMeta.esriTreeRendering=!0,function(e,t){for(let r=0;r<e.model.lods.length;++r){const n=e.model.lods[r];for(const o of n.parts){const n=o.attributes.normal;if(null==n)return;const s=o.attributes.position,i=s.count,l=(0,f.vt)(),d=(0,f.vt)(),p=(0,f.vt)(),h=new Uint8Array(4*i),y=new Float64Array(3*i),g=(0,a.B8)((0,u.vt)(),o.transform);let x=0,v=0;for(let a=0;a<i;a++){s.getVec(a,d),n.getVec(a,l),(0,c.t)(d,d,o.transform),(0,c.d)(p,d,t.center),(0,c.E)(p,p,t.radius);const i=p[2],u=(0,c.l)(p),f=Math.min(.45+.55*u*u,1);(0,c.E)(p,p,t.radius),null!==g&&(0,c.t)(p,p,g),(0,c.n)(p,p),r+1!==e.model.lods.length&&e.model.lods.length>1&&(0,c.m)(p,p,l,i>-1?.2:Math.min(-4*i-3.8,1)),y[x]=p[0],y[x+1]=p[1],y[x+2]=p[2],x+=3,h[v]=255*f,h[v+1]=255*f,h[v+2]=255*f,h[v+3]=255,v+=4}o.attributes.normal=new m.xs(y),o.attributes.color=new m.XP(h)}}}(T,M));const O=!!t.usePBR,I=T.meta.isEsriSymbolResource?{usePBR:O,isSchematic:!1,treeRendering:A,mrrFactors:ee.SY}:{usePBR:O,isSchematic:!1,treeRendering:!1,mrrFactors:ee.mb},E={...t.materialParameters,treeRendering:A},{engineResources:_,referenceBoundingBox:U}=function(e,t,r,n,i){const a=e.model,u=new Array,c=new Map,f=new Map,b=a.lods.length,T=(0,d.Ie)();return a.lods.forEach(((e,M)=>{const A=!0===n.skipHighLods&&(b>1&&0===M||b>3&&1===M)||!1===n.skipHighLods&&null!=i&&M!==i;if(A&&0!==M)return;const O=new R(e.name,e.lodThreshold,[0,0,0]);e.parts.forEach((e=>{const i=A?new D.$U({},n):function(e,t,r,n,o,s,i,a){const u=t.material+(t.attributes.normal?"_normal":"")+(t.attributes.color?"_color":"")+(t.attributes.texCoord0?"_texCoord0":"")+(t.attributes.tangent?"_tangent":""),c=e.materials.get(t.material),f=null!=t.attributes.texCoord0,d=null!=t.attributes.normal;if(null==c)return null;const p=function(e){switch(e){case"BLEND":return N.sf.Blend;case"MASK":return N.sf.Mask;case"OPAQUE":case null:case void 0:return N.sf.Opaque}}(c.alphaMode);if(!s.has(u)){if(f){const t=function(t){let r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(null!=t&&!i.has(t)){const n=e.textures.get(t);if(null!=n){const e=n.data;i.set(t,new V.g((0,B.x3)(e)?e.data:e,{...n.parameters,preMultiplyAlpha:!(0,B.x3)(e)&&r,encoding:(0,B.x3)(e)&&null!=e.encoding?e.encoding:void 0}))}}};t(c.textureColor,p!==N.sf.Opaque),t(c.textureNormal),t(c.textureOcclusion),t(c.textureEmissive),t(c.textureMetallicRoughness)}const r=c.color[0]**(1/Z.T),m=c.color[1]**(1/Z.T),h=c.color[2]**(1/Z.T),y=c.emissiveFactor[0]**(1/Z.T),g=c.emissiveFactor[1]**(1/Z.T),x=c.emissiveFactor[2]**(1/Z.T),v=null!=c.textureColor&&f?i.get(c.textureColor):null,b=(0,ee.Jr)({normalTexture:c.textureNormal,metallicRoughnessTexture:c.textureMetallicRoughness,metallicFactor:c.metallicFactor,roughnessFactor:c.roughnessFactor,emissiveTexture:c.textureEmissive,emissiveFactor:c.emissiveFactor,occlusionTexture:c.textureOcclusion}),w=null!=c.normalTextureTransform?.scale?c.normalTextureTransform?.scale:l.Un;s.set(u,new D.$U({...n,transparent:p===N.sf.Blend,customDepthTest:N.it.Lequal,textureAlphaMode:p,textureAlphaCutoff:c.alphaCutoff,diffuse:[r,m,h],ambient:[r,m,h],opacity:c.opacity,doubleSided:c.doubleSided,doubleSidedType:"winding-order",cullFace:c.doubleSided?N.s2.None:N.s2.Back,hasVertexColors:!!t.attributes.color,hasVertexTangents:!!t.attributes.tangent,normalType:d?Y.W.Attribute:Y.W.ScreenDerivative,castShadows:!0,receiveShadows:c.receiveShadows,receiveAmbientOcclusion:c.receiveAmbientOcclustion,textureId:null!=v?v.id:void 0,colorMixMode:c.colorMixMode,normalTextureId:null!=c.textureNormal&&f?i.get(c.textureNormal).id:void 0,textureAlphaPremultiplied:null!=v&&!!v.parameters.preMultiplyAlpha,occlusionTextureId:null!=c.textureOcclusion&&f?i.get(c.textureOcclusion).id:void 0,emissiveTextureId:null!=c.textureEmissive&&f?i.get(c.textureEmissive).id:void 0,metallicRoughnessTextureId:null!=c.textureMetallicRoughness&&f?i.get(c.textureMetallicRoughness).id:void 0,emissiveFactor:[y,g,x],mrrFactors:b?ee.Bt:[c.metallicFactor,c.roughnessFactor,n.mrrFactors[2]],isSchematic:b,colorTextureTransformMatrix:S(c.colorTextureTransform),normalTextureTransformMatrix:S(c.normalTextureTransform),scale:[w[0],w[1]],occlusionTextureTransformMatrix:S(c.occlusionTextureTransform),emissiveTextureTransformMatrix:S(c.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:S(c.metallicRoughnessTextureTransform),...o},a))}const m=s.get(u);if(r.stageResources.materials.push(m),f){const e=e=>{null!=e&&r.stageResources.textures.push(i.get(e))};e(c.textureColor),e(c.textureNormal),e(c.textureOcclusion),e(c.textureEmissive),e(c.textureMetallicRoughness)}return m}(a,e,O,t,r,c,f,n),{geometry:u,vertexCount:b}=function(e,t){const r=e.attributes.position.count,n=(0,w.x)(e.indices||r,e.primitiveType),i=(0,p.oe)(3*r),{typedBuffer:a,typedBufferStride:u}=e.attributes.position;(0,h.t)(i,a,e.transform,3,u);const l=[[q.r.POSITION,new k.n(i,n,3,!0)]];if(null!=e.attributes.normal){const t=(0,p.oe)(3*r),{typedBuffer:i,typedBufferStride:a}=e.attributes.normal;(0,s.Ge)(re,e.transform),(0,h.b)(t,i,re,3,a),(0,o.or)(re)&&(0,h.n)(t,t),l.push([q.r.NORMAL,new k.n(t,n,3,!0)])}if(null!=e.attributes.tangent){const t=(0,p.oe)(4*r),{typedBuffer:i,typedBufferStride:a}=e.attributes.tangent;(0,s.z0)(re,e.transform),(0,y.t)(t,i,re,4,a),(0,o.or)(re)&&(0,h.n)(t,t,4),l.push([q.r.TANGENT,new k.n(t,n,4,!0)])}if(null!=e.attributes.texCoord0){const t=(0,p.oe)(2*r),{typedBuffer:o,typedBufferStride:s}=e.attributes.texCoord0;(0,g.a)(t,o,2,s),l.push([q.r.UV0,new k.n(t,n,2,!0)])}const c=e.attributes.color;if(null!=c){const t=new Uint8Array(4*r);4===c.elementCount?c instanceof m.Eq?(0,y.b)(t,c,255):c instanceof m.XP?(0,v.a)(t,c):c instanceof m.Uz&&(0,y.b)(t,c,1/256):(t.fill(255),c instanceof m.xs?(0,h.f)(t,c.typedBuffer,255,4,c.typedBufferStride):e.attributes.color instanceof m.eI?(0,x.c)(t,c.typedBuffer,4,e.attributes.color.typedBufferStride):e.attributes.color instanceof m.nS&&(0,h.f)(t,c.typedBuffer,1/256,4,c.typedBufferStride)),l.push([q.r.COLOR,new k.n(t,n,4,!0)])}return{geometry:new j.V(t,l),vertexCount:r}}(e,i??new D.$U({},n)),R=u.boundingInfo;null!=R&&0===M&&((0,d.iT)(T,R.bbMin),(0,d.iT)(T,R.bbMax)),null!=i&&(O.stageResources.geometries.push(u),O.numberOfVertices+=b)})),A||u.push(O)})),{engineResources:u,referenceBoundingBox:T}}(T,I,E,t,i.specifiedLodIndex);return{lods:_,referenceBoundingBox:U,isEsriSymbolResource:T.meta.isEsriSymbolResource,isWosr:!1}}const re=(0,i.vt)()}}]);
//# sourceMappingURL=5537.59425edc.chunk.js.map