///*function that is called when form is submitted
$("#SendCalc").click(function () {

    //declare variables and set the different types of grades to their correct percents
    var Assignment = $("#Assignment").val() * 0.50;
    var GroupProject = $("#GroupProj").val() * 0.10;
    var Quiz = $("#Quiz").val() * 0.10;
    var Midterm = $("#Midterm").val() * 0.10;
    var Final = $("#Final").val() * 0.10;
    var Intex = $("#Intex").val() * 0.10;
    var Total = Assignment + GroupProject + Quiz + Midterm + Final + Intex;
    var Letter;

    //use and if statement to find the letter grade that the user earned
    if (Total < 60) {
        Letter = 'E';
    }
    else if (Total < 64) {
        Letter = 'D-';
    }
    else if (Total < 67) {
        Letter = 'D';
    }
    else if (Total < 70) {
        Letter = 'D+';
    }
    else if (Total < 74) {
        Letter = 'C-';
    }
    else if (Total < 77) {
        Letter = 'C';
    }
    else if (Total < 80) {
        Letter = 'C+';
    }
    else if (Total < 84) {
        Letter = 'B-';
    }
    else if (Total < 87) {
        Letter = 'B';
    }
    else if (Total < 90) {
        Letter = 'B+';
    }
    else if (Total < 94) {
        Letter = 'A-';
    }
    else {
        Letter = 'A';
    }

    //output the percent grade and the letter grade into the form
    $("#Grade").text(Total + "%" + "  =  " + Letter);

})

