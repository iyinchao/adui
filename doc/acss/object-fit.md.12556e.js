(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{1474:function(n,s){n.exports={content:["article",["p","AD UI 引入了以下功能类，以控制元素的可替换内容会被怎样调整大小。"],["p","相关 CSS 属性：",["code","object-fit"]],["pre",{lang:"json classes",highlighted:'{\n  <span class="token string">"object-contain"</span><span class="token punctuation">:</span> "object<span class="token operator">-</span>fit<span class="token punctuation">:</span> contain<span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"object-cover"</span><span class="token punctuation">:</span> "object<span class="token operator">-</span>fit<span class="token punctuation">:</span> cover<span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"object-fill"</span><span class="token punctuation">:</span> "object<span class="token operator">-</span>fit<span class="token punctuation">:</span> fill<span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"object-none"</span><span class="token punctuation">:</span> "object<span class="token operator">-</span>fit<span class="token punctuation">:</span> none<span class="token comment" spellcheck="true">;"</span>\n}'},["code",'{\n  "object-contain": "object-fit: contain;",\n  "object-cover": "object-fit: cover;",\n  "object-fill": "object-fit: fill;",\n  "object-none": "object-fit: none;"\n}']],["pre",{lang:"jsx acss",highlighted:'return <span class="token punctuation">(</span>\n  <span class="token operator">&lt;></span>\n    <span class="token operator">&lt;</span>img\n      className<span class="token operator">=</span><span class="token string">"block w-100 h-100 object-contain demoImg"</span>\n      src<span class="token operator">=</span><span class="token string">"//wxa.wxs.qq.com/images/preview/img-placeholder_320x180.png"</span>\n    <span class="token operator">/</span><span class="token operator">></span>\n\n    <span class="token operator">&lt;</span>style\n      dangerouslySetInnerHTML<span class="token operator">=</span>{{\n        __html<span class="token punctuation">:</span> `<span class="token punctuation">.</span>demoImg{ margin<span class="token punctuation">:</span> <span class="token number">0</span>!important<span class="token comment" spellcheck="true">;width:100px!important;height:100px!important; }`,</span>\n      }}\n    <span class="token operator">/</span><span class="token operator">></span>\n  <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>\n<span class="token punctuation">)</span>'},["code",'return (\n  <>\n    <img\n      className="block w-100 h-100 object-contain demoImg"\n      src="//wxa.wxs.qq.com/images/preview/img-placeholder_320x180.png"\n    />\n\n    <style\n      dangerouslySetInnerHTML={{\n        __html: `.demoImg{ margin: 0!important;width:100px!important;height:100px!important; }`,\n      }}\n    />\n  </>\n)']]],meta:{title:"Object Fit",filename:"doc/acss/object-fit.md"}}}}]);