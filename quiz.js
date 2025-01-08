function calculateScore() {
    var score = 0;

    // Question 1
    if (document.querySelector('input[name="q1"]:checked')?.value === "A") {
        score++;
    }

    // Question 2
    if (document.querySelector('input[name="q2"]:checked')?.value === "B") {
        score++;
    }
    // Question 3
    if (document.querySelector('input[name="q3"]:checked')?.value === "A") {
        score++;
    }

    // Question 4
    if (document.querySelector('input[name="q4"]:checked')?.value === "C") {
        score++;
    }

     // Question 5
    if (document.querySelector('input[name="q5"]:checked')?.value === "B") {
        score++;
    }

    // Example for Question 6
    if (document.querySelector('input[name="q6"]:checked')?.value === "C") {
        score++;
    }

    // Example for Question 7
    if (document.querySelector('input[name="q7"]:checked')?.value === "B") {
        score++;
    }

    // Example for Question 8
    if (document.querySelector('input[name="q8"]:checked')?.value === "A") {
        score++;
    }

    // Question 9
    if (document.querySelector('input[name="q9"]:checked')?.value === "A") {
        score++;
    }

    // Question 10
    if (document.querySelector('input[name="q10"]:checked')?.value === "C") {
        score++;
    }

    // Example for Question 11
    if (document.querySelector('input[name="q11"]:checked')?.value === "C") {
        score++;
    }

    // Example for Question 12
    if (document.querySelector('input[name="q12"]:checked')?.value === "B") {
        score++;
    }

    // Example for Question 13
    if (document.querySelector('input[name="q13"]:checked')?.value === "A") {
        score++;
    }

    // Example for Question 14
    if (document.querySelector('input[name="q14"]:checked')?.value === "C") {
        score++;
    }

    // Question 15
    if (document.querySelector('input[name="q15"]:checked')?.value === "C") {
        score++;
    }

    // Question 16
    if (document.querySelector('input[name="q16"]:checked')?.value === "B") {
        score++;
    }

    // Example for Question 17
    if (document.querySelector('input[name="q17"]:checked')?.value === "C") {
        score++;
    }

    // Example for Question 18
    if (document.querySelector('input[name="q18"]:checked')?.value === "C") {
        score++;
    }

    // Example for Question 19
    if (document.querySelector('input[name="q19"]:checked')?.value === "B") {
        score++;
    }

    // Example for Question 20
    if (document.querySelector('input[name="q20"]:checked')?.value === "C") {
        score++;
    }


    // Show the result
    document.getElementById("quiz-result").style.display = "block";
    document.getElementById("score").textContent = score;

    // Show the remarks based on score
       var remarks = "";
    if (score <= 5) {
        remarks = "Oh dear, you need to keep using FLAVOR to become a true foodie. Don't worry, you'll get there!";
    } else if (score <= 10) {
        remarks = "Hmm, good knowledge! But keep using FLAVOR to cook more yummy dishes!";
    } else if (score <= 16) {
        remarks = "Wowow, great job! Keep using FLAVOR for more delicious meals!";
    } else if (score <= 17) {
        remarks = "You're amazing! Make more and more dishes from FLAVOR!";
    } else {
        remarks = "You're a true foodie! Amazing!! Keep using FLAVOR and enjoy the goodness!";
    }
    document.getElementById("remarks").textContent = remarks;



    // Hide the form
    document.getElementById("quiz-form").style.display = "none";
}
