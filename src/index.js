
import raf from 'raf-stream'
import EventEmitter from 'eventemitter3'

export default class Tick extends EventEmitter {
    constructor( opts ) {
        super()

        opts = Object.assign({
            el: typeof window === 'undefined' ? null : window,
            frameRate: 60
        }, opts )

        this.el = opts.el
        this.frameRate = opts.frameRate

        // raf normally operates just quicker than 1000/16
        this.rate = 999 / opts.frameRate

        this.raf = raf( opts.el )

        let elapsed = 0

        this.raf.on( 'data', delta => {
            elapsed = elapsed + delta
            //console.log( delta, this.rate, 'elapsed', elapsed )
            if ( elapsed < this.rate ) {
                return
            }
            this.emit( 'data', elapsed )
            elapsed = 0
        })
    }

    set frameRate( fr ) {
        this.rate = 999 / fr
    }

    pause() {
        this.raf.pause()
    }

    resume() {
        this.raf.resume()
    }
}
