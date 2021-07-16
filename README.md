子项目在 apps中
子项目名称及apps中的文件名称
在package.json中配置子项目的端口和名字

在apps.js中配置 项目启动需要的子项目

启动主项目以及apps.js中配置的项目
npm run serve

只启动主项目 需要将apps,js中的项目移出
npm run build

只启动子项目
npm run appserve [子项目名]

打包主项目以及apps.js中配置的项目
npm run build

只打包主项目  需要将app,js中的项目移出
npm run build

只打包子项目
npm run appbuild [子项目名]


