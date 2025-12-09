import{a as J,b as ee,c as de}from"./chunk-XYVQIZFF.js";import{a as ue,b as me,e as be}from"./chunk-URT2J5BT.js";import{c as Re,d as he,f as pe,h as ge}from"./chunk-BMA7WWEI.js";import{Ba as Y,Da as Ge,I as He,K as A,L as X,M as L,N as Oe,P as Ae,S as De,a as Z,aa as Pe,c as G,d as re,e as O,f as W,g as R,i as oe,j as V,ka as D,ra as Me,sa as ce,ua as Be,w as se,wa as Q,x as $e,y as U,z as Ne}from"./chunk-VOIOZGVW.js";import{$ as z,$a as k,Ab as I,Bb as c,Fb as w,Gb as B,Hb as f,Ib as _,Ka as Ie,La as s,Lb as ye,N as _e,O as ie,Pa as xe,Qa as x,T as N,Tb as Te,Ub as le,Vb as E,Wb as Se,Xa as S,Xb as Ve,Y as P,Ya as ne,Yb as ke,Z as u,Za as Ce,_ as d,ba as F,bb as m,dc as Fe,fc as K,ha as T,hb as v,hc as Ee,ib as l,jc as g,kc as H,la as ae,mb as $,qa as M,sb as h,tb as p,ub as b,vb as j,wb as q,xb as we,yb as C}from"./chunk-TDMTREWI.js";var Le=(()=>{class t extends Q{pFocusTrapDisabled=!1;platformId=N(M);document=N(Z);firstHiddenFocusableElement;lastHiddenFocusableElement;ngOnInit(){super.ngOnInit(),V(this.platformId)&&!this.pFocusTrapDisabled&&!this.firstHiddenFocusableElement&&!this.lastHiddenFocusableElement&&this.createHiddenFocusableElements()}ngOnChanges(e){super.ngOnChanges(e),e.pFocusTrapDisabled&&V(this.platformId)&&(e.pFocusTrapDisabled.currentValue?this.removeHiddenFocusableElements():this.createHiddenFocusableElements())}removeHiddenFocusableElements(){this.firstHiddenFocusableElement&&this.firstHiddenFocusableElement.parentNode&&this.firstHiddenFocusableElement.parentNode.removeChild(this.firstHiddenFocusableElement),this.lastHiddenFocusableElement&&this.lastHiddenFocusableElement.parentNode&&this.lastHiddenFocusableElement.parentNode.removeChild(this.lastHiddenFocusableElement)}getComputedSelector(e){return`:not(.p-hidden-focusable):not([data-p-hidden-focusable="true"])${e??""}`}createHiddenFocusableElements(){let e="0",i=a=>He("span",{class:"p-hidden-accessible p-hidden-focusable",tabindex:e,role:"presentation","aria-hidden":!0,"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0,onFocus:a?.bind(this)});this.firstHiddenFocusableElement=i(this.onFirstHiddenElementFocus),this.lastHiddenFocusableElement=i(this.onLastHiddenElementFocus),this.firstHiddenFocusableElement.setAttribute("data-pc-section","firstfocusableelement"),this.lastHiddenFocusableElement.setAttribute("data-pc-section","lastfocusableelement"),this.el.nativeElement.prepend(this.firstHiddenFocusableElement),this.el.nativeElement.append(this.lastHiddenFocusableElement)}onFirstHiddenElementFocus(e){let{currentTarget:i,relatedTarget:a}=e,n=a===this.lastHiddenFocusableElement||!this.el.nativeElement?.contains(a)?Ae(i.parentElement,":not(.p-hidden-focusable)"):this.lastHiddenFocusableElement;L(n)}onLastHiddenElementFocus(e){let{currentTarget:i,relatedTarget:a}=e,n=a===this.firstHiddenFocusableElement||!this.el.nativeElement?.contains(a)?De(i.parentElement,":not(.p-hidden-focusable)"):this.firstHiddenFocusableElement;L(n)}static \u0275fac=(()=>{let e;return function(a){return(e||(e=F(t)))(a||t)}})();static \u0275dir=Ce({type:t,selectors:[["","pFocusTrap",""]],inputs:{pFocusTrapDisabled:[2,"pFocusTrapDisabled","pFocusTrapDisabled",g]},features:[k,P]})}return t})();var Qe=(()=>{class t extends Y{pathId;ngOnInit(){this.pathId="url(#"+D()+")"}static \u0275fac=(()=>{let e;return function(a){return(e||(e=F(t)))(a||t)}})();static \u0275cmp=S({type:t,selectors:[["WindowMaximizeIcon"]],features:[k],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14ZM9.77805 7.42192C9.89013 7.534 10.0415 7.59788 10.2 7.59995C10.3585 7.59788 10.5099 7.534 10.622 7.42192C10.7341 7.30985 10.798 7.15844 10.8 6.99995V3.94242C10.8066 3.90505 10.8096 3.86689 10.8089 3.82843C10.8079 3.77159 10.7988 3.7157 10.7824 3.6623C10.756 3.55552 10.701 3.45698 10.622 3.37798C10.5099 3.2659 10.3585 3.20202 10.2 3.19995H7.00002C6.84089 3.19995 6.68828 3.26317 6.57576 3.37569C6.46324 3.48821 6.40002 3.64082 6.40002 3.79995C6.40002 3.95908 6.46324 4.11169 6.57576 4.22422C6.68828 4.33674 6.84089 4.39995 7.00002 4.39995H8.80006L6.19997 7.00005C6.10158 7.11005 6.04718 7.25246 6.04718 7.40005C6.04718 7.54763 6.10158 7.69004 6.19997 7.80005C6.30202 7.91645 6.44561 7.98824 6.59997 8.00005C6.75432 7.98824 6.89791 7.91645 6.99997 7.80005L9.60002 5.26841V6.99995C9.6021 7.15844 9.66598 7.30985 9.77805 7.42192ZM1.4 14H3.8C4.17066 13.9979 4.52553 13.8498 4.78763 13.5877C5.04973 13.3256 5.1979 12.9707 5.2 12.6V10.2C5.1979 9.82939 5.04973 9.47452 4.78763 9.21242C4.52553 8.95032 4.17066 8.80215 3.8 8.80005H1.4C1.02934 8.80215 0.674468 8.95032 0.412371 9.21242C0.150274 9.47452 0.00210008 9.82939 0 10.2V12.6C0.00210008 12.9707 0.150274 13.3256 0.412371 13.5877C0.674468 13.8498 1.02934 13.9979 1.4 14ZM1.25858 10.0586C1.29609 10.0211 1.34696 10 1.4 10H3.8C3.85304 10 3.90391 10.0211 3.94142 10.0586C3.97893 10.0961 4 10.147 4 10.2V12.6C4 12.6531 3.97893 12.704 3.94142 12.7415C3.90391 12.779 3.85304 12.8 3.8 12.8H1.4C1.34696 12.8 1.29609 12.779 1.25858 12.7415C1.22107 12.704 1.2 12.6531 1.2 12.6V10.2C1.2 10.147 1.22107 10.0961 1.25858 10.0586Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,a){i&1&&(z(),h(0,"svg",0)(1,"g"),b(2,"path",1),p(),h(3,"defs")(4,"clipPath",2),b(5,"rect",3),p()()()),i&2&&($(a.getClassNames()),v("aria-label",a.ariaLabel)("aria-hidden",a.ariaHidden)("role",a.role),s(),v("clip-path",a.pathId),s(3),l("id",a.pathId))},encapsulation:2})}return t})();var ze=(()=>{class t extends Y{pathId;ngOnInit(){this.pathId="url(#"+D()+")"}static \u0275fac=(()=>{let e;return function(a){return(e||(e=F(t)))(a||t)}})();static \u0275cmp=S({type:t,selectors:[["WindowMinimizeIcon"]],features:[k],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0ZM6.368 7.952C6.44137 7.98326 6.52025 7.99958 6.6 8H9.8C9.95913 8 10.1117 7.93678 10.2243 7.82426C10.3368 7.71174 10.4 7.55913 10.4 7.4C10.4 7.24087 10.3368 7.08826 10.2243 6.97574C10.1117 6.86321 9.95913 6.8 9.8 6.8H8.048L10.624 4.224C10.73 4.11026 10.7877 3.95982 10.7849 3.80438C10.7822 3.64894 10.7192 3.50063 10.6093 3.3907C10.4994 3.28077 10.3511 3.2178 10.1956 3.21506C10.0402 3.21232 9.88974 3.27002 9.776 3.376L7.2 5.952V4.2C7.2 4.04087 7.13679 3.88826 7.02426 3.77574C6.91174 3.66321 6.75913 3.6 6.6 3.6C6.44087 3.6 6.28826 3.66321 6.17574 3.77574C6.06321 3.88826 6 4.04087 6 4.2V7.4C6.00042 7.47975 6.01674 7.55862 6.048 7.632C6.07656 7.70442 6.11971 7.7702 6.17475 7.82524C6.2298 7.88029 6.29558 7.92344 6.368 7.952ZM1.4 8.80005H3.8C4.17066 8.80215 4.52553 8.95032 4.78763 9.21242C5.04973 9.47452 5.1979 9.82939 5.2 10.2V12.6C5.1979 12.9707 5.04973 13.3256 4.78763 13.5877C4.52553 13.8498 4.17066 13.9979 3.8 14H1.4C1.02934 13.9979 0.674468 13.8498 0.412371 13.5877C0.150274 13.3256 0.00210008 12.9707 0 12.6V10.2C0.00210008 9.82939 0.150274 9.47452 0.412371 9.21242C0.674468 8.95032 1.02934 8.80215 1.4 8.80005ZM3.94142 12.7415C3.97893 12.704 4 12.6531 4 12.6V10.2C4 10.147 3.97893 10.0961 3.94142 10.0586C3.90391 10.0211 3.85304 10 3.8 10H1.4C1.34696 10 1.29609 10.0211 1.25858 10.0586C1.22107 10.0961 1.2 10.147 1.2 10.2V12.6C1.2 12.6531 1.22107 12.704 1.25858 12.7415C1.29609 12.779 1.34696 12.8 1.4 12.8H3.8C3.85304 12.8 3.90391 12.779 3.94142 12.7415Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,a){i&1&&(z(),h(0,"svg",0)(1,"g"),b(2,"path",1),p(),h(3,"defs")(4,"clipPath",2),b(5,"rect",3),p()()()),i&2&&($(a.getClassNames()),v("aria-label",a.ariaLabel)("aria-hidden",a.ariaHidden)("role",a.role),s(),v("clip-path",a.pathId),s(3),l("id",a.pathId))},encapsulation:2})}return t})();var qe=["header"],Ke=["footer"],Ze=["indicator"],We=["caption"],Ue=["closeicon"],Xe=["previousthumbnailicon"],Ye=["nextthumbnailicon"],Je=["itempreviousicon"],et=["itemnexticon"],tt=["item"],it=["thumbnail"],at=["mask"],nt=["container"],lt=()=>({"p-galleria-mask p-overlay-mask p-overlay-mask-enter":!0}),rt=(t,r)=>({showTransitionParams:t,hideTransitionParams:r}),ot=t=>({value:"visible",params:t});function st(t,r){if(t&1){let e=C();h(0,"p-galleriaContent",7),I("@animation.start",function(a){u(e);let n=c(3);return d(n.onAnimationStart(a))})("@animation.done",function(a){u(e);let n=c(3);return d(n.onAnimationEnd(a))})("maskHide",function(){u(e);let a=c(3);return d(a.onMaskHide())})("activeItemChange",function(a){u(e);let n=c(3);return d(n.onActiveItemChange(a))}),p()}if(t&2){let e=c(3);l("@animation",E(9,ot,Se(6,rt,e.showTransitionOptions,e.hideTransitionOptions)))("value",e.value)("activeIndex",e.activeIndex)("numVisible",e.numVisibleLimit||e.numVisible)("ngStyle",e.containerStyle)("fullScreen",e.fullScreen)}}function ct(t,r){if(t&1&&(h(0,"div",5,2),m(2,st,1,11,"p-galleriaContent",6),p()),t&2){let e=c(2);$(e.maskClass),l("ngClass",le(6,lt)),v("role",e.fullScreen?"dialog":"region")("aria-modal",e.fullScreen?"true":void 0),s(2),l("ngIf",e.visible)}}function ut(t,r){if(t&1&&(h(0,"div",null,1),m(2,ct,3,7,"div",4),p()),t&2){let e=c();s(2),l("ngIf",e.maskVisible)}}function dt(t,r){if(t&1){let e=C();h(0,"p-galleriaContent",8),I("activeItemChange",function(a){u(e);let n=c();return d(n.onActiveItemChange(a))}),p()}if(t&2){let e=c();l("value",e.value)("activeIndex",e.activeIndex)("numVisible",e.numVisibleLimit||e.numVisible)}}var mt=["closeButton"],ht=(t,r,e)=>({"p-galleria p-component":!0,"p-galleria-fullscreen":t,"p-galleria-inset-indicators":r,"p-galleria-hover-navigators":e}),pt=()=>({});function gt(t,r){t&1&&b(0,"TimesIcon",11),t&2&&l("styleClass","p-galleria-close-icon")}function bt(t,r){}function vt(t,r){t&1&&m(0,bt,0,0,"ng-template")}function ft(t,r){if(t&1){let e=C();h(0,"button",8),I("click",function(){u(e);let a=c(2);return d(a.maskHide.emit())}),m(1,gt,1,1,"TimesIcon",9)(2,vt,1,0,null,10),p()}if(t&2){let e=c(2);v("aria-label",e.closeAriaLabel())("data-pc-section","closebutton"),s(),l("ngIf",!e.galleria.closeIconTemplate&&!e.galleria._closeIconTemplate),s(),l("ngTemplateOutlet",e.galleria.closeIconTemplate||e.galleria._closeIconTemplate)}}function _t(t,r){if(t&1&&(h(0,"div",12),b(1,"p-galleriaItemSlot",13),p()),t&2){let e=c(2);s(),l("templates",e.galleria.templates)}}function It(t,r){if(t&1){let e=C();h(0,"p-galleriaThumbnails",14),I("onActiveIndexChange",function(a){u(e);let n=c(2);return d(n.onActiveIndexChange(a))})("stopSlideShow",function(){u(e);let a=c(2);return d(a.stopSlideShow())}),p()}if(t&2){let e=c(2);l("containerId",e.id)("value",e.value)("activeIndex",e.activeIndex)("templates",e.galleria.templates)("numVisible",e.numVisible)("responsiveOptions",e.galleria.responsiveOptions)("circular",e.galleria.circular)("isVertical",e.isVertical())("contentHeight",e.galleria.verticalThumbnailViewPortHeight)("showThumbnailNavigators",e.galleria.showThumbnailNavigators)("slideShowActive",e.slideShowActive)}}function xt(t,r){if(t&1&&(h(0,"div",15),b(1,"p-galleriaItemSlot",16),p()),t&2){let e=c(2);s(),l("templates",e.galleria.templates)}}function Ct(t,r){if(t&1){let e=C();h(0,"div",1),m(1,ft,3,4,"button",2)(2,_t,2,1,"div",3),h(3,"div",4)(4,"p-galleriaItem",5),I("onActiveIndexChange",function(a){u(e);let n=c();return d(n.onActiveIndexChange(a))})("startSlideShow",function(){u(e);let a=c();return d(a.startSlideShow())})("stopSlideShow",function(){u(e);let a=c();return d(a.stopSlideShow())}),p(),m(5,It,1,11,"p-galleriaThumbnails",6),p(),m(6,xt,2,1,"div",7),p()}if(t&2){let e=c();$(e.galleriaClass()),l("ngClass",Ve(24,ht,e.galleria.fullScreen,e.galleria.showIndicatorsOnItem,e.galleria.showItemNavigatorsOnHover&&!e.galleria.fullScreen))("ngStyle",e.galleria.fullScreen?le(28,pt):e.galleria.containerStyle)("pFocusTrapDisabled",!e.fullScreen),v("id",e.id)("role","region"),s(),l("ngIf",e.galleria.fullScreen),s(),l("ngIf",e.galleria.templates&&(e.galleria.headerFacet||e.galleria.headerTemplate)),s(),v("aria-live",e.galleria.autoPlay?"polite":"off"),s(),l("id",e.id)("value",e.value)("activeIndex",e.activeIndex)("circular",e.galleria.circular)("templates",e.galleria.templates)("showIndicators",e.galleria.showIndicators)("changeItemOnIndicatorHover",e.galleria.changeItemOnIndicatorHover)("indicatorFacet",e.galleria.indicatorFacet)("captionFacet",e.galleria.captionFacet)("showItemNavigators",e.galleria.showItemNavigators)("autoPlay",e.galleria.autoPlay)("slideShowActive",e.slideShowActive),s(),l("ngIf",e.galleria.showThumbnails),s(),l("ngIf",e.shouldRenderFooter())}}function wt(t,r){t&1&&we(0)}function yt(t,r){if(t&1&&(j(0),m(1,wt,1,0,"ng-container",1),q()),t&2){let e=c();s(),l("ngTemplateOutlet",e.contentTemplate)("ngTemplateOutletContext",e.context)}}var Tt=t=>({"p-galleria-prev-button p-galleria-nav-button":!0,"p-disabled":t}),St=t=>({"p-galleria-next-button p-galleria-nav-button":!0,"p-disabled":t}),Vt=t=>({"p-galleria-indicator":!0,"p-galleria-indicator-active":t});function kt(t,r){t&1&&b(0,"ChevronLeftIcon",9),t&2&&l("styleClass","p-galleria-prev-icon")}function Ft(t,r){}function Et(t,r){t&1&&m(0,Ft,0,0,"ng-template")}function $t(t,r){if(t&1){let e=C();h(0,"button",6),I("click",function(a){u(e);let n=c();return d(n.navBackward(a))})("focus",function(){u(e);let a=c();return d(a.onButtonFocus("left"))})("blur",function(){u(e);let a=c();return d(a.onButtonBlur("left"))}),m(1,kt,1,1,"ChevronLeftIcon",7)(2,Et,1,0,null,8),p()}if(t&2){let e=c();l("ngClass",E(4,Tt,e.isNavBackwardDisabled()))("disabled",e.isNavBackwardDisabled()),s(),l("ngIf",!e.galleria.itemPreviousIconTemplate&&!e.galleria._itemPreviousIconTemplate),s(),l("ngTemplateOutlet",e.galleria.itemPreviousIconTemplate||e.galleria._itemPreviousIconTemplate)}}function Nt(t,r){t&1&&b(0,"ChevronRightIcon",9),t&2&&l("styleClass","p-galleria-next-icon")}function Ht(t,r){}function Ot(t,r){t&1&&m(0,Ht,0,0,"ng-template")}function At(t,r){if(t&1){let e=C();h(0,"button",6),I("click",function(a){u(e);let n=c();return d(n.navForward(a))})("focus",function(){u(e);let a=c();return d(a.onButtonFocus("right"))})("blur",function(){u(e);let a=c();return d(a.onButtonBlur("right"))}),m(1,Nt,1,1,"ChevronRightIcon",7)(2,Ot,1,0,null,8),p()}if(t&2){let e=c();l("ngClass",E(4,St,e.isNavForwardDisabled()))("disabled",e.isNavForwardDisabled()),s(),l("ngIf",!e.galleria.itemNextIconTemplate&&!e.galleria._itemNextIconTemplate),s(),l("ngTemplateOutlet",e.galleria.itemNextIconTemplate||e.galleria._itemNextIconTemplate)}}function Dt(t,r){if(t&1&&(h(0,"div",10),b(1,"p-galleriaItemSlot",11),p()),t&2){let e=c();s(),l("item",e.activeItem)("templates",e.templates)}}function Pt(t,r){t&1&&b(0,"button",17)}function Mt(t,r){if(t&1){let e=C();h(0,"li",14),I("click",function(){let a=u(e).index,n=c(2);return d(n.onIndicatorClick(a))})("mouseenter",function(){let a=u(e).index,n=c(2);return d(n.onIndicatorMouseEnter(a))})("keydown",function(a){let n=u(e).index,o=c(2);return d(o.onIndicatorKeyDown(a,n))}),m(1,Pt,1,0,"button",15),b(2,"p-galleriaItemSlot",16),p()}if(t&2){let e=r.index,i=c(2);l("ngClass",E(7,Vt,i.isIndicatorItemActive(e))),v("aria-label",i.ariaPageLabel(e+1))("aria-selected",i.activeIndex===e)("aria-controls",i.id+"_item_"+e),s(),l("ngIf",!i.indicatorFacet&&!i.galleria.indicatorTemplate),s(),l("index",e)("templates",i.templates)}}function Bt(t,r){if(t&1&&(h(0,"ul",12),m(1,Mt,3,9,"li",13),p()),t&2){let e=c();s(),l("ngForOf",e.value)}}var Gt=["itemsContainer"],Rt=t=>({height:t}),Lt=t=>({"p-galleria-thumbnail-prev-button p-galleria-thumbnail-nav-button":!0,"p-disabled":t}),Qt=(t,r,e,i)=>({"p-galleria-thumbnail-item":!0,"p-galleria-thumbnail-item-current":t,"p-galleria-thumbnail-item-active":r,"p-galleria-thumbnail-item-start":e,"p-galleria-thumbnail-item-end":i}),zt=t=>({"p-galleria-thumbnail-next-button p-galleria-thumbnail-nav-button":!0,"p-disabled":t});function jt(t,r){t&1&&b(0,"ChevronLeftIcon",11),t&2&&l("styleClass","p-galleria-thumbnail-prev-icon")}function qt(t,r){t&1&&b(0,"ChevronUpIcon",11),t&2&&l("styleClass","p-galleria-thumbnail-prev-icon")}function Kt(t,r){if(t&1&&(j(0),m(1,jt,1,1,"ChevronLeftIcon",10)(2,qt,1,1,"ChevronUpIcon",10),q()),t&2){let e=c(2);s(),l("ngIf",!e.isVertical),s(),l("ngIf",e.isVertical)}}function Zt(t,r){}function Wt(t,r){t&1&&m(0,Zt,0,0,"ng-template")}function Ut(t,r){if(t&1){let e=C();h(0,"button",7),I("click",function(a){u(e);let n=c();return d(n.navBackward(a))}),m(1,Kt,3,2,"ng-container",8)(2,Wt,1,0,null,9),p()}if(t&2){let e=c();l("ngClass",E(5,Lt,e.isNavBackwardDisabled()))("disabled",e.isNavBackwardDisabled()),v("aria-label",e.ariaPrevButtonLabel()),s(),l("ngIf",!e.galleria.previousThumbnailIconTemplate&&!e.galleria._previousThumbnailIconTemplate),s(),l("ngTemplateOutlet",e.galleria.previousThumbnailIconTemplate||e.galleria._previousThumbnailIconTemplate)}}function Xt(t,r){if(t&1){let e=C();h(0,"div",12),I("keydown",function(a){let n=u(e).index,o=c();return d(o.onThumbnailKeydown(a,n))}),h(1,"div",13),I("click",function(){let a=u(e).index,n=c();return d(n.onItemClick(a))})("touchend",function(){let a=u(e).index,n=c();return d(n.onItemClick(a))})("keydown.enter",function(){let a=u(e).index,n=c();return d(n.onItemClick(a))}),b(2,"p-galleriaItemSlot",14),p()()}if(t&2){let e=r.$implicit,i=r.index,a=c();l("ngClass",ke(10,Qt,a.activeIndex===i,a.isItemActive(i),a.firstItemAciveIndex()===i,a.lastItemActiveIndex()===i)),v("aria-selected",a.activeIndex===i)("aria-controls",a.containerId+"_item_"+i)("data-pc-section","thumbnailitem")("data-p-active",a.activeIndex===i),s(),v("tabindex",a.activeIndex===i?0:-1)("aria-current",a.activeIndex===i?"page":void 0)("aria-label",a.ariaPageLabel(i+1)),s(),l("item",e)("templates",a.templates)}}function Yt(t,r){t&1&&b(0,"ChevronRightIcon",16),t&2&&l("ngClass","p-galleria-thumbnail-next-icon")}function Jt(t,r){t&1&&b(0,"ChevronDownIcon",16),t&2&&l("ngClass","p-galleria-thumbnail-next-icon")}function ei(t,r){if(t&1&&(j(0),m(1,Yt,1,1,"ChevronRightIcon",15)(2,Jt,1,1,"ChevronDownIcon",15),q()),t&2){let e=c(2);s(),l("ngIf",!e.isVertical),s(),l("ngIf",e.isVertical)}}function ti(t,r){}function ii(t,r){t&1&&m(0,ti,0,0,"ng-template")}function ai(t,r){if(t&1){let e=C();h(0,"button",7),I("click",function(a){u(e);let n=c();return d(n.navForward(a))}),m(1,ei,3,2,"ng-container",8)(2,ii,1,0,null,9),p()}if(t&2){let e=c();l("ngClass",E(5,zt,e.isNavForwardDisabled()))("disabled",e.isNavForwardDisabled()),v("aria-label",e.ariaNextButtonLabel()),s(),l("ngIf",!e.galleria.nextThumbnailIconTemplate&&!e.galleria._nextThumbnailIconTemplate),s(),l("ngTemplateOutlet",e.galleria.nextThumbnailIconTemplate||e.galleria._nextThumbnailIconTemplate)}}var ni=({dt:t})=>`
.p-galleria {
    overflow: hidden;
    border-style: solid;
    border-width: ${t("galleria.border.width")};
    border-color: ${t("galleria.border.color")};
    border-radius: ${t("galleria.border.radius")};
}

.p-galleria-content {
    display: flex;
    flex-direction: column;
}

.p-galleria-items-container {
    display: flex;
    flex-direction: column;
    position: relative;
}

.p-galleria-items {
    position: relative;
    display: flex;
    height: 100%;
}

.p-galleria-nav-button {
    position: absolute;
    top: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background: ${t("galleria.nav.button.background")};
    color: ${t("galleria.nav.button.color")};
    width: ${t("galleria.nav.button.size")};
    height: ${t("galleria.nav.button.size")};
    transition: background ${t("galleria.transition.duration")}, color ${t("galleria.transition.duration")}, outline-color ${t("galleria.transition.duration")}, box-shadow ${t("galleria.transition.duration")};
    margin: calc(-1 * calc(${t("galleria.nav.button.size")}) / 2) ${t("galleria.nav.button.gutter")} 0 ${t("galleria.nav.button.gutter")};
    padding: 0;
    user-select: none;
    border: 0 none;
    cursor: pointer;
    outline-color: transparent;
}

.p-galleria-nav-button:not(.p-disabled):hover {
    background: ${t("galleria.nav.button.hover.background")};
    color: ${t("galleria.nav.button.hover.color")};
}

.p-galleria-nav-button:not(.p-disabled):focus-visible {
    box-shadow: ${t("galleria.nav.button.focus.ring.shadow")};
    outline: ${t("galleria.nav.button.focus.ring.width")} ${t("galleria.nav.button.focus.ring.style")} ${t("galleria.nav.button.focus.ring.color")};
    outline-offset: ${t("galleria.nav.button.focus.ring.offset")};
}

.p-galleria-next-icon,
.p-galleria-prev-icon {
    font-size: ${t("galleria.nav.icon.size")};
    width: ${t("galleria.nav.icon.size")};
    height: ${t("galleria.nav.icon.size")};
}

.p-galleria-prev-button {
    border-radius: ${t("galleria.nav.button.prev.border.radius")};
    left: 0;
}

.p-galleria-next-button {
    border-radius: ${t("galleria.nav.button.next.border.radius")};
    right: 0;
}

.p-galleria-prev-button:dir(rtl) {
    left: auto;
    right: 0;
    transform: rotate(180deg);
}

.p-galleria-next-button:dir(rtl) {
    right: auto;
    left: 0;
    transform: rotate(180deg);
}

.p-galleria-item {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
}

.p-galleria-hover-navigators .p-galleria-nav-button {
    pointer-events: none;
    opacity: 0;
    transition: opacity ${t("galleria.transition.duration")} ease-in-out;
}

.p-galleria-hover-navigators .p-galleria-items-container:hover .p-galleria-nav-button {
    pointer-events: all;
    opacity: 1;
}

.p-galleria-hover-navigators .p-galleria-items-container:hover .p-galleria-nav-button.p-disabled {
    pointer-events: none;
}

.p-galleria-caption {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: ${t("galleria.caption.background")};
    color: ${t("galleria.caption.color")};
    padding: ${t("galleria.caption.padding")};
}

.p-galleria-thumbnails {
    display: flex;
    flex-direction: column;
    overflow: auto;
    flex-shrink: 0;
}

.p-galleria-thumbnail-nav-button {
    align-self: center;
    flex: 0 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    margin: 0 ${t("galleria.thumbnail.nav.button.gutter")};
    padding: 0;
    border: none;
    user-select: none;
    cursor: pointer;
    background: transparent;
    color: ${t("galleria.thumbnail.nav.button.color")};
    width: ${t("galleria.thumbnail.nav.button.size")};
    height: ${t("galleria.thumbnail.nav.button.size")};
    transition: background ${t("galleria.transition.duration")}, color ${t("galleria.transition.duration")}, outline-color ${t("galleria.transition.duration")};
    outline-color: transparent;
    border-radius: ${t("galleria.thumbnail.nav.button.border.radius")};
}

.p-galleria-thumbnail-nav-button:hover {
    background: ${t("galleria.thumbnail.nav.button.hover.background")};
    color: ${t("galleria.thumbnail.nav.button.hover.color")};
}

.p-galleria-thumbnail-nav-button:focus-visible {
    box-shadow: ${t("galleria.thumbnail.nav.button.focus.ring.shadow")};
    outline: ${t("galleria.thumbnail.nav.button.focus.ring.width")} ${t("galleria.thumbnail.nav.button.focus.ring.style")} ${t("galleria.thumbnail.nav.button.focus.ring.color")};
    outline-offset: ${t("galleria.thumbnail.nav.button.focus.ring.offset")};
}

.p-galleria-thumbnail-nav-button .p-galleria-thumbnail-next-icon,
.p-galleria-thumbnail-nav-button .p-galleria-thumbnail-prev-icon {
    font-size: ${t("galleria.thumbnail.nav.button.icon.size")};
    width: ${t("galleria.thumbnail.nav.button.icon.size")};
    height: ${t("galleria.thumbnail.nav.button.icon.size")};
}

.p-galleria-thumbnails-content {
    display: flex;
    flex-direction: row;
    background: ${t("galleria.thumbnails.content.background")};
    padding: ${t("galleria.thumbnails.content.padding")};
}

.p-galleria-thumbnails-viewport {
    overflow: hidden;
    width: 100%;
}

.p-galleria:not(.p-galleria-thumbnails-right):not(.p-galleria-thumbnails-left) .p-galleria-thumbnail-prev-button:dir(rtl),
.p-galleria:not(.p-galleria-thumbnails-right):not(.p-galleria-thumbnails-left) .p-galleria-thumbnail-next-button:dir(rtl) {
    transform: rotate(180deg);
}

.p-galleria-thumbnail-items {
    display: flex;
}

.p-galleria-thumbnail-item {
    overflow: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0.5;
}

.p-galleria-thumbnail {
    outline-color: transparent;
}

.p-galleria-thumbnail-item:hover {
    opacity: 1;
    transition: opacity 0.3s;
}

.p-galleria-thumbnail-item-current {
    opacity: 1;
}

.p-galleria-thumbnails-left .p-galleria-content,
.p-galleria-thumbnails-right .p-galleria-content {
    flex-direction: row;
}

.p-galleria-thumbnails-left .p-galleria-items-container,
.p-galleria-thumbnails-right .p-galleria-items-container {
    flex-direction: row;
}

.p-galleria-thumbnails-left .p-galleria-items-container,
.p-galleria-thumbnails-top .p-galleria-items-container {
    order: 2;
}

.p-galleria-thumbnails-left .p-galleria-thumbnails,
.p-galleria-thumbnails-top .p-galleria-thumbnails {
    order: 1;
}

.p-galleria-thumbnails-left .p-galleria-thumbnails-content,
.p-galleria-thumbnails-right .p-galleria-thumbnails-content {
    flex-direction: column;
    flex-grow: 1;
}

.p-galleria-thumbnails-left .p-galleria-thumbnail-items,
.p-galleria-thumbnails-right .p-galleria-thumbnail-items {
    flex-direction: column;
    height: 100%;
}

.p-galleria-indicator-list {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${t("galleria.indicator.list.padding")};
    gap: ${t("galleria.indicator.list.gap")};
    margin: 0;
    list-style: none;
}

.p-galleria-indicator-button {
    display: inline-flex;
    align-items: center;
    background: ${t("galleria.indicator.button.background")};
    width: ${t("galleria.indicator.button.width")};
    height: ${t("galleria.indicator.button.height")};
    transition: background ${t("galleria.transition.duration")}, color ${t("galleria.transition.duration")}, outline-color ${t("galleria.transition.duration")}, box-shadow ${t("galleria.transition.duration")};
    outline-color: transparent;
    border-radius: ${t("galleria.indicator.button.border.radius")};
    margin: 0;
    padding: 0;
    border: none;
    user-select: none;
    cursor: pointer;
}

.p-galleria-indicator-button:hover {
    background: ${t("galleria.indicator.button.hover.background")};
}

.p-galleria-indicator-button:focus-visible {
    box-shadow: ${t("galleria.indicator.button.focus.ring.shadow")};
    outline: ${t("galleria.indicator.button.focus.ring.width")} ${t("galleria.indicator.button.focus.ring.style")} ${t("galleria.indicator.button.focus.ring.color")};
    outline-offset: ${t("galleria.indicator.button.focus.ring.offset")};
}

.p-galleria-indicator-active .p-galleria-indicator-button {
    background: ${t("galleria.indicator.button.active.background")};
}

.p-galleria-indicators-left .p-galleria-items-container,
.p-galleria-indicators-right .p-galleria-items-container {
    flex-direction: row;
    align-items: center;
}

.p-galleria-indicators-left .p-galleria-items,
.p-galleria-indicators-top .p-galleria-items {
    order: 2;
}

.p-galleria-indicators-left .p-galleria-indicator-list,
.p-galleria-indicators-top .p-galleria-indicator-list {
    order: 1;
}

.p-galleria-indicators-left .p-galleria-indicator-list,
.p-galleria-indicators-right .p-galleria-indicator-list {
    flex-direction: column;
}

.p-galleria-inset-indicators .p-galleria-indicator-list {
    position: absolute;
    display: flex;
    z-index: 1;
    background: ${t("galleria.inset.indicator.list.background")};
}

.p-galleria-inset-indicators .p-galleria-indicator-button {
    background: ${t("galleria.inset.indicator.button.background")};
}

.p-galleria-inset-indicators .p-galleria-indicator-button:hover {
    background: ${t("galleria.inset.indicator.button.hover.background")};
}

.p-galleria-inset-indicators .p-galleria-indicator-active .p-galleria-indicator-button {
    background: ${t("galleria.inset.indicator.button.active.background")};
}

.p-galleria-inset-indicators.p-galleria-indicators-top .p-galleria-indicator-list {
    top: 0;
    left: 0;
    width: 100%;
    align-items: flex-start;
}

.p-galleria-inset-indicators.p-galleria-indicators-right .p-galleria-indicator-list {
    right: 0;
    top: 0;
    height: 100%;
    align-items: flex-end;
}

.p-galleria-inset-indicators.p-galleria-indicators-bottom .p-galleria-indicator-list {
    bottom: 0;
    left: 0;
    width: 100%;
    align-items: flex-end;
}

.p-galleria-inset-indicators.p-galleria-indicators-left .p-galleria-indicator-list {
    left: 0;
    top: 0;
    height: 100%;
    align-items: flex-start;
}

.p-galleria-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-galleria-close-button {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin: ${t("galleria.close.button.gutter")};
    background: ${t("galleria.close.button.background")};
    color: ${t("galleria.close.button.color")};
    width: ${t("galleria.close.button.size")};
    height: ${t("galleria.close.button.size")};
    padding: 0;
    border: none;
    user-select: none;
    cursor: pointer;
    border-radius: ${t("galleria.close.button.border.radius")};
    outline-color: transparent;
    transition: background ${t("galleria.transition.duration")}, color ${t("galleria.transition.duration")}, outline-color ${t("galleria.transition.duration")};
}

.p-galleria-close-icon {
    font-size: ${t("galleria.close.button.icon.size")};
    width: ${t("galleria.close.button.icon.size")};
    height: ${t("galleria.close.button.icon.size")};
}

.p-galleria-close-button:hover {
    background: ${t("galleria.close.button.hover.background")};
    color: ${t("galleria.close.button.hover.color")};
}

.p-galleria-close-button:focus-visible {
    box-shadow: ${t("galleria.close.button.focus.ring.shadow")};
    outline: ${t("galleria.close.button.focus.ring.width")} ${t("galleria.close.button.focus.ring.style")} ${t("galleria.close.button.focus.ring.color")};
    outline-offset: ${t("galleria.close.button.focus.ring.offset")};
}

.p-galleria-mask .p-galleria-nav-button {
    position: fixed;
    top: 50%;
}

.p-galleria-enter-active {
    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
}

.p-galleria-leave-active {
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.p-galleria-enter-from,
.p-galleria-leave-to {
    opacity: 0;
    transform: scale(0.7);
}

.p-galleria-enter-active .p-galleria-nav-button {
    opacity: 0;
}

.p-items-hidden .p-galleria-thumbnail-item {
    visibility: hidden;
}

.p-items-hidden .p-galleria-thumbnail-item.p-galleria-thumbnail-item-active {
    visibility: visible;
}
`,li={mask:"p-galleria-mask p-overlay-mask p-overlay-mask-enter",root:({instance:t})=>{let r=t.$attrs.showThumbnails&&t.getPositionClass("p-galleria-thumbnails",t.$attrs.thumbnailsPosition),e=t.$attrs.showIndicators&&t.getPositionClass("p-galleria-indicators",t.$attrs.indicatorsPosition);return["p-galleria p-component",{"p-galleria-fullscreen":t.$attrs.fullScreen,"p-galleria-inset-indicators":t.$attrs.showIndicatorsOnItem,"p-galleria-hover-navigators":t.$attrs.showItemNavigatorsOnHover&&!t.$attrs.fullScreen},r,e]},closeButton:"p-galleria-close-button",closeIcon:"p-galleria-close-icon",header:"p-galleria-header",content:"p-galleria-content",footer:"p-galleria-footer",itemsContainer:"p-galleria-items-container",items:"p-galleria-items",prevButton:({instance:t})=>["p-galleria-prev-button p-galleria-nav-button",{"p-disabled":t.isNavBackwardDisabled()}],prevIcon:"p-galleria-prev-icon",item:"p-galleria-item",nextButton:({instance:t})=>["p-galleria-next-button p-galleria-nav-button",{"p-disabled":t.isNavForwardDisabled()}],nextIcon:"p-galleria-next-icon",caption:"p-galleria-caption",indicatorList:"p-galleria-indicator-list",indicator:({instance:t,index:r})=>["p-galleria-indicator",{"p-galleria-indicator-active":t.isIndicatorItemActive(r)}],indicatorButton:"p-galleria-indicator-button",thumbnails:"p-galleria-thumbnails",thumbnailContent:"p-galleria-thumbnails-content",thumbnailPrevButton:({instance:t})=>["p-galleria-thumbnail-prev-button p-galleria-thumbnail-nav-button",{"p-disabled":t.isNavBackwardDisabled()}],thumbnailPrevIcon:"p-galleria-thumbnail-prev-icon",thumbnailsViewport:"p-galleria-thumbnails-viewport",thumbnailItems:"p-galleria-thumbnail-items",thumbnailItem:({instance:t,index:r,activeIndex:e})=>["p-galleria-thumbnail-item",{"p-galleria-thumbnail-item-current":e===r,"p-galleria-thumbnail-item-active":t.isItemActive(r),"p-galleria-thumbnail-item-start":t.firstItemAciveIndex()===r,"p-galleria-thumbnail-item-end":t.lastItemActiveIndex()===r}],thumbnail:"p-galleria-thumbnail",thumbnailNextButton:({instance:t})=>["p-galleria-thumbnail-next-button  p-galleria-thumbnail-nav-button",{"p-disabled":t.isNavForwardDisabled()}],thumbnailNextIcon:"p-galleria-thumbnail-next-icon"},je=(()=>{class t extends Be{name="galleria";theme=ni;classes=li;static \u0275fac=(()=>{let e;return function(a){return(e||(e=F(t)))(a||t)}})();static \u0275prov=_e({token:t,factory:t.\u0275fac})}return t})();var te=(()=>{class t extends Q{platformId;element;cd;get activeIndex(){return this._activeIndex}set activeIndex(e){this._activeIndex=e}fullScreen=!1;id;value;numVisible=3;responsiveOptions;showItemNavigators=!1;showThumbnailNavigators=!0;showItemNavigatorsOnHover=!1;changeItemOnIndicatorHover=!1;circular=!1;autoPlay=!1;shouldStopAutoplayByClick=!0;transitionInterval=4e3;showThumbnails=!0;thumbnailsPosition="bottom";verticalThumbnailViewPortHeight="300px";showIndicators=!1;showIndicatorsOnItem=!1;indicatorsPosition="bottom";baseZIndex=0;maskClass;containerClass;containerStyle;showTransitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";get visible(){return this._visible}set visible(e){this._visible=e,this._visible&&!this.maskVisible&&(this.maskVisible=!0)}activeIndexChange=new T;visibleChange=new T;mask;container;_visible=!1;_activeIndex=0;headerTemplate;headerFacet;footerTemplate;footerFacet;indicatorTemplate;indicatorFacet;captionTemplate;captionFacet;_closeIconTemplate;closeIconTemplate;_previousThumbnailIconTemplate;previousThumbnailIconTemplate;_nextThumbnailIconTemplate;nextThumbnailIconTemplate;_itemPreviousIconTemplate;itemPreviousIconTemplate;_itemNextIconTemplate;itemNextIconTemplate;_itemTemplate;itemTemplate;_thumbnailTemplate;thumbnailTemplate;maskVisible=!1;numVisibleLimit=0;_componentStyle=N(je);constructor(e,i,a){super(),this.platformId=e,this.element=i,this.cd=a}templates;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"header":this.headerFacet=e.template;break;case"footer":this.footerFacet=e.template;break;case"indicator":this.indicatorFacet=e.template;break;case"closeicon":this.closeIconTemplate=e.template;break;case"itemnexticon":this.itemNextIconTemplate=e.template;break;case"itempreviousicon":this.itemPreviousIconTemplate=e.template;break;case"previousthumbnailicon":this.previousThumbnailIconTemplate=e.template;break;case"nextthumbnailicon":this.nextThumbnailIconTemplate=e.template;break;case"caption":this.captionFacet=e.template;break;case"item":this.itemTemplate=e.template;break;case"thumbnail":this.thumbnailTemplate=e.template;break}})}ngOnChanges(e){super.ngOnChanges(e),e.value&&e.value.currentValue?.length<this.numVisible?this.numVisibleLimit=e.value.currentValue.length:this.numVisibleLimit=0}onMaskHide(){this.visible=!1,this.visibleChange.emit(!1)}onActiveItemChange(e){this.activeIndex!==e&&(this.activeIndex=e,this.activeIndexChange.emit(e))}onAnimationStart(e){switch(e.toState){case"visible":this.enableModality(),setTimeout(()=>{L(X(this.container.nativeElement,'[data-pc-section="closebutton"]'))},25);break;case"void":se(this.mask?.nativeElement,"p-overlay-mask-leave");break}}onAnimationEnd(e){switch(e.toState){case"void":this.disableModality();break}}enableModality(){$e(),this.cd.markForCheck(),this.mask&&be.set("modal",this.mask.nativeElement,this.baseZIndex||this.config.zIndex.modal)}disableModality(){Ne(),this.maskVisible=!1,this.cd.markForCheck(),this.mask&&be.clear(this.mask.nativeElement)}ngOnDestroy(){this.fullScreen&&U(this.document.body,"p-overflow-hidden"),this.mask&&this.disableModality()}static \u0275fac=function(i){return new(i||t)(x(M),x(ae),x(K))};static \u0275cmp=S({type:t,selectors:[["p-galleria"]],contentQueries:function(i,a,n){if(i&1&&(w(n,qe,4),w(n,Ke,4),w(n,Ze,4),w(n,We,4),w(n,Ue,4),w(n,Xe,4),w(n,Ye,4),w(n,Je,4),w(n,et,4),w(n,tt,4),w(n,it,4),w(n,Me,4)),i&2){let o;f(o=_())&&(a.headerTemplate=o.first),f(o=_())&&(a.footerTemplate=o.first),f(o=_())&&(a.indicatorTemplate=o.first),f(o=_())&&(a.captionTemplate=o.first),f(o=_())&&(a._closeIconTemplate=o.first),f(o=_())&&(a._previousThumbnailIconTemplate=o.first),f(o=_())&&(a._nextThumbnailIconTemplate=o.first),f(o=_())&&(a._itemPreviousIconTemplate=o.first),f(o=_())&&(a._itemNextIconTemplate=o.first),f(o=_())&&(a._itemTemplate=o.first),f(o=_())&&(a._thumbnailTemplate=o.first),f(o=_())&&(a.templates=o)}},viewQuery:function(i,a){if(i&1&&(B(at,5),B(nt,5)),i&2){let n;f(n=_())&&(a.mask=n.first),f(n=_())&&(a.container=n.first)}},inputs:{activeIndex:"activeIndex",fullScreen:[2,"fullScreen","fullScreen",g],id:"id",value:"value",numVisible:[2,"numVisible","numVisible",H],responsiveOptions:"responsiveOptions",showItemNavigators:[2,"showItemNavigators","showItemNavigators",g],showThumbnailNavigators:[2,"showThumbnailNavigators","showThumbnailNavigators",g],showItemNavigatorsOnHover:[2,"showItemNavigatorsOnHover","showItemNavigatorsOnHover",g],changeItemOnIndicatorHover:[2,"changeItemOnIndicatorHover","changeItemOnIndicatorHover",g],circular:[2,"circular","circular",g],autoPlay:[2,"autoPlay","autoPlay",g],shouldStopAutoplayByClick:[2,"shouldStopAutoplayByClick","shouldStopAutoplayByClick",g],transitionInterval:[2,"transitionInterval","transitionInterval",H],showThumbnails:[2,"showThumbnails","showThumbnails",g],thumbnailsPosition:"thumbnailsPosition",verticalThumbnailViewPortHeight:"verticalThumbnailViewPortHeight",showIndicators:[2,"showIndicators","showIndicators",g],showIndicatorsOnItem:[2,"showIndicatorsOnItem","showIndicatorsOnItem",g],indicatorsPosition:"indicatorsPosition",baseZIndex:[2,"baseZIndex","baseZIndex",H],maskClass:"maskClass",containerClass:"containerClass",containerStyle:"containerStyle",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",visible:"visible"},outputs:{activeIndexChange:"activeIndexChange",visibleChange:"visibleChange"},standalone:!1,features:[Te([je]),k,P],decls:3,vars:2,consts:[["windowed",""],["container",""],["mask",""],[4,"ngIf","ngIfElse"],[3,"ngClass","class",4,"ngIf"],[3,"ngClass"],[3,"value","activeIndex","numVisible","ngStyle","fullScreen","maskHide","activeItemChange",4,"ngIf"],[3,"maskHide","activeItemChange","value","activeIndex","numVisible","ngStyle","fullScreen"],[3,"activeItemChange","value","activeIndex","numVisible"]],template:function(i,a){if(i&1&&m(0,ut,3,1,"div",3)(1,dt,1,3,"ng-template",null,0,Fe),i&2){let n=ye(2);l("ngIf",a.fullScreen)("ngIfElse",n)}},dependencies:()=>[G,O,W,ri],encapsulation:2,data:{animation:[Re("animation",[ge("void => visible",[pe({transform:"scale(0.7)",opacity:0}),he("{{showTransitionParams}}")]),ge("visible => void",[he("{{hideTransitionParams}}",pe({transform:"scale(0.7)",opacity:0}))])])]},changeDetection:0})}return t})(),ri=(()=>{class t extends Q{galleria;cd;differs;elementRef;get activeIndex(){return this._activeIndex}set activeIndex(e){this._activeIndex=e}value=[];numVisible;fullScreen;maskHide=new T;activeItemChange=new T;closeButton;id;_activeIndex=0;slideShowActive=!0;interval;styleClass;differ;constructor(e,i,a,n){super(),this.galleria=e,this.cd=i,this.differs=a,this.elementRef=n,this.id=this.galleria.id||D("pn_id_"),this.differ=this.differs.find(this.galleria).create()}handleFullscreenChange(e){document?.fullscreenElement===this.elementRef.nativeElement?.children[0]?this.fullScreen=!0:this.fullScreen=!1}ngDoCheck(){if(V(this.galleria.platformId)){let e=this.differ.diff(this.galleria);e&&e.forEachItem.length>0&&this.cd.markForCheck()}}shouldRenderFooter(){return this.galleria.footerFacet&&this.galleria.templates.toArray().length>0||this.galleria.footerTemplate}galleriaClass(){let e=this.galleria.showThumbnails&&this.getPositionClass("p-galleria-thumbnails",this.galleria.thumbnailsPosition),i=this.galleria.showIndicators&&this.getPositionClass("p-galleria-indicators",this.galleria.indicatorsPosition);return(this.galleria.containerClass?this.galleria.containerClass+" ":"")+(e?e+" ":"")+(i?i+" ":"")}startSlideShow(){V(this.galleria.platformId)&&(this.interval=setInterval(()=>{let e=this.galleria.circular&&this.value.length-1===this.activeIndex?0:this.activeIndex+1;this.onActiveIndexChange(e),this.activeIndex=e},this.galleria.transitionInterval),this.slideShowActive=!0)}stopSlideShow(){this.galleria.autoPlay&&!this.galleria.shouldStopAutoplayByClick||(this.interval&&clearInterval(this.interval),this.slideShowActive=!1)}getPositionClass(e,i){let n=["top","left","bottom","right"].find(o=>o===i);return n?`${e}-${n}`:""}isVertical(){return this.galleria.thumbnailsPosition==="left"||this.galleria.thumbnailsPosition==="right"}onActiveIndexChange(e){this.activeIndex!==e&&(this.activeIndex=e,this.activeItemChange.emit(this.activeIndex))}closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}static \u0275fac=function(i){return new(i||t)(x(te),x(K),x(Ee),x(ae))};static \u0275cmp=S({type:t,selectors:[["p-galleriaContent"]],viewQuery:function(i,a){if(i&1&&B(mt,5),i&2){let n;f(n=_())&&(a.closeButton=n.first)}},hostBindings:function(i,a){i&1&&I("fullscreenchange",function(o){return a.handleFullscreenChange(o)},!1,Ie)},inputs:{activeIndex:"activeIndex",value:"value",numVisible:[2,"numVisible","numVisible",H],fullScreen:[2,"fullScreen","fullScreen",g]},outputs:{maskHide:"maskHide",activeItemChange:"activeItemChange"},standalone:!1,features:[k],decls:1,vars:1,consts:[["pFocusTrap","",3,"ngClass","ngStyle","class","pFocusTrapDisabled",4,"ngIf"],["pFocusTrap","",3,"ngClass","ngStyle","pFocusTrapDisabled"],["type","button","class","p-galleria-close-button",3,"click",4,"ngIf"],["class","p-galleria-header",4,"ngIf"],[1,"p-galleria-content"],[3,"onActiveIndexChange","startSlideShow","stopSlideShow","id","value","activeIndex","circular","templates","showIndicators","changeItemOnIndicatorHover","indicatorFacet","captionFacet","showItemNavigators","autoPlay","slideShowActive"],[3,"containerId","value","activeIndex","templates","numVisible","responsiveOptions","circular","isVertical","contentHeight","showThumbnailNavigators","slideShowActive","onActiveIndexChange","stopSlideShow",4,"ngIf"],["class","p-galleria-footer",4,"ngIf"],["type","button",1,"p-galleria-close-button",3,"click"],[3,"styleClass",4,"ngIf"],[4,"ngTemplateOutlet"],[3,"styleClass"],[1,"p-galleria-header"],["type","header",3,"templates"],[3,"onActiveIndexChange","stopSlideShow","containerId","value","activeIndex","templates","numVisible","responsiveOptions","circular","isVertical","contentHeight","showThumbnailNavigators","slideShowActive"],[1,"p-galleria-footer"],["type","footer",3,"templates"]],template:function(i,a){i&1&&m(0,Ct,7,29,"div",0),i&2&&l("ngIf",a.value&&a.value.length>0)},dependencies:()=>[G,O,R,W,me,Le,fe,oi,si],encapsulation:2,changeDetection:0})}return t})(),fe=(()=>{class t{templates;index;get item(){return this._item}shouldRender(){return this.contentTemplate||this.galleria._itemTemplate||this.galleria.itemTemplate||this.galleria.captionTemplate||this.galleria.captionTemplate||this.galleria.captionFacet||this.galleria.thumbnailTemplate||this.galleria._thumbnailTemplate||this.galleria.footerTemplate}galleria=N(te);set item(e){this._item=e,this.templates&&this.templates?.toArray().length>0?this.templates.forEach(i=>{if(i.getType()===this.type)switch(this.type){case"item":case"caption":case"thumbnail":this.context={$implicit:this.item},this.contentTemplate=i.template;break;case"footer":this.context={$implicit:this.item},this.contentTemplate=i.template;break}}):this.getContentTemplate()}getContentTemplate(){switch(this.type){case"item":this.context={$implicit:this.item},this.contentTemplate=this.galleria._itemTemplate||this.galleria.itemTemplate;break;case"caption":this.context={$implicit:this.item},this.contentTemplate=this.galleria.captionTemplate||this.galleria.captionFacet;break;case"thumbnail":this.context={$implicit:this.item},this.contentTemplate=this.galleria.thumbnailTemplate||this.galleria._thumbnailTemplate;break;case"indicator":this.context={$implicit:this.index},this.contentTemplate=this.galleria.indicatorTemplate||this.galleria.indicatorFacet;break;case"footer":this.context={$implicit:this.item},this.contentTemplate=this.galleria.footerTemplate||this.galleria.footerFacet;break;default:this.context={$implicit:this.item},this.contentTemplate=this.galleria._itemTemplate||this.galleria.itemTemplate}}type;contentTemplate;context;_item;ngAfterContentInit(){this.templates&&this.templates.toArray().length>0?this.templates?.forEach(e=>{if(e.getType()===this.type)switch(this.type){case"item":case"caption":case"thumbnail":this.context={$implicit:this.item},this.contentTemplate=e.template;break;case"indicator":this.context={$implicit:this.index},this.contentTemplate=e.template;break;case"footer":this.context={$implicit:this.item},this.contentTemplate=e.template;break;default:this.context={$implicit:this.item},this.contentTemplate=e.template;break}}):this.getContentTemplate()}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=S({type:t,selectors:[["p-galleriaItemSlot"]],inputs:{templates:"templates",index:[2,"index","index",H],item:"item",type:"type"},standalone:!1,decls:1,vars:1,consts:[[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(i,a){i&1&&m(0,yt,2,2,"ng-container",0),i&2&&l("ngIf",a.shouldRender())},dependencies:[O,R],encapsulation:2,changeDetection:0})}return t})(),oi=(()=>{class t{galleria;id;circular=!1;value;showItemNavigators=!1;showIndicators=!0;slideShowActive=!0;changeItemOnIndicatorHover=!0;autoPlay=!1;templates;indicatorFacet;captionFacet;startSlideShow=new T;stopSlideShow=new T;onActiveIndexChange=new T;get activeIndex(){return this._activeIndex}set activeIndex(e){this._activeIndex=e}get activeItem(){return this.value&&this.value[this._activeIndex]}_activeIndex=0;leftButtonFocused=!1;rightButtonFocused=!1;constructor(e){this.galleria=e}ngOnChanges({autoPlay:e}){e?.currentValue&&this.startSlideShow.emit(),e&&e.currentValue===!1&&this.stopTheSlideShow()}next(){let e=this.activeIndex+1,i=this.circular&&this.value.length-1===this.activeIndex?0:e;this.onActiveIndexChange.emit(i)}prev(){let e=this.activeIndex!==0?this.activeIndex-1:0,i=this.circular&&this.activeIndex===0?this.value.length-1:e;this.onActiveIndexChange.emit(i)}onButtonFocus(e){e==="left"?this.leftButtonFocused=!0:this.rightButtonFocused=!0}onButtonBlur(e){e==="left"?this.leftButtonFocused=!1:this.rightButtonFocused=!1}stopTheSlideShow(){this.slideShowActive&&this.stopSlideShow&&this.stopSlideShow.emit()}navForward(e){this.stopTheSlideShow(),this.next(),e&&e.cancelable&&e.preventDefault()}navBackward(e){this.stopTheSlideShow(),this.prev(),e&&e.cancelable&&e.preventDefault()}onIndicatorClick(e){this.stopTheSlideShow(),this.onActiveIndexChange.emit(e)}onIndicatorMouseEnter(e){this.changeItemOnIndicatorHover&&(this.stopTheSlideShow(),this.onActiveIndexChange.emit(e))}onIndicatorKeyDown(e,i){switch(e.code){case"Enter":case"Space":this.stopTheSlideShow(),this.onActiveIndexChange.emit(i),e.preventDefault();break;case"ArrowDown":case"ArrowUp":e.preventDefault();break;default:break}}isNavForwardDisabled(){return!this.circular&&this.activeIndex===this.value.length-1}isNavBackwardDisabled(){return!this.circular&&this.activeIndex===0}isIndicatorItemActive(e){return this.activeIndex===e}ariaSlideLabel(){return this.galleria.config.translation.aria?this.galleria.config.translation.aria.slide:void 0}ariaSlideNumber(e){return this.galleria.config.translation.aria?this.galleria.config.translation.aria.slideNumber.replace(/{slideNumber}/g,e):void 0}ariaPageLabel(e){return this.galleria.config.translation.aria?this.galleria.config.translation.aria.pageLabel.replace(/{page}/g,e):void 0}static \u0275fac=function(i){return new(i||t)(x(te))};static \u0275cmp=S({type:t,selectors:[["p-galleriaItem"]],hostAttrs:[1,"p-galleria-items-container"],inputs:{id:"id",circular:[2,"circular","circular",g],value:"value",showItemNavigators:[2,"showItemNavigators","showItemNavigators",g],showIndicators:[2,"showIndicators","showIndicators",g],slideShowActive:[2,"slideShowActive","slideShowActive",g],changeItemOnIndicatorHover:[2,"changeItemOnIndicatorHover","changeItemOnIndicatorHover",g],autoPlay:[2,"autoPlay","autoPlay",g],templates:"templates",indicatorFacet:"indicatorFacet",captionFacet:"captionFacet",activeIndex:"activeIndex"},outputs:{startSlideShow:"startSlideShow",stopSlideShow:"stopSlideShow",onActiveIndexChange:"onActiveIndexChange"},standalone:!1,features:[P],decls:7,vars:9,consts:[[1,"p-galleria-items"],["type","button","role","navigation",3,"ngClass","disabled","click","focus","blur",4,"ngIf"],["role","group",1,"p-galleria-item",3,"id"],["type","item",1,"p-galleria-item",3,"item","templates"],["class","p-galleria-caption",4,"ngIf"],["class","p-galleria-indicator-list",4,"ngIf"],["type","button","role","navigation",3,"click","focus","blur","ngClass","disabled"],[3,"styleClass",4,"ngIf"],[4,"ngTemplateOutlet"],[3,"styleClass"],[1,"p-galleria-caption"],["type","caption",3,"item","templates"],[1,"p-galleria-indicator-list"],["tabindex","0",3,"ngClass","click","mouseenter","keydown",4,"ngFor","ngForOf"],["tabindex","0",3,"click","mouseenter","keydown","ngClass"],["type","button","tabIndex","-1","class","p-galleria-indicator-button",4,"ngIf"],["type","indicator",3,"index","templates"],["type","button","tabIndex","-1",1,"p-galleria-indicator-button"]],template:function(i,a){i&1&&(h(0,"div",0),m(1,$t,3,6,"button",1),h(2,"div",2),b(3,"p-galleriaItemSlot",3),p(),m(4,At,3,6,"button",1)(5,Dt,2,2,"div",4),p(),m(6,Bt,2,1,"ul",5)),i&2&&(s(),l("ngIf",a.showItemNavigators),s(),l("id",a.id+"_item_"+a.activeIndex),v("aria-label",a.ariaSlideNumber(a.activeIndex+1))("aria-roledescription",a.ariaSlideLabel()),s(),l("item",a.activeItem)("templates",a.templates),s(),l("ngIf",a.showItemNavigators),s(),l("ngIf",a.captionFacet||a.galleria.captionTemplate),s(),l("ngIf",a.showIndicators))},dependencies:()=>[G,re,O,R,ee,J,fe],encapsulation:2,changeDetection:0})}return t})(),si=(()=>{class t{galleria;document;platformId;renderer;cd;containerId;value;isVertical=!1;slideShowActive=!1;circular=!1;responsiveOptions;contentHeight="300px";showThumbnailNavigators=!0;templates;onActiveIndexChange=new T;stopSlideShow=new T;itemsContainer;get numVisible(){return this._numVisible}set numVisible(e){this._numVisible=e,this._oldNumVisible=this.d_numVisible,this.d_numVisible=e}get activeIndex(){return this._activeIndex}set activeIndex(e){this._oldactiveIndex=this._activeIndex,this._activeIndex=e}index;startPos=null;thumbnailsStyle=null;sortedResponsiveOptions=null;totalShiftedItems=0;page=0;documentResizeListener;_numVisible=0;d_numVisible=0;_oldNumVisible=0;_activeIndex=0;_oldactiveIndex=0;constructor(e,i,a,n,o){this.galleria=e,this.document=i,this.platformId=a,this.renderer=n,this.cd=o}ngOnInit(){V(this.platformId)&&(this.createStyle(),this.responsiveOptions&&this.bindDocumentListeners())}ngAfterContentChecked(){let e=this.totalShiftedItems;(this._oldNumVisible!==this.d_numVisible||this._oldactiveIndex!==this._activeIndex)&&this.itemsContainer&&(this._activeIndex<=this.getMedianItemIndex()?e=0:this.value.length-this.d_numVisible+this.getMedianItemIndex()<this._activeIndex?e=this.d_numVisible-this.value.length:this.value.length-this.d_numVisible<this._activeIndex&&this.d_numVisible%2===0?e=this._activeIndex*-1+this.getMedianItemIndex()+1:e=this._activeIndex*-1+this.getMedianItemIndex(),e!==this.totalShiftedItems&&(this.totalShiftedItems=e),this.itemsContainer&&this.itemsContainer.nativeElement&&(this.itemsContainer.nativeElement.style.transform=this.isVertical?`translate3d(0, ${e*(100/this.d_numVisible)}%, 0)`:`translate3d(${e*(100/this.d_numVisible)}%, 0, 0)`),this._oldactiveIndex!==this._activeIndex&&(U(this.itemsContainer.nativeElement,"p-items-hidden"),this.itemsContainer.nativeElement.style.transition="transform 500ms ease 0s"),this._oldactiveIndex=this._activeIndex,this._oldNumVisible=this.d_numVisible)}ngAfterViewInit(){V(this.platformId)&&this.calculatePosition()}createStyle(){this.thumbnailsStyle||(this.thumbnailsStyle=this.document.createElement("style"),this.document.body.appendChild(this.thumbnailsStyle));let e=`
            #${this.containerId} .p-galleria-thumbnail-item {
                flex: 1 0 ${100/this.d_numVisible}%
            }
        `;if(this.responsiveOptions){this.sortedResponsiveOptions=[...this.responsiveOptions],this.sortedResponsiveOptions.sort((i,a)=>{let n=i.breakpoint,o=a.breakpoint,y=null;return n==null&&o!=null?y=-1:n!=null&&o==null?y=1:n==null&&o==null?y=0:typeof n=="string"&&typeof o=="string"?y=n.localeCompare(o,void 0,{numeric:!0}):y=n<o?-1:n>o?1:0,-1*y});for(let i=0;i<this.sortedResponsiveOptions.length;i++){let a=this.sortedResponsiveOptions[i];e+=`
                    @media screen and (max-width: ${a.breakpoint}) {
                        #${this.containerId} .p-galleria-thumbnail-item {
                            flex: 1 0 ${100/a.numVisible}%
                        }
                    }
                `}}this.thumbnailsStyle.innerHTML=e,Pe(this.thumbnailsStyle,"nonce",this.galleria.config?.csp()?.nonce)}calculatePosition(){if(V(this.platformId)&&this.itemsContainer&&this.sortedResponsiveOptions){let e=window.innerWidth,i={numVisible:this._numVisible};for(let a=0;a<this.sortedResponsiveOptions.length;a++){let n=this.sortedResponsiveOptions[a];parseInt(n.breakpoint,10)>=e&&(i=n)}this.d_numVisible!==i.numVisible&&(this.d_numVisible=i.numVisible,this.cd.markForCheck())}}getTabIndex(e){return this.isItemActive(e)?0:null}navForward(e){this.stopTheSlideShow();let i=this._activeIndex+1;i+this.totalShiftedItems>this.getMedianItemIndex()&&(-1*this.totalShiftedItems<this.getTotalPageNumber()-1||this.circular)&&this.step(-1);let a=this.circular&&this.value.length-1===this._activeIndex?0:i;this.onActiveIndexChange.emit(a),e.cancelable&&e.preventDefault()}navBackward(e){this.stopTheSlideShow();let i=this._activeIndex!==0?this._activeIndex-1:0,a=i+this.totalShiftedItems;this.d_numVisible-a-1>this.getMedianItemIndex()&&(-1*this.totalShiftedItems!==0||this.circular)&&this.step(1);let n=this.circular&&this._activeIndex===0?this.value.length-1:i;this.onActiveIndexChange.emit(n),e.cancelable&&e.preventDefault()}onItemClick(e){this.stopTheSlideShow();let i=e;if(i!==this._activeIndex){let a=i+this.totalShiftedItems,n=0;i<this._activeIndex?(n=this.d_numVisible-a-1-this.getMedianItemIndex(),n>0&&-1*this.totalShiftedItems!==0&&this.step(n)):(n=this.getMedianItemIndex()-a,n<0&&-1*this.totalShiftedItems<this.getTotalPageNumber()-1&&this.step(n)),this.activeIndex=i,this.onActiveIndexChange.emit(this.activeIndex)}}onThumbnailKeydown(e,i){switch((e.code==="Enter"||e.code==="Space")&&(this.onItemClick(i),e.preventDefault()),e.code){case"ArrowRight":this.onRightKey();break;case"ArrowLeft":this.onLeftKey();break;case"Home":this.onHomeKey(),e.preventDefault();break;case"End":this.onEndKey(),e.preventDefault();break;case"ArrowUp":case"ArrowDown":e.preventDefault();break;case"Tab":this.onTabKey();break;default:break}}onRightKey(){let e=A(this.itemsContainer.nativeElement,'[data-pc-section="thumbnailitem"]'),i=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(i,i+1===e.length?e.length-1:i+1)}onLeftKey(){let e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,e-1<=0?0:e-1)}onHomeKey(){let e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,0)}onEndKey(){let e=A(this.itemsContainer.nativeElement,'[data-pc-section="thumbnailitem"]'),i=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(i,e.length-1)}onTabKey(){let e=[...A(this.itemsContainer.nativeElement,'[data-pc-section="thumbnailitem"]')],i=e.findIndex(o=>Oe(o,"data-p-active")===!0),a=X(this.itemsContainer.nativeElement,'[tabindex="0"]'),n=e.findIndex(o=>o===a.parentElement);e[n].children[0].tabIndex="-1",e[i].children[0].tabIndex="0"}findFocusedIndicatorIndex(){let e=[...A(this.itemsContainer.nativeElement,'[data-pc-section="thumbnailitem"]')],i=X(this.itemsContainer.nativeElement,'[data-pc-section="thumbnailitem"] > [tabindex="0"]');return e.findIndex(a=>a===i.parentElement)}changedFocusedIndicator(e,i){let a=A(this.itemsContainer.nativeElement,'[data-pc-section="thumbnailitem"]');a[e].children[0].tabIndex="-1",a[i].children[0].tabIndex="0",a[i].children[0].focus()}step(e){let i=this.totalShiftedItems+e;e<0&&-1*i+this.d_numVisible>this.value.length-1?i=this.d_numVisible-this.value.length:e>0&&i>0&&(i=0),this.circular&&(e<0&&this.value.length-1===this._activeIndex?i=0:e>0&&this._activeIndex===0&&(i=this.d_numVisible-this.value.length)),this.itemsContainer&&(U(this.itemsContainer.nativeElement,"p-items-hidden"),this.itemsContainer.nativeElement.style.transform=this.isVertical?`translate3d(0, ${i*(100/this.d_numVisible)}%, 0)`:`translate3d(${i*(100/this.d_numVisible)}%, 0, 0)`,this.itemsContainer.nativeElement.style.transition="transform 500ms ease 0s"),this.totalShiftedItems=i}stopTheSlideShow(){this.slideShowActive&&this.stopSlideShow&&this.stopSlideShow.emit()}changePageOnTouch(e,i){i<0?this.navForward(e):this.navBackward(e)}getTotalPageNumber(){return this.value.length>this.d_numVisible?this.value.length-this.d_numVisible+1:0}getMedianItemIndex(){let e=Math.floor(this.d_numVisible/2);return this.d_numVisible%2?e:e-1}onTransitionEnd(){this.itemsContainer&&this.itemsContainer.nativeElement&&(se(this.itemsContainer.nativeElement,"p-items-hidden"),this.itemsContainer.nativeElement.style.transition="")}onTouchEnd(e){let i=e.changedTouches[0];this.isVertical?this.changePageOnTouch(e,i.pageY-this.startPos.y):this.changePageOnTouch(e,i.pageX-this.startPos.x)}onTouchMove(e){e.cancelable&&e.preventDefault()}onTouchStart(e){let i=e.changedTouches[0];this.startPos={x:i.pageX,y:i.pageY}}isNavBackwardDisabled(){return!this.circular&&this._activeIndex===0||this.value.length<=this.d_numVisible}isNavForwardDisabled(){return!this.circular&&this._activeIndex===this.value.length-1||this.value.length<=this.d_numVisible}firstItemAciveIndex(){return this.totalShiftedItems*-1}lastItemActiveIndex(){return this.firstItemAciveIndex()+this.d_numVisible-1}isItemActive(e){return this.firstItemAciveIndex()<=e&&this.lastItemActiveIndex()>=e}bindDocumentListeners(){if(V(this.platformId)){let e=this.document.defaultView||"window";this.documentResizeListener=this.renderer.listen(e,"resize",()=>{this.calculatePosition()})}}unbindDocumentListeners(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}ngOnDestroy(){this.responsiveOptions&&this.unbindDocumentListeners(),this.thumbnailsStyle&&this.thumbnailsStyle.parentNode?.removeChild(this.thumbnailsStyle)}ariaPrevButtonLabel(){return this.galleria.config.translation.aria?this.galleria.config.translation.aria.prevPageLabel:void 0}ariaNextButtonLabel(){return this.galleria.config.translation.aria?this.galleria.config.translation.aria.nextPageLabel:void 0}ariaPageLabel(e){return this.galleria.config.translation.aria?this.galleria.config.translation.aria.pageLabel.replace(/{page}/g,e):void 0}static \u0275fac=function(i){return new(i||t)(x(te),x(Z),x(M),x(xe),x(K))};static \u0275cmp=S({type:t,selectors:[["p-galleriaThumbnails"]],viewQuery:function(i,a){if(i&1&&B(Gt,5),i&2){let n;f(n=_())&&(a.itemsContainer=n.first)}},inputs:{containerId:"containerId",value:"value",isVertical:[2,"isVertical","isVertical",g],slideShowActive:[2,"slideShowActive","slideShowActive",g],circular:[2,"circular","circular",g],responsiveOptions:"responsiveOptions",contentHeight:"contentHeight",showThumbnailNavigators:"showThumbnailNavigators",templates:"templates",numVisible:"numVisible",activeIndex:"activeIndex"},outputs:{onActiveIndexChange:"onActiveIndexChange",stopSlideShow:"stopSlideShow"},standalone:!1,decls:8,vars:6,consts:[["itemsContainer",""],[1,"p-galleria-thumbnails"],[1,"p-galleria-thumbnails-content"],["type","button","pRipple","",3,"ngClass","disabled","click",4,"ngIf"],[1,"p-galleria-thumbnails-viewport",3,"ngStyle"],["role","tablist",1,"p-galleria-thumbnail-items",3,"transitionend","touchstart","touchmove"],[3,"ngClass","keydown",4,"ngFor","ngForOf"],["type","button","pRipple","",3,"click","ngClass","disabled"],[4,"ngIf"],[4,"ngTemplateOutlet"],[3,"styleClass",4,"ngIf"],[3,"styleClass"],[3,"keydown","ngClass"],[1,"p-galleria-thumbnail",3,"click","touchend","keydown.enter"],["type","thumbnail",3,"item","templates"],[3,"ngClass",4,"ngIf"],[3,"ngClass"]],template:function(i,a){if(i&1){let n=C();h(0,"div",1)(1,"div",2),m(2,Ut,3,7,"button",3),h(3,"div",4)(4,"div",5,0),I("transitionend",function(){return u(n),d(a.onTransitionEnd())})("touchstart",function(y){return u(n),d(a.onTouchStart(y))})("touchmove",function(y){return u(n),d(a.onTouchMove(y))}),m(6,Xt,3,15,"div",6),p()(),m(7,ai,3,7,"button",3),p()()}i&2&&(s(2),l("ngIf",a.showThumbnailNavigators),s(),l("ngStyle",E(4,Rt,a.isVertical?a.contentHeight:"")),s(3),l("ngForOf",a.value),s(),l("ngIf",a.showThumbnailNavigators))},dependencies:()=>[G,re,O,R,W,Ge,ee,de,ue,J,fe],encapsulation:2,changeDetection:0})}return t})(),Ki=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=ne({type:t});static \u0275inj=ie({imports:[oe,ce,me,ee,de,ue,J,Qe,ze,oe,ce]})}return t})();export{te as a,Ki as b};
