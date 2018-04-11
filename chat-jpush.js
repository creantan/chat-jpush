// Write your package code here!

const JPush = require('jpush-sdk')

/**
 * 推送
 * @param {string} appkey appkey
 * @param {string} secretkey secretkey
 * @param {boolean} isProduct 是否是生产环境
 * @param {string} roomTitle 房间名称
 * @param {string} sender 发送人名称
 * @param {string} messageContent 消息内容
 * @param {string} rid 房间号
 */
function pushRoomMessage (appkey, secretkey, isProduct, roomTitle, sender, messageContent, rid) {
    const client = JPush.buildClient(appkey, secretkey, 1, true)
    
    const iosPayload = JPush.ios({title: roomTitle, body: `${sender}: ${messageContent}`})
    const androdidPayload = JPush.android(`${sender}: ${messageContent}`, roomTitle, 1)
    let audience = JPush.tag([rid])
    if (!isProduct) {
        audience = JPush.alias(['ex_yeyp001'])
    }

    const model = client.push()
        model.setPlatform('ios', 'android')
        .setAudience(audience)
        .setNotification('Hi, JPush', iosPayload, androdidPayload)
        // .setMessage('msg content')
        .setOptions(null, 60, null, isProduct)
        .send(function(err, res) {
            if (err) {
                console.log(err.message)
            } else {
                console.log('Sendno: ' + res.sendno)
                console.log('Msg_id: ' + res.msg_id)
            }
        });
}

/**
 * 推送
 * @param {string} appkey appkey
 * @param {string} secretkey secretkey
 * @param {boolean} isProduct 是否是生产环境
 * @param {string} sender 发送人名称
 * @param {string} messageContent 消息内容
 * @param {string} rid 房间号
 */
function pushDirect (appkey, secretkey, isProduct, sender, messageContent, rid) {
    const client = JPush.buildClient(appkey, secretkey, 1, true)
    
    const iosPayload = JPush.ios({title: sender, body: messageContent})
    const androdidPayload = JPush.android(messageContent, sender, 1)
    let audience = JPush.tag([rid])
    if (!isProduct) {
        audience = JPush.alias(['ex_yeyp001'])
    }

    const model = client.push()
        model.setPlatform('ios', 'android')
        .setAudience(audience)
        .setNotification('Hi, JPush', iosPayload, androdidPayload)
        // .setMessage('msg content')
        .setOptions(null, 60, null, isProduct)
        .send(function(err, res) {
            if (err) {
                console.log(err.message)
            } else {
                console.log('Sendno: ' + res.sendno)
                console.log('Msg_id: ' + res.msg_id)
            }
        });
}

// pushRoomMessage(false, '测试房间3', '测试人员3', '这是一条测试消息', 'test')
// pushDirect(false, '金箔', '中午吃什么?', 'test')


// Variables exported by this module can be imported by other packages and
// applications. See chat-jpush-tests.js for an example of importing.
export const name = 'chat-jpush';
