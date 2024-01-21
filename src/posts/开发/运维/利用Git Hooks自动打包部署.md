---
date: 2023-12-21
category:
 - 瞎折腾
 - 博客建站
tag:
 - Git
 - Git Hooks
title: 利用Git Hooks自动打包部署
description: 什么？2050年了你还在手动上传服务器然后手动打包部署？
---

什么？2050年了你还在手动上传服务器然后手动打包部署？

<!-- more -->

接[上文](Git部署私服)，博客的仓库是搬到服务器上了，如何当一个撒手掌柜呢，让我每次写完只管push，剩下的打包自动部署自动进行呢？

这里就要用到我们的Git Hooks

## Git Hooks

首先我们先了解一下Git Hooks，看[官网](https://git-scm.com/book/zh/v2/%E8%87%AA%E5%AE%9A%E4%B9%89-Git-Git-%E9%92%A9%E5%AD%90)的解释就好了，简单点说，就是在git的工作流程中分为几个关键的时间节点，也就是钩子，在到达时间节点时，git会执行对应的自定义脚本

有了这玩意，就已经成功一半了，我们不就是想让我们在push之后服务器去自动运行打包命令吗，那问题就很简单了，只需要让服务器在收到推送后进行打包即可

## 脚本编写

Git Hooks的自定义脚本位置就在仓库的hooks目录中，服务器客户端都有

我们在找到服务器的hooks目录，将`post-update.sample`拷贝一份，重命名为`post-update`，这样服务器就会在仓库内容更新后运行该脚本

```sh
# 进入服务器的git仓库的hooks目录，这个路径只是例子，根据实际情况改变
cd path/to/git/repo/hooks

# 复制post-update.sample并重命名
cp post-update.sample post-update

# 编辑post-update
vim post-update
```

具体内容很好写，我们随便找一个目录，将仓库内容clone下来，然后运行打包命令即可

```sh
# 指定了脚本要使用的解释器
#!/bin/bash

# 让脚本在任何命令返回非零（出现错误）时立即退出
set -e

# 取消对环境变量 GIT_DIR 的设置。
# 这样做可以确保在脚本中使用的 Git 命令是基于当前工作目录的。
unset GIT_DIR

# 定义WORK_PATH变量，指定工作目录，即你要克隆仓库进行打包的位置
WORK_PATH='path/to/workspace'

cd $WORK_PATH

echo "cleaning workspace"

# 使用 Git 命令重置工作区，将其与远程仓库的分支保持一致。
# --hard 参数表示放弃本地的修改，直接使用远程仓库的内容。
git reset --hard origin/your-branch

# 清理工作区中未被 Git 管理的文件
git clean -f

echo "pulling code"

# 拉取远程仓库代码
git pull origin your-branch

echo "building..."

# 运行打包命令，这里用的vuepress打包命令为npm run docs:build，根据自己的更改
npm run docs:build

echo "deploy done"                                   
```

按理说，这个应该是正常运行的

但是，我这边总是在push以后会卡住没有反应，卡在building的步骤，我以为是我本地的问题，找了一圈发现，服务器一运行打包命令就死机

好家伙，没辙了，这个方法看来是走不通了，只能想别的办法了

## Husky

想了很多方法，也看了很多文章，首先在客户端用git hooks在提交前打包是百分百可行的，但是我发现了更简单的方法，使用[Husky](https://github.com/typicode/husky)

什么是Husky

官网是这么解释的

Modern native git hooks made easy

Husky improves your commits and more 🐶 woof!

通俗点说

他可以让我们很轻松地使用Git Hooks，在提交代码时运行我们想要的脚本。

我看了好多例子都是用来做代码质量检测的，像我这种一个人写的屎山就不需要了（bushi

它的工作原理是在我们的 package.json 文件中加入一个对象，配置 Husky 来运行我们指定的脚本。之后，Husky会管理我们的脚本将在Git生命周期的哪个阶段运行。

我们首先安装Husky

```sh
npm install husky
```

新版本的Husky中我们不用在`package.json`配置，而是在`.husky`目录下配置

我们首先需要在`package.json`中的`scripts`中添加`prepare`脚本

```json
{
  "scripts": {
    "prepare": "husky install"
  }
}
```

`prepare`脚本会在`npm install`之后自动执行。也就是说当我们执行`npm install`安装完项目依赖后会执行`husky install`命令，该命令会创建`.husky`目录并指定该目录为git hooks所在的目录。

然后添加git hooks

```sh
# npx husky add .husky/pre-commit \
# "echo [Husky] project building \
# && 打包命令 \
# && 将打包后的文件夹添加的暂存区“
# 如
npx husky add .husky/pre-commit "echo [Husky] project building \
&& npm run docs:build \
&& git add src/.vuepress/dist -f"
```

然后你就能看到`.husky`目录下多了一个`pre-commit`的脚本

内容如下

```sh
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

echo [Husky] project building && npm run docs:build && git add src/.vuepress/dist -f
```

在每次git commit之前都会运行这个脚本，然后将打包完成的代码一块提交给服务器，虽然每次commit都要等一下，但总比服务器死机强多了

这时候我们就要改一下服务器那边的`post-update`脚本了

我们只需要在收到更新后直接将仓库克隆下来就好

```sh
#!/bin/bash
set -e
unset GIT_DIR
WORK_PATH='path/to/workspace'

cd $WORK_PATH

echo "cleaning workspace"
git reset --hard origin/your-branch
git clean -f

echo "pulling code"
git pull origin your-branch

# 跟上边差别不大，只是不用打包了而已，根据nginx的配置，你可以在这里进行一下拷贝操作
# 例如：
# cp ./src/.vuepress/dist /www/blog
# echo "building..."
# npm run docs:build

echo "deploy done"                                   
```

## Nginx配置

顺带一下一份nginx的配置，懒得写注释了，应该都挺好理解的，不懂的搜一下就好了

```nginx
server {    
    listen 443 ssl;
    server_name your.domain; 

    ssl_certificate path/to/your/cert;
    ssl_certificate_key path/to/your/cert/key;
    ssl_session_timeout 5m;
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2; 
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE; 
    ssl_prefer_server_ciphers on;

    location / {
        root path/to/your/dist/folder;
        index index.html;
    }
}

server {
    listen 80;
    server_name your.domain;
    rewrite ^(.*)$ https://$host$1 permanent;
}
```