const linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i;
let enviando;
const handler = async (m, {conn, text, isMods, isOwner, isPrems}) => {
 if (enviando) return;
     enviando = true 
  try {
    const link = text //(m.quoted ? m.quoted.text ? m.quoted.text : text : text) || text;
    if (!link || !link.match(linkRegex)) throw '[⚠︎] 𝙻𝙸𝙽𝙺 𝙸𝙽𝙲𝙾𝚁𝚁𝙴𝚃𝙾 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝚄𝙽 𝙻𝙸𝙽𝙺 𝙳𝙴 𝚄𝙽 𝙶𝚁𝚄𝙿𝙾 𝙳𝙴 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿.\n\n*➪ Ejemplo:*\n*◉ #join https://chat.whatsapp.com/FwEUGxkvZD85fIIp0gKyFC*';
    const [_, code] = link.match(linkRegex) || [];
    if ( isPrems || isMods || isOwner || m.fromMe) {
      const res = await conn.groupAcceptInvite(code);
      await conn.sendMessage(m.chat, {text: '🐶 𝙵𝙴𝙻𝙸𝙲𝙸𝙳𝙰𝙳𝙴𝚂 𝙷𝙰𝙲𝙷𝙸𝙺𝙾-𝙱𝙾𝚃 𝚂𝙴 𝚄𝙽𝙸𝙾 𝙰𝙻 𝙶𝚁𝚄𝙿𝙾.'}, {quoted: m})
      enviando = false 
    } else {
      conn.sendMessage(m.chat, {text: '*[❗] 𝙴𝙻 𝙻𝙸𝙽𝙺 𝙳𝙴 𝚂𝚄 𝙶𝚁𝚄𝙿𝙾 𝚂𝙴 𝙴𝙽𝚅𝙸𝙾 𝙰 𝙼𝙸 𝙲𝚁𝙴𝙰𝙳𝙾𝚁 𝙷𝙰𝙲𝙷𝙴𝙹𝙾𝚃𝙰*.\n\n_𝙎𝙪 𝙜𝙧𝙪𝙥𝙤 𝙚𝙨𝙩𝙖𝙧 𝙚𝙣 𝙚𝙫𝙖𝙡𝙪𝙖𝙘𝙞𝙣 𝙮 𝙚𝙡 𝙥𝙧𝙤𝙥𝙞𝙚𝙩𝙖𝙧𝙞𝙤/𝙖 𝙙𝙚𝙡 𝘽𝙤𝙩 𝙙𝙚𝙘𝙞𝙙𝙞𝙧 𝙨𝙞 𝙖𝙜𝙧𝙚𝙜𝙖 𝙤 𝙣𝙤 𝙖𝙡 𝘽𝙤𝙩.*\n\n* 𝘼𝙡𝙜𝙪𝙣𝙖𝙨 𝙙𝙚 𝙡𝙖𝙨 𝙧𝙖𝙯𝙤𝙣𝙚𝙨 𝙥𝙤𝙧 𝙡𝙖 𝙘𝙪𝙖𝙡 𝙨𝙪 𝙨𝙤𝙡𝙞𝙘𝙞𝙩𝙪𝙙 𝙥𝙪𝙚𝙙𝙚 𝙨𝙚𝙧 𝙧𝙚𝙘𝙝𝙖𝙯𝙖𝙙𝙖 𝙨𝙤𝙣:*\n*1.- 𝙀𝙡 𝘽𝙤𝙩 𝙚𝙨𝙩 𝙨𝙖𝙩𝙪𝙧𝙖𝙙𝙤.*\n*2.- 𝙀𝙡 𝘽𝙤𝙩 𝙛𝙪𝙚 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤 𝙧𝙚𝙘𝙞𝙚𝙣𝙩𝙚𝙢𝙚𝙣𝙩𝙚.*\n*3.- 𝙀𝙡 𝙡𝙞𝙣𝙠 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤 𝙝𝙖 𝙨𝙞𝙙𝙤 𝙧𝙚𝙨𝙩𝙖𝙗𝙡𝙚𝙘𝙞𝙙𝙤.*\𝙣*4.-𝙀𝙡 𝘽𝙤𝙩 𝙣𝙤 𝙨𝙚 𝙖𝙜𝙧𝙚𝙜𝙖 𝙖 𝙜𝙧𝙪𝙥𝙤𝙨 𝙥𝙤𝙧 𝙙𝙚𝙘𝙞𝙨𝙞𝙣 𝙙𝙚𝙡 𝙥𝙧𝙤𝙥𝙞𝙚𝙩𝙖𝙧𝙞𝙤/𝙖.*\n\n* 𝙀𝙡 𝙥𝙧𝙤𝙘𝙚𝙨𝙤 𝙙𝙚 𝙚𝙫𝙖𝙡𝙪𝙖𝙘𝙞𝙣 𝙥𝙪𝙚𝙙𝙚 𝙩𝙤𝙢𝙖𝙧 𝙖𝙡𝙜𝙤 𝙙𝙚 𝙩𝙞𝙚𝙢𝙥𝙤, 𝙞𝙣𝙘𝙡𝙪𝙨𝙤 𝙙𝙞𝙖𝙨, 𝙩𝙚𝙣𝙜𝙖 𝙥𝙖𝙘𝙞𝙚𝙣𝙘𝙞𝙖.._'}, {quoted: fliveLoc});
      const data = global.owner.filter(([id]) => id)[0];
      const dataArray = Array.isArray(data) ? data : [data];
      for (const entry of dataArray) await conn.sendMessage(entry + '@s.whatsapp.net', {text: '*[❗] ΔLGUIΣΠ SΩLICITΔD HΔCHIҜΩ-βΩT PΔRΔ SU GRUPΩ* \n\n*✎ 𝚂𝙾𝙻𝙸𝙲𝙸𝚃𝙰𝙽𝚃𝙴:* ' + '@' + m.sender.split('@')[0] + '\n*✎ 𝙻𝙸𝙽𝙺 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾:* ' + link, mentions: [m.sender], contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [m.sender], "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm2, "containsAutoReply": true, "mediaType": 1, "thumbnail": imagen6, "mediaUrl": `${link}`, "sourceUrl": `${link}`}}}, {quoted: fliveLoc});
      enviando = false 
    }
  } catch {
    enviando = false 
    throw '[❗] 𝙵𝙰𝙻𝙻𝙾 𝙰𝙻𝙶𝙾 𝚂𝙰𝙻𝙸𝙾 𝙼𝙰𝙻 𝙿𝙾𝚁𝙵𝙰𝚅𝙾𝚁 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙾 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁.';
  }
};
handler.help = ['join [chat.whatsapp.com]'];
handler.tags = ['premium'];
handler.command = /^join|nuevogrupo$/i;
handler.private = true;
export default handler;
