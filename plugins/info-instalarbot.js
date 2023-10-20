    import { performance } from 'perf_hooks'
    let handler = async (m, { conn, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    let start = `*☟︎︎︎ 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝙳𝙴 𝙸𝙽𝚂𝚃𝙰𝙻𝙰𝙲𝙸𝙾𝙽 𝙳𝙴 𝙷𝙰𝙲𝙷𝙸𝙺𝙾-𝙱𝙾𝚃 𝙴𝙽 𝚃𝙴𝚁𝙼𝚄𝚇 ☟*`
    let boost = `cd && termux-setup-storage`
    let boost2 = `apt-get update -y && apt-get upgrade -y`
    let boost3 = `pkg install -y git nodejs ffmpeg imagemagick && pkg install yarn `
    let boost4 = `git clone https://github.com/HACHEJOTA/Hachiko-Bot-MD.git && cd Hachiko-Bot-MD`
    let boost5 = `yarn install`
    let boost6 = `npm install`
    let boost7 = `npm update`
    let boost8 = `npm start` 
  
  //conn.reply(m.chat, `𝚑𝚑𝚑𝚑`, m, { contextInfo:{ externalAdReply: {title: '𝐓𝐈𝐓𝐔𝐋𝐎', body: '𝙷𝙰𝙲𝙷𝙸𝙺𝙾-𝙱𝙾𝚃-𝙼𝙳', sourceUrl: global.md, thumbnail: imagen7}}})
 

    await conn.reply(m.chat,start, m, { contextInfo:{ externalAdReply: {title: '𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃-𝐁𝐎𝐓', body: '𝙷𝙰𝙲𝙷𝙸𝙺𝙾-𝙱𝙾𝚃-𝙼𝙳', sourceUrl: global.gp1, thumbnail: imagen7}}})
   
    await m.reply(boost)
    await m.reply(boost3)
    await m.reply(boost4)   
    await m.reply(boost5)
    await m.reply(boost6)
    await m.reply(boost7)
    await m.reply(boost8)
    let old = performance.now()
    let neww = performance.now()
    let doxeo = `*𝚂𝙸 𝚃𝙸𝙴𝙽𝙴𝚂 𝙳𝚄𝙳𝙰𝚂 𝙲𝙾𝙽𝚃𝙰𝙲𝚃𝙰 𝙰 𝙼𝙸 𝙲𝚁𝙴𝙰𝙳𝙾𝚁 𝙲𝙾𝙽 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 .𝙾𝚆𝙽𝙴𝚁*`
    m.reply(doxeo, null, { mentions: conn.parseMention(doxeo) })
    }
    handler.help = ['descargarbot']
    handler.tags = ['descargarbot']
    handler.command = /^db|desbot|instalar bot|descargarbot/i
    handler.private = true
    handler.premium = true
    export default handler
    
    function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]}
    
