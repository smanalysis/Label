# Crowbar Label

基于上下文的新闻-评论意见倾向标注系统，以解决现有技术中存在的技术问题，能够有效提高树状结构文本信息数据的标注效率和质量，并降低标注成本。本系统使用嵌入式H2数据库和Jetty服务器，以单一jar文件发布。

## 系统由配置文件conf.json定义：

+ title：字符串，本次标注的题目；
+ explanation：字符串，本次标注的说明，出现在标注页面中，用于给标注者提供指导；
+ labels：字符串数组，标注的标签，最多不超过5个；
+ newsFile：字符串，新闻数据文件，格式见下方说明；
+ commentFile：字符串，评论数据文件，格式见下方说明；
+ method：字符串，onetime或者vote，onetime代表只需要一个人标注即可；vote代表使用投票机制标注，需要有2人以上达成一致才标注结束；
+ invitedCode：字符串，用于用户注册；
+ port：正数，标注服务器的端口；

## newsFile格式：

newsFile文件每行一个json对象，必须包含：newsID，newsTitle，content三个属性。

## commentFile格式：

commentFile文件每行一个json对象，必须包含：commentID，content，newsID，parentCommentID四个属性。

## 使用方法

+ 导入newsFile和commentFile数据，并启动服务器：java -jar Label.jar -init
+ 使用现有数据库启动服务器：java -jar Label.jar -start
+ 导出现有标注结果：java -jar Label.jar -export

启动服务器后，可通过浏览器访问对应服务器和接口，开始注册用户和标注。导出文件名为labelled.txt。

## 更新记录

+ 2023-04-07：初始0.1版本发布；


