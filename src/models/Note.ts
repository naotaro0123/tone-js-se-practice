export type NoteType = {
  note: string;
  dur: string;
  memo?: string;
};

export const NoteMap: NoteType[] = [
  { note: 'D2', dur: '4n', memo: 'レ-2' },
  { note: 'E2', dur: '4n', memo: 'ミ-2' },
  { note: 'F2', dur: '4n', memo: 'ファ-2' },
  { note: 'G2', dur: '4n', memo: 'ソ-2' },
  { note: 'A2', dur: '4n', memo: 'ラ-2' },
  { note: 'B2', dur: '4n', memo: 'シ-2' },
  { note: 'C3', dur: '4n', memo: 'ド-1' },
  { note: 'D3', dur: '4n', memo: 'レ-1' },
  { note: 'E3', dur: '4n', memo: 'ミ-1' },
  { note: 'F3', dur: '4n', memo: 'ファ-1' },
  { note: 'G3', dur: '4n', memo: 'ソ-1' },
  { note: 'A3', dur: '4n', memo: 'ラ-1' },
  { note: 'B3', dur: '4n', memo: 'シ-1' },
  { note: 'C4', dur: '4n', memo: 'ド' },
  { note: 'D4', dur: '4n', memo: 'レ' },
  { note: 'E4', dur: '4n', memo: 'ミ' },
  { note: 'F4', dur: '4n', memo: 'ファ' },
  { note: 'G4', dur: '4n', memo: 'ソ' },
  { note: 'A4', dur: '4n', memo: 'ラ' },
  { note: 'B4', dur: '4n', memo: 'シ' },
  { note: 'C5', dur: '4n', memo: 'ド+1' },
  { note: 'D5', dur: '4n', memo: 'レ+1' },
  { note: 'E5', dur: '4n', memo: 'ミ+1' },
  { note: 'F5', dur: '4n', memo: 'ファ+1' },
  { note: 'G5', dur: '4n', memo: 'ソ+1' },
  { note: 'A5', dur: '4n', memo: 'ラ+1' },
  { note: 'B5', dur: '4n', memo: 'シ+1' },
  { note: 'C6', dur: '4n', memo: 'ド+2' },
  { note: 'D6', dur: '4n', memo: 'レ+2' },
  { note: 'E6', dur: '4n', memo: 'ミ+2' },
  { note: 'F6', dur: '4n', memo: 'ファ+2' },
  { note: 'G6', dur: '4n', memo: 'ソ+2' },
  { note: 'A6', dur: '4n', memo: 'ラ+2' },
  { note: 'B6', dur: '4n', memo: 'シ+2' },
];

export function getNote(memo: string) {
  return NoteMap.find((value) => value.memo === memo);
}
