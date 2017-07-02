//legacy v0.2
export default function sorter(one, two) {
  if(one.wins.length > two.wins.length) {
    return -1;
  } else if(one.wins.length < two.wins.lenth) {
    return 1;
  } else if(one.wins.length <= two.wins.length && one.loses.length >= two.loses.length) {
    return 1;
  } else if(one.wins.length >= two.wins.length && one.loses.length <= two.loses.length) {
    return -1;
  } else if(one.wins.length === two.wins.length && one.wins.includes(two.uid)) {
    return -1;
  }
  return 0;
}
