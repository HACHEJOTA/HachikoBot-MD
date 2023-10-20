import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;

  const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
  const {money, joincount} = global.db.data.users[m.sender];
  const {exp, limit, level, role} = global.db.data.users[m.sender];
  const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png');
  const fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': imagen1, thumbnail: imagen1 ,sendEphemeral: true}}};
    await conn.reply(m.chat, '_𝙀𝙣 𝙗𝙧𝙚𝙫𝙚 𝙨𝙚 𝙚𝙣𝙫𝙞𝙖𝙧𝙖 𝙚𝙡 𝙢𝙚𝙣𝙪 𝙥𝙖𝙧𝙖 𝙤𝙬𝙣𝙚𝙧𝙨 . . ._', m, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: '👋 ᕼOᒪᗩ!!', body: 'sɪɢᴜᴇᴍᴇ ᴇɴ ɪɴsᴛᴀɢʀᴀᴍ', sourceUrl: global.md, thumbnail: await (await fetch(pp)).buffer() }}})
//m.react('🐶');
    await conn.sendMessage(m.chat, { react: { text: '👑', key: m.key } })
  let txt = `┏━━━━━━━━━━━━━━━━━━┓
┣⟣☯︎ 𝙾𝚆𝙽𝙴𝚁: 𝙷𝙰𝙲𝙷𝙴𝙹𝙾𝚃𝙰
┣⟣☯︎ 𝙽𝚄𝙼𝙴𝚁𝙾: +51 992 004 117
┣⟣☯ 𝙸𝙳𝙸𝙾𝙼𝙰: 𝙴𝚂𝙿𝙰𝙽̃𝙾𝙻
┣⟣☯︎ 𝙵𝙴𝙲𝙷𝙰: ${date}
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
*┃❍ 𝚂𝙾𝙻𝙾 𝙾𝚆𝙽𝙴𝚁𝚂 ❍*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣⟣❥  > *<funcion>*
┣⟣❥  => *<funcion>*
┣⟣❥  _$ *<funcion>*
┣⟣❥  _${usedPrefix}setprefix *<prefijo>*_
┣⟣❥  _${usedPrefix}desactivarwa *<numero>*_
┣⟣❥  _${usedPrefix}resetprefix_
┣⟣❥  _${usedPrefix}autoadmin_
┣⟣❥  _${usedPrefix}chetar_
┣⟣❥  _${usedPrefix}leavegc_
┣⟣❥  _${usedPrefix}cajafuerte_
┣⟣❥  _${usedPrefix}blocklist_
┣⟣❥  _${usedPrefix}block *<@tag / numero>*_
┣⟣❥  _${usedPrefix}unblock *<@tag / numero>*_
┣⟣❥  _${usedPrefix}enable *restrict*_
┣⟣❥  _${usedPrefix}disable *restrict*_
┣⟣❥  _${usedPrefix}enable *autoread*_
┣⟣❥  _${usedPrefix}disable *autoread*_
┣⟣❥  _${usedPrefix}enable *public*_
┣⟣❥  _${usedPrefix}disable *public*_
┣⟣❥  _${usedPrefix}enable *pconly*_
┣⟣❥  _${usedPrefix}disable *pconly*_
┣⟣❥  _${usedPrefix}enable *gconly*_
┣⟣❥  _${usedPrefix}disable *gconly*_
┣⟣❥  _${usedPrefix}enable *anticall*_
┣⟣❥  _${usedPrefix}disable *anticall*_
┣⟣❥  _${usedPrefix}enable *antiprivado*_
┣⟣❥  _${usedPrefix}disable *antiprivado*_
┣⟣❥  _${usedPrefix}enable *modejadibot*_
┣⟣❥  _${usedPrefix}disable *modejadibot*_
┣⟣❥  _${usedPrefix}enable *audios_bot*_
┣⟣❥  _${usedPrefix}disable *audios_bot*_
┣⟣❥  _${usedPrefix}enable *antispam*_
┣⟣❥  _${usedPrefix}disable *antispam*_
┣⟣❥  _${usedPrefix}msg *<texto>*_
┣⟣❥  _${usedPrefix}banchat_
┣⟣❥  _${usedPrefix}unbanchat_
┣⟣❥  _${usedPrefix}resetuser *<@tag>*_
┣⟣❥  _${usedPrefix}banuser *<@tag>*_
┣⟣❥  _${usedPrefix}unbanuser *<@tag>*_
┣⟣❥  _${usedPrefix}dardiamantes *<@tag> <cantidad>*_
┣⟣❥  _${usedPrefix}añadirxp *<@tag> <cantidad>*_
┣⟣❥  _${usedPrefix}banuser *<@tag>*_
┣⟣❥  _${usedPrefix}bc *<texto>*_
┣⟣❥  _${usedPrefix}bcchats *<texto>*_
┣⟣❥  _${usedPrefix}bcgc *<texto>*_
┣⟣❥  _${usedPrefix}bcgc2 *<audio>*_
┣⟣❥  _${usedPrefix}bcgc2 *<video>*_
┣⟣❥  _${usedPrefix}bcgc2 *<imagen>*_
┣⟣❥  _${usedPrefix}bcbot *<texto>*_
┣⟣❥  _${usedPrefix}cleartpm_
┣⟣❥  _${usedPrefix}restart_
┣⟣❥  _${usedPrefix}update_
┣⟣❥  _${usedPrefix}banlist_
┣⟣❥  _${usedPrefix}addprem *<@tag> <tiempo>*_
┣⟣❥  _${usedPrefix}addprem2 *<@tag> <tiempo>*_
┣⟣❥  _${usedPrefix}addprem3 *<@tag> <tiempo>*_
┣⟣❥  _${usedPrefix}addprem4 *<@tag> <tiempo>*_
┣⟣❥  _${usedPrefix}delprem *<@tag>*_
┣⟣❥  _${usedPrefix}listcmd_
┣⟣❥  _${usedPrefix}setppbot *<responder a imagen>*_
┣⟣❥  _${usedPrefix}addcmd *<texto> <responder a sticker/imagen>*_
┣⟣❥  _${usedPrefix}delcmd *<responder a sticker/imagen con comando o texto asignado>*_
┣⟣❥  _${usedPrefix}saveimage
┣⟣❥  _${usedPrefix}viewimage
┗━━━━━━━━━━━━━━━━┛`;
   await conn.sendMessage(m.chat, {text: txt.trim(), mentions: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": '乂 𝙷 𝙰 𝙲 𝙷 𝙸 𝙺 𝙾 - 𝙱 𝙾 𝚃 - 𝙼 𝙳 乂', "containsAutoReply": true, "mediaType": 1, "thumbnail": [imagen6,imagen1,imagen4].getRandom(), "mediaUrl": global.gp1, "sourceUrl": global.gp1}}}, {quoted: fkon});
 // m.react('🎮');
  } catch {
    conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝙿𝙾𝚁𝙵𝙰𝚅𝙾𝚁 𝚄𝚂𝙴 𝙴𝙻 .allmenu*', m);
  }
};
handler.help = ['menu'];
handler.tags = ['menu'];
handler.command = /^(menuowner|solowner)$/i;
export default handler;
                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                
