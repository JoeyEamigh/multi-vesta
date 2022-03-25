# multi-vesta

This library strives to be an abstraction over the [Vestaboard](https://vestaboard.com/) API that allows for easy control of multiple Vestaboards at one time.

## Features

- [x] Control a Vestaboard
- [x] Connect multiple Vestaboards
- [x] Command Vestaboards using their nicknames
- [ ] Translate text and some emojis into a 2D array
- [ ] Synchronize multiple Vestaboards

## Usage

### Single Vestaboard

```ts
import { Vesta } from 'multi-vesta';

const options = {
  key: 'YOUR_API_KEY_HERE',
  secret: 'YOUR_API_SECRET_HERE',
}

const board = new Vesta(options);
```

### Multiple Vestaboards

```ts
import { MultiVesta, MultiVestaBoard } from 'multi-vesta';

const vestaboards: MultiVestaBoard[] = [
  {
    name: 'left',
    creds: { key: 'YOUR_API_KEY_HERE', secret: 'YOUR_API_SECRET_HERE' },
  },
  {
    name: 'right',
    creds: { key: 'YOUR_API_KEY_HERE', secret: 'YOUR_API_SECRET_HERE' },
  },
];

const vestas = new MultiVesta(vestaboards);

await vestas.setBoard('left', "Text here...");
await vestas.clearBoard('right');
```

## API

Most of the commands for `MultiVesta` have a first argument of `name` and a second argument of either `string` or `number[][]`. This is in line with the Vestaboard documentation's [character code reference](https://docs.vestaboard.com/characters). The types in this library understand this, and will either accept a string or a 2D array.

```ts
type VestaContent = string | number[][];
```

### Vesta

The class Vesta has the following functions for easy use:

```ts
public async setBoards(content: VestaContent) {
  // ...
}

public async clear() {
  // ...
}
```

### MultiVesta

The class MultiVesta has the following functions for easy use:

```ts
public async setBoard(name: string, content: VestaContent) {
  // ...
}

public async clearBoard(name: string) {
  // ...
}

public async setAll(content: VestaContent) {
  // ...
}

public async clearAll() {
  // ...
}

/** This function returns a Vesta instance */
public getInstance(name: string): Vesta {
  // ...
}
```
