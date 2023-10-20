/* ---------------------------------------------------------------------------------------
  🍀 • By https://github.com/ALBERTO9883
  🍀 • ⚘Alberto Y Ashly⚘
-----------------------------------------------------------------------------------------*/
const handler = async (m, {conn, text, usedPrefix, command}) => {
  const regex = /x/g;
  if (!text) throw '⚠️ 𝙵𝙰𝙻𝚃𝙾 𝙴𝙻 𝙽𝚄𝙼𝙴𝚁𝙾.';
  if (!text.match(regex)) throw `* ❗ 𝙴𝙹𝙴𝙼𝙿𝙻𝙾 𝙳𝙴 𝚄𝚂𝙾: ${usedPrefix + command} 521999340434x*`;
  const random = text.match(regex).length; const total = Math.pow(10, random); const array = [];
  for (let i = 0; i < total; i++) {
    const list = [...i.toString().padStart(random, '0')];
    const result = text.replace(regex, () => list.shift()) + '@s.whatsapp.net';
    if (await conn.onWhatsApp(result).then((v) => (v[0] || {}).exists)) {
      const info = await conn.fetchStatus(result).catch((_) => {});
      array.push({exists: true, jid: result, ...info});
    } else {
      array.push({exists: false, jid: result});
    }
  }
  const txt = '𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙰𝙳𝙾𝚂\n\n' + array.filter((v) => v.exists).map((v) => `• 𝙽𝚁𝙼: wa.me/${v.jid.split('@')[0]}\n*• 𝙱𝙸𝙾:* ${v.status || 'Sin descripcion'}\n*• 𝙵𝙴𝙲𝙷𝙰:* ${formatDate(v.setAt)}`).join('\n\n') + '\n\n*𝙽𝙾 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙰𝙳𝙾𝚂*\n\n' + array.filter((v) => !v.exists).map((v) => v.jid.split('@')[0]).join('\n');
  m.reply(txt);
};
handler.command = /^nowa$/i;
export default handler;
function formatDate(n, locale = 'id') {
  const d = new Date(n);
  return d.toLocaleDateString(locale, {timeZone: 'Asia/Jakarta'});
}
