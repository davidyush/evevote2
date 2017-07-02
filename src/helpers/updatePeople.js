//legacy of v0.2
export default function updatePeople(winer, loser, currentLadder) {
  const newLadder = currentLadder.map(person => {
    if(person.uid === winer.uid) {
      person.wins = [...person.wins, loser.uid];
    } else if(person.uid === loser.uid) {
      person.loses = [...person.loses, winer.uid];
    }
    return person;
  });

  newLadder.forEach(person => {
    person.wins.forEach(uid => {
      let winsOfLoser = getByUid(uid, newLadder).wins;
      person.wins = [...person.wins, ...addOnlySpecial(person.wins, winsOfLoser)];
    });
    person.loses.forEach(uid => {
      let losesOfWiner = getByUid(uid, newLadder).loses;
      person.loses = [...person.loses, ...addOnlySpecial(person.loses, losesOfWiner)];
    });
  });

  return newLadder;
}

function getByUid(uid,arr) {
  let result = null;
  for(let i = 0; i < arr.length; i++) {
    if(uid === arr[i].uid) {
      return arr[i];
    }
  }
  return result;
}

function addOnlySpecial(arr, addArr) {
  let result = [];
  addArr.forEach(uid => {
    if(!arr.includes(uid)) {
      result.push(uid);
    }
  });
  return result;
}
