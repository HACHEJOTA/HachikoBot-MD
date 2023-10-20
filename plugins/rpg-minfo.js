import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, participants, isPrems}) => {
const pp = 'https://telegra.ph/file/8e53571eb0d3061a66ab4.jpg';
const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
const {name, limit, lastclaim, registered, regTime, age, premiumTime} = global.db.data.users[who];
const prem = global.prems.includes(who.split `@` [0]);
const {money, joincount} = global.db.data.users[m.sender];
const {exp, level, role} = global.db.data.users[m.sender];
const text = `┏━━━━━━━━━━━━━━━━┓
*┃ꕥ 𝙼𝙸 𝙸𝙽𝙵𝙾 ꕥ*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣⟣❥ *🏁 𝙽𝙸𝚅𝙴𝙻:* ${level}
┣⟣❥ *🧿 𝙴𝚇𝙿𝙴𝚁𝙸𝙴𝙽𝙲𝙸𝙰:* ${exp}
┣⟣❥ *🗡️ 𝚁𝙰𝙽𝙶𝙾:* ${role}
┣⟣❥ *💎 𝙳𝙸𝙰𝙼𝙰𝙽𝚃𝙴𝚂:* ${limit}
┣⟣❥ *💰 𝙷𝙰𝙲𝙷𝙸𝙺𝙾𝙲𝙾𝙸𝙽𝚂:* ${money}
┣⟣❥ *🔮 𝚃𝙾𝙺𝙴𝙽𝚂:* ${joincount}
┣⟣❥ *🎟️ 𝙿𝚁𝙴𝙼𝙸𝚄𝙽:* ${premiumTime > 0 ? 'Si' : (isPrems ? 'Si' : 'No') || ''}
┗━━━━━━━━━━━━━━━━┛`
   await conn.sendMessage(m.chat, {
text: text,
contextInfo: {
externalAdReply: {
title: wm,
body: titulowm2,
thumbnailUrl: pp, 
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}}} , { quoted: m });
  //conn.sendMessage(m.chat, {text: text}, {quoted: m});
 };
handler.help = ['profile [@user]'];
handler.tags = ['xp'];
handler.command = /^minfo|infoyo?$/i;
export default handler; 
