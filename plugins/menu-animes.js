import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
    const pp = imagen2;
    // let vn = './media/menu.mp3'
    const d = new Date(new Date + 3600000);
    const locale = 'es';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `┏━━━━━━━━━━━━━━━━━━━━┓
┣⟣☯ 𝙾𝚆𝙽𝙴𝚁: 𝙷𝙰𝙲𝙷𝙴𝙹𝙾𝚃𝙰
┣⟣☯ 𝙽𝚄𝙼𝙴𝚁𝙾: +51 992 004 117
┣⟣☯ 𝙸𝙳𝙸𝙾𝙼𝙰: 𝙴𝚂𝙿𝙰𝙽̃𝙾𝙻
┣⟣☯ 𝙵𝙴𝙲𝙷𝙰: ${date}
┣⟣☯ 𝚃𝙸𝙴𝙼𝙿𝙾 𝙰𝙲𝚃𝙸𝚅𝙾: ${uptime}
┣⟣☯ 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂: ${rtotalreg}
┗━━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
*┃᯽ 𝙼𝙴𝙽𝚄 𝙰𝙽𝙸𝙼𝙴 ᯽*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣⟣❥ _${usedPrefix}lolivid_
┣⟣❥ _${usedPrefix}loli_
┣⟣❥ _${usedPrefix}ppcouple_
┣⟣❥ _${usedPrefix}neko_
┣⟣❥ _${usedPrefix}waifu_
┣⟣❥ _${usedPrefix}akira_
┣⟣❥ _${usedPrefix}akiyama_
┣⟣❥ _${usedPrefix}anna_
┣⟣❥ _${usedPrefix}asuna_
┣⟣❥ _${usedPrefix}ayuzawa_
┣⟣❥ _${usedPrefix}boruto_
┣⟣❥ _${usedPrefix}chiho_
┣⟣❥ _${usedPrefix}chitoge_
┣⟣❥ _${usedPrefix}deidara_
┣⟣❥ _${usedPrefix}erza_
┣⟣❥ _${usedPrefix}elaina_
┣⟣❥ _${usedPrefix}eba_
┣⟣❥ _${usedPrefix}emilia_
┣⟣❥ _${usedPrefix}hestia_
┣⟣❥ _${usedPrefix}hinata_
┣⟣❥ _${usedPrefix}inori_
┣⟣❥ _${usedPrefix}isuzu_
┣⟣❥ _${usedPrefix}itachi_
┣⟣❥ _${usedPrefix}itori_
┣⟣❥ _${usedPrefix}kaga_
┣⟣❥ _${usedPrefix}kagura_
┣⟣❥ _${usedPrefix}kaori_
┣⟣❥ _${usedPrefix}keneki_
┣⟣❥ _${usedPrefix}kotori_
┣⟣❥ _${usedPrefix}kurumi_
┣⟣❥ _${usedPrefix}madara_
┣⟣❥ _${usedPrefix}mikasa_
┣⟣❥ _${usedPrefix}miku_
┣⟣❥ _${usedPrefix}minato_
┣⟣❥ _${usedPrefix}naruto_
┣⟣❥ _${usedPrefix}nezuko_
┣⟣❥ _${usedPrefix}sagiri_
┣⟣❥ _${usedPrefix}sasuke_
┣⟣❥ _${usedPrefix}sakura_
┣⟣❥ _${usedPrefix}cosplay_
┗━━━━━━━━━━━━━━━━┛`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
     await conn.sendMessage(m.chat, {
text: captionvid,
contextInfo: {
externalAdReply: {
title: wm,
body: 𝙷𝙰𝙲𝙷𝙴𝙹𝙾𝚃𝙰,
sourceUrl: mD,  
thumbnailUrl: imagen2, 
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}}} , { quoted: fkontak2 });
        //conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    } else {
      
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
     await conn.sendMessage(m.chat, {
text: captionvid,
contextInfo: {
externalAdReply: {
title: wm,
body: 𝙷𝙰𝙲𝙷𝙴𝙹𝙾𝚃𝙰,
sourceUrl: mD,  
thumbnailUrl: imagen2, 
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}}} , { quoted: fkontak2 });
    }
  } catch {
    conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m);
  }
};
handler.command = /^(animes|menuanimes)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
/*await conn.sendMessage(m.chat, {
text: captionvid,
contextInfo: {
externalAdReply: {
title: yt_play[0].title,
body: titulowm2,
sourceUrl: yt_play[0].url,  
thumbnailUrl: yt_play[0].thumbnail, 
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}}} , { quoted: m })