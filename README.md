## Installation

```sh
npm install --save sandi-morse
```

## Usage

```js
import { encode, decode } from "./app.js";

// Sandi Morse ke Alfabet
const sandi_morse = encode(".... . .-.. .-.. --- * .-- --- .-. .-.. -..");
console.log(sandi_morse); // "hello world"

// Alfabet ke Sandi Morse
const hello = decode("hello world");
console.log(hello); // ".... . .-.. .-.. --- * .-- --- .-. .-.. -.."
```

## Symbol

```

"*" = Space

```
