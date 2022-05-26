const faz = require('../../events');
const {MessageType} = require('@adiwajshing/baileys');
const Config = require('../../config');
let wk = Config.WORKTYPE == 'public' ? false : true

faz.addCommand({pattern: 'menu ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {

      const rows = [
        { title: "ᴏᴡɴᴇʀ-ɪɴꜰᴏ \n\n\n ┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓ \n      ☆ ~ɪᴛsᴍᴇ ɪɴʀʟʙᴏᴛ~ ☆ \n ┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛ \n ┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓ \n ┣⍟ \n ┣⍟👾 ᴅᴇᴠᴇʟᴏᴘᴇʀ : ꜰᴀꜱᴡᴇᴇʜ \n ┣⍟👾 ʙᴏᴛ : ☚⃟፝༄ɪɴʀʟ☚⃟፝࿐ \n ┣⍟👾 ᴠᴇʀsɪᴏɴ : 1.0 \n ┣⍟👾 ᴍᴏᴅᴇ : ᴘᴜʙʟɪᴄ \n ┣⍟👾 *ᴘʀᴇғɪx* : [ . ] \n ┣⍟ \n ┣⍟     ▎▍▌▌▉▏▎▌▉▐▏▌▎\n ┣⍟     ▎▍▌▌▉▏▎▌▉▐▏▌▎ \n ┣⍟         ₢ꜰᴀꜱᴡᴇᴇʜ𖨆 \n ┣⍟ \n ┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛ \n ⍟⍟⍟⍟⍟⍟⍟⍟⍟⍟⍟⍟⍟⍟⍟⍟⍟ \n ┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓ \n ┣⍟        ◩ *ʟɪꜱᴛ* ◪ \n ┣⍟🎲 .ᴏᴡɴᴇʀ \n ┣⍟🎲 .ɢɪᴛ \n ┣⍟🎲 .ᴀʟɪᴠᴇ \n ┣⍟ \n ┣⍟ ✩[ *ᴄʀᴇᴀᴛᴇʀ* ]✩ \n ┣⍟ \n ┣⍟👨🏻‍💻 ꜰᴀꜱᴡᴇᴇʜ \n ┣⍟ \n ┣⍟    ❏ ɪɴʀʟʙᴏᴛ ❏ \n ┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛ \n ┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓ \n ┣⍟      ◩ *ᴛʜᴀɴᴋ ʏᴏᴜ* ◪ \n ┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛", rowId:"" },
        { title: "ꜱᴜᴩᴩᴏʀᴛ \n\nɪɴʀʟʙᴏᴛ.\n\n\nᴩʜᴏɴᴇ-ᴩᴀy:+91 7025099154 \n\nɢ-ᴩᴀy:+91 7025099154 \nᴩᴀyᴛᴍ: +91 7025099154\n\n", rowId:"" },
        { title: "GIT \n\n```ᴄʀᴇᴀᴛᴇʀ : ꜰᴀꜱᴡᴇᴇʜ```\n\n```owner number wa.me/917025099161```\n\n```whatsapp group: ᴜɴᴋɴᴏᴡɴ\n\n```github link :https://github.com/inrlwabot/faz```\n\n", rowId:"" },
      ]

      const sections = [{ title: "🎈inrlbot🎈", rows: rows }]

      const listButton = {
        buttonText: "MENU",
        description: "command's for inrl wa bot.\nmention cheyyathe type chyyuka",
        sections: sections,
        listType: 1,
      }
await message.client.sendMessage(message.jid, listButton, MessageType.listMessage, { quoted: message.data })
}));

faz.addCommand({on: 'text', fromMe: false}, (async (message, match) => {   

const type = Object.keys(message.message)[0]
selectedButton = (type == 'buttonsResponseMessage') ? message.message.buttonsResponseMessage.selectedButtonId : ''
responseButton = (type == 'listResponseMessage') ? message.message.listResponseMessage.title : ''

if (responseButton === 'MENU') {
    await message.sendMessage(message.jid, `*TESTING 1*`, MessageType.text, { quoted: message.data })
} else if (responseButton === 'LIST') {
    await message.sendMessage(message.jid, `*TESTING 2*`, MessageType.text, { quoted: message.data })
}
}));
