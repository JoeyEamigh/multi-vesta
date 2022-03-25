import { VestaContent } from './types';

export const emptyBoard = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

export function isCharacters(content: VestaContent): content is number[][] {
  return Array.isArray(content);
}

export function convertStringToBoard(content: string): number[][] {
  const board: number[][] = emptyBoard;
  const chars = content.split('');
  for (let i = 0; i < chars.length; i++) {
    const row = Math.floor(i / board.length);
    const col = i % board.length;
    board[row][col] = charToVestaCode(chars[i]);
  }
  return board;
}

export function charToVestaCode(char: string) {
  switch (char) {
    case 'A':
      return 1;
    case 'B':
      return 2;
    case 'C':
      return 3;
    case 'D':
      return 4;
    case 'E':
      return 5;
    case 'F':
      return 6;
    case 'G':
      return 7;
    case 'H':
      return 8;
    case 'I':
      return 9;
    case 'J':
      return 10;
    case 'K':
      return 11;
    case 'L':
      return 12;
    case 'M':
      return 13;
    case 'N':
      return 14;
    case 'O':
      return 15;
    case 'P':
      return 16;
    case 'Q':
      return 17;
    case 'R':
      return 18;
    case 'S':
      return 19;
    case 'T':
      return 20;
    case 'U':
      return 21;
    case 'V':
      return 22;
    case 'W':
      return 23;
    case 'X':
      return 24;
    case 'Y':
      return 25;
    case 'Z':
      return 26;
    case '1':
      return 27;
    case '2':
      return 28;
    case '3':
      return 29;
    case '4':
      return 30;
    case '5':
      return 31;
    case '6':
      return 32;
    case '7':
      return 33;
    case '8':
      return 34;
    case '9':
      return 35;
    case '0':
      return 36;
    case '!':
      return 37;
    case '@':
      return 38;
    case '#':
      return 39;
    case '(':
      return 41;
    case ')':
      return 42;
    case '-':
      return 44;
    case '+':
      return 46;
    case '&':
      return 47;
    case '=':
      return 48;
    case ';':
      return 49;
    case ':':
      return 50;
    case "'":
      return 52;
    case '"':
      return 53;
    case '%':
      return 54;
    case ',':
      return 55;
    case '.':
      return 56;
    case '/':
      return 59;
    case '?':
      return 60;
    case '°':
      return 62;
    case '🟥':
      return 63;
    case '🟧':
      return 64;
    case '🟨':
      return 65;
    case '🟩':
      return 66;
    case '🟦':
      return 67;
    case '🟪':
      return 68;
    case '⬜️':
      return 69;
  }
}
