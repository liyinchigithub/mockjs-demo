# mockjs-demo

Mock.js 是一款模拟数据生成器，旨在帮助前端攻城师独立于后端进行开发，帮助编写单元测试。提供了以下模拟功能：

根据数据模板生成模拟数据
模拟 Ajax 请求，生成并返回模拟数据
基于 HTML 模板生成模拟数据

## 安装

```shell
npm install
```

## 运行脚本

```shell
npm install mocha -g
```

```shell
mocha
```

说明：脚本test.js需要放置在test文件夹下


## API文档

>http://mockjs.com/0.1/

## 示例

>http://mockjs.com/examples.html

## 数据模板编辑器

>http://mockjs.com/0.1/editor.html#help

>http://mockjs.com/0.1/demo/mock4tpl.html

>http://mockjs.com/0.1/demo/mock4xtpl.html

## 语法规范
Mock.js 的语法规范包括两部分：

数据模板定义（Data Temaplte Definition，DTD）
数据占位符定义（Data Placeholder Definition，DPD）

## 数据模板定义 DTD
### 数据模板中的每个属性由 3 部分构成：属性名、生成规则、属性值：

```
// 属性名   name
// 生成规则 rule
// 属性值   value
'name|rule': value
```
### 


### 


### 