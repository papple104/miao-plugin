# Fork版本说明

自用魔改版，相比原版有以下区别：

* 补充`#喵喵设置未实装关闭`的遗漏部分，同时对应配置项改为默认关闭
    * `apps\profile\ProfileChange.js`：未实装武器/光锥/圣遗物/遗器等
    * `resources\meta-sr\character\data.json`：铁道未实装角色
* 调用多页帮助
    * 复制config/help_default.js为config/help1.js（数字可取1-999999999）之后，在原来的帮助指令后加对应编号获取帮助
    * 例：`#帮助1` 读取config/help1.js并获取帮助
    * 适用于将其他插件的指令集中到喵喵帮助内，分类大量指令帮助到多页，或展示其他内容用
    * 原帮助指令仍然适用，建议自定义帮助以help.js为主要帮助
* 帮助配置文件配置项：group(指定有效的群)、colCount(可设置每行一列)、cover（背景图大小）
    * 设置group字段后，仅能在设置的群内可以使用对应编号的帮助，主人私聊不受此限，具体说明详见config/help_default.js中group字段注释
    * colCount设置为1有效，仅在colCount==1时，可以设置更大的列宽
    * cover为true时，会保持图像的纵横比并将图像缩放成将完全覆盖背景的最小大小（与椰羊帮助类似，无需bg.jpg填充空白区域）
* 自定义皮肤配置项：customIcon
    * 为true时，可以为皮肤使用新的icon组图片
* 新增 `#后宫` `#后宫设置心海`
    * 设置后宫无分类限制，可选任意已有角色
* 部分内容字体替换
    * 标题文字：[猫啃什锦黑](https://github.com/Skr-ZERO/MaokenAssortedSans)
    * 符号、数字：没找到合适的，不换了
* 去掉在某些情况下可能出现的引流信息

以下为原作者README内容：

---

# Miao-Plugin 说明

`miao-plugin`是一个`Yunzai-Bot`的升级插件，提供包括角色面板、角色查询等角色相关功能。

具体功能可在安装插件后 通过 `#喵喵帮助` 进行查看。如需进行设置则可通过 `#喵喵设置` 命令进行管理。

---

## 安装与更新

### 使用Git安装（推荐）

请将 miao-plugin 放置在 Yunzai-Bot 的 plugins 目录下，重启 Yunzai-Bot 后即可使用。

请使用 git 进行安装，以方便后续升级。在 Yunzai-Bot 根目录夹打开终端，运行下述指令之一

```
// 使用gitee
git clone --depth=1 https://gitee.com/yoimiya-kokomi/miao-plugin.git ./plugins/miao-plugin/
pnpm install -P

// 使用github
git clone --depth=1 https://github.com/yoimiya-kokomi/miao-plugin.git ./plugins/miao-plugin/
pnpm install -P
```

进行安装。安装完毕后，管理员只需发送 `#喵喵更新` 即可自动更新 miao-plugin。

### 手工下载安装（不推荐）

手工下载安装包，解压后将`miao-plugin-master`更名为`miao-plugin`，然后放置在Yunzai的plugins目录内

虽然此方式能够使用，但无法使用`#喵喵更新`进行更新，不利于后续升级，故不推荐使用

---

## Yunzai版本与支持

`miao-plugin` 支持V3 / V2 版本的Yunzai-Bot

* [Miao-Yunzai](https://github.com/yoimiya-kokomi/Miao-Yunzai) : 喵版Yunzai [Gitee](https://gitee.com/yoimiya-kokomi/Miao-Yunzai)
  / [Github](https://github.com/yoimiya-kokomi/Miao-Yunzai) ，本体不含签到功能，功能迭代较多，与miao-plugin打通，只建议新部署/迁移
* [Yunzai-V3](https://github.com/yoimiya-kokomi/Yunzai-Bot) ：Yunzai V3 - 喵喵维护版，icqq版本，与原版Yunza功能基本一致，会保持卡池更新，功能相对稳定，可从原版Yunzai换源直接升级
* [Yunzai-V3](https://gitee.com/Le-niao/Yunzai-Bot) ：Yunzai V3 - 乐神原版，oicq版本，可能会遇到登录问题

---

## 功能说明

### #雷神面板

使用指令 `#面板帮助` 即可了解如何使用此功能。

#### #更新面板

`#更新面板` 依赖于面板查询API，面板服务由 http://enka.network/ 提供。

> 查询功能经Enka官方授权([issue#63](https://github.com/yoimiya-kokomi/miao-plugin/issues/63#issuecomment-1199348789))，感谢Enka提供的面板查询服务
>
> 如果可以的话，也请在Patreon上支持Enka，或提供闲置的原神账户，具体可在[Enka官网](http://enka.network/) Discord联系
>
> [issue#63](https://github.com/yoimiya-kokomi/miao-plugin/issues/63#issuecomment-1199734496)

> 可尝试使用`MiniGG-Api`面板服务 [@MiniGrayGay](https://github.com/MiniGrayGay)<br>
> 发送 `#喵喵设置面板服务332` 修改国服&B服的面板查询由 `MiniGG-Api` 处理

#### #雷神伤害

喵喵面板附带的伤害计算功能由喵喵本地计算。如计算有偏差 #雷神伤害 查看伤害加成信息，如确认伤害计算有误可提供伤害录屏截图及uid进行反馈

#### #雷神圣遗物

圣遗物评分为喵喵版评分规则

---

**在有一定阅读理解能力基础下，建议阅读 [CHANGELOG.md](CHANGELOG.md) 以了解更多内容。**

其余文档咕咕咕中

---

# 免责声明

1. `miao-plugin`自身的UI与代码均开放，无需征得特殊同意，可任意使用。能备注来源最好，但不强求
2. 以上声明但仅代表`miao-plugin`自身的范畴，请尊重Yunzai本体及其他插件作者的努力，勿将Yunzai及其他插件用于以盈利为目的的场景
3. miao-plugin的图片与其他素材均来自于网络，仅供交流学习使用，如有侵权请联系，会立即删除

# 资源

* [Miao-Yunzai](https://github.com/yoimiya-kokomi/Miao-Yunzai) : 喵版Yunzai [Gitee](https://gitee.com/yoimiya-kokomi/Miao-Yunzai)
  / [Github](https://github.com/yoimiya-kokomi/Miao-Yunzai)
* [Yunzai-V3](https://github.com/yoimiya-kokomi/Yunzai-Bot) ：Yunzai V3 - 喵喵维护版（使用 icqq）
* [Yunzai-V3](https://gitee.com/Le-niao/Yunzai-Bot) ：Yunzai V3 - 乐神原版（使用 oicq）
* [miao-plugin](https://github.com/yoimiya-kokomi/miao-plugin) : 喵喵插件 [Gitee](https://gitee.com/yoimiya-kokomi/miao-plugin)
  / [Github](https://github.com/yoimiya-kokomi/miao-plugin)

# 其他&感谢

* [Enka.Network](https://enka.network/): 感谢Enka提供的面板服务
* [Snap.Hutao](https://hut.ao/) : 感谢 DGP Studio 开发的 [胡桃 API](https://github.com/DGP-Studio/Snap.Hutao.Server)
