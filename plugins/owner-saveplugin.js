import fs from 'fs'
let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) throw `*[❗] 𝚀𝚄𝙴 𝙽𝙾𝙼𝙱𝚁𝙴 𝙻𝙴 𝙿𝙾𝙽𝙶𝙾 𝙰𝙻 𝙿𝙼𝚄𝙶𝙸𝙽.*`
    if (!m.quoted.text) throw `❗𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴𝚁 𝙰𝙻 𝙼𝙴𝙽𝚂𝙰𝙹𝙴!`
    let path = `plugins/${text}.js`
    await fs.writeFileSync(path, m.quoted.text)
    m.reply(`Guardado en ${path}`)
}
handler.help = ['saveplugin'].map(v => v + ' *<nombre>*')
handler.tags = ['owner']
handler.command = ["salvar", "saveplugin"]

handler.rowner = true
export default handler
