"use strict";(self.webpackChunkn2_workable_pier=self.webpackChunkn2_workable_pier||[]).push([[7079],{17079:(e,t,a)=>{a.r(t),a.d(t,{default:()=>O});var i,n,s=a(35143),o=(a(35238),a(94643)),r=a(50076),l=a(76460),h=a(87663),d=a(77717),u=a(50346),c=a(68134),y=a(46053),p=(a(81806),a(47249),a(85842)),g=a(49140),f=a(25515),m=a(98618),L=a(1484);(n=i||(i={})).MULTIPLIER="multiplier",n.ABSOLUTE="absoluteValue";var C=a(12718),M=a(83716),w=a(2948),b=a(33750),T=a(52451),k=a(65624),E=a(11270),N=a(5682),I=a(85646),A=a(88739),_=a(76797),D=a(19247),x=a(23701);let v=class extends((0,E.q)((0,k.dM)((0,N.j)((0,d.P)(f.A))))){constructor(e){if(super(e),this.dataPreloadedInLocalCache=!1,this.defaultLinkChartConfig=null,this._currentLinkChartConfig={layoutMode:"RADIAL_TREE"},this._graphTypeLookup=new Map,this.dataManager=null,this.knowledgeGraph=null,this.layers=new(o.A.ofType(M.A)),this.entityLinkChartDiagramLookup=new Map,this.relationshipLinkChartDiagramLookup=new Map,this.linkChartExtent=new _.A({xmin:-1e-7,ymin:-1e-7,xmax:1e-7,ymax:1e-7}),this.memberEntityTypes=null,this.memberRelationshipTypes=null,this.operationalLayerType="LinkChartLayer",this.sublayerIdsCache=new Map,this.tables=new(o.A.ofType(M.A)),this.type="link-chart",this.chronologicalAuxiliaryGraphics=null,this._originalInclusionList=e?.inclusionModeDefinition,e?.dataPreloadedInLocalCache&&!e?.inclusionModeDefinition)throw new r.A("knowledge-graph:linkchart-layer-constructor","If creating a link chart composite layer and configured that data is already loaded in the cache, you must specify an inclusion list so the Composite Layer knows what records belong to it");this.addHandles((0,c.wB)((()=>this.layers.concat(this.tables)),((e,t)=>this._handleSublayersChange(e,t)),c.OH))}normalizeCtorArgs(e){if(!e)return{};const{url:t,title:a,dataPreloadedInLocalCache:i,defaultLinkChartConfig:n}=e;return{url:t,title:a,dataPreloadedInLocalCache:i,defaultLinkChartConfig:n}}_initializeLayerProperties(e){if(!this.title&&this.url){const e=this.url.split("/");this.title=e[e.length-2]}const t=new Set;let a=[],i=[];if(e.inclusionModeDefinition&&(!e.inclusionModeDefinition.namedTypeDefinitions||e.inclusionModeDefinition.namedTypeDefinitions.size<1))throw new r.A("knowledge-graph:composite-layer-constructor","If an explicit inclusion definition is defined, at least one namedTypeDefinition must also be defined");e.knowledgeGraph.dataModel.entityTypes?.forEach((e=>{e.name&&this._graphTypeLookup.set(e.name,e)})),e.knowledgeGraph.dataModel.relationshipTypes?.forEach((e=>{e.name&&this._graphTypeLookup.set(e.name,e)})),e.inclusionModeDefinition?.generateAllSublayers?(a=e.knowledgeGraph.dataModel.entityTypes??[],i=e.knowledgeGraph.dataModel.relationshipTypes??[]):e.inclusionModeDefinition?.namedTypeDefinitions&&e.inclusionModeDefinition?.namedTypeDefinitions.size>0?e.inclusionModeDefinition?.namedTypeDefinitions.forEach(((n,s)=>{const o=this._graphTypeLookup.get(s);if(!o)return l.A.getLogger(this).warn(`A named type, ${s}, was in the inclusion list that wasn't in the data model and will be removed`),void e.inclusionModeDefinition?.namedTypeDefinitions.delete(s);"relationship"===o.type?t.has(s)||(t.add(s),i.push(o)):"entity"===o.type?t.has(s)||(t.add(s),a.push(o)):(l.A.getLogger(this).warn(`A named type, ${s}, was in the inclusion list that wasn't properly modeled and will be removed`),e.inclusionModeDefinition?.namedTypeDefinitions.delete(s))})):(a=e.knowledgeGraph.dataModel.entityTypes??[],i=e.knowledgeGraph.dataModel.relationshipTypes??[]);const n=new C.P({knowledgeGraph:e.knowledgeGraph,inclusionModeDefinition:e.inclusionModeDefinition});this.knowledgeGraph=e.knowledgeGraph,this.memberEntityTypes=a,this.memberRelationshipTypes=i,this.dataManager=n}load(e){const t=async()=>{const e=[],t=[];this.loadLayerAssumingLocalCache(),await(0,w.qN)(this),this.dataManager.inclusionModeDefinition&&(this.dataManager.inclusionModeDefinition.generateAllSublayers=!1),this.dataManager.inclusionModeDefinition?.namedTypeDefinitions.forEach((e=>{e.useAllData=!1})),await this._initializeDiagram(),this.layers.forEach((a=>{t.push(a.refreshCachedQueryEngine()),e.push(new Promise((e=>{a.on("layerview-create",(()=>{e(null)}))})))})),this.tables.forEach((e=>{t.push(e.refreshCachedQueryEngine())})),await Promise.all(t)};return this.addResolvingPromise(new Promise((a=>{(0,A.fetchKnowledgeGraph)(this.url).then((async i=>{if(this._initializeLayerProperties({knowledgeGraph:i,inclusionModeDefinition:this._originalInclusionList}),this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.size||(this.dataManager.inclusionModeDefinition={generateAllSublayers:!1,namedTypeDefinitions:new Map},this.dataManager.knowledgeGraph.dataModel.entityTypes?.forEach((e=>{e.name&&this.dataManager.inclusionModeDefinition?.namedTypeDefinitions.set(e.name,{useAllData:!0})})),this.dataManager.knowledgeGraph.dataModel.relationshipTypes?.forEach((e=>{e.name&&this.dataManager.inclusionModeDefinition?.namedTypeDefinitions.set(e.name,{useAllData:!0})}))),this.dataPreloadedInLocalCache){const e=b.A.getInstance();for(const[t,a]of this.dataManager.inclusionModeDefinition?.namedTypeDefinitions??[])for(const i of a.members?.values()??[]){const a=e.readFromStoreById(`${t}__${i.id}`);a&&(0,h.tE)(this.dataManager.sublayerCaches,t,(()=>new Map)).set(i.id,a)}await t()}else{const a="GEOGRAPHIC"===this.defaultLinkChartConfig?.layoutMode;this.addResolvingPromise(this.dataManager.refreshCacheContent(void 0,!1,a,!0).then((async()=>{(0,u.Te)(e),await t()})))}a(null)}))}))),Promise.resolve(this)}set inclusionModeDefinition(e){"loaded"!==this.loadStatus&&"failed"!==this.loadStatus?this._set("inclusionModeDefinition",e):l.A.getLogger(this).error("#inclusionModeDefinition","inclusionModeDefinition cannot be changed after the layer is loaded.")}async addRecords(e,t){let a=[];t?.cascadeAddRelationshipEndNodes&&this.dataManager.knowledgeGraph.dataModel&&(a=await(0,T.aq)(e,this.dataManager.knowledgeGraph));const i=e.concat(a).filter((e=>!this.sublayerIdsCache.get(e.typeName)?.has(e.id)));await this._handleNewRecords(i)}async removeRecords(e){let{cascadeRemoveRelationships:t=!0,recalculateLayout:a=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{cascadeRemoveRelationships:!0,recalculateLayout:!1},i=[];for(const s of e)!1===this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.get(s.typeName)?.useAllData&&this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.get(s.typeName)?.members?.has(s.id)&&i.push(s);if(t){const e=new Set,t=[];for(const a of i)if(this.dataManager.nodeConnectionsLookup.has(a.id))for(const t of this.dataManager.nodeConnectionsLookup.get(a.id))e.add(t);for(const a of e)if(this.dataManager.memberIdTypeLookup.has(a))for(const e of this.dataManager.memberIdTypeLookup.get(a))this.dataManager.relationshipTypeNames.has(e)&&t.push({id:a,typeName:e});i=i.concat(t)}this.dataManager.removeFromLayer(i);for(const s of i)this.sublayerIdsCache.get(s.typeName)?.delete(s.id),this.dataManager.relationshipTypeNames.has(s.typeName)?this.relationshipLinkChartDiagramLookup.delete(s.id):this.entityLinkChartDiagramLookup.delete(s.id);a&&await this._calculateLayoutWithSublayerTimeInfo(this._currentLinkChartConfig.layoutMode,this._currentLinkChartConfig.layoutOptions);const n=[];return this.layers.forEach((e=>{n.push(e.refreshCachedQueryEngine())})),await Promise.all(n),this._refreshNamedTypes(),i}async expand(e,t){const a=await this.dataManager.getConnectedRecordIds(e,t),i=a.filter((e=>!this.sublayerIdsCache.get(e.typeName)?.has(e.id)));return await this._handleNewRecords(a),{records:i}}loadLayerAssumingLocalCache(){const e=[...this.memberRelationshipTypes,...this.memberEntityTypes];this.originIdOf("layers")===g.Gr.DEFAULTS?this._createSublayers(e,this.layers,(e=>!!e.geometryType)):this._updateSublayers(e,this.layers),this.originIdOf("tables")===g.Gr.DEFAULTS?this._createSublayers(e,this.tables,(e=>!e.geometryType)):this._updateSublayers(e,this.tables),this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.forEach(((e,t)=>{const a=(0,h.tE)(this.sublayerIdsCache,t,(()=>new Set));e.members?.forEach((e=>{let{id:i,linkChartLocation:n}=e;if(a.add(i),n){const e=n instanceof L.A?n:(0,m.Ux)(n);this.dataManager.relationshipTypeNames.has(t)?this.relationshipLinkChartDiagramLookup.set(i,e):this.entityLinkChartDiagramLookup.set(i,e)}}))}))}async calculateLinkChartLayout(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"RADIAL_TREE",t=arguments.length>1?arguments[1]:void 0;const a=[],i=[],n=[];this.dataManager.sublayerCaches.forEach(((e,t)=>{this.dataManager.entityTypeNames.has(t)?e.forEach((e=>{a.push({typeName:t,feature:e})})):this.dataManager.relationshipTypeNames.has(t)&&e.forEach((e=>{i.push({typeName:t,feature:e})}))})),this.entityLinkChartDiagramLookup=new Map,this.relationshipLinkChartDiagramLookup=new Map;const s=new Map,o=new Map,h=new Map,d=new Map,u=new Uint8Array(a.length),c=new Float64Array(a.length),y=new Float64Array(a.length),p=new Float64Array(a.length),g=new Float64Array(a.length),f=new Uint32Array(i.length),L=new Uint32Array(i.length),C=new Float64Array(i.length),M=new Float64Array(i.length),b=[],T=new _.A({xmin:-1e-7,ymin:-1e-7,xmax:1e-7,ymax:1e-7});let k,E="FORCE_DIRECTED",N=0,A=0;const v=I.i6.apply;switch(E="GEOGRAPHIC"===e?"FORCE_DIRECTED":e,E){case"FORCE_DIRECTED":k=I.pM.apply;break;case"COMMUNITY":k=I.Tu.apply;break;case"HIERARCHICAL":k=I.$C.apply;break;case"RADIAL_TREE":k=I.vJ.apply;break;case"SMART_TREE":k=I.Xq.apply;break;default:k=I.Wg.apply}let O=!1;a.forEach((a=>{let{typeName:i,feature:n}=a;if("CHRONOLOGICAL_SINGLE"!==e&&"CHRONOLOGICAL_MULTIPLE"!==e&&t?.lockedNodeLocations?.has(n.attributes[w.dr])){"GEOGRAPHIC"===e&&this.dataManager.geographicLookup.has(i)?u[N]=I.tx.IsGeographic:u[N]=I.tx.None;const a=t.lockedNodeLocations.get(n.attributes[w.dr]);c[N]=a.x,y[N]=a.y}else if("GEOGRAPHIC"===e&&this.dataManager.geographicLookup.has(i)){u[N]=I.tx.IsGeographic;let e=null;const t=n.attributes[this.dataManager.geographicLookup.get(i).name],a=this.dataManager.geographicLookup.get(i)?.geometryType;switch(a){case"esriGeometryPoint":c[N]=t?.x,y[N]=t?.y;break;case"esriGeometryPolygon":e=t?.centroid,null!=e?.x&&null!=e?.y?(c[N]=e.x,y[N]=e.y):u[N]=I.tx.IsMovable;break;case"esriGeometryPolyline":case"esriGeometryMultipoint":e=t?.extent?.center,null!=e?.x&&null!=e?.y?(c[N]=e.x,y[N]=e.y):u[N]=I.tx.IsMovable;break;default:u[N]=I.tx.IsMovable}(null==c[N]||null==y[N]||Number.isNaN(c[N])||Number.isNaN(y[N]))&&(u[N]=I.tx.IsMovable,c[N]=0,y[N]=0)}else if("CHRONOLOGICAL_SINGLE"===e||"CHRONOLOGICAL_MULTIPLE"===e){!O&&t?.lockedNodeLocations?.has(n.attributes[w.dr])&&(O=!0);const e=t?.timeInfoByTypeName?.get(i),a=e?.startField,s=a&&e?.startField?n.attributes[a]:null;p[N]=s?new Date(s).getTime():NaN;const o=e?.endField,r=o&&e?.endField?n.attributes[o]:null;g[N]=r?new Date(r).getTime():NaN,c[N]=0,y[N]=0,u[N]=I.tx.IsMovable}else u[N]=I.tx.IsMovable,c[N]=0,y[N]=0;d.set(n.attributes[w.dr],N),b[N]={feature:n,typeName:i},N++})),O&&l.A.getLogger(this).warn("Locked node locations are not supported for chronological layout at this time.  Requested node locations were ignored");let R=!1;const G=new Map;i.forEach((a=>{const i=a.feature.attributes[w.Cz],s=a.feature.attributes[w.KQ],o=d.get(i),r=d.get(s),l=t?.timeInfoByTypeName?.get(a.typeName),h=t?.timeInfoByTypeName?l?.startField:null,u=h?a.feature.attributes[h]:null,c=l?.endField,y=c?a.feature.attributes[c]:null;if(void 0!==o&&void 0!==r){let t=i+"-"+s;"CHRONOLOGICAL_SINGLE"!==e&&"CHRONOLOGICAL_MULTIPLE"!==e||(t=t+"-"+u+"-"+y);const l=G.get(t),h=l?.has(a.typeName);h||(f[A]=o,L[A]=r,"CHRONOLOGICAL_SINGLE"!==e&&"CHRONOLOGICAL_MULTIPLE"!==e||(C[A]=u?new Date(u).getTime():NaN,M[A]=y?new Date(y).getTime():NaN),void 0===l?G.set(t,new Map([[a.typeName,A]])):l.set(a.typeName,A),A++),n.push(a)}else R=!0,this.relationshipLinkChartDiagramLookup.set(i,null)})),R&&l.A.getLogger(this).warn("A relationship is a member of this layer that has either origin or destination entity nodes that are not members. The diagram geometry will be set to null");const S=this._validateLayoutSettings(e,t),P=this._convertLayoutSettingsToCalculationSettings(S);await(0,I.Hh)();let H=!1,U=null;if("CHRONOLOGICAL_SINGLE"===e||"CHRONOLOGICAL_MULTIPLE"===e){let a;({success:H,links:U,graphics:a}=v(u,c,y,p,g,f.subarray(0,A),L.subarray(0,A),C.subarray(0,A),M.subarray(0,A),"CHRONOLOGICAL_MULTIPLE"===e,t?.chronologicalLayoutSettings??{})),H&&(this.chronologicalAuxiliaryGraphics=a)}else({success:H,links:U}=k(u,c,y,f.subarray(0,A),L.subarray(0,A),P.computationBudgetTime,P.idealEdgeLengthMultiplier,P.repulsionRadiusMultiplier));if(!H)throw new r.A("knowledge-graph:layout-failed","Attempting to arrange the records in the specified layout failed");for(let r=0;r<b.length;r++){if(y[r]>84.9999?y[r]=84.9999:y[r]<-84.9999&&(y[r]=-84.9999),c[r]>179.9999?c[r]=179.9999:c[r]<-179.9999&&(c[r]=-179.9999),b[r].feature.attributes[w.T1]=new D.A(c[r],y[r]),s.has(b[r].typeName)){const e=s.get(b[r].typeName);e?.set(b[r].feature.attributes[w.dr],b[r].feature)}else{const e=new Map;e.set(b[r].feature.attributes[w.dr],b[r].feature),s.set(b[r].typeName,e)}h.set(b[r].feature.attributes[w.dr],b[r].feature);const e=(0,m.Ux)(b[r].feature.attributes[w.T1]);this.entityLinkChartDiagramLookup.set(b[r].feature.attributes[w.dr],b[r].feature.attributes[w.T1]?e:null),b[r].feature.attributes[w.T1].x<T.xmin&&(T.xmin=b[r].feature.attributes[w.T1].x),b[r].feature.attributes[w.T1].x>T.xmax&&(T.xmax=b[r].feature.attributes[w.T1].x),b[r].feature.attributes[w.T1].y<T.ymin&&(T.ymin=b[r].feature.attributes[w.T1].y),b[r].feature.attributes[w.T1].y>T.ymax&&(T.ymax=b[r].feature.attributes[w.T1].y)}if(this.linkChartExtent.xmin=T.xmin,this.linkChartExtent.xmax=T.xmax,this.linkChartExtent.ymin=T.ymin,this.linkChartExtent.ymax=T.ymax,!U)throw new r.A("knowledge-graph:layout-failed","Attempting to retrieve link geometry from diagram engine failed");const F=new Map,B=new Map,Z=new Map,z=new Set;for(let r=0;r<n.length;r++){const a=[],i=n[r],s=i.feature.attributes[w.Cz],u=i.feature.attributes[w.KQ];let c=s+"-"+u;if("CHRONOLOGICAL_SINGLE"===e||"CHRONOLOGICAL_MULTIPLE"===e){const e=t?.timeInfoByTypeName?.get(i.typeName),a=t?.timeInfoByTypeName?e?.startField:null,n=a?i.feature.attributes[a]:null,s=e?.endField;c+="-"+n+"-"+(s?i.feature.attributes[s]:null)}const y=G.get(c).get(i.typeName),p=0===y?0:U?.vertexEndIndex[y-1];if(!z.has(y)){if(z.add(y),U.types[y]===I.J.Recursive){const e=[U.vertices[2*p],U.vertices[2*p+1]],t=[U.vertices[2*(p+1)],U.vertices[2*(p+1)+1]],i=[.5*(e[0]+t[0]),.5*(e[1]+t[1])],n=[i[0]-e[0],i[1]-e[1]],s=[i[0]+n[1],i[1]-n[0]],o=[i[0]-n[1],i[1]+n[0]];a.push(e),a.push(s),a.push(t),a.push(o),a.push(e)}else{if(U.types[y]!==I.J.Regular){l.A.getLogger(this).warn("A relationship generated an unsupported link geometry type.  It will not be rendered");continue}for(let e=p;e<U.vertexEndIndex[y];e++)a.push([U.vertices[2*e],U.vertices[2*e+1]])}if("CHRONOLOGICAL_SINGLE"!==e&&"CHRONOLOGICAL_MULTIPLE"!==e){const e=b[d.get(s)]?.feature.attributes[w.T1],t=b[d.get(u)]?.feature.attributes[w.T1];a[0][0]===e.x&&a[0][1]===e.y||(a[0]=[e.x,e.y]),a[a.length-1][0]===t.x&&a[a.length-1][1]===t.y||(a[a.length-1]=[t.x,t.y])}for(let e=1;e<a.length-1;e++)a[e][1]>85.5?a[e][1]=85.5:a[e][1]<-85.5&&(a[e][1]=-85.5),a[e][0]>179.9999?a[e][0]=179.9999:a[e][0]<-179.9999&&(a[e][0]=-179.9999);F.has(c)?F.get(c).push(a):F.set(c,[a])}const g=F.get(c);B.has(c)||(B.set(c,new Map),Z.set(c,new Map));const f=B.get(c),L=Z.get(c);f.has(i.typeName)||(f.set(i.typeName,g.shift()),L.set(i.typeName,0));const C=f.get(i.typeName);L.set(i.typeName,L.get(i.typeName)+1);const M=new x.A({paths:[C]});if(i.feature.attributes[w.T1]=M,o.has(i.typeName)){const e=o.get(i.typeName);e?.set(i.feature.attributes[w.dr],i.feature)}else{const e=new Map;e.set(i.feature.attributes[w.dr],i.feature),o.set(i.typeName,e)}h.set(i.feature.attributes[w.dr],i.feature);const T=(0,m.Ux)(i.feature.attributes[w.T1]);this.relationshipLinkChartDiagramLookup.set(i.feature.attributes[w.dr],i.feature.attributes[w.T1]?T:null)}for(const r of n)r.feature.attributes[w.M1]=Z.get(r.feature.attributes[w.Cz]+"-"+r.feature.attributes[w.KQ])?.get(r.typeName)??null;return this._currentLinkChartConfig={layoutMode:e,layoutOptions:S},{nodes:s,links:o,idMap:h}}async applyNewLinkChartLayout(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"RADIAL_TREE",t=arguments.length>1?arguments[1]:void 0;const a=[];await this._calculateLayoutWithSublayerTimeInfo(e,t),this.layers.forEach((e=>{a.push(e.refreshCachedQueryEngine())})),await Promise.all(a),this._refreshNamedTypes()}getCurrentNodeLocations(){const e=new Map;return this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.forEach((t=>{t?.members?.forEach((t=>{const a=t.linkChartLocation;let i;const n=t.id;a&&(i="x"in a?{x:a.x,y:a.y}:{x:a.coords[0],y:a.coords[1]},e.set(n,new D.A({x:i.x,y:i.y})))}))})),e}async synchronizeInclusionListWithCache(){return new Promise((e=>{this.dataManager.inclusionModeDefinition?.namedTypeDefinitions.forEach(((e,t)=>{if(e.useAllData=!1,e.members&&e.members.size>0){if(!this.dataManager.sublayerCaches.get(t))return;const a=new Set(Array.from(this.dataManager.sublayerCaches.get(t).keys()));Array.from(e.members.keys()).filter((e=>!a.has(e))).forEach((t=>{e.members?.delete(t)}))}})),e()}))}async refreshLinkChartCache(e){await this.dataManager.refreshCacheContent(e);const t=[];this.layers.forEach((e=>{t.push(e.refreshCachedQueryEngine())})),await Promise.all(t),this._refreshNamedTypes()}async connectBetweenEntities(e){let t=[];for(const i of this.dataManager.relationshipTypeNames){const e=this.sublayerIdsCache.get(i);e&&(t=t.concat(Array.from(e.keys())))}const a=await this.dataManager.getRelationshipsBetweenNodes(e,t);return await this._handleNewRecords(a),{records:a}}async connectFromEntities(e){let t=[];for(const n of this.dataManager.relationshipTypeNames){const e=this.sublayerIdsCache.get(n);e&&(t=t.concat(Array.from(e.keys())))}let a=[];for(const n of this.dataManager.entityTypeNames){const e=this.sublayerIdsCache.get(n);e&&(a=a.concat(Array.from(e)))}const i=await this.dataManager.getRelationshipsFromNodes(e,a,t);return await this._handleNewRecords(i),{records:i}}getCurrentLayout(){return this._currentLinkChartConfig.layoutMode}async _calculateLayoutWithSublayerTimeInfo(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"RADIAL_TREE",t=arguments.length>1?arguments[1]:void 0;const a=new Map;this.layers.forEach((e=>{a.set(e.objectType.name,e.timeInfo)})),await this.calculateLinkChartLayout(e,{timeInfoByTypeName:a,...t})}async _handleNewRecords(e){const t=[];this.dataManager.addToLayer(e);for(const i of e)this.sublayerIdsCache.has(i.typeName)||(this.sublayerIdsCache.set(i.typeName,new Set),t.push(i.typeName)),this.sublayerIdsCache.get(i.typeName).add(i.id);for(const i of t){const e=this._graphTypeLookup.get(i);if(e){const t=this._createSublayer(e);"entity"===e.type?this.dataManager.entityTypeNames.add(i):this.dataManager.relationshipTypeNames.add(i),t.geometryType?this.layers.push(t):this.tables.push(t),this.dataManager.sublayerCaches.set(i,new Map)}}await(0,w.qN)(this,t),await this.dataManager.refreshCacheContent(e.map((e=>e.id)));const a=Object.assign({},this._currentLinkChartConfig.layoutOptions);a.lockedNodeLocations=new Map;for(const[i,n]of this.entityLinkChartDiagramLookup.entries())n&&a.lockedNodeLocations.set(i,new D.A(n.coords[0],n.coords[1]));await this.applyNewLinkChartLayout(this._currentLinkChartConfig.layoutMode,a)}_createSublayers(e,t,a){e.forEach((e=>{const i=this._createSublayer(e);a(i)&&t.push(i),this._updateSublayerCaches(e)}))}_updateSublayers(e,t){t.forEach((t=>{t.parentCompositeLayer=this;const a=e.find((e=>e.type===t.graphType&&e.name===t.graphTypeName));a&&(t.objectType=a,t.read({title:a.name},{origin:"service"}),this._updateSublayerCaches(a))}))}_updateSublayerCaches(e){const t=this.dataManager.sublayerCaches;t.has(e.name)||t.set(e.name,new Map)}async _initializeDiagram(){this.defaultLinkChartConfig?this.defaultLinkChartConfig.doNotRecalculateLayout?(this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.forEach(((e,t)=>{e?.members?.forEach((e=>{const a=e.linkChartLocation;let i;const n=e.id;if(!a)return;i="x"in a?{x:a.x,y:a.y}:{x:a.coords[0],y:a.coords[1]};const s=(0,m.Ux)(i);this.dataManager.relationshipTypeNames.has(t)?this.relationshipLinkChartDiagramLookup.set(n,s):this.entityLinkChartDiagramLookup.set(n,s),this.linkChartExtent.xmin>i.x&&(this.linkChartExtent.xmin=i.x),this.linkChartExtent.xmax<i.x&&(this.linkChartExtent.xmax=i.x),this.linkChartExtent.ymin>i.y&&(this.linkChartExtent.ymin=i.y),this.linkChartExtent.ymax<i.y&&(this.linkChartExtent.ymax=i.y)}))})),this.memberRelationshipTypes.forEach((e=>{e.name&&this.dataManager.sublayerCaches.get(e.name)?.forEach((e=>{const t=this.relationshipLinkChartDiagramLookup.get(e.attributes[w.Cz]),a=this.relationshipLinkChartDiagramLookup.get(e.attributes[w.KQ]);if(t&&a){const i=(0,m.Ux)(new x.A({paths:[[[t.coords[0],t.coords[1]],[a.coords[0],a.coords[1]]]]}));this.relationshipLinkChartDiagramLookup.set(e.attributes[w.dr],i)}else this.relationshipLinkChartDiagramLookup.set(e.attributes[w.dr],null)}))}))):await this._calculateLayoutWithSublayerTimeInfo(this.defaultLinkChartConfig.layoutMode,{lockedNodeLocations:this.getCurrentNodeLocations(),...this.defaultLinkChartConfig.layoutOptions||{}}):await this._calculateLayoutWithSublayerTimeInfo("RADIAL_TREE",{lockedNodeLocations:this.getCurrentNodeLocations()})}_refreshNamedTypes(){for(const e of this.layers)e.emit("refresh",{dataChanged:!0});for(const e of this.tables)e.emit("refresh",{dataChanged:!0})}_validateLayoutSettings(e,t){const a=e=>"number"==typeof e&&!isNaN(e),n={organicLayoutSettings:{},chronologicalLayoutSettings:{}};if(!new Set(["FORCE_DIRECTED","COMMUNITY","GEOGRAPHIC","CHRONOLOGICAL_MULTIPLE","CHRONOLOGICAL_SINGLE"]).has(e)||!t)return n;t.organicLayoutSettings??={};const{computationBudgetTime:s,repulsionRadiusMultiplier:o,idealEdgeLength:r,idealEdgeLengthType:h}=t.organicLayoutSettings;if((e=>a(e)&&e>=1)(s)?n.organicLayoutSettings.computationBudgetTime=s:void 0!==s&&l.A.getLogger(this).warn("Invalid layout computationBudgetTime setting, will revert to default setting"),(e=>a(e)&&e>=1)(o)?n.organicLayoutSettings.repulsionRadiusMultiplier=o:void 0!==o&&l.A.getLogger(this).warn("Invalid layout repulsionRadiusMultiplier setting, will revert to default setting"),"GEOGRAPHIC"===e&&(void 0!==r||void 0!==h)&&((e=>Object.values(i).includes(e))(h)?n.organicLayoutSettings.idealEdgeLengthType=h:void 0!==h&&l.A.getLogger(this).warn('Invalid layout idealEdgeLengthType setting, will revert to "multiplier" setting'),(e=>a(e)&&e>=0)(r)?n.organicLayoutSettings.idealEdgeLength=r:void 0!==r&&l.A.getLogger(this).warn("Invalid layout idealEdgeLength setting, will revert to default setting")),("CHRONOLOGICAL_MULTIPLE"===e||"CHRONOLOGICAL_SINGLE"===e)&&t.chronologicalLayoutSettings){const e=t.chronologicalLayoutSettings;e.durationLineWidth&&e.durationLineWidth<0&&l.A.getLogger(this).warn("Invalid layout durationLineWidth setting, will revert to default setting")}return n}_convertLayoutSettingsToCalculationSettings(e){e.organicLayoutSettings??={};let t=e.organicLayoutSettings.idealEdgeLength;return e.organicLayoutSettings.idealEdgeLengthType===i.ABSOLUTE&&(void 0===t?t=-1:t*=-1),{computationBudgetTime:e.organicLayoutSettings.computationBudgetTime,repulsionRadiusMultiplier:e.organicLayoutSettings.repulsionRadiusMultiplier,idealEdgeLengthMultiplier:t}}_createSublayer(e){return new M.A({objectType:e,parentCompositeLayer:this,graphType:e.type})}_handleSublayersChange(e,t){t&&(t.forEach((e=>{e.parent=null})),this.removeHandles("sublayers-owner")),e&&(e.forEach((e=>{e.parent=this})),this.addHandles([e.on("after-add",(e=>{let{item:t}=e;t.parent=this})),e.on("after-remove",(e=>{let{item:t}=e;t.parent=null}))],"sublayers-owner"))}};(0,s._)([(0,y.MZ)()],v.prototype,"dataPreloadedInLocalCache",void 0),(0,s._)([(0,y.MZ)()],v.prototype,"defaultLinkChartConfig",void 0),(0,s._)([(0,y.MZ)()],v.prototype,"dataManager",void 0),(0,s._)([(0,y.MZ)()],v.prototype,"inclusionModeDefinition",null),(0,s._)([(0,y.MZ)()],v.prototype,"knowledgeGraph",void 0),(0,s._)([(0,y.MZ)({type:o.A.ofType(M.A),json:{write:{ignoreOrigin:!0}}})],v.prototype,"layers",void 0),(0,s._)([(0,y.MZ)()],v.prototype,"entityLinkChartDiagramLookup",void 0),(0,s._)([(0,y.MZ)()],v.prototype,"relationshipLinkChartDiagramLookup",void 0),(0,s._)([(0,y.MZ)()],v.prototype,"linkChartExtent",void 0),(0,s._)([(0,y.MZ)()],v.prototype,"memberEntityTypes",void 0),(0,s._)([(0,y.MZ)()],v.prototype,"memberRelationshipTypes",void 0),(0,s._)([(0,y.MZ)({type:["LinkChartLayer"]})],v.prototype,"operationalLayerType",void 0),(0,s._)([(0,y.MZ)()],v.prototype,"sublayerIdsCache",void 0),(0,s._)([(0,y.MZ)({type:o.A.ofType(M.A),json:{write:{ignoreOrigin:!0}}})],v.prototype,"tables",void 0),(0,s._)([(0,y.MZ)({json:{read:!1}})],v.prototype,"type",void 0),(0,s._)([(0,y.MZ)({json:{read:!1}})],v.prototype,"chronologicalAuxiliaryGraphics",void 0),v=(0,s._)([(0,p.$)("esri.layers.LinkChartLayer")],v);const O=v}}]);
//# sourceMappingURL=7079.5bebb10d.chunk.js.map