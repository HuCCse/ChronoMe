/**
 * ChronoMe
 * @version: 1.0.0
 * @author: Kevin Lucich
 */
var ChronoMe = {

	'chronos': {},

	//	Start Chrono $name
    'start': function( name ){
		ChronoMe.chronos[ name ] = new ChronoMe.prototype.Chrono();
    },

    //	Stop Chrono $name
    'stop': function( name ){
       (ChronoMe.chronos[ name ]).stop();
       return ChronoMe.value( name );
    },

    //	Restart Chrono $name
    'restart': function( name ){
		(ChronoMe.chronos[ name ]).restart();
	},

    // Return a value (float) of Chrono $name
    'value': function( name ){
        return (ChronoMe.chronos[ name ]).value();
    },

    'getAllChronos': function(){
        var chronos = {};
        for( var c in ChronoMe.chronos ){
            chronos[c] = (ChronoMe.chronos[c]).value();
        }
        console.dir( chronos );
        return chronos;
    }

};
ChronoMe.prototype.Chrono = function(){

	var CHRONO_RUNNING = 'CHRONO_RUNNING';
	var CHRONO_STOP = 'CHRONO_STOP';

	this.status = CHRONO_RUNNING;
	this.start = (new Date()).getTime();
	this.end = 0;


	this.stop = function(){
		if( this.status != CHRONO_RUNNING ){
			console.error("Chrono isn't started");
			return false;
		}
		this.end = (new Date()).getTime();
		this.status = CHRONO_STOP;
		return true;
	};

	this.restart = function(){
		this.status = CHRONO_RUNNING;
		this.start = (new Date()).getTime();
		this.end = 0;
		return true;
	};

	this.value = function(){
		if( this.status != CHRONO_STOP ){
			console.error("Chrono isn't stopped");
			return false;
		}
		return (this.end - this.start);
	};

};