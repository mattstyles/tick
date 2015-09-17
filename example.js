var Tick = require( './lib/index' )
var tick = new Tick({
    frameRate: 20
})

var count = 0
tick.on( 'data', dt => {
    if ( ++count >= 20 ) {
        console.log( '1s' )
        count = 0
    }
})

setInterval( () => {
    console.log( 'interval' )
}, 1000 )
