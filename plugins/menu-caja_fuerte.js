const handler = async (m, {conn, usedPrefix}) => {
  try {
  } catch (e) {
  } finally {
    const name = await conn.getName(m.sender);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const str = `
┏━━━━━━━━━━━━━━━━┓
*┃⚠︎𝙲𝙰𝙹𝙰 𝙵𝚄𝙴𝚁𝚃𝙴 ⚠*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃

┣⟣❥ - 𝙰𝚀𝚄𝙸 𝙿𝚄𝙴𝙳𝙴 𝙶𝚄𝙰𝚁𝙳𝙰𝚁 𝙼𝙴𝙽𝚂𝙰𝙹𝙴𝚂 𝚀𝚄𝙴 𝚀𝚄𝙸𝙴𝚁𝙰𝚂 𝚅𝙴𝚁 𝙼𝙰𝚂 𝚃𝙰𝚁𝙳𝙴

┣⟣❥ *⌨︎ 𝙰𝙶𝚁𝙴𝙶𝙰𝚁 𝙰 𝙻𝙰 𝙻𝙸𝚂𝚃𝙰 ⌨︎*

┣⟣❥  _${usedPrefix}agregarmsg *<texto/comando/palabra clave>* (responde a un texto)_
┣⟣❥  _${usedPrefix}agregarvn *<texto/comando/palabra clave>* (responde a una nota de voz)_
┣⟣❥  _${usedPrefix}agregarvideo *<texto/comando/palabra clave>* (responde a un video)_
┣⟣❥  _${usedPrefix}agregaraudio *<texto/comando/palabra clave>* (responde a un audio)_
┣⟣❥  _${usedPrefix}agregarimg *<texto/comando/palabra clave>* (responde a una imagen)_
┣⟣❥  _${usedPrefix}agregarsticker *<texto/comando/palabra clave>* (responde a un sticker)_

*<𝕃𝕀𝕊𝕋𝔸 𝔻𝔼 ℂ𝕆𝕄𝔸ℕ𝔻𝕆𝕊/>*

┣⟣❥  _${usedPrefix}listamsg_
┣⟣❥  _${usedPrefix}listavn_
┣⟣❥  _${usedPrefix}listavideo_
┣⟣❥  _${usedPrefix}listaaudio_
┣⟣❥  _${usedPrefix}listaimg_
┣⟣❥  _${usedPrefix}listasticker_

*<𝕍𝔼ℝ 𝕋𝔼𝕏𝕋𝕆𝕊 𝕆 𝔸ℝℂℍ𝕀𝕍𝕆𝕊/>*

┣⟣❥  _${usedPrefix}vermsg *<texto/comando/palabra clave>*_
┣⟣❥  _${usedPrefix}vervn *<texto/comando/palabra clave>*_
┣⟣❥  _${usedPrefix}vervideo *<texto/comando/palabra clave>*_
┣⟣❥  _${usedPrefix}veraudio *<texto/comando/palabra clave>*_
┣⟣❥  _${usedPrefix}verimg *<texto/comando/palabra clave>*_
┣⟣❥  _${usedPrefix}versticker *<texto/comando/palabra clave>*_

*<𝔼𝕃𝕀𝕄𝕀ℕ𝔸ℝ/>*

┣⟣❥  _${usedPrefix}eliminarmsg *<texto/comando/palabra clave>*_
┣⟣❥  _${usedPrefix}eliminarvn *<texto/comando/palabra clave>*_
┣⟣❥  _${usedPrefix}eliminarvideo *<texto/comando/palabra clave>*_
┣⟣❥  _${usedPrefix}eliminaraudio *<texto/comando/palabra clave>*_
┣⟣❥  _${usedPrefix}eliminarimg *<texto/comando/palabra clave>*_
┣⟣❥  _${usedPrefix}eliminarsticker *<texto/comando/palabra clave>*_`.
await conn.sendMessage(m.chat, {
text: captionvid,
contextInfo: {
externalAdReply: {
title: wm
body: hachejota,
sourceUrl: md,  
thumbnailUrl: imagen4, 
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}}} , { quoted: m });
    
    }
   
  }
};
handler.help = ['cajafuerte'];
handler.tags = ['owner'];
handler.command = /^(cajafuerte)$/i;
handler.rowner = true;
handler.fail = null;
export default handler;
