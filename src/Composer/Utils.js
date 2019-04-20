function getChordTones(range, root) {
    return [range[root - 1], range[(root + 1) % range.length], range[(root + 3) % range.length]];
}

function getRootAndFifth(range, root) {
    return [range[root - 1], range[(root + 3) % range.length]];
}

//TODO: generic function for returning tertial chord tones.

function mod (x, n) {
    return (x % n + n) % n;
}

//dead code?
function randomFromArray (arr) {
    return arr[Math.floor((Math.random()*arr.length))];
}

function getNearestChordTone(range, root, prevNote, direction) {
    var chordToneIndex = getChordTones(range, root).map(function (chordTone) {return range.indexOf(chordTone)});
    var prevNoteIndex = range.indexOf(prevNote);
    if (chordToneIndex.includes(prevNoteIndex)) {
        return prevNote;
    } else {
        if(direction === "up") {
            return getNearestChordTone(range, root, range[(prevNoteIndex + 1) % range.length], direction);
        }
        if(direction === "down") {
            return getNearestChordTone(range, root, range[mod(prevNoteIndex - 1, range.length)], direction);
        }
    }
}

module.exports = {
    getChordTones: getChordTones,
    getRootAndFifth: getRootAndFifth,
    getNearestChordTone: getNearestChordTone,
}