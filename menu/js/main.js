$(function  () {

	var data, csvObjects, jsonText;

	json.Products = [];

	var CountryListScript = $("#country-list-template").html();

//Compile the template
	var CountryList = Handlebars.compile (CountryListScript);

	var ProductListScript = $("#product-list-template").html();
	var ProductScript = $("#product-template").html();
    var AllProductScript = $("#all-product-list-template").html();

	//Compile the template
		var ProductList = Handlebars.compile (ProductListScript);
	var Product = Handlebars.compile (ProductScript);
    var AllProduct = Handlebars.compile (AllProductScript);

	$.get("data/data.csv", function(respons) {
     data = respons;
	}).done(function() {
		try {
			csvObjects = CSV.parse(data);
			json.Products = csvObjects;
			jsonText = JSON.stringify(csvObjects, null, '\t');

	var paises = [];
	var pais = null;


	var productlist = [];
	var product = [];
    var allproduct = [];
	var paish = null;
	$(json.Products).each(function(index, item) {
			if (pais != item.Pais) {
				paises.push({'PaisId':item.PaisId, 'Pais':item.Pais});
				paish = item.Pais;
			} else {
				paish = item.Pais;
			}
			if (pais != item.Pais) {
				productlist.push({'PaisId':item.PaisId, 'Pais':item.Pais,'Description':item.Description,'Pricef':item.Pricef,'ABV':item.ABV, 'Brewery':item.Description.substr(0,item.Description.indexOf(' '))});
				$("body").append (ProductList(productlist));
				pais = item.Pais;
				productlist = [];
			} else {
				product.push({'PaisId':item.PaisId, 'Pais':item.Pais,'Description':item.Description,'Pricef':item.Pricef,'ABV':item.ABV, 'Brewery':item.Description.substr(0,item.Description.indexOf(' '))});
				$("#"+item.PaisId).find(".list").append (Product(product));
				pais = item.Pais;
				product = [];
			}
            allproduct.push({'PaisId':item.PaisId, 'Pais':item.Pais,'Description':item.Description,'Pricef':item.Pricef,'ABV':item.ABV, 'Brewery':item.Description.substr(0,item.Description.indexOf(' '))});
				$("#busq").find(".list").append (AllProduct(allproduct));
				allproduct = [];
	});
    $("#paises ul").append (CountryList(paises));
		} catch(e) {
			alert('Error cargando data: ' + e.message);
		}}
	);

    $.UISearch({articleId:'#busq', id:"searchfield",placeholder:'Buscar',results: 5});
    
    //$.UISlideout();
    
    //$.UISlideout.populate([{busq:'Buscador'},{paises:'Paises'}]);
    var opts = {
     tabs : 2,
	  imagePath : "../icons/",
	  icons : ["busq", "paises"],
	  labels : ["Todas", "Pais"],
	  selected : 1
   };
   $.UITabbar(opts);
    
    $('#searchfield').keyup(function () {
    var filter = this.value,
        $list = $('#busq').find('.list');

    if (filter) {
        // this finds all links in a list that contain the input,
        // and hide the ones not containing the input while showing the ones that do
        $list.find("h3:not(:Contains(" + filter.toUpperCase() + "))").parent().parent().hide();
        $list.find("h3:Contains(" + filter.toUpperCase() + ")").parent().parent().show();
    } else {
        $list.find("li").show();
    }
    return false;
});

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-51363036-1', 'culturacervecera.do');
  ga('require','displayfeatures');
  ga('send', 'pageview');
    
});
