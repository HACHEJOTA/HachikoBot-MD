let handler = async (m, { conn }) => {
	
	await conn.fetchBlocklist().then((async data, n)=> {
		let txt = `*≡ 𝙻𝙸𝚂𝚃𝙰 𝙳𝙴 𝙱𝙻𝙸𝚀𝚄𝙴𝙰𝙳𝙸𝚂*\n\n*Total :* ${data.length}\n\n┌─⊷\n`
		for (let i of data) {
			txt += `# @${i.split("@")[0]}\n`
		}
		txt += "└───────────"
		return conn.reply(m.chat, txt, m, { mentions: await conn.parseMention(txt) })
	}).catch(err => {
		console.log(err);
		throw 'No hay números bloqueados'
	})
}

handler.help = ['blocklist']
handler.tags = ['main']
handler.command = ['blocklist', 'listblock'] 

export default handler