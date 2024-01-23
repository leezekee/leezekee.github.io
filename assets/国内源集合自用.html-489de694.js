import{_ as i,r,o as d,c,e as l,b as n,d as e,a as s,f as t}from"./app-81f005e5.js";const u={},o=n("p",null,"经常换源也记不住网址，就索性做个大合集，持续更新",-1),m=t(`<h2 id="npm镜像源" tabindex="-1"><a class="header-anchor" href="#npm镜像源" aria-hidden="true">#</a> npm镜像源</h2><h3 id="淘宝" tabindex="-1"><a class="header-anchor" href="#淘宝" aria-hidden="true">#</a> 淘宝</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npmmirror.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="腾讯" tabindex="-1"><a class="header-anchor" href="#腾讯" aria-hidden="true">#</a> 腾讯</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry http://mirrors.cloud.tencent.com/npm/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="华为" tabindex="-1"><a class="header-anchor" href="#华为" aria-hidden="true">#</a> 华为</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://mirrors.huaweicloud.com/repository/npm/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="cnpm" tabindex="-1"><a class="header-anchor" href="#cnpm" aria-hidden="true">#</a> cnpm</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> cnpm <span class="token parameter variable">--registry</span><span class="token operator">=</span>https://registry.npmmirror.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="官方" tabindex="-1"><a class="header-anchor" href="#官方" aria-hidden="true">#</a> 官方</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npmjs.org/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="pip镜像源" tabindex="-1"><a class="header-anchor" href="#pip镜像源" aria-hidden="true">#</a> pip镜像源</h2><h3 id="清华" tabindex="-1"><a class="header-anchor" href="#清华" aria-hidden="true">#</a> 清华</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pip config <span class="token builtin class-name">set</span> global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="中科大" tabindex="-1"><a class="header-anchor" href="#中科大" aria-hidden="true">#</a> 中科大</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pip config <span class="token builtin class-name">set</span> global.index-url https://pypi.mirrors.ustc.edu.cn/simple
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="豆瓣" tabindex="-1"><a class="header-anchor" href="#豆瓣" aria-hidden="true">#</a> 豆瓣</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pip config <span class="token builtin class-name">set</span> global.index-url http://pypi.douban.com/simple/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="阿里云" tabindex="-1"><a class="header-anchor" href="#阿里云" aria-hidden="true">#</a> 阿里云</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pip config <span class="token builtin class-name">set</span> global.index-url http://mirrors.aliyun.com/pypi/simple/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="网易" tabindex="-1"><a class="header-anchor" href="#网易" aria-hidden="true">#</a> 网易</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pip config <span class="token builtin class-name">set</span> global.index-url https://mirrors.163.com/pypi/simple/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="conda镜像源" tabindex="-1"><a class="header-anchor" href="#conda镜像源" aria-hidden="true">#</a> conda镜像源</h2><h3 id="清华-1" tabindex="-1"><a class="header-anchor" href="#清华-1" aria-hidden="true">#</a> 清华</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>conda config <span class="token parameter variable">--add</span> channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/
conda config <span class="token parameter variable">--add</span> channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main/
conda config <span class="token parameter variable">--add</span> channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/pytorch/
conda config <span class="token parameter variable">--add</span> channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/pytorch/linux-64/
conda config <span class="token parameter variable">--set</span> show_channel_urls <span class="token function">yes</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="北外" tabindex="-1"><a class="header-anchor" href="#北外" aria-hidden="true">#</a> 北外</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>conda config <span class="token parameter variable">--add</span> channels https://mirrors.bfsu.edu.cn/anaconda/pkgs/free/
conda config <span class="token parameter variable">--add</span> channels https://mirrors.bfsu.edu.cn/anaconda/pkgs/main/
<span class="token comment">#Conda Forge</span>
conda config <span class="token parameter variable">--add</span> channels https://mirrors.bfsu.edu.cn/anaconda/cloud/conda-forge/
<span class="token comment">#msys2（可略）</span>
conda config <span class="token parameter variable">--add</span> channels https://mirrors.bfsu.edu.cn/anaconda/cloud/msys2/
<span class="token comment">#bioconda（可略）</span>
conda config <span class="token parameter variable">--add</span> channels https://mirrors.bfsu.edu.cn/anaconda/cloud/bioconda/
<span class="token comment">#menpo（可略）</span>
conda config <span class="token parameter variable">--add</span> channels https://mirrors.bfsu.edu.cn/anaconda/cloud/menpo/
<span class="token comment">#pytorch</span>
conda config <span class="token parameter variable">--add</span> channels https://mirrors.bfsu.edu.cn/anaconda/cloud/pytorch/
<span class="token comment"># for legacy win-64（可略）</span>
conda config <span class="token parameter variable">--add</span> channels https://mirrors.bfsu.edu.cn/anaconda/cloud/peterjc123/
conda config <span class="token parameter variable">--set</span> show_channel_urls <span class="token function">yes</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="阿里云-1" tabindex="-1"><a class="header-anchor" href="#阿里云-1" aria-hidden="true">#</a> 阿里云</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>conda config <span class="token parameter variable">--add</span> channels https://mirrors.aliyun.com/anaconda/pkgs/free
conda config <span class="token parameter variable">--add</span> channels https://mirrors.aliyun.com/anaconda/pkgs/main
conda config <span class="token parameter variable">--add</span> channels https://mirrors.aliyun.com/anaconda/pkgs/msys2
conda config <span class="token parameter variable">--add</span> channels https://mirrors.aliyun.com/anaconda/pkgs/r
conda config <span class="token parameter variable">--add</span> channels https://mirrors.aliyun.com/anaconda/cloud/Paddle
conda config <span class="token parameter variable">--add</span> channels https://mirrors.aliyun.com/anaconda/cloud/auto
conda config <span class="token parameter variable">--add</span> channels https://mirrors.aliyun.com/anaconda/cloud/biobakery
conda config <span class="token parameter variable">--add</span> channels https://mirrors.aliyun.com/anaconda/cloud/bioconda
conda config <span class="token parameter variable">--add</span> channels https://mirrors.aliyun.com/anaconda/cloud/c4aarch64
conda config <span class="token parameter variable">--add</span> channels https://mirrors.aliyun.com/anaconda/cloud/caffe2
conda config <span class="token parameter variable">--add</span> channels https://mirrors.aliyun.com/anaconda/cloud/conda-forge
conda config <span class="token parameter variable">--add</span> channels https://mirrors.aliyun.com/anaconda/cloud/deepmodeling
conda config <span class="token parameter variable">--add</span> channels https://mirrors.aliyun.com/anaconda/cloud/dglteam
conda config <span class="token parameter variable">--add</span> channels https://mirrors.aliyun.com/anaconda/cloud/fastai
conda config <span class="token parameter variable">--add</span> channels https://mirrors.aliyun.com/anaconda/cloud/fermi
conda config <span class="token parameter variable">--add</span> channels https://mirrors.aliyun.com/anaconda/cloud/idaholab
conda config <span class="token parameter variable">--add</span> channels https://mirrors.aliyun.com/anaconda/cloud/intel
conda config <span class="token parameter variable">--add</span> channels https://mirrors.aliyun.com/anaconda/cloud/matsci
conda config <span class="token parameter variable">--add</span> channels https://mirrors.aliyun.com/anaconda/cloud/menpo
conda config <span class="token parameter variable">--add</span> channels https://mirrors.aliyun.com/anaconda/cloud/mordred-descriptor
conda config <span class="token parameter variable">--add</span> channels https://mirrors.aliyun.com/anaconda/cloud/msys2
conda config <span class="token parameter variable">--add</span> channels https://mirrors.aliyun.com/anaconda/cloud/numba
conda config <span class="token parameter variable">--add</span> channels https://mirrors.aliyun.com/anaconda/cloud/ohmeta
conda config <span class="token parameter variable">--add</span> channels https://mirrors.aliyun.com/anaconda/cloud/omnia
conda config <span class="token parameter variable">--add</span> channels https://mirrors.aliyun.com/anaconda/cloud/plotly
conda config <span class="token parameter variable">--add</span> channels https://mirrors.aliyun.com/anaconda/cloud/psi4
conda config <span class="token parameter variable">--add</span> channels https://mirrors.aliyun.com/anaconda/cloud/pytorch
conda config <span class="token parameter variable">--add</span> channels https://mirrors.aliyun.com/anaconda/cloud/pytorch-test
conda config <span class="token parameter variable">--add</span> channels https://mirrors.aliyun.com/anaconda/cloud/pytorch3d
conda config <span class="token parameter variable">--add</span> channels https://mirrors.aliyun.com/anaconda/cloud/pyviz
conda config <span class="token parameter variable">--add</span> channels https://mirrors.aliyun.com/anaconda/cloud/qiime2
conda config <span class="token parameter variable">--add</span> channels https://mirrors.aliyun.com/anaconda/cloud/rapidsai
conda config <span class="token parameter variable">--add</span> channels https://mirrors.aliyun.com/anaconda/cloud/rdkit
conda config <span class="token parameter variable">--add</span> channels https://mirrors.aliyun.com/anaconda/cloud/simpleitk
conda config <span class="token parameter variable">--add</span> channels https://mirrors.aliyun.com/anaconda/cloud/stackless
conda config <span class="token parameter variable">--add</span> channels https://mirrors.aliyun.com/anaconda/cloud/ursky
conda config <span class="token parameter variable">--set</span> show_channel_urls <span class="token function">yes</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cargo镜像源" tabindex="-1"><a class="header-anchor" href="#cargo镜像源" aria-hidden="true">#</a> cargo镜像源</h2><p>打开配置文件，没有就创建</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> ~/.cargo/config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-~/.cargo/config line-numbers-mode" data-ext="~/.cargo/config"><pre class="language-~/.cargo/config"><code>[source.crates-io]
registry = &quot;https://github.com/rust-lang/crates.io-index&quot;
# 指定镜像
replace-with = &#39;tuna&#39; # 如：tuna、sjtu、ustc，或者 rustcc

# 任选其一即可，上边的replace-with要同步更改
# 中科大
[source.ustc]
registry = &quot;https://mirrors.ustc.edu.cn/crates.io-index&quot;
registry = &quot;git://mirrors.ustc.edu.cn/crates.io-index&quot;

# 上交
[source.sjtu]
registry = &quot;https://mirrors.sjtug.sjtu.edu.cn/git/crates.io-index/&quot;

# 清华
[source.tuna]
registry = &quot;https://mirrors.tuna.tsinghua.edu.cn/git/crates.io-index.git&quot;

# rustcc
[source.rustcc]
registry = &quot;https://code.aliyun.com/rustcc/crates.io-index.git&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="apt镜像源" tabindex="-1"><a class="header-anchor" href="#apt镜像源" aria-hidden="true">#</a> apt镜像源</h2><p>打开配置文件，记得备份一下旧的</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cp</span> /etc/apt/source.list /etc/apt/source.list.bak
<span class="token function">vim</span> /etc/apt/source.list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="阿里" tabindex="-1"><a class="header-anchor" href="#阿里" aria-hidden="true">#</a> 阿里</h3><h4 id="ubuntu-18-04-lts-bionic" tabindex="-1"><a class="header-anchor" href="#ubuntu-18-04-lts-bionic" aria-hidden="true">#</a> ubuntu 18.04 LTS (bionic)</h4><div class="language-/etc/apt/source.list line-numbers-mode" data-ext="/etc/apt/source.list"><pre class="language-/etc/apt/source.list"><code>deb https://mirrors.aliyun.com/ubuntu/ bionic main restricted universe multiverse
deb-src https://mirrors.aliyun.com/ubuntu/ bionic main restricted universe multiverse

deb https://mirrors.aliyun.com/ubuntu/ bionic-security main restricted universe multiverse
deb-src https://mirrors.aliyun.com/ubuntu/ bionic-security main restricted universe multiverse

deb https://mirrors.aliyun.com/ubuntu/ bionic-updates main restricted universe multiverse
deb-src https://mirrors.aliyun.com/ubuntu/ bionic-updates main restricted universe multiverse

# deb https://mirrors.aliyun.com/ubuntu/ bionic-proposed main restricted universe multiverse
# deb-src https://mirrors.aliyun.com/ubuntu/ bionic-proposed main restricted universe multiverse

deb https://mirrors.aliyun.com/ubuntu/ bionic-backports main restricted universe multiverse
deb-src https://mirrors.aliyun.com/ubuntu/ bionic-backports main restricted universe multiverse
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="ubuntu-20-04-lts-focal" tabindex="-1"><a class="header-anchor" href="#ubuntu-20-04-lts-focal" aria-hidden="true">#</a> ubuntu 20.04 LTS (focal)</h4><div class="language-/etc/apt/source.list line-numbers-mode" data-ext="/etc/apt/source.list"><pre class="language-/etc/apt/source.list"><code>deb https://mirrors.aliyun.com/ubuntu/ focal main restricted universe multiverse
deb-src https://mirrors.aliyun.com/ubuntu/ focal main restricted universe multiverse

deb https://mirrors.aliyun.com/ubuntu/ focal-security main restricted universe multiverse
deb-src https://mirrors.aliyun.com/ubuntu/ focal-security main restricted universe multiverse

deb https://mirrors.aliyun.com/ubuntu/ focal-updates main restricted universe multiverse
deb-src https://mirrors.aliyun.com/ubuntu/ focal-updates main restricted universe multiverse

# deb https://mirrors.aliyun.com/ubuntu/ focal-proposed main restricted universe multiverse
# deb-src https://mirrors.aliyun.com/ubuntu/ focal-proposed main restricted universe multiverse

deb https://mirrors.aliyun.com/ubuntu/ focal-backports main restricted universe multiverse
deb-src https://mirrors.aliyun.com/ubuntu/ focal-backports main restricted universe multiverse
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="ubuntu-22-04-lts-jammy" tabindex="-1"><a class="header-anchor" href="#ubuntu-22-04-lts-jammy" aria-hidden="true">#</a> ubuntu 22.04 LTS (jammy)</h4><div class="language-/etc/apt/source.list line-numbers-mode" data-ext="/etc/apt/source.list"><pre class="language-/etc/apt/source.list"><code>deb https://mirrors.aliyun.com/ubuntu/ jammy main restricted universe multiverse
deb-src https://mirrors.aliyun.com/ubuntu/ jammy main restricted universe multiverse

deb https://mirrors.aliyun.com/ubuntu/ jammy-security main restricted universe multiverse
deb-src https://mirrors.aliyun.com/ubuntu/ jammy-security main restricted universe multiverse

deb https://mirrors.aliyun.com/ubuntu/ jammy-updates main restricted universe multiverse
deb-src https://mirrors.aliyun.com/ubuntu/ jammy-updates main restricted universe multiverse

# deb https://mirrors.aliyun.com/ubuntu/ jammy-proposed main restricted universe multiverse
# deb-src https://mirrors.aliyun.com/ubuntu/ jammy-proposed main restricted universe multiverse

deb https://mirrors.aliyun.com/ubuntu/ jammy-backports main restricted universe multiverse
deb-src https://mirrors.aliyun.com/ubuntu/ jammy-backports main restricted universe multiverse
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ubuntu-23-04-lunar" tabindex="-1"><a class="header-anchor" href="#ubuntu-23-04-lunar" aria-hidden="true">#</a> ubuntu 23.04 (lunar)</h3><div class="language-/etc/apt/source.list line-numbers-mode" data-ext="/etc/apt/source.list"><pre class="language-/etc/apt/source.list"><code>deb https://mirrors.aliyun.com/ubuntu/ lunar main restricted universe multiverse
deb-src https://mirrors.aliyun.com/ubuntu/ lunar main restricted universe multiverse

deb https://mirrors.aliyun.com/ubuntu/ lunar-security main restricted universe multiverse
deb-src https://mirrors.aliyun.com/ubuntu/ lunar-security main restricted universe multiverse

deb https://mirrors.aliyun.com/ubuntu/ lunar-updates main restricted universe multiverse
deb-src https://mirrors.aliyun.com/ubuntu/ lunar-updates main restricted universe multiverse

# deb https://mirrors.aliyun.com/ubuntu/ lunar-proposed main restricted universe multiverse
# deb-src https://mirrors.aliyun.com/ubuntu/ lunar-proposed main restricted universe multiverse

deb https://mirrors.aliyun.com/ubuntu/ lunar-backports main restricted universe multiverse
deb-src https://mirrors.aliyun.com/ubuntu/ lunar-backports main restricted universe multiverse
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ubuntu-24-04-noble" tabindex="-1"><a class="header-anchor" href="#ubuntu-24-04-noble" aria-hidden="true">#</a> ubuntu 24.04 (noble)</h3><div class="language-/etc/apt/source.list line-numbers-mode" data-ext="/etc/apt/source.list"><pre class="language-/etc/apt/source.list"><code>deb https://mirrors.aliyun.com/ubuntu/ noble main restricted universe multiverse
deb-src https://mirrors.aliyun.com/ubuntu/ noble main restricted universe multiverse

deb https://mirrors.aliyun.com/ubuntu/ noble-security main restricted universe multiverse
deb-src https://mirrors.aliyun.com/ubuntu/ noble-security main restricted universe multiverse

deb https://mirrors.aliyun.com/ubuntu/ noble-updates main restricted universe multiverse
deb-src https://mirrors.aliyun.com/ubuntu/ noble-updates main restricted universe multiverse

# deb https://mirrors.aliyun.com/ubuntu/ noble-proposed main restricted universe multiverse
# deb-src https://mirrors.aliyun.com/ubuntu/ noble-proposed main restricted universe multiverse

deb https://mirrors.aliyun.com/ubuntu/ noble-backports main restricted universe multiverse
deb-src https://mirrors.aliyun.com/ubuntu/ noble-backports main restricted universe multiverse
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,47),v={href:"https://developer.aliyun.com/mirror/ubuntu?spm=a2c6h.13651102.0.0.3e221b11y2rvvL",target:"_blank",rel:"noopener noreferrer"},p=n("h3",{id:"清华-2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#清华-2","aria-hidden":"true"},"#"),e(" 清华")],-1),b={href:"https://mirrors.tuna.tsinghua.edu.cn/help/ubuntu/",target:"_blank",rel:"noopener noreferrer"},h=n("h2",{id:"系统镜像站",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#系统镜像站","aria-hidden":"true"},"#"),e(" 系统镜像站")],-1),g=n("h3",{id:"windows相关",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#windows相关","aria-hidden":"true"},"#"),e(" Windows相关")],-1),f={href:"https://msdn.itellyou.cn/",target:"_blank",rel:"noopener noreferrer"},y={href:"https://next.itellyou.cn/",target:"_blank",rel:"noopener noreferrer"},k=n("h3",{id:"linux相关",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#linux相关","aria-hidden":"true"},"#"),e(" Linux相关")],-1),x=n("h4",{id:"ubuntu",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#ubuntu","aria-hidden":"true"},"#"),e(" Ubuntu")],-1),_={href:"https://cn.ubuntu.com/download",target:"_blank",rel:"noopener noreferrer"},j={href:"https://mirrors.aliyun.com/ubuntu-releases/",target:"_blank",rel:"noopener noreferrer"},w={href:"https://mirrors.tuna.tsinghua.edu.cn/ubuntu-releases/",target:"_blank",rel:"noopener noreferrer"},q=n("h4",{id:"centos",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#centos","aria-hidden":"true"},"#"),e(" CentOS")],-1),L={href:"https://www.centos.org/download/",target:"_blank",rel:"noopener noreferrer"},N={href:"https://mirrors.aliyun.com/centos/",target:"_blank",rel:"noopener noreferrer"},S={href:"https://mirrors.tuna.tsinghua.edu.cn/centos/",target:"_blank",rel:"noopener noreferrer"};function V(C,T){const a=r("ExternalLinkIcon");return d(),c("div",null,[o,l(" more "),m,n("blockquote",null,[n("p",null,[e("其余的在"),n("a",v,[e("这里"),s(a)])])]),p,n("p",null,[n("a",b,[e("Ubuntu 软件仓库"),s(a)])]),h,g,n("ul",null,[n("li",null,[n("a",f,[e("MSDN(老版)"),s(a)])]),n("li",null,[n("a",y,[e("MSDN(新版)"),s(a)])])]),k,x,n("ul",null,[n("li",null,[n("a",_,[e("官方"),s(a)])]),n("li",null,[n("a",j,[e("阿里"),s(a)])]),n("li",null,[n("a",w,[e("清华"),s(a)])])]),q,n("ul",null,[n("li",null,[n("a",L,[e("官方"),s(a)])]),n("li",null,[n("a",N,[e("阿里"),s(a)])]),n("li",null,[n("a",S,[e("清华"),s(a)])])])])}const E=i(u,[["render",V],["__file","国内源集合自用.html.vue"]]);export{E as default};
