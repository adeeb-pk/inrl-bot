/* Codded by @phaticusthiccy
Telegram: t.me/phaticusthiccy
Instagram: www.instagram.com/mhd_fasweeh
*/

const faz = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('tagall');

if (Config.STANDPLK == 'off' || Config.STANDPLK == 'OFF') {
if (Config.WORKTYPE == 'private') {
    faz.addCommand({pattern: 'tagadmin$', fromMe: true, desc: Lang.TAGADMİN}, (async (message, match) => {
        let grup = await message.client.groupMetadata(message.jid);
        var jids = [];
        mesaj = '';
        grup['participants'].map(async (uye) => {
            if (uye.isAdmin) {
                mesaj += '👮‍♂️@' + uye.id.split('@')[0] + '\n';
                jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
            }
        });
        await message.client.sendMessage(message.jid,mesaj, MessageType.extendedText, {contextInfo: {mentionedJid: jids}, previewType: 0})
    }));
}
else if (Config.WORKTYPE == 'public') {
    faz.addCommand({pattern: 'tagadmin$', fromMe: false, desc: Lang.TAGADMİN}, (async (message, match) => {
        let grup = await message.client.groupMetadata(message.jid);
        var jids = [];
        mesaj = '';
        grup['participants'].map(async (uye) => {
            if (uye.isAdmin) {
                mesaj += '👮‍♂️@' + uye.id.split('@')[0] + '\n';
                jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
            }
        });
        await message.client.sendMessage(message.jid,mesaj, MessageType.extendedText, {contextInfo: {mentionedJid: jids}, previewType: 0})
    }));
}

else if (Config.WORKTYPE == 'admin') {
    faz.addCommand({pattern: 'tagadmin$', fromMe: false, desc: Lang.TAGADMİN}, (async (message, match) => {
        let grup = await message.client.groupMetadata(message.jid);
        var jids = [];
        mesaj = '';
        grup['participants'].map(async (uye) => {
            if (uye.isAdmin) {
                mesaj += '👮‍♂️@' + uye.id.split('@')[0] + '\n';
                jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
            }
        });
        await message.client.sendMessage(message.jid,mesaj, MessageType.extendedText, {contextInfo: {mentionedJid: jids}, previewType: 0})
    }));
}
}
