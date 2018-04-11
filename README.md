## Chat JPush
 jpush package for rocketchat

## QuickStart

```bash
  import { roomPush, directPush } from 'meteor/yeyongping:chat-jpush'
  ......
  roomPush(<appkey>, <secretKey>,false, '测试房间3', '测试人员3', '这是一条测试消息', 'test')
  directPush(<appkey>, <secretKey>,false, '金箔', '中午吃什么?', 'test')
  ......
```