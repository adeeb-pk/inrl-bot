const faz = require('../../events');
const {MessageType} = require('@adiwajshing/baileys');
const Config = require('../../config');
let wk = Config.WORKTYPE == 'public' ? false : true

faz.addCommand({pattern: 'group ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {

      const rows = [
        { title: "OWNER \n\n ᴄʀᴇᴀᴛᴇʀ : ꜰᴀꜱᴡᴇᴇʜ ", rowId:"" },
        { title: "OWNER NUMBER \n\n wa.me/917025099161 \n\n wa.me/917025099154", rowId:"" },
        { title: "WA GROUP \n\n https://chat.whatsapp.com/FOutIblZOj388UVIYfefcR \n\n support group: https://chat.whatsapp.com/LUwHqs8eQIp2ys13Jz0Hbx", rowId:"" },
        { title: "GIT-LINK \n\n https://github.com/inrlwabot", rowId:"" },
      ]

      const sections = [{ title: "🎈inrlbot🎈", rows: rows }]

      const listButton = {
        buttonText: "G R O U P",
        description: "IN RL W A BOT GROUP \n CANT USE VIERUS INTHIS GROUP",
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
