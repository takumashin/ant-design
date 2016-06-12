webpackJsonp([214,358],{598:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(a(6),a(5)),o=t(p),c=(a(38),a(37)),e=t(c),u=a(1),l=t(u),i=a(2);t(i);n.exports={content:[["p","\u4f7f\u7528 ",["code","confirm()"]," \u53ef\u4ee5\u5feb\u6377\u5730\u5f39\u51fa\u786e\u8ba4\u6846\u3002"]],meta:{order:3,title:"\u786e\u8ba4\u5bf9\u8bdd\u6846",filename:"components/modal/demo/confirm.md",id:"components-modal-demo-confirm"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Modal<span class="token punctuation" >,</span> Button <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> confirm <span class="token operator" >=</span> Modal<span class="token punctuation" >.</span>confirm<span class="token punctuation" >;</span>\n\n<span class="token keyword" >function</span> <span class="token function" >showConfirm</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  <span class="token function" >confirm</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n    title<span class="token punctuation" >:</span> <span class="token string" >\'\u60a8\u662f\u5426\u786e\u8ba4\u8981\u5220\u9664\u8fd9\u9879\u5185\u5bb9\'</span><span class="token punctuation" >,</span>\n    content<span class="token punctuation" >:</span> <span class="token string" >\'\u4e00\u4e9b\u89e3\u91ca\'</span><span class="token punctuation" >,</span>\n    <span class="token function" >onOk</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n      console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span><span class="token string" >\'\u786e\u5b9a\'</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token function" >onCancel</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>showConfirm<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n    \u786e\u8ba4\u5bf9\u8bdd\u6846\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){function n(){s({title:"\u60a8\u662f\u5426\u786e\u8ba4\u8981\u5220\u9664\u8fd9\u9879\u5185\u5bb9",content:"\u4e00\u4e9b\u89e3\u91ca",onOk:function(){console.log("\u786e\u5b9a")},onCancel:function(){}})}var s=e["default"].confirm;return l["default"].createElement(o["default"],{onClick:n},"\u786e\u8ba4\u5bf9\u8bdd\u6846")}}}});