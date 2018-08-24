<p align="center">
  <img src="https://user-images.githubusercontent.com/10026019/44260701-d84b6e80-a247-11e8-9d79-5f82be615c84.png" width="300"/>
</p>

<p align="center">
	<a href="npmjs.com">
		<img src="https://img.shields.io/npm/v/anka.svg?style=flat"/>
	</a>
</p>

WeChat miniprogram helper

## Install

```
  npm install anka -g
```

## Usage

```shell
  Usage:  <command> [options]

  Options:

    -V, --version                     output the version number
    -v                                --version
    -h, --help                        output usage information

  Commands:

    dev                               开发模式
    init [options] [projectName]      创建小程序页面
    build                             构建模式
    page [options] [targetPage]       创建小程序页面
    component [componentName]         创建小程序组件
    add [options] [componentName]     注册组件
    remove [options] [componentName]  移除组件
```

## Config

```javascript
  // wxApp/anka.config.json

  {
      "components": "./components",
      "pages": "./pages"
  }
```

## Develope

### Style

```scss
/* pages/test/test.scss */
$color: red;
page {
    color: $color;
}
```

```css
/* pages/test/test.css */
@import "./_var.css";

/* sub.css 不会编译到 test.css 文件中 */
@wximport "./sub.css";

page {
	color: var(--font);
	height: 100%;
	width: 100%;
}
```


### NPM

```javascript
// pages/page/page.js
import qs from 'qs'

Page({
  onLoad() {
    qs.stringify({
      name: 'anka'
    })
  },

  onShow() {
    console.log(this, 'hello')
  }
})

```
