import cp, {exec as _exec} from 'child_process';
import {promisify} from 'util';
import fs from 'fs';
const exec = promisify(_exec).bind(cp);
const handler = async (m, {conn, isROwner, usedPrefix, command, text}) => {
  const ar = Object.keys(plugins);
  const ar1 = ar.map((v , i) => v.replace('.js', '')) 
let totalp = ar1.map(v => ` ${i + 1} ${v}`).join('\n')
await conn.reply(m.chat,`${totalp}`,m)
}

handler.tags = ['owner'];
handler.command = /^(totalp|tlp)$/i;
handler.rowner = true;
export default handler;

/**╭─╮─᤻─᳒─᤻᳒᯽⃟ᰳᰬᰶ┈*⃐ *Lista de Plugins*️⃟ᬽ፝֟━*
├❥ᰰຼ ${ar1.map(v => `├❥ᰰຼ ${v}`).join('\n')}
*╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄
(`* 𝙻𝙸𝚂𝚃𝙰 𝙳𝙴 𝙿𝙻𝚄𝙶𝙸𝙽𝚂 (𝙰𝚁𝙲𝙷𝙸𝚅𝙾𝚂) 𝙴𝚇𝙸𝚂𝚃𝙴𝙽𝚃𝙴𝚂:*\n*➵* ${ar1.map((v) => ' ' + v).join`\n*➻*`}`);
۫/*

