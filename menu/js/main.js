$(function  () {

	var data, csvObjects, jsonText;

	json.Products = [];

	$.get("data/data.csv", function(respons) {
     data = respons;
	}).done(function() {
		try {
			csvObjects = CSV.parse(data);
			json.Products = csvObjects;
			jsonText = JSON.stringify(csvObjects, null, '\t');

  //var shoesData = [{name:"Nike", price:199.00 }, {name:"Loafers", price:59.00 }, {name:"Wing Tip", price:259.00 }];
   //Get the HTML from the template   in the script tag
    var CountryListScript = $("#country-list-template").html();

   //Compile the template
    var CountryList = Handlebars.compile (CountryListScript);
	var paises = [];
	var pais = null;

	var ProductListScript = $("#product-list-template").html();
	var ProductScript = $("#product-template").html();

   //Compile the template
    var ProductList = Handlebars.compile (ProductListScript);
	var Product = Handlebars.compile (ProductScript);
	var productlist = [];
	var product = [];
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
	});
    $("#paises ul").append (CountryList(paises));
		} catch(e) {
			alert('Error cargando data: ' + e.message);
		}}
	);

    //$.UISearch({articleID:'#paises',placeholder:'Search',results: 5});

//We pass the shoesData object to the compiled handleBars function
// The function will insert all the values from the objects in their respective places in the HTML and returned HTML as a string. Then we use jQuery to append the resulting HTML string into the page
});
