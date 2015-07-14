var JSONdata = [];
var JSONCountryCode = [];


// "I am a/an" (audience) dropdown logic
$("#user-type").change(function() {
	var value = $(this).val();

	// *** THIS VARIABLE CAN BE SET TO TRUE IF THE 
	// USER IS ALREADY LOGGED IN WITH THEIR LDS ACCOUNT ***
	var isSignedIn;



	if ($(this).val() != "null") {
		//After audience change remove the help-type reminder to select audience
		$("#help-type option[data-temp-id='chooseaud']").hide();
	} else {
		//This is if the audience is set back to "--"
		$("#help-type option[data-temp-id='chooseaud']").show();
		$("#help-type option[data-temp-id='database']").remove();
	};

	//hide self help suggestions when changing audience
	$("#selfhelp").addClass("hidden");

	//reset topic dropdown
	$("#help-type option[data-temp-id='null']").attr("selected","selected");

	//If the audience is Current Pathway Student
	if (value == "Current Pathway Student") {
		$("#pathwayid").removeClass("hidden");
	} else {
		$("#pathwayid").addClass("hidden");
	};
	

	$.each(JSONdata, function(key, val) {
		
		//find the audience selected
		if (val.Audience == value) {

			var reqCredentials = (val.LDS_Credentials == true);

			//Remove any previously populated values
			$("#help-type option[data-temp-id='database']").remove();

			if (reqCredentials && !isSignedIn) {
				$("#LDS-Login-Prompt").removeClass("hidden");
				$("#login-message").html(val.Audience + ", please sign in with your LDS Account to continue:");
				
				// If this audience needs to sign in, add a prompt in the dropdown
				$("#help-type").append("<option value='null' data-temp-id='database'>Please sign in to continue</option>");
			} else {
				$("#LDS-Login-Prompt").addClass("hidden");
			};

			//populate the topics selection dropdown
			$.each(val.Topics, function(k, v) {

				/* Let's still populate the help-type dropdown if a user hasn't signed in, just disable the options. */
				if (reqCredentials && !isSignedIn) {
					$("#help-type").append("<option disabled data-temp-id='database'>" + v.Topic + "</option>");
				} else {
					$("#help-type").append("<option data-temp-id='database'>" + v.Topic + "</option>");
				}
			});
			return false;
		};
	});
});


// "Please help me with" (help-type) dropdown logic
$("#help-type").change(function(){
	var topicValue = $(this).val();
	var audienceValue = $("#user-type").val();

	//hide/unhide self help suggestions
	if (topicValue == "Other" || topicValue == "null") {
		$("#selfhelp").addClass("hidden");
	}
	else {
		$("#selfhelp").removeClass("hidden");
	}

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

//Logic to prepopulate the phone# country code when a user selects their country
$("#countryselect").change(function(){
	var country = $("#countryselect").val();
	console.log($("#countryselect"));
	$.each( JSONCountryCode, function(key5, val5) {
		if (country === val5.CountryName) {
			$("#countrycode").val(val5.CountryCode);
		}
	});
});

//Email form valudation
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


//"how would you like to contact us" sub tab phone click handler
$("#Phone").click(function(){
	$("#info-phone").toggleClass("hidden");
	$("#contactmethodicons").toggleClass("hidden");
});

//"how would you like to contact us" sub tab email click handler
$("#Email").click(function(){
	$("#info-email").toggleClass("hidden");
	$("#contactmethodicons").toggleClass("hidden");
})

//Back button for the "how would you like to contact us" sub tabs
$(".back-btn").click(function(){
	$("#info-email").addClass("hidden");
	$("#contactmethodicons").removeClass("hidden");
	$("#info-phone").addClass("hidden");
});

//Show state selector if US is chosen
$("#countryselect").change(function(){
	console.log($(this).val());

    if ($(this).val() == "United States") {
    	$("#stateselect").removeClass("hidden");
    } else {
    	$("#stateselect").addClass("hidden");
    };
});


//Things to do when the page loads.
$('document').ready(function() {
	// Populate page with JSON Data
	$.getJSON("/working-build/js/json/contact_us.json", function(data) {

		//set recommended contact option from JSON file
		$("#"+data.recommended).parent().addClass("recommended");

		//populate the audience dropdown values
		JSONdata = data.data;
		$.each( JSONdata, function(key, val) {
			$("#user-type").append("<option>" + val.Audience + "</option>")
		});

		//populate the email countries values
		JSONCountryCode = data.codes;
		$.each(JSONCountryCode, function(key4, val4) {
			$("#countryselect").append("<option>" + val4.CountryName + "</option>")
		});


		/*
		* If a user presses the browser back button the browser may 
		* auto populate the audience dropdown but jQuery wont trigger 
		* the .change() event these conditional statements handle that case.
		*/

		if ($("#user-type").val() != null) { //Audience dropdown
			//force change event
			$("#user-type").change();
		};
		if ($("#countryselect").val() != "--") { //Email country dropdown
			//force change event
			$("#countryselect").change();
		}

	}).fail(function() {
		//Cannot load JSON src file
		console.log("Could not load JSON");
		$("#user-type, #help-type, #countryselect").append("<option disabled='disabled'>ERROR: Could not load database</option>");
	}).always(function(){
		//get rid of the loading options in the dropdowns
		$("[data-temp-id='loading']").remove();
	});
});
