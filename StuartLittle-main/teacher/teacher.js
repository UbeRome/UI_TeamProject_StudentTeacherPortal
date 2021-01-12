// script for teacher page
var deleteAssignment;
var trSelected = "N/A";

$(document).ready( function(){

  //clear assignment fields on submit
  $("#submitBtn").on("click", function(e){
    e.preventDefault();

    //if editing instead of inserting (just delete row and re-add)
    if(trSelected != "N/A"){
      trSelected.parents('tr').remove();
    }

      var img = "<img alt='edit' attr-category='" + $("#category").val() + "' attr-due='" + $("#dueDate").val() + "' attr-title='" + $("#assignmentTitle").val() + "' src='../assets/edit.png' class='editAssignment'>"
      $("#addToTable").after("<tr><td>" + $("#assignmentTitle").val() + img +  "<img src='../assets/x.png' class='deleteAssignment'></td></tr>");
      $("#assignmentForm :input").val("");
      $("#submitBtn").val("Submit");



    //show confirmation for 3 seconds
    $('#confirmSuccess').slideDown();
     setTimeout(function() {
         $('#confirmSuccess').slideUp();
     }, 3000);
     trSelected = "N/A"
  })

  //if user confirmed that they want the assignment deleted
  $("#deleteAssignmentBtn").on("click", function(){
    //close modal
    $('#deleteAssignment').modal('hide')
    //delete row
    deleteAssignment.parents('tr').remove();
  })

  //clear participationNotes and face selection on submit
  $("#submitRating").on("click", function(){
    $("#submitRating").val("Re-Submit");

    //show confirmation for 3 seconds
    $('#confirmSuccess').slideDown();
     setTimeout(function() {
         $('#confirmSuccess').slideUp();
     }, 3000);
  })

  //select face rating
  $(".face").on("click", function(){
    //clear any other selected faces
    $(".face").removeClass("faceSelected");
    //then select this face
    $(this).addClass("faceSelected");
  })

//Add list functionality
  $("#stuartDaily").on("click", function(){
    // select stuart and deselect the others
    $("#stuartDaily").addClass("studentSelectedDaily");
    $("#janeDaily").removeClass("studentSelectedDaily");
    $("#johnDaily").removeClass("studentSelectedDaily");

    $("#participationContainer").removeAttr("hidden");
    $("#selectRatingContainer").removeAttr("hidden");

    // set Stuart Little's name
    $("#dailyReportTitle").text("Rate Stuart Little's Participation");
    $("#dailyNameField").html("<b>Name</b>: Stuart Little");
    $("#dailyGradeField").html("<b>Grade</b>: B");

    $("#studentListInstructions").hide();
    $("#studentPhoto").attr("src", "../assets/stuartLittle.png");
  });

  $("#janeDaily").on("click", function(){
    // select jane and deselect the others
    $("#janeDaily").addClass("studentSelectedDaily");
    $("#stuartDaily").removeClass("studentSelectedDaily");
    $("#johnDaily").removeClass("studentSelectedDaily");

    $("#participationContainer").removeAttr("hidden");
    $("#selectRatingContainer").removeAttr("hidden");

    // set Jane Doe's name
    $("#dailyReportTitle").text("Rate Jane Doe's Participation");
    $("#dailyNameField").html("<b>Name</b>: Jane Doe");
    $("#dailyGradeField").html("<b>Grade</b>: A");

    $("#studentListInstructions").hide();
    $("#studentPhoto").attr("src", "../assets/janeDoe.png");
  });

  $("#johnDaily").on("click", function(){
    // select john and deselect the others
    $("#johnDaily").addClass("studentSelectedDaily");
    $("#stuartDaily").removeClass("studentSelectedDaily");
    $("#janeDaily").removeClass("studentSelectedDaily");

    $("#participationContainer").removeAttr("hidden");
    $("#selectRatingContainer").removeAttr("hidden");

    // set John Doe's name
    $("#dailyReportTitle").text("Rate John Doe's Participation");
    $("#dailyNameField").html("<b>Name</b>: John Doe");
    $("#dailyGradeField").html("<b>Grade</b>: C");

    $("#studentListInstructions").hide();
    $("#studentPhoto").attr("src", "../assets/johnDoe.png");
  });

  $("#stuartGrades").on("click", function(){
    // select this student and deselect the others
    $("#stuartGrades").addClass("studentSelectedGrades");
    $("#janeGrades").removeClass("studentSelectedGrades");
    $("#johnGrades").removeClass("studentSelectedGrades");

    // set this student's grades
    $("#txt2").attr("value", "8/10");
    $("#txt3").attr("value", "10/10");

    $("#gradeContainer").removeAttr("hidden");
    $("#studentListInstructions").hide()

  });

  $("#janeGrades").on("click", function(){
    // select this student and deselect the others
    $("#janeGrades").addClass("studentSelectedGrades");
    $("#stuartGrades").removeClass("studentSelectedGrades");
    $("#johnGrades").removeClass("studentSelectedGrades");

    // set this student's grades
    $("#txt2").attr("value", "10/10");
    $("#txt3").attr("value", "10/10");

    $("#gradeContainer").removeAttr("hidden");
    $("#studentListInstructions").hide()

  });

  $("#johnGrades").on("click", function(){
    // select this student and deselect the others
    $("#johnGrades").addClass("studentSelectedGrades");
    $("#janeGrades").removeClass("studentSelectedGrades");
    $("#stuartGrades").removeClass("studentSelectedGrades");

    // set this student's grades
    $("#txt2").attr("value", "7/10");
    $("#txt3").attr("value", "6/10");

    $("#gradeContainer").removeAttr("hidden");
    $("#studentListInstructions").hide()

  });

})

//change button to Edit when submitted
$(document).on("click", ".btnGradesSubmit", function(){
  //get last character of id
  id = $(this).attr("id").slice(-1);
  $("#txt" + id).attr("disabled", "disabled");

  $(this).addClass("btnGradesEdit");
  $(this).removeClass("btnGradesSubmit")
  $(this).val("Edit")

})

//change button to Submit when editing
$(document).on("click", ".btnGradesEdit", function(){

  //get last character of id
  id = $(this).attr("id").slice(-1);
  $("#txt" + id).removeAttr("disabled");

  $(this).addClass("btnGradesSubmit");
  $(this).removeClass("btnGradesEdit")
  $(this).val("Submit")
})

//when "x" is pressed, open confirmation modal
$(document).on("click", ".deleteAssignment", function(){
    deleteAssignment = $(this);
  $('#deleteAssignment').modal('show')
})

//when "edit" is pressed, store which tr, and then populate inputs
$(document).on("click", ".editAssignment", function(){
    trSelected = $(this);
  $('#assignmentTitle').val($(this).attr('attr-title'))
  $('#category').val($(this).attr('attr-category'))
  $('#dueDate').val($(this).attr('attr-due'))

})
