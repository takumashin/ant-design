webpackJsonp([322,358],{486:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(92),s(91)),e=t(p),o=s(1),c=t(o),l=s(2);t(l);n.exports={content:{"zh-CN":[["p","\u7528\u4e8e\u5d4c\u5957\u5728\u7a7a\u95f4\u6709\u9650\u7684\u5bb9\u5668\u4e2d\u3002"]],"en-US":[["p","Nested inside a container element for rendering in limited space."]]},meta:{order:10,title:{"zh-CN":"\u5361\u7247\u6a21\u5f0f","en-US":"Card"},filename:"components/calendar/demo/card.md",id:"components-calendar-demo-card"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Calendar <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >function</span> <span class="token function" >onPanelChange</span><span class="token punctuation" >(</span>value<span class="token punctuation" >,</span> mode<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span>value<span class="token punctuation" >,</span> mode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> width<span class="token punctuation" >:</span> <span class="token number" >290</span><span class="token punctuation" >,</span> border<span class="token punctuation" >:</span> <span class="token string" >\'1px solid #d9d9d9\'</span><span class="token punctuation" >,</span> borderRadius<span class="token punctuation" >:</span> <span class="token number" >4</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Calendar</span> <span class="token attr-name" >fullscreen</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token boolean" >false</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >onPanelChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>onPanelChange<span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){function n(n,a){console.log(n,a)}return c["default"].createElement("div",{style:{width:290,border:"1px solid #d9d9d9",borderRadius:4}},c["default"].createElement(e["default"],{fullscreen:!1,onPanelChange:n}))}}}});