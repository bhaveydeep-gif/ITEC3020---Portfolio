document.addEventListener("DOMContentLoaded", function(){

    
const noResults = document.getElementById("no-results");

/* Finds and returns every filter btn used as a list collection*/
const filterButtons = document.querySelectorAll(".filter-btn");

const cards = document.querySelectorAll(".project-card");

/* Looping through each buttons to attcach listener */
filterButtons.forEach(function (button) {                   /* The loop runs 3 times for all the button */
    button.addEventListener("click", function () {           /* each having their clicker */
                                                   
        /* Moving the active styling to whichever button was clicked*/
        filterButtons.forEach(function (btn){       
            btn.classList.remove("active");          /* Loops through all buttons and strips the active class from them*/
            });
            button.classList.add("active");         /* Adds active class to only that button which is clicked*/
        
            /*Reading which filter was selected*/
            const selectedFilter = button.dataset.filter;       /* JS reads the filter */
            let visibleCount = 0;                               /* Counter for cards to be read starts at 0 */

            /*Looping through every card to decide which to show*/
            cards.forEach(function (card) {
                const category =card.dataset.category;

                if (selectedFilter === "all" || category === selectedFilter){   //Condition : To show everything if clicked ALL or when clicked specific filter
                    card.style.display = "";                         //Keep the project-card display as-it-is from existing style
                    visibleCount++;                            //Incrementing how many cards are visible 
                } else{
                    card.style.display = 'none';       //Removing the cards from the page to show 'none'
                }
                });

                if (visibleCount === 0) {
                    noResults.hidden = false;   // Show message
                } else {
                    noResults.hidden = true;    // Hide message
                } 
            
        })
    })
})



