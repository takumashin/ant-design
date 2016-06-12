webpackJsonp([259,358],{551:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(a(6),a(5)),o=t(p),e=(a(13),a(18)),c=t(e),u=(a(36),a(35)),l=t(u),k=Object.assign||function(n){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(n[t]=a[t])}return n},i=a(1),r=t(i),d=a(2);t(d);n.exports={content:[["p","\u57fa\u672c\u7684\u8868\u5355\u6821\u9a8c\u4f8b\u5b50\u3002"]],meta:{order:11,title:"\u8868\u5355\u6821\u9a8c",filename:"components/form/demo/validate-basic.md",id:"components-form-demo-validate-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Button<span class="token punctuation" >,</span> Form<span class="token punctuation" >,</span> Input <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> createForm <span class="token operator" >=</span> Form<span class="token punctuation" >.</span>create<span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> FormItem <span class="token operator" >=</span> Form<span class="token punctuation" >.</span>Item<span class="token punctuation" >;</span>\n\n<span class="token keyword" >function</span> <span class="token function" >noop</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  <span class="token keyword" >return</span> <span class="token boolean" >false</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token keyword" >let</span> BasicDemo <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >handleReset</span><span class="token punctuation" >(</span>e<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    e<span class="token punctuation" >.</span><span class="token function" >preventDefault</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span>props<span class="token punctuation" >.</span>form<span class="token punctuation" >.</span><span class="token function" >resetFields</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n\n  <span class="token function" >handleSubmit</span><span class="token punctuation" >(</span>e<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    e<span class="token punctuation" >.</span><span class="token function" >preventDefault</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span>props<span class="token punctuation" >.</span>form<span class="token punctuation" >.</span><span class="token function" >validateFields</span><span class="token punctuation" >(</span><span class="token punctuation" >(</span>errors<span class="token punctuation" >,</span> values<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n      <span class="token keyword" >if</span> <span class="token punctuation" >(</span><span class="token operator" >!</span><span class="token operator" >!</span>errors<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n        console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span><span class="token string" >\'Errors in form!!!\'</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n        <span class="token keyword" >return</span><span class="token punctuation" >;</span>\n      <span class="token punctuation" >}</span>\n      console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span><span class="token string" >\'Submit!!!\'</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n      console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span>values<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n\n  <span class="token function" >userExists</span><span class="token punctuation" >(</span>rule<span class="token punctuation" >,</span> value<span class="token punctuation" >,</span> callback<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >if</span> <span class="token punctuation" >(</span><span class="token operator" >!</span>value<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n      <span class="token function" >callback</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span> <span class="token keyword" >else</span> <span class="token punctuation" >{</span>\n      <span class="token function" >setTimeout</span><span class="token punctuation" >(</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n        <span class="token keyword" >if</span> <span class="token punctuation" >(</span>value <span class="token operator" >===</span> <span class="token string" >\'JasonWood\'</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n          <span class="token function" >callback</span><span class="token punctuation" >(</span><span class="token punctuation" >[</span><span class="token keyword" >new</span> <span class="token class-name" >Error</span><span class="token punctuation" >(</span><span class="token string" >\'\u62b1\u6b49\uff0c\u8be5\u7528\u6237\u540d\u5df2\u88ab\u5360\u7528\u3002\'</span><span class="token punctuation" >)</span><span class="token punctuation" >]</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n        <span class="token punctuation" >}</span> <span class="token keyword" >else</span> <span class="token punctuation" >{</span>\n          <span class="token function" >callback</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n        <span class="token punctuation" >}</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token number" >800</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n\n  <span class="token function" >checkPass</span><span class="token punctuation" >(</span>rule<span class="token punctuation" >,</span> value<span class="token punctuation" >,</span> callback<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >const</span> <span class="token punctuation" >{</span> validateFields <span class="token punctuation" >}</span> <span class="token operator" >=</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>props<span class="token punctuation" >.</span>form<span class="token punctuation" >;</span>\n    <span class="token keyword" >if</span> <span class="token punctuation" >(</span>value<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n      <span class="token function" >validateFields</span><span class="token punctuation" >(</span><span class="token punctuation" >[</span><span class="token string" >\'rePasswd\'</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span> force<span class="token punctuation" >:</span> <span class="token boolean" >true</span> <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span>\n    <span class="token function" >callback</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n\n  <span class="token function" >checkPass2</span><span class="token punctuation" >(</span>rule<span class="token punctuation" >,</span> value<span class="token punctuation" >,</span> callback<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >const</span> <span class="token punctuation" >{</span> getFieldValue <span class="token punctuation" >}</span> <span class="token operator" >=</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>props<span class="token punctuation" >.</span>form<span class="token punctuation" >;</span>\n    <span class="token keyword" >if</span> <span class="token punctuation" >(</span>value <span class="token operator" >&amp;&amp;</span> value <span class="token operator" >!==</span> <span class="token function" >getFieldValue</span><span class="token punctuation" >(</span><span class="token string" >\'passwd\'</span><span class="token punctuation" >)</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n      <span class="token function" >callback</span><span class="token punctuation" >(</span><span class="token string" >\'\u4e24\u6b21\u8f93\u5165\u5bc6\u7801\u4e0d\u4e00\u81f4\uff01\'</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span> <span class="token keyword" >else</span> <span class="token punctuation" >{</span>\n      <span class="token function" >callback</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >const</span> <span class="token punctuation" >{</span> getFieldProps<span class="token punctuation" >,</span> getFieldError<span class="token punctuation" >,</span> isFieldValidating <span class="token punctuation" >}</span> <span class="token operator" >=</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>props<span class="token punctuation" >.</span>form<span class="token punctuation" >;</span>\n    <span class="token keyword" >const</span> nameProps <span class="token operator" >=</span> <span class="token function" >getFieldProps</span><span class="token punctuation" >(</span><span class="token string" >\'name\'</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n      rules<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n        <span class="token punctuation" >{</span> required<span class="token punctuation" >:</span> <span class="token boolean" >true</span><span class="token punctuation" >,</span> min<span class="token punctuation" >:</span> <span class="token number" >5</span><span class="token punctuation" >,</span> message<span class="token punctuation" >:</span> <span class="token string" >\'\u7528\u6237\u540d\u81f3\u5c11\u4e3a 5 \u4e2a\u5b57\u7b26\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >{</span> validator<span class="token punctuation" >:</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>userExists <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >const</span> emailProps <span class="token operator" >=</span> <span class="token function" >getFieldProps</span><span class="token punctuation" >(</span><span class="token string" >\'email\'</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n      validate<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token punctuation" >{</span>\n        rules<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n          <span class="token punctuation" >{</span> required<span class="token punctuation" >:</span> <span class="token boolean" >true</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n        trigger<span class="token punctuation" >:</span> <span class="token string" >\'onBlur\'</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n        rules<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n          <span class="token punctuation" >{</span> type<span class="token punctuation" >:</span> <span class="token string" >\'email\'</span><span class="token punctuation" >,</span> message<span class="token punctuation" >:</span> <span class="token string" >\'\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u90ae\u7bb1\u5730\u5740\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n        trigger<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token string" >\'onBlur\'</span><span class="token punctuation" >,</span> <span class="token string" >\'onChange\'</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >const</span> passwdProps <span class="token operator" >=</span> <span class="token function" >getFieldProps</span><span class="token punctuation" >(</span><span class="token string" >\'passwd\'</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n      rules<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n        <span class="token punctuation" >{</span> required<span class="token punctuation" >:</span> <span class="token boolean" >true</span><span class="token punctuation" >,</span> whitespace<span class="token punctuation" >:</span> <span class="token boolean" >true</span><span class="token punctuation" >,</span> message<span class="token punctuation" >:</span> <span class="token string" >\'\u8bf7\u586b\u5199\u5bc6\u7801\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >{</span> validator<span class="token punctuation" >:</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>checkPass <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >const</span> rePasswdProps <span class="token operator" >=</span> <span class="token function" >getFieldProps</span><span class="token punctuation" >(</span><span class="token string" >\'rePasswd\'</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n      rules<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token punctuation" >{</span>\n        required<span class="token punctuation" >:</span> <span class="token boolean" >true</span><span class="token punctuation" >,</span>\n        whitespace<span class="token punctuation" >:</span> <span class="token boolean" >true</span><span class="token punctuation" >,</span>\n        message<span class="token punctuation" >:</span> <span class="token string" >\'\u8bf7\u518d\u6b21\u8f93\u5165\u5bc6\u7801\'</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n        validator<span class="token punctuation" >:</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>checkPass2<span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >const</span> textareaProps <span class="token operator" >=</span> <span class="token function" >getFieldProps</span><span class="token punctuation" >(</span><span class="token string" >\'textarea\'</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n      rules<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n        <span class="token punctuation" >{</span> required<span class="token punctuation" >:</span> <span class="token boolean" >true</span><span class="token punctuation" >,</span> message<span class="token punctuation" >:</span> <span class="token string" >\'\u771f\u7684\u4e0d\u6253\u7b97\u5199\u70b9\u4ec0\u4e48\u5417\uff1f\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >const</span> formItemLayout <span class="token operator" >=</span> <span class="token punctuation" >{</span>\n      labelCol<span class="token punctuation" >:</span> <span class="token punctuation" >{</span> span<span class="token punctuation" >:</span> <span class="token number" >7</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      wrapperCol<span class="token punctuation" >:</span> <span class="token punctuation" >{</span> span<span class="token punctuation" >:</span> <span class="token number" >12</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Form</span> <span class="token attr-name" >horizontal</span> <span class="token attr-name" >form</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>props<span class="token punctuation" >.</span>form<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n        <span class="token operator" >&lt;</span>FormItem\n          <span class="token punctuation" >{</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span>formItemLayout<span class="token punctuation" >}</span>\n          label<span class="token operator" >=</span><span class="token string" >"\u7528\u6237\u540d"</span>\n          hasFeedback\n          help<span class="token operator" >=</span><span class="token punctuation" >{</span><span class="token function" >isFieldValidating</span><span class="token punctuation" >(</span><span class="token string" >\'name\'</span><span class="token punctuation" >)</span> <span class="token operator" >?</span> <span class="token string" >\'\u6821\u9a8c\u4e2d...\'</span> <span class="token punctuation" >:</span> <span class="token punctuation" >(</span><span class="token function" >getFieldError</span><span class="token punctuation" >(</span><span class="token string" >\'name\'</span><span class="token punctuation" >)</span> <span class="token operator" >||</span> <span class="token punctuation" >[</span><span class="token punctuation" >]</span><span class="token punctuation" >)</span><span class="token punctuation" >.</span><span class="token function" >join</span><span class="token punctuation" >(</span><span class="token string" >\', \'</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span>\n        <span class="token operator" >></span>\n          <span class="token operator" >&lt;</span>Input <span class="token punctuation" >{</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span>nameProps<span class="token punctuation" >}</span> placeholder<span class="token operator" >=</span><span class="token string" >"\u5b9e\u65f6\u6821\u9a8c\uff0c\u8f93\u5165 JasonWood \u770b\u770b"</span> <span class="token operator" >/</span><span class="token operator" >></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>FormItem</span><span class="token punctuation" >></span></span>\n\n        <span class="token operator" >&lt;</span>FormItem\n          <span class="token punctuation" >{</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span>formItemLayout<span class="token punctuation" >}</span>\n          label<span class="token operator" >=</span><span class="token string" >"\u90ae\u7bb1"</span>\n          hasFeedback\n        <span class="token operator" >></span>\n          <span class="token operator" >&lt;</span>Input <span class="token punctuation" >{</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span>emailProps<span class="token punctuation" >}</span> type<span class="token operator" >=</span><span class="token string" >"email"</span> placeholder<span class="token operator" >=</span><span class="token string" >"onBlur \u4e0e onChange \u76f8\u7ed3\u5408"</span> <span class="token operator" >/</span><span class="token operator" >></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>FormItem</span><span class="token punctuation" >></span></span>\n\n        <span class="token operator" >&lt;</span>FormItem\n          <span class="token punctuation" >{</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span>formItemLayout<span class="token punctuation" >}</span>\n          label<span class="token operator" >=</span><span class="token string" >"\u5bc6\u7801"</span>\n          hasFeedback\n        <span class="token operator" >></span>\n          <span class="token operator" >&lt;</span>Input <span class="token punctuation" >{</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span>passwdProps<span class="token punctuation" >}</span> type<span class="token operator" >=</span><span class="token string" >"password"</span> autoComplete<span class="token operator" >=</span><span class="token string" >"off"</span>\n            onContextMenu<span class="token operator" >=</span><span class="token punctuation" >{</span>noop<span class="token punctuation" >}</span> onPaste<span class="token operator" >=</span><span class="token punctuation" >{</span>noop<span class="token punctuation" >}</span> onCopy<span class="token operator" >=</span><span class="token punctuation" >{</span>noop<span class="token punctuation" >}</span> onCut<span class="token operator" >=</span><span class="token punctuation" >{</span>noop<span class="token punctuation" >}</span>\n          <span class="token operator" >/</span><span class="token operator" >></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>FormItem</span><span class="token punctuation" >></span></span>\n\n        <span class="token operator" >&lt;</span>FormItem\n          <span class="token punctuation" >{</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span>formItemLayout<span class="token punctuation" >}</span>\n          label<span class="token operator" >=</span><span class="token string" >"\u786e\u8ba4\u5bc6\u7801"</span>\n          hasFeedback\n        <span class="token operator" >></span>\n          <span class="token operator" >&lt;</span>Input <span class="token punctuation" >{</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span>rePasswdProps<span class="token punctuation" >}</span> type<span class="token operator" >=</span><span class="token string" >"password"</span> autoComplete<span class="token operator" >=</span><span class="token string" >"off"</span> placeholder<span class="token operator" >=</span><span class="token string" >"\u4e24\u6b21\u8f93\u5165\u5bc6\u7801\u4fdd\u6301\u4e00\u81f4"</span>\n            onContextMenu<span class="token operator" >=</span><span class="token punctuation" >{</span>noop<span class="token punctuation" >}</span> onPaste<span class="token operator" >=</span><span class="token punctuation" >{</span>noop<span class="token punctuation" >}</span> onCopy<span class="token operator" >=</span><span class="token punctuation" >{</span>noop<span class="token punctuation" >}</span> onCut<span class="token operator" >=</span><span class="token punctuation" >{</span>noop<span class="token punctuation" >}</span>\n          <span class="token operator" >/</span><span class="token operator" >></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>FormItem</span><span class="token punctuation" >></span></span>\n\n        <span class="token operator" >&lt;</span>FormItem\n          <span class="token punctuation" >{</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span>formItemLayout<span class="token punctuation" >}</span>\n          label<span class="token operator" >=</span><span class="token string" >"\u5907\u6ce8"</span>\n        <span class="token operator" >></span>\n          <span class="token operator" >&lt;</span>Input <span class="token punctuation" >{</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span>textareaProps<span class="token punctuation" >}</span> type<span class="token operator" >=</span><span class="token string" >"textarea"</span> placeholder<span class="token operator" >=</span><span class="token string" >"\u968f\u4fbf\u5199"</span> id<span class="token operator" >=</span><span class="token string" >"textarea"</span> name<span class="token operator" >=</span><span class="token string" >"textarea"</span> <span class="token operator" >/</span><span class="token operator" >></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>FormItem</span><span class="token punctuation" >></span></span>\n\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>FormItem</span> <span class="token attr-name" >wrapperCol</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> span<span class="token punctuation" >:</span> <span class="token number" >12</span><span class="token punctuation" >,</span> offset<span class="token punctuation" >:</span> <span class="token number" >7</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>handleSubmit<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u786e\u5b9a<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n          <span class="token entity" title="&nbsp;">&amp;nbsp;</span><span class="token entity" title="&nbsp;">&amp;nbsp;</span><span class="token entity" title="&nbsp;">&amp;nbsp;</span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>ghost<span class="token punctuation" >"</span></span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>handleReset<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u91cd\u7f6e<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>FormItem</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Form</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nBasicDemo <span class="token operator" >=</span> <span class="token function" >createForm</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >(</span>BasicDemo<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>BasicDemo</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'
}],preview:function(){function n(){return!1}var s=l["default"].create,a=l["default"].Item,t=r["default"].createClass({displayName:"BasicDemo",handleReset:function(n){n.preventDefault(),this.props.form.resetFields()},handleSubmit:function(n){n.preventDefault(),this.props.form.validateFields(function(n,s){return n?void console.log("Errors in form!!!"):(console.log("Submit!!!"),void console.log(s))})},userExists:function(n,s,a){s?setTimeout(function(){"JasonWood"===s?a([new Error("\u62b1\u6b49\uff0c\u8be5\u7528\u6237\u540d\u5df2\u88ab\u5360\u7528\u3002")]):a()},800):a()},checkPass:function(n,s,a){var t=this.props.form.validateFields;s&&t(["rePasswd"],{force:!0}),a()},checkPass2:function(n,s,a){var t=this.props.form.getFieldValue;s&&s!==t("passwd")?a("\u4e24\u6b21\u8f93\u5165\u5bc6\u7801\u4e0d\u4e00\u81f4\uff01"):a()},render:function(){var s=this.props.form,t=s.getFieldProps,p=s.getFieldError,e=s.isFieldValidating,u=t("name",{rules:[{required:!0,min:5,message:"\u7528\u6237\u540d\u81f3\u5c11\u4e3a 5 \u4e2a\u5b57\u7b26"},{validator:this.userExists}]}),i=t("email",{validate:[{rules:[{required:!0}],trigger:"onBlur"},{rules:[{type:"email",message:"\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u90ae\u7bb1\u5730\u5740"}],trigger:["onBlur","onChange"]}]}),d=t("passwd",{rules:[{required:!0,whitespace:!0,message:"\u8bf7\u586b\u5199\u5bc6\u7801"},{validator:this.checkPass}]}),m=t("rePasswd",{rules:[{required:!0,whitespace:!0,message:"\u8bf7\u518d\u6b21\u8f93\u5165\u5bc6\u7801"},{validator:this.checkPass2}]}),g=t("textarea",{rules:[{required:!0,message:"\u771f\u7684\u4e0d\u6253\u7b97\u5199\u70b9\u4ec0\u4e48\u5417\uff1f"}]}),f={labelCol:{span:7},wrapperCol:{span:12}};return r["default"].createElement(l["default"],{horizontal:!0,form:this.props.form},r["default"].createElement(a,k({},f,{label:"\u7528\u6237\u540d",hasFeedback:!0,help:e("name")?"\u6821\u9a8c\u4e2d...":(p("name")||[]).join(", ")}),r["default"].createElement(c["default"],k({},u,{placeholder:"\u5b9e\u65f6\u6821\u9a8c\uff0c\u8f93\u5165 JasonWood \u770b\u770b"}))),r["default"].createElement(a,k({},f,{label:"\u90ae\u7bb1",hasFeedback:!0}),r["default"].createElement(c["default"],k({},i,{type:"email",placeholder:"onBlur \u4e0e onChange \u76f8\u7ed3\u5408"}))),r["default"].createElement(a,k({},f,{label:"\u5bc6\u7801",hasFeedback:!0}),r["default"].createElement(c["default"],k({},d,{type:"password",autoComplete:"off",onContextMenu:n,onPaste:n,onCopy:n,onCut:n}))),r["default"].createElement(a,k({},f,{label:"\u786e\u8ba4\u5bc6\u7801",hasFeedback:!0}),r["default"].createElement(c["default"],k({},m,{type:"password",autoComplete:"off",placeholder:"\u4e24\u6b21\u8f93\u5165\u5bc6\u7801\u4fdd\u6301\u4e00\u81f4",onContextMenu:n,onPaste:n,onCopy:n,onCut:n}))),r["default"].createElement(a,k({},f,{label:"\u5907\u6ce8"}),r["default"].createElement(c["default"],k({},g,{type:"textarea",placeholder:"\u968f\u4fbf\u5199",id:"textarea",name:"textarea"}))),r["default"].createElement(a,{wrapperCol:{span:12,offset:7}},r["default"].createElement(o["default"],{type:"primary",onClick:this.handleSubmit},"\u786e\u5b9a"),"\xa0\xa0\xa0",r["default"].createElement(o["default"],{type:"ghost",onClick:this.handleReset},"\u91cd\u7f6e")))}});return t=s()(t),r["default"].createElement(t,null)}}}});