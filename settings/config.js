//ʀᴇ-ᴄᴏᴅᴇ ʙʏ ʙʟᴏᴏᴅʏ sʜᴇғᴢʏ
//ᴄᴏɴᴛᴀᴄᴛ :- 2349028711461
//ᴛᴇʟᴇɢʀᴀᴍ :- t.me//shefzytech
// ᴀʟʟ ʜᴀɪʟ ʟᴏʀᴅ sʜᴇғᴢʏ
//ᴡᴀɴɴᴀ ᴄʟᴏɴᴇ ᴍʏ sʜɪɪɪɪɪ??? 
//ᴅᴏɴ'ᴛ ғᴏʀɢᴇᴛ ᴛᴏ ɢɪᴠᴇ ᴍᴇ ᴄʀᴇᴅɪᴛs
const chalk = require("chalk")
const fs = require("fs")

global.prefa = ['','!','.',',','🐤','🗿']
global.owner = ['2349028711461']
global.gambar = "https://files.catbox.moe/nhly8o.jpg"
global.thumbnail = 'https://files.catbox.moe/b5wngp.jpg'
global.botname = "𝐌𝐈𝐂𝐇𝐈𝐊𝐎-𝐌𝐃"
global.ownernumber = '2349028711461'
global.wagc = 'https://whatsapp.com/channel/0029Vasjwk25K3zcsuGFK41v'
global.botnumber = '2349028711461'
global.ownername = '𝕭𝖑𝖔𝖔𝖉𝖞 𝕾𝖍𝖊𝖋𝖟𝖞'
global.openai_key = 'process.env.OPEN_AI_KEY';
global.ownerNumber = ["2349028711461@s.whatsapp.net"]
global.ownerweb = "https://whatsapp.com/channel/0029Vasjwk25K3zcsuGFK41v"
global.url1 = 'https://whatsapp.com/channel/0029Vasjwk25K3zcsuGFK41v' //
global.url2 = 'https://whatsapp.com/channel/0029Vasjwk25K3zcsuGFK41v' //
global.themeemoji = '👌'
global.autoTyping = false//auto tying in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.antiDelete = true; // default ON
//messages
global.mess = {
wait: "ᴡᴀɪᴛ ғᴏʀ ᴍᴇ...",
   success: "ʙʏ ᴍɪᴄʜɪᴋᴏ-ᴍᴅ",
   on: "𝐈'𝐌 𝐀𝐂𝐓𝐈𝐕𝐄 🤖", 
   off: "𝐈'𝐌 𝐎𝐅𝐅 ⚠️",
   query: {
       text: "𝐖𝐇𝐄𝐑𝐄 𝐈𝐒 𝐓𝐇𝐄 𝐓𝐄𝐗𝐓? ⚠️",
       link: "𝐖𝐇𝐄𝐑𝐄 𝐈𝐒 𝐓𝐇𝐄 𝐋𝐈𝐍𝐊? ⚠️",
   },
   error: {
       fitur: "𝐒𝐎𝐑𝐑𝐘 𝐓𝐇𝐄 𝐅𝐄𝐀𝐓𝐔𝐑𝐄 𝐇𝐀𝐒 𝐄𝐑𝐑𝐎𝐑, 𝐊𝐈𝐍𝐃𝐋𝐘 𝐂𝐎𝐍𝐓𝐀𝐂𝐓 𝐓𝐇𝐄 𝐎𝐖𝐍𝐄𝐑 𝐓𝐎 𝐅𝐈𝐗 𝐈𝐓 ⚠️",
   },
   only: {
       group: "𝐂𝐎𝐌𝐌𝐀𝐍𝐃 𝐂𝐀𝐍 𝐎𝐍𝐋𝐘 𝐁𝐄 𝐔𝐒𝐄𝐃 𝐈𝐍 𝐆𝐑𝐎𝐔𝐏𝐒 ⚠️",
       private: "𝐈𝐓𝐒 𝐎𝐍𝐋𝐘 𝐅𝐎𝐑 𝐏𝐑𝐈𝐕𝐀𝐓𝐄 𝐂𝐇𝐀𝐓𝐒 ⚠️",
       owner: "𝐈𝐓 𝐂𝐀𝐍 𝐎𝐍𝐋𝐘 𝐁𝐄 𝐔𝐒𝐄𝐃 𝐁𝐘 𝐓𝐇𝐄 𝐎𝐖𝐍𝐄𝐑 ⚠️",
       admin: "𝐈 𝐀𝐌 𝐍𝐎𝐓 𝐀𝐍 𝐀𝐃𝐌𝐈𝐍 ⚠️",
       badmin: "𝐌𝐀𝐊𝐄 𝐌𝐄 𝐀𝐍 𝐀𝐃𝐌𝐈𝐍 ⚠️",
       premium: "𝐓𝐇𝐈𝐒 𝐂𝐎𝐌𝐌𝐀𝐍𝐃 𝐈𝐒 𝐅𝐎𝐑 𝐌𝐘 𝐎𝐖𝐍𝐄𝐑 𝐎𝐍𝐋𝐘 ⚠️",
   }
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})

