
const handler = async (m, {conn}) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language
  const _translate = JSON.parse(fs.readFileSync(`./language/${idioma}.json`))
  const tradutor = _translate.plugins.fun_reto

  global.bucin = tradutor.texto1;

  conn.reply(m.chat, `*┌────「 𝚁𝙴𝚃𝙾 」─*\n*“${pickRandom(global.bucin)}”*\n*└────「حظك 」─*`, m);
};
handler.help = ['خذ|reto'];
handler.tags = ['حظ'];
handler.command = /^حظ/i;
export default handler;

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}


