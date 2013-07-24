/*
* require js 設定檔
* 1. baseUrl : 路徑        
*    功能 : (1) 路徑下的所有 js 檔都會被載入，第一時間載入的 所有 js 檔
* 2. paths : '路徑/檔名' 或 '路徑'
*    功能 : (1) 設定預設本機路徑或預設本機路徑檔名  (2) 讀取CDN JS檔
* 3. waitSeconds : 秒數
*    功能 : (1) 設定 Path 讀取的檔案，等待秒數。(PS : 設定在 baseUrl 的 檔案無此功能)
* 4. urlArgs : 變數 
*    功能 : (1) 設定 Path 讀取的檔案 增加變數 。 (避免瀏覽器阻擋相同檔名的讀取) 
* 5. shim : 真對有相依關係的 lib (1) 替 lib 建立相依關係 (2) 替 lib 回傳物件換變數 。
*           PS : 下面例子是設定 JQuery ui 依賴 JQUery
*/

/*
*  設定路徑的方法 目前檔案所載資料夾 
*/
requirejs.config({
    baseUrl: 'js/', //可以完全不設定
    paths: {
        app: 'app',
        View:'app/View',
        AppS:'app/AppS',
        TweenMax:'http://cdnjs.cloudflare.com/ajax/libs/gsap/1.10.1/TweenMax.min',
        jquery:'vendor/jquery-1.9.1.min'
    },
    waitSeconds: 0,
    urlArgs :"bust=" + (new Date()).getTime()
});


/* 設定程式下一個進入點  區別 config */

requirejs(['app/app']);
