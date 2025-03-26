"use strict";(self.webpackChunkn2_workable_pier=self.webpackChunkn2_workable_pier||[]).push([[3993],{13993:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Z});var r,i=a(35143),o=(a(35238),a(3825)),n=a(50076),l=a(45802),s=a(77717),u=a(46053),p=(a(81806),a(76460),a(47249),a(85842)),d=a(13312),g=a(76797),c=a(2413),y=a(25515),h=a(65624),b=a(21617),w=a(5682),v=a(16852),M=a(88235);const m=new(a(11164).U)("0/0/0",0,0,0,void 0);let A=r=class extends((0,h.dM)((0,w.j)((0,b.J)(y.A)))){constructor(){super(...arguments),this.tileInfo=M.A.create({spatialReference:d.A.WebMercator,size:256}),this.type="base-tile",this.fullExtent=new g.A(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,d.A.WebMercator),this.spatialReference=d.A.WebMercator}getTileBounds(e,t,a,r){const i=r||(0,c.vt)();return m.level=e,m.row=t,m.col=a,m.extent=i,this.tileInfo.updateTileInfo(m),m.extent=void 0,i}fetchTile(e,t,a){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const{signal:i}=r,n=this.getTileUrl(e,t,a),l={responseType:"image",signal:i,query:{...this.refreshParameters}};return(0,o.A)(n??"",l).then((e=>e.data))}async fetchImageBitmapTile(e,t,a){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const{signal:n}=i;if(this.fetchTile!==r.prototype.fetchTile){const r=await this.fetchTile(e,t,a,i);return(0,v.C)(r,e,t,a,n)}const l=this.getTileUrl(e,t,a)??"",s={responseType:"blob",signal:n,query:{...this.refreshParameters}},{data:u}=await(0,o.A)(l,s);return(0,v.C)(u,e,t,a,n)}getTileUrl(){throw new n.A("basetilelayer:gettileurl-not-implemented","getTileUrl() is not implemented")}};(0,i._)([(0,u.MZ)({type:M.A})],A.prototype,"tileInfo",void 0),(0,i._)([(0,u.MZ)({type:["show","hide"]})],A.prototype,"listMode",void 0),(0,i._)([(0,u.MZ)({readOnly:!0,value:"base-tile"})],A.prototype,"type",void 0),(0,i._)([(0,u.MZ)({nonNullable:!0})],A.prototype,"fullExtent",void 0),(0,i._)([(0,u.MZ)()],A.prototype,"spatialReference",void 0),A=r=(0,i._)([(0,p.$)("esri.layers.BaseTileLayer")],A);const f=A;var _=a(11270),T=a(22848),S=a(19247);const k=new l.J({BingMapsAerial:"aerial",BingMapsRoad:"road",BingMapsHybrid:"hybrid"});let U=class extends((0,h.dM)((0,_.q)((0,s.P)(f)))){constructor(e){super(e),this.type="bing-maps",this.tileInfo=new M.A({size:[256,256],dpi:96,origin:new S.A({x:-20037508.342787,y:20037508.342787,spatialReference:d.A.WebMercator}),spatialReference:d.A.WebMercator,lods:[new T.A({level:1,resolution:78271.5169639999,scale:295828763.795777}),new T.A({level:2,resolution:39135.7584820001,scale:147914381.897889}),new T.A({level:3,resolution:19567.8792409999,scale:73957190.948944}),new T.A({level:4,resolution:9783.93962049996,scale:36978595.474472}),new T.A({level:5,resolution:4891.96981024998,scale:18489297.737236}),new T.A({level:6,resolution:2445.98490512499,scale:9244648.868618}),new T.A({level:7,resolution:1222.99245256249,scale:4622324.434309}),new T.A({level:8,resolution:611.49622628138,scale:2311162.217155}),new T.A({level:9,resolution:305.748113140558,scale:1155581.108577}),new T.A({level:10,resolution:152.874056570411,scale:577790.554289}),new T.A({level:11,resolution:76.4370282850732,scale:288895.277144}),new T.A({level:12,resolution:38.2185141425366,scale:144447.638572}),new T.A({level:13,resolution:19.1092570712683,scale:72223.819286}),new T.A({level:14,resolution:9.55462853563415,scale:36111.909643}),new T.A({level:15,resolution:4.77731426794937,scale:18055.954822}),new T.A({level:16,resolution:2.38865713397468,scale:9027.977411}),new T.A({level:17,resolution:1.19432856685505,scale:4513.988705}),new T.A({level:18,resolution:.597164283559817,scale:2256.994353}),new T.A({level:19,resolution:.298582141647617,scale:1128.497176}),new T.A({level:20,resolution:.1492910708238085,scale:564.248588})]}),this.key=null,this.style="road",this.culture="en-US",this.region=null,this.portalUrl=null,this.hasAttributionData=!0}get bingMetadata(){return this._get("bingMetadata")}set bingMetadata(e){this._set("bingMetadata",e)}get copyright(){return null!=this.bingMetadata?this.bingMetadata.copyright:null}get operationalLayerType(){return k.toJSON(this.style)}get bingLogo(){return null!=this.bingMetadata?this.bingMetadata.brandLogoUri:null}load(e){return this.key?this.addResolvingPromise(this._getMetadata()):this.portalUrl?this.addResolvingPromise(this._getPortalBingKey().then((()=>this._getMetadata()))):this.addResolvingPromise(Promise.reject(new n.A("bingmapslayer:load","Bing layer must have bing key."))),Promise.resolve(this)}getTileUrl(e,t,a){if(!this.loaded||null==this.bingMetadata)return null;const r=this.bingMetadata.resourceSets[0].resources[0],i=r.imageUrlSubdomains[t%r.imageUrlSubdomains.length],o=this._getQuadKey(e,t,a);return r.imageUrl.replace("{subdomain}",i).replace("{quadkey}",o)}async fetchAttributionData(){return this.load().then((()=>null==this.bingMetadata?null:{contributors:this.bingMetadata.resourceSets[0].resources[0].imageryProviders.map((e=>({attribution:e.attribution,coverageAreas:e.coverageAreas.map((e=>({zoomMin:e.zoomMin,zoomMax:e.zoomMax,score:1,bbox:[e.bbox[0],e.bbox[1],e.bbox[2],e.bbox[3]]})))})))}))}_getMetadata(){const e={road:"roadOnDemand",aerial:"aerial",hybrid:"aerialWithLabelsOnDemand"}[this.style];return(0,o.A)(`https://dev.virtualearth.net/REST/v1/Imagery/Metadata/${e}`,{responseType:"json",query:{include:"ImageryProviders",uriScheme:"https",key:this.key,suppressStatus:!0,output:"json",culture:this.culture,userRegion:this.region}}).then((e=>{const t=e.data;if(200!==t.statusCode)throw new n.A("bingmapslayer:getmetadata",t.statusDescription);if(this.bingMetadata=t,0===this.bingMetadata.resourceSets.length)throw new n.A("bingmapslayer:getmetadata","no bing resourcesets");if(0===this.bingMetadata.resourceSets[0].resources.length)throw new n.A("bingmapslayer:getmetadata","no bing resources")})).catch((e=>{throw new n.A("bingmapslayer:getmetadata",e.message)}))}_getPortalBingKey(){return(0,o.A)(this.portalUrl??"",{responseType:"json",authMode:"no-prompt",query:{f:"json"}}).then((e=>{if(!e.data.bingKey)throw new n.A("bingmapslayer:getportalbingkey","The referenced Portal does not contain a valid bing key");this.key=e.data.bingKey})).catch((e=>{throw new n.A("bingmapslayer:getportalbingkey",e.message)}))}_getQuadKey(e,t,a){let r="";for(let i=e;i>0;i--){let e=0;const o=1<<i-1;a&o&&(e+=1),t&o&&(e+=2),r+=e.toString()}return r}};(0,i._)([(0,u.MZ)({json:{read:!1,write:!1},value:null})],U.prototype,"bingMetadata",null),(0,i._)([(0,u.MZ)({json:{read:!1,write:!1},value:"bing-maps",readOnly:!0})],U.prototype,"type",void 0),(0,i._)([(0,u.MZ)({type:M.A})],U.prototype,"tileInfo",void 0),(0,i._)([(0,u.MZ)({type:String,readOnly:!0,json:{read:!1,write:!1}})],U.prototype,"copyright",null),(0,i._)([(0,u.MZ)({type:String,json:{write:!1,read:!1}})],U.prototype,"key",void 0),(0,i._)([(0,u.MZ)({type:k.apiValues,nonNullable:!0,json:{read:{source:"layerType",reader:k.read}}})],U.prototype,"style",void 0),(0,i._)([(0,u.MZ)({type:["BingMapsAerial","BingMapsHybrid","BingMapsRoad"]})],U.prototype,"operationalLayerType",null),(0,i._)([(0,u.MZ)({type:String,json:{write:!1,read:!1}})],U.prototype,"culture",void 0),(0,i._)([(0,u.MZ)({type:String,json:{write:!1,read:!1}})],U.prototype,"region",void 0),(0,i._)([(0,u.MZ)({type:String,json:{write:!0,read:!0}})],U.prototype,"portalUrl",void 0),(0,i._)([(0,u.MZ)({type:Boolean,json:{write:!1,read:!1}})],U.prototype,"hasAttributionData",void 0),(0,i._)([(0,u.MZ)({type:String,readOnly:!0})],U.prototype,"bingLogo",null),U=(0,i._)([(0,p.$)("esri.layers.BingMapsLayer")],U);const Z=U},16852:(e,t,a)=>{a.d(t,{C:()=>n,m:()=>o});var r=a(50076),i=a(50346);async function o(e,t,a){let o;try{o=await createImageBitmap(e)}catch(n){throw new r.A("request:server",`Unable to load ${t}`,{url:t,error:n})}return(0,i.Te)(a),o}async function n(e,t,a,o,n){let l;try{l=await createImageBitmap(e)}catch(s){throw new r.A("request:server",`Unable to load tile ${t}/${a}/${o}`,{error:s,level:t,row:a,col:o})}return(0,i.Te)(n),l}}}]);
//# sourceMappingURL=3993.2ef5eaaf.chunk.js.map