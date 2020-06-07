import * as Tone from 'tone';
import { NoteType } from '../models/Note';
import { ToneSequence } from '../models/ToneSequence';

const damageSound: NoteType[] = [
  { note: 'A3', dur: '8n', memo: 'ラ-1' },
  { note: 'E3', dur: '8n', memo: 'ミ-1' },
  { note: 'A2', dur: '8n', memo: 'ラ-2' },
  null,
  { note: 'A3', dur: '8n', memo: 'ラ-1' },
  { note: 'E3', dur: '8n', memo: 'ミ-1' },
  { note: 'A2', dur: '8n', memo: 'ラ-2' },
  null,
  { note: 'A3', dur: '8n', memo: 'ラ-1' },
  { note: 'E3', dur: '8n', memo: 'ミ-1' },
  { note: 'A2', dur: '8n', memo: 'ラ-2' },
  null,
];

export function HelloMarioSe2() {
  const button = document.createElement('button');
  button.innerHTML = 'SE再生';
  document.body.appendChild(button);
  // テンポ
  Tone.Transport.bpm.value = 200 * 4;
  button.addEventListener('click', () => {
    Tone.Transport.start();
    setTimeout(() => {
      Tone.Transport.stop();
    }, 1000);
  });
  new ToneSequence(damageSound);
}
