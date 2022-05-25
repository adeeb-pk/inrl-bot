//modified @ fasweeh
	

const faz = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')

let whb = Config.WORKTYPE == 'public' ? false : true

faz.addCommand({pattern: 'menu', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {
// send a buttons message!
	const buttons = [

        {buttonId: 'id1', buttonText: {displayText: 'ᴏᴡɴᴇʀ-ɪɴꜰᴏ \n\n\n ┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓ \n      ☆ ~ɪᴛsᴍᴇ ɪɴʀʟʙᴏᴛ~ ☆ \n ┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛ \n ┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓ \n ┣⍟ \n ┣⍟👾 ᴅᴇᴠᴇʟᴏᴘᴇʀ : ꜰᴀꜱᴡᴇᴇʜ \n ┣⍟👾 ʙᴏᴛ : ☚⃟፝༄ɪɴʀʟ☚⃟፝࿐ \n ┣⍟👾 ᴠᴇʀsɪᴏɴ : 1.0 \n ┣⍟👾 ᴍᴏᴅᴇ : ᴘᴜʙʟɪᴄ \n ┣⍟👾 *ᴘʀᴇғɪx* : [ . ] \n ┣⍟ \n ┣⍟     ▎▍▌▌▉▏▎▌▉▐▏▌▎\n ┣⍟     ▎▍▌▌▉▏▎▌▉▐▏▌▎ \n ┣⍟         ₢ꜰᴀꜱᴡᴇᴇʜ𖨆 \n ┣⍟ \n ┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛ \n ⍟⍟⍟⍟⍟⍟⍟⍟⍟⍟⍟⍟⍟⍟⍟⍟⍟ \n ┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓ \n ┣⍟        ◩ *ʟɪꜱᴛ* ◪ \n ┣⍟🎲 .ᴏᴡɴᴇʀ \n ┣⍟🎲 .ɢɪᴛ \n ┣⍟🎲 .ᴀʟɪᴠᴇ \n ┣⍟ \n ┣⍟ ✩[ *ᴄʀᴇᴀᴛᴇʀ* ]✩ \n ┣⍟ \n ┣⍟👨🏻‍💻 ꜰᴀꜱᴡᴇᴇʜ \n ┣⍟ \n ┣⍟    ❏ ɪɴʀʟʙᴏᴛ ❏ \n ┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛ \n ┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓ \n ┣⍟      ◩ *ᴛʜᴀɴᴋ ʏᴏᴜ* ◪ \n ┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛'}, type: 1},
        {buttonId: 'id2', buttonText: {displayText: 'ꜱᴜᴩᴩᴏʀᴛ \n\nɪɴʀʟʙᴏᴛ.\n\n\nᴩʜᴏɴᴇ-ᴩᴀy:+91 7025099154 \n\nɢ-ᴩᴀy:+91 7025099154 \nᴩᴀyᴛᴍ: +91 7025099154\n\n '}, type: 1},
        {buttonId: 'id3', buttonText: {displayText: 'GIT \n\n```ᴄʀᴇᴀᴛᴇʀ : ꜰᴀꜱᴡᴇᴇʜ```\n\n```owner number wa.me/917025099161```\n\n```whatsapp group: ᴜɴᴋɴᴏᴡɴ\n\n```github link :https://github.com/inrlwabot/faz```\n\n'  }, type: 1},

      ]
      
      const buttonMessage = {
          contentText: ' ʜʏ ᴅᴜᴅᴇ....👋🏻\n\n         ☆ ɪɴʀʟʙᴏᴛ ☆\n\n👾 ɴᴀᴍᴇ  : ɪɴʀʟʙᴏᴛ\n👾 sᴛᴀᴛᴇs : ᴘᴜʙʟɪᴄ\n😂 ꜱᴜᴩᴩᴏʀᴛ   : ᴄʟɪᴄᴋ ꜱᴜᴩᴩᴏʀᴛ\n😂 ʟɪꜱᴛ : ꜰᴏʀ ᴍᴇɴᴜ\n👾 ᴘᴇʀғɪx : [ . ]\n\n         ☆ ᴄʀᴇᴀᴛᴇʀ ☆\n\n👨🏻‍💻 ꜰᴀꜱᴡᴇᴇʜ\n\n          ☆ *ᴛʜᴀɴᴋ ʏᴏᴜ* ☆\n\n😂 ᴄʟɪᴄᴋ ꜱᴜᴩᴩᴏʀᴛ ᴀɴᴅ ʙᴜᴛ ᴄᴏꜰꜰɪᴇ ᴛᴏ ᴍᴇ \n😂',
          footerText: '₢ꜰᴀꜱᴡᴇᴇʜ',
          buttons: buttons,
          headerType: 1
      }
      
      await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage, { mimetype: Mimetype.buttonsMessage, quoted: message.data, ptt: true,quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { orderMessage: { itemCount: 99999, status: 200, thumbnail: fs.readFileSync('P3R3R03.jpg'), surface: 200, message: Config.AFN, orderTitle: Config.AFN, "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": Config.AFN + '\n', "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1080, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('P3R3R03.jpg')}}}});
	
}));
