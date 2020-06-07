export type NoteType = {
  note: string;
  dur: string;
  memo?: string;
};

export const NoteMap: NoteType[] = [
  { note: 'C2', dur: '4n', memo: 'do-2' },
  { note: 'D2', dur: '4n', memo: 're-2' },
  { note: 'E2', dur: '4n', memo: 'mi-2' },
  { note: 'F2', dur: '4n', memo: 'fa-2' },
  { note: 'G2', dur: '4n', memo: 'so-2' },
  { note: 'A2', dur: '4n', memo: 'ra-2' },
  { note: 'B2', dur: '4n', memo: 'si-2' },
  { note: 'C3', dur: '4n', memo: 'do-1' },
  { note: 'D3', dur: '4n', memo: 're-1' },
  { note: 'E3', dur: '4n', memo: 'mi-1' },
  { note: 'F3', dur: '4n', memo: 'fa-1' },
  { note: 'G3', dur: '4n', memo: 'so-1' },
  { note: 'A3', dur: '4n', memo: 'ra-1' },
  { note: 'B3', dur: '4n', memo: 'si-1' },
  { note: 'C4', dur: '4n', memo: 'do' },
  { note: 'D4', dur: '4n', memo: 're' },
  { note: 'E4', dur: '4n', memo: 'mi' },
  { note: 'F4', dur: '4n', memo: 'fa' },
  { note: 'G4', dur: '4n', memo: 'so' },
  { note: 'A4', dur: '4n', memo: 'ra' },
  { note: 'B4', dur: '4n', memo: 'si' },
  { note: 'C5', dur: '4n', memo: 'do+1' },
  { note: 'D5', dur: '4n', memo: 're+1' },
  { note: 'E5', dur: '4n', memo: 'mi+1' },
  { note: 'F5', dur: '4n', memo: 'fa+1' },
  { note: 'G5', dur: '4n', memo: 'so+1' },
  { note: 'A5', dur: '4n', memo: 'ra+1' },
  { note: 'B5', dur: '4n', memo: 'si+1' },
  { note: 'C6', dur: '4n', memo: 'do+2' },
  { note: 'D6', dur: '4n', memo: 're+2' },
  { note: 'E6', dur: '4n', memo: 'mi+2' },
  { note: 'F6', dur: '4n', memo: 'fa+2' },
  { note: 'G6', dur: '4n', memo: 'so+2' },
  { note: 'A6', dur: '4n', memo: 'ra+2' },
  { note: 'B6', dur: '4n', memo: 'si+2' },
];

export function getNote(memo: string) {
  return NoteMap.find((value) => value.memo === memo);
}
