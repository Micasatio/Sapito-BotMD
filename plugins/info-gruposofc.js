let media = './Menu2.jpg'
let handler = async (m, { conn, command }) => conn.sendButton(m.chat, `
*Hola 👋🏻, unete a los grupos oficiales para pasar un rato agradable usando el Bot o platicando con la familia de Sapito - Bot*

*➤ Grupos oficiales del Bot:*
*1.-* https://chat.whatsapp.com/CntRn9MHu6oI29HWU6tVrC

*2.-* https://chat.whatsapp.com/GxxpMawzPaW6MR0p2vH432

*3.-* qhttps://chat.whatsapp.com/I1vjFTvfZQbJI4aw0Vj5dk

*4.-* https://chat.whatsapp.com/Lu01IGq2bd73PvofLwFmv5


`.trim(), wm, media, [['𝙸𝚁 𝙰𝙻 𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻', '.menu']], m)
handler.command = /^linkgc|grupos$/i
export default handler
