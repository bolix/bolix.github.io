$(function () {
    /*
    $('.nano').nanoScroller({
        preventPageScrolling: true
    });*/

    !function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0],
            p = /^http:/.test(d.location) ? 'http' : 'https';
        if (!d.getElementById(id)) {
            js = d.createElement(s);
            js.id = id;
            js.src = p + "://platform.twitter.com/widgets.js";
            fjs.parentNode.insertBefore(js, fjs);
        }
    }(document, "script", "twitter-wjs");
/*
    var oTable = $('#birras').dataTable( {
					"bProcessing": true,
					"sAjaxSource": "data/birras.txt",
                    "oLanguage": {
                                    "sUrl": "data/es.txt"
                                },
					"aoColumns": [
						{ "mData": "engine" },
						{ "mData": "browser" },
						{ "mData": "platform" },
						{ "mData": "version" },
						{ "mData": "grade" }
					]
				} );*/
    
var hideTwitterAttempts = 0;
function hideTwitterBoxElements() {
    setTimeout( function() {
        if ( $('[id*=twitter]').length ) {
        $('[id*=twitter]').each( function(){
                $(this).width( "100%" ); //override min-width of 220px
        });
        }
        hideTwitterAttempts++;
        if ( hideTwitterAttempts < 3 ) {
            hideTwitterBoxElements();
        }
    }, 1500);
}

// somewhere in your code after html page load
hideTwitterBoxElements();

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-51363036-1', 'culturacervecera.do');
  ga('send', 'pageview');

});
