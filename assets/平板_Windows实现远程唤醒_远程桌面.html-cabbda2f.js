import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as g,c as l,a as e,b as t,d as a,e as o}from"./app-9c008acc.js";const r={},s=o(`<p>众所周知，游戏本性能很好，但是重量很大，且很容易没有电，所以每次出门都需要带上电脑和适配器，再加上其他东西，每天都要背个快5公斤的包做负重训练</p><p>这时候，就体现出平板加远程桌面的优势了</p><h2 id="远程桌面" tabindex="-1"><a class="header-anchor" href="#远程桌面" aria-hidden="true">#</a> 远程桌面</h2><p>这个还是比较好实现的，用微软官方的Remote Desktop（在app store中貌似叫Remote Desktop Client）即可，直接去play商店下载就可以了，或者手机或者平板自带的应用商店也可以（一般都有，不排除二般情况，应用商店没且play商店访问不了可以试一试图中在“在更多设备安装”按钮下的的其他商店里找一找）</p><figure><img src="https://image.zekee.top/blog/remoteDesktopPlay.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>与此同时我们先进行Windows的设置，进入设置-&gt;系统-&gt;远程桌面，将远程桌面打开即可</p><p>Remote Desktop下载好以后打开，点击新建</p><figure><img src="https://image.zekee.top/blog/add.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>然后输入的电脑的ip即可，如果不清楚，可以打开cmd（Win+R），输入<code>ipconfig</code>，找到你上网使用的网卡，IPv4地址即为电脑内网ip，保存即可</p><p>好了现在可以远程了，但是问题出来了，在宿舍我貌似不需要这个，我需要在校园里使用，这时候就需要修改路由器的设置</p><p>以水星路由器为例，使用ip或者melogin.cn进入后台管理，进入高级设置-&gt;网络参数-&gt;IP与Mac绑定，找到你电脑的ip点击绑定即可</p><figure><img src="https://image.zekee.top/blog/ipandmac.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>点击高级设置-&gt;高级用户-&gt;虚拟服务器-&gt;添加，内部端口为3389，ip地址为电脑ip，外部端口随意，找一个自己好记的就行</p><figure><img src="https://image.zekee.top/blog/xunifuwuqi.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>再回到网络设置-&gt;WAN口参数-&gt;基本设置中的IP地址即为学校内网IP，也可以在学校认证界面查看，这个IP地址可能会变化，不过周期很长</p><p>再次回到Remote Desktop进行连接即可，不过这次的IP地址需要为学校的内网IP加上你设置的外部端口号，例如<code>10.12.0.22:3384</code>，这样就可以了</p><p>现在我可以抱着板子在学校任意一个地方连接我的电脑了，当然从理论上讲，配置一下路由器的ddns我还可以从外网访问，不过免费的版本体验可能会不如ToDesk，这是其一，最重要的还是水星的这个ddns我一直没有给配成功，等我在摸索摸索，总之感觉<s>水星加上花生壳等于一坨谢特</s></p><p>下来又有一个问题，如果人不在寝室，电脑还没开机，那不是更完蛋了，总不至于为了用电脑再跑回宿舍吧</p><h2 id="远程唤醒" tabindex="-1"><a class="header-anchor" href="#远程唤醒" aria-hidden="true">#</a> 远程唤醒</h2><p>这个远程唤醒我可谓是踩了一万个坑，感觉该遇上和不该遇上的都让我遇上了，先说下过程吧</p><p>首先说下，远程唤醒只支持有线网络连接，没有网线的就不要再折腾了</p><p>过程很简单，首先，去到BIOS里，因为版本不一样会有好多叫法，这里就说下找什么，找带有</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>WAKE ON LAN
BOOT ON LAN
WAKE UP BY PCI-E
......
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>字样的就可以</p><p>总之就是，<s>看见带个唤醒的就给他开开</s>（看清楚再开，大致意思是通过网络或者PCI-E唤醒的之类的就开开，开错了不背锅奥）</p><p>以我的机械革命为例吧，把Advanced中有个WAKE ON LAN选线，以及在BOOT中有个BOOT ON LAN选项（这个不确定用不用开，太懒了没去试，但是后来在解决其他问题的时候发现有帖子会说把他开开）都设置为Enable就行了</p><p>然后进到Windows中，打开设备管理器（右键此电脑就有，找不到就直接进设置搜索）</p><p>找到你的有线网卡，双击打开属性（或者右键，点击属性），点击上方的高级，将<code>关机 网络唤醒</code>和<code>魔术封包唤醒</code>的值都设置为开启</p><figure><img src="https://image.zekee.top/blog/advanced.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,29),c={href:"https://zekee.top/posts/remote/remoteSet.html#%E8%B8%A9%E8%BF%87%E7%9A%84%E5%9D%91",target:"_blank",rel:"noopener noreferrer"},d=e("figure",null,[e("img",{src:"https://image.zekee.top/blog/batterySetting.jpg",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),h=e("p",null,"至此为止，你理论上就可以进行远程开机了",-1),f=e("p",null,"下边我们来进行测试",-1),u={href:"https://wwro.lanzouq.com/i1pQK18t96sh",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.zhihu.com/people/1565710276",target:"_blank",rel:"noopener noreferrer"},_={href:"https://zhuanlan.zhihu.com/p/130717144",target:"_blank",rel:"noopener noreferrer"},b=e("p",null,"安装WakeOnLan，完成后打开，点击封包监控诊断工具",-1),k=e("figure",null,[e("img",{src:"https://image.zekee.top/blog/wol.jpg",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),z=e("p",null,"在此界面即可",-1),x=e("figure",null,[e("img",{src:"https://image.zekee.top/blog/wolwatch.jpg",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),w={href:"https://play.google.com/store/apps/details?id=com.bitklog.wolon&hl=zh-cn",target:"_blank",rel:"noopener noreferrer"},y=o('<figure><img src="https://image.zekee.top/blog/wolon.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>打开之后点击右下的加号，从上往下第一个为从局域网外唤醒，第二个为从局域网内唤醒</p><figure><img src="https://image.zekee.top/blog/wolstart.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>我们先从局域网内看起</p><figure><img src="https://image.zekee.top/blog/wolonlanconfig.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>有了之前配置远程桌面的经验，这些东西不难拿到，这个网关地址不确定的话就在填写完IP地址后点击网关输入框右边的一个不知道是什么的小图标，他就会帮你填上，完成后点击save即可，剩下的都不要配置</p><p>然后我们就可以开始测试了</p><p>点击主页中的配置，如果没有配置信息，看一下右上方你选择的是LAN还是WAN，LAN为局域网内，WAN为局域网外</p><p>直接点击配置项就可向电脑发送开机信号，这时再回到封包监控诊断工具，如果此时工具中显示出收到好多封包，那么恭喜你，你目前已经理论上成功了，如果没有，这时候你就要查一下你电脑的IP地址是否变化了，然后你可以关机进行下测试了，如果正常开机，那么恭喜你，你彻彻底底的成功了，如果不能正常开机，你可以看下下边的踩坑点中是否有你的情况。</p><p>之后我们就可以进行局域网外的配置了，同样的，先进入路由器管理界面，进入高级设置-&gt;高级用户-&gt;虚拟服务器-&gt;添加，内部端口为9，IP地址为你电脑地址，外部端口随意</p><figure><img src="https://image.zekee.top/blog/wolrouterconfig.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>然后就可以去平板上添加配置了，这次添加的是局域网外的配置，要选择最上边的选项</p><figure><img src="https://image.zekee.top/blog/wolwanconfig.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>这次的区别就是，IP地址这一栏填的是你在网络设置-&gt;WAN口参数-&gt;基本设置中的IP地址，端口为你设置的外部端口，完成后再用刚才的方法进行测试即可</p><blockquote><p>从公网唤醒这块先挖个坑吧，什么时候我把水星这个ddns配置摸透了再说</p></blockquote><p>做到这里，如果你没有任何问题，那么恭喜你，已经完成了配置了！</p><h3 id="踩过的坑" tabindex="-1"><a class="header-anchor" href="#踩过的坑" aria-hidden="true">#</a> 踩过的坑</h3><h4 id="没有电源管理" tabindex="-1"><a class="header-anchor" href="#没有电源管理" aria-hidden="true">#</a> 没有电源管理</h4><p>这个大概率是网卡驱动的问题，如果你的网卡驱动是从笔记本供应商的官网下载的并且还不支持，那么你就要考虑从网卡生产公司的官网上下载了</p><p>比如，机械革命的驱动，官网上下载下来的最新驱动没有电源管理，但是官网上也没有其他的网卡驱动了</p><p>我就去Realtek官网看了一下，发现官网给出的居然有两个版本，一个是不带电源管理的，这问题的根本原因找到了</p><figure><img src="https://image.zekee.top/blog/realtek.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>下载图中第二个驱动后问题解决！</p><h4 id="能收到封包-但是无法正常开机" tabindex="-1"><a class="header-anchor" href="#能收到封包-但是无法正常开机" aria-hidden="true">#</a> 能收到封包，但是无法正常开机</h4><p>我遇到的这种情况，很离谱</p><p>最早的时候我不知道为什么把休眠给关了，就是这个操作，让我多花了两个小时去找为什么我的电脑还不能唤醒</p><p>这个问题也很好解决，以管理员身份打开powershell，输入<code>powercfg /h on</code>回车就好，不输出任何东西，代表成功开启休眠，然后这下就好了</p><p>当然，我再翻攻略的时候也说了要把电源选项中的用于快速启动给关闭，如果你不能正常启动，也可以看看这一项是否关闭</p><figure><img src="https://image.zekee.top/blog/controlsettings.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',29);function v(N,A){const i=n("ExternalLinkIcon");return g(),l("div",null,[s,e("p",null,[t("然后点击，电源管理，把三个全勾上（没有电源管理怎么办，别急，在下边的"),e("a",c,[t("踩坑点"),a(i)]),t("中有解决办法）")]),d,h,f,e("p",null,[t("每次开关机测试很麻烦，我们不如直接检测一下电脑是否收到封包，这里就用到"),e("a",u,[t("WakeOnLan"),a(i)]),t("这个软件(密码asdb)")]),e("blockquote",null,[e("p",null,[t("这个软件是来自"),e("a",m,[t("DCchen"),a(i)]),t("写的文章"),e("a",_,[t("「系统」使用网络唤醒计算机"),a(i)]),t("中提到的，如果这篇文章的链接失效了，可以去这篇文章中下载")])]),b,k,z,x,e("p",null,[t("接下来去移动设备上安装一个远程唤醒软件，这里我用的是"),e("a",w,[t("WolOn - Wake on LAN Widgets"),a(i)])]),y])}const P=p(r,[["render",v],["__file","平板_Windows实现远程唤醒_远程桌面.html.vue"]]);export{P as default};
