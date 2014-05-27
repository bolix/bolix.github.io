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
    
var substringMatcher = function(strs) {
  return function findMatches(q, cb) {
    var matches, substringRegex;
 
    // an array that will be populated with substring matches
    matches = [];
 
    // regex used to determine if a string contains the substring `q`
    substrRegex = new RegExp(q, 'i');
 
    // iterate through the pool of strings and for any string that
    // contains the substring `q`, add it to the `matches` array
    $.each(strs, function(i, str) {
      if (substrRegex.test(str.Description)) {
        // the typeahead jQuery plugin expects suggestions to a
        // JavaScript object, refer to typeahead docs for more info
        matches.push({ value: str.Description, price: str.Price });
      }
    });
 
    cb(matches);
  };
};
 
$('#searchbox .typeahead').typeahead(null, {
  name: 'best-pictures',
  displayKey: 'value',
  source: substringMatcher(json.Products),
  templates: {
    empty: [
      '<div class="empty-message">',
      'No hay resultados',
      '</div>'
    ].join('\n'),
    suggestion: Handlebars.compile('<p><strong>{{value}}</strong> – {{price}}</p>')
  }
});
     $('#menuiframe').toggle();
     $('#desclick_advance').toggle();
     $('.click-toggle').click(function(){
        $('#menuiframe').toggle();
         $('#click_advance').toggle();
         $('#desclick_advance').toggle();
        $("i",this).toggleClass("icon-circle-arrow-up icon-circle-arrow-down");
    });

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-51363036-1', 'culturacervecera.do');
  ga('require','displayfeatures');
  ga('send', 'pageview');

});
