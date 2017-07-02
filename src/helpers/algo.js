import sorter from './sorter'

//legacy v0.2
export default function getTwo(items, nameId) {
  const currentItems = [].concat(items);
  let result = [];
  result = getPair(currentItems);
  if(isEmptyArray(result)) {
    result = makeCompare(currentItems, nameId);
  }
  return result;
}

function isEmptyArray(arr) {
  return arr.length === 0;
}

function isDifferent(one, two, nameId) {
  return one[nameId] !== two[nameId];
}

function theSameWins(one, two) {
  return one.wins.length === two.wins.length;
}

function theSameLoses(one, two) {
  return one.loses.length === two.loses.length;
}

function theSameCount(one, two) {
  return one.count === two.count;
}

function shouldBeCompared(el1, el2, nameId) {
  return isDifferent(el1, el2, nameId) && theSameWins(el1, el2) &&
         theSameLoses(el1, el2) && theSameCount(el1, el2);
}

function canCompare(item1, item2, nameId) {
  if( item1.wins.includes(item2[nameId])  ||
      item2.wins.includes(item1[nameId])  ||
      item1.loses.includes(item2[nameId]) ||
      item2.loses.includes(item1[nameId])
    ) {
    return false;
  }
  return true;
}

//arr.sort(sorter)
function getPair(arr) {
  let result = [];
  arr.sort(sorter).forEach(item1 => {
    arr.forEach(item2 => {
      if(result.length < 2 && canCompare(item1, item2, 'uid') && shouldBeCompared(item1, item2, 'uid')) {
        result.push(item1, item2);
      }
    });
  });
  return result;
}

function makeCompare(arr, nameId) {
  let result = [];
  for(let i = 0; i < arr.length - 1; i++) {
    if(!arr[i].wins.includes(arr[i + 1][nameId])) {
      result = [arr[i], arr[i + 1]];
      break;
    }
  }
  return result;
}
