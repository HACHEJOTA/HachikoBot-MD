import cp, {exec as _exec} from 'child_process';
import {promisify} from 'util';
import fs from 'fs';
const exec = promisify(_exec).bind(cp);
const handler = async (m, {conn, isROwner, usedPrefix, command, text}) => {
  const ar = Object.keys(plugins);
  let ar1 = ar.map((v) => 

conn.reply(m.chat,`${ar1}`,m)
}

handler.tags = ['owner'];
handler.command = /^(totalp|tlp)$/i;
handler.rowner = true;
export default handler;

