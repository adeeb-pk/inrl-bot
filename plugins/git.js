const Asena = require('../events');

const {MessageType} = require('@adiwajshing/baileys');

const con = require('../config');

// Descriptions

const SEWA = "link making chyyum. just for..."

// Sentences

const SEWB = "🎁 ```making link!``` 🎲"

// Results

const SEWC = "```uploding link:``` "

    if (con.WORKTYPE === 'private') {

        Asena.addCommand({pattern: 'git', fromMe: true, desc: SEWA}, (async (message, match) => {

            await message.client.sendMessage(message.jid, SEWB, MessageType.text);

            await new Promise(r => setTimeout(r, 4000));

            // Numbers

            var r_text = new Array ();

            r_text[0] = "https://github.com/inrlwabot/faz";

            r_text[1] = "https://github.com/inrlwabot/faz";

            var i = Math.floor(2*Math.random())

            await message.client.sendMessage(message.jid, SEWC + `${r_text[i]}`, MessageType.text);

        }));

    }

    else if (con.WORKTYPE === 'public') {

        Asena.addCommand({pattern: 'git', fromMe: false, desc: SEWA}, (async (message, match) => {

            await message.client.sendMessage(message.jid, SEWB, MessageType.text);

            await new Promise(r => setTimeout(r, 4000));

            // Numbers

            var r_text = new Array ();

            r_text[0] = "https://github.com/inrlwabot/faz";

            r_text[1] = "https://github.com/inrlwabot/faz";

            var i = Math.floor(2*Math.random())

            await message.client.sendMessage(message.jid, SEWC + `${r_text[i]}`, MessageType.text);

        }));

    }
