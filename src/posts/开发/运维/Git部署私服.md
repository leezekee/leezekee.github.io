---
date: 2023-12-21
category:
 - 瞎折腾
 - 博客建站
tag:
 - Git
title: Git部署私服
description: 纯属觉得好玩又为了配合自动打包部署
---

部署git私服纯属是属觉得好玩又能配合自动打包部署，一举两得，何乐不为

<!-- more -->

最早我的博客是在在用Github Pages，配合上Actions，基本每次都很方便，只管写完push一下就好了，然后他就可以自己打包然后部署

但是，有个问题，不挂梯子访问太慢了（这个问题有好多方法，比如cdn，我就是单纯想这么搞而已），于是我就把博客放到服务器上了

## 安装git

安装很简单，具体怎么安装可以看自己的服务器用的什么包管理工具

```sh
sudo apt install git
```

## 配置用户

创建`git`用户组和`git`用户

> 这个用户组和用户名都是随意的，你可以随便起

```sh
# 新增 git 用户组
groupadd git

# 新增 git 用户并归属于 git 用户组
useradd git -g git
```

## 收集git公钥

这个也很好理解，在我们使用Github时，需要将我们生成的公钥放到网站中去，以便身份确认

同样，我们也需要这个来访问我们的git服务器

去到将我们自己电脑中的公钥复制一下，一般在`~/.ssh/id_rsa.pub`（Windows下`~`为用户目录），然后找到我们刚刚创建的用户git的目录下，将公钥复制进`authorized_keys`文件中

```sh
# 进入用户git的目录下，如果你创建的用户不叫git那就去到相应的目录下
cd /home/git

# 如果没有.ssh文件夹就创建
mkdir .ssh

# 编辑authorized_keys文件
# 如果没有vim就安装一下，或者使用你熟悉的编辑器打开就好
# 复制公钥到文件中，如果有多个，就一行一个
vim .ssh/authorized_keys

# 赋予文件权限
chmod 744 .ssh/authorized_keys
```

## 初始化Git仓库

首先我们要找到放仓库的地方，自己定，这里我们以放在`/repos`目录下为例，假定我已经创建了目录

我们创建我们的仓库，比如仓库叫`sample`，那我们的目录名就该为`sample.git`

创建出来的仓库为裸仓库，没有工作区，且服务器上的仓库均为`.git`结尾

然后将这个目录易个主，将所有者改为git

```sh
# 进入/repo目录
cd /repo

# 创建裸仓库
sudo git init --bare sample.git

# 改变所有权
sudo chown -R git:git sample.git
```

## 禁用远程登录

出于安全考虑，我们不应该让git用户登录shell

我们要编辑`/etc/passwd`文件

```sh
# 编辑passwd文件，和上边一样，用自己喜欢的就好
vim /etc/passwd
```

将`git:x:1001:1001:,,,:/home/git:/bin/bash`改为`git:x:1001:1001:,,,:/home/git:/usr/bin/git-shell`

要说的是这里的`/home/git`应该为你实际创建的用户的用户目录，如果按照本文[配置用户](#配置用户)部分走的话，即用户名没有改，这里应该是`/home/git`

这样git用户可以正常通过ssh使用git，却无法登录shell，因为git-shell登录一次就退出了

## 克隆仓库

到此为止，你就可以在自己电脑上克隆这个仓库了

```sh
# git clone git@你的服务器ip:git仓库地址，如
git clone git@11.45.45.14:/repo/sample.git
```

然后就可以愉快的将博客仓库放到服务器上了

当然，你还可以在服务器上搭一个gitlab，可视化更方便，可以参考[这篇教程](https://www.alibabacloud.com/help/zh/ecs/use-cases/deploy-and-use-gitlab#2578472088odq)

