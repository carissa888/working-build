/********************************
 * Enrollment tab
 ********************************/
$("#applying").click(function(){
// for the last tab
	$("#applying-last-tab").removeClass("hidden");
	$("#course-registration-last-tab").addClass("hidden");
	$("#pelp-last-tab").addClass("hidden");
	$("#returning-students-last-tab").addClass("hidden");
// for the active link
	$("#applying").addClass("active");
	$("#course-registration").removeClass("active");
	$("#pelp").removeClass("active");
	$("#returning-students").removeClass("active");

	return false;
});

$("#course-registration").click(function(){
// for the last tab
	$("#applying-last-tab").addClass("hidden");
	$("#course-registration-last-tab").removeClass("hidden");
	$("#pelp-last-tab").addClass("hidden");
	$("#returning-students-last-tab").addClass("hidden");
// for the active link
	$("#applying").removeClass("active");
	$("#course-registration").addClass("active");
	$("#pelp").removeClass("active");
	$("#returning-students").removeClass("active");

	return false;
});

$("#pelp").click(function(){
// for the last tab
	$("#applying-last-tab").addClass("hidden");
	$("#course-registration-last-tab").addClass("hidden");
	$("#pelp-last-tab").removeClass("hidden");
	$("#returning-students-last-tab").addClass("hidden");
// for the active link
	$("#applying").removeClass("active");
	$("#course-registration").removeClass("active");
	$("#pelp").addClass("active");
	$("#returning-students").removeClass("active");

	return false;
});

$("#returning-students").click(function(){
// for the last tab
	$("#applying-last-tab").addClass("hidden");
	$("#course-registration-last-tab").addClass("hidden");
	$("#pelp-last-tab").addClass("hidden");
	$("#returning-students-last-tab").removeClass("hidden");
// for the active link
	$("#applying").removeClass("active");
	$("#course-registration").removeClass("active");
	$("#pelp").removeClass("active");
	$("#returning-students").addClass("active");

	return false;
});

/********************************
 * Tuition tab
 ********************************/
$("#payments").click(function(){
// for the last tab
	$("#payments-last-tab").removeClass("hidden");
	$("#financial-aid-last-tab").addClass("hidden");
	$("#refunds-last-tab").addClass("hidden");
	$("#taxes-last-tab").addClass("hidden");
// for the active link
	$("#payments").addClass("active");
	$("#financial-aid").removeClass("active");
	$("#refunds").removeClass("active");
	$("#taxes").removeClass("active");

	return false;
});

$("#financial-aid").click(function(){
// for the last tab
	$("#payments-last-tab").addClass("hidden");
	$("#financial-aid-last-tab").removeClass("hidden");
	$("#refunds-last-tab").addClass("hidden");
	$("#taxes-last-tab").addClass("hidden");
// for the active link
	$("#payments").removeClass("active");
	$("#financial-aid").addClass("active");
	$("#refunds").removeClass("active");
	$("#taxes").removeClass("active");

	return false;
});

$("#refunds").click(function(){
// for the last tab
	$("#payments-last-tab").addClass("hidden");
	$("#financial-aid-last-tab").addClass("hidden");
	$("#refunds-last-tab").removeClass("hidden");
	$("#taxes-last-tab").addClass("hidden");
// for the active link
	$("#payments").removeClass("active");
	$("#financial-aid").removeClass("active");
	$("#refunds").addClass("active");
	$("#taxes").removeClass("active");

	return false;
});

$("#taxes").click(function(){
// for the last tab
	$("#payments-last-tab").addClass("hidden");
	$("#financial-aid-last-tab").addClass("hidden");
	$("#refunds-last-tab").addClass("hidden");
	$("#taxes-last-tab").removeClass("hidden");
// for the active link
	$("#payments").removeClass("active");
	$("#financial-aid").removeClass("active");
	$("#refunds").removeClass("active");
	$("#taxes").addClass("active");

	return false;
});

/********************************
 * After Pathway tab
 ********************************/
$("#byui-degree-options").click(function(){
// for the last tab
	$("#byui-degree-options-last-tab").removeClass("hidden");
	$("#applying-to-byui-last-tab").addClass("hidden");
	$("#byui-tuition-last-tab").addClass("hidden");
	$("#transcripts-and-certificates-last-tab").addClass("hidden");
// for the active link
	$("#byui-degree-options").addClass("active");
	$("#applying-to-byui").removeClass("active");
	$("#byui-tuition").removeClass("active");
	$("#transcripts-and-certificates").removeClass("active");

	return false;
});

$("#applying-to-byui").click(function(){
// for the last tab
	$("#byui-degree-options-last-tab").addClass("hidden");
	$("#applying-to-byui-last-tab").removeClass("hidden");
	$("#byui-tuition-last-tab").addClass("hidden");
	$("#transcripts-and-certificates-last-tab").addClass("hidden");
// for the active link
	$("#byui-degree-options").removeClass("active");
	$("#applying-to-byui").addClass("active");
	$("#byui-tuition").removeClass("active");
	$("#transcripts-and-certificates").removeClass("active");

	return false;
});

$("#byui-tuition").click(function(){
// for the last tab
	$("#byui-degree-options-last-tab").addClass("hidden");
	$("#applying-to-byui-last-tab").addClass("hidden");
	$("#byui-tuition-last-tab").removeClass("hidden");
	$("#transcripts-and-certificates-last-tab").addClass("hidden");
// for the active link
	$("#byui-degree-options").removeClass("active");
	$("#applying-to-byui").removeClass("active");
	$("#byui-tuition").addClass("active");
	$("#transcripts-and-certificates").removeClass("active");

	return false;
});

$("#transcripts-and-certificates").click(function(){
// for the last tab
	$("#byui-degree-options-last-tab").addClass("hidden");
	$("#applying-to-byui-last-tab").addClass("hidden");
	$("#byui-tuition-last-tab").addClass("hidden");
	$("#transcripts-and-certificates-last-tab").removeClass("hidden");
// for the active link
	$("#byui-degree-options").removeClass("active");
	$("#applying-to-byui").removeClass("active");
	$("#byui-tuition").removeClass("active");
	$("#transcripts-and-certificates").addClass("active");

	return false;
});

/********************************
 * Courses & Gatherings tab
 ********************************/
$("#pathway-courses").click(function(){
// for the last tab
	$("#pathway-courses-last-tab").removeClass("hidden");
	$("#assignments-grades-last-tab").addClass("hidden");
	$("#drop-withdraw-last-tab").addClass("hidden");
	$("#gatherings-questions-last-tab").addClass("hidden");
	$("#instructors-last-tab").addClass("hidden");
// for the active link
	$("#pathway-courses").addClass("active");
	$("#assignments-grades").removeClass("active");
	$("#drop-withdraw").removeClass("active");
	$("#gatherings-questions").removeClass("active");
	$("#instructors").removeClass("active");

	return false;
});

$("#assignments-grades").click(function(){
// for the last tab
	$("#pathway-courses-last-tab").addClass("hidden");
	$("#assignments-grades-last-tab").removeClass("hidden");
	$("#drop-withdraw-last-tab").addClass("hidden");
	$("#gatherings-questions-last-tab").addClass("hidden");
	$("#instructors-last-tab").addClass("hidden");
// for the active link
	$("#pathway-courses").removeClass("active");
	$("#assignments-grades").addClass("active");
	$("#drop-withdraw").removeClass("active");
	$("#gatherings-questions").removeClass("active");
	$("#instructors").removeClass("active");

	return false;
});

$("#drop-withdraw").click(function(){
// for the last tab
	$("#pathway-courses-last-tab").addClass("hidden");
	$("#assignments-grades-last-tab").addClass("hidden");
	$("#drop-withdraw-last-tab").removeClass("hidden");
	$("#gatherings-questions-last-tab").addClass("hidden");
	$("#instructors-last-tab").addClass("hidden");
// for the active link
	$("#pathway-courses").removeClass("active");
	$("#assignments-grades").removeClass("active");
	$("#drop-withdraw").addClass("active");
	$("#gatherings-questions").removeClass("active");
	$("#instructors").removeClass("active");

	return false;
});

$("#gatherings-questions").click(function(){
// for the last tab
	$("#pathway-courses-last-tab").addClass("hidden");
	$("#assignments-grades-last-tab").addClass("hidden");
	$("#drop-withdraw-last-tab").addClass("hidden");
	$("#gatherings-questions-last-tab").removeClass("hidden");
	$("#instructors-last-tab").addClass("hidden");
// for the active link
	$("#pathway-courses").removeClass("active");
	$("#assignments-grades").removeClass("active");
	$("#drop-withdraw").removeClass("active");
	$("#gatherings-questions").addClass("active");
	$("#instructors").removeClass("active");

	return false;
});

$("#instructors").click(function(){
// for the last tab
	$("#pathway-courses-last-tab").addClass("hidden");
	$("#assignments-grades-last-tab").addClass("hidden");
	$("#drop-withdraw-last-tab").addClass("hidden");
	$("#gatherings-questions-last-tab").addClass("hidden");
	$("#instructors-last-tab").removeClass("hidden");
// for the active link
	$("#pathway-courses").removeClass("active");
	$("#assignments-grades").removeClass("active");
	$("#drop-withdraw").removeClass("active");
	$("#gatherings-questions").removeClass("active");
	$("#instructors").addClass("active");

	return false;
});

/********************************
 * Speaking Partners tab
 ********************************/
$("#finding-partner").click(function(){
// for the last tab
	$("#finding-partner-last-tab").removeClass("hidden");
	$("#alternate-assignments-last-tab").addClass("hidden");
	$("#registration-last-tab").addClass("hidden");
	$("#volunteer-last-tab").addClass("hidden");
// for the active link
	$("#finding-partner").addClass("active");
	$("#alternate-assignments").removeClass("active");
	$("#registration").removeClass("active");
	$("#volunteer").removeClass("active");

	return false;
});

$("#alternate-assignments").click(function(){
// for the last tab
	$("#finding-partner-last-tab").addClass("hidden");
	$("#alternate-assignments-last-tab").removeClass("hidden");
	$("#registration-last-tab").addClass("hidden");
	$("#volunteer-last-tab").addClass("hidden");
// for the active link
	$("#finding-partner").removeClass("active");
	$("#alternate-assignments").addClass("active");
	$("#registration").removeClass("active");
	$("#volunteer").removeClass("active");

	return false;
});

$("#registration").click(function(){
// for the last tab
	$("#finding-partner-last-tab").addClass("hidden");
	$("#alternate-assignments-last-tab").addClass("hidden");
	$("#registration-last-tab").removeClass("hidden");
	$("#volunteer-last-tab").addClass("hidden");
// for the active link
	$("#finding-partner").removeClass("active");
	$("#alternate-assignments").removeClass("active");
	$("#registration").addClass("active");
	$("#volunteer").removeClass("active");

	return false;
});

$("#volunteer").click(function(){
// for the last tab
	$("#finding-partner-last-tab").addClass("hidden");
	$("#alternate-assignments-last-tab").addClass("hidden");
	$("#registration-last-tab").addClass("hidden");
	$("#volunteer-last-tab").removeClass("hidden");
// for the active link
	$("#finding-partner").removeClass("active");
	$("#alternate-assignments").removeClass("active");
	$("#registration").removeClass("active");
	$("#volunteer").addClass("active");

	return false;
});
