/* ================================================================= */
/* | general.js                                                      */
/* ============                                                      */
/* A generic file  for scripts that don't have any real role in      */
/* the MVC code code                                                 */
/* ================================================================= */

// use strict mode
"use strict";

// "require" jQuery core
var $ = require( "jquery" );

/*
 * GetElementHeight(): a constructor function used for calculating an
 * element's total height
 */
 var GetElementHeight = function( element ) {
  this.element = element;
  return this;
}

/*
 * calculate(): a method attached to the "GetElementHeight()" 
 * prototype that gets an element's TOTAL box model height by finding
 * its height, top/bottom margins, top/bottom borders,
 * top/bottom padding and then adding them altogether.  
 */
GetElementHeight.prototype.calculate = function() {
  
  /*
   * Grab the heights, margins, padding and borders. They all start 
   * off as strings so convert them to numbers with parseInt()
   */
  var

      // get element height
      elementHeight = parseInt( $( this.element ).css( "height" ) ),

      // get element margins
      elementMarginTop = parseInt( $( this.element ).css( "marginTop" ) ),
      elementMarginBottom = parseInt( $( this.element ).css( "marginBottom" ) ),

      // get element borders
      elementBorderTop = parseInt( $( this.element ).css( "borderTopWidth" ) ),
      elementBorderBottom = parseInt( $( this.element ).css( "borderBottomWidth" ) ),

      // get element padding
      elementPaddingTop = parseInt( $( this.element ).css( "paddingTop" ) ),
      elementPaddingBottom = parseInt($( this.element ).css( "paddingBottom" ) );

  /*
   * Place all the values in an array & add them together with
   * reduce(). Attach the resulting sum to "this" so it's
   * readily available.
   */
  this.elementHeight = [
        elementHeight,
        elementMarginTop,
        elementMarginBottom,
        elementBorderTop,
        elementBorderBottom,
        elementPaddingTop,
        elementPaddingBottom
      ].reduce( function( a, b ) {
        var arraySum = a + b;
        
        // the resulting sum needs to be returned...not sure why
        return arraySum;
      });

  // Make the height value available by returning it 
  return this;

  /*
   * A log statement that returns the targeted element. Not needed now 
   * but is useful at times.
   */
  // console.log("foo: " + this.element);
}

$( window ).on( "scroll touchmove", function () {
  

  var
      /*
       * Create a variable that run the site logo through
       * "GetElementHeight()"
       */
      logo = new GetElementHeight( "#logoEl" ),
      
      // Create a variable that will eventually store the logo's height
      logoHeight;

  /*
   * Run the logo through "GetElementHeight.calculate()" & get the
   * logo's total height
   */
  logo.calculate();

  // Store the resulting height in the "logoHeight" vatiable
  logoHeight = logo.elementHeight;

  console.log( logoHeight );
});