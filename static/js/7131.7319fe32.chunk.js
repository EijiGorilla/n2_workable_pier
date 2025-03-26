/*! For license information please see 7131.7319fe32.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkn2_workable_pier=self.webpackChunkn2_workable_pier||[]).push([[7131],{37131:(e,t,i)=>{i.r(t),i.d(t,{CalciteDropdown:()=>w,defineCustomElement:()=>u});var s=i(95146),o=i(39879),n=i(24192),a=i(66418),l=i(65079),r=i(15520),c=i(76527),d=i(6676),h=i(37268);const p="trigger",m=(0,s.w$)(class extends s.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteDropdownSelect=(0,s.lh)(this,"calciteDropdownSelect",6),this.calciteDropdownBeforeClose=(0,s.lh)(this,"calciteDropdownBeforeClose",6),this.calciteDropdownClose=(0,s.lh)(this,"calciteDropdownClose",6),this.calciteDropdownBeforeOpen=(0,s.lh)(this,"calciteDropdownBeforeOpen",6),this.calciteDropdownOpen=(0,s.lh)(this,"calciteDropdownOpen",6),this.items=[],this.groups=[],this.mutationObserver=(0,d.c)("mutation",(()=>this.updateItems())),this.resizeObserver=(0,d.c)("resize",(e=>this.resizeObserverCallback(e))),this.openTransitionProp="opacity",this.guid=`calcite-dropdown-${(0,a.g)()}`,this.focusLastDropdownItem=!1,this.setFilteredPlacements=()=>{const{el:e,flipPlacements:t}=this;this.filteredFlipPlacements=t?(0,n.f)(t,e):null},this.updateTriggers=e=>{this.triggers=e.target.assignedElements({flatten:!0}),this.reposition(!0)},this.updateItems=()=>{this.items=this.groups.map((e=>Array.from(e?.querySelectorAll("calcite-dropdown-item")))).reduce(((e,t)=>[...e,...t]),[]),this.updateSelectedItems(),this.reposition(!0),this.items.forEach((e=>e.scale=this.scale))},this.updateGroups=e=>{const t=e.target.assignedElements({flatten:!0}).filter((e=>e?.matches("calcite-dropdown-group")));this.groups=t,this.updateItems(),this.updateGroupScale()},this.resizeObserverCallback=e=>{e.forEach((e=>{const{target:t}=e;t===this.referenceEl?this.setDropdownWidth():t===this.scrollerEl&&this.setMaxScrollerHeight()}))},this.setDropdownWidth=()=>{const{referenceEl:e,scrollerEl:t}=this,i=e?.clientWidth;i&&t&&(t.style.minWidth=`${i}px`)},this.setMaxScrollerHeight=()=>{const{scrollerEl:e}=this;if(!e)return;this.reposition(!0);const t=this.getMaxScrollerHeight();e.style.maxHeight=t>0?`${t}px`:"",this.reposition(!0)},this.setScrollerAndTransitionEl=e=>{this.resizeObserver.observe(e),this.scrollerEl=e,this.transitionEl=e},this.setReferenceEl=e=>{this.referenceEl=e,(0,n.c)(this,this.referenceEl,this.floatingEl),this.resizeObserver.observe(e)},this.setFloatingEl=e=>{this.floatingEl=e,(0,n.c)(this,this.referenceEl,this.floatingEl)},this.keyDownHandler=e=>{if(!e.composedPath().includes(this.referenceEl))return;const{defaultPrevented:t,key:i}=e;return t?void 0:"Escape"===i||this.open&&e.shiftKey&&"Tab"===i?(this.closeCalciteDropdown(),void e.preventDefault()):void((0,r.i)(i)?(this.toggleDropdown(),e.preventDefault()):"ArrowDown"!==i&&"ArrowUp"!==i||(this.focusLastDropdownItem="ArrowUp"===i,this.open=!0,this.el.addEventListener("calciteDropdownOpen",this.onOpenEnd)))},this.focusOnFirstActiveOrDefaultItem=()=>{const e=this.getTraversableItems().find((e=>e.selected))||(this.focusLastDropdownItem?this.items[this.items.length-1]:this.items[0]);this.focusLastDropdownItem=!1,e&&(0,o.e)(e)},this.onOpenEnd=()=>{this.focusOnFirstActiveOrDefaultItem(),this.el.removeEventListener("calciteDropdownOpen",this.onOpenEnd)},this.toggleDropdown=()=>{this.open=!this.open,this.open&&this.el.addEventListener("calciteDropdownOpen",this.onOpenEnd)},this.open=!1,this.closeOnSelectDisabled=!1,this.disabled=!1,this.flipPlacements=void 0,this.maxItems=0,this.overlayPositioning="absolute",this.placement=n.e,this.selectedItems=[],this.type="click",this.widthScale=void 0,this.scale="m"}openHandler(){(0,h.o)(this),this.disabled?this.open=!1:this.reposition(!0)}handleDisabledChange(e){e||(this.open=!1)}flipPlacementsHandler(){this.setFilteredPlacements(),this.reposition(!0)}maxItemsHandler(){this.setMaxScrollerHeight()}overlayPositioningHandler(){this.reposition(!0)}placementHandler(){this.reposition(!0)}handlePropsChange(){this.updateItems(),this.updateGroupScale()}async setFocus(){await(0,c.c)(this),(0,o.f)(this.referenceEl)}connectedCallback(){this.mutationObserver?.observe(this.el,{childList:!0,subtree:!0}),this.setFilteredPlacements(),this.open&&(this.openHandler(),(0,h.o)(this)),this.updateItems(),(0,n.c)(this,this.referenceEl,this.floatingEl)}componentWillLoad(){(0,c.s)(this)}componentDidLoad(){(0,c.a)(this),(0,n.c)(this,this.referenceEl,this.floatingEl)}componentDidRender(){(0,l.u)(this)}disconnectedCallback(){this.mutationObserver?.disconnect(),this.resizeObserver?.disconnect(),(0,n.a)(this,this.referenceEl,this.floatingEl)}render(){const{open:e,guid:t}=this;return(0,s.h)(s.xr,{key:"377c3d9687bc025f004b4efe58bfa5f0893d86d0"},(0,s.h)(l.I,{key:"9e2f48be045fc6db10cc7203a8b998ec2b6abafd",disabled:this.disabled},(0,s.h)("div",{key:"8607de2d53a4f8c4b29206ee56aa23ad4c2cbe3d",class:"calcite-trigger-container",id:`${t}-menubutton`,onClick:this.toggleDropdown,onKeyDown:this.keyDownHandler,ref:this.setReferenceEl},(0,s.h)("slot",{key:"07de8df34055ddc39301654a5ca312ddf293e6a9","aria-controls":`${t}-menu`,"aria-expanded":(0,o.t)(e),"aria-haspopup":"menu",name:p,onSlotchange:this.updateTriggers})),(0,s.h)("div",{key:"c1469efb62eb704b021ce6479ad55deda59582d4","aria-hidden":(0,o.t)(!e),class:"calcite-dropdown-wrapper",ref:this.setFloatingEl},(0,s.h)("div",{key:"f875166d486a53cd393f17d9295974aa449d449f","aria-labelledby":`${t}-menubutton`,class:{"calcite-dropdown-content":!0,[n.F.animation]:!0,[n.F.animationActive]:e},id:`${t}-menu`,ref:this.setScrollerAndTransitionEl,role:"menu"},(0,s.h)("slot",{key:"bc6e61383aaf85b3d6242a86c50da68bc8b31e27",onSlotchange:this.updateGroups})))))}async reposition(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const{floatingEl:t,referenceEl:i,placement:s,overlayPositioning:o,filteredFlipPlacements:a}=this;return(0,n.r)(this,{floatingEl:t,referenceEl:i,overlayPositioning:o,placement:s,flipPlacements:a,type:"menu"},e)}closeCalciteDropdownOnClick(e){this.disabled||!this.open||e.composedPath().includes(this.el)||this.closeCalciteDropdown(!1)}closeCalciteDropdownOnEvent(e){this.closeCalciteDropdown(),e.stopPropagation()}closeCalciteDropdownOnOpenEvent(e){e.composedPath().includes(this.el)||(this.open=!1)}pointerEnterHandler(){this.disabled||"hover"!==this.type||this.toggleDropdown()}pointerLeaveHandler(){this.disabled||"hover"!==this.type||this.closeCalciteDropdown()}getTraversableItems(){return this.items.filter((e=>!e.disabled&&!e.hidden))}calciteInternalDropdownItemKeyEvent(e){const{keyboardEvent:t}=e.detail,i=t.target,s=this.getTraversableItems();switch(t.key){case"Tab":this.open=!1,this.updateTabIndexOfItems(i);break;case"ArrowDown":(0,o.v)(s,i,"next");break;case"ArrowUp":(0,o.v)(s,i,"previous");break;case"Home":(0,o.v)(s,i,"first");break;case"End":(0,o.v)(s,i,"last")}e.stopPropagation()}handleItemSelect(e){this.updateSelectedItems(),e.stopPropagation(),this.calciteDropdownSelect.emit(),this.closeOnSelectDisabled&&"none"!==e.detail.requestedDropdownGroup.selectionMode||this.closeCalciteDropdown(),e.stopPropagation()}updateGroupScale(){this.groups?.forEach((e=>e.scale=this.scale))}onBeforeOpen(){this.calciteDropdownBeforeOpen.emit()}onOpen(){this.calciteDropdownOpen.emit()}onBeforeClose(){this.calciteDropdownBeforeClose.emit()}onClose(){this.calciteDropdownClose.emit()}updateSelectedItems(){this.selectedItems=this.items.filter((e=>e.selected))}getMaxScrollerHeight(){const{maxItems:e,items:t}=this;let i,s=0,o=0;return this.groups.forEach((t=>{e>0&&s<e&&Array.from(t.children).forEach(((t,n)=>{0===n&&(isNaN(i)&&(i=t.offsetTop),o+=i),s<e&&(o+=t.offsetHeight,s+=1)}))})),t.length>e?o:0}closeCalciteDropdown(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.open=!1,e&&(0,o.e)(this.triggers[0])}updateTabIndexOfItems(e){this.items.forEach((t=>{t.tabIndex=e!==t?-1:0}))}static get delegatesFocus(){return!0}get el(){return this}static get watchers(){return{open:["openHandler"],disabled:["handleDisabledChange"],flipPlacements:["flipPlacementsHandler"],maxItems:["maxItemsHandler"],overlayPositioning:["overlayPositioningHandler"],placement:["placementHandler"],scale:["handlePropsChange"]}}static get style(){return":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:inline-block}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host .calcite-dropdown-wrapper{--calcite-floating-ui-z-index:var(--calcite-z-index-dropdown);display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index);visibility:hidden}.calcite-dropdown-wrapper .calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:inset, left, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:var(--calcite-z-index);border-radius:0.25rem}.calcite-dropdown-wrapper[data-placement^=bottom] .calcite-floating-ui-anim{inset-block-start:-5px}.calcite-dropdown-wrapper[data-placement^=top] .calcite-floating-ui-anim{inset-block-start:5px}.calcite-dropdown-wrapper[data-placement^=left] .calcite-floating-ui-anim{left:5px}.calcite-dropdown-wrapper[data-placement^=right] .calcite-floating-ui-anim{left:-5px}.calcite-dropdown-wrapper[data-placement] .calcite-floating-ui-anim--active{opacity:1;inset-block:0;left:0}:host([open]) .calcite-dropdown-wrapper{visibility:visible}:host .calcite-dropdown-content{max-block-size:45vh;inline-size:auto;overflow-y:auto;overflow-x:hidden;background-color:var(--calcite-color-foreground-1);inline-size:var(--calcite-dropdown-width)}.calcite-trigger-container{position:relative;display:flex;block-size:100%;flex:1 1 auto;word-wrap:break-word;word-break:break-word}@media (forced-colors: active){:host([open]) .calcite-dropdown-wrapper{border:1px solid canvasText}}:host([width-scale=s]){--calcite-dropdown-width:12rem}:host([width-scale=m]){--calcite-dropdown-width:14rem}:host([width-scale=l]){--calcite-dropdown-width:16rem}:host([hidden]){display:none}[hidden]{display:none}"}},[17,"calcite-dropdown",{open:[1540],closeOnSelectDisabled:[516,"close-on-select-disabled"],disabled:[516],flipPlacements:[16],maxItems:[514,"max-items"],overlayPositioning:[513,"overlay-positioning"],placement:[513],selectedItems:[1040],type:[513],widthScale:[513,"width-scale"],scale:[513],setFocus:[64],reposition:[64]},[[8,"click","closeCalciteDropdownOnClick"],[0,"calciteInternalDropdownCloseRequest","closeCalciteDropdownOnEvent"],[8,"calciteDropdownOpen","closeCalciteDropdownOnOpenEvent"],[1,"pointerenter","pointerEnterHandler"],[1,"pointerleave","pointerLeaveHandler"],[0,"calciteInternalDropdownItemKeyEvent","calciteInternalDropdownItemKeyEvent"],[0,"calciteInternalDropdownItemSelect","handleItemSelect"]],{open:["openHandler"],disabled:["handleDisabledChange"],flipPlacements:["flipPlacementsHandler"],maxItems:["maxItemsHandler"],overlayPositioning:["overlayPositioningHandler"],placement:["placementHandler"],scale:["handlePropsChange"]}]);function f(){if("undefined"===typeof customElements)return;["calcite-dropdown"].forEach((e=>{if("calcite-dropdown"===e)customElements.get(e)||customElements.define(e,m)}))}f();const w=m,u=f}}]);
//# sourceMappingURL=7131.7319fe32.chunk.js.map