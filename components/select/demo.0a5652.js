(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{1455:function(n,s,a){n.exports={longlist:a(1518)}},1518:function(n,s){n.exports={content:["article",["p","虚拟滚动，处理 ",["code","10000"]," 行数据："],["pre",{lang:"jsx",highlighted:'<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10000</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>i<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">36</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span>\n  options<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    value<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">return</span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Select</span>\n    <span class="token attr-name">searchable</span>\n    <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token punctuation">:</span> <span class="token string">"50%"</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n    <span class="token attr-name">filterOption</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>inputValue<span class="token punctuation">,</span> option<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>inputValue<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>option<span class="token punctuation">.</span>props<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token boolean">true</span>\n      <span class="token punctuation">}</span>\n      <span class="token keyword">return</span> <span class="token boolean">false</span>\n    <span class="token punctuation">}</span></span><span class="token attr-name">}</span>\n  <span class="token punctuation">></span></span>\n    <span class="token punctuation">{</span>options<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">{</span> value <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Select.Option</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> display<span class="token punctuation">:</span> <span class="token string">"flex"</span><span class="token punctuation">,</span> alignItems<span class="token punctuation">:</span> <span class="token string">"center"</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span>\n            <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> height<span class="token punctuation">:</span> <span class="token number">24</span><span class="token punctuation">,</span> width<span class="token punctuation">:</span> <span class="token number">24</span><span class="token punctuation">,</span> marginRight<span class="token punctuation">:</span> <span class="token number">8</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://wxa.wxs.qq.com/mpweb/delivery/legacy/moment-preview/placeholder/vid.png<span class="token punctuation">"</span></span>\n            <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span>\n          <span class="token punctuation">/></span></span>\n          <span class="token punctuation">{</span>value<span class="token punctuation">}</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Select.Option</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Select</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span>'},["code",'const options = []\nfor (let i = 0; i < 10000; i++) {\n  const value = `${i.toString(36)}${i}`\n  options.push({\n    value,\n  })\n}\n\nreturn (\n  <Select\n    searchable\n    style={{ width: "50%" }}\n    filterOption={(inputValue, option) => {\n      if (inputValue.includes(option.props.value)) {\n        return true\n      }\n      return false\n    }}\n  >\n    {options.map(({ value }) => (\n      <Select.Option value={value}>\n        <div style={{ display: "flex", alignItems: "center" }}>\n          <img\n            style={{ height: 24, width: 24, marginRight: 8 }}\n            src="https://wxa.wxs.qq.com/mpweb/delivery/legacy/moment-preview/placeholder/vid.png"\n            alt=""\n          />\n          {value}\n        </div>\n      </Select.Option>\n    ))}\n  </Select>\n)']],["h2","Alert"],["h3","虚拟滚动与 dropdownMatchSelectWidth Prop"],["p","当 ",["code","dropdownMatchSelectWidth"]," 为 ",["code","false"]," 时，虚拟滚动将失效。在 adui 1.0 前，此 Prop 默认为 ",["code","false"],"，现在改为 ",["code","true"],"，请注意对样式的影响。"]],meta:{order:0,title:{"zh-CN":"内部驱动","en-US":"Type"},filename:"components/select/demo/longlist.md"}}}}]);