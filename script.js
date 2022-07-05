gajah = document.querySelector(".gajah")
orang = document.querySelector(".orang")
semut = document.querySelector(".semut")

let comp_point = 0;
let player_point = 0;

gajah.addEventListener("click", function () {
    let player = gajah.className
    let computer = computer_chooser()
    document.querySelector(".computer-area").innerHTML =
        `<img src="img/${computer}.png" alt="Computer Chooser" class="computer_chooser">`
    document.querySelector(".result").innerHTML = `<p>${result_checker(player, computer)}</p>`
    point_counter(player, computer)

    console.log(comp_point)
    console.log(player_point)
})
orang.addEventListener("click", function () {
    let player = orang.className
    let computer = computer_chooser()
    document.querySelector(".computer-area").innerHTML =
        `<img src="img/${computer}.png" alt="Computer Chooser" class="computer_chooser">`
    document.querySelector(".result").innerHTML = `<p>${result_checker(player, computer)}</p>`
    point_counter(player, computer)

    console.log(comp_point)
    console.log(player_point)
})
semut.addEventListener("click", function () {
    let player = semut.className
    let computer = computer_chooser()
    document.querySelector(".computer-area").innerHTML =
        `<img src="img/${computer}.png" alt="Computer Chooser" class="computer_chooser">`
    document.querySelector(".result").innerHTML = `<p>${result_checker(player, computer)}</p>`
    point_counter(player, computer)

    console.log(comp_point)
    console.log(player_point)
})

type = [
    "gajah",
    "orang",
    "semut"
]

function computer_chooser() {
    let random = Math.round(Math.random() * 2 + 1);
    return type[random - 1];
}

function result_checker(player, comp) {
    if (player === comp) {
        return "Draw"
    }else if(player !== comp){
        return ((player === "gajah") && (comp === "semut"))? "Lose" : "Win"
    }else{
        return ((player === "gajah") && (comp === "orang"))? "Win" : "Lose"
    }
}

function point_counter(player, comp){
    if (result_checker(player, comp) === "Win"){
        player_point++;
    }else if (result_checker(player, comp) === "Lose") {
        comp_point++;
    }
}


