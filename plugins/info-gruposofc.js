let media = './Menu2.jpg'
let handler = async (m, { conn, command }) => conn.sendButton(m.chat, `
*Hola ππ», unete a los grupos oficiales para pasar un rato agradable usando el Bot o platicando con la familia de Sapito - Bot*

*β€ Grupos oficiales del Bot:*
*1.-* https://chat.whatsapp.com/CntRn9MHu6oI29HWU6tVrC

*2.-* https://chat.whatsapp.com/GxxpMawzPaW6MR0p2vH432

*3.-* qhttps://chat.whatsapp.com/I1vjFTvfZQbJI4aw0Vj5dk

*4.-* https://chat.whatsapp.com/Lu01IGq2bd73PvofLwFmv5


`.trim(), wm, media, [['πΈπ π°π» πΌπ΄π½π πΏππΈπ½π²πΈπΏπ°π»', '.menu']], m)
handler.command = /^linkgc|grupos$/i
export default handler
