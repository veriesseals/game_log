// -------------------------------------------------------------
// First method for the Prototype Constructor

// Favorite restuarants
class FavGames {
    constructor() {
        this.favChoice = {
            fName: '',
            lName: '',
            favGame:'',
            favGameStudio:'',
            image:''
            
            
        }
        

    }

// ----------------------------------------------------------
// Submit Button

button(){
    let button = document.getElementById('submitBtn');
    button.addEventListener('click', this.displayData);
    // button.addEventListener('click', () => console.log('clicked'));
    
};


displayData(e){
    e.preventDefault();
        let firstName = document.getElementById('fName').value;
        let lastName = document.getElementById('lName').value;
        let favGame = document.getElementById('favGame').value;
        let favGameStudio = document.getElementById('favGameStudio').value;
        let inputImage = document.getElementById('inputImage').value;


        this.favChoice = {
            fName: firstName,
            lName: lastName,
            favGame: favGame,
            favGameStudio:favGameStudio,
            image: inputImage
        }

        console.log(this.favChoice);

        let gameCardDisplay = document.getElementById('gameCardDisplay');
        gameCardDisplay.innerHTML += `
                    <div class="card mb-3">
                            <div class="row g-0">
                            <div class="col-md-4">
                                <img src="${this.favChoice.image}" class="img-fluid rounded-start" alt="...">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                <h2 class="card-title">${this.favChoice.favGame + ' is my favorite game! 😍🔥'}</h2>
                                <label for="fName" class="card-label">Gamer First Name:</label>
                                <p class="card-text">${this.favChoice.fName}</p>
                                <label for="lName" class="card-label">Gamer Last Name:</label>
                                <p class="card-text">${this.favChoice.lName}</p>
                                <label for="favGameStudio" class="card-label">Gamer Favorite Studio:</label>
                                <p class="card-text">${this.favChoice.favGameStudio}</p>
                                </div>
                            </div>
                            </div>
                        </div>
                `
    }


}

let action = new FavGames();
action.button();



