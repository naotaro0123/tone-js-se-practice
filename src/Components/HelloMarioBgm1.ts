import * as Tone from 'tone';
import { NoteType, getNote } from '../models/Note';
import { ToneSequence } from '../models/ToneSequence';

const melody1: NoteType[] = [
  getNote('ミ+1'),
  getNote('ミ+1'),
  null,
  getNote('ミ+1'),
  null,
  getNote('ド+1'),
  getNote('ミ+1'),
  null,
  getNote('ソ+1'),
  null,
  null,
  null,
  getNote('ソ'),
  null,
  null,
  null,
];
const melody2: NoteType[] = [
  getNote('ファ'),
  getNote('ファ'),
  null,
  getNote('ファ'),
  null,
  getNote('ファ'),
  getNote('ファ'),
  null,
  getNote('ソ'),
  null,
  null,
  null,
  getNote('ソ'),
  null,
  null,
  null,
];
const base1: NoteType[] = [
  getNote('レ-1'),
  getNote('レ-1'),
  null,
  getNote('レ-1'),
  null,
  getNote('レ-1'),
  getNote('レ-1'),
  null,
  null,
  null,
  null,
  null,
  getNote('ソ-1'),
  null,
  null,
  null,
];

export function HelloMarioBgm1() {
  const button = document.createElement('button');
  button.innerHTML = 'SE再生';
  document.body.appendChild(button);
  // テンポ(1分間に180回 * n刻む)
  Tone.Transport.bpm.value = 180 * 3;
  button.addEventListener('click', () => {
    Tone.Transport.start();
  });
  new ToneSequence(melody1);
  new ToneSequence(melody2);
  new ToneSequence(base1);
}
