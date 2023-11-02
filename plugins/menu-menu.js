import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;

  const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
  const {money, joincount} = global.db.data.users[m.sender];
  const {exp, limit, level, role} = global.db.data.users[m.sender];
  const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png');
  const fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': imagen1, thumbnail: imagen1 ,sendEphemeral: true}}};
  await conn.reply(m.chat, '𝙀𝙣 𝙗𝙧𝙚𝙫𝙚 𝙨𝙚 𝙚𝙣𝙫𝙞𝙖𝙧𝙖 𝙚𝙡 𝙢𝙚𝙣𝙪. . .',m, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: '👋 ᕼOᒪᗩ!!', body: 'sɪɢᴜᴇᴍᴇ ᴇɴ ɪɴsᴛᴀɢʀᴀᴍ', sourceUrl: global.md, thumbnail: await (await fetch(pp)).buffer() }}})
//m.react('🐶');
    await conn.sendMessage(m.chat, { react: { text: '🕯️', key: m.key } })
  let txt =`╭───────────────────
├⟣❥︎ *𝙾𝚆𝙽𝙴𝚁:* 𝙷𝙰𝙲𝙷𝙴𝙹𝙾𝚃𝙰
├───────────────────
├⟣❥ *𝙸𝙳𝙸𝙾𝙼𝙰:* 𝙴𝚂𝙿𝙰𝙽̃𝙾𝙻 
├⟣❥︎ *𝙼𝙾𝙳𝙾:* 𝙿𝚄𝙱𝙻𝙸𝙲𝙾
├⟣❥︎ *𝙵𝙴𝙲𝙷𝙰:* ${date}
╰───────────────────

╭───────────────────
*│⊷〘 𝙱𝙾𝚃 𝙾𝙵𝙲 𝙾 𝚂𝚄𝙱 𝙱𝙾𝚃 〙⊷*
├───────────────────
├ *Este es el Bot oficial*
╰───────────────────
╭───────────────────
*│⊷〘 𝚂𝙾𝙻𝚄𝙲𝙸𝙾𝙽 𝙰 𝙴𝚁𝚁𝙾𝚁𝙴𝚂  〙⊷*
├───────────────────
├➤ Mensajes en espera
├⟣🕯️ _${usedPrefix}fixmsgespera_
├➤ Mensajes en espera (owner)
├⟣🕯️ _${usedPrefix}dsowner_
╰───────────────────
╭───────────────────
*│⊷〘  𝙸𝙽𝙵𝙾 𝙱𝙾𝚃  〙⊷*
├───────────────────
├⟣🕯️ _${usedPrefix}grupos_
├⟣🕯️ _${usedPrefix}estado_
├⟣🕯️ _${usedPrefix}infobot_
├⟣🕯️ _${usedPrefix}speedtest_
├⟣🕯️ _${usedPrefix}donar_
├⟣🕯️ _${usedPrefix}owner_
├⟣🕯️ _Bot_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
╰────────────────────

╭───────────────────
*│⊷〘 𝙸𝙽𝚂𝚃𝙰𝙻𝙰𝚁 𝙷𝙰𝙲𝙷𝙸𝙺𝙾 𝙱𝙾𝚃 〙⊷*
├───────────────────
├⟣🕯️ _${usedPrefix}descargarbot_
╰───────────────────
╭───────────────────
*│⊷〘 𝚄𝙽𝙴 𝙴𝙻 𝙱𝙾𝚃 𝙰 𝚃𝚄 𝙶𝚁𝚄𝙿𝙾 〙⊷*
├───────────────────
├⟣🕯️ _${usedPrefix}join *<enlace / link / url>*_
╰───────────────────
╭───────────────────
*│⊷〘 𝙷𝙰𝚂𝚃𝙴 𝚂𝚄𝙱 𝙱𝙾𝚃 〙⊷*
├───────────────────
├⟣🕯️ _${usedPrefix}serbot_
├⟣🕯️ _${usedPrefix}stop_
├⟣🕯️ _${usedPrefix}bots_
╰───────────────────

╭───────────────────
*│⊷〘 𝙹𝚄𝙴𝙶𝙾𝚂 〙⊷*
├───────────────────
├⟣🕯️ _${usedPrefix}menujuegos_
╰───────────────────
╭───────────────────
*│⊷〘 𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙾 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝚁 〙⊷*
├───────────────────
├⟣🕯️ _${usedPrefix}enable_
╰───────────────────
╭───────────────────
*├⊷〘 𝚁𝙴𝙿𝙾𝚁𝚃𝙰𝚁 𝙵𝙰𝙻𝙻𝙾𝚂 〙⊷*
├───────────────────
├⟣🕯️ _${usedPrefix}reporte *<texto>*_
╰───────────────────
╭───────────────────
*│⊷〘 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝚂 〙⊷*
├───────────────────
├⟣🕯️ _${usedPrefix}instagram *<enlace / link / url>*_
├⟣🕯️ _${usedPrefix}mediafire *<enlace / link / url>*_
├⟣🕯️ _${usedPrefix}gitclone *<enlace / link / url>*_
├⟣🕯️ _${usedPrefix}gdrive *<enlace / link / url>*_
├⟣🕯️ _${usedPrefix}tiktok *<enlace / link / url>*_
├⟣🕯️ _${usedPrefix}tiktokimg *<enlace / link / url>*_
├⟣🕯️ _${usedPrefix}xnxxdl *<enlace / link / url>*_
├⟣🕯️ _${usedPrefix}xvideosdl *<enlace / link / url>*_
├⟣🕯️ _${usedPrefix}twitter *<enlace / link / url>*_
├⟣🕯️ _${usedPrefix}fb *<enlace / link / url>*_
├⟣🕯️ _${usedPrefix}ytshort *<enlace / link / url>*_
├⟣🕯️ _${usedPrefix}ytmp3 *<enlace / link / url>*_
├⟣🕯️ _${usedPrefix}ytmp4 *<enlace / link / url>*_
├⟣🕯️ _${usedPrefix}ytmp3doc *<enlace / link / url>*_
├⟣🕯️ _${usedPrefix}ytmp4doc *<enlace / link / url>*_
├⟣🕯️ _${usedPrefix}videodoc *<enlace / link / url>*_
├⟣🕯️ _${usedPrefix}dapk2 *<enlace / link / url>*_
├⟣🕯️ _${usedPrefix}modapk *<texto>*_
├⟣🕯️ _${usedPrefix}stickerpack *<enlace / link / url>*_
├⟣🕯️ _${usedPrefix}play *<texto>*_
├⟣🕯️ _${usedPrefix}play2 *<texto>*_
├⟣🕯️ _${usedPrefix}play${usedPrefix}1 *<texto>*_
├⟣🕯️ _${usedPrefix}play${usedPrefix}2 *<texto>*_
├⟣🕯️ _${usedPrefix}playdoc *<texto>*_
├⟣🕯️ _${usedPrefix}playdoc2 *<texto>*_
├⟣🕯️ _${usedPrefix}playlist *<texto>*_
├⟣🕯️ _${usedPrefix}spotify *<texto>*_
├⟣🕯️ _${usedPrefix}ringtone *<texto>*_
├⟣🕯️ _${usedPrefix}soundcloud *<texto>*_
├⟣🕯️ _${usedPrefix}imagen *<texto>*_
├⟣🕯️ _${usedPrefix}pinterest *<texto>*_
├⟣🕯️ _${usedPrefix}wallpaper *<texto>*_
├⟣🕯️ _${usedPrefix}pptiktok *<nombre de usuario>*_
├⟣🕯️  _${usedPrefix}igstalk *<nombre de usuario>*_
├⟣🕯️ _${usedPrefix}igstory *<nombre de usuario>*_
├⟣🕯️ _${usedPrefix}tiktokstalk *<username>*_
╰─────────────────────
╭───────────────────
*│⊷〘 𝙱𝚄𝚂𝙲𝙰𝙳𝙾𝚁𝙴𝚂 〙⊷*
├───────────────────
├⟣🕯️ _${usedPrefix}githubsearch *<texto>*_
├⟣🕯️ _${usedPrefix}pelisplus *<texto>*_
├⟣🕯️ _${usedPrefix}modapk *<texto>*_
├⟣🕯️ _${usedPrefix}stickersearch *<texto>*_
├⟣🕯️ _${usedPrefix}stickersearch2 *<texto>*_
├⟣🕯️ _${usedPrefix}xnxxsearch *<texto>*_
├⟣🕯️ _${usedPrefix}animeinfo *<texto>*_
├⟣🕯️ _${usedPrefix}google *<texto>*_
├⟣🕯️ _${usedPrefix}letra *<texto>*_
├⟣🕯️ _${usedPrefix}wikipedia *<texto>*_
├⟣🕯️ _${usedPrefix}ytsearch *<texto>*_
├⟣🕯️ _${usedPrefix}playstore *<texto>*_
╰─────────────────────
╭───────────────────
*│⊷〘 𝙶𝚁𝚄𝙿𝙾𝚂 𝙰𝙹𝚄𝚂𝚃𝙴𝚂 〙⊷* 
├───────────────────
├⟣🕯️ _${usedPrefix}add *<numero>*_
├⟣🕯️ _${usedPrefix}kick *<@tag>*_
├⟣🕯️ _${usedPrefix}kick2 *<@tag>*_
├⟣🕯️ _${usedPrefix}listanum *<texto>*_
├⟣🕯️ _${usedPrefix}kicknum *<texto>*_
├⟣🕯️ _${usedPrefix}grupo *<abrir / cerrar>*_
├⟣🕯️ _${usedPrefix}grouptime *<opcion> <tiempo>*_
├⟣🕯️ _${usedPrefix}promote *<@tag>*_
├⟣🕯️ _${usedPrefix}demote *<@tag>*_
├⟣🕯️ _admins *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
├⟣🕯️ _${usedPrefix}demote *<@tag>*_
├⟣🕯️ _${usedPrefix}infogroup_
├⟣🕯️ _${usedPrefix}resetlink_
├⟣🕯️ _${usedPrefix}link_
├⟣🕯️ _${usedPrefix}setname *<texto>*_
├⟣🕯️ _${usedPrefix}setdesc *<texto>*_
├⟣🕯️ _${usedPrefix}invocar *<texto>*_
├⟣🕯️ _${usedPrefix}setwelcome *<texto>*_
├⟣🕯️ _${usedPrefix}setbye *<texto>*_
├⟣🕯️ _${usedPrefix}hidetag *<texto>*_
├⟣🕯️ _${usedPrefix}hidetag *<audio>*_
├⟣🕯️ _${usedPrefix}hidetag *<video>*_
├⟣🕯️ _${usedPrefix}hidetag *<imagen>*_
├⟣🕯️ _${usedPrefix}warn *<@tag>*_
├⟣🕯️ _${usedPrefix}unwarn *<@tag>*_
├⟣🕯️ _${usedPrefix}listwarn_
├⟣🕯️ _${usedPrefix}fantasmas_
├⟣🕯️ _${usedPrefix}ruletaban_
├⟣🕯️ _${usedPrefix}destraba_
├⟣🕯️ _${usedPrefix}setpp *<imagen>*_
╰─────────────────────
╭───────────────────
*│⊷〘 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙸𝙳𝙾𝚁𝙴𝚂 〙⊷*
├───────────────────
├⟣🕯️ _${usedPrefix}toanime *<imagen>*_
├⟣🕯️ _${usedPrefix}togifaud *<video>*_
├⟣🕯️ _${usedPrefix}toimg *<sticker>*_
├⟣🕯️ _${usedPrefix}tomp3 *<video>*_
├⟣🕯️ _${usedPrefix}tomp3 *<nota de voz>*_
├⟣🕯️ _${usedPrefix}toptt *<video / audio>*_
├⟣🕯️ _${usedPrefix}tovideo *<sticker>*_
├⟣🕯️ _${usedPrefix}tourl *<video / imagen / audio>*_
├⟣🕯️ _${usedPrefix}tts *<idioma> <texto>*_
├⟣🕯️ _${usedPrefix}tts *<efecto> <texto>*_
╰─────────────────────
╭───────────────────
*│⊷〘 𝙴𝙵𝙴𝙲𝚃𝙾𝚂 𝚈 𝙻𝙾𝙶𝙾𝚂 〙⊷*
├───────────────────
├⟣🕯️ _${usedPrefix}logos *<efecto> <texto>*_
├⟣🕯️ _${usedPrefix}logochristmas *<texto>*_
├⟣🕯️ _${usedPrefix}logocorazon *<texto>*_
├⟣🕯️ _${usedPrefix}ytcomment *<texto>*_
├⟣🕯️ _${usedPrefix}hornycard *<@tag>*_
├⟣🕯️ _${usedPrefix}simpcard *<@tag>*_
├⟣🕯️ _${usedPrefix}lolice *<@tag>*_
├⟣🕯️ _${usedPrefix}itssostupid_
├⟣🕯️ _${usedPrefix}pixelar_
├⟣🕯️ _${usedPrefix}blur_
╰─────────────────────
╭───────────────────
*│⊷〘 𝙵𝚁𝙰𝚂𝙴𝚂 𝚈 𝙲𝙾𝙽𝚂𝙴𝙹𝙾𝚂 〙⊷*
├───────────────────
├⟣🕯️ _${usedPrefix}piropo_
├⟣🕯️ _${usedPrefix}consejo_
├⟣🕯️ _${usedPrefix}refran_
├⟣🕯️ _${usedPrefix}fraseromantica_
├⟣🕯️ _${usedPrefix}historiadeamor_
╰─────────────────────
╭───────────────────
*│⊷〘 𝙰𝙽𝙸𝙼𝙴𝚂 𝚁𝙰𝙽𝙳𝙾𝙼 〙⊷*
├───────────────────
├⟣🕯️ _${usedPrefix}menuanimes_
╰───────────────────
╭───────────────────
*│⊷〘 𝙸𝙼𝙶 𝚁𝙰𝙽𝙳𝙾𝙼𝚂 〙⊷*
├───────────────────
├⟣🕯️  _${usedPrefix}kpop *<blackpink / exo / bts>*_
├⟣🕯️ _${usedPrefix}cristianoronaldo_
├⟣🕯️ _${usedPrefix}messi_
├⟣🕯️ _${usedPrefix}cat_
├⟣🕯️ _${usedPrefix}dog_
├⟣🕯️ _${usedPrefix}meme_
├⟣🕯️ _${usedPrefix}itzy_
├⟣🕯️ _${usedPrefix}blackpink_
├⟣🕯️ _${usedPrefix}navidad_
├⟣🕯️ _${usedPrefix}wpmontaña_
├⟣🕯️ _${usedPrefix}pubg_
├⟣🕯️ _${usedPrefix}wpgaming_
├⟣🕯️ _${usedPrefix}wpaesthetic_
├⟣🕯️ _${usedPrefix}wpaesthetic2_
├⟣🕯️ _${usedPrefix}wprandom_
├⟣🕯️ _${usedPrefix}wallhp_
├⟣🕯️ _${usedPrefix}wpvehiculo_
├⟣🕯️ _${usedPrefix}wpmoto_
├⟣🕯️ _${usedPrefix}coffee_
├⟣🕯️ _${usedPrefix}pentol_
├⟣🕯️ _${usedPrefix}caricatura_
├⟣🕯️ _${usedPrefix}ciberespacio_
├⟣🕯️ _${usedPrefix}technology_
├⟣🕯️ _${usedPrefix}doraemon_
├⟣🕯️ _${usedPrefix}hacker_
├⟣🕯️ _${usedPrefix}planeta_
├⟣🕯️ _${usedPrefix}randomprofile_
╰─────────────────────
╭───────────────────
*│⊷〘 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 +18 〙⊷*
├───────────────────
├⟣🕯️ _${usedPrefix}labiblia_
╰───────────────────
╭───────────────────
*│⊷〘 𝙴𝙵𝙴𝙲𝚃𝙾𝚂 𝙳𝙴 𝙰𝚄𝙳𝙸𝙾 〙⊷*
├───────────────────
│- *𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝙰𝚄𝙳𝙸𝙾 𝙾 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉*
├⟣🕯️ _${usedPrefix}bass_
├⟣🕯️ _${usedPrefix}blown_
├⟣🕯️ _${usedPrefix}deep_
├⟣🕯️ _${usedPrefix}earrape_
├⟣🕯️ _${usedPrefix}fast_
├⟣🕯️ _${usedPrefix}fat_
├⟣🕯️ _${usedPrefix}nightcore_
├⟣🕯️ _${usedPrefix}reverse_
├⟣🕯️ _${usedPrefix}robot_
├⟣🕯️ _${usedPrefix}slow_
├⟣🕯️ _${usedPrefix}smooth_
├⟣🕯️ _${usedPrefix}tupai_
╰─────────────────────
╭───────────────────
*│⊷〘 𝙷𝙴𝚁𝚁𝙰𝙼𝙸𝙴𝙽𝚃𝙰𝚂 〙⊷*
├───────────────────
├⟣🕯️ _${usedPrefix}chatgpt *<texto>*_
├⟣🕯️  _${usedPrefix}delchatgpt
├⟣🕯️ _${usedPrefix}gptvoz *<texto>*_
├⟣🕯️ _${usedPrefix}dall-e *<texto>*_
├⟣🕯️ _${usedPrefix}spamwa *<numero|texto|cantidad>*_
├⟣🕯️ _${usedPrefix}tamaño *<cantidad> <imagen / video>*_
├⟣🕯️ _${usedPrefix}readviewonce *<imagen / video>*_
├⟣🕯️ _${usedPrefix}afk *<motivo>*_
├⟣🕯️ _${usedPrefix}ocr *<responde a imagen>*_
├⟣🕯️ _${usedPrefix}hd *<responde a imagen>*_
├⟣🕯️ _${usedPrefix}acortar *<enlace / link / url>*_
├⟣🕯️ _${usedPrefix}calc *<operacion math>*_
├⟣🕯️ _${usedPrefix}del *<mensaje>*_
├⟣🕯️ _${usedPrefix}whatmusic *<audio>*_
├⟣🕯️ _${usedPrefix}readqr *<imagen (QR)>*_
├⟣🕯️ _${usedPrefix}qrcode *<texto>*_
├⟣🕯️ _${usedPrefix}readmore *<texto1| texto2>*_
├⟣🕯️ _${usedPrefix}styletext *<texto>*_
├⟣🕯️ _${usedPrefix}traducir *<texto>*_
├⟣🕯️ _${usedPrefix}nowa *<numero>*_,
├⟣🕯️ _${usedPrefix}horario_
├⟣🕯️ _${usedPrefix}dropmail_
╰─────────────────────
╭───────────────────
*│⊷〘 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚁𝙿𝙶 〙⊷*
├───────────────────
├⟣🕯️ _${usedPrefix}adventure_
├⟣🕯️ _${usedPrefix}cazar_
├⟣🕯️ _${usedPrefix}cofre_
├⟣🕯️ _${usedPrefix}balance_
├⟣🕯️ _${usedPrefix}claim_
├⟣🕯️ _${usedPrefix}heal_
├⟣🕯️ _${usedPrefix}lb_
├⟣🕯️ _${usedPrefix}levelup_
├⟣🕯️ _${usedPrefix}myns_
├⟣🕯️ _${usedPrefix}perfil_
├⟣🕯️ _${usedPrefix}work_
├⟣🕯️ _${usedPrefix}minar_
├⟣🕯️ _${usedPrefix}minar2_
├⟣🕯️ _${usedPrefix}buy_
├⟣🕯️ _${usedPrefix}minfo_
├⟣🕯️ _${usedPrefix}buyall_
├⟣🕯️ _${usedPrefix}verificar_
├⟣🕯️ _${usedPrefix}robar *<cantidad> <@tag>*_
├⟣🕯️ _${usedPrefix}transfer *<tipo> <cantidad> <@tag>*_
├⟣🕯️ _${usedPrefix}unreg *<numero de serie>*_
╰─────────────────────
╭───────────────────
*│⊷〘 𝚂𝚃𝙸𝙲𝙺𝙴𝚁𝚂 〙⊷*
├───────────────────
├⟣🕯️_${usedPrefix}sticker *<responder a imagen o video>*_
├⟣🕯️ _${usedPrefix}sticker *<enlace / link / url>*_
├⟣🕯️  _${usedPrefix}sticker2 *<responder a imagen o video>*_
├⟣🕯️  _${usedPrefix}sticker2 *<enlace / link / url>*_
├⟣🕯️  _${usedPrefix}s *<responder a imagen o video>*_
├⟣🕯️ _${usedPrefix}s *<enlace / link / url>*_
├⟣🕯️ _${usedPrefix}s2 *<responder a imagen o video>*_
├⟣🕯️ _${usedPrefix}s2 *<enlace / link / url>*_
├⟣🕯️ _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
├⟣🕯️ _${usedPrefix}scircle *<imagen>*_
├⟣🕯️ _${usedPrefix}sremovebg *<imagen>*_
├⟣🕯️ _${usedPrefix}semoji *<tipo> <emoji>*_
├⟣🕯️ _${usedPrefix}qc *<texto>*_
├⟣🕯️ _${usedPrefix}attp *<texto>*_
├⟣🕯️ _${usedPrefix}attp2 *<texto>*_
├⟣🕯️ _${usedPrefix}attp3 *<texto>*_
├⟣🕯️ _${usedPrefix}ttp *<texto>*_
├⟣🕯️ _${usedPrefix}ttp2 *<texto>*_
├⟣🕯️ _${usedPrefix}ttp3 *<texto>*_
├⟣🕯️ _${usedPrefix}ttp4 *<texto>*_
├⟣🕯️ _${usedPrefix}ttp5 *<texto>*_
├⟣🕯️ _${usedPrefix}pat *<@tag>*_
├⟣🕯️ _${usedPrefix}slap *<@tag>*_
├⟣🕯️ _${usedPrefix}kiss *<@tag>*_
├⟣🕯️ _${usedPrefix}dado_
├⟣🕯️ _${usedPrefix}wm *<packname> <author>*_
├⟣🕯️ _${usedPrefix}stickermarker *<efecto> <imagen>*_
├⟣🕯️ _${usedPrefix}stickerfilter *<efecto> <imagen>*_
├⟣🕯️ _${usedPrefix}cartoon *<responder a imagen>*_
╰─────────────────────
╭───────────────────
*│⊷〘 𝙾𝚆𝙽𝙴𝚁𝚂 〙⊷*
├───────────────────
├⟣🕯️ _${usedPrefix}menuowner_
╰───────────────────`;
   await conn.sendMessage(m.chat, {text: txt.trim(), mentions: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": '乂 𝙷 𝙰 𝙲 𝙷 𝙸 𝙺 𝙾 - 𝙱 𝙾 𝚃 - 𝙼 𝙳 乂', "containsAutoReply": true, "mediaType": 1, "thumbnail": [imagen6,imagen1,imagen4].getRandom(), "mediaUrl": global.gp1, "sourceUrl": global.gp1}}}, {quoted: fkon});
 // m.react('🎮');
  } catch {
    conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝙿𝙾𝚁𝙵𝙰𝚅𝙾𝚁 𝚄𝚂𝙴 𝙴𝙻 .allmenu*', m);
  }
};
handler.command = /^(menu|cmd|help|comandos)$/i;
export default handler;
                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                
