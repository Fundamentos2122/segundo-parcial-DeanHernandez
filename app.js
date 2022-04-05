const formRecipe = document.getElementsByClassName("[ form-group ] [ flow ]");
const recipeList = document.getElementById(" "); //recipe-list
const ingTempList = document.getElementById("ingredient-temp-list");
const keyListRecipe = "recipeList";


document.addEventListener("DOMContentLoaded", function(){
    formRecipe.addEventListener("submit",submitRecipe);

    paintRecipeList();
});


function submitRecipe(){
    e.preventDefault();
    e.stopPropagation();

    let recipe = {
        id: Date.now(),
        title: formRecipe["title"].value,
        img_url: formRecipe["img_url"].value,
        description: formRecipe["description"].value,
        recipe_ing: ingTempList
    };

    let list = getRecipes();

    list.push(recipe);

    localStorage.setItem(keyListRecipe, JSON.stringify(list));

    paintRecipeList();

}

function submitIngredient(){
    e.preventDefault();
    e.stopPropagation();


    let list = getIngredients();

    if(formRecipe["ingredient-name"].value !== null)
    {
        list.push(formRecipe["ingredient-name"].value);
    }

    paintIngredientList();

}

function paintIngredientList(){

    let list = getIngredients();

    let html = '';

    for(var i = 0; i < list.length; i++) {
        html += 
            `
            
            `;
    }

}

function getRecipe(id){
    let list = JSON.parse(localStorage.getItem(keyListRecipe));

    for(var i=0; i<list.length;i++)
    {
    if(list[i].id === id);
        return list[i];
    }
    return null;
}

function getIngredients(id){
    let list = JSON.parse(localStorage.getItem(keyListRecipe));


}

function getRecipes(){
    let list = JSON.parse(localStorage.getItem(keyListRecipe));

    if(list === null)
        return [];
    else
        return list;
}

function paintRecipeList(){

    let list = getRecipes();

    let html = '';

    for(var i = 0; i < list.length; i++) {
        html += 
            `
            <div class="[ row ] [ flex ]" data-state="wrap">
            <div class="[ col ]">
                <div class="[ card ] [ bg-secondary color-white ] [ radius shadow ]" card-id="${i.id}">
                    <img src="${i.img_url}" alt="">
                    <div class="[ flow ]">
                        <h5>${i.title}</h5>
                        <div class="[ flex ]" data-state="justify-between">
                            <button class="[ btn ]" data-state="white" onclick="getRecipe(${i.id})">Ver</button>
                            <button class="[ btn ]" data-state="warning" onclick="deleteRecipe(${i.id})">Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            `;
    }

    recipeList.innerHTML = html;
}

function deleteRecipe(id){

    let list = getRecipes();

    list = list.filter(i => i.id !== id);

    localStorage.setItem(keyListRecipe, JSON.stringify(list));

    let recipe = document.getElementById(id);

}