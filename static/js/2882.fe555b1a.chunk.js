"use strict";(self.webpackChunkn2_workable_pier=self.webpackChunkn2_workable_pier||[]).push([[2882],{22882:(n,t,e)=>{e.r(t),e.d(t,{registerFunctions:()=>l});var a=e(46405),r=e(9861),i=e(43036),u=e(83528),c=e(43306),o=e(98683);async function s(n,t,e,a){if(1===e.length){if((0,i.o)(e[0]))return(0,u.t)(n,e[0],(0,i.K)(e[1],-1));if((0,i.q)(e[0]))return(0,u.t)(n,e[0].toArray(),(0,i.K)(e[1],-1))}else if(2===e.length){if((0,i.o)(e[0]))return(0,u.t)(n,e[0],(0,i.K)(e[1],-1));if((0,i.q)(e[0]))return(0,u.t)(n,e[0].toArray(),(0,i.K)(e[1],-1));if((0,i.u)(e[0])){const r=await e[0].load(),u=await d(o.WhereClause.create(e[1],{fieldsIndex:r.getFieldsIndex(),timeZone:r.dateFieldsTimeZoneDefaultUTC}),a,t);return f(t,await e[0].calculateStatistic(n,u,(0,i.K)(e[2],1e3),t.abortSignal))}}else if(3===e.length&&(0,i.u)(e[0])){const r=await e[0].load(),u=await d(o.WhereClause.create(e[1],{fieldsIndex:r.getFieldsIndex(),timeZone:r.dateFieldsTimeZoneDefaultUTC}),a,t);return f(t,await e[0].calculateStatistic(n,u,(0,i.K)(e[2],1e3),t.abortSignal))}return(0,u.t)(n,e,-1)}function f(n,t){return t instanceof c.g?a.lY.fromReaderAsTimeStampOffset(t.toStorageFormat()):t instanceof Date?a.lY.dateJSAndZoneToArcadeDate(t,(0,i.N)(n)):t}async function d(n,t,e){const a=n.getVariables();if(a.length>0){const r=[];for(let n=0;n<a.length;n++){const i={name:a[n]};r.push(await t.evaluateIdentifier(e,i))}const i={};for(let n=0;n<a.length;n++)i[a[n]]=r[n];return n.parameters=i,n}return n}function l(n){"async"===n.mode&&(n.functions.stdev=function(t,e){return n.standardFunctionAsync(t,e,((e,a,r)=>s("stdev",t,r,n)))},n.functions.variance=function(t,e){return n.standardFunctionAsync(t,e,((e,a,r)=>s("variance",t,r,n)))},n.functions.average=function(t,e){return n.standardFunctionAsync(t,e,((e,a,r)=>s("mean",t,r,n)))},n.functions.mean=function(t,e){return n.standardFunctionAsync(t,e,((e,a,r)=>s("mean",t,r,n)))},n.functions.sum=function(t,e){return n.standardFunctionAsync(t,e,((e,a,r)=>s("sum",t,r,n)))},n.functions.min=function(t,e){return n.standardFunctionAsync(t,e,((e,a,r)=>s("min",t,r,n)))},n.functions.max=function(t,e){return n.standardFunctionAsync(t,e,((e,a,r)=>s("max",t,r,n)))},n.functions.count=function(t,e){return n.standardFunctionAsync(t,e,(async(n,a,u)=>{if((0,i.G)(u,1,1,t,e),(0,i.u)(u[0]))return u[0].count(n.abortSignal);if((0,i.o)(u[0])||(0,i.c)(u[0]))return u[0].length;if((0,i.q)(u[0]))return u[0].length();throw new r.D$(t,r.TX.InvalidParameter,e)}))})}}}]);
//# sourceMappingURL=2882.fe555b1a.chunk.js.map