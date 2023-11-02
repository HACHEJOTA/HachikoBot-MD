export async function before(m, {conn, isAdmin, isBotAdmin, isOwner, isROwner}) {
  if (m.isBaileys && m.fromMe) return !0;
  if (m.isGroup) return !1;
  if (!m.message) return !0;
  if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') ||m.text.includes('descargarbot')||
m.text.includes('join') ||
m.text.includes('menu')||
m.text.includes('owner')||
m.text.includes('TIJERA') || m.text.includes('serbot') || m.text.includes('jadibot')) return !0;
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[this.user.jid] || {};
  if (bot.antiPrivate && !isOwner && !isROwner) {
    await m.reply(`*❗ 𝙷𝙾𝙻𝙰 @${m.sender.split`@`[0]}, 𝙴𝚂𝚃𝙰 𝙿𝚁𝙾𝙷𝙸𝙱𝙸𝙳𝙾 𝙷𝙰𝙱𝙻𝙰𝚁 𝙰𝙻 𝙿𝚁𝙸𝚅𝙰𝙳𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃 𝙿𝙾𝚁 𝙻𝙾 𝙲𝚄𝙰𝙻 𝚂𝙴𝚁𝙰𝚂 𝙱𝙻𝙾𝚀𝚄𝙴𝙰𝙳𝙾\n -𝚄𝚂𝙰 𝙴𝙻 𝙱𝙾𝚃 𝙴𝙽 𝙴𝙻 𝚂𝙸𝙶𝚄𝚄𝙴𝙽𝚃𝙴 𝙶𝚁𝚄𝙿𝙾:\n✓${global.gp1}.*`, false, {mentions: [m.sender]});
    await this.updateBlockStatus(m.chat, 'block');
  }
  return !1;
}
