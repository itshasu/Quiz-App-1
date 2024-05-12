function check(){
    var score = 0
    var right_Answer_1 = document.getElementById('Q1-A1')
    var Q1_Answer_2 = document.getElementById("Q1-A2")
    var Q1_Answer_3 = document.getElementById("Q1-A3")
    var Q1_Answer_4 = document.getElementById("Q1-A4")

    if (right_Answer_1.checked == true) {
        score++
        alert('Q1 Answer right')
    }
    else{
        alert('Q1 Answer wrong')
    }

    var right_Answer_2 = document.getElementById('Q2-A1')
    var Q1_Answer_2 = document.getElementById('Q2-A2')
    var Q2_Answer_2 = document.getElementById('Q2-A3')
    var Q3_Answer_2 = document.getElementById('Q2-A4')

    if (right_Answer_2.checked == true) {
        score++
        alert("Q2 Answer right")
    }
    else{
        alert("Q2 Answer wrong");
    }

    var right_Answer_3 = document.getElementById('Q3-A4')
    var Q3_Answer_1 = document.getElementById('Q3-A2')
    var Q4_Answer_4 = document.getElementById('Q3-A3')
    var Q4_Answer_2 = document.getElementById('Q3-A1')

    if (right_Answer_3.checked == true) {
        score++
        alert("Q3 Answer right")
    }
    else{
        alert("Q3 Answer wrong");
    }
    alert("Your score is" + score++)
}