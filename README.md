# mini-tween

mini-tween is a minimal tweening engine.

## Usage

Grab an easing function from [jQuery Easing plugin](https://github.com/gdsmith/jquery.easing) such as `easeOutElastic`:

```js
const c4 = (2 * Math.PI) / 3
function easeOutElastic (x) {
  return x === 0 ? 0 : x === 1 ? 1 :
    Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1
}
```

Then use it! [Online demo](https://jsfiddle.net/lmk123/66rqtypa/)

```js
const tween = require('mini-tween')

const div = document.getElementsByTagName('div')[0]
tween(100, 600, 2000, easeOutElastic, height => div.style.height = height + 'px')
  .then(() => console.log('end'))
```

## License

MIT
