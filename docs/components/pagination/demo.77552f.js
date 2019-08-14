webpackJsonp(["components/pagination/demo"],{Y88u:function(n,a,s){n.exports={basic:s("tatn")}},tatn:function(n,a){n.exports={content:["article",["p","\u914d\u5408 ",["code","Table"]," \u7684 ",["code","loading"]," Prop \u5b9e\u73b0\u7ffb\u9875\u5e76\u52a0\u8f7d\u6570\u636e\uff1a"],["pre",{lang:"jsx",highlighted:'  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>\n\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>\n      loading<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">this</span><span class="token punctuation">.</span>handleChange <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> loading<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> loading<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n\n  render <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> dataSource <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token keyword">from</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>_<span class="token punctuation">,</span> i<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> i<span class="token punctuation">)</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> loading <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state\n\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>React.Fragment</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> flex<span class="token punctuation">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card.Header</span>\n            <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u5e7f\u544a\u6570\u636e<span class="token punctuation">"</span></span>\n          <span class="token punctuation">/></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Table</span>\n            <span class="token attr-name">loading</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>loading<span class="token punctuation">}</span></span>\n            <span class="token attr-name">dataSource</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>dataSource<span class="token punctuation">}</span></span>\n            <span class="token attr-name">getHeadCellStyle</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>col<span class="token punctuation">,</span> colIndex<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span><span class="token operator">!</span>colIndex <span class="token operator">?</span> <span class="token punctuation">{</span> paddingLeft<span class="token punctuation">:</span> <span class="token string">"24px"</span> <span class="token punctuation">}</span> <span class="token punctuation">:</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">getCellStyle</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>row<span class="token punctuation">,</span> col<span class="token punctuation">,</span> rowIndex<span class="token punctuation">,</span> colIndex<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span><span class="token operator">!</span>colIndex <span class="token operator">&amp;&amp;</span> <span class="token punctuation">{</span> paddingLeft<span class="token punctuation">:</span> <span class="token string">"24px"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n              boxShadow<span class="token punctuation">:</span> <span class="token string">"0 1px 0 rgba(0, 0, 0, .08), 0 -1px 0 rgba(0, 0, 0, .08)"</span>\n            <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n          <span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Table.Column</span>\n              <span class="token attr-name">dataIndex</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>one<span class="token punctuation">"</span></span>\n              <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u9879\u76ee<span class="token punctuation">"</span></span>\n              <span class="token attr-name">render</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>row<span class="token punctuation">,</span> col<span class="token punctuation">,</span> rowIndex<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token template-string"><span class="token string">`\u9879\u76ee</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>rowIndex<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">}</span></span>\n            <span class="token punctuation">/></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Table.Column</span>\n              <span class="token attr-name">dataIndex</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>two<span class="token punctuation">"</span></span>\n              <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u6570\u636e\u9879<span class="token punctuation">"</span></span>\n              <span class="token attr-name">render</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token string">"6,534,785"</span><span class="token punctuation">}</span></span>\n              <span class="token attr-name">onSort</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n            <span class="token punctuation">/></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Table.Column</span>\n              <span class="token attr-name">dataIndex</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>three<span class="token punctuation">"</span></span>\n              <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u6570\u636e\u9879<span class="token punctuation">"</span></span>\n              <span class="token attr-name">render</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token string">"4,463,346"</span><span class="token punctuation">}</span></span>\n            <span class="token punctuation">/></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Table</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Pagination</span>\n            <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>right<span class="token punctuation">"</span></span>\n            <span class="token attr-name">defaultCurrent</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">pageSize</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">total</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">99</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">showButtonJumper</span>\n            <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> padding<span class="token punctuation">:</span> <span class="token string">"16px 16px 16px 0px"</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">disabled</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>loading<span class="token punctuation">}</span></span>\n            <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleChange<span class="token punctuation">}</span></span>\n          <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span>\n        <span class="token punctuation">{</span><span class="token comment" spellcheck="true">/** \u8bf7\u5ffd\u7565\u8fd9\u4e2a style \u6807\u7b7e \ud83d\ude0a */</span><span class="token punctuation">}</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">dangerouslySetInnerHTML</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> __html<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`.adui-ComponentDoc-demoWrapper { background-color: #fcfcfc; }`</span></span> <span class="token punctuation">}</span></span><span class="token attr-name">}</span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>React.Fragment</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>'},["code",'  constructor(props) {\n    super(props)\n\n    this.state = {\n      loading: false,\n    }\n\n    this.handleChange = () => {\n      this.setState({ loading: true })\n      setTimeout(() => {\n        this.setState({ loading: false })\n      }, 1000)\n    }\n  }\n\n  render () {\n    const dataSource = Array.from(new Array(2), (_, i) => i)\n    const { loading } = this.state\n\n    return (\n      <React.Fragment>\n        <Card style={{ flex: 1 }}>\n          <Card.Header\n            title="\u5e7f\u544a\u6570\u636e"\n          />\n          <Table\n            loading={loading}\n            dataSource={dataSource}\n            getHeadCellStyle={(col, colIndex) => (!colIndex ? { paddingLeft: "24px" } : null)}\n            getCellStyle={(row, col, rowIndex, colIndex) => (!colIndex && { paddingLeft: "24px" })}\n            style={{\n              boxShadow: "0 1px 0 rgba(0, 0, 0, .08), 0 -1px 0 rgba(0, 0, 0, .08)"\n            }}\n          >\n            <Table.Column\n              dataIndex="one"\n              title="\u9879\u76ee"\n              render={(row, col, rowIndex) => `\u9879\u76ee${rowIndex}`}\n            />\n            <Table.Column\n              dataIndex="two"\n              title="\u6570\u636e\u9879"\n              render={() => "6,534,785"}\n              onSort={() => {}}\n            />\n            <Table.Column\n              dataIndex="three"\n              title="\u6570\u636e\u9879"\n              render={() => "4,463,346"}\n            />\n          </Table>\n          <Pagination\n            align="right"\n            defaultCurrent={1}\n            pageSize={10}\n            total={99}\n            showButtonJumper\n            style={{ padding: "16px 16px 16px 0px" }}\n            disabled={loading}\n            onChange={this.handleChange}\n          />\n        </Card>\n        {/** \u8bf7\u5ffd\u7565\u8fd9\u4e2a style \u6807\u7b7e \ud83d\ude0a */}\n        <style dangerouslySetInnerHTML={{ __html: `.adui-ComponentDoc-demoWrapper { background-color: #fcfcfc; }` }} />\n      </React.Fragment>\n    )\n  }']]],meta:{order:0,title:{"zh-CN":"\u6309\u94ae\u7c7b\u578b","en-US":"Type"},filename:"components/pagination/demo/basic.md"}}}});