(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{1015:function(n,s,a){"use strict";a.r(s);var e=a(0),p=a.n(e),t=a(2),o=a.n(t),i=a(63),l=a(895),c=a.n(l),d=o.a.bind(c.a);s.default=function(){var n=p.a.useContext(i.ThemeContext);return p.a.createElement("div",{dir:"ltr",className:d("marked",n.className),dangerouslySetInnerHTML:{__html:'<h1 id="diff"><a class="anchor" aria-hidden="true" tabIndex="-1" href="#diff"><span class="icon icon-link" /></a>diff</h1><pre><code class="codeblock language-diff">Index: languages/ini.js\n===================================================================\n<span class="token coord">--- languages/ini.js    (revision 199)</span>\n<span class="token coord">+++ languages/ini.js    (revision 200)</span>\n<span class="token coord">@@ -1,8 +1,7 @@</span>\n<span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">hljs.LANGUAGES.ini =\n</span><span class="token prefix unchanged"> </span><span class="token line">{\n</span><span class="token prefix unchanged"> </span><span class="token line">  case_insensitive: true,\n</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">  defaultMode:\n</span><span class="token prefix deleted">-</span><span class="token line">  {\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">  defaultMode: {\n</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">    contains: [\'comment\', \'title\', \'setting\'],\n</span><span class="token prefix unchanged"> </span><span class="token line">    illegal: \'[^\\s]\'\n</span><span class="token prefix unchanged"> </span><span class="token line">  },\n</span></span>\n<span class="token coord">*** /path/to/original timestamp</span>\n<span class="token coord">--- /path/to/new      timestamp</span>\n<span class="token coord">***************</span>\n<span class="token coord">*** 1,3 ****</span>\n<span class="token coord">--- 1,9 ----</span>\n<span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> This is an important\n</span><span class="token prefix inserted">+</span><span class="token line"> notice! It should\n</span><span class="token prefix inserted">+</span><span class="token line"> therefore be located at\n</span><span class="token prefix inserted">+</span><span class="token line"> the beginning of this\n</span><span class="token prefix inserted">+</span><span class="token line"> document!\n</span></span>\n<span class="token diff bold"><span class="token prefix diff">!</span><span class="token line"> compress the size of the\n</span><span class="token prefix diff">!</span><span class="token line"> changes.\n</span></span>\n<span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> It is important to spell</span></span></code></pre>\n'}})}},895:function(n,s,a){n.exports={"clinical-lowlight-theme":"marked-module__clinical-lowlight-theme___1Us2w","orion-fusion-theme":"marked-module__orion-fusion-theme___2St_P",marked:"marked-module__marked___361eJ"}}}]);