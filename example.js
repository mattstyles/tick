var Tick = require( './lib/index' )
var tick = new Tick({
    frameRate: 30
})

var count = 0
tick.on( 'data', dt => {
    console.log( dt )
    if ( ++count >= 30 ) {
        console.log( '1s' )
        count = 0
    }
})

setInterval( () => {
    console.log( 'interval' )
}, 1000 )
