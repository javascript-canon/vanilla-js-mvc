/* ================================================================= */
/* | VIEW FOR THE FRONT PAGE                                         */
/* ================================================================= */

// A very simple MVC implementation-read more at: http://bit.ly/1zxWh0m

// use strict mode
"use strict";

var

    // "require" jQuery core
    $ = require( "jquery" ),

    // "require" the model data module so the view can access it
    Resources = require( "./model" ),

    // reference to the data model in the "Resources" module
    resourcesData = Resources.ResourceModel,

    // create a view object for the homepage view...export it out later
    SingleResourceView = {};

/*
 * "render()" method renders info for single resource component.
 * The "model" parameter will represent whatever variable is storing
 * the model data
 */
SingleResourceView.render = function( model ) {

    // Grab the Heroku-powered model data
    var data = resourcesData;

    // Loop through the data to build elements
    for ( var key in data ) {

      // Perform standard hasOwnProperty() check
      if ( data.hasOwnProperty( key ) ) {

        var pageTarget = document.getElementById( "targetEl" ),
            resourceContainer = document.createElement( "article" ),
            resourceTitle = document.createElement( "h2" ),
            resourceImage = document.createElement( "img" ),
            resourceAuthor = document.createElement( "h3" ),
            resourceLink = document.createElement( "a" ),
            buyBookButton = document.createElement( "a" ),
            modalButton = document.createElement( "a" );

        /*
         * Setting attributes one-by-one instead of using something
         * like $.attr(). You can say that this code isn't cool, but
         * it's certainly faster.
         *
         * Check this at: http://bit.ly/set-attribute-test
         */

        // Set attributes for the containing element
        resourceContainer.setAttribute( "id", key );
        resourceContainer.setAttribute( "class", "col-md-4 single-resource" );
        resourceContainer.setAttribute( "data-resource-type", data[key].type );

        // Add the resource title to the inside of the <h2>
        resourceTitle.setAttribute( "class", "gl-subheader" );

        // Set attributes for the resource image
        resourceImage.setAttribute( "src", "/img/book-images/" + data[key].image_large );
        resourceImage.setAttribute("class", "book-image");

        // Add the resource author to the inside of the <h3>
        resourceAuthor.innerHTML =  "by " + data[key].author;

        // Set attributes for the link, then add the title inside of it
        resourceLink.setAttribute("href", data[key].link);
        resourceLink.setAttribute("class", "book-link");
        resourceLink.innerHTML = data[key].title + " &raquo;";

        /* Set attributes for the button that goes to the book's
         * Amazon page, then add text inside of it
         */
        buyBookButton.setAttribute("class", "single-resource__button js-book");
        buyBookButton.innerHTML =  "Buy this book!";

        /* Set attributes for the button that opens the modal, then
         * add text inside of it
         */
        modalButton.setAttribute("class", "single-resource__button js-modal");
        modalButton.innerHTML =  "Why it's good?";


        /*
         * Arrange elements for an individual resource, then place the
         * resource on the page
         */

        resourceTitle.appendChild( resourceLink );
        resourceContainer.appendChild( resourceTitle );
        resourceContainer.appendChild( resourceImage );
        resourceContainer.appendChild( resourceAuthor );
        resourceContainer.appendChild( buyBookButton );
        resourceContainer.appendChild( modalButton );
        pageTarget.appendChild( resourceContainer );

      } //end hasOwnProperty() check

    } // end for...in loop

} // end "render()"


// Export the page data so it's available to the page controller
exports.resourcesData = resourcesData;

// Export the page view so it's available to the page controller
exports.SingleResourceView = SingleResourceView;