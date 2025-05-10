document.getElementById('recipeForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevents page reload on form submit

    // Get the form values
    const ingredients = document.getElementById('ingredients').value.trim();
    const mealType = document.getElementById('mealType').value.trim();
    const timeRequired = document.getElementById('timeRequired').value;

    // Check if the fields are valid
    if (!ingredients || !mealType || !timeRequired) {
        alert("Please fill out all fields.");
        return;
    }

    // Format the API URL for complexSearch
    const apiKey = 'd3bcaf0f2f32485a91650b52ba1edeee';  // Your Spoonacular API Key
    const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${encodeURIComponent(ingredients)}&mealType=${mealType.toLowerCase()}&maxReadyTime=${timeRequired}`;

    // Fetch the data from Spoonacular API
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('API request failed with status ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);  // Log the response for debugging
            // Check if recipes are found
            if (data.results && data.results.length > 0) {
                fetchRecipeDetails(data.results); // Fetch full details for each recipe
            } else {
                document.getElementById('recipeResults').innerHTML = `<p>No recipes found. Please try different ingredients.</p>`;
            }
        })
        .catch(error => {
            console.error('Error fetching recipes:', error);
            document.getElementById('recipeResults').innerHTML = `<p>Sorry, there was an error fetching recipes. Please try again later.</p>`;
        });
});

// Function to fetch detailed recipe info using the recipe ID
function fetchRecipeDetails(recipes) {
    const resultsContainer = document.getElementById('recipeResults');
    resultsContainer.innerHTML = '';  // Clear previous results

    // Loop through each recipe and fetch its details
    recipes.forEach(recipe => {
        const apiKey = 'd3bcaf0f2f32485a91650b52ba1edeee';  // Your Spoonacular API Key
        const recipeDetailUrl = `https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=${apiKey}`;

        fetch(recipeDetailUrl)
            .then(response => response.json())
            .then(recipeDetails => {
                const recipeCard = document.createElement('div');
                recipeCard.classList.add('recipe-card');
                
                const recipeImage = recipeDetails.image ? `<img src="${recipeDetails.image}" alt="${recipeDetails.title}" />` : '';
                const recipeTitle = `<h3>${recipeDetails.title}</h3>`;
                
                // List Ingredients
                const ingredientsList = recipeDetails.extendedIngredients.map(ingredient => `<li>${ingredient.original}</li>`).join('');
                const ingredientsHtml = `<ul><strong>Ingredients:</strong>${ingredientsList}</ul>`;
                
                // Instructions
                const instructionsHtml = recipeDetails.instructions ? `<p><strong>Instructions:</strong> ${recipeDetails.instructions}</p>` : `<p><strong>Instructions:</strong> Not available</p>`;
                
                const recipeLink = `<a href="https://spoonacular.com/recipes/${recipe.id}" target="_blank">View Full Recipe</a>`;

                recipeCard.innerHTML = `
                    ${recipeImage}
                    ${recipeTitle}
                    ${ingredientsHtml}
                    ${instructionsHtml}
                    
                `;
                
                resultsContainer.appendChild(recipeCard);
            })
            .catch(error => {
                console.error('Error fetching recipe details:', error);
                resultsContainer.innerHTML = `<p>Sorry, we couldn't fetch the full recipe details. Please try again later.</p>`;
            });
    });
}
