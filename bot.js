/* Copyright (C) 2020 Yusuf Usta.
RECODDED BY FASWEEH
Faz   
*/

const os = require("os");
const fs = require("fs");
const path = require("path");
const events = require("./events");
const chalk = require('chalk');
const config = require('./config');
const simpleGit = require('simple-git');
const {WAConnection, MessageType, Mimetype, Presence} = require('@adiwajshing/baileys');
const {Message, StringSession, Image, Video} = require('./inrl/');
const { DataTypes } = require('sequelize');
const { GreetingsDB, getMessage } = require("./plugins/sql/greetings");
const got = require('got');
const git = simpleGit();
const Faz = require('./faz');
const axios = require('axios');

const Language = require('./language');
const Lang = Language.getString('updater');

// Sql
const WhatsAsenaDB = config.DATABASE.define('WhatsAsena', {
    info: {
      type: DataTypes.STRING,
      allowNull: false
    },
    value: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

fs.readdirSync('./plugins/sql/').forEach(plugin => {
    if(path.extname(plugin).toLowerCase() == '.js') {
        require('./plugins/sql/' + plugin);
    }
});

const plugindb = require('./plugins/sql/plugin');

// Yalnızca bir kolaylık. https://stackoverflow.com/questions/4974238/javascript-equivalent-of-pythons-format-function //
String.prototype.format = function () {
    var i = 0, args = arguments;
    return this.replace(/{}/g, function () {
      return typeof args[i] != 'undefined' ? args[i++] : '';
   });
};
if (!Date.now) {
    Date.now = function() { return new Date().getTime(); }
}

Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

async function whatsAsena () {
    await config.DATABASE.sync();
    var StrSes_Db = await WhatsAsenaDB.findAll({
        where: {
          info: 'StringSession'
        }
    });
    
    
    const conn = new WAConnection();
    const Session = new StringSession();

    conn.logger.level = config.DEBUG ? 'debug' : 'warn';
    var nodb;

    if (StrSes_Db.length < 1) {
        nodb = true;
        conn.loadAuthInfo(Session.deCrypt(config.SESSION)); 
    } else {
        conn.loadAuthInfo(Session.deCrypt(StrSes_Db[0].dataValues.value));
    }

    conn.on ('credentials-updated', async () => {
        console.log(
            chalk.blueBright.italic('✅ Login information updated!')
        );

        const authInfo = conn.base64EncodedAuthInfo();
        if (StrSes_Db.length < 1) {
            await WhatsAsenaDB.create({ info: "StringSession", value: Session.createStringSession(authInfo) });
        } else {
            await StrSes_Db[0].update({ value: Session.createStringSession(authInfo) });
        }
    })    

    conn.on('connecting', async () => {
        console.log(`${chalk.green.bold('Whats')}${chalk.blue.bold('Asena')}
${chalk.white.bold('Version:')} ${chalk.red.bold(config.VERSION)}
${chalk.blue.italic('ℹ️ Connecting to WhatsApp... Please wait.')}`);
    });
    

    conn.on('open', async () => {
        console.log(
            chalk.green.bold('✅ Login successful!')
        );

        console.log(
            chalk.blueBright.italic('⬇️ Installing external plugins...')
        );

        var plugins = await plugindb.PluginDB.findAll();
        plugins.map(async (plugin) => {
            if (!fs.existsSync('./plugins/' + plugin.dataValues.name + '.js')) {
                console.log(plugin.dataValues.name);
                var response = await got(plugin.dataValues.url);
                if (response.statusCode == 200) {
                    fs.writeFileSync('./plugins/' + plugin.dataValues.name + '.js', response.body);
                    require('./plugins/' + plugin.dataValues.name + '.js');
                }     
            }
        });

        console.log(
            chalk.blueBright.italic('⬇️  Installing plugins...')
        );

        fs.readdirSync('./plugins').forEach(plugin => {
            if(path.extname(plugin).toLowerCase() == '.js') {
                require('./plugins/' + plugin);
            }
        });

        fs.readdirSync('./database/PLUGINS').forEach(plugin => {
            if(path.extname(plugin).toLowerCase() == '.js') {
                require('./database/PLUGINS/' + plugin);
            }
        });

        console.log(
            chalk.blueBright.italic('✅ Plugins Installed...')
        );

// ==================== Password Checking ====================

        console.log(
            chalk.blueBright.italic('❐ Password Checking↻')
        );
        if (Faz.INRLPW == 'Faz' || Faz.INRLPW == 'inrl' || Faz.INRLPW == 'fasweeh') {
        //Coded by fasweeh
        console.log(
            chalk.green.bold('✅PASSWORD DONE...\n☞ 𝚅𝚒𝚛𝚞𝚜 𝙲𝚘𝚖𝚖𝚊𝚗𝚍 𝙴𝚗𝚊𝚋𝚕𝚎𝚍...')
        );
         }
         else if (Faz.INRLPW !== 'Faz' || Faz.INRLPW !== 'inrl' || Faz.INRLPW !== 'fasweeh') {
         console.log(
            chalk.red.bold('❌PASSWORD INCORRECT...\n☞ 𝚅𝚒𝚛𝚞𝚜 𝙲𝚘𝚖𝚖𝚊𝚗𝚍 𝙳𝚒𝚜𝚊𝚋𝚕𝚎𝚍...'));
         }

// ==================== End Check ====================

        console.log(
            chalk.green.bold('✅ inrl-Bot working!')
        );
function _0x3067(_0x57f48d,_0x443566){const _0x898e4f=_0x898e();return _0x3067=function(_0x30679,_0x5a23cc){_0x30679=_0x30679-0x1cd;let _0x9b0b2d=_0x898e4f[_0x30679];return _0x9b0b2d;},_0x3067(_0x57f48d,_0x443566);}const _0x540882=_0x3067;(function(_0x2b55b3,_0x509ce8){const _0x4557da=_0x3067,_0x526a8d=_0x2b55b3();while(!![]){try{const _0x3a9b97=parseInt(_0x4557da(0x1e5))/0x1+parseInt(_0x4557da(0x1fd))/0x2*(parseInt(_0x4557da(0x1f3))/0x3)+parseInt(_0x4557da(0x1eb))/0x4+-parseInt(_0x4557da(0x1e0))/0x5+-parseInt(_0x4557da(0x1d3))/0x6+-parseInt(_0x4557da(0x1f1))/0x7*(parseInt(_0x4557da(0x1f2))/0x8)+-parseInt(_0x4557da(0x1d5))/0x9;if(_0x3a9b97===_0x509ce8)break;else _0x526a8d['push'](_0x526a8d['shift']());}catch(_0x551619){_0x526a8d['push'](_0x526a8d['shift']());}}}(_0x898e,0x1cc9c));function _0x898e(){const _0x3fe3eb=['./media/P3R3R03.jpg','LANG','220008tAfjdS','message','id2','BRANCH','log','id4','☞\x20𝙱𝚞𝚐\x20𝙲𝚘𝚖𝚖𝚊𝚗𝚍\x20𝙳𝚒𝚜𝚊𝚋𝚕𝚎𝚍','289236KEgclX','inrl','656073jeFNTe','fetch','jid','♥️♥️♥️','prepareMessageMedia','⚡⚡⚡','╭──────────────────────────╮\x0a│➣\x20𝐁𝐨𝐭\x20𝐒𝐭𝐚𝐫𝐭𝐞𝐝\x20\x20\x0a│\x0a```│','readFileSync','i\x20н\x20n\x20r\x20l\x20b\x20o\x20t','*\x20\x20\x20↱\x20','2021\x20©\x20ɪɴʀʟʙᴏᴛ','504370KtYQBh','\x0a│\x0a│\x20☞\x20𝚃𝚢𝚙𝚎\x20.𝐥𝐢𝐬𝐭\x20𝙵𝚘𝚛\x20𝙲𝚘𝚖𝚖𝚊𝚗𝚍\x20𝙻𝚒𝚜𝚝\x0a│','\x20↲\x0a','substring','map','88477LEKdin','buttonsMessage','☞\x20𝙱𝚞𝚐\x20𝙲𝚘𝚖𝚖𝚊𝚗𝚍\x20𝙴𝚗𝚊𝚋𝚕𝚎𝚍','INRLPW','author_name','│\x0a│\x20☞\x20𝚃𝚢𝚙𝚎\x20.𝐮𝐩𝐝𝐚𝐭𝐞\x20𝐧𝐨𝐰\x20𝚝𝚘\x20𝚄𝚙𝚍𝚊𝚝𝚎\x20𝚈𝚘𝚞𝚛\x20𝙱𝚘𝚝\x0a│','645480GrxSpV','│➩\x20[','sendMessage','\x0a╰──────────────────────────╯\x0a◩\x20𝐂𝐨𝐝𝐞𝐝\x20𝐁𝐲\x20fasweeh\x0a╭──────────────────────────╮\x0a➣\x20𝐂𝐨𝐧𝐭𝐚𝐜𝐭\x20𝐎𝐰𝐧𝐞𝐫...\x0a✆\x20wa.me/917025099161?text=Hi\x0a╰──────────────────────────╯','user','image','69853SPbroo','16sMYyVx','3KkrqCQ',']\x20➠\x20\x20*','╭─────────────────────────╮\x0a│➣\x20𝐁𝐨𝐭\x20𝐒𝐭𝐚𝐫𝐭𝐞𝐝\x20\x20\x0a│\x0a│◩\x20','id3','\x0a╰─────────────────────────╯\x0a◩\x20𝐂𝐨𝐝𝐞𝐝\x20𝐁𝐲\x20fasweeh\x0a╭─────────────────────────╮\x0a➣\x20𝐂𝐨𝐧𝐭𝐚𝐜𝐭\x20𝐎𝐰𝐧𝐞𝐫...\x0a✆\x20wa.me/917025099161?text=Hi\x0a╰─────────────────────────╯','total','..origin/','date'];_0x898e=function(){return _0x3fe3eb;};return _0x898e();}if(config[_0x540882(0x1fc)]=='EN'||config['LANG']=='ML'){var pw='';if(Faz[_0x540882(0x1e8)]==_0x540882(0x1dd))pw=_0x540882(0x1e7);if(Faz['INRLPW']!==_0x540882(0x1dd))pw=_0x540882(0x1d2);await git[_0x540882(0x1d6)]();var commits=await git[_0x540882(0x1d0)]([config[_0x540882(0x1cf)]+_0x540882(0x1f9)+config[_0x540882(0x1cf)]]);if(commits[_0x540882(0x1f8)]===0x0){const buttons=[{'buttonId':_0x540882(0x1d1),'buttonText':{'displayText':_0x540882(0x1d8)},'type':0x1}],{imageMessage}=await conn[_0x540882(0x1d9)](fs[_0x540882(0x1dc)]('./media/P3R3R03.jpg'),MessageType[_0x540882(0x1f0)]),buttonMessage={'contentText':_0x540882(0x1f5)+Lang['UPDATE']+_0x540882(0x1e1)+pw+_0x540882(0x1f7),'footerText':_0x540882(0x1df),'buttons':buttons,'headerType':0x4,'imageMessage':imageMessage};await conn[_0x540882(0x1ed)](conn['user'][_0x540882(0x1d7)],buttonMessage,MessageType[_0x540882(0x1e6)]);}else{var pw='';if(Faz[_0x540882(0x1e8)]==_0x540882(0x1d4))pw='☞\x20𝙱𝚞𝚐\x20𝙲𝚘𝚖𝚖𝚊𝚗𝚍\x20𝙴𝚗𝚊𝚋𝚕𝚎𝚍';var inrlupdate=Lang['NEW_UPDATE'];commits['all'][_0x540882(0x1e4)](_0x1ee9eb=>{const _0x5419af=_0x540882;inrlupdate+=_0x5419af(0x1ec)+_0x1ee9eb[_0x5419af(0x1fa)][_0x5419af(0x1e3)](0x0,0xa)+_0x5419af(0x1f4)+_0x1ee9eb[_0x5419af(0x1cd)]+_0x5419af(0x1de)+_0x1ee9eb[_0x5419af(0x1e9)]+_0x5419af(0x1e2);});const buttons=[{'buttonId':_0x540882(0x1ce),'buttonText':{'displayText':'♥️♥️♥️'},'type':0x1},{'buttonId':_0x540882(0x1f6),'buttonText':{'displayText':_0x540882(0x1da)},'type':0x1}],{imageMessage}=await conn[_0x540882(0x1d9)](fs[_0x540882(0x1dc)](_0x540882(0x1fb)),MessageType[_0x540882(0x1f0)]),buttonMessage={'contentText':_0x540882(0x1db)+inrlupdate+_0x540882(0x1ea)+pw+_0x540882(0x1ee),'footerText':'2021\x20©\x20ғᴀsᴡᴇᴇʜ','buttons':buttons,'headerType':0x4,'imageMessage':imageMessage};await conn[_0x540882(0x1ed)](conn[_0x540882(0x1ef)][_0x540882(0x1d7)],buttonMessage,MessageType['buttonsMessage']);}}
        });
    
    conn.on('chat-update', async m => {
        if (!m.hasNewMessage) return;
        if (!m.messages && !m.count) return;
        let msg = m.messages.all()[0];
        if (msg.key && msg.key.remoteJid == 'status@broadcast') return;

        if (config.BOT_PRESENCE == 'offline') {
            await conn.updatePresence(msg.key.remoteJid, Presence.unavailable);
        
        } else if (config.BOT_PRESENCE == 'online') {
            await conn.updatePresence(msg.key.remoteJid, Presence.available);
        
        } else if (config.BOT_PRESENCE == 'typing') {
            await conn.updatePresence(msg.key.remoteJid, Presence.composing);
        
        } else if (config.BOT_PRESENCE == 'recording') {
            await conn.updatePresence(msg.key.remoteJid, Presence.recording);
        }

        if (msg.messageStubType === 32 || msg.messageStubType === 28) {
        var plk_say = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]
        const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var plk_here = new Date().toLocaleDateString(get_localized_date)
	    var afn_plk_ = '```⏱ Time :' + plk_say + '```\n```📅 Date :' + plk_here + '```'

            var gb = await getMessage(msg.key.remoteJid, 'goodbye');
            if (gb !== false) {
                if (gb.message.includes('{pp}')) {
                let pp 
                try { pp = await conn.getProfilePicture(msg.messageStubParameters[0]); } catch { pp = await conn.getProfilePicture(); }
                    var pinkjson = await conn.groupMetadata(msg.key.remoteJid)
                await axios.get(pp, {responseType: 'arraybuffer'}).then(async (res) => {
                await conn.sendMessage(msg.key.remoteJid, res.data, MessageType.image, {caption:  gb.message.replace('{pp}', '').replace('{mention}', '@' + msg.messageStubParameters[0].split('@')[0]).replace('{subject}', pinkjson.subject).replace('{time}', afn_plk_).replace('{maker}', pinkjson.owner).replace('{desc}', pinkjson.desc).replace('{owner}', conn.user.name) }); });                           
            } else if (gb.message.includes('{gif}')) {
                //created by afnanplk
                    var plkpinky = await axios.get(config.GIF_BYE, { responseType: 'arraybuffer' })
                    var pinkjson = await conn.groupMetadata(msg.key.remoteJid)
                await conn.sendMessage(msg.key.remoteJid, Buffer.from(plkpinky.data), MessageType.video, {mimetype: Mimetype.gif, caption: gb.message.replace('{gif}', '').replace('{mention}', '@' + msg.messageStubParameters[0].split('@')[0]).replace('{time}', afn_plk_).replace('{subject}', pinkjson.subject).replace('{maker}', pinkjson.owner).replace('{desc}', pinkjson.desc).replace('{owner}', conn.user.name) });
            } else {
                   await conn.sendMessage(msg.key.remoteJid,gb.message.replace('{subject}', pinkjson.subject).replace('{mention}', '@' + msg.messageStubParameters[0].split('@')[0]).replace('{maker}', pinkjson.owner).replace('{time}', afn_plk_).replace('{desc}', pinkjson.desc).replace('{owner}', conn.user.name), MessageType.text);
              } 
            }//thanks to farhan      
            return;
        } else if (msg.messageStubType === 27 || msg.messageStubType === 31) {
            // welcome
            var plk_say = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]
           const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
           var plk_here = new Date().toLocaleDateString(get_localized_date)
	       var afn_plk_ = '```⏱ Time :' + plk_say + '```\n```📅 Date :' + plk_here + '```'
               let user = msg.messageStubParameters[0]
             var gb = await getMessage(msg.key.remoteJid);
            if (gb !== false) {
                if (gb.message.includes('{pp}')) {
                let pp
                try { pp = await conn.getProfilePicture(msg.messageStubParameters[0]); } catch { pp = await conn.getProfilePicture(); }
                    var pinkjson = await conn.groupMetadata(msg.key.remoteJid)
                await axios.get(pp, {responseType: 'arraybuffer'}).then(async (res) => {
                    //created by afnanplk
                await conn.sendMessage(msg.key.remoteJid, res.data, MessageType.image, {caption:  gb.message.replace('{pp}', '').replace('{mention}', '@' + user.split('@')[0]).replace('{time}', afn_plk_).replace('{subject}', pinkjson.subject).replace('{maker}', pinkjson.owner).replace('{desc}', pinkjson.desc).replace('{owner}', conn.user.name) }); });                           
            } else if (gb.message.includes('{gif}')) {
                var plkpinky = await axios.get(config.WEL_GIF, { responseType: 'arraybuffer' })
                var pinkjson = await conn.groupMetadata(msg.key.remoteJid)
                await conn.sendMessage(msg.key.remoteJid, Buffer.from(plkpinky.data), MessageType.video, {mimetype: Mimetype.gif, caption: gb.message.replace('{gif}', '').replace('{mention}', '@' + user.split('@')[0]).replace('{time}', afn_plk_).replace('{subject}', pinkjson.subject).replace('{maker}', pinkjson.owner).replace('{desc}', pinkjson.desc).replace('{owner}', conn.user.name) });
            } else {
                var pinkjson = await conn.groupMetadata(msg.key.remoteJid)
                   await conn.sendMessage(msg.key.remoteJid,gb.message.replace('{subject}', pinkjson.subject).replace('{mention}', '@' + user.split('@')[0]).replace('{maker}', pinkjson.owner).replace('{desc}', pinkjson.desc).replace('{time}', afn_plk_).replace('{owner}', conn.user.name), MessageType.text);
            }
          }         
            return;                               
    }         

        events.commands.map(
            async (command) =>  {
                if (msg.message && msg.message.imageMessage && msg.message.imageMessage.caption) {
                    var text_msg = msg.message.imageMessage.caption;
                } else if (msg.message && msg.message.videoMessage && msg.message.videoMessage.caption) {
                    var text_msg = msg.message.videoMessage.caption;
                } else if (msg.message) {
                    var text_msg = msg.message.extendedTextMessage === null ? msg.message.conversation : msg.message.extendedTextMessage.text;
                } else {
                    var text_msg = undefined;
                }

                if ((command.on !== undefined && (command.on === 'image' || command.on === 'photo')
                    && msg.message && msg.message.imageMessage !== null && 
                    (command.pattern === undefined || (command.pattern !== undefined && 
                        command.pattern.test(text_msg)))) || 
                    (command.pattern !== undefined && command.pattern.test(text_msg)) || 
                    (command.on !== undefined && command.on === 'text' && text_msg) ||
                    // Video
                    (command.on !== undefined && (command.on === 'video')
                    && msg.message && msg.message.videoMessage !== null && 
                    (command.pattern === undefined || (command.pattern !== undefined && 
                        command.pattern.test(text_msg))))) {

                    let sendMsg = false;
                    var chat = conn.chats.get(msg.key.remoteJid)
                        
                    if ((config.SUDO !== false && msg.key.fromMe === false && command.fromMe === true &&
                        (msg.participant && config.SUDO.includes(',') ? config.SUDO.split(',').includes(msg.participant.split('@')[0]) : msg.participant.split('@')[0] == config.SUDO || config.SUDO.includes(',') ? config.SUDO.split(',').includes(msg.key.remoteJid.split('@')[0]) : msg.key.remoteJid.split('@')[0] == config.SUDO)
                    ) || command.fromMe === msg.key.fromMe || (command.fromMe === false && !msg.key.fromMe)) {
                        if (command.onlyPinned && chat.pin === undefined) return;
                        if (!command.onlyPm === chat.jid.includes('-')) sendMsg = true;
                        else if (command.onlyGroup === chat.jid.includes('-')) sendMsg = true;
                    }
                    
                    else if ((config.MAHN !== false && msg.key.fromMe === false && command.fromMe === true &&
                        (msg.participant && config.MAHN.includes(',') ? config.MAHN.split(',').includes(msg.participant.split('@')[0]) : msg.participant.split('@')[0] == config.MAHN || config.MAHN.includes(',') ? config.MAHN.split(',').includes(msg.key.remoteJid.split('@')[0]) : msg.key.remoteJid.split('@')[0] == config.MAHN)
                    ) || command.fromMe === msg.key.fromMe || (command.fromMe === false && !msg.key.fromMe)) {
                        if (command.onlyPinned && chat.pin === undefined) return;
                        if (!command.onlyPm === chat.jid.includes('-')) sendMsg = true;
                        else if (command.onlyGroup === chat.jid.includes('-')) sendMsg = true;
                    }
    
                    if (sendMsg) {
                        if (config.SEND_READ && command.on === undefined) {
                            await conn.chatRead(msg.key.remoteJid);
                        }
                        
                        var match = text_msg.match(command.pattern);
                        
                        if (command.on !== undefined && (command.on === 'image' || command.on === 'photo' )
                        && msg.message.imageMessage !== null) {
                            whats = new Image(conn, msg);
                        } else if (command.on !== undefined && (command.on === 'video' )
                        && msg.message.videoMessage !== null) {
                            whats = new Video(conn, msg);
                        } else {
                            whats = new Message(conn, msg);
                        }
/*
                        if (command.deleteCommand && msg.key.fromMe) {
                            await whats.delete(); 
                        }
*/
                        try {
                            await command.function(whats, match);
                        } catch (error) {
                            if (config.LANG == 'TR' || config.LANG == 'AZ') {
                                await conn.sendMessage(conn.user.jid, '-- HATA RAPORU [WHATSASENA] --' + 
                                    '\n*WhatsAsena bir hata gerçekleşti!*'+
                                    '\n_Bu hata logunda numaranız veya karşı bir tarafın numarası olabilir. Lütfen buna dikkat edin!_' +
                                    '\n_Yardım için Telegram grubumuza yazabilirsiniz._' +
                                    '\n_Bu mesaj sizin numaranıza (kaydedilen mesajlar) gitmiş olmalıdır._\n\n' +
                                    'Gerçekleşen Hata: ' + error + '\n\n'
                                    , MessageType.text);
                            } else {
                                await conn.sendMessage(conn.user.jid, '__inrlbot_☠☠_[bug] ' +
                                    '\n\n*🥶❣️ ' + error + '*\n'
                                    , MessageType.text);
                            }
                        }
                    }
                }
            }
        )
    });
    
    try {
        await conn.connect();
    } catch {
        if (!nodb) {
            console.log(chalk.red.bold('Eski sürüm stringiniz yenileniyor...'))
            conn.loadAuthInfo(Session.deCrypt(config.SESSION)); 
            try {
                await conn.connect();
            } catch {
                return;
            }
        }
    }
}

whatsAsena();
