# Fork版本说明

自用魔改版，相比原版有以下区别：

* 喵喵图鉴可设置关闭未实装角色的信息查询及面板替换功能
    * 管理员可通过 `#喵喵设置未实装 + 开启/关闭`修改设置
* 调用多页帮助
    * 复制config/help_default.js为config/help1.js（数字可取1-999999999）之后，在原来的帮助指令后加对应编号获取帮助
    * 例：`#帮助1` 读取config/help1.js并获取帮助
    * 适用于将其他插件的指令集中到喵喵帮助内，分类大量指令帮助到多页，或展示其他内容用
    * 原帮助指令仍然适用，建议自定义帮助以help.js为主要帮助
* 帮助配置文件配置项：group(指定有效的群)、colCount(可设置每行一列)、cover（背景图大小）
    * 设置group字段后，仅能在设置的群内可以使用对应编号的帮助，主人私聊不受此限，具体说明详见config/help_default.js中group字段注释
    * colCount设置为1有效，仅在colCount==1时，可以设置更大的列宽
    * cover为true时，会保持图像的纵横比并将图像缩放成将完全覆盖背景的最小大小（与椰羊帮助类似，无需bg.jpg填充空白区域）
* 新增 `#后宫` `#后宫设置心海`
    * 设置后宫无分类限制，可选任意已有角色

以下为原README内容：

---

# Miao-Plugin说明

Miao-Plugin 是一个 Yunzai-Bot 的升级插件，提供包括角色查询等升级功能。

具体功能可在安装插件后 通过 `#喵喵帮助` 进行查看。如需进行设置则可通过 `#喵喵设置` 命令进行管理。

---

## 安装与更新

请将 miao-plugin 放置在 Yunzai-Bot 的 plugins 目录下，重启 Yunzai-Bot 后即可使用。

推荐使用 git 进行安装，以方便后续升级。在 Yunzai-Bot 根目录夹打开终端，运行下述指令之一

```
// 使用gitee
git clone https://gitee.com/yoimiya-kokomi/miao-plugin.git ./plugins/miao-plugin/
pnpm add image-size -w

// 使用github
git clone https://github.com/yoimiya-kokomi/miao-plugin.git ./plugins/miao-plugin/
pnpm add image-size -w
```

进行安装。建议使用上述命令进行安装，以便于后续更新。 管理员发送`#喵喵更新`即可自动更新

如果是手工下载的zip压缩包，请将解压后的miao-plugin文件夹（请删除压缩自带的-master后缀）放置在Yunzai目录下的plugins文件夹内。

## Yunzai版本与支持

### V3-Yunzai

目前 V3-Yunzai 已基本重构完毕，具体可参见 [Yunzai-V3](https://github.com/Le-niao/Yunzai-Bot) ，miao-plugin 已经支持V3版本 Yunzai，可直接使用。

推荐直接使用 V3-Yunzai 搭配 miao-plugin 使用。（不能做V2钉子户——喵佬）

[issue#13](https://github.com/yoimiya-kokomi/miao-plugin/issues/74) : 如启动时报 Cannot find package 'image-size'
的错误，直接在yunzai根目录下`pnpm add image-size -w` 或使用cnpm、npm等包管理工具安装image-size库即可

### V2-Yunzai

miao-plugin仍支持使用V2版Yunzai安装miao-plugin。 由于官方Yunzai已经停止更新，可使用喵喵版V2-Yunzai

在Yunzai根目录夹打开终端，运行

```
// 使用gitee
git remote set-url origin https://gitee.com/yoimiya-kokomi/Yunzai-Bot

// 使用github
git remote set-url origin https://github.com/yoimiya-kokomi/Yunzai-Bot
```

即可切换Yunzai远程仓库地址，运行git pull拉取更新即可使用喵喵版V2-Yunzai（版本>2.2.0)

V2-Yunzai在较长一段时间内会维持更新，进行一些Bugfix及更新卡池等信息

---

# 功能说明

### #雷神面板

使用指令 `#面板帮助` 即可了解如何使用此功能。

#### #更新面板

`#更新面板` 依赖于面板查询API，面板服务由 http://enka.network/ 提供。

> 查询功能经Enka官方授权([issue#63](https://github.com/yoimiya-kokomi/miao-plugin/issues/63#issuecomment-1199348789))，感谢Enka提供的面板查询服务
> 
> 如果可以的话，也请在Patreon上支持Enka，或提供闲置的原神账户，具体可在[Enka官网](http://enka.network/) Discord联系
> 
> [issue#63](https://github.com/yoimiya-kokomi/miao-plugin/issues/63#issuecomment-1199734496) :
> 国内网络如Enka服务访问不稳定，可尝试更换 [@MiniGrayGay](https://github.com/MiniGrayGay) 大佬提供的中转服务 复制`config/profile_default.js`
> 为`config/profile.js`，修改其中enkaApi的url配置，配置完成后重启Bot即可生效
> 
> * 【链接1】：https://enka.microgg.cn/
> * 【链接2】：https://enka.minigg.cn/

#### #雷神伤害

喵喵面板附带的伤害计算功能由喵喵本地计算。如计算有偏差 #雷神伤害 查看伤害加成信息，如确认伤害计算有误可提供伤害录屏截图及uid进行反馈

#### #雷神圣遗物

圣遗物评分为喵喵版评分规则

---

**在有一定阅读理解能力基础下，建议阅读 [CHANGELOG.md](CHANGELOG.md) 以了解更多内容。**

其余文档咕咕咕中

---

# 免责声明

1. 功能仅限内部交流与小范围使用，请勿将Yunzai-Bot及Miao-Plugin用于以盈利为目的的场景
2. 图片与其他素材均来自于网络，仅供交流学习使用，如有侵权请联系，会立即删除

# 其他

* [官方Yunzai-Bot-V3](https://github.com/Le-niao/Yunzai-Bot) : [Gitee](https://gitee.com/Le-niao/Yunzai-Bot)
  / [Github](https://github.com/Le-niao/Yunzai-Bot)
* [喵喵Yunzai-Bot-V2](https://github.com/Le-niao/Yunzai-Bot) : [Gitee](https://gitee.com/yoimiya-kokomi/Yunzai-Bot)
  / [Github](https://github.com/yoimiya-kokomi/Yunzai-Bot)
* [喵喵插件 Miao-Plugin](https://github.com/yoimiya-kokomi/miao-plugin) : [Gitee](https://gitee.com/yoimiya-kokomi/miao-plugin)
  / [Github](https://github.com/yoimiya-kokomi/miao-plugin)
* [Enka](https://enka.network/): 感谢Enka提供的面板服务
* [Snap.Genshin](https://www.snapgenshin.com/home/) : 感谢 DGP Studio
  开发的 [胡桃API](https://github.com/DGP-Studio/Snap.HutaoAPI)
* QQ群（暂时停止新加入，请见谅）
    * Yunzai-Bot 官方QQ群：213938015
    * 喵喵Miao-Plugin QQ群：607710456
* [爱发电](https://afdian.net/@kokomi) 欢迎老板打赏，喵~

