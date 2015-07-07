var JSONdata = [];
var JSONCountryCode = [];

$("#Phone").click(function(){
	$("#info-phone").toggleClass("hidden");
	$("#contactmethodicons").toggleClass("hidden");
});
$("#info-phone .phone-close").click(function(){
    $("#info-phone").addClass("hidden");
});

$("#Email").click(function(){
	$("#info-email").toggleClass("hidden");
	$("#contactmethodicons").toggleClass("hidden");
})

$(".back-btn").click(function(){
	$("#info-email").addClass("hidden");
	$("#contactmethodicons").removeClass("hidden");
	$("#info-phone").addClass("hidden");
});

$("#countryselect").change(function(){
	console.log($(this).val());

    if ($(this).val() == "United States") {
    	$("#stateselect").removeClass("hidden");
    } else {
    	$("#stateselect").addClass("hidden");
    };
});

// "I am a" dropdown case
$("#user-type").change(function() {
	var value = $(this).val();

	if ($(this).val() != "--") {
		//After first change remove the help-type reminded to select audience
		$("#help-type option[data-temp-id='chooseaud']").hide();
	} else {
		//After first change remove the help-type reminded to select audience
		$("#help-type option[data-temp-id='chooseaud']").show();
		$("#help-type option[data-temp-id='database']").remove();
	};
	//hide self help suggestions when changing audience
	$("#selfhelp").addClass("hidden");
	//reset topic dropdown
	$("#help-type option[data-temp-id='null']").attr("selected","selected");
	

	$.each(JSONdata, function(key, val) {
		//find the audience selected
		if (val.Audience == value) {
			//remove any previous populated values
			$("#help-type option[data-temp-id='database']").remove();
			//populate the topics selection dropdown
			$.each(val.Topics, function(k, v) {
				$("#help-type").append("<option data-temp-id='database'>" + v.Topic + "</option>");
			});
			return false;
		};
	});
});

// "Please help me with" dropdown case
$("#help-type").change(function(){
	var topicValue = $(this).val();
	var audienceValue = $("#user-type").val();

	//unhide self help suggestions
	if (topicValue == "Other")
		$("#selfhelp").addClass("hidden");
	else
		$("#selfhelp").removeClass("hidden");

	//populate self help suggestions
	$.each(JSONdata, function(key1, val1) {
		//find the audience selected
		if (val1.Audience == audienceValue) {
			$.each(val1.Topics, function(key2, val2) {
				if (val2.Topic == topicValue) {
					//remove any previous populated values
					$("#selfHelpList [data-temp-id='database']").remove();
					//populate the topics selection dropdown
					$.each(val2.Links, function(k, v) {
						$("#selfHelpList").append("<div data-temp-id='database' class='item'><a target='_blank' href='" + v.URL + "'>" + v.Title + "</a></div>")
					});
					return false;
				}
			});
			return false;
		};
	});
});

$("#countryselect").change(function(){
	var country = $("#countryselect").val();
	console.log($("#countryselect"));
	$.each( JSONCountryCode, function(key5, val5) {
		if (country === val5.CountryName) {
			$("#countrycode").val(val5.CountryCode);
		}
	});
});

$("[required]").change(function(){
	var filled = true;

	$("[required]").each(function() {
		if ($(this).val() == "") {
			filled = false;
		}
	});
	if (filled != false) {
		$("[type=submit]").removeAttr("disabled");		
	}
	else 
	{
		$("[type=submit]").attr("disabled", "");		
	}
});

$('document').ready(function() {
	// Populate Page with JSON Data
	$.getJSON("/working-build/js/json/contact_us.json", function(data) {

		//set recommended contact option
		$("#"+data.recommended).parent().addClass("recommended");

		//set the audience values
		JSONdata = data.data;
		$.each( JSONdata, function(key, val) {
			$("#user-type").append("<option>" + val.Audience + "</option>")
		});

		//If a user presses the back button the browser may auto populate the
		// audience dropdown but jQuery wont trigger the .change() event
		if ($("#user-type").val() != null) {
			//force change event
			$("#user-type").change();
		};

		//set the countries values
		JSONCountryCode = data.codes;
		$.each(JSONCountryCode, function(key4, val4) {
			$("#countryselect").append("<option>" + val4.CountryName + "</option>")
		});

		//autopopulate the countrycode
		if ($("#countryselect").val() != "--") {
			$("#countryselect").change();
		}

	}).fail(function() {
		console.log("Could not load JSON");
		$("#user-type, #help-type, #countryselect").append("<option disabled='disabled'>ERROR: Could not load database</option>");
	}).always(function(){
		$("[data-temp-id='loading']").remove();
	});
});
