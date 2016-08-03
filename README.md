###fis-应用商店文件替换插件

####使用方法：
1. 在preprocessor中引入该插件
	 例：
	 ```
	 modules: {
           preprocessor: {
             //js后缀文件会经过replace-file插件的预处理
             //进行文件替换
             js:'replace-file'
           },
         }
     ```
2. 在settings中配置参数
     例：
     ```
     settings: {
           preprocessor: {
             'replace-file':[
                 {
                   targetFile: 'Injection/mobile-web.js',
                   replaceFile: 'Injection/mobile-web2.js'
                 },
                 {
                   targetFile: ['.*nav.js','.*chart.js'],
                   replaceFile: 'Injection/mobile-web3.js'
                 }
             ]
           }   
     ```
     或者
     ```
      settings: {
            preprocessor: {
               'replace-file':{
                  targetFile: ['Injection/mobile-web.js','.*exposure.js'],
                  replaceFile: 'Injection/mobile-web2.js'
               }
            }   
      ```
        