import WebFont from 'webfontloader'
/**
 * @return {string}
 */

export default () => {
  // ---------------List of Fonts to download-----------------
  // ---------------from--------------------------------------
  // ---------------google, typekit, Fonts.com, Fontdeck------
  const fontsToLoad = {
    google: {
      families: ['Neucha',
        'Kreon:300,400,700',
        'Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900'
      ]
    }
  }

  WebFont.load(fontsToLoad)

  const combinedRULES = (fontsToLoad) => {
    let rules = ''
    let oneRule = ''
    const listFont = Object.entries(fontsToLoad)
    let ln
    if (listFont.length > 0) { ln = listFont.length }
    for (let i = 0; i < ln; i = i + 1) {
      oneRule = (listFont[i][1]).families.join(', ')
      rules += oneRule
    }
    return rules
  }
  let FONTS = combinedRULES(fontsToLoad)
    .replace(/[(\d)]\w+/g, '')
    .replace(/,,/g, '').replace(/,+$/g, '')
    .replace(/:/g, '')
  // console.log('FONTS', FONTS)
  return (FONTS)
}
