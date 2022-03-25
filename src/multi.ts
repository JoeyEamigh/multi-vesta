import { VestaContent } from './types';
import { Vesta, VestaCreds } from './vesta';

export interface MultiVestaBoard {
  /** This is how you refer to the board */
  name: string;
  creds: VestaCreds;
}

export interface VestaCont {
  instance: Vesta;
  name: string;
}

export class MultiVesta {
  private vestas: VestaCont[];
  public constructor(boards: MultiVestaBoard[]) {
    this.vestas = boards.map(b => ({ instance: new Vesta(b.creds), name: b.name }));
  }

  public async setBoard(name: string, content: VestaContent) {
    const instance = this.getInstance(name);
    await instance.setBoards(content);
  }

  public async clearBoard(name: string) {
    const instance = this.getInstance(name);
    await instance.clear();
  }

  public async setAll(content: VestaContent) {
    for (const v of this.vestas) {
      await v.instance.setBoards(content);
    }
  }

  public async clearAll() {
    for (const v of this.vestas) {
      await v.instance.clear();
    }
  }

  public getInstance(name: string): Vesta {
    const instance = this.vestas.find(v => v.name === name);
    if (!instance) throw new Error(`Could not find board ${name}`);
    return instance.instance;
  }
}
