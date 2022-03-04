var Ht=Object.defineProperty,$t=Object.defineProperties;var Wt=Object.getOwnPropertyDescriptors;var at=Object.getOwnPropertySymbols;var Gt=Object.prototype.hasOwnProperty,Qt=Object.prototype.propertyIsEnumerable;var nt=(e,s,t)=>s in e?Ht(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,it=(e,s)=>{for(var t in s||(s={}))Gt.call(s,t)&&nt(e,t,s[t]);if(at)for(var t of at(s))Qt.call(s,t)&&nt(e,t,s[t]);return e},ot=(e,s)=>$t(e,Wt(s));import{j as g,B as Yt,A as Kt,a as U,T as Jt,M as ue,L as ne,d as Xt,R as A,r as Q,c as ve,i as be,b as Se,S as $,e as je,f as Me,D as Re,C as K,F as Pe,g as Le,h as Zt,k as es,l as ts,m as ss,n as rs,o as vt,p as as,q as ns,s as is,t as os,u as de,v as ls}from"./vendor.9d8d2b6c.js";const cs=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const f of l.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&n(f)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerpolicy&&(l.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?l.credentials="include":a.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}};cs();const us=()=>g(Yt,{sx:{flexGrow:1},children:g(Kt,{position:"static",children:U(Jt,{children:[g(ue,{component:ne,to:"/",children:g(Xt,{})}),g(ue,{component:ne,to:"/builder",children:"Serverless databases selector"}),g(ue,{component:ne,to:"/solutions",children:"Solutions catalog"}),g(ue,{component:ne,to:"/infrastructures",children:"Infrastructures"})]})})});var oe=e=>e.type==="checkbox",Z=e=>e instanceof Date,L=e=>e==null;const bt=e=>typeof e=="object";var V=e=>!L(e)&&!Array.isArray(e)&&bt(e)&&!Z(e),St=e=>V(e)&&e.target?oe(e.target)?e.target.checked:e.target.value:e,ds=e=>e.substring(0,e.search(/.\d/))||e,wt=(e,s)=>[...e].some(t=>ds(s)===t),we=e=>e.filter(Boolean),k=e=>e===void 0,h=(e,s,t)=>{if(!s||!V(e))return t;const n=we(s.split(/[,[\].]+?/)).reduce((a,l)=>L(a)?a:a[l],e);return k(n)||n===e?k(e[s])?t:e[s]:n};const ge={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},z={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},H={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};var Ne=(e,s)=>{const t=Object.assign({},e);return delete t[s],t};const fs=A.createContext(null),qe=()=>A.useContext(fs);var xt=(e,s,t,n=!0)=>{const a={};for(const l in e)Object.defineProperty(a,l,{get:()=>{const f=l;return s[f]!==z.all&&(s[f]=!n||z.all),t&&(t[f]=!0),e[f]}});return a},I=e=>V(e)&&!Object.keys(e).length,_t=(e,s,t)=>{const n=Ne(e,"name");return I(n)||Object.keys(n).length>=Object.keys(s).length||Object.keys(n).find(a=>s[a]===(!t||z.all))},fe=e=>Array.isArray(e)?e:[e],Dt=(e,s,t)=>t&&s?e===s:!e||!s||e===s||fe(e).some(n=>n&&(n.startsWith(s)||s.startsWith(n)));function He(e){const s=A.useRef(e);s.current=e,A.useEffect(()=>{const t=a=>{a&&a.unsubscribe()},n=!e.disabled&&s.current.subject.subscribe({next:s.current.callback});return()=>t(n)},[e.disabled])}function hs(e){const s=qe(),{control:t=s.control,disabled:n,name:a,exact:l}=e||{},[f,m]=A.useState(t._formState),w=A.useRef({isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1}),b=A.useRef(a),x=A.useRef(!0);b.current=a;const v=A.useCallback(d=>x.current&&Dt(b.current,d.name,l)&&_t(d,w.current)&&m(Object.assign(Object.assign({},t._formState),d)),[t,l]);return He({disabled:n,callback:v,subject:t._subjects.state}),A.useEffect(()=>()=>{x.current=!1},[]),xt(f,t._proxyFormState,w.current,!1)}var N=e=>typeof e=="string",At=(e,s,t,n)=>{const a=Array.isArray(e);return N(e)?(n&&s.watch.add(e),h(t,e)):a?e.map(l=>(n&&s.watch.add(l),h(t,l))):(n&&(s.watchAll=!0),t)},xe=e=>typeof e=="function",$e=e=>{for(const s in e)if(xe(e[s]))return!0;return!1};function gs(e){const s=qe(),{control:t=s.control,name:n,defaultValue:a,disabled:l,exact:f}=e||{},m=A.useRef(n);m.current=n;const w=A.useCallback(v=>{if(Dt(m.current,v.name,f)){const d=At(m.current,t._names,v.values||t._formValues);x(k(m.current)||V(d)&&!$e(d)?Object.assign({},d):Array.isArray(d)?[...d]:k(d)?a:d)}},[t,f,a]);He({disabled:l,subject:t._subjects.watch,callback:w});const[b,x]=A.useState(k(a)?t._getWatch(n):a);return A.useEffect(()=>{t._removeUnmounted()}),b}function ms(e){const s=qe(),{name:t,control:n=s.control,shouldUnregister:a}=e,l=wt(n._names.array,t),f=gs({control:n,name:t,defaultValue:h(n._formValues,t,h(n._defaultValues,t,e.defaultValue)),exact:!0}),m=hs({control:n,name:t}),w=A.useRef(n.register(t,Object.assign(Object.assign({},e.rules),{value:f})));return A.useEffect(()=>{const b=(x,v)=>{const d=h(n._fields,x);d&&(d._f.mount=v)};return b(t,!0),()=>{const x=n._options.shouldUnregister||a;(l?x&&!n._stateFlags.action:x)?n.unregister(t):b(t,!1)}},[t,n,l,a]),{field:{name:t,value:f,onChange:A.useCallback(b=>{w.current.onChange({target:{value:St(b),name:t},type:ge.CHANGE})},[t]),onBlur:A.useCallback(()=>{w.current.onBlur({target:{value:h(n._formValues,t),name:t},type:ge.BLUR})},[t,n]),ref:A.useCallback(b=>{const x=h(n._fields,t);b&&x&&b.focus&&(x._f.ref={focus:()=>b.focus(),setCustomValidity:v=>b.setCustomValidity(v),reportValidity:()=>b.reportValidity()})},[t,n._fields])},formState:m,fieldState:n.getFieldState(t,m)}}const ys=e=>e.render(ms(e));var ps=(e,s,t,n,a)=>s?Object.assign(Object.assign({},t[e]),{types:Object.assign(Object.assign({},t[e]&&t[e].types?t[e].types:{}),{[n]:a||!0})}):{},We=e=>/^\w*$/.test(e),Ot=e=>we(e.replace(/["|']|\]/g,"").split(/\.|\[/));function O(e,s,t){let n=-1;const a=We(s)?[s]:Ot(s),l=a.length,f=l-1;for(;++n<l;){const m=a[n];let w=t;if(n!==f){const b=e[m];w=V(b)||Array.isArray(b)?b:isNaN(+a[n+1])?{}:[]}e[m]=w,e=e[m]}return e}const Te=(e,s,t)=>{for(const n of t||Object.keys(e)){const a=h(e,n);if(a){const l=a._f,f=Ne(a,"_f");if(l&&s(l.name)){if(l.ref.focus&&k(l.ref.focus()))break;if(l.refs){l.refs[0].focus();break}}else V(f)&&Te(f,s)}}};var lt=(e,s,t)=>!t&&(s.watchAll||s.watch.has(e)||[...s.watch].some(n=>e.startsWith(n)&&/^\.\w+/.test(e.slice(n.length))));function X(e){let s;const t=Array.isArray(e);if(e instanceof Date)s=new Date(e);else if(e instanceof Set)s=new Set(e);else if(t||V(e)){s=t?[]:{};for(const n in e){if(xe(e[n])){s=e;break}s[n]=X(e[n])}}else return e;return s}function Ie(){let e=[];return{get observers(){return e},next:a=>{for(const l of e)l.next(a)},subscribe:a=>(e.push(a),{unsubscribe:()=>{e=e.filter(l=>l!==a)}}),unsubscribe:()=>{e=[]}}}var me=e=>L(e)||!bt(e);function ee(e,s){if(me(e)||me(s))return e===s;if(Z(e)&&Z(s))return e.getTime()===s.getTime();const t=Object.keys(e),n=Object.keys(s);if(t.length!==n.length)return!1;for(const a of t){const l=e[a];if(!n.includes(a))return!1;if(a!=="ref"){const f=s[a];if(Z(l)&&Z(f)||V(l)&&V(f)||Array.isArray(l)&&Array.isArray(f)?!ee(l,f):l!==f)return!1}}return!0}var ct=e=>({isOnSubmit:!e||e===z.onSubmit,isOnBlur:e===z.onBlur,isOnChange:e===z.onChange,isOnAll:e===z.all,isOnTouch:e===z.onTouched}),ie=e=>typeof e=="boolean",Ge=e=>e.type==="file",ze=e=>e instanceof HTMLElement,kt=e=>e.type==="select-multiple",Qe=e=>e.type==="radio",vs=e=>Qe(e)||oe(e),ut=typeof window!="undefined"&&typeof window.HTMLElement!="undefined"&&typeof document!="undefined",Ue=e=>ze(e)&&e.isConnected;function bs(e,s){const t=s.slice(0,-1).length;let n=0;for(;n<t;)e=k(e)?n++:e[s[n++]];return e}function j(e,s){const t=We(s)?[s]:Ot(s),n=t.length==1?e:bs(e,t),a=t[t.length-1];let l;n&&delete n[a];for(let f=0;f<t.slice(0,-1).length;f++){let m=-1,w;const b=t.slice(0,-(f+1)),x=b.length-1;for(f>0&&(l=e);++m<b.length;){const v=b[m];w=w?w[v]:e[v],x===m&&(V(w)&&I(w)||Array.isArray(w)&&!w.filter(d=>V(d)&&!I(d)||ie(d)).length)&&(l?delete l[v]:delete e[v]),l=w}}return e}function ye(e,s={}){const t=Array.isArray(e);if(V(e)||t)for(const n in e)Array.isArray(e[n])||V(e[n])&&!$e(e[n])?(s[n]=Array.isArray(e[n])?[]:{},ye(e[n],s[n])):L(e[n])||(s[n]=!0);return s}function Ft(e,s,t){const n=Array.isArray(e);if(V(e)||n)for(const a in e)Array.isArray(e[a])||V(e[a])&&!$e(e[a])?k(s)||me(t[a])?t[a]=Array.isArray(e[a])?ye(e[a],[]):Object.assign({},ye(e[a])):Ft(e[a],L(s)?{}:s[a],t[a]):t[a]=!ee(e[a],s[a]);return t}var dt=(e,s)=>Ft(e,s,ye(s));const ft={value:!1,isValid:!1},ht={value:!0,isValid:!0};var Ct=e=>{if(Array.isArray(e)){if(e.length>1){const s=e.filter(t=>t&&t.checked&&!t.disabled).map(t=>t.value);return{value:s,isValid:!!s.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!k(e[0].attributes.value)?k(e[0].value)||e[0].value===""?ht:{value:e[0].value,isValid:!0}:ht:ft}return ft},Vt=(e,{valueAsNumber:s,valueAsDate:t,setValueAs:n})=>k(e)?e:s?e===""?NaN:+e:t&&N(e)?new Date(e):n?n(e):e;const gt={isValid:!1,value:null};var jt=e=>Array.isArray(e)?e.reduce((s,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:s,gt):gt;function Ee(e){const s=e.ref;if(!(e.refs?e.refs.every(t=>t.disabled):s.disabled))return Ge(s)?s.files:Qe(s)?jt(e.refs).value:kt(s)?[...s.selectedOptions].map(({value:t})=>t):oe(s)?Ct(e.refs).value:Vt(k(s.value)?e.ref.value:s.value,e)}var Ss=(e,s,t,n)=>{const a={};for(const l of e){const f=h(s,l);f&&O(a,l,f._f)}return{criteriaMode:t,names:[...e],fields:a,shouldUseNativeValidation:n}},pe=e=>e instanceof RegExp,ae=e=>k(e)?void 0:pe(e)?e.source:V(e)?pe(e.value)?e.value.source:e.value:e,ws=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function mt(e,s,t){const n=h(e,t);if(n||We(t))return{error:n,name:t};const a=t.split(".");for(;a.length;){const l=a.join("."),f=h(s,l),m=h(e,l);if(f&&!Array.isArray(f)&&t!==l)return{name:t};if(m&&m.type)return{name:l,error:m};a.pop()}return{name:t}}var xs=(e,s,t,n,a)=>a.isOnAll?!1:!t&&a.isOnTouch?!(s||e):(t?n.isOnBlur:a.isOnBlur)?!e:(t?n.isOnChange:a.isOnChange)?e:!0,_s=(e,s)=>!we(h(e,s)).length&&j(e,s),he=e=>N(e)||A.isValidElement(e);function yt(e,s,t="validate"){if(he(e)||Array.isArray(e)&&e.every(he)||ie(e)&&!e)return{type:t,message:he(e)?e:"",ref:s}}var J=e=>V(e)&&!pe(e)?e:{value:e,message:""},pt=async(e,s,t,n)=>{const{ref:a,refs:l,required:f,maxLength:m,minLength:w,min:b,max:x,pattern:v,validate:d,name:T,valueAsNumber:_e,mount:le,disabled:De}=e._f;if(!le||De)return{};const M=l?l[0]:a,q=_=>{n&&M.reportValidity&&(M.setCustomValidity(ie(_)?"":_||" "),M.reportValidity())},C={},te=Qe(a),se=oe(a),Ae=te||se,P=(_e||Ge(a))&&!a.value||s===""||Array.isArray(s)&&!s.length,Y=ps.bind(null,T,t,C),W=(_,S,F,E=H.maxLength,B=H.minLength)=>{const re=_?S:F;C[T]=Object.assign({type:_?E:B,message:re,ref:a},Y(_?E:B,re))};if(f&&(!Ae&&(P||L(s))||ie(s)&&!s||se&&!Ct(l).isValid||te&&!jt(l).isValid)){const{value:_,message:S}=he(f)?{value:!!f,message:f}:J(f);if(_&&(C[T]=Object.assign({type:H.required,message:S,ref:M},Y(H.required,S)),!t))return q(S),C}if(!P&&(!L(b)||!L(x))){let _,S;const F=J(x),E=J(b);if(isNaN(s)){const B=a.valueAsDate||new Date(s);N(F.value)&&(_=B>new Date(F.value)),N(E.value)&&(S=B<new Date(E.value))}else{const B=a.valueAsNumber||+s;L(F.value)||(_=B>F.value),L(E.value)||(S=B<E.value)}if((_||S)&&(W(!!_,F.message,E.message,H.max,H.min),!t))return q(C[T].message),C}if((m||w)&&!P&&N(s)){const _=J(m),S=J(w),F=!L(_.value)&&s.length>_.value,E=!L(S.value)&&s.length<S.value;if((F||E)&&(W(F,_.message,S.message),!t))return q(C[T].message),C}if(v&&!P&&N(s)){const{value:_,message:S}=J(v);if(pe(_)&&!s.match(_)&&(C[T]=Object.assign({type:H.pattern,message:S,ref:a},Y(H.pattern,S)),!t))return q(S),C}if(d){if(xe(d)){const _=await d(s),S=yt(_,M);if(S&&(C[T]=Object.assign(Object.assign({},S),Y(H.validate,S.message)),!t))return q(S.message),C}else if(V(d)){let _={};for(const S in d){if(!I(_)&&!t)break;const F=yt(await d[S](s),M,S);F&&(_=Object.assign(Object.assign({},F),Y(S,F.message)),q(F.message),t&&(C[T]=_))}if(!I(_)&&(C[T]=Object.assign({ref:M},_),!t))return C}}return q(!0),C};const Ds={mode:z.onSubmit,reValidateMode:z.onChange,shouldFocusError:!0};function As(e={}){let s=Object.assign(Object.assign({},Ds),e),t={isDirty:!1,isValidating:!1,dirtyFields:{},isSubmitted:!1,submitCount:0,touchedFields:{},isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,errors:{}},n={},a=s.defaultValues||{},l=s.shouldUnregister?{}:X(a),f={action:!1,mount:!1,watch:!1},m={mount:new Set,unMount:new Set,array:new Set,watch:new Set},w,b=0,x={};const v={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},d={watch:Ie(),array:Ie(),state:Ie()},T=ct(s.mode),_e=ct(s.reValidateMode),le=s.criteriaMode===z.all,De=(r,i)=>(...o)=>{clearTimeout(b),b=window.setTimeout(()=>r(...o),i)},M=async r=>{let i=!1;return v.isValid&&(i=s.resolver?I((await P()).errors):await W(n,!0),!r&&i!==t.isValid&&(t.isValid=i,d.state.next({isValid:i}))),i},q=(r,i=[],o,u,y=!0,c=!0)=>{if(u&&o){if(f.action=!0,c&&Array.isArray(h(n,r))){const p=o(h(n,r),u.argA,u.argB);y&&O(n,r,p)}if(v.errors&&c&&Array.isArray(h(t.errors,r))){const p=o(h(t.errors,r),u.argA,u.argB);y&&O(t.errors,r,p),_s(t.errors,r)}if(v.touchedFields&&Array.isArray(h(t.touchedFields,r))){const p=o(h(t.touchedFields,r),u.argA,u.argB);y&&O(t.touchedFields,r,p)}v.dirtyFields&&(t.dirtyFields=dt(a,l)),d.state.next({isDirty:S(r,i),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else O(l,r,i)},C=(r,i)=>(O(t.errors,r,i),d.state.next({errors:t.errors})),te=(r,i,o,u)=>{const y=h(n,r);if(y){const c=h(l,r,k(o)?h(a,r):o);k(c)||u&&u.defaultChecked||i?O(l,r,i?c:Ee(y._f)):B(r,c),f.mount&&M()}},se=(r,i,o,u,y)=>{let c=!1;const p={name:r},D=h(t.touchedFields,r);if(v.isDirty){const G=t.isDirty;t.isDirty=p.isDirty=S(),c=G!==p.isDirty}if(v.dirtyFields&&(!o||u)){const G=h(t.dirtyFields,r);ee(h(a,r),i)?j(t.dirtyFields,r):O(t.dirtyFields,r,!0),p.dirtyFields=t.dirtyFields,c=c||G!==h(t.dirtyFields,r)}return o&&!D&&(O(t.touchedFields,r,o),p.touchedFields=t.touchedFields,c=c||v.touchedFields&&D!==o),c&&y&&d.state.next(p),c?p:{}},Ae=async(r,i,o,u,y)=>{const c=h(t.errors,i),p=v.isValid&&t.isValid!==o;if(e.delayError&&u?(w=w||De(C,e.delayError),w(i,u)):(clearTimeout(b),u?O(t.errors,i,u):j(t.errors,i)),((u?!ee(c,u):c)||!I(y)||p)&&!r){const D=Object.assign(Object.assign(Object.assign({},y),p?{isValid:o}:{}),{errors:t.errors,name:i});t=Object.assign(Object.assign({},t),D),d.state.next(D)}x[i]--,v.isValidating&&!Object.values(x).some(D=>D)&&(d.state.next({isValidating:!1}),x={})},P=async r=>s.resolver?await s.resolver(Object.assign({},l),s.context,Ss(r||m.mount,n,s.criteriaMode,s.shouldUseNativeValidation)):{},Y=async r=>{const{errors:i}=await P();if(r)for(const o of r){const u=h(i,o);u?O(t.errors,o,u):j(t.errors,o)}else t.errors=i;return i},W=async(r,i,o={valid:!0})=>{for(const u in r){const y=r[u];if(y){const c=y._f,p=Ne(y,"_f");if(c){const D=await pt(y,h(l,c.name),le,s.shouldUseNativeValidation);if(D[c.name]&&(o.valid=!1,i))break;i||(D[c.name]?O(t.errors,c.name,D[c.name]):j(t.errors,c.name))}p&&await W(p,i,o)}}return o.valid},_=()=>{for(const r of m.unMount){const i=h(n,r);i&&(i._f.refs?i._f.refs.every(o=>!Ue(o)):!Ue(i._f.ref))&&Fe(r)}m.unMount=new Set},S=(r,i)=>(r&&i&&O(l,r,i),!ee(et(),a)),F=(r,i,o)=>{const u=Object.assign({},f.mount?l:k(i)?a:N(r)?{[r]:i}:i);return At(r,m,u,o)},E=r=>we(h(f.mount?l:a,r,e.shouldUnregister?h(a,r,[]):[])),B=(r,i,o={})=>{const u=h(n,r);let y=i;if(u){const c=u._f;c&&(!c.disabled&&O(l,r,Vt(i,c)),y=ut&&ze(c.ref)&&L(i)?"":i,kt(c.ref)?[...c.ref.options].forEach(p=>p.selected=y.includes(p.value)):c.refs?oe(c.ref)?c.refs.length>1?c.refs.forEach(p=>p.checked=Array.isArray(y)?!!y.find(D=>D===p.value):y===p.value):c.refs[0]&&(c.refs[0].checked=!!y):c.refs.forEach(p=>p.checked=p.value===y):Ge(c.ref)?c.ref.value="":(c.ref.value=y,c.ref.type||d.watch.next({name:r})))}(o.shouldDirty||o.shouldTouch)&&se(r,y,o.shouldTouch,o.shouldDirty,!0),o.shouldValidate&&ke(r)},re=(r,i,o)=>{for(const u in i){const y=i[u],c=`${r}.${u}`,p=h(n,c);(m.array.has(r)||!me(y)||p&&!p._f)&&!Z(y)?re(c,y,o):B(c,y,o)}},Oe=(r,i,o={})=>{const u=h(n,r),y=m.array.has(r),c=X(i);O(l,r,c),y?(d.array.next({name:r,values:l}),(v.isDirty||v.dirtyFields)&&o.shouldDirty&&(t.dirtyFields=dt(a,l),d.state.next({name:r,dirtyFields:t.dirtyFields,isDirty:S(r,c)}))):u&&!u._f&&!L(c)?re(r,c,o):B(r,c,o),lt(r,m)&&d.state.next({}),d.watch.next({name:r})},Ze=async r=>{const i=r.target;let o=i.name;const u=h(n,o);if(u){let y,c;const p=i.type?Ee(u._f):St(r),D=r.type===ge.BLUR||r.type===ge.FOCUS_OUT,G=!ws(u._f)&&!s.resolver&&!h(t.errors,o)&&!u._f.deps||xs(D,h(t.touchedFields,o),t.isSubmitted,_e,T),ce=lt(o,m,D);O(l,o,p),D?u._f.onBlur&&u._f.onBlur(r):u._f.onChange&&u._f.onChange(r);const Ve=se(o,p,D,!1),Nt=!I(Ve)||ce;if(!D&&d.watch.next({name:o,type:r.type}),G)return Nt&&d.state.next(Object.assign({name:o},ce?{}:Ve));if(!D&&ce&&d.state.next({}),x[o]=(x[o],1),d.state.next({isValidating:!0}),s.resolver){const{errors:st}=await P([o]),qt=mt(t.errors,n,o),rt=mt(st,n,qt.name||o);y=rt.error,o=rt.name,c=I(st)}else y=(await pt(u,h(l,o),le,s.shouldUseNativeValidation))[o],c=await M(!0);u._f.deps&&ke(u._f.deps),Ae(!1,o,c,y,Ve)}},ke=async(r,i={})=>{let o,u;const y=fe(r);if(d.state.next({isValidating:!0}),s.resolver){const c=await Y(k(r)?r:y);o=I(c),u=r?!y.some(p=>h(c,p)):o}else r?(u=(await Promise.all(y.map(async c=>{const p=h(n,c);return await W(p&&p._f?{[c]:p}:p)}))).every(Boolean),!(!u&&!t.isValid)&&M()):u=o=await W(n);return d.state.next(Object.assign(Object.assign(Object.assign({},!N(r)||v.isValid&&o!==t.isValid?{}:{name:r}),s.resolver?{isValid:o}:{}),{errors:t.errors,isValidating:!1})),i.shouldFocus&&!u&&Te(n,c=>h(t.errors,c),r?y:m.mount),u},et=r=>{const i=Object.assign(Object.assign({},a),f.mount?l:{});return k(r)?i:N(r)?h(i,r):r.map(o=>h(i,o))},tt=(r,i)=>({invalid:!!h((i||t).errors,r),isDirty:!!h((i||t).dirtyFields,r),isTouched:!!h((i||t).touchedFields,r),error:h((i||t).errors,r)}),Tt=r=>{r?fe(r).forEach(i=>j(t.errors,i)):t.errors={},d.state.next({errors:t.errors})},zt=(r,i,o)=>{const u=(h(n,r,{_f:{}})._f||{}).ref;O(t.errors,r,Object.assign(Object.assign({},i),{ref:u})),d.state.next({name:r,errors:t.errors,isValid:!1}),o&&o.shouldFocus&&u&&u.focus&&u.focus()},Pt=(r,i)=>xe(r)?d.watch.subscribe({next:o=>r(F(void 0,i),o)}):F(r,i,!0),Fe=(r,i={})=>{for(const o of r?fe(r):m.mount)m.mount.delete(o),m.array.delete(o),h(n,o)&&(i.keepValue||(j(n,o),j(l,o)),!i.keepError&&j(t.errors,o),!i.keepDirty&&j(t.dirtyFields,o),!i.keepTouched&&j(t.touchedFields,o),!s.shouldUnregister&&!i.keepDefaultValue&&j(a,o));d.watch.next({}),d.state.next(Object.assign(Object.assign({},t),i.keepDirty?{isDirty:S()}:{})),!i.keepIsValid&&M()},Ce=(r,i={})=>{let o=h(n,r);const u=ie(i.disabled);return O(n,r,{_f:Object.assign(Object.assign(Object.assign({},o&&o._f?o._f:{ref:{name:r}}),{name:r,mount:!0}),i)}),m.mount.add(r),o?u&&O(l,r,i.disabled?void 0:h(l,r,Ee(o._f))):te(r,!0,i.value),Object.assign(Object.assign(Object.assign({},u?{disabled:i.disabled}:{}),s.shouldUseNativeValidation?{required:!!i.required,min:ae(i.min),max:ae(i.max),minLength:ae(i.minLength),maxLength:ae(i.maxLength),pattern:ae(i.pattern)}:{}),{name:r,onChange:Ze,onBlur:Ze,ref:y=>{if(y){Ce(r,i),o=h(n,r);const c=k(y.value)&&y.querySelectorAll&&y.querySelectorAll("input,select,textarea")[0]||y,p=vs(c),D=o._f.refs||[];if(p?D.find(G=>G===c):c===o._f.ref)return;O(n,r,{_f:Object.assign(Object.assign({},o._f),p?{refs:D.concat(c).filter(Ue),ref:{type:c.type,name:r}}:{ref:c})}),te(r,!1,void 0,c)}else o=h(n,r,{}),o._f&&(o._f.mount=!1),(s.shouldUnregister||i.shouldUnregister)&&!(wt(m.array,r)&&f.action)&&m.unMount.add(r)}})};return{control:{register:Ce,unregister:Fe,getFieldState:tt,_executeSchema:P,_getWatch:F,_getDirty:S,_updateValid:M,_removeUnmounted:_,_updateFieldArray:q,_getFieldArray:E,_subjects:d,_proxyFormState:v,get _fields(){return n},get _formValues(){return l},get _stateFlags(){return f},set _stateFlags(r){f=r},get _defaultValues(){return a},get _names(){return m},set _names(r){m=r},get _formState(){return t},set _formState(r){t=r},get _options(){return s},set _options(r){s=Object.assign(Object.assign({},s),r)}},trigger:ke,register:Ce,handleSubmit:(r,i)=>async o=>{o&&(o.preventDefault&&o.preventDefault(),o.persist&&o.persist());let u=!0,y=X(l);d.state.next({isSubmitting:!0});try{if(s.resolver){const{errors:c,values:p}=await P();t.errors=c,y=p}else await W(n);I(t.errors)&&Object.keys(t.errors).every(c=>h(y,c))?(d.state.next({errors:{},isSubmitting:!0}),await r(y,o)):(i&&await i(Object.assign({},t.errors),o),s.shouldFocusError&&Te(n,c=>h(t.errors,c),m.mount))}catch(c){throw u=!1,c}finally{t.isSubmitted=!0,d.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:I(t.errors)&&u,submitCount:t.submitCount+1,errors:t.errors})}},watch:Pt,setValue:Oe,getValues:et,reset:(r,i={})=>{const o=r||a,u=X(o),y=r&&!I(r)?u:a;if(i.keepDefaultValues||(a=o),!i.keepValues){if(ut&&k(r))for(const c of m.mount){const p=h(n,c);if(p&&p._f){const D=Array.isArray(p._f.refs)?p._f.refs[0]:p._f.ref;try{ze(D)&&D.closest("form").reset();break}catch{}}}l=e.shouldUnregister?i.keepDefaultValues?X(a):{}:u,n={},d.array.next({values:y}),d.watch.next({values:y})}m={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},f.mount=!v.isValid||!!i.keepIsValid,f.watch=!!e.shouldUnregister,d.state.next({submitCount:i.keepSubmitCount?t.submitCount:0,isDirty:i.keepDirty?t.isDirty:i.keepDefaultValues?!ee(r,a):!1,isSubmitted:i.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:i.keepDirty?t.dirtyFields:i.keepDefaultValues&&r?Object.entries(r).reduce((c,[p,D])=>Object.assign(Object.assign({},c),{[p]:D!==h(a,p)}),{}):{},touchedFields:i.keepTouched?t.touchedFields:{},errors:i.keepErrors?t.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},resetField:(r,i={})=>{h(n,r)&&(k(i.defaultValue)?Oe(r,h(a,r)):(Oe(r,i.defaultValue),O(a,r,i.defaultValue)),i.keepTouched||j(t.touchedFields,r),i.keepDirty||(j(t.dirtyFields,r),t.isDirty=i.defaultValue?S(r,h(a,r)):S()),i.keepError||(j(t.errors,r),v.isValid&&M()),d.state.next(Object.assign({},t)))},clearErrors:Tt,unregister:Fe,setError:zt,setFocus:(r,i={})=>{const o=h(n,r)._f,u=o.refs?o.refs[0]:o.ref;i.shouldSelect?u.select():u.focus()},getFieldState:tt}}function Os(e={}){const s=A.useRef(),[t,n]=A.useState({isDirty:!1,isValidating:!1,dirtyFields:{},isSubmitted:!1,submitCount:0,touchedFields:{},isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,errors:{}});s.current?s.current.control._options=e:s.current=Object.assign(Object.assign({},As(e)),{formState:t});const a=s.current.control,l=A.useCallback(f=>{_t(f,a._proxyFormState,!0)&&(a._formState=Object.assign(Object.assign({},a._formState),f),n(Object.assign({},a._formState)))},[a]);return He({subject:a._subjects.state,callback:l}),A.useEffect(()=>{a._stateFlags.mount||(a._proxyFormState.isValid&&a._updateValid(),a._stateFlags.mount=!0),a._stateFlags.watch&&(a._stateFlags.watch=!1,a._subjects.state.next({})),a._removeUnmounted()}),s.current.formState=xt(t,a._proxyFormState),s.current}function ks(){const e=Q.exports.useRef(!1),s=Q.exports.useCallback(()=>e.current,[]);return Q.exports.useEffect(()=>(e.current=!0,()=>{e.current=!1}),[]),s}const Fs=e=>!e;function Cs(){const[,e]=Vs(!1);return Q.exports.useCallback(()=>{e(Fs)},[])}function Vs(e){const[s,t]=Q.exports.useState(e),n=ks();return[s,Q.exports.useCallback(a=>{n()&&t(a)},[])]}const Be=Set.prototype;function js(e){const s=Q.exports.useRef(),t=Cs();if(!s.current){const n=new Set(e);s.current=n,n.add=(...a)=>(Be.add.apply(n,a),t(),n),n.clear=(...a)=>{Be.clear.apply(n,a),t()},n.delete=(...a)=>{const l=Be.delete.apply(n,a);return t(),l}}return s.current}var Ye={},Ms=be.exports;Object.defineProperty(Ye,"__esModule",{value:!0});var Mt=Ye.default=void 0,Rs=Ms(ve),Ls=Se,Is=(0,Rs.default)((0,Ls.jsx)("path",{d:"M15 18.5c-2.51 0-4.68-1.42-5.76-3.5H15l1-2H8.58c-.05-.33-.08-.66-.08-1s.03-.67.08-1H15l1-2H9.24C10.32 6.92 12.5 5.5 15 5.5c1.61 0 3.09.59 4.23 1.57L21 5.3C19.41 3.87 17.3 3 15 3c-3.92 0-7.24 2.51-8.48 6H3l-1 2h4.06c-.04.33-.06.66-.06 1s.02.67.06 1H3l-1 2h4.52c1.24 3.49 4.56 6 8.48 6 2.31 0 4.41-.87 6-2.3l-1.78-1.77c-1.13.98-2.6 1.57-4.22 1.57z"}),"Euro");Mt=Ye.default=Is;var Ke={},Us=be.exports;Object.defineProperty(Ke,"__esModule",{value:!0});var Rt=Ke.default=void 0,Es=Us(ve),Bs=Se,Ts=(0,Es.default)((0,Bs.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"}),"Language");Rt=Ke.default=Ts;var Je={},zs=be.exports;Object.defineProperty(Je,"__esModule",{value:!0});var Lt=Je.default=void 0,Ps=zs(ve),Ns=Se,qs=(0,Ps.default)((0,Ns.jsx)("path",{d:"M2 20h20v-4H2v4zm2-3h2v2H4v-2zM2 4v4h20V4H2zm4 3H4V5h2v2zm-4 7h20v-4H2v4zm2-3h2v2H4v-2z"}),"Storage");Lt=Je.default=qs;var Xe={},Hs=be.exports;Object.defineProperty(Xe,"__esModule",{value:!0});var It=Xe.default=void 0,$s=Hs(ve),Ws=Se,Gs=(0,$s.default)((0,Ws.jsx)("path",{d:"M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"}),"Event");It=Xe.default=Gs;var R=(e=>(e.SelfHosted="SelfHosted",e.Managed="Managed",e.Serverless="Serverless",e))(R||{}),Qs="/serverless-databases/assets/dynamodb.91853182.svg",Ys="/serverless-databases/assets/databaseMigrationService.2ceccd48.svg",Ks="/serverless-databases/assets/glue.79950dde.svg",Js="/serverless-databases/assets/auroraServerless.dfb833b4.svg",Xs="/serverless-databases/assets/qldb.fc98b6f5.svg",Zs="/serverless-databases/assets/timestream.f5594fcf.svg",er="/serverless-databases/assets/neptune.ae97bf75.svg",tr="/serverless-databases/assets/athenaS3.3c4fa860.svg",sr="/serverless-databases/assets/s3.2bfe0813.svg",rr="/serverless-databases/assets/redshift.a0c61ae2.svg";const ar={DynamoDB:{name:"DynamoDB",src:Qs,releaseDate:"2012",tags:[],pricing:"Cheap",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",documentationUrl:"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/index.html",awesomeUrl:"https://github.com/alexdebrie/awesome-dynamodb",implementationUrl:"https://github.com/serverless/examples/tree/v3/aws-node-express-dynamodb-api",infrastructure:R.Serverless,dataMigrationServices:["Database Migration Service","Glue"]},AuroraServerless:{name:"Aurora Serverless",src:Js,releaseDate:"2018",tags:[],pricing:"Cheap",description:"Amazon Aurora Serverless is an on-demand, auto-scaling configuration for Amazon Aurora. It automatically starts up, shuts down, and scales capacity up or down based on your application's needs. It enables you to run your database in the cloud without managing any database capacity.",documentationUrl:"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html",implementationUrl:"https://github.com/serverless/examples/tree/v3/aws-node-express-dynamodb-api",infrastructure:R.Serverless,dataMigrationServices:["Glue"]},QLDB:{name:"Quantum Ledger Database",src:Xs,releaseDate:"2019",tags:[],pricing:"Cheap",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",documentationUrl:"https://docs.aws.amazon.com/qldb/latest/developerguide/index.html",awesomeUrl:"https://github.com/mlewis7127/awesome-qldb",implementationUrl:"https://www.google.com",dataMigrationServices:[]},Timestream:{name:"Timestream",src:Zs,releaseDate:"2020",tags:[],pricing:"Cheap",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",documentationUrl:"https://docs.aws.amazon.com/timestream/latest/developerguide/index.html",awesomeUrl:"https://github.com/awslabs/amazon-timestream-tools",implementationUrl:"https://www.google.com",infrastructure:R.Serverless,dataMigrationServices:[]},Neptune:{name:"Neptune",src:er,releaseDate:"2018",tags:["VPC needed"],pricing:"Cheap",description:"Graph-oriented AWS managed database. Its query processing engine is optimized for leading graph query languages, Apache TinkerPop\u2122 Gremlin and the W3C\u2019s RDF SPARQL.",documentationUrl:"https://docs.aws.amazon.com/neptune/latest/userguide/intro.html",implementationUrl:"https://github.com/dabit3/cdk-appsync-neptune",infrastructure:R.Managed,dataMigrationServices:[]},AthenaS3:{name:"Athena with S3",src:tr,releaseDate:"2016",tags:["Pay per use"],pricing:"Cheap",description:"Amazon Athena is an interactive query service that makes it easy to analyze data directly in Amazon Simple Storage Service (Amazon S3) using standard SQL.",documentationUrl:"https://docs.aws.amazon.com/athena/latest/ug/what-is.html",implementationUrl:"https://github.com/theodo/serverless-databases/tree/main/athena",infrastructure:R.Serverless,dataMigrationServices:[]},S3Select:{name:"S3 Select",src:sr,releaseDate:"2018",tags:["Pay per use"],pricing:"Cheap",description:"S3 Select enables applications to retrieve only a subset of data from an object by using simple SQL expressions.",documentationUrl:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/selecting-content-from-objects.html",implementationUrl:"https://aws.amazon.com/fr/blogs/developer/introducing-support-for-amazon-s3-select-in-the-aws-sdk-for-javascript/",dataMigrationServices:["Glue"]},RDS:{name:"RDS",src:"",releaseDate:"",tags:[],pricing:"Expensive",description:"RDS description",documentationUrl:"https://docs.aws.amazon.com/rds/index.html",implementationUrl:"",infrastructure:R.Managed,dataMigrationServices:["Database Migration Service","Glue"]},DocumentDB:{name:"DocumentDB",src:"",releaseDate:"",tags:[],pricing:"Expensive",description:"DocumentDB (with MongoDB compatibility)",documentationUrl:"https://docs.aws.amazon.com/managedservices/latest/userguide/document-db.html",implementationUrl:"",infrastructure:R.Managed,dataMigrationServices:["Database Migration Service"]},OpenSearch:{name:"OpenSearch (ex-ElasticSearch)",src:"",releaseDate:"",tags:[],pricing:"Expensive",description:"OpenSearch (ex-ElasticSearch)",documentationUrl:"https://docs.aws.amazon.com/opensearch-service/latest/developerguide/what-is.html",implementationUrl:"",infrastructure:R.Managed,dataMigrationServices:[]},Redshift:{name:"Redshift",src:rr,releaseDate:"2013",tags:["Pay per use"],pricing:"Cheap",description:"Amazon Redshift uses SQL to analyze structured and semi-structured data across data warehouses, operational databases, and data lakes, using AWS-designed hardware and machine learning to deliver the best price performance at any scale.",documentationUrl:"https://docs.aws.amazon.com/redshift/latest/gsg/index.html",implementationUrl:"https://docs.aws.amazon.com/redshift/latest/gsg/index.html",infrastructure:R.Serverless,dataMigrationServices:["Glue"]}},Ut=({solution:e})=>{const{name:s,src:t,releaseDate:n,pricing:a,description:l,documentationUrl:f,awesomeUrl:m,implementationUrl:w,tags:b,infrastructure:x,dataMigrationServices:v}=ar[e];return U($,{direction:"row",spacing:4,children:[g(je,{alt:s,src:t,variant:"square",sx:{marginTop:2,height:120,width:120}}),U($,{spacing:2,children:[g(Me,{variant:"h2",children:s}),g(Re,{light:!0}),g($,{direction:"row",spacing:2,children:g(K,{icon:g(It,{}),label:n,variant:"outlined"})}),U($,{direction:"row",spacing:2,children:[g(K,{icon:g(Mt,{}),label:a,color:a==="Cheap"?"success":"error",variant:"outlined"}),g(K,{icon:g(Rt,{}),label:"Parti-QL compatible",color:"success",variant:"outlined"}),x&&g(ne,{to:"/infrastructures",children:g(K,{icon:g(Lt,{}),label:x,color:"info",variant:"outlined"})}),b.map(d=>g(K,{label:d,color:"secondary",variant:"outlined"}))]}),g(Re,{light:!0}),v.length!==0&&U(Pe,{children:[U($,{direction:"row",spacing:2,children:[g(Me,{variant:"h6",children:"Migration tools"}),v.includes("Database Migration Service")&&g(K,{icon:g(je,{alt:"Database Migration Service",src:Ys,sx:{width:24,height:24}}),label:"Database Migration Service compatible",color:"info",variant:"outlined"}),v.includes("Glue")&&g(K,{icon:g(je,{alt:"Glue",src:Ks,sx:{width:24,height:24}}),label:"Glue compatible",color:"info",variant:"outlined"})]}),g(Re,{light:!0})]}),g(Me,{variant:"body1",children:l}),U($,{direction:"row",spacing:4,children:[g(Le,{variant:"contained",target:"_blank",href:f,children:"Documentation"}),m!==void 0&&g(Le,{variant:"contained",target:"_blank",href:m,children:"Awesome Repository"}),g(Le,{variant:"contained",target:"_blank",href:w,children:"Implementation example"})]})]})]})},nr=e=>e.solution!==void 0,ir=({questions:e})=>{const{control:s}=Os(),t=js([Et.Cache]),[n,a]=Q.exports.useState(),l=m=>{t.add(m)},f=m=>{if(nr(m)){a(m.solution);return}l(m.nextQuestionId)};return U("form",{children:[g($,{spacing:2,children:e.filter(({id:m})=>t.has(m)).map(({id:m,question:w,answers:b})=>g(ys,{name:m,control:s,render:({field:x})=>{var v;return x.value?g("span",{children:(v=b.find(({label:d})=>d===x.value))==null?void 0:v.conclusion}):U(Zt,ot(it({},x),{children:[g(es,{id:"demo-radio-buttons-group-label",children:w}),g(ts,{row:!0,children:b.map(d=>g(ss,{value:d.label,control:g(rs,{}),onClick:()=>f(d),label:d.label},d.label))})]}))}},m))}),n&&g(Ut,{solution:n})]})},or=()=>g($,{children:Object.values(Bt).sort((e,s)=>e.localeCompare(s)).map(e=>g(vt,{sx:{marginBottom:2,marginTop:2,padding:2},children:g(Ut,{solution:e})}))}),lr={[R.SelfHosted]:["Self hosted"],[R.Managed]:["Managed"],[R.Serverless]:["Serverless"]},cr=({infrastructure:e})=>U(Pe,{children:[g("h2",{children:e}),lr[e].map(s=>g("p",{children:s}))]}),ur=()=>g($,{children:Object.values(R).sort((e,s)=>e.localeCompare(s)).map(e=>g(vt,{sx:{marginBottom:2,marginTop:2,padding:2},children:g(cr,{infrastructure:e})}))});var Et=(e=>(e.AcessPatternsNumber="AccessPatternsNumber",e.AcessPatternsKnown="AccessPatternsKnown",e.Temperature="Temperature",e.Temporality="Temporality",e.Cache="Cache",e.Time="Time",e.RelationsCount="RelationsCount",e.DataInRelations="DataInRelations",e.SearchCatalogue="SearchCatalogue",e.SearchAccessbility="SearchAccessibility",e.MachineLearning="MachineLearning",e))(Et||{}),Bt=(e=>(e.DynamoDB="DynamoDB",e.AuroraServerless="AuroraServerless",e.RDS="RDS",e.QLDB="QLDB",e.Timestream="Timestream",e.Neptune="Neptune",e.AthenaS3="AthenaS3",e.S3Select="S3Select",e.DocumentDB="DocumentDB",e.OpenSearch="OpenSearch",e.Redshift="Redshift",e))(Bt||{});const dr=[{id:"Cache",question:"Does your data need to be in persistent storage?",answers:[{label:"Yes",conclusion:"I need a database",nextQuestionId:"Temperature"},{label:"No",conclusion:"I need a cache system",solution:"DynamoDB"}]},{id:"Temperature",question:"What is the more frequent operations on your data?",answers:[{label:"Write operations",conclusion:"I need an OTLP solution",nextQuestionId:"Temporality"},{label:"Read operations",conclusion:"TODO: I need an OLAP solution",solution:"DynamoDB"}]},{id:"Temporality",question:"Is history an important part of your data?",answers:[{label:"Yes",conclusion:"Data history is important",nextQuestionId:"Time"},{label:"No",conclusion:"Data history is not important",nextQuestionId:"AccessPatternsNumber"}]},{id:"AccessPatternsKnown",question:"Do you already know the access patterns for your data?",answers:[{label:"Yes",conclusion:"I know the acess patterns for my data",nextQuestionId:"AccessPatternsNumber"},{label:"No",conclusion:"I do not know the acess patterns for my data",nextQuestionId:"SearchCatalogue"}]},{id:"AccessPatternsNumber",question:"Do you have more than 20 access patterns on a single entity?",answers:[{label:"Yes",conclusion:"I have more than 20 access patterns to my data",nextQuestionId:"RelationsCount"},{label:"No",conclusion:"I have less than 20 access patterns to my data",solution:"DynamoDB"}]},{id:"RelationsCount",question:"[WIP] Do you have a lot of relations between your entities",answers:[{label:"Yes",conclusion:"I have a lot of relations between my entities",nextQuestionId:"DataInRelations"},{label:"No",conclusion:"TODO: I do not have a lot of relations between my entities",solution:"DynamoDB"}]},{id:"DataInRelations",question:"Is the relation between my entites the valuable part of my data?",answers:[{label:"Yes",conclusion:"I am looking for a Graph DB",solution:"Neptune"},{label:"No",conclusion:"I am looking for an SQL DB",solution:"AuroraServerless"}]},{id:"Time",question:"Is your data a serie of timestamped data points?",answers:[{label:"Yes",conclusion:"I need a time series database",solution:"Timestream"},{label:"No",conclusion:"I don't know",solution:"DynamoDB"}]}];function fr(){return U(Pe,{children:[g(as,{}),g("div",{className:"App",children:U(ns,{basename:"/serverless-databases",children:[g(us,{}),g(is,{maxWidth:"md",children:U(os,{children:[g(de,{path:"/",element:g("h1",{children:"hello, this is the home"})}),g(de,{path:"/builder",element:g(ir,{questions:dr})}),g(de,{path:"/solutions",element:g(or,{})}),g(de,{path:"/infrastructures",element:g(ur,{})})]})})]})})]})}ls.render(g(A.StrictMode,{children:g(fr,{})}),document.getElementById("root"));
