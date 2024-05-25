const random = Math.floor(Math.random() * 10 + 1);
console.log(random);
let i = 0;
document.querySelector("button").addEventListener("click", goback);


function goback(e) {
    e.preventDefault();
    document.querySelector("button").remove();
    createbutton();
    let flag = false;

    document.querySelector(".submit").addEventListener("click", () => {
        let val = document.querySelector(".get").value;
        if (val == random){
                alert("Congratuation!Right Guess");
                location.reload(true);
            }
            

        else if (val < random)
            alert("Correct answer is greater.");
        else
            alert("Correct answer is smaller.");


        if (val != random && i >= 3){
            alert("You lose");
            location.reload(true);
        }
            
        i++;

    });

}



function createbutton() {
    let input = document.createElement('input');
    let submit = document.createElement('input');
    submit.className = "submit mt-3 mb-3 ";
    input.className = "get mt-3";
    submit.value = "Guess";
    submit.type = "submit";
    let container = document.querySelector("#inside");
    container.classList.add("card");
    container.classList.add("bg-info");
    container.appendChild(input);
    container.appendChild(submit);

}
