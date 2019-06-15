function generateTrashTalks(target) {
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }
  const phrase = ['很簡單', '很容易', '很快', '很正常']
  const role = {
    engineer: '工程師',
    designer: '設計師',
    entrepreneur: '創業家 '
  }
  const randomTask = Math.floor(Math.random() * 4)
  const randomPhrase = Math.floor(Math.random() * 4)

  if (typeof target === 'undefined') {
    return '請選擇一個你想說幹話的對象！'
  } else {
    return `身為一個${role[target]}，${task[target][randomTask]}，${phrase[randomPhrase]}吧！`
  }
}

// Export function for other files to use
module.exports = generateTrashTalks
