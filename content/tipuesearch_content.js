var tipuesearch = {"pages": [{'title': 'About', 'text': ' https://github.com/mdecycu/cmsite  \n *倉儲 : Jun41123/cad2023 (github.com) \n *網站 : cmsite (jun41123.github.io) \n *\xa0 進行分組作業(9人一組): \n \xa0 \xa0 1 . 小組網站 : \xa0 https://41023134.github.io/cad2023_ag5/content/index.html \n \xa0 \xa0 2 . 小組倉儲 : \xa0 https://github.com/41023134/cad2023_ag5 \n \n', 'tags': '', 'url': 'About.html'}, {'title': '上課進度', 'text': '', 'tags': '', 'url': '上課進度.html'}, {'title': 'W14', 'text': '使鋼球在三角形斜面上來回進行永動模三角永動機動機 \n 1. \n \n 2. \n \n 3. \n \n 4. \n \n ============================================================== \n 此為老師提供的三角永動模擬黨\xa0 triangle_perpetual_motion_simulator.7z \xa0\xa0 cad2023_w14.7z \xa0 (需要透過控制系統設計找出能讓鋼球通過感測器時的最佳施力大小) \n 1.導入方法:file-->open scene-->完成找這樣 \n \n 2.下載電磁力吸引\xa0 project1_w14_simple.py \xa0並且開啟 \n 3.在命令自原中輸入圖中首行與末行指令 \n \n 4.在triangle_perpetual_motion_simulator檔案中開啟triangle_perpetual_motion_simulator.py的文件，點擊Tools在按F5，此時應該即可模擬出永動效果 \n \n \n', 'tags': '', 'url': 'W14.html'}, {'title': '任務一', 'text': '\n *onshape是 一套線上3D繪圖軟體，因此 不須下載 * Onshape是PTC第一個SaaS產品，也是全球第一個全雲端的3D整合型軟體 ，更為分散式團隊提供適合的3D CAD系統軟體。 \n 1.底座 \n \n 2.支撐桿 \n \n 3.平台 \n \n 4.環 \n \n 5.球 \n \n', 'tags': '', 'url': '任務一.html'}, {'title': '任務二(考試)', 'text': '操作考試 : 請利用自選的電腦輔助設計套件建立 \xa0 https://mde.tw/cadnote/content/pms.html \xa0 中的零組件 (尺寸與操控內容請自訂), 並加入感測器與適當的設計元件或機構, 說明預計如何令其在接上外部電源後, 能夠讓系統中的鋼球在軌道上進行永動模擬. \n 完成零組件與可行系統設計後, 請將零組件轉入 CoppeliaSim 建立模擬場景, 並在分組中自選另一名組員, 經過彼此討論後, 請利用 ZMQ remote API Python 程式互相控制對方的永動模擬場景, 以便完成兩人一組的兩則永動機模擬操作. \n step1: 基本零組件設計繪圖. \n step2: 施力機構設計, 納入軌道下方控制盒中. \n step3: 將軌道、鋼球與簡化後的控制盒輸入 CoppeliaSim. \n step4: 配合控制系統設計, 納入感測器與施力機構或系統. \n step5: 在 localhost 以 IPv6 ZMQ remote API Python 程式, 配合感測器作動對鋼球施力. \n step6: 跨網路對協同組員的場景進行控制模擬. \n ============================================================== \n *利用Inventor繪製(請在校網或使用 VPN 下載 2022 版本,安裝檔案 Inventor_Pro_2022_Traditional_Chinese_Win_64bit_Dlm_001_003.sfx.exe 2GB) \n \n *有成功匯到 Coppeliasim\xa0,但動不太起來(應該是有某個有出錯) \n \n \n *步驟: \n 1.底座 \n \n 2.畫軌道 \n \n 3.在畫高低軌道 \n \n 4.完成 \n \n 5.畫球 \n \n', 'tags': '', 'url': '任務二(考試).html'}, {'title': '網路設定', 'text': '*由於電腦輔助設計室某部分套件, 在 IPv4 網路環境下會被防毒軟體偵測到封包異常而封閉網路, 因此以下將 IPv4 網路關閉, 僅使用 IPv6, 並透過雙網路協定支援的代理主機設定, 以便與僅支援 IPv4 的網路主機連線. \n *利用隨身碟上的批次檔案進行電腦輔助設計室網路環境設定 \n *下載(下載包含 Python 3.12.0, Tiny C Compiler 與 CoppeliaSim 4.5.1 的\xa0 portable_2024_cp_wcms_cad_cd_w_ebooks.7z , 1.2GB 解開後 3.3GB, 需要下載密碼), 必須先放入個人所分配到的 IPv6 位址後, 以管理者身分執行批次檔案, 就能直接完成電腦輔助設計室中電腦的網路連線設定. \n *下載\xa0 cad2023_network_setup.7z \xa0 (需要下載密碼), 必須以管理者身分執行批次檔案, 因為要藉此身分關閉 IPv4 網路協定. \n *各學員所分配的固定 IPv6 位址如下: \n \xa02a 學員展示用 IPv6 位址: 2001:288:6004:17:2023:cada::42 \n * 電腦輔助設計與實習課程分組網站在 s.cycu.org 所分配的外部與內部埠號:\xa0cad2023_ag5: 8236, 9236 \n \n', 'tags': '', 'url': '網路設定.html'}, {'title': '代理主機', 'text': '目前只有 Replit、s.cycu.org 事建成功的 , 但 \xa0localhost \xa0目前還沒建起來 \xa0\xa0 \n Replit: \n 如何維護網頁? \n 當在動態網站save剛更新的資料內容後>點擊convert轉換網站>回到replit點擊Git>在update輸入框中輸入更新內容的代名稱>點選stage&commit(會看到更新的內容已被載入)>最後點擊push>到github個人倉儲看是否有亮綠燈 \n 有(以上傳完成) ;\xa0\xa0 沒有(亮黃燈或亮紅燈代表還在上傳中) \n \n s.cycu.org: \n 1.首先要開啟cmd(小黑窗)中執行ssh cad(學號)@s1511.cycu.org \n \xa0 *若要用可攜中start.bat中的cmd要先將start.bat用編譯器打開並將第三行蓋掉,然後重新啟動。 \n 2.執行完會要你打密碼,密碼在學校Mail2000,10/28的一封s1511.cycu.org 帳號通知信裡。 \n 3.連線完會進到OpenSSH SSH client的黑窗,再來是要生成ssh的key,在黑框中執行ssh-keygen。 \n 4.接下來就是要用FileZilla連線s1511.cycu.org將.ssh目錄下的id_rsa.pub拉到本地的目錄中, \n \xa0 \xa0再用編譯器打開,並將內容送入到Github->Settings->SSH and GPG keys。 \n 5.然後下載config並用FileZilla送進.ssh目錄下 \n 6.然後在OpenSSH SSH client中執行以下三個指令: \n \xa0 \xa01.git config --global user.name "Github帳號名" \n \xa0 \xa02.git config --global user.email "Github信箱" \n \xa0 \xa03.git config --global http.proxy http://p4.cycu.org:3128 \n 7.將遠端Github的倉儲克隆下來,有以下兩種方法: \n \xa0 \xa01.http協定:git clone --recurse-submodules https://github.com/41123141/cad2023.git \n \xa0 \xa02.ssh協定:git clone --recurse-submodules git@github.com:41123141/cad2023.git \n \xa0 *由於克隆的方式不一樣倉儲中.git中的config設定也不同,因為最後是要用ssh推送到Github, \n \xa0 \xa0用https克隆的要將config設定改成ssh的樣子,也就是將 https://github.com/41123141/cad2023.git \n \xa0 \xa0改成git@github.com:41123141/cad2023.git \n 8.再來要下載server.py的檔案用編輯器將自己9開頭的埠號輸入並將檔案用FileZilla送到倉儲目錄下 \n 9.然後在小黑窗執行cd site-xxxxxxxx移動到倉儲目錄下執行python3 server.py(沒出現東西就算成功) \n 10.在firefox或waterfox中執行https:s1511.cycu.org:8xxx \n \xa0 *若有設定proxy要關掉 \n \n \n \n', 'tags': '', 'url': '代理主機.html'}, {'title': 'w4 - w5', 'text': '*\xa0 \xa0建立考試帳號:需在系上IPV6的網路 , 就可以建立一個考試帳號( https://exam.cycu.org ) , 然後進行考試. \n *\xa0 \xa0建立網站: (1). 先建立一個自己的個人倉儲(github.com) . \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0(2). 再利用倉儲去建立一個靜態網頁(主頁面上有一個設定,點進去找到一個Pages,進去就可以建靜態了.) \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0(3). 在建立一個Replit帳號並且與 個人倉儲(github.com)做連結的動作. \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0(4). 利用Replit去建立動態網頁. \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0(5). 以上完成後就可以順利地做Push的動作,從動態推到靜態. \n *\xa0 \xa0學會使用CoppeliaSim \n *\xa0 \xa0記得準備隨身碟,免得造成自己的麻煩. \n \n', 'tags': '', 'url': 'w4 - w5.html'}, {'title': 'w8', 'text': '我悶要把動態的文件推到靜態,需要用可攜或是Replit才可以推上去,但因為 Replit是個付費軟體有些人漸漸地不能用,所以而外建立一個代理主機  s1511(透過 SSH 與分配埠號)\xa0 ,以下是 s1511  建立方式: \n 1 . 如何用遠端登入登出:遠端登入到 s1511.cycu.org (只支援 IPv6 網路協定),先在空白頁面建立ssh與sftp均在後面加上 cad學號@s1511.cycu.org, 使用ssh指令然後輸入密碼(密碼不會顯示出來),使用 putty.exe 設定 session 令其連接到\xa0 s1511.cycu.org,exit(這為登出的指令),假如在 IPv4下, 則 ssh 指令與 putty.exe 都必須透過能支援 IPv6 的代理主機進行連線. \n 2 .\xa0 如何取放檔案:利用 sftp 從 s1511.cycu.org,進入對應目錄後, 以 pwd 確認所在目錄後, 以 get 取下檔案, 以 put 放上檔案, 例如: 進入 images 目錄後, 可以透過 get gd_ex1.png 取下圖檔, 若要將圖檔放入 images 目錄, 則只要確定 sftp 進入後, cd 到 images 目錄, 然後以 put gd_ex1.png 將圖檔送入. \n 3 .\xa0 如何與 github 帳號彼此信任 :利用 ssh-keygen 在 .ssh 目錄建立 id_rsa 與 id_rsa.pub, 之後將 id_rsa.pub 登記到各自帳號下 settings 的 SSH and GPG keys 區域 ,\xa0.ssh 目錄中的\xa0 config(要先把檔案下載下來) , 將 SSH session 名稱設為 github.com ,\xa0將 上列 config 送到帳號下的 .ssh 目錄之後, 就可以利用 github.com 作為 session, 從 github.com 取下 cad2023 倉儲, 並且已經具備 git push 的權限. \n 4 .\xa0如何取下與啟動或關閉 cad2023 倉儲: 用SSH指令取下cad2023(git clone --recurse-\xa0 \xa0 \xa0 \xa0 \xa0 submodules\xa0git@github.com :帳號/cad2023.git ),再以server.py 進行編輯, 放入自己分配到的  9xxx 埠 後, 再送回,則可以利用 python3 server.py 啟動編輯網站, 並測試是否可以連線到\xa0 https://s1511.cycu.org:8xxxx \xa0,\xa0由於管理者內建密碼為 admin, 使用者修改後, 編碼字串將存入 config/config, 此檔案必須設為只有管理者可以 read, 若目前位於登入後的工作目錄,\xa0各用戶若希望刪除已經啟動的 Process, 可以找到所啟動的 PID 後, 以下列指令關閉服務 (若 PID = 1234). \n 5 .\xa0如何連到動態/設定靜態/連動動態改版與靜態:\xa0python3 server.py 啟動測試是否可以連線到 外部主機 \xa0 .\xa0\xa0可以透過 config 指令修改管理者密碼 / 編碼將存入 s1511 主機倉儲檔案中的 config/config 檔案中 / 檔案將只會位於 s1511, 而不會被推向 github.com / 先以 git config 設定 user.name 與 user.email, 此設定將會存入 .gitconfig 檔案中 / 前面已經在 /home/帳號/倉儲目錄\xa0 / 透過 SSH 協定從 github.com 取下檔案內容, 由於 SSH keys 的設定, 此一倉儲一旦改版, 可以在新增提交之後, 可以透過 git push 指令將改版資料推向 github.com / 靜態 git push 至 github.com 後, 將會透過 Github Pages 的設定進行轉檔 / 主機中伺服對應的倉儲靜態網站, 則可以將倉儲檔案放入帳號中的 public_html 目錄中 / 位於 public_html 僅需鏡射位於 github.com 中的倉儲檔案資料 / 利用 git clone --recurse-submodules https://github.com/帳號/倉儲名稱.git 取下 / 並可在https://s1511.cycu.org/~帳號/倉儲名稱 中擷取靜態網站資料 / 檔案改版, 而且資料已經推送到 github.com, 使用者就可以進入 public_html 中的對應倉儲目錄, 以 git pull 指令從 github.com 取得最新的版本資料, 此指令可以採手動 / acp 必須納入 public_html 目錄中的靜態網站 git pull, 且利用 chmod u+x acp 令其可以執行. \n 6 .\xa0對資料進行保全:\xa0 \n chmod u+x acp \n chmod og-rwx config/config \n chmod 711 /home/cad學號 \n chmod 755 /home/cad學號/public_html \n 7 .\xa0 網路連線協定:\xa0將 cad2023 倉儲資料取到 s1511.cycu.org 帳號下, 若使用 SSH 協定且位於只有 IPv6 網路協定, 則分別牽涉以 SSH 及 https 協定連線到 github.com 的設定(運用在 git clone --recurse-submodules\xa0git@github.com:帳號/cad2023.git). \n \xa0 \n \n \n \n \n', 'tags': '', 'url': 'w8.html'}, {'title': '課程總結', 'text': '期望分數:60 \n A: 是否按照進度明確標示倉儲的改版歷程 :  是 \n B: 是否根據 \xa0 IPv4 與 IPv6 \xa0 網路環境設定進行作法討論 :  是 \n C: 是否就 \xa0 Replit、s.cycu.org 與 localhost \xa0 情境下對個人與分組倉儲進行設定操作 :  是 \n D: 是否就所分配的 \xa0 CAD 套件 從安裝設定到繪圖提供內容參考 : 是(但沒影片) \n E: 是否使用所分配的 CAD 套件完成 專案一零組件繪圖 , 並提供零組件下載 : 是(沒載點) \n F: 是否將自行繪製的專案一零組件 轉入 CoppeliaSim : 有(沒成功) \n G: 是否利用 \xa0 ZMQ Remote API Python \xa0 對專案一轉入的零組件設定感測器, 並進行 鋼球永動模擬 : 否 \n H: 是否實際操作 \xa0 Triangle 軌道系統 的鋼球永動模擬 : 是 \n I: 是否完成 W15 的平面雙 U 迴路上的 鋼球永動系統繪圖、轉檔與系統模擬 : 部份完成 \n J: 是否使用所分配的 CAD 套件完成 專案二 1D 平台零組件繪圖 , 並提供零組件下載 : 是(沒載點) \n K: 是否利用 \xa0 ZMQ Remote API Python \xa0 對專案二轉入的零組件設定感測器, 並進行鋼球永動模擬 : 否 \n L: 是否針對專案二的 1D 平台鋼球平衡系統所需的 \xa0 PID 控制理論 進行資料收集與 ChatGPT 對答 : 否 \n 課程心得:\xa0目前做的這些覺得好難,有看一部份的影片,但做的成果有點失敗,但相信期末前可以做出來的,在這期間可以學到很多有趣的程式. \n \n \n', 'tags': '', 'url': '課程總結.html'}, {'title': '影片', 'text': '各學員必須在網站呈現完整看過以下各階段的教學影片的歷程, 並了解其內容要旨 \n 並針對各階段 內容實際操作至少一遍 \n 教學影片 (登入 nfu Teams 才可以觀看): \n 是 1. \xa0 利用批次檔、登錄檔與 powershell 執行網路設定 \xa0 (7:15) \n 是 2. \xa0 Onshape 零組件轉入 CoppeliaSim \xa0 (19:58) \n 是 3. \xa0 從 github 空倉儲建立 cmsimde 網際內容管理倉儲 \xa0 (15:22) \n 是 4. \xa0 之二 \xa0 (34:20) \n 是5. \xa0 利用 Pull Requests 提出修改 studlist 倉儲資料的用法 \xa0 (7:58) \n 是 6. \xa0 利用 SSH 協定取下倉儲並啟動編輯網站 \xa0 (22:05) \n 是 7. \xa0 之二 \xa0 (10:16) \n 是 8. \xa0 s.cycu.org 伺服器設定操作 \xa0 (18:47) \n 是 9. \xa0 之二 \xa0 (9:46) \n 是 10. \xa0 之三 \xa0 (13:58, 無語音說明) \n 是 11. \xa0 之四 \xa0 (21:30) \n 是 12. \xa0 之五 \xa0 (19:02) \n 否13. \xa0 Wink 操作說明 \xa0 (2:05) \n 是14. \xa0 課程內容摘要簡報說明 \xa0 (26:22) \n 是15. \xa0 之二 \xa0 (12:22) \n 是16. \xa0 利用 ChatGPt 協助座位排序與列印問題 \xa0 (9:36) \n 是17. \xa0 之二 \xa0 (13:53, 有嚴重回音) \n 是18. \xa0 利用 Solvespace 繪製零組件並轉入 CoppeliaSim \xa0 (17:55) \n 是19. \xa0 之二 \xa0 (23:05, 有嚴重回音) \n 是20. \xa0 簡化後的專案一鋼球永動模擬操作 \xa0 (12:37) \n 是21. \xa0 之二 \xa0 (9:33) \n 是22. \xa0 之三 \xa0 (21:09) \n 是23. \xa0 之四 \xa0 (4:34) \n 是24. \xa0 專案二 \xa0 (16:46) \n 是 25. \xa0 之二 \xa0 (15:41) \n 是是 26. \xa0 之三 \xa0 (14:15) \n', 'tags': '', 'url': '影片.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};