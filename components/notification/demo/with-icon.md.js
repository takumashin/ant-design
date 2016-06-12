webpackJsonp([205,358],{607:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(6),s(5)),o=t(p),c=(s(127),s(126)),e=t(c),u=s(1),l=t(u),i=s(2);t(i);n.exports={content:[["p","\u901a\u77e5\u63d0\u9192\u6846\u5de6\u4fa7\u6709\u56fe\u6807\u3002"]],meta:{order:2,title:"\u5e26\u6709Icon\u7684\u901a\u77e5\u63d0\u9192\u6846",filename:"components/notification/demo/with-icon.md",id:"components-notification-demo-with-icon"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Button<span class="token punctuation" >,</span> notification <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> openNotificationWithIcon <span class="token operator" >=</span> <span class="token keyword" >function</span> <span class="token punctuation" >(</span>type<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  <span class="token keyword" >return</span> <span class="token keyword" >function</span> <span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    notification<span class="token punctuation" >[</span>type<span class="token punctuation" >]</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      message<span class="token punctuation" >:</span> <span class="token string" >\'\u8fd9\u662f\u6807\u9898\'</span><span class="token punctuation" >,</span>\n      description<span class="token punctuation" >:</span> <span class="token string" >\'\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\'</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token function" >openNotificationWithIcon</span><span class="token punctuation" >(</span><span class="token string" >\'success\'</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u6210\u529f<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token function" >openNotificationWithIcon</span><span class="token punctuation" >(</span><span class="token string" >\'info\'</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u6d88\u606f<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token function" >openNotificationWithIcon</span><span class="token punctuation" >(</span><span class="token string" >\'warning\'</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u8b66\u544a<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token function" >openNotificationWithIcon</span><span class="token punctuation" >(</span><span class="token string" >\'error\'</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u9519\u8bef<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=function(n){return function(){e["default"][n]({message:"\u8fd9\u662f\u6807\u9898",description:"\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848"})}};return l["default"].createElement("div",null,l["default"].createElement(o["default"],{onClick:n("success")},"\u6210\u529f"),l["default"].createElement(o["default"],{onClick:n("info")},"\u6d88\u606f"),l["default"].createElement(o["default"],{onClick:n("warning")},"\u8b66\u544a"),l["default"].createElement(o["default"],{onClick:n("error")},"\u9519\u8bef"))},style:"\n.code-box-demo .ant-btn {\n  margin-right: 1em;\n}\n"}}});