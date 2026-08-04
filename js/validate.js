// ---- Contact form validation ---

//Making sure that HTML page finishes loading
document.addEventListener("DOMContentLoaded", function (){
    //grabbing the form
    const form = document.getElementById("contact-form");

    //func for writing unique errors depending on errors
    function showError(fieldID, message){
        const errorE1 = document.getElementById(fieldID + "-error");
        errorE1.textContent = message;
    }

    //func for clearing the error
    function clearError(fieldID){
        const errorE1 = document.getElementById(fieldID + '-error');
        errorE1.textContent = "";
    }

    //function to check the email format
    function validateEmail(email){
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);    //using the pattern(regex) to match the string with pattern
    }

    //submit handler
    form.addEventListener("submit", function (e){
        e.preventDefault();

        let isValid = true; //flagging if anything fails 
        //grabbing whatever user writes and skipping whitespace
        const name = document.getElementById("name").value.trim(); 

        const email = document.getElementById("email").value.trim();

        const message = document.getElementById("message").value.trim();

        //validation block
        
        //Validating for name(if name is empty show error otherwise clear the attempt)
        if (name === ""){
            showError("name", "Please Enter Your Name.");
            isValid = false;    //form invalid
        } else {
            clearError("name"); //any old error gets cleard out
        }

        //Validating for email
        //2 conditions using "OR" (empty and not-in-format)
        if (email === "") {
            showError("email", "Please enter your email.");
            isValid = false;
        } else if (!validateEmail(email)) {
            showError("email", "Please enter a valid email address.");
            isValid = false;
        } else {
            clearError("email");
        }


        //Validating for message
        //Must have atleast 20 characters
        if (message.length < 20){
            showError("message", "Message must be atleast 20 characters");
            isValid = false;
        } else{
            clearError("message");
        }

  //When everything is true(success)
        if (isValid) {
            form.style.display = "none"; //hides the form

            document.getElementById("success-message").style.display = "block";
            //shows the success message
        }


    });
});