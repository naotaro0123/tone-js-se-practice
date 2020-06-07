import * as Tone from 'tone';
import { NoteType, getNote } from '../models/Note';
import { ToneSequence } from '../models/ToneSequence';

const melody1: NoteType[] = [
  getNote('mi+1'),
  getNote('mi+1'),
  null,
  getNote('mi+1'),
  null,
  getNote('do+1'),
  getNote('mi+1'),
  null,
  getNote('so+1'),
  null,
  null,
  null,
  getNote('so'),
  null,
  null,
  null,
  getNote('do+1'),
  null,
  null,
  getNote('so'),
  null,
  null,
  getNote('mi'),
  null,
  null,
  getNote('ra'),
  null,
  getNote('si'),
  null,
  getNote('si'),
  getNote('ra'),
  null,
  { ...getNote('so'), dur: '2n' },
  { ...getNote('mi+1'), dur: '2n' },
  { ...getNote('so+1'), dur: '2n' },
  getNote('ra+1'),
  null,
  getNote('fa+1'),
  getNote('so+1'),
  null,
  getNote('mi+1'),
  null,
  getNote('do+1'),
  getNote('re+1'),
  getNote('si'),
  null,
  null,
  getNote('do+1'),
  null,
  null,
  getNote('so'),
  null,
  null,
  getNote('mi'),
  null,
  null,
  getNote('ra'),
  null,
  getNote('si'),
  null,
  getNote('si'),
  getNote('ra'),
  null,
  { ...getNote('so'), dur: '2n' },
  { ...getNote('mi+1'), dur: '2n' },
  { ...getNote('so+1'), dur: '2n' },
  getNote('ra+1'),
  null,
  getNote('fa+1'),
  getNote('so+1'),
  null,
  getNote('mi+1'),
  null,
  getNote('do'),
  getNote('re'),
  getNote('si'),
  null,
  null,
  //-- 2
  null,
  null,
  getNote('so+1'),
  getNote('so+1'),
  getNote('fa+1'),
  getNote('re+1'),
  null,
  getNote('so+1'),
  null,
  getNote('so'),
  getNote('ra'),
  getNote('do+1'),
  null,
  getNote('ra'),
  getNote('do+1'),
  getNote('re+1'),
  null,
  null,
  getNote('so+1'),
  getNote('so+1'),
  getNote('fa+1'),
  getNote('re+1'),
  null,
  getNote('mi+1'),
  null,
  getNote('ra+1'),
  null,
  getNote('ra+1'),
  getNote('ra+1'),
  null,
  null,
  null,
  null,
  null,
  getNote('so+1'),
  getNote('so+1'),
  getNote('fa+1'),
  getNote('re+1'),
  null,
  getNote('mi+1'),
  null,
  getNote('so'),
  getNote('ra'),
  getNote('do'),
  null,
  getNote('ra'),
  getNote('do+1'),
  getNote('re+1'),
  null,
  null,
  getNote('mi+1'),
  null,
  null,
  getNote('re+1'),
  null,
  null,
  getNote('do+1'),
  null,
  null,
  null,
  null,
  null,
  null,
  null,
];
const melody2: NoteType[] = [
  getNote('fa'),
  getNote('fa'),
  null,
  getNote('fa'),
  null,
  getNote('fa'),
  getNote('fa'),
  null,
  getNote('so'),
  null,
  null,
  null,
  getNote('so'),
  null,
  null,
  null,
  getNote('mi'),
  null,
  null,
  getNote('do'),
  null,
  null,
  getNote('so-1'),
  null,
  null,
  getNote('do'),
  null,
  getNote('re'),
  null,
  getNote('re'),
  getNote('do'),
  null,
  { ...getNote('do'), dur: '2n' },
  { ...getNote('so'), dur: '2n' },
  { ...getNote('si'), dur: '2n' },
  getNote('do+1'),
  null,
  getNote('ra'),
  getNote('si'),
  null,
  getNote('ra'),
  null,
  getNote('mi'),
  getNote('fa'),
  getNote('re'),
  null,
  null,
  getNote('mi'),
  null,
  null,
  getNote('do'),
  null,
  null,
  getNote('so-1'),
  null,
  null,
  getNote('do'),
  null,
  getNote('re'),
  null,
  getNote('re'),
  getNote('do'),
  null,
  { ...getNote('do'), dur: '2n' },
  { ...getNote('so'), dur: '2n' },
  { ...getNote('si'), dur: '2n' },
  getNote('do+1'),
  null,
  getNote('ra'),
  getNote('si'),
  null,
  getNote('do+1'),
  null,
  getNote('mi'),
  getNote('fa'),
  getNote('re'),
  null,
  null,
  //-- 2
  null,
  null,
  getNote('mi+1'),
  getNote('mi+1'),
  getNote('re+1'),
  getNote('si'),
  null,
  getNote('do+1'),
  null,
  getNote('mi'),
  getNote('fa'),
  getNote('so'),
  null,
  getNote('do'),
  getNote('mi'),
  getNote('fa'),
  null,
  null,
  getNote('mi+1'),
  getNote('mi+1'),
  getNote('re+1'),
  getNote('si'),
  null,
  getNote('do+1'),
  null,
  getNote('mi+1'),
  null,
  getNote('mi+1'),
  getNote('mi+1'),
  null,
  null,
  null,
  null,
  null,
  getNote('mi+1'),
  getNote('mi+1'),
  getNote('re+1'),
  getNote('si'),
  null,
  getNote('do+1'),
  null,
  getNote('mi'),
  getNote('fa'),
  getNote('so'),
  null,
  getNote('do'),
  getNote('mi'),
  getNote('fa'),
  null,
  null,
  getNote('ra'),
  null,
  null,
  getNote('fa'),
  null,
  null,
  getNote('mi'),
  null,
  null,
  null,
  null,
  null,
  null,
  null,
];
const base1: NoteType[] = [
  getNote('re-1'),
  getNote('re-1'),
  null,
  getNote('re-1'),
  null,
  getNote('re-1'),
  getNote('re-1'),
  null,
  null,
  null,
  null,
  null,
  getNote('so-1'),
  null,
  null,
  null,
  getNote('so-1'),
  null,
  null,
  getNote('mi-1'),
  null,
  null,
  getNote('do-2'),
  null,
  null,
  getNote('fa-1'),
  null,
  getNote('so-1'),
  null,
  getNote('so-1'),
  getNote('fa-1'),
  null,
  { ...getNote('mi-1'), dur: '2n' },
  { ...getNote('do-1'), dur: '2n' },
  { ...getNote('mi'), dur: '2n' },
  getNote('fa'),
  null,
  getNote('re'),
  getNote('mi'),
  null,
  getNote('do'),
  null,
  getNote('ra-1'),
  getNote('si-1'),
  getNote('so-1'),
  null,
  null,
  getNote('so-1'),
  null,
  null,
  getNote('mi-1'),
  null,
  null,
  getNote('do-2'),
  null,
  null,
  getNote('fa-1'),
  null,
  getNote('so-1'),
  null,
  getNote('so-1'),
  getNote('fa-1'),
  null,
  { ...getNote('mi-1'), dur: '2n' },
  { ...getNote('do'), dur: '2n' },
  { ...getNote('mi'), dur: '2n' },
  getNote('fa'),
  null,
  getNote('re'),
  getNote('mi'),
  null,
  getNote('do'),
  null,
  getNote('ra-1'),
  getNote('si-1'),
  getNote('so-1'),
  null,
  null,
  //-- 2
  getNote('do-1'),
  null,
  null,
  getNote('so-1'),
  null,
  null,
  getNote('do'),
  null,
  getNote('so-1'),
  null,
  null,
  getNote('do'),
  getNote('do'),
  null,
  getNote('fa-1'),
  null,
  getNote('do-1'),
  null,
  null,
  getNote('mi-1'),
  null,
  null,
  getNote('so-1'),
  getNote('do'),
  null,
  null,
  null,
  null,
  null,
  null,
  getNote('so-1'),
  null,
  getNote('do-1'),
  null,
  null,
  getNote('so-1'),
  null,
  null,
  getNote('do'),
  null,
  getNote('so-1'),
  null,
  null,
  getNote('do'),
  getNote('do'),
  null,
  getNote('so-1'),
  null,
  getNote('do-1'),
  null,
  getNote('ra-1'),
  null,
  null,
  getNote('si-1'),
  null,
  null,
  getNote('do'),
  null,
  null,
  getNote('so-1'),
  getNote('so-1'),
  null,
  getNote('do-1'),
  null,
];

export function HelloMarioBgm1() {
  const button = document.createElement('button');
  button.innerHTML = 'SE再生';
  document.body.appendChild(button);
  // テンポ(1分間に180回 * n刻む)
  Tone.Transport.bpm.value = 180 * 3.5;
  button.addEventListener('click', () => {
    Tone.Transport.start();
  });
  new ToneSequence(melody1);
  new ToneSequence(melody2);
  new ToneSequence(base1);
}
