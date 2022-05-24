/* inrl 
*/

const faz = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')


let whb = Config.WORKTYPE == 'public' ? false : true

faz.addCommand({pattern: 'help', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {
// send a buttons message!credit to fasweeh
    const buttons = [
        {buttonId: 'id1', buttonText: {displayText: '.owner' }, type: 1},
        {buttonId: 'id2', buttonText: {displayText: '𝗦𝗨𝗣𝗣𝗢𝗥𝗧🍺 \n\n\n ┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓ \n      ☆ ~ɪᴛsᴍᴇ ɪɴʀʟ~ ☆ \n ┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛ \n ┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓ \n ┣⍟ \n ┣⍟ *ɢ-ᴩᴀy* : ᴜɴᴋɴᴏᴡɴ \n ┣⍟ \n ┣⍟ *ɴᴜᴍʙᴇʀ* : wa.me/917025099161 \n ┣⍟ \n ┣⍟ *ᴩʜᴏɴᴇ-ᴩᴀy* :ᴜɴᴋɴᴏᴡɴ \n ┣⍟ \n ┣⍟ *ᴩᴀyᴛᴍ* :ᴜɴᴋɴᴏᴡɴ \n ┣⍟ \n ┣⍟ *ɪɴꜱᴛᴀɢʀᴀᴍ* :https://instagram.com/mhd_fasweeh \n ┣⍟ \n ┣⍟ *yᴏᴜᴛᴜʙᴇ* :https://youtu.be/c/vapova \n ┣⍟ \n ┣⍟ *ɢɪᴛ* :https://github.com/inrlwabot/faz \n ┣⍟ \n ┣⍟ *ɢɪᴛ* : https://github.com/inrlwabot/media  \n ┣⍟ \n ┣⍟     ▎▍▌▌▉▏▎▌▉▐▏▌▎\n ┣⍟     ▎▍▌▌▉▏▎▌▉▐▏▌▎ \n ┣⍟         ғᴀsᴡᴇᴇʜ𖨆 \n ┣⍟ \n ┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛ \n ⍟⍟⍟⍟⍟⍟⍟⍟⍟⍟⍟⍟⍟⍟⍟⍟⍟ \n ┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓ \n ┣⍟        ◩ *ɪɴʀʟʙᴏᴛ* ◪ \n ┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛'}, type: 1}
 }, type: 1}
      ]
      
      const buttonMessage = {
          contentText: ' ʜʏ ᴅᴜᴅᴇ....👋🏻\n\n         ☆ *ɪɴʀʟ* ☆\n\n😂 ᴅᴏɴᴀᴛᴇ  : ᴄʟɪᴄᴋ ꜱᴜᴩᴩᴏʀᴛ \n👾 ᴄᴍᴅ : ᴄʟɪᴄᴋ ʟɪꜱᴛ\n👾 ᴏᴡɴᴇʀ   : ᴄʟɪᴄᴋ ᴏᴡɴᴇʀ\n👾 ɢɪᴛʜᴜʙ : ᴄʟɪᴄᴋ ɢɪᴛ\n👾 ᴘᴇʀғɪx : [ . ]\n\n         ☆ *ᴄʀᴇᴀᴛᴇʀ* ☆\n\n👨🏻‍💻 ꜰᴀꜱᴡᴇᴇʜ\n\n          ☆ *ᴛʜᴀɴᴋ ʏᴏᴜ* ☆\n\n😂 ᴄʟɪᴄᴋ ꜱᴜᴩᴩᴏʀᴛ ᴀɴᴅ ᴩᴀy ᴍᴏɴy ᴛᴏ ᴍᴇ😂 \n',
          footerText: 'ғᴀsᴡᴇᴇʜ',
          buttons: buttons,
          headerType: 1
      }
      
await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage, { mimetype: Mimetype.buttonsMessage, quoted: message.data, ptt: true,quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { orderMessage: { itemCount: 123, status: 200, thumbnail: fs.readFileSync('P3R3R03.jpg'), surface: 200, message: Config.AFN, orderTitle: Config.AFN, "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": Config.AFN + '\n', "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1080, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('P3R3R03.jpg')}}}});

}));
