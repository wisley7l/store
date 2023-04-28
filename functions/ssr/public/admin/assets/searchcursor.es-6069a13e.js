import{a as M}from"./codemirror.es-15b9374a.js";import"./index-d5c6a1a9.js";var $=Object.defineProperty,g=(F,P)=>$(F,"name",{value:P,configurable:!0});function D(F,P){return P.forEach(function(u){u&&typeof u!="string"&&!Array.isArray(u)&&Object.keys(u).forEach(function(s){if(s!=="default"&&!(s in F)){var L=Object.getOwnPropertyDescriptor(u,s);Object.defineProperty(F,s,L.get?L:{enumerable:!0,get:function(){return u[s]}})}})}),Object.freeze(Object.defineProperty(F,Symbol.toStringTag,{value:"Module"}))}g(D,"_mergeNamespaces");var A={exports:{}};(function(F,P){(function(u){u(M.exports)})(function(u){var s=u.Pos;function L(t){var e=t.flags;return e??(t.ignoreCase?"i":"")+(t.global?"g":"")+(t.multiline?"m":"")}g(L,"regexpFlags");function O(t,e){for(var n=L(t),r=n,l=0;l<e.length;l++)r.indexOf(e.charAt(l))==-1&&(r+=e.charAt(l));return n==r?t:new RegExp(t.source,r)}g(O,"ensureFlags");function R(t){return/\\s|\\n|\n|\\W|\\D|\[\^/.test(t.source)}g(R,"maybeMultiline");function _(t,e,n){e=O(e,"g");for(var r=n.line,l=n.ch,a=t.lastLine();r<=a;r++,l=0){e.lastIndex=l;var i=t.getLine(r),f=e.exec(i);if(f)return{from:s(r,f.index),to:s(r,f.index+f[0].length),match:f}}}g(_,"searchRegexpForward");function B(t,e,n){if(!R(e))return _(t,e,n);e=O(e,"gm");for(var r,l=1,a=n.line,i=t.lastLine();a<=i;){for(var f=0;f<l&&!(a>i);f++){var d=t.getLine(a++);r=r==null?d:r+`
`+d}l=l*2,e.lastIndex=n.ch;var o=e.exec(r);if(o){var h=r.slice(0,o.index).split(`
`),c=o[0].split(`
`),v=n.line+h.length-1,m=h[h.length-1].length;return{from:s(v,m),to:s(v+c.length-1,c.length==1?m+c[0].length:c[c.length-1].length),match:o}}}}g(B,"searchRegexpForwardMultiline");function j(t,e,n){for(var r,l=0;l<=t.length;){e.lastIndex=l;var a=e.exec(t);if(!a)break;var i=a.index+a[0].length;if(i>t.length-n)break;(!r||i>r.index+r[0].length)&&(r=a),l=a.index+1}return r}g(j,"lastMatchIn");function k(t,e,n){e=O(e,"g");for(var r=n.line,l=n.ch,a=t.firstLine();r>=a;r--,l=-1){var i=t.getLine(r),f=j(i,e,l<0?0:i.length-l);if(f)return{from:s(r,f.index),to:s(r,f.index+f[0].length),match:f}}}g(k,"searchRegexpBackward");function I(t,e,n){if(!R(e))return k(t,e,n);e=O(e,"gm");for(var r,l=1,a=t.getLine(n.line).length-n.ch,i=n.line,f=t.firstLine();i>=f;){for(var d=0;d<l&&i>=f;d++){var o=t.getLine(i--);r=r==null?o:o+`
`+r}l*=2;var h=j(r,e,a);if(h){var c=r.slice(0,h.index).split(`
`),v=h[0].split(`
`),m=i+c.length,x=c[c.length-1].length;return{from:s(m,x),to:s(m+v.length-1,v.length==1?x+v[0].length:v[v.length-1].length),match:h}}}}g(I,"searchRegexpBackwardMultiline");var b,y;String.prototype.normalize?(b=g(function(t){return t.normalize("NFD").toLowerCase()},"doFold"),y=g(function(t){return t.normalize("NFD")},"noFold")):(b=g(function(t){return t.toLowerCase()},"doFold"),y=g(function(t){return t},"noFold"));function p(t,e,n,r){if(t.length==e.length)return n;for(var l=0,a=n+Math.max(0,t.length-e.length);;){if(l==a)return l;var i=l+a>>1,f=r(t.slice(0,i)).length;if(f==n)return i;f>n?a=i:l=i+1}}g(p,"adjustPos");function N(t,e,n,r){if(!e.length)return null;var l=r?b:y,a=l(e).split(/\r|\n\r?/);e:for(var i=n.line,f=n.ch,d=t.lastLine()+1-a.length;i<=d;i++,f=0){var o=t.getLine(i).slice(f),h=l(o);if(a.length==1){var c=h.indexOf(a[0]);if(c==-1)continue e;var n=p(o,h,c,l)+f;return{from:s(i,p(o,h,c,l)+f),to:s(i,p(o,h,c+a[0].length,l)+f)}}else{var v=h.length-a[0].length;if(h.slice(v)!=a[0])continue e;for(var m=1;m<a.length-1;m++)if(l(t.getLine(i+m))!=a[m])continue e;var x=t.getLine(i+a.length-1),w=l(x),E=a[a.length-1];if(w.slice(0,E.length)!=E)continue e;return{from:s(i,p(o,h,v,l)+f),to:s(i+a.length-1,p(x,w,E.length,l))}}}}g(N,"searchStringForward");function z(t,e,n,r){if(!e.length)return null;var l=r?b:y,a=l(e).split(/\r|\n\r?/);e:for(var i=n.line,f=n.ch,d=t.firstLine()-1+a.length;i>=d;i--,f=-1){var o=t.getLine(i);f>-1&&(o=o.slice(0,f));var h=l(o);if(a.length==1){var c=h.lastIndexOf(a[0]);if(c==-1)continue e;return{from:s(i,p(o,h,c,l)),to:s(i,p(o,h,c+a[0].length,l))}}else{var v=a[a.length-1];if(h.slice(0,v.length)!=v)continue e;for(var m=1,n=i-a.length+1;m<a.length-1;m++)if(l(t.getLine(n+m))!=a[m])continue e;var x=t.getLine(i+1-a.length),w=l(x);if(w.slice(w.length-a[0].length)!=a[0])continue e;return{from:s(i+1-a.length,p(x,w,x.length-a[0].length,l)),to:s(i,p(o,h,v.length,l))}}}}g(z,"searchStringBackward");function S(t,e,n,r){this.atOccurrence=!1,this.afterEmptyMatch=!1,this.doc=t,n=n?t.clipPos(n):s(0,0),this.pos={from:n,to:n};var l;typeof r=="object"?l=r.caseFold:(l=r,r=null),typeof e=="string"?(l==null&&(l=!1),this.matches=function(a,i){return(a?z:N)(t,e,i,l)}):(e=O(e,"gm"),!r||r.multiline!==!1?this.matches=function(a,i){return(a?I:B)(t,e,i)}:this.matches=function(a,i){return(a?k:_)(t,e,i)})}g(S,"SearchCursor"),S.prototype={findNext:function(){return this.find(!1)},findPrevious:function(){return this.find(!0)},find:function(t){var e=this.doc.clipPos(t?this.pos.from:this.pos.to);if(this.afterEmptyMatch&&this.atOccurrence&&(e=s(e.line,e.ch),t?(e.ch--,e.ch<0&&(e.line--,e.ch=(this.doc.getLine(e.line)||"").length)):(e.ch++,e.ch>(this.doc.getLine(e.line)||"").length&&(e.ch=0,e.line++)),u.cmpPos(e,this.doc.clipPos(e))!=0))return this.atOccurrence=!1;var n=this.matches(t,e);if(this.afterEmptyMatch=n&&u.cmpPos(n.from,n.to)==0,n)return this.pos=n,this.atOccurrence=!0,this.pos.match||!0;var r=s(t?this.doc.firstLine():this.doc.lastLine()+1,0);return this.pos={from:r,to:r},this.atOccurrence=!1},from:function(){if(this.atOccurrence)return this.pos.from},to:function(){if(this.atOccurrence)return this.pos.to},replace:function(t,e){if(this.atOccurrence){var n=u.splitLines(t);this.doc.replaceRange(n,this.pos.from,this.pos.to,e),this.pos.to=s(this.pos.from.line+n.length-1,n[n.length-1].length+(n.length==1?this.pos.from.ch:0))}}},u.defineExtension("getSearchCursor",function(t,e,n){return new S(this.doc,t,e,n)}),u.defineDocExtension("getSearchCursor",function(t,e,n){return new S(this,t,e,n)}),u.defineExtension("selectMatches",function(t,e){for(var n=[],r=this.getSearchCursor(t,this.getCursor("from"),e);r.findNext()&&!(u.cmpPos(r.to(),this.getCursor("to"))>0);)n.push({anchor:r.from(),head:r.to()});n.length&&this.setSelections(n,0)})})})();var C=A.exports,G=D({__proto__:null,default:C},[A.exports]);export{A as a,G as s};
