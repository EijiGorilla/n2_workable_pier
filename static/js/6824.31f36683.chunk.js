"use strict";(self.webpackChunkn2_workable_pier=self.webpackChunkn2_workable_pier||[]).push([[6824],{12016:(e,t,i)=>{i.d(t,{B:()=>l});var r=i(18690),n=i(54901),s=i(76460),o=i(50346),a=i(16783);class l{constructor(e,t,i,r){let n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};this._mainMethod=t,this._transferLists=i,this._listeners=[],this._promise=(0,a.ho)(e,{...n,schedule:r}).then((e=>{if(void 0===this._thread){this._thread=e,this._promise=null,n.hasInitialize&&this.broadcast({},"initialize");for(const e of this._listeners)this._connectListener(e)}else e.close()})),this._promise.catch((t=>s.A.getLogger("esri.core.workers.WorkerHandle").error(`Failed to initialize ${e} worker: ${t}`)))}on(e,t){const i={removed:!1,eventName:e,callback:t,threadHandle:null};return this._listeners.push(i),this._connectListener(i),(0,n.hA)((()=>{i.removed=!0,(0,r.TF)(this._listeners,i),this._thread&&null!=i.threadHandle&&i.threadHandle.remove()}))}destroy(){this._thread&&(this._thread.close(),this._thread=null),this._promise=null,this._listeners.length=0,this._transferLists={}}invoke(e,t){return this.invokeMethod(this._mainMethod,e,t)}invokeMethod(e,t,i){if(this._thread){const r=this._transferLists[e],n=r?r(t):[];return this._thread.invoke(e,t,{transferList:n,signal:i})}return this._promise?this._promise.then((()=>((0,o.Te)(i),this.invokeMethod(e,t,i)))):Promise.reject(null)}broadcast(e,t){return this._thread?Promise.all(this._thread.broadcast(t,e)).then((()=>{})):this._promise?this._promise.then((()=>this.broadcast(e,t))):Promise.reject()}get promise(){return this._promise}_connectListener(e){this._thread&&this._thread.on(e.eventName,e.callback).then((t=>{e.removed||(e.threadHandle=t)}))}}},12482:(e,t,i)=>{i.d(t,{$7:()=>b,B:()=>f,Fo:()=>m,M7:()=>v,Q5:()=>y,XF:()=>w,bK:()=>o,bh:()=>d,id:()=>c,ky:()=>l,qt:()=>L,tW:()=>p,w7:()=>a,wS:()=>_,xS:()=>g});var r=i(31633),n=i(59097);function s(e){return e?L:M}function o(e,t){return null!=t?t:s(e)}function a(e,t){return function(e,t){return t?.mode?t.mode:s(e).mode}(null==e||(e.hasZ??!1),t)}function l(e){const t=u(e);return a(e.geometry,t)}function d(e){const t=u(e),i=a(e.geometry,t),r=null!=t&&"on-the-ground"!==i?v(t):0,n=t?.featureExpressionInfo;return{mode:i,offset:r,featureExpressionInfo:n}}function u(e){return e.layer&&"elevationInfo"in e.layer?e.layer.elevationInfo:null}function h(e,t){if(!e?.offset)return 0;const{offset:i,unit:n}=e;if("decimal-degrees"===n)return 0;const s="unknown"!==n&&n?n:"meters",o=(0,r.mq)(t);return o?(0,r.oU)(i,s,o):0}function c(e,t,i){if(!i?.mode)return;const r=e.hasZ?e.z:0,n=h(i,e.spatialReference);switch(i.mode){case"absolute-height":return r-n;case"on-the-ground":return 0;case"relative-to-ground":return r-((t.elevationProvider.getElevation(e.x,e.y,r,e.spatialReference,"ground")??0)+n);case"relative-to-scene":return r-((t.elevationProvider.getElevation(e.x,e.y,r,e.spatialReference,"scene")??0)+n)}}function _(e,t,i){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return m(e,t.x,t.y,t.hasZ?t.z:0,t.spatialReference,i,r)}function g(e,t,i,r){let n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return m(e,t[0],t[1],t.length>2?t[2]:0,i,r,n)}function m(e,t,i,r,n,s){let o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;if(null==s)return;const a=null!=o?o.mode:"absolute-height";if("on-the-ground"===a)return 0;const{absoluteZ:l}=y(t,i,r,n,e,s);return function(e,t,i,r,n,s,o,a){const l=h(o,n);switch(a){case"absolute-height":return e-l;case"relative-to-ground":return e-((s.elevationProvider.getElevation(t,i,r,n,"ground")??0)+l);case"relative-to-scene":return e-((s.elevationProvider.getElevation(t,i,r,n,"scene")??0)+l)}}(l,t,i,r,n,e,o,a)}function y(e,t,i,r,n,s){const o=h(s,r);switch(s.mode){case"absolute-height":return{absoluteZ:i+o,elevation:0};case"on-the-ground":{const i=n.elevationProvider.getElevation(e,t,0,r,"ground")??0;return{absoluteZ:i,elevation:i}}case"relative-to-ground":{const s=n.elevationProvider.getElevation(e,t,i,r,"ground")??0;return{absoluteZ:i+s+o,elevation:s}}case"relative-to-scene":{const s=n.elevationProvider.getElevation(e,t,i,r,"scene")??0;return{absoluteZ:i+s+o,elevation:s}}}}function f(e,t,i){return i&&i.mode!==t?`${e} only support ${t} elevation mode`:null}function b(e,t,i){return i?.mode===t?`${e} do not support ${t} elevation mode`:null}function p(e,t){return null!=t?.featureExpressionInfo&&"0"!==t.featureExpressionInfo.expression?`${e} do not support featureExpressionInfo`:null}function w(e,t){t&&e.warn(".elevationInfo=",t)}function v(e){return(e?.offset??0)*(0,n.Ao)(e?.unit)}const L={mode:"absolute-height",offset:0},M={mode:"on-the-ground",offset:null}},28586:(e,t,i)=>{var r,n,s,o,a,l,d,u,h,c,_,g,m,y,f;i.d(t,{Pl:()=>b,Qg:()=>f,vE:()=>p}),function(e){e.U8="U8",e.I8="I8",e.U16="U16",e.I16="I16",e.U32="U32",e.I32="I32",e.F32="F32",e.F64="F64",e.Utf8String="Utf8String",e.NotSet="NotSet"}(r||(r={})),function(e){e.Png="Png",e.Jpeg="Jpeg",e.Dds="Dds",e.Raw="Raw",e.Dxt1="Dxt1",e.Dxt5="Dxt5",e.Etc2="Etc2",e.Astc="Astc",e.Pvrtc="Pvrtc",e.NotSet="NotSet"}(n||(n={})),function(e){e.Rgb8="Rgb8",e.Rgba8="Rgba8",e.R8="R8",e.Bgr8="Bgr8",e.Bgra8="Bgra8",e.Rg8="Rg8",e.Dxt1="Dxt1",e.Dxt5="Dxt5",e.NotSet="NotSet"}(s||(s={})),function(e){e.Position="Position",e.Normal="Normal",e.TexCoord="TexCoord",e.Color="Color",e.Tangent="Tangent",e.FeatureIndex="FeatureIndex",e.UvRegion="UvRegion",e.NotSet="NotSet"}(o||(o={})),function(e){e.Opaque="Opaque",e.Mask="Mask",e.Blend="Blend"}(a||(a={})),function(e){e.None="None",e.Mask="Mask",e.Alpha="Alpha",e.PreMultAlpha="PreMultAlpha",e.NotSet="NotSet"}(l||(l={})),function(e){e.Points="Points",e.Lines="Lines",e.LineStrip="LineStrip",e.Triangles="Triangles",e.TriangleStrip="TriangleStrip",e.NotSet="NotSet"}(d||(d={})),function(e){e.None="None",e.WrapXBit="WrapXBit",e.WrapYBit="WrapYBit",e.WrapXy="WrapXy",e.NotSet="NotSet"}(u||(u={})),function(e){e.Linear="Linear",e.Nearest="Nearest",e.NotSet="NotSet"}(h||(h={})),function(e){e.Linear="Linear",e.Nearest="Nearest",e.NearestMipmapNearest="NearestMipmapNearest",e.LinearMipmapNearest="LinearMipmapNearest",e.NearestMipmapLinear="NearestMipmapLinear",e.LinearMipmapLinear="LinearMipmapLinear",e.NotSet="NotSet"}(c||(c={})),function(e){e.FeatureId="FeatureId",e.GlobalUid="GlobalUid",e.UnspecifiedDateTime="UnspecifiedDateTime",e.EcmaIso8601DateTime="EcmaIso8601DateTime",e.EcmaIso8601DateOnly="EcmaIso8601DateOnly",e.TimeOnly="TimeOnly",e.TimeStamp="TimeStamp",e.ColorRgb="ColorRgb",e.ColorRgba="ColorRgba",e.Unrecognized="Unrecognized",e.NotSet="NotSet"}(_||(_={})),function(e){e.Texture="Texture",e.VertexAtrb="VertexAtrb",e.Implicit="Implicit",e.NotSet="NotSet"}(g||(g={})),function(e){e.Front="Front",e.Back="Back",e.None="None",e.NotSet="NotSet"}(m||(m={})),function(e){e.Pbr="Pbr",e.Unlit="Unlit"}(y||(y={})),function(e){e[e.Succeeded=0]="Succeeded",e[e.Failed=1]="Failed",e[e.MissingInputs=2]="MissingInputs"}(f||(f={}));const b=-1,p=-2},43414:(e,t,i)=>{i.d(t,{a:()=>n,h:()=>s});var r=i(28899);function n(){return new Promise((e=>i.e(4001).then(i.bind(i,26382)).then((e=>e.l)).then((t=>{let{default:i}=t;const r=i({locateFile:o,onRuntimeInitialized:()=>e(r)})})))).catch((e=>{throw e}))}function s(){return new Promise((e=>i.e(3409).then(i.bind(i,23409)).then((e=>e.l)).then((t=>{let{default:i}=t;const r=i({locateFile:o,onRuntimeInitialized:()=>e(r)})})))).catch((e=>{throw e}))}function o(e){return(0,r.s)(`esri/libs/lyr3d/${e}`)}},96824:(e,t,i)=>{i.r(t),i.d(t,{default:()=>v});var r=i(35143),n=i(3825),s=i(91967),o=i(76460),a=i(50346),l=i(68134),d=i(52394),u=i(46053),h=(i(81806),i(47249),i(85842)),c=i(28586),_=i(12016);class g extends _.B{constructor(e){super("Lyr3DWorker","process",{process:e=>e.inputs},e,{hasInitialize:!0})}destroyWasm(){return this.broadcast({},"destroyWasm")}}var m,y,f,b=i(43414),p=i(12482);(f=m||(m={}))[f.Lifetime=0]="Lifetime",f[f.Jobs=1]="Jobs",f[f.Renderables=2]="Renderables",function(e){e[e.Critical=0]="Critical",e[e.Error=1]="Error",e[e.Warning=2]="Warning",e[e.Info=3]="Info"}(y||(y={}));let w=class extends s.A{constructor(e){super(e),this._lyr3DMainPromise=null,this._lyr3DMain=null,this._layers=new Map,this._debugFlags=new Set,this._debugLevel=y.Critical,this._wasmNotLoaded="method requiring WASM was called when WASM isn't loaded",this._pulseTaskHandle=null,this._session=null,this._debugFlags.add(m.Lifetime),this._debugFlags.add(m.Jobs),this._debugFlags.add(m.Renderables)}_debugLog(e,t,i){let r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];if(this._debugFlags.has(e)&&this._debugLevel>=t){const e=r?`[js] ${i}`:`${i}`;t===y.Critical||t===y.Error?o.A.getLogger(this).error(e):t===y.Warning&&o.A.getLogger(this).warn(e),o.A.getLogger(this).info(e)}}initialize(){this._debugLevel>y.Warning&&(o.A.getLogger(this).level="info"),this._debugLog(m.Lifetime,y.Info,"Lyr3DWasmPerSceneView.initialize()"),this.addHandles([(0,l.wB)((()=>this.view.state?.contentCamera),(()=>this._updateWasmCamera()))]),this._pulseTaskHandle=(0,d.mg)({preRender:()=>this._pulseTask()})}destroy(){this._debugLog(m.Lifetime,y.Info,"Lyr3DWasmPerSceneView.destroy()"),this._lyr3DMain&&(this._layers.forEach((e=>{e.abortController.abort()})),this._lyr3DMain.uninitialize_lyr3d_wasm(),this._lyr3DMain=null);const e=this._worker;e&&e.destroyWasm().then((()=>{this._worker?.destroy(),this._worker=null})),this._pulseTaskHandle?.remove(),this._pulseTaskHandle=null}add3DTilesLayerView(e){return this._lyr3DMain?this._add3DTilesLayerView(e):(this._debugLog(m.Lifetime,y.Error,"Lyr3DWasmPerSceneView.add3DTilesLayerView() called when WASM wasn't initialized"),c.vE)}remove3DTilesLayerView(e){if(!this._lyr3DMain)return this._debugLog(m.Lifetime,y.Error,this._wasmNotLoaded),0;this._doRemoveLayerView(e);const t=this._layers.size;return 0===t&&(this._debugLog(m.Lifetime,y.Info,"Lyr3DWasmPerSceneView.remove3DTilesLayerView() no Lyr3D layers left after removing a layer, destroying"),this.destroy()),t}setEnabled(e,t){if(!this._lyr3DMain)return void this._debugLog(m.Lifetime,y.Error,this._wasmNotLoaded);const i=this._layers.get(e.wasmLayerId);i&&(this._lyr3DMain.set_enabled(e.wasmLayerId,t),i.needMemoryUsageUpdate=!0,i.needFrame=!0,i.layerView.updatingFlagChanged())}setLayerOffset(e,t){this._lyr3DMain?this._layers.get(e.wasmLayerId)&&this._lyr3DMain.set_carto_offset_z(e.wasmLayerId,t):this._debugLog(m.Lifetime,y.Error,this._wasmNotLoaded)}getAttributionText(){return this._lyr3DMain?this._lyr3DMain.get_current_attribution_text().split("|"):(this._debugLog(m.Lifetime,y.Error,this._wasmNotLoaded),[])}onRenderableEvicted(e,t,i){this._lyr3DMain?this._layers.get(e.wasmLayerId)&&this._lyr3DMain.on_renderable_evicted(e.wasmLayerId,t,i):this._debugLog(m.Lifetime,y.Error,this._wasmNotLoaded)}isUpdating(e){if(!this._lyr3DMain&&this._lyr3DMainPromise)return!0;const t=this._layers.get(e);return!!t&&(t.outstandingJobCount>0||t.outstandingRenderableCount>0||t.needFrame)}initializeWasm(e){return this._lyr3DMain?Promise.resolve():(this._debugLog(m.Lifetime,y.Info,"Lyr3DWasmPerSceneView.initializeWasm()"),this._lyr3DMainPromise||(this._lyr3DMainPromise=(0,b.a)().then((t=>{this._lyr3DMain=t,this._lyr3DMainPromise=null;const i=this._lyr3DMain.addFunction(this._onNewJob.bind(this),"v"),r=this._lyr3DMain.addFunction(this._onNewRenderable.bind(this),"v"),n=this._lyr3DMain.addFunction(this._freeRenderables.bind(this),"viii"),s=this._lyr3DMain.addFunction(this._setRenderableVisibility.bind(this),"viiii"),o=this._lyr3DMain.addFunction(this._onWasmError.bind(this),"viiii"),a="global"===this.view.viewingMode,l=this.view.renderSpatialReference?.isWebMercator?3857:this.view.renderSpatialReference?.wkid??-1,d=this.view.heightModelInfo?.heightModel,u=!d||"gravity-related-height"===d;return this._lyr3DMain.initialize_lyr3d_wasm(o,i,r,n,s,e,a,u,l,this._debugLevel)?(this._worker=new g(function(e){return t=>{if(e.immediate)return e.immediate.schedule(t);const i="No immediate scheduler";throw console.error(i),new Error(i)}}(this.view.resourceController)),this._worker.promise?this._worker.promise:void 0):(this._lyr3DMain=null,void this._debugLog(m.Lifetime,y.Critical,"Lyr3d Main WASM failed to initialize",!1))})).catch((e=>{this._debugLog(m.Lifetime,y.Critical,`Lyr3d WASM failed to download error = ${e}`,!1)}))),this._lyr3DMainPromise)}_pulseTask(){if(this._lyr3DMain){let e=0,t=0;this._layers.forEach((i=>{e+=i.layerView.usedMemory,t+=i.layerView.cachedMemory})),e/=1048576,t/=1048576;const i=this.view.resourceController.memoryController,r=i.usedMemory*i.maxMemory-e;this._lyr3DMain.frame_pulse(i.memoryFactor,e,t,r,i.maxMemory),this._layers.forEach((e=>{!0===e.needFrame&&(e.needFrame=!1,e.layerView.updatingFlagChanged())}))}}_incrementJobCount(e){e.outstandingJobCount+=1,1===e.outstandingJobCount&&e.outstandingRenderableCount<1&&e.layerView.updatingFlagChanged()}_decrementJobCount(e){e.outstandingJobCount-=1,0===e.outstandingJobCount&&e.outstandingRenderableCount<1&&e.layerView.updatingFlagChanged()}_incrementRenderableCount(e){e.outstandingRenderableCount+=1,e.outstandingJobCount<1&&1===e.outstandingRenderableCount&&e.layerView.updatingFlagChanged()}_decrementRenderableCount(e){e.outstandingRenderableCount-=1,e.outstandingJobCount<1&&0===e.outstandingRenderableCount&&e.layerView.updatingFlagChanged()}_onJobFailed(e,t,i){t.error.length&&this._debugLog(m.Jobs,y.Error,t.error,!1),this._lyr3DMain&&this._lyr3DMain.on_job_failed(i.jobId,i.desc),this._decrementJobCount(e)}_onJobSucceeded(e,t,i){if(this._lyr3DMain){const e=t.data.byteLength,r=this._lyr3DMain._malloc(e);new Uint8Array(this._lyr3DMain.HEAPU8.buffer,r,e).set(t.data),this._lyr3DMain.on_job_completed(i.jobId,t.jobDescJson,r,e),this._lyr3DMain._free(r)}this._decrementJobCount(e)}_getRequestPromises(e,t,i){const r=[];for(const s of e){const e=new URL(s),o=e.searchParams.get("session");o?this._session=o:!this._session||e.origin===i.origin&&e.pathname===i.pathname||e.searchParams.append("session",this._session),r.push((0,n.A)(e.toString(),t).then((e=>e.data)))}return r}_onNewJob(){const e=this._lyr3DMain.get_next_job(),t=this._layers.get(e.layerId);if(!t)return;this._incrementJobCount(t);const i=t.abortController.signal,r={responseType:"array-buffer",signal:i,query:{...t.customParameters,token:t.apiKey}},n={inputs:[],jobDescJson:e.desc,isMissingResourceCase:!1},s=new URL(t.layerView.layer.url),o=this._getRequestPromises(e.urls,r,s);Promise.all(o).then((e=>(n.inputs=e,this._worker.invoke(n,i)))).then((e=>e)).catch((t=>((0,a.zf)(t)?this._debugLog(m.Jobs,y.Warning,`job ${e.jobId} was cancelled.`):this._debugLog(m.Jobs,y.Error,`job ${e.jobId} failed with error ${t}.`),{status:c.Qg.Failed,error:"",jobDescJson:"",data:new Uint8Array(0),missingInputUrls:[],inputs:[]}))).then((o=>{if(o.status===c.Qg.Failed)this._onJobFailed(t,o,e);else if(o.status===c.Qg.Succeeded)this._onJobSucceeded(t,o,e);else if(o.status===c.Qg.MissingInputs){const l=this._getRequestPromises(o.missingInputUrls,r,s);Promise.all(l).then((e=>{n.jobDescJson=o.jobDescJson,o.originalInputs?n.inputs=o.originalInputs:n.inputs=[],n.isMissingResourceCase=!0;for(const t of e)n.inputs.push(t);return this._worker.invoke(n,i)})).then((i=>{i.status===c.Qg.Failed?this._onJobFailed(t,i,e):i.status===c.Qg.Succeeded&&this._onJobSucceeded(t,i,e)})).catch((i=>{this._decrementJobCount(t),(0,a.zf)(i)?this._debugLog(m.Jobs,y.Warning,`job ${e.jobId} was cancelled.`):this._debugLog(m.Jobs,y.Error,`job ${e.jobId} failed with error2 ${i}.`),this._lyr3DMain&&this._lyr3DMain.on_job_failed(e.jobId,e.desc)}))}}))}_onNewRenderable(){const e=this._lyr3DMain.get_next_renderable(),t=e.meshData;if(t.data&&t.data.byteLength>0){const e=t.data.slice();t.data=e}const i=this._layers.get(e.layerId);i&&(this._incrementRenderableCount(i),i.layerView.createRenderable(e).then((t=>{this._lyr3DMain&&this._lyr3DMain.on_renderable_created(!0,e.layerId,e.handle,t.memUsageBytes),this._decrementRenderableCount(i)})).catch((t=>{(0,a.zf)(t)||this._debugLog(m.Renderables,y.Error,`createRenderable failed with error ${t}.`),this._lyr3DMain&&this._lyr3DMain.on_renderable_created(!1,e.layerId,e.handle,0),this._decrementRenderableCount(i)})))}_freeRenderables(e,t,i){if(i<1)return;const r=this._layers.get(e);if(!r)return;const n=r.layerView,s=[],o=new Uint32Array(this._lyr3DMain.HEAPU32.buffer,t,i);for(let a=0;a<i;++a)s.push(o[a]);for(let a=0;a<i;++a)n.freeRenderable(s[a])}_setRenderableVisibility(e,t,i,r){if(r<1)return;const n=this._layers.get(e);if(!n)return;const s=n.layerView,o=[],a=[],l=new Uint32Array(this._lyr3DMain.HEAPU32.buffer,t,r),d=new Uint8Array(this._lyr3DMain.HEAPU8.buffer,i,r);for(let u=0;u<r;++u)o.push(l[u]),a.push(1===d[u]);s.setRenderableVisibility(o,a,r)}_onWasmError(e,t,i,r){this._lyr3DMain&&this._debugLog(i,r,this._lyr3DMain.UTF8ToString(e,t),!1)}_doRemoveLayerView(e){const t=this._layers.get(e.wasmLayerId);return!!t&&(t.abortController.abort(),this._lyr3DMain.remove_layer(e.wasmLayerId),this._layers.delete(e.wasmLayerId),!0)}_add3DTilesLayerView(e){const t=e.layer;if(!t.url)return c.Pl;const i=this._lyr3DMain.get_next_layer_id(),r=new AbortController;this._layers.set(i,{layerView:e,abortController:r,needMemoryUsageUpdate:!1,outstandingJobCount:0,outstandingRenderableCount:0,customParameters:t.customParameters,apiKey:t.apiKey,needFrame:!1});const n=(0,p.M7)(t.elevationInfo);return this._lyr3DMain.add_layer(t.url,i,n)?(this._updateWasmCamera(),i):(this._layers.delete(i),c.Pl)}_updateWasmCamera(){const e=this.view.state?.contentCamera;if(!e||!this._lyr3DMain)return;const{eye:t,center:i,up:r,near:n,far:s,fovY:o}=e,a=[e.viewport[2],e.viewport[3]],l=e.width/e.height;this._lyr3DMain.set_camera_parameters({eye:t,center:i,up:r,near:n,far:s,fov:o,aspectRatio:l,viewport:a})}};(0,r._)([(0,u.MZ)({constructOnly:!0})],w.prototype,"view",void 0),w=(0,r._)([(0,h.$)("esri.layers.Lyr3DWasmPerSceneView")],w);const v=w}}]);
//# sourceMappingURL=6824.31f36683.chunk.js.map