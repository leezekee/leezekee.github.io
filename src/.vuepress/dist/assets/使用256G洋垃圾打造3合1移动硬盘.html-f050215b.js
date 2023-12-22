import{_ as p,r as e,o as i,c as u,d as l,a as n,b as s,e as t,f as o}from"./app-3507e81c.js";const c={},r=n("p",null,[s("某天刷视频刷到用U盘打造多合一多功能U盘，突发奇想，去咸鱼捡了一块256G的2230硬盘，又上pdd买了一个2230硬盘盒，准备搞一个包含了Windows TOGO、Linux TOGO的一个启动盘，写这篇文章就是为了记录下过程，以供以后参考（"),n("s",null,"我太清楚我的记忆能力了，不过十天保准忘的干干净净"),s("）")],-1),d=n("h2",{id:"准备",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#准备","aria-hidden":"true"},"#"),s(" 准备")],-1),k={href:"https://blog.upx8.com/2477",target:"_blank",rel:"noopener noreferrer"},v=n("li",null,"任意linux发行版，我这里用的是Ubuntu22.04",-1),q={href:"https://bbs.luobotou.org/forum.php?mod=viewthread&tid=6098",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.virtualbox.org/wiki/Downloads",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.ventoy.net/cn/download.html",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/ventoy/vhdiso/releases",target:"_blank",rel:"noopener noreferrer"},y={href:"https://github.com/ventoy/vtoyboot/releases",target:"_blank",rel:"noopener noreferrer"},_=o('<h2 id="windows-to-go" tabindex="-1"><a class="header-anchor" href="#windows-to-go" aria-hidden="true">#</a> Windows To Go</h2><p>首先打开WTG辅助工具，选择镜像路径，再选择安装的位置，一定看准硬盘是不是要安装的那一块</p><p>然后可以按照如图配置</p><figure><img src="https://image.zekee.top/blog/20231102233852.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>这里的屏蔽本机磁盘我没有开启，开启之后在wintogo中就没办法看到本机的其他磁盘的内容了</p></blockquote><figure><img src="https://image.zekee.top/blog/20231102234312.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>我的硬盘是256G的，所以我分了100G给了wintogo这里因人而异，但也不建议小于60G</p></blockquote>',7),h={href:"https://bbs.luobotou.org/forum.php?mod=viewthread&tid=6098",target:"_blank",rel:"noopener noreferrer"},f=o('<p>完成后重启，选择从这块硬盘启动并完成wintogo的初始化，这步一定要有，否则会系统无法启动</p><p>之后将硬盘中的wtg.vhdx拷贝出来备用</p><h2 id="linux-to-go" tabindex="-1"><a class="header-anchor" href="#linux-to-go" aria-hidden="true">#</a> Linux To go</h2><p>打开VirtualBox，新建虚拟机</p><p>文件夹改为你要放虚拟机信息的地址，虚拟光盘设为系统镜像文件</p><figure><img src="https://image.zekee.top/blog/20231102235358.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>这里一定要启用EFI</p><figure><img src="https://image.zekee.top/blog/20231102235527.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>选择一个保存vdi的位置，这个要记好，然后大小看自己，一般为40G，当然你要空间比较大，随意就好，一定要选上预先分配全部空间</p><figure><img src="https://image.zekee.top/blog/20231102235701.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',10),w=n("code",null,"vtoyboot.iso",-1),x={href:"https://blog.csdn.net/qq997404392/article/details/79611606",target:"_blank",rel:"noopener noreferrer"},O={href:"https://zhuanlan.zhihu.com/p/389629976",target:"_blank",rel:"noopener noreferrer"},T=n("p",null,[s("然后在虚拟机中解压得到"),n("code",null,"vtoyboot.sh"),s("，使用命令"),n("code",null,"sudo bash vtoyboot.sh"),s("即可，执行成功后关机")],-1),E={href:"https://blog.csdn.net/qq_44073614/article/details/125678356",target:"_blank",rel:"noopener noreferrer"},G=o('<p>然后找到你的vdi保存位置，建议备份一下，然后将文件后缀名改为<code>.vtoy</code>，这里推荐直接在后边加<code>.vtoy</code>，如<code>xxx.vdi.vtoy</code>，备用</p><h2 id="ventoy" tabindex="-1"><a class="header-anchor" href="#ventoy" aria-hidden="true">#</a> Ventoy</h2><p>首先将U盘格式化为NTFS格式，打开Ventoy2Disk</p><figure><img src="https://image.zekee.top/blog/20231103001437.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>选择设备后直接安装即可</p><p>至此，所有准备工作都以完成，现在来完成最终的配置</p><h2 id="最终配置" tabindex="-1"><a class="header-anchor" href="#最终配置" aria-hidden="true">#</a> 最终配置</h2>',7),V={href:"https://www.ventoy.net/cn/doc_news.html",target:"_blank",rel:"noopener noreferrer"},z=o(`<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token comment">// Ventoy基本配置</span>
    <span class="token property">&quot;control&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span> <span class="token property">&quot;VTOY_DEFAULT_MENU_MODE&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token property">&quot;VTOY_TREE_VIEW_MENU_STYLE&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token property">&quot;VTOY_FILE_FLT_EFI&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token property">&quot;VTOY_MENU_TIMEOUT&quot;</span><span class="token operator">:</span> <span class="token string">&quot;30&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token property">&quot;VTOY_SECONDARY_TIMEOUT&quot;</span><span class="token operator">:</span> <span class="token string">&quot;20&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token property">&quot;VTOY_MENU_LANGUAGE&quot;</span><span class="token operator">:</span> <span class="token string">&quot;zh_CN&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token property">&quot;VTOY_DEFAULT_SEARCH_ROOT&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/images&quot;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 主题，各种主题可以在https://www.gnome-look.org/browse?cat=109&amp;tag=ventoy这里下载</span>
    <span class="token comment">// 下载完之后放到 U盘里即可，具体下边的路径就根据自己的来写，反正是找到themem.txt文件就行</span>
    <span class="token comment">// 这里的默认根路径是 &#39;/&#39;，即 U盘根目录</span>
    <span class="token property">&quot;theme&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;file&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/ventoy/themes/bigsur/theme.txt&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;gfxmode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1920x1080&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;ventoy_color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#eff0f1&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;fonts&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
            <span class="token string">&quot;/ventoy/themes/bigsur/terminus-12.pf2&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;/ventoy/themes/bigsur/terminus-14.pf2&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;/ventoy/themes/bigsur/terminus-16.pf2&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;/ventoy/themes/bigsur/DejaVuSans-48.pf2&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;/ventoy/themes/bigsur/DejaVuSans-Regular-14.pf2&quot;</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 镜像目录，也就是你能看到的，这个顺序无所谓，启动时会按字母顺序升序显示</span>
    <span class="token property">&quot;menu_alias&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/images/WinTOGO.vhdx&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;alias&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Windows10 TOGO&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/images/Edgeless_Beta_4.1.0.iso&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;alias&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Edgeless&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/images/zh-cn_windows_10_consumer_editions_version_22h2_updated_july_2023_x64_dvd_0ee9325c.iso&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;alias&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Windows 10&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/images/zh-cn_windows_11_consumer_editions_version_22h2_updated_july_2023_x64_dvd_f69501d4.iso&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;alias&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Windows 11&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/images/CentOS-8.1.1911-x86_64-dvd1.iso&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;alias&quot;</span><span class="token operator">:</span> <span class="token string">&quot;CentOS 8&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/images/ubuntu-22.04.2-desktop-amd64.iso&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;alias&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Ubuntu 22.04&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/images/archlinux-2023.08.01-x86_64.iso&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;alias&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Arch Linux&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/images/kali-linux-2023.2a-installer-amd64.iso&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;alias&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Kali Linux&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/images/UbuntuTOGO.vdi.vtoy&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;alias&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Ubuntu 22.04 TOGO&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 分类，主要是用于图标的显示，他会从上到下匹配key，如果匹配到就会把这个镜像归为这个类</span>
    <span class="token comment">// 匹配用的主要是上边的alias</span>
    <span class="token comment">// 具体匹配可以看这里https://www.ventoy.net/cn/plugin_menuclass.html</span>
    <span class="token property">&quot;menu_class&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;kubuntu&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;class&quot;</span><span class="token operator">:</span> <span class="token string">&quot;kubuntu&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ubuntu&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;class&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ubuntu&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;UbuntuTOGO&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;class&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ubuntu&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pop-os&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;class&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pop-os&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;arch&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;class&quot;</span><span class="token operator">:</span> <span class="token string">&quot;arch&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;linuxmint&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;class&quot;</span><span class="token operator">:</span> <span class="token string">&quot;linuxmint&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;opensuse&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;class&quot;</span><span class="token operator">:</span> <span class="token string">&quot;opensuse&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;elementary&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;class&quot;</span><span class="token operator">:</span> <span class="token string">&quot;elementary&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;manjaro&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;class&quot;</span><span class="token operator">:</span> <span class="token string">&quot;manjaro&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;debian&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;class&quot;</span><span class="token operator">:</span> <span class="token string">&quot;debian&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;deepin&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;class&quot;</span><span class="token operator">:</span> <span class="token string">&quot;deepin&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;solus&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;class&quot;</span><span class="token operator">:</span> <span class="token string">&quot;solus&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;zorin-os&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;class&quot;</span><span class="token operator">:</span> <span class="token string">&quot;zorin-os&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;windows&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;class&quot;</span><span class="token operator">:</span> <span class="token string">&quot;windows&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hirens&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;class&quot;</span><span class="token operator">:</span> <span class="token string">&quot;windows&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;win&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;class&quot;</span><span class="token operator">:</span> <span class="token string">&quot;windows&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Windows10 TOGO&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;class&quot;</span><span class="token operator">:</span> <span class="token string">&quot;windows&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;WinTOGO&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;class&quot;</span><span class="token operator">:</span> <span class="token string">&quot;windows&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;kali-linux&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;class&quot;</span><span class="token operator">:</span> <span class="token string">&quot;kali&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Edgeless&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;class&quot;</span><span class="token operator">:</span> <span class="token string">&quot;windows&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;CentOS-8.1.1911&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;class&quot;</span><span class="token operator">:</span> <span class="token string">&quot;gnu-linux&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;iso&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;class&quot;</span><span class="token operator">:</span> <span class="token string">&quot;iso&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function U(N,W){const a=e("ExternalLinkIcon");return i(),u("div",null,[r,l(" more "),d,n("ol",null,[n("li",null,[s("Win10或Win11镜像，这里推荐精简版的，win10精简版可以到"),n("a",k,[s("这里"),t(a)]),s("下载")]),v,n("li",null,[n("a",q,[s("WTG辅助工具"),t(a)])]),n("li",null,[n("a",m,[s("VirtualBox"),t(a)])]),n("li",null,[n("a",b,[s("Ventoy安装程序"),t(a)])]),n("li",null,[n("a",g,[s("vhdboot"),t(a)])]),n("li",null,[n("a",y,[s("vtoyboot"),t(a)])])]),_,n("p",null,[s("剩余的配置项默认就好，如果想进行设置，可以参考"),n("a",h,[s("这里"),t(a)]),s("，之后点击部署即可")]),f,n("p",null,[s("然后就可以启动系统开始安装系统了，安装完成后，将下好的"),w,s("拷贝到虚拟机中，方法很多，"),n("a",x,[s("ftp"),t(a)]),s("，"),n("a",O,[s("共享文件夹"),t(a)]),s("都可以")]),T,n("blockquote",null,[n("p",null,[s("不会解压iso文件的看"),n("a",E,[s("这里"),t(a)]),s(" 当然，还有更简单的，在windows下解压好后直接将sh文件发到虚拟机中")])]),G,n("p",null,[s("配置项里的东西在ventoy官网都有很详细的解释，不懂的可以去"),n("a",V,[s("官网"),t(a)]),s("查看")]),z])}const S=p(c,[["render",U],["__file","使用256G洋垃圾打造3合1移动硬盘.html.vue"]]);export{S as default};
