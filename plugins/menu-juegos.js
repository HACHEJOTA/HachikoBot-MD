import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;

  const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
  const {money, joincount} = global.db.data.users[m.sender];
  const {exp, limit, level, role} = global.db.data.users[m.sender];
  const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png');
  const fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': imagen1, thumbnail: imagen1 ,sendEphemeral: true}}};
    await conn.reply(m.chat, '𝙀𝙣 𝙗𝙧𝙚𝙫𝙚 𝙨𝙚 𝙚𝙣𝙫𝙞𝙖𝙧𝙖 𝙚𝙡 𝙢𝙚𝙣𝙪 𝙙𝙚 𝙟𝙪𝙚𝙜𝙤𝙨. . .', m, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: '👋 ᕼOᒪᗩ!!', body: 'sɪɢᴜᴇᴍᴇ ᴇɴ ɪɴsᴛᴀɢʀᴀᴍ', sourceUrl: global.md, thumbnail: await (await fetch(pp)).buffer() }}})
//m.react('🐶');
    await conn.sendMessage(m.chat, { react: { text: '🎮', key: m.key } })
  let txt = `╭───────────────────
├⟣❥︎ *𝙾𝚆𝙽𝙴𝚁:* 𝙷𝙰𝙲𝙷𝙴𝙹𝙾𝚃𝙰
├───────────────────
├⟣❥ *𝙸𝙳𝙸𝙾𝙼𝙰:* 𝙴𝚂𝙿𝙰𝙽̃𝙾𝙻 
├⟣❥︎ *𝙼𝙾𝙳𝙾:* 𝙿𝚄𝙱𝙻𝙸𝙲𝙾
├⟣❥︎ *𝙵𝙴𝙲𝙷𝙰:* ${date}
╰─────────────────── 
╭───────────────────
*│⊷〘 𝙹𝚄𝙴𝙶𝙾𝚂  〙⊷*
├───────────────────
├⟣✎ _${usedPrefix}mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*_
├⟣✎  _${usedPrefix}fake *<texto1> <@tag> <texto2>*_
├⟣✎ _${usedPrefix}ppt *<papel / tijera /piedra>*_
├⟣✎ _${usedPrefix}prostituto *<nombre / @tag>*_
├⟣✎ _${usedPrefix}prostituta *<nombre / @tag>*_
├⟣✎ _${usedPrefix}gay2 *<nombre / @tag>*_
├⟣✎ _${usedPrefix}lesbiana *<nombre / @tag>*_
├⟣✎ _${usedPrefix}pajero *<nombre / @tag>*_
├⟣✎ _${usedPrefix}pajera *<nombre / @tag>*_
├⟣✎ _${usedPrefix}puto *<nombre / @tag>*_
├⟣✎ _${usedPrefix}puta *<nombre / @tag>*_
├⟣✎ _${usedPrefix}manco *<nombre / @tag>*_
├⟣✎ _${usedPrefix}manca *<nombre / @tag>*_
├⟣✎ _${usedPrefix}rata *<nombre / @tag>*_
├⟣✎ _${usedPrefix}love *<nombre / @tag>*_
├⟣✎ _${usedPrefix}doxear *<nombre / @tag>*_
├⟣✎ _${usedPrefix}pregunta *<texto>*_
├⟣✎ _${usedPrefix}suitpvp *<@tag>*_
├⟣✎ _${usedPrefix}slot *<apuesta>*_
├⟣✎ _${usedPrefix}ttt *<nombre sala>*_
├⟣✎ _${usedPrefix}delttt_
├⟣✎ _${usedPrefix}acertijo_
├⟣✎ _${usedPrefix}simi *<texto>*_
├⟣✎ _${usedPrefix}top *<texto>*_
├⟣✎ _${usedPrefix}topgays_
├⟣✎ _${usedPrefix}topotakus_
├⟣✎ _${usedPrefix}formarpareja_
├⟣✎ _${usedPrefix}verdad_
├⟣✎ _${usedPrefix}reto_
├⟣✎ _${usedPrefix}cancion_
├⟣✎ _${usedPrefix}pista_
├⟣✎ _${usedPrefix}akinator_
├⟣✎ _${usedPrefix}wordfind_
╰───────────────────`;
   await conn.sendMessage(m.chat, {text: txt.trim(), mentions: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": '乂 𝙷 𝙰 𝙲 𝙷 𝙸 𝙺 𝙾 - 𝙱 𝙾 𝚃 - 𝙼 𝙳 乂', "containsAutoReply": true, "mediaType": 1, "thumbnail": [imagen6,imagen1,imagen4].getRandom(), "mediaUrl": global.gp1, "sourceUrl": global.gp1}}}, {quoted: fproducto});
 // m.react('🎮');
  } catch {
    conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝙿𝙾𝚁𝙵𝙰𝚅𝙾𝚁 𝚄𝚂𝙴 𝙴𝙻 .allmenu*', m);
  }
};
handler.help = ['menu'];
handler.tags = ['menu'];
handler.command = /^(menujuegos|menujuego|juegos)$/i;
export default handler;
                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                  
