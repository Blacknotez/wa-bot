const { bot } = require('../lib/index')

bot(
  { pattern: 'ping ?(.*)', fromMe: true, desc: 'To check ping' },
  async (message, match) => {
    const start = new Date().getTime()
    await message.sendMessage('```Ping!```')
    const end = new Date().getTime()
    return await message.sendMessage(
      '*Pling!*\n ```' + (end - start) + '``` *ms*'
    )
  }
)
