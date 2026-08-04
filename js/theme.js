//Workings of switching the Theme


function setupThemeToggle(){
    const toggleBtn = document.getElementById("theme-toggle"); //finds the button

    //safety guard
    if (!toggleBtn){
        return;         //if button not exist then exit the function
    }

    function updateBtn(){       //func to change the button text
        const currentTheme = document.body.getAttribute("data-theme");  //reads current value on "data-theme" attribute

            if(currentTheme === "dark"){
                toggleBtn.textContent = "Switch to Light Mode";     //show light text when dark
            } else{
                toggleBtn.textContent = "Switch to Dark Mode";      //show dark text when light
            }
        }
    
    updateBtn(); //updates making sure the text is correct from start
    
    toggleBtn.addEventListener("click", function() {    //runs everytime when clicked on button
        const currentTheme = document.body.getAttribute("data-theme");

        if (currentTheme === "dark"){
            document.body.removeAttribute("data-theme");   //remove the dark theme to go to light
            localStorage.setItem("theme","light");           //stores the theme into brower storage for memory
        } else{
            document.body.setAttribute("data-theme", "dark");    //adds the dark theme 
            localStorage.setItem("theme", "dark");      //stores the theme into brower storage for memory
        }

        updateBtn();  //updates the button after whenever the theme flips
    })
    
}
    setupThemeToggle() //calling the function

// });

