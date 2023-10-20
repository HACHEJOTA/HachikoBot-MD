import {search, download} from 'aptoide-scraper';
const handler = async (m, {conn, usedPrefix: prefix, command, text}) => {
 if (!text) throw `*[❗] ɪɴɢʀᴇsᴇ ᴇʟ ɴᴏᴍʙʀᴇ ᴅᴇ ʟᴀ ᴀᴘᴋ ǫᴜᴇ ǫᴜɪᴇʀᴀ ʙᴜsᴄᴀʀ.*`;
  try {    
    const searchA = await search(text);
    const data5 = await download(searchA[0].id);
    let response = ` *დ 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝙳𝙾𝚁 𝙳𝙴 𝙰𝙿𝙺𝚂 დ* \n\n📌 *𝙽𝙾𝙼𝙱𝚁𝙴:* ${data5.name}\n📦 *𝙿𝙰𝙲𝙺𝙰𝙶𝙴:* ${data5.package}\n🕒 *𝙴𝙻𝚃𝙸𝙼𝙰 𝙰𝙲𝚃𝚄𝙰𝙻𝙸𝚉𝙰𝙲𝙸𝙾𝙽:* ${data5.lastup}\n📥 *𝚃𝙰𝙼𝙰𝙽̃𝙾:* ${data5.size}`
    await conn.sendMessage(m.chat, {image: {url: data5.icon}, caption: response}, {quoted: m});
 if (data5.size.includes('GB') || data5.size.replace(' MB', '') > 999) {
      return await conn.sendMessage(m.chat, {text: '*[ ⛔ ] єℓ αя¢нινσ єѕ ∂ємαѕια∂σ ρєѕα∂σ ρσя ℓσ qυє иσ ѕє єиνιαяá.*'}, {quoted: m});
    }
    await conn.sendMessage(m.chat, {document: {url: data5.dllink}, mimetype: 'application/vnd.android.package-archive', fileName: data5.name + '.apk', caption: null}, {quoted: m});
  } catch {
    throw `*[❗] 𝙴𝚛𝚛𝚘𝚛, 𝚗𝚘 𝚜𝚎 𝚎𝚗𝚌𝚘𝚗𝚝𝚛𝚊𝚛ó𝚗 𝚛𝚎𝚜𝚞𝚕𝚝𝚊𝚍𝚘𝚜 𝚙𝚊𝚛𝚊 𝚜𝚞 𝚋ú𝚜𝚚𝚞𝚎𝚍𝚊.*`;
  }    
};
handler.command = /^(apkmod|modapk|dapk2|aptoide|aptoidedl)$/i;
export default handler;
