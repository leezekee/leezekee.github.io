import{_ as s,r as l,o as i,c,d as p,a as e,b as o,e as t,f as r}from"./app-2ad4f9b0.js";const a={},d=e("p",null,"这是一次离谱的Windows无线网络突然消失事件的记录，死去的软件也能跑来背刺？",-1),_=r("<p>前两天遇见了一个很离奇的情况，同学的电脑突然没有无线连接了，起初我也是见怪不怪了，windows网卡驱动掉了不是很正常的事嘛</p><p>一般来说有这几种解决办法：</p><ol><li><p><s>Windows发癫了，重启一下</s></p></li><li><p>驱动有问题了</p><p>这种情况就直接上官网找驱动就好，自己不会的可以去另一个设备上下个驱动精灵网卡版（万不得已的选项，这软件最初还是很好的，后来越来越向流氓靠拢，用完记得删了）</p></li><li><p>更新的系统和驱动不兼容</p><p>这种情况要么回退，要么更新驱动，当然一般回退的情况比较多。</p></li><li><p>网卡接触不良</p><p>这个也比较简单，拆开看下就好了</p></li><li><p>驱动程序冲突</p><p><s>具体思路就是排查，等下遇见具体的再说</s></p></li></ol><p>实际知道问题了都好说，但是就是不知道问题，据当事人说法，吃饭前还在打游戏，吃饭回来就没网了，这事听起来也是离奇，上边的1、3都试了，吃个饭的时间Windows也不至于自己安了几个软件程序造成冲突吧（不排除这个想法，可能性也不是无），思路一下就断了，差那么一点就走上重装的不归路了，这时突然找到了一个帖子，说vmware workstation的存在可能会导致无线网卡驱动错误，可是他已经在好久之前卸载了这个软件，好不容易找到的思路又断了</p><p>就在即将要重装时，又去看了一眼设备的状态信息，突然发现了一条之前从来没注意过的信息：<strong>windows仍在设置此设备的类配置（代码：56）</strong></p>",5),u={href:"https://answers.microsoft.com/zh-hans/windows/forum/all/windows%E4%BB%8D%E5%9C%A8%E8%AE%BE%E7%BD%AE/41c505c8-514f-4c9e-9dd6-66cb6458a977",target:"_blank",rel:"noopener noreferrer"},h=r(`<p>这个问题还真就和vmware有关系，离离原上谱，一个删了好久的软件还能对windows造成伤害。</p><p>应该是卸载时的问题，没有彻底卸载，注册表还有残留，导致驱动程序出现了问题</p><p>直接去注册表里找到</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Control\\Network\\{4d36e974-e325-11ce-bfc1-08002be10318}
HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Control\\NetworkSetup2\\Services
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>中的<code>{49444745-4252-4554-79AC-EA6CADE4227F}</code>项，删除重装网卡驱动就好</p>`,5),w={href:"https://github.com/M2TeamArchived/NSudo",target:"_blank",rel:"noopener noreferrer"},m=e("code",null,"Services",-1),f={href:"https://www.zhihu.com/people/softcnkiller",target:"_blank",rel:"noopener noreferrer"},E={href:"https://www.zhihu.com/question/301076009",target:"_blank",rel:"noopener noreferrer"},v=e("p",null,"所以，卸载软件能用专用的卸载器就用吧，就算手动也要删干净，别把文件夹删了就拍屁股走人了，说不定哪天你的注册表就在你晋级赛的时候狠狠的背刺你了😆",-1);function C(b,k){const n=l("ExternalLinkIcon");return i(),c("div",null,[d,p(" more "),_,e("p",null,[o("好家伙，关键信息，去搜了一下，发现微软社区早在18年就有关于这个问题的解决，具体看"),e("a",u,[o("这里"),t(n)])]),h,e("p",null,[o("这个操作需要用到"),e("a",w,[o("Nsudo"),t(n)]),o("，否则没有权限访问"),m]),e("blockquote",null,[e("p",null,[o("解决这块参考了"),e("a",f,[o("四海一叶秋"),t(n)]),o("大神的"),e("a",E,[o("回答"),t(n)]),o("，回答中也有问题的复现")])]),v])}const A=s(a,[["render",C],["__file","Windows无线网络突然消失.html.vue"]]);export{A as default};
