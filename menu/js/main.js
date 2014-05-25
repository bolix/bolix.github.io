$(function  () {

	var data, csvObjects, jsonText;

	json.Products = [];

	var CountryListScript = $("#country-list-template").html();

//Compile the template
	var CountryList = Handlebars.compile (CountryListScript);

	var ProductListScript = $("#product-list-template").html();
	var ProductScript = $("#product-template").html();

	//Compile the template
		var ProductList = Handlebars.compile (ProductListScript);
	var Product = Handlebars.compile (ProductScript);

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

});
