const red      = '#ef4661';
const teal     = '#014b57';
const redHover = '#ed2a49';
const black    = '#34382f';
const bgYellow = '#eee8d9';
const yellow   = '#f2eee3';
const white    = '#ffffff';

export const trans = 'all .25s ease';
export const mainPadding = '10px';
export const mainBorRadius = '4px';

export const headerHeight = '70px';
export const headerWidth = '85%';

export const mainShadow = '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)';


//header
export const headerBg = red;
export const headerLinkColor = white;
export const headerBgHover = redHover;

//footer
export const footerBg = red;
export const footerColor = white;

//app
export const appBg = bgYellow;

//cards
export const cardsBg = yellow;
export const loadingColor = teal;

//card
export const removeColor = red;
export const cardsTitleBg = teal;

//filters
export const filtersBg = yellow;
export const filtersColor = black;
export const filtersBgBtn = red;
export const filtersBorderColor = teal;
export const hoverColor = white;

//input request
export const reqBg = yellow;
export const borderReqHover = teal;
export const borderReq = black;


//logs
export const logWiner = teal;
export const logLoser = red;
export const logColor = white;

//vk field
export const fieldBg= yellow

//vk ladder
export const ladderLoser = red;
export const ladderWiner = teal;
export const ladderName = black;
export const ladderBg = yellow;

//vk main
export const btnHover = teal;
export const mainBg = yellow;
export const mainColor = black;


//lighten(rgb(204, 18, 48), 30%) = #ef4661 (239, 70, 97)

// export function darken(hexStr, num) {
//   let rgb = fromHexToRgbArr(hexStr);
//   let darken = rgb.map(color => {
//     return Math.ceil(color/num);
//   });
//   console.log('rgb', rgb);
//   console.log(completeRgb(darken));
//   return completeRgb(darken);
// }

// function fromHexToRgbArr(hex) {
//   let col = hex.slice(1);
//   let rgb = [
//     +`0x${col.slice(0,2)}`,
//     +`0x${col.slice(2,4)}`,
//     +`0x${col.slice(4)}`
//   ];
//   return rgb;
// }
//
// function completeRgb(rgbArr) {
//   return `rgb(${rgbArr[0]},${rgbArr[1]},${rgbArr[2]})`;
// }
//
// function fromRgbArrToHex(rgbArr) {
//   return rgbArr.reduce((a,b) => {
//     return a.toString(16) + b.toString(16);
//   },'#');
// }
