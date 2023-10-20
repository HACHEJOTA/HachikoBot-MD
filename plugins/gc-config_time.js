/* Creditos a https://github.com/ALBERTO9883/NyanCatBot-MD */

const handler = async (m, {conn, isAdmin, isOwner, args, usedPrefix, command}) => {
  if (!(isAdmin || isOwner)) {
	  global.dfail('admin', m, conn);
    throw false;
  }
  const isClose = {
	  'open': 'not_announcement',
	  'buka': 'not_announcement',
    'on': 'not_announcement',
	  '1': 'not_announcement',
	  'close': 'announcement',
	  'tutup': 'announcement',
    'off': 'announcement',
    '0': 'announcement',
  }[(args[0] || '')];
  if (isClose === undefined) {
	  const caption = `
*• Ejemplo:*
*${usedPrefix + command} open 1*
*${usedPrefix + command} close 1*
📌 *𝙴𝙹𝙴𝙼𝙿𝙻𝙾 𝙳𝙴 𝚄𝚂𝙾:* *${usedPrefix + command} close 1* 
*🌿𝙿𝙰𝚁𝙰 𝚀𝚄𝙴 𝙴𝙻 𝙶𝚁𝚄𝙿𝙾 𝙴𝚂𝚃𝙴 𝙲𝙴𝚁𝚁𝙰𝙳𝙾.𝚄𝙽𝙰.𝙷𝙾𝚁𝙰.*
`;
    m.reply(caption);
	  throw false;
  }
  const timeoutset = 86400000 * args[1] / 24;
  await conn.groupSettingUpdate(m.chat, isClose).then(async (_)=> {
	  m.reply(`⚠️ *_Grupo ${isClose == 'announcement' ? 'cerrado' : 'abierto'} ${args[1] ? `durante *${clockString(timeoutset)}_*` : ''}`);
  });
  if (args[1]) {
	 setTimeout(async () => {
      await conn.groupSettingUpdate(m.chat, `${isClose == 'announcement' ? 'not_announcement' : 'announcement'}`).then(async (_)=>{
		    conn.reply(m.chat, `${isClose == 'not_announcement' ? '*𝗘𝗹 𝗴𝗿𝘂𝗽𝗼 𝗵𝗮 𝘀𝗶𝗱𝗼 𝗰𝗲𝗿𝗿𝗮𝗱𝗼, ¡𝗮𝗵𝗼𝗿𝗮 𝘀𝗼𝗹𝗼 𝗹𝗼𝘀 𝗮𝗱𝗺𝗶𝗻𝗶𝘀𝘁𝗿𝗮𝗱𝗼𝗿𝗲𝘀 𝗽𝘂𝗲𝗱𝗲𝗻 𝗲𝗻𝘃𝗶𝗮𝗿 𝗺𝗲𝗻𝘀𝗮𝗷𝗲𝘀!*' : '*𝗘𝗹 𝗴𝗿𝘂𝗽𝗼 𝘀𝗲 𝗵𝗮 𝗮𝗯𝗶𝗲𝗿𝘁𝗼, ¡𝗮𝗵𝗼𝗿𝗮 𝘁𝗼𝗱𝗼𝘀 𝗹𝗼𝘀 𝗺𝗶𝗲𝗺𝗯𝗿𝗼𝘀 𝗽𝘂𝗲𝗱𝗲𝗻 𝗲𝗻𝘃𝗶𝗮𝗿 𝗺𝗲𝗻𝘀𝗮𝗷𝗲𝘀!*'}!`);
	    });
    }, timeoutset);
  }
};
handler.help = ['grouptime *<open/close>* *<número>*'];
handler.tags = ['group'];
handler.command = /^(grouptime|gctime)$/i;

handler.botAdmin = true;
handler.group = true;

export default handler;

function clockString(ms) {
  const h = Math.floor(ms / 3600000);
  const m = Math.floor(ms / 60000) % 60;
  const s = Math.floor(ms / 1000) % 60;
  console.log({ms, h, m, s});
  return [h, m, s].map((v) => v.toString().padStart(2, 0) ).join(':');
}
