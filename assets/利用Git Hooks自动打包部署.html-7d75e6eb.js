import{_ as l,r as t,o as c,c as p,e as o,b as s,d as n,a as e,f as i}from"./app-81f005e5.js";const d={},r=s("p",null,"什么？2050年了你还在手动上传服务器然后手动打包部署？",-1),u=s("p",null,[n("接"),s("a",{href:"Git%E9%83%A8%E7%BD%B2%E7%A7%81%E6%9C%8D"},"上文"),n("，博客的仓库是搬到服务器上了，如何当一个撒手掌柜呢，让我每次写完只管push，剩下的打包自动部署自动进行呢？")],-1),v=s("p",null,"这里就要用到我们的Git Hooks",-1),m=s("h2",{id:"git-hooks",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#git-hooks","aria-hidden":"true"},"#"),n(" Git Hooks")],-1),k={href:"https://git-scm.com/book/zh/v2/%E8%87%AA%E5%AE%9A%E4%B9%89-Git-Git-%E9%92%A9%E5%AD%90",target:"_blank",rel:"noopener noreferrer"},b=i(`<p>有了这玩意，就已经成功一半了，我们不就是想让我们在push之后服务器去自动运行打包命令吗，那问题就很简单了，只需要让服务器在收到推送后进行打包即可</p><h2 id="脚本编写" tabindex="-1"><a class="header-anchor" href="#脚本编写" aria-hidden="true">#</a> 脚本编写</h2><p>Git Hooks的自定义脚本位置就在仓库的hooks目录中，服务器客户端都有</p><p>我们在找到服务器的hooks目录，将<code>post-update.sample</code>拷贝一份，重命名为<code>post-update</code>，这样服务器就会在仓库内容更新后运行该脚本</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 进入服务器的git仓库的hooks目录，这个路径只是例子，根据实际情况改变</span>
<span class="token builtin class-name">cd</span> path/to/git/repo/hooks

<span class="token comment"># 复制post-update.sample并重命名</span>
<span class="token function">cp</span> post-update.sample post-update

<span class="token comment"># 编辑post-update</span>
<span class="token function">vim</span> post-update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>具体内容很好写，我们随便找一个目录，将仓库内容clone下来，然后运行打包命令即可</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 指定了脚本要使用的解释器</span>
<span class="token comment">#!/bin/bash</span>

<span class="token comment"># 让脚本在任何命令返回非零（出现错误）时立即退出</span>
<span class="token builtin class-name">set</span> <span class="token parameter variable">-e</span>

<span class="token comment"># 取消对环境变量 GIT_DIR 的设置。</span>
<span class="token comment"># 这样做可以确保在脚本中使用的 Git 命令是基于当前工作目录的。</span>
<span class="token builtin class-name">unset</span> GIT_DIR

<span class="token comment"># 定义WORK_PATH变量，指定工作目录，即你要克隆仓库进行打包的位置</span>
<span class="token assign-left variable">WORK_PATH</span><span class="token operator">=</span><span class="token string">&#39;path/to/workspace&#39;</span>

<span class="token builtin class-name">cd</span> <span class="token variable">$WORK_PATH</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;cleaning workspace&quot;</span>

<span class="token comment"># 使用 Git 命令重置工作区，将其与远程仓库的分支保持一致。</span>
<span class="token comment"># --hard 参数表示放弃本地的修改，直接使用远程仓库的内容。</span>
<span class="token function">git</span> reset <span class="token parameter variable">--hard</span> origin/your-branch

<span class="token comment"># 清理工作区中未被 Git 管理的文件</span>
<span class="token function">git</span> clean <span class="token parameter variable">-f</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;pulling code&quot;</span>

<span class="token comment"># 拉取远程仓库代码</span>
<span class="token function">git</span> pull origin your-branch

<span class="token builtin class-name">echo</span> <span class="token string">&quot;building...&quot;</span>

<span class="token comment"># 运行打包命令，这里用的vuepress打包命令为npm run docs:build，根据自己的更改</span>
<span class="token function">npm</span> run docs:build

<span class="token builtin class-name">echo</span> <span class="token string">&quot;deploy done&quot;</span>                                   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>按理说，这个应该是正常运行的</p><p>但是，我这边总是在push以后会卡住没有反应，卡在building的步骤，我以为是我本地的问题，找了一圈发现，服务器一运行打包命令就死机</p><p>好家伙，没辙了，这个方法看来是走不通了，只能想别的办法了</p><h2 id="husky" tabindex="-1"><a class="header-anchor" href="#husky" aria-hidden="true">#</a> Husky</h2>`,11),h={href:"https://github.com/typicode/husky",target:"_blank",rel:"noopener noreferrer"},g=i(`<p>什么是Husky</p><p>官网是这么解释的</p><p>Modern native git hooks made easy</p><p>Husky improves your commits and more 🐶 woof!</p><p>通俗点说</p><p>他可以让我们很轻松地使用Git Hooks，在提交代码时运行我们想要的脚本。</p><p>我看了好多例子都是用来做代码质量检测的，像我这种一个人写的屎山就不需要了（bushi</p><p>它的工作原理是在我们的 package.json 文件中加入一个对象，配置 Husky 来运行我们指定的脚本。之后，Husky会管理我们的脚本将在Git生命周期的哪个阶段运行。</p><p>我们首先安装Husky</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> husky
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>新版本的Husky中我们不用在<code>package.json</code>配置，而是在<code>.husky</code>目录下配置</p><p>我们首先需要在<code>package.json</code>中的<code>scripts</code>中添加<code>prepare</code>脚本</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prepare&quot;</span><span class="token operator">:</span> <span class="token string">&quot;husky install&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>prepare</code>脚本会在<code>npm install</code>之后自动执行。也就是说当我们执行<code>npm install</code>安装完项目依赖后会执行<code>husky install</code>命令，该命令会创建<code>.husky</code>目录并指定该目录为git hooks所在的目录。</p><p>然后添加git hooks</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># npx husky add .husky/pre-commit \\</span>
<span class="token comment"># &quot;echo [Husky] project building \\</span>
<span class="token comment"># &amp;&amp; 打包命令 \\</span>
<span class="token comment"># &amp;&amp; 将打包后的文件夹添加的暂存区“</span>
<span class="token comment"># 如</span>
npx husky <span class="token function">add</span> .husky/pre-commit <span class="token string">&quot;echo [Husky] project building \\
&amp;&amp; npm run docs:build \\
&amp;&amp; git add src/.vuepress/dist -f&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后你就能看到<code>.husky</code>目录下多了一个<code>pre-commit</code>的脚本</p><p>内容如下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env sh</span>
<span class="token builtin class-name">.</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">dirname</span> -- <span class="token string">&quot;<span class="token variable">$0</span>&quot;</span><span class="token variable">)</span></span>/_/husky.sh&quot;</span>

<span class="token builtin class-name">echo</span> <span class="token punctuation">[</span>Husky<span class="token punctuation">]</span> project building <span class="token operator">&amp;&amp;</span> <span class="token function">npm</span> run docs:build <span class="token operator">&amp;&amp;</span> <span class="token function">git</span> <span class="token function">add</span> src/.vuepress/dist <span class="token parameter variable">-f</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在每次git commit之前都会运行这个脚本，然后将打包完成的代码一块提交给服务器，虽然每次commit都要等一下，但总比服务器死机强多了</p><p>这时候我们就要改一下服务器那边的<code>post-update</code>脚本了</p><p>我们只需要在收到更新后直接将仓库克隆下来就好</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token builtin class-name">set</span> <span class="token parameter variable">-e</span>
<span class="token builtin class-name">unset</span> GIT_DIR
<span class="token assign-left variable">WORK_PATH</span><span class="token operator">=</span><span class="token string">&#39;path/to/workspace&#39;</span>

<span class="token builtin class-name">cd</span> <span class="token variable">$WORK_PATH</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;cleaning workspace&quot;</span>
<span class="token function">git</span> reset <span class="token parameter variable">--hard</span> origin/your-branch
<span class="token function">git</span> clean <span class="token parameter variable">-f</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;pulling code&quot;</span>
<span class="token function">git</span> pull origin your-branch

<span class="token comment"># 跟上边差别不大，只是不用打包了而已，根据nginx的配置，你可以在这里进行一下拷贝操作</span>
<span class="token comment"># 例如：</span>
<span class="token comment"># cp ./src/.vuepress/dist /www/blog</span>
<span class="token comment"># echo &quot;building...&quot;</span>
<span class="token comment"># npm run docs:build</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;deploy done&quot;</span>                                   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nginx配置" tabindex="-1"><a class="header-anchor" href="#nginx配置" aria-hidden="true">#</a> Nginx配置</h2><p>顺带一下一份nginx的配置，懒得写注释了，应该都挺好理解的，不懂的搜一下就好了</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>    
    <span class="token directive"><span class="token keyword">listen</span> <span class="token number">443</span> ssl</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span> your.domain</span><span class="token punctuation">;</span> 

    <span class="token directive"><span class="token keyword">ssl_certificate</span> path/to/your/cert</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">ssl_certificate_key</span> path/to/your/cert/key</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">ssl_session_timeout</span> <span class="token number">5m</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">ssl_protocols</span> TLSv1 TLSv1.1 TLSv1.2</span><span class="token punctuation">;</span> 
    <span class="token directive"><span class="token keyword">ssl_ciphers</span> ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE</span><span class="token punctuation">;</span> 
    <span class="token directive"><span class="token keyword">ssl_prefer_server_ciphers</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">root</span> path/to/your/dist/folder</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">index</span> index.html</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span> your.domain</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">rewrite</span> ^(.*)$ https://<span class="token variable">$host</span><span class="token variable">$1</span> permanent</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26);function _(y,f){const a=t("ExternalLinkIcon");return c(),p("div",null,[r,o(" more "),u,v,m,s("p",null,[n("首先我们先了解一下Git Hooks，看"),s("a",k,[n("官网"),e(a)]),n("的解释就好了，简单点说，就是在git的工作流程中分为几个关键的时间节点，也就是钩子，在到达时间节点时，git会执行对应的自定义脚本")]),b,s("p",null,[n("想了很多方法，也看了很多文章，首先在客户端用git hooks在提交前打包是百分百可行的，但是我发现了更简单的方法，使用"),s("a",h,[n("Husky"),e(a)])]),g])}const q=l(d,[["render",_],["__file","利用Git Hooks自动打包部署.html.vue"]]);export{q as default};
