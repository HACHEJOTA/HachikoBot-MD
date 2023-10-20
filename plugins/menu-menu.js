import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;

  const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
  const {money, joincount} = global.db.data.users[m.sender];
  const {exp, limit, level, role} = global.db.data.users[m.sender];
  const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png');
  const fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': imagen1, thumbnail: imagen1 ,sendEphemeral: true}}};
    await conn.reply(m.chat, '_𝙀𝙣 𝙗𝙧𝙚𝙫𝙚 𝙨𝙚 𝙚𝙣𝙫𝙞𝙖𝙧𝙖 𝙚𝙡 𝙢𝙚𝙣𝙪. . _.',m, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: '👋 ᕼOᒪᗩ!!', body: 'sɪɢᴜᴇᴍᴇ ᴇɴ ɪɴsᴛᴀɢʀᴀᴍ', sourceUrl: global.md, thumbnail: await (await fetch(pp)).buffer() }}})
//m.react('🐶');
    await conn.sendMessage(m.chat, { react: { text: '🐶', key: m.key } })
  let txt =`┏━━━━━━━━━━━━━━━━━━┓
┣⟣☯︎ *𝙾𝚆𝙽𝙴𝚁:* 𝙷𝙰𝙲𝙷𝙴𝙹𝙾𝚃𝙰
┣⟣☯︎ *𝙽𝚄𝙼𝙴𝚁𝙾:* +51 992 004 117
┣⟣☯︎ *𝙸𝙳𝙸𝙾𝙼𝙰:* 𝙴𝚂𝙿𝙰𝙽̃𝙾𝙻 
┣⟣☯︎ *𝙼𝙾𝙳𝙾:* 𝙿𝚄𝙱𝙻𝙸𝙲𝙾
┣⟣☯︎ *𝙵𝙴𝙲𝙷𝙰:* ${date}
┗━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
*┃❍ 𝙱𝙾𝚃 𝙾𝙵𝙲 𝙾 𝚂𝚄𝙱 𝙱𝙾𝚃❍*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ *Este es el Bot oficial*
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
*┃❍ 𝚂𝙾𝙻𝚄𝙲𝙸𝙾𝙽 𝙰 𝙴𝚁𝚁𝙾𝚁𝙴𝚂 ❍*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣➤ Mensajes en espera
┣⟣❥ _.fixmsgespera_
┣➤ Mensajes en espera (owner)
┣⟣❥ _.dsowner_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
*┃❍ 𝙸𝙽𝙵𝙾 𝙱𝙾𝚃 ❍*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣⟣❥ _.grupos_
┣⟣❥ _.estado_
┣⟣❥ _.infobot_
┣⟣❥ _.speedtest_
┣⟣❥ _.donar_
┣⟣❥ _.owner_
┣⟣❥ _.script_
┣⟣❥ _Bot_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
*┃❍ 𝙸𝙽𝚂𝚃𝙰𝙻𝙰𝚁 𝙷𝙰𝙲𝙷𝙸𝙺𝙾 𝙱𝙾𝚃 ❍*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣⟣❥ _.descargarbot_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
*┃❍ 𝚄𝙽𝙴 𝙴𝙻 𝙱𝙾𝚃 𝙰 𝚃𝚄 𝙶𝚁𝚄𝙿𝙾 ❍*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣⟣❥ _.join *<enlace / link / url>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
*┃❍ 𝙷𝙰𝚂𝚃𝙴 𝚂𝚄𝙱 𝙱𝙾𝚃 ❍*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣⟣❥ _.serbot_
┣⟣❥ _.stop_
┣⟣❥ _.bots_
┗━━━━━━━━━━━━━━━━┛  

┏━━━━━━━━━━━━━━━━┓
*┃❍ 𝙹𝚄𝙴𝙶𝙾𝚂 ❍*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣⟣❥ _.menujuegos_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
*┃❍ 𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙾 𝙳𝙴𝚂𝚂𝙲𝚃𝙸𝚅𝙰𝚁 ❍*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣⟣❥ _.enable_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
*┣❍ 𝚁𝙴𝙿𝙾𝚁𝚃𝙰𝚁 𝙵𝙰𝙻𝙻𝙾𝚂 ❍*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ⟣❥ _.reporte *<texto>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
*┃❍ 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝚂 ❍*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣⟣❥ _.instagram *<enlace / link / url>*_
┣⟣❥ _.mediafire *<enlace / link / url>*_
┣⟣❥ _.gitclone *<enlace / link / url>*_
┣⟣❥ _.gdrive *<enlace / link / url>*_
┣⟣❥ _.tiktok *<enlace / link / url>*_
┣⟣❥ _.tiktokimg *<enlace / link / url>*_
┣⟣❥ _.xnxxdl *<enlace / link / url>*_
┣⟣❥ _.xvideosdl *<enlace / link / url>*_
┣⟣❥ _.twitter *<enlace / link / url>*_
┣⟣❥ _.fb *<enlace / link / url>*_
┣⟣❥ _.ytshort *<enlace / link / url>*_
┣⟣❥ _.ytmp3 *<enlace / link / url>*_
┣⟣❥ _.ytmp4 *<enlace / link / url>*_
┣⟣❥ _.ytmp3doc *<enlace / link / url>*_
┣⟣❥ _.ytmp4doc *<enlace / link / url>*_
┣⟣❥ _.videodoc *<enlace / link / url>*_
┣⟣❥ _.dapk2 *<enlace / link / url>*_
┣⟣❥ _.stickerpack *<enlace / link / url>*_
┣⟣❥ _.play *<texto>*_
┣⟣❥ _.play2 *<texto>*_
┣⟣❥ _.play.1 *<texto>*_
┣⟣❥ _.play.2 *<texto>*_
┣⟣❥ _.playdoc *<texto>*_
┣⟣❥ _.playdoc2 *<texto>*_
┣⟣❥ _.playlist *<texto>*_
┣⟣❥ _.spotify *<texto>*_
┣⟣❥ _.ringtone *<texto>*_
┣⟣❥ _.soundcloud *<texto>*_
┣⟣❥ _.imagen *<texto>*_
┣⟣❥ _.pinterest *<texto>*_
┣⟣❥ _.wallpaper *<texto>*_
┣⟣❥ _.pptiktok *<nombre de usuario>*_
┣ ⟣❥ _.igstalk *<nombre de usuario>*_
┣⟣❥ _.igstory *<nombre de usuario>*_
┣⟣❥ _.tiktokstalk *<username>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
*┃❍ 𝙱𝚄𝚂𝙲𝙰𝙳𝙾𝚁𝙴𝚂 ❍*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣⟣❥ _.githubsearch *<texto>*_
┣⟣❥ _.pelisplus *<texto>*_
┣⟣❥ _.modapk *<texto>*_
┣⟣❥ _.stickersearch *<texto>*_
┣⟣❥ _.stickersearch2 *<texto>*_
┣⟣❥ _.xnxxsearch *<texto>*_
┣⟣❥ _.animeinfo *<texto>*_
┣⟣❥ _.google *<texto>*_
┣⟣❥ _.letra *<texto>*_
┣⟣❥ _.wikipedia *<texto>*_
┣⟣❥ _.ytsearch *<texto>*_
┣⟣❥ _.playstore *<texto>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
*┃❍ 𝙶𝚁𝚄𝙿𝙾𝚂 𝙰𝙹𝚄𝚂𝚃𝙴𝚂 ❍* 
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣⟣❥ _.add *<numero>*_
┣⟣❥ _.kick *<@tag>*_
┣⟣❥ _.kick2 *<@tag>*_
┣⟣❥ _.listanum *<texto>*_
┣⟣❥ _.kicknum *<texto>*_
┣⟣❥ _.grupo *<abrir / cerrar>*_
┣⟣❥ _.grouptime *<opcion> <tiempo>*_
┣⟣❥ _.promote *<@tag>*_
┣⟣❥ _.demote *<@tag>*_
┣⟣❥ _admins *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
┣⟣❥ _.demote *<@tag>*_
┣⟣❥ _.infogroup_
┣⟣❥ _.resetlink_
┣⟣❥ _.link_
┣⟣❥ _.setname *<texto>*_
┣⟣❥ _.setdesc *<texto>*_
┣⟣❥ _.invocar *<texto>*_
┣⟣❥ _.setwelcome *<texto>*_
┣⟣❥ _.setbye *<texto>*_
┣⟣❥ _.hidetag *<texto>*_
┣⟣❥ _.hidetag *<audio>*_
┣⟣❥ _.hidetag *<video>*_
┣⟣❥ _.hidetag *<imagen>*_
┣⟣❥ _.warn *<@tag>*_
┣⟣❥ _.unwarn *<@tag>*_
┣⟣❥ _.listwarn_
┣⟣❥ _.fantasmas_
┣⟣❥ _.destraba_
┣⟣❥ _.setpp *<imagen>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
*┃❍ 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙸𝙳𝙾𝚁𝙴𝚂 ❍*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣⟣❥ _.toanime *<imagen>*_
┣⟣❥ _.togifaud *<video>*_
┣⟣❥ _.toimg *<sticker>*_
┣⟣❥ _.tomp3 *<video>*_
┣⟣❥ _.tomp3 *<nota de voz>*_
┣⟣❥ _.toptt *<video / audio>*_
┣⟣❥ _.tovideo *<sticker>*_
┣⟣❥ _.tourl *<video / imagen / audio>*_
┣⟣❥ _.tts *<idioma> <texto>*_
┣⟣❥ _.tts *<efecto> <texto>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
*┃❍ 𝙴𝙵𝙴𝙲𝚃𝙾𝚂 𝚈 𝙻𝙾𝙶𝙾𝚂 ❍*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣⟣❥ _.logos *<efecto> <texto>*_
┣⟣❥ _.logochristmas *<texto>*_
┣⟣❥ _.logocorazon *<texto>*_
┣⟣❥ _.ytcomment *<texto>*_
┣⟣❥ _.hornycard *<@tag>*_
┣⟣❥ _.simpcard *<@tag>*_
┣⟣❥ _.lolice *<@tag>*_
┣⟣❥ _.itssostupid_
┣⟣❥ _.pixelar_
┣⟣❥ _.blur_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
*┃❍ 𝙵𝚁𝙰𝚂𝙴𝚂 𝚈 𝙲𝙾𝙽𝚂𝙴𝙹𝙾𝚂 ❍*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣⟣❥ _.piropo_
┣⟣❥ _.consejo_
┣⟣❥ _.refran_
┣⟣❥ _.fraseromantica_
┣⟣❥ _.historiaromantica_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
*┃❍ 𝙰𝙽𝙸𝙼𝙴𝚂 𝚁𝙰𝙽𝙳𝙾𝙼❍*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣⟣❥ _.menuanimes_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
*┃❍ 𝙸𝙼𝙶 𝚁𝙰𝙽𝙳𝙾𝙼𝚂 ❍*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣⟣❥  _.kpop *<blackpink / exo / bts>*_
┣⟣❥ _.cristianoronaldo_
┣⟣❥ _.messi_
┣⟣❥ _.cat_
┣⟣❥ _.dog_
┣⟣❥ _.meme_
┣⟣❥ _.itzy_
┣⟣❥ _.blackpink_
┣⟣❥ _.navidad_
┣⟣❥ _.wpmontaña_
┣⟣❥ _.pubg_
┣⟣❥ _.wpgaming_
┣⟣❥ _.wpaesthetic_
┣⟣❥ _.wpaesthetic2_
┣⟣❥ _.wprandom_
┣⟣❥ _.wallhp_
┣⟣❥ _.wpvehiculo_
┣⟣❥ _.wpmoto_
┣⟣❥ _.coffee_
┣⟣❥ _.pentol_
┣⟣❥ _.caricatura_
┣⟣❥ _.ciberespacio_
┣⟣❥ _.technology_
┣⟣❥ _.doraemon_
┣⟣❥ _.hacker_
┣⟣❥ _.planeta_
┣⟣❥ _.randomprofile_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
*┃❍ 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 +18 ❍*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣⟣❥ _.labiblia_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
*┃❍ 𝙴𝙵𝙴𝙲𝚃𝙾𝚂 𝙳𝙴 𝙰𝚄𝙳𝙸𝙾 ❍*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┃- *𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝙰𝚄𝙳𝙸𝙾 𝙾 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉*
┣⟣❥ _.bass_
┣⟣❥ _.blown_
┣⟣❥ _.deep_
┣⟣❥ _.earrape_
┣⟣❥ _.fast_
┣⟣❥ _.fat_
┣⟣❥ _.nightcore_
┣⟣❥ _.reverse_
┣⟣❥ _.robot_
┣⟣❥ _.slow_
┣⟣❥ _.smooth_
┣⟣❥ _.tupai_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
*┃❍ 𝙷𝙴𝚁𝚁𝙰𝙼𝙸𝙴𝙽𝚃𝙰𝚂 ❍*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣⟣❥ _.chatgpt *<texto>*_
┣⟣❥ _.delchatgpt
┣⟣❥ _.gptvoz *<texto>*_
┣⟣❥ _.dall-e *<texto>*_
┣⟣❥ _.spamwa *<numero|texto|cantidad>*_
┣⟣❥ _.tamaño *<cantidad> <imagen / video>*_
┣⟣❥ _.readviewonce *<imagen / video>*_
┣⟣❥ _.afk *<motivo>*_
┣⟣❥ _.ocr *<responde a imagen>*_
┣⟣❥ _.hd *<responde a imagen>*_
┣⟣❥ _.acortar *<enlace / link / url>*_
┣⟣❥ _.calc *<operacion math>*_
┣⟣❥ _.del *<mensaje>*_
┣⟣❥ _.whatmusic *<audio>*_
┣⟣❥ _.readqr *<imagen (QR)>*_
┣⟣❥ _.qrcode *<texto>*_
┣⟣❥ _.readmore *<texto1| texto2>*_
┣⟣❥ _.styletext *<texto>*_
┣⟣❥ _.traducir *<texto>*_
┣⟣❥ _.nowa *<numero>*_,
┣⟣❥ _.horario_
┣⟣❥ _.dropmail_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
*┃❍ 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚁𝙿𝙶 ❍*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣⟣❥ _.adventure_
┣⟣❥ _.cazar_
┣⟣❥ _.cofre_
┣⟣❥ _.balance_
┣⟣❥ _.claim_
┣⟣❥ _.heal_
┣⟣❥ _.lb_
┣⟣❥ _.levelup_
┣⟣❥ _.myns_
┣⟣❥ _.perfil_
┣⟣❥ _.work_
┣⟣❥ _.minar_
┣⟣❥ _.minar2_
┣⟣❥ _.buy_
┣⟣❥ _.buyall_
┣⟣❥ _.verificar_
┣⟣❥ _.robar *<cantidad> <@tag>*_
┣⟣❥ _.transfer *<tipo> <cantidad> <@tag>*_
┣⟣❥ _.unreg *<numero de serie>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
*┃❍ 𝚂𝚃𝙸𝙲𝙺𝙴𝚁𝚂 ❍*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ⟣❥ _.sticker *<responder a imagen o video>*_
┣ ⟣❥ _.sticker *<enlace / link / url>*_
┣⟣❥  _.sticker2 *<responder a imagen o video>*_
┣⟣❥  _.sticker2 *<enlace / link / url>*_
┣⟣❥  _.s *<responder a imagen o video>*_
┣⟣❥ _.s *<enlace / link / url>*_
┣⟣❥ _.s2 *<responder a imagen o video>*_
┣⟣❥ _.s2 *<enlace / link / url>*_
┣⟣❥ _.emojimix *<emoji 1>&<emoji 2>*_
┣⟣❥ _.scircle *<imagen>*_
┣⟣❥ _.sremovebg *<imagen>*_
┣⟣❥ _.semoji *<tipo> <emoji>*_
┣⟣❥ _.qc *<texto>*_
┣⟣❥ _.attp *<texto>*_
┣⟣❥ _.attp2 *<texto>*_
┣⟣❥ _.attp3 *<texto>*_
┣⟣❥ _.ttp *<texto>*_
┣⟣❥ _.ttp2 *<texto>*_
┣⟣❥ _.ttp3 *<texto>*_
┣⟣❥ _.ttp4 *<texto>*_
┣⟣❥ _.ttp5 *<texto>*_
┣⟣❥ _.pat *<@tag>*_
┣⟣❥ _.slap *<@tag>*_
┣⟣❥ _.kiss *<@tag>*_
┣⟣❥ _.dado_
┣⟣❥ _.wm *<packname> <author>*_
┣⟣❥ _.stickermarker *<efecto> <imagen>*_
┣⟣❥ _.stickerfilter *<efecto> <imagen>*_
┣⟣❥ _.cartoon *<responder a imagen>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
*┃❍ 𝙾𝚆𝙽𝙴𝚁𝚂 ❍*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣⟣❥ _.menuowner_
┗━━━━━━━━━━━━━━━━┛`;
   await conn.sendMessage(m.chat, {text: txt.trim(), mentions: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": '乂 𝙷 𝙰 𝙲 𝙷 𝙸 𝙺 𝙾 - 𝙱 𝙾 𝚃 - 𝙼 𝙳 乂', "containsAutoReply": true, "mediaType": 1, "thumbnail": [imagen6,imagen1,imagen4].getRandom(), "mediaUrl": global.gp1, "sourceUrl": global.gp1}}}, {quoted: fkon});
 // m.react('🎮');
  } catch {
    conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝙿𝙾𝚁𝙵𝙰𝚅𝙾𝚁 𝚄𝚂𝙴 𝙴𝙻 .allmenu*', m);
  }
};
handler.command = /^(menu|cmd|help|comandos)$/i;
export default handler;
                                                                                                                                                                                                                                                                
