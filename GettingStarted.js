// var MidiWriter = require('midi-writer-js');
//
// // Start with a new track
// var track = new MidiWriter.Track();
//
// // Define an instrument (optional):
// track.addEvent(new MidiWriter.ProgramChangeEvent({instrument : 1}));
//
// // Add some notes:
// var note = new MidiWriter.NoteEvent({pitch:['C4', 'D4', 'E4'], duration: '4'});
// track.addEvent(note);
//
// // Generate a data URI
// var write = new MidiWriter.Writer(track);
// console.log(write.saveMIDI("test.mid"));


// var MidiWriter = require('midi-writer-js');
//
// var track = new MidiWriter.Track();
//
// track.addEvent([
//         new MidiWriter.NoteEvent({pitch: ['E4','D4'], duration: '4'}),
//         new MidiWriter.NoteEvent({pitch: ['C4'], duration: '2'}),
//         new MidiWriter.NoteEvent({pitch: ['E4','D4'], duration: '4'}),
//         new MidiWriter.NoteEvent({pitch: ['C4'], duration: '2'}),
//         new MidiWriter.NoteEvent({pitch: ['C4', 'C4', 'C4', 'C4', 'D4', 'D4', 'D4', 'D4'], duration: '8'}),
//         new MidiWriter.NoteEvent({pitch: ['E4','D4'], duration: '4'}),
//         new MidiWriter.NoteEvent({pitch: ['C4'], duration: '2'})
//     ], function(event, index) {
//         return {sequential:true};
//     }
// );
//
// var write = new MidiWriter.Writer(track);
// console.log(write.saveMIDI("test.mid"));


// var MidiWriter = require('midi-writer-js');
// // //
// // // var track1 = new MidiWriter.Track();
// // // var track2 = new MidiWriter.Track();
// // //
// // // track1.addEvent([
// // //         new MidiWriter.NoteEvent({pitch: ['E4','D4'], duration: '4'}),
// // //         new MidiWriter.NoteEvent({pitch: ['C4'], duration: '2'}),
// // //         new MidiWriter.NoteEvent({pitch: ['E4','D4'], duration: '4'}),
// // //         new MidiWriter.NoteEvent({pitch: ['C4'], duration: '2'}),
// // //         new MidiWriter.NoteEvent({pitch: ['C4', 'C4', 'C4', 'C4', 'D4', 'D4', 'D4', 'D4'], duration: '8'}),
// // //         new MidiWriter.NoteEvent({pitch: ['E4','D4'], duration: '4'}),
// // //         new MidiWriter.NoteEvent({pitch: ['C4'], duration: '2'})
// // //     ], function(event, index) {
// // //         return {sequential:true};
// // //     }
// // // );
// // //
// // // track2.addEvent([
// // //         new MidiWriter.NoteEvent({pitch: ['C3','E3','C3','E3',], duration: '2', channel: 2}),
// // //         new MidiWriter.NoteEvent({pitch: ['C3','E3','G3','B2'], duration: '4', channel: 2}),
// // //         new MidiWriter.NoteEvent({pitch: ['C3','C3'], duration: '2', channel: 2}),
// // //     ], function(event, index) {
// // //         return {sequential:true};
// // //     }
// // // );
// // //
// // // var write = new MidiWriter.Writer([track1,track2]);
// // // write.saveMIDI("test.mid");


// var MidiWriter = require('midi-writer-js');
//
// var track1 = new MidiWriter.Track();
// var track2 = new MidiWriter.Track();
//
// track1.addEvent([
//         new MidiWriter.NoteEvent({pitch: ['E4','F4','E4','D4',], duration: '4'}),
//         new MidiWriter.NoteEvent({pitch: ['E4','G4','E4','D4',], duration: '4'}),
//         new MidiWriter.NoteEvent({pitch: ['E4','A4','E4','D4',], duration: '4'}),
//         new MidiWriter.NoteEvent({pitch: ['E4','B4','E4','D4',], duration: '4'}),
//         new MidiWriter.NoteEvent({pitch: ['C4',], duration: '1'}),
//     ], function(event, index) {
//         return {sequential:true};
//     }
// );
//
// track2.addEvent([
//         new MidiWriter.NoteEvent({pitch: ['G3','C3',], duration: '2', channel: 2, wait: 1}),
//         new MidiWriter.NoteEvent({pitch: ['G3','C3',], duration: '2', channel: 2, wait: 1}),
//     ], function(event, index) {
//         return {sequential:true};
//     }
// );
//
// var write = new MidiWriter.Writer([track1,track2]);
// write.saveMIDI("test.mid");

















//
//
// var MidiWriter = require('midi-writer-js');
//
// var melody = new MidiWriter.Track();
// var chords = new MidiWriter.Track();
// var bass = new MidiWriter.Track();
//
// // melody.addEvent(new MidiWriter.ProgramChangeEvent({instrument: 41}));
// // bass.addEvent(new MidiWriter.ProgramChangeEvent({instrument: 33}));
// // chords.addEvent(new MidiWriter.ProgramChangeEvent({instrument: 22}));
//
// melody.addEvent([
//         new MidiWriter.NoteEvent({pitch: ['E4','F4','E4','D4',], duration: '4', channel: 1,}),
//         new MidiWriter.NoteEvent({pitch: ['E4','G4','E4','D4',], duration: '4', channel: 1,}),
//         new MidiWriter.NoteEvent({pitch: ['E4','A4','E4','D4',], duration: '4', channel: 1,}),
//         new MidiWriter.NoteEvent({pitch: ['E4','B4','E4','D4',], duration: '4', channel: 1,}),
//         new MidiWriter.NoteEvent({pitch: ['C4',], duration: '1', channel: 1,}),
//     ], function(event, index) {
//         return {sequential:true};
//     }
// );
//
// chords.addEvent([
//         new MidiWriter.NoteEvent({pitch: ['G3','C3',], duration: '2', channel: 2, wait: 1}),
//         new MidiWriter.NoteEvent({pitch: ['G3','C3',], duration: '2', channel: 2, wait: 1}),
//     ], function(event, index) {
//         return {sequential:true};
//     }
// );
//
//
//
// bass.addEvent([
//         new MidiWriter.NoteEvent({pitch: ['D2'], duration: '8', channel: 3,}),
//         new MidiWriter.NoteEvent({pitch: ['G2'], duration: '8', wait: 'd4', channel: 3,}),
//         new MidiWriter.NoteEvent({pitch: ['C2'], duration: '8', wait: 'd4', channel: 3,}),
//         new MidiWriter.NoteEvent({pitch: ['G2'], duration: '8', wait: 'd4', channel: 3,}),
//     ], function (event, index) {
//         return {sequential: true};
//     }
// );
//
// var write = new MidiWriter.Writer([melody, chords, bass]);
// write.saveMIDI("test.mid");


















var MidiWriter = require('midi-writer-js');
var tracks = [];

// Lead Instrument
tracks[0] = new MidiWriter.Track();
tracks[0].addEvent(new MidiWriter.ProgramChangeEvent({instrument : 41}));

// Bass
tracks[1] = new MidiWriter.Track();
tracks[1].addEvent(new MidiWriter.ProgramChangeEvent({instrument : 33}));

// Intro
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb4'], duration: '2', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb4'], duration: '8', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F4'], duration: '8', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F4'], duration: '8', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb4'], duration: '8', velocity:100}));

tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab4'], duration: '16', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb4'], duration: '16', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab4'], duration: 'd2', velocity:100}));

tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb4'], duration: '2', wait:'8', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb4'], duration: '8', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F4'], duration: '8', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F4'], duration: '8', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb4'], duration: '8', velocity:100}));

tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['A4'], duration: '16', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['G4'], duration: '16', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['A4'], duration: 'd4', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['A4'], duration: '1', wait:'2', velocity:1}));


tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '4', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F3'], duration: '4', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb3'], duration: '2', velocity:50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '4', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Eb3'], duration: '4', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab3'], duration: '2', velocity:50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Eb2'], duration: '4', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Db3'], duration: '4', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb3'], duration: '2', velocity:50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '4', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F3'], duration: '4', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb3'], duration: '2', velocity:50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));

// Main theme part 1
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb4'], duration: '4', wait:'1', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F4'], duration: 'd4', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb4'], duration: '8', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb4', 'C5', 'D5', 'Eb5'], duration: '16', sequential: 'true', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F5'], duration: '2', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F5', 'F5'], duration: '8', sequential: 'true', wait:'8', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb5', 'Ab5'], duration: '16', sequential: 'true', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb5'], duration: '2', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb5', 'Bb5'], duration: '8', sequential: 'true', wait:'8', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab5', 'Gb5'], duration: '16', sequential: 'true', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab5'], duration: 'd8', sequential: 'true', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb5'], duration: '16', sequential: 'true', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F5'], duration: '2', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F5'], duration: '4', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Eb5'], duration: 'd8', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F5'], duration: '16', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb5'], duration: '2', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F5', 'Eb5'], duration: '8', sequential: 'true', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Db5'], duration: 'd8', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Eb5'], duration: '16', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F5'], duration: '2', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Eb5', 'Db5'], duration: '8', sequential: 'true', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['C5'], duration: 'd8', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['D5'], duration: '16', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['E5'], duration: '2', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['G5'], duration: '4', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F5'], duration: '8', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F4', 'F4'], duration: '16', sequential: 'true', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F4'], duration: '8', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F4', 'F4'], duration: '16', sequential: 'true', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F4'], duration: '8', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F4', 'F4'], duration: '16', sequential: 'true', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F4'], duration: '8', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F4'], duration: '8', velocity:100}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Eb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Eb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Eb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Eb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Eb2'], duration: '16', velocity:50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Db2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Db2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Db2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Db2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Db2'], duration: '16', velocity:50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Db3'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Db3'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Db3'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Db3'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Db3'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Db3'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Db3'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Db3'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab2'], duration: '16', velocity:50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '16', velocity:50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['C3'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['C3'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['G2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['C3'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['C3'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['G2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['C3'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['C3'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['G2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['C3'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['G2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['C3'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['G2'], duration: '16', velocity:50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['A3'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['A3'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab3'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab3'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab3'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['G3'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['G3'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['G3'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb3'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '8', velocity:50}));

// Main theme part 2
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb4'], duration: '4', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F4'], duration: 'd4', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb4'], duration: '8', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb4', 'C5', 'D5', 'Eb5'], duration: '16', sequential: 'true', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F5'], duration: '2', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F5', 'F5'], duration: '8', sequential: 'true', wait:'8', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb5', 'Ab5'], duration: '16', sequential: 'true', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb5'], duration: 'd2', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Db6'], duration: '4', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['C6'], duration: '4', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['A5'], duration: '2', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F5'], duration: '4', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb5'], duration: 'd2', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb5'], duration: '4', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['A5'], duration: '4', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F5'], duration: '2', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F5'], duration: '4', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb5'], duration: 'd2', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb5'], duration: '4', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['A5'], duration: '4', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F5'], duration: '2', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['D5'], duration: '4', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Eb5'], duration: 'd2', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb5'], duration: '4', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F5'], duration: '4', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Db5'], duration: '2', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb4'], duration: '4', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['C5'], duration: 'd8', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['D5'], duration: '16', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['E5'], duration: '2', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['G5'], duration: '4', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F5'], duration: '8', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F4', 'F4'], duration: '16', sequential: 'true', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F4'], duration: '8', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F4', 'F4'], duration: '16', sequential: 'true', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F4'], duration: '8', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F4', 'F4'], duration: '16', sequential: 'true', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F4'], duration: '8', velocity:100}));
tracks[0].addEvent(new MidiWriter.NoteEvent({pitch: ['F4'], duration: '8', velocity:100}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Eb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Eb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Eb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Eb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Eb2'], duration: '16', velocity:50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb2'], duration: '16', velocity:50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '16', velocity:50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['E2'], duration: '16', velocity:50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '16', velocity:50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['B2'], duration: '16', velocity:50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Bb2'], duration: '16', velocity:50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['C3'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['C3'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['C3'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['C3'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['C3'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['C3'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['C3'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['C3'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['C3'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['C3'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['C3'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['C3'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['C3'], duration: '16', velocity:50}));

tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['A3'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['A3'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab3'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab3'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Ab3'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['G3'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['G3'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['G3'], duration: '16', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['Gb3'], duration: '8', velocity:50}));
tracks[1].addEvent(new MidiWriter.NoteEvent({pitch: ['F2'], duration: '8', velocity:50}));

var write = new MidiWriter.Writer(tracks);

// var write = new MidiWriter.Writer([melody, chords, bass]);
// write.saveMIDI("test.mid");

//console.log(write.dataUri());
//module.exports = write.dataUri();

write.saveMIDI("test.mid");

