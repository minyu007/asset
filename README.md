# asset

### 环境搭建

- Node.js：v4.0+

- ruby & Sass & Compass

### 安装

``` bash
$ npm install -g bower
$ npm install -g gulp
$ cd asset && npm install && bower install
```

### 开发环境

- compass雪碧

    ``` bash
    $ compass watch
    ```
    在src/img/icons下添加图标后，会自动生成css/sprites－icons.css与img/sprites-icons.png

### 打包部署

- 打包

    ``` bash
    $ gulp
    ```
    项目会自动生成build文件夹


### 开发说明

- css
	
	每个页面对应5个css文件分别是 
	pagename.default.css,
	pagename.small.css, 
	pagename.medium.css, 
	pagename.lagre.css, 
	pagename.oldie.css(针对ie)



##### 目录结构

``` js
- asset/
  - src/                   # 开发目录
    + css/                 # css
    + scss/                # sass雪碧
    + img/                 # 图片
    + js/		   # js
    + page/                # html页面
  congif.rb                # ruby配置
  bower.json               # bower配置
  config.js                # gulp调用
  gulpfile.js              # gulp config
  package.json             # npm配置
  README.md                # 说明
```
