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
	var type = null;
	
	var ProductListScript = $("#product-list-template").html(); 
	var ProductScript = $("#product-template").html();

   //Compile the template
    var ProductList = Handlebars.compile (ProductListScript);
	var Product = Handlebars.compile (ProductScript);
	var productlist = [];
	var product = [];
	var type = null;
	var typeh = null;
	$(json.Products).each(function(index, item) {
			if (typeh != item.Type) {
				paises.push({'TypeId':item.TypeId, 'Type':item.Type});
				typeh = item.Type;
			} else {
				typeh = item.Type;
			}
			if (type != item.Type) {
				productlist.push({'TypeId':item.TypeId, 'Type':item.Type,'Description':item.Description,'Pricef':item.Pricef});
				$("body").append (ProductList(productlist));
				type = item.Type;
				productlist = [];
			} else {
				product.push({'TypeId':item.TypeId, 'Type':item.Type,'Description':item.Description,'Pricef':item.Pricef});
				$("#"+item.TypeId).find(".list").append (Product(product));
				type = item.Type;
				product = [];
			}
	});
    $("#paises ul").append (CountryList(paises));
		} catch(e) {
			alert('Error cargando data: ' + e.message);
		}
	  });
	
    $.UISearch({articleID:'#paises',placeholder:'Search',results: 5});

	
//We pass the shoesData object to the compiled handleBars function
// The function will insert all the values from the objects in their respective places in the HTML and returned HTML as a string. Then we use jQuery to append the resulting HTML string into the page
});