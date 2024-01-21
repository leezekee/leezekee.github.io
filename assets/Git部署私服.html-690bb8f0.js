import{_ as a,r as i,o as d,c,e as t,b as e,d as s,a as l,f as o}from"./app-fe95e0bc.js";const p={},r=e("p",null,"部署git私服纯属是属觉得好玩又能配合自动打包部署，一举两得，何乐不为",-1),u=o(`<p>最早我的博客是在在用Github Pages，配合上Actions，基本每次都很方便，只管写完push一下就好了，然后他就可以自己打包然后部署</p><p>但是，有个问题，不挂梯子访问太慢了（这个问题有好多方法，比如cdn，我就是单纯想这么搞而已），于是我就把博客放到服务器上了</p><h2 id="安装git" tabindex="-1"><a class="header-anchor" href="#安装git" aria-hidden="true">#</a> 安装git</h2><p>安装很简单，具体怎么安装可以看自己的服务器用的什么包管理工具</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token function">git</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="配置用户" tabindex="-1"><a class="header-anchor" href="#配置用户" aria-hidden="true">#</a> 配置用户</h2><p>创建<code>git</code>用户组和<code>git</code>用户</p><blockquote><p>这个用户组和用户名都是随意的，你可以随便起</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 新增 git 用户组</span>
<span class="token function">groupadd</span> <span class="token function">git</span>

<span class="token comment"># 新增 git 用户并归属于 git 用户组</span>
<span class="token function">useradd</span> <span class="token function">git</span> <span class="token parameter variable">-g</span> <span class="token function">git</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="收集git公钥" tabindex="-1"><a class="header-anchor" href="#收集git公钥" aria-hidden="true">#</a> 收集git公钥</h2><p>这个也很好理解，在我们使用Github时，需要将我们生成的公钥放到网站中去，以便身份确认</p><p>同样，我们也需要这个来访问我们的git服务器</p><p>去到将我们自己电脑中的公钥复制一下，一般在<code>~/.ssh/id_rsa.pub</code>（Windows下<code>~</code>为用户目录），然后找到我们刚刚创建的用户git的目录下，将公钥复制进<code>authorized_keys</code>文件中</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 进入用户git的目录下，如果你创建的用户不叫git那就去到相应的目录下</span>
<span class="token builtin class-name">cd</span> /home/git

<span class="token comment"># 如果没有.ssh文件夹就创建</span>
<span class="token function">mkdir</span> .ssh

<span class="token comment"># 编辑authorized_keys文件</span>
<span class="token comment"># 如果没有vim就安装一下，或者使用你熟悉的编辑器打开就好</span>
<span class="token comment"># 复制公钥到文件中，如果有多个，就一行一个</span>
<span class="token function">vim</span> .ssh/authorized_keys

<span class="token comment"># 赋予文件权限</span>
<span class="token function">chmod</span> <span class="token number">744</span> .ssh/authorized_keys
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="初始化git仓库" tabindex="-1"><a class="header-anchor" href="#初始化git仓库" aria-hidden="true">#</a> 初始化Git仓库</h2><p>首先我们要找到放仓库的地方，自己定，这里我们以放在<code>/repos</code>目录下为例，假定我已经创建了目录</p><p>我们创建我们的仓库，比如仓库叫<code>sample</code>，那我们的目录名就该为<code>sample.git</code></p><p>创建出来的仓库为裸仓库，没有工作区，且服务器上的仓库均为<code>.git</code>结尾</p><p>然后将这个目录易个主，将所有者改为git</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 进入/repo目录</span>
<span class="token builtin class-name">cd</span> /repo

<span class="token comment"># 创建裸仓库</span>
<span class="token function">sudo</span> <span class="token function">git</span> init <span class="token parameter variable">--bare</span> sample.git

<span class="token comment"># 改变所有权</span>
<span class="token function">sudo</span> <span class="token function">chown</span> <span class="token parameter variable">-R</span> git:git sample.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="禁用远程登录" tabindex="-1"><a class="header-anchor" href="#禁用远程登录" aria-hidden="true">#</a> 禁用远程登录</h2><p>出于安全考虑，我们不应该让git用户登录shell</p><p>我们要编辑<code>/etc/passwd</code>文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 编辑passwd文件，和上边一样，用自己喜欢的就好</span>
<span class="token function">vim</span> /etc/passwd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>将<code>git:x:1001:1001:,,,:/home/git:/bin/bash</code>改为<code>git:x:1001:1001:,,,:/home/git:/usr/bin/git-shell</code></p><p>要说的是这里的<code>/home/git</code>应该为你实际创建的用户的用户目录，如果按照本文<a href="#%E9%85%8D%E7%BD%AE%E7%94%A8%E6%88%B7">配置用户</a>部分走的话，即用户名没有改，这里应该是<code>/home/git</code></p><p>这样git用户可以正常通过ssh使用git，却无法登录shell，因为git-shell登录一次就退出了</p><h2 id="克隆仓库" tabindex="-1"><a class="header-anchor" href="#克隆仓库" aria-hidden="true">#</a> 克隆仓库</h2><p>到此为止，你就可以在自己电脑上克隆这个仓库了</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># git clone git@你的服务器ip:git仓库地址，如</span>
<span class="token function">git</span> clone git@11.45.45.14:/repo/sample.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>然后就可以愉快的将博客仓库放到服务器上了</p>`,31),m={href:"https://www.alibabacloud.com/help/zh/ecs/use-cases/deploy-and-use-gitlab#2578472088odq",target:"_blank",rel:"noopener noreferrer"};function h(v,b){const n=i("ExternalLinkIcon");return d(),c("div",null,[r,t(" more "),u,e("p",null,[s("当然，你还可以在服务器上搭一个gitlab，可视化更方便，可以参考"),e("a",m,[s("这篇教程"),l(n)])])])}const k=a(p,[["render",h],["__file","Git部署私服.html.vue"]]);export{k as default};
