"use strict";(self.webpackChunkn2_workable_pier=self.webpackChunkn2_workable_pier||[]).push([[9186],{22299:(e,t,i)=>{i.d(t,{t:()=>h});const s=new Set;class h{constructor(){this._idToCounters=new Map}get empty(){return 0===this._idToCounters.size}addGroup(e,t){for(const i of e){let e=this._idToCounters.get(i);e||(e=new Map,this._idToCounters.set(i,e)),e.set(t,(e.get(t)||0)+1)}}deleteGroup(e,t){for(const i of e){const e=this._idToCounters.get(i);if(!e)continue;let s=e.get(t);if(null==s)return;s--,s>0?e.set(t,s):e.delete(t),0===e.size&&this._idToCounters.delete(i)}}getHighlightGroups(e){const t=this._idToCounters.get(e);if(!t)return s;const i=new Set;for(const[s,h]of t)h>0&&i.add(s);return i}ids(){return this._idToCounters.keys()}}},31394:(e,t,i)=>{i.d(t,{A:()=>a});var s=i(61551),h=i(8995),r=i(13692);class a extends h.f{renderChildren(e){for(const t of this.children)t.setTransform(e.state);if(super.renderChildren(e),this._updateAttributeView(),this.children.some((e=>e.hasData))){switch(e.drawPhase){case s.S5.MAP:this._renderChildren(e,s.RI.All);break;case s.S5.HIGHLIGHT:this.hasHighlight&&this._renderHighlight(e)}this._boundsRenderer&&this._boundsRenderer.doRender(e)}}_renderHighlight(e){(0,r.lB)(e,!1,(e=>{this._renderChildren(e,s.RI.Highlight)}))}}},89186:(e,t,i)=>{i.r(t),i.d(t,{default:()=>f});var s=i(35143),h=i(39356),r=i(18690),a=i(94643),n=i(54901),g=i(30726),o=i(46053),d=(i(81806),i(76460),i(85842)),l=i(90104),c=i(31394),p=i(43321),u=i(22299),w=i(91196);let _=class extends((0,l.e)(w.A)){constructor(){super(...arguments),this._highlightCounter=new u.t}attach(){this.graphicsView=new p.A({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new c.A(this.view.featuresTilingScheme),layerId:this.layer.id}),this.container.addChild(this.graphicsView.container),this.addAttachHandles([this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),this.watch("layer.visible",(e=>{e&&(this.graphicsView.update({state:this.view.state}),this.graphicsView.pushUpdate())}))]),this._updateHighlights()}detach(){this.container.removeAllChildren(),this.graphicsView=(0,g.pR)(this.graphicsView)}async hitTest(e){return this.graphicsView?this.graphicsView.hitTest(e).map((t=>({type:"graphic",graphic:t,mapPoint:e,layer:this.layer}))):null}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(e){this.graphicsView.processUpdate(e)}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(e){let t,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default";"number"==typeof e?t=[e]:e instanceof h.A?t=[e.uid]:Array.isArray(e)&&e.length>0?t="number"==typeof e[0]?e:e.map((e=>e&&e.uid)):a.A.isCollection(e)&&e.length>0&&(t=e.map((e=>e&&e.uid)).toArray());const s=t?.filter(r.Ru);return s?.length?(this._addHighlight(s,i),(0,n.hA)((()=>this._removeHighlight(s,i)))):(0,n.hA)()}_addHighlight(e,t){this._highlightCounter.addGroup(e,t),this._updateHighlights()}_removeHighlight(e,t){this._highlightCounter.deleteGroup(e,t),this._updateHighlights()}_updateHighlights(){const e=[];for(const t of this._highlightCounter.ids()){const i=this._highlightCounter.getHighlightGroups(t),s=this._getHighlightBits(i);e.push({objectId:t,highlightFlags:s})}this.graphicsView?.setHighlight(e)}};(0,s._)([(0,o.MZ)()],_.prototype,"graphicsView",void 0),_=(0,s._)([(0,d.$)("esri.views.2d.layers.GraphicsLayerView2D")],_);const f=_}}]);
//# sourceMappingURL=9186.dcc346d7.chunk.js.map