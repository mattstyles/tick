# tick

> Framelimits [raf-stream](https://github.com/CMTegner/raf-stream)

```sh
npm i -S @mattstyles/tick
```

```js
import Tick from '@mattstyles/tick'

let tick = new Tick({
  frameRate: 30
})

tick.on( 'data', dt => {
  console.log( dt ) // ~33.333
})
```

## API

### new Tick( `<Object>` ) _constructor_

Creates a new tick emitter

```js
let tick = new Tick({
  el: document.querySelector( 'canvas' ),
  frameRate: 8
})
```

* __el__ `<DOMElement>` the dom element to attach to

* __frameRate__ `<Number>` ticks per second

Framerate can be changed on fly just by setting it

```js
tick.frameRate = 20
```

### .pause()

Paused the raf event stream

### .resume()

Resumes the raf event stream
