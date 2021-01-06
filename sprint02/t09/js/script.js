function whatHero(team, universe, race, eyes, hair) {
    if ((team == "Avengers" || team == "S.H.I.E.L.D.") 
    && universe == "Marvel"
    && race == "human" 
    && eyes == "green" 
    && hair == "lightBrown/green") {
        alert("This is Black Widow!");

    } else if ((team == "Justice League Of America" || team == "Teen Titans") 
                && universe == "DC Comics" 
                && (race == "human" || race == "kryptonian") 
                && eyes == "blue" && hair == "black") {
        alert("This is a Superman or Robin!")

    } else alert("Didn't recognize!");

}

whatHero("Avengers", "Marvel", "human", "green", "lightBrown/green");
whatHero("Teen Titans", "DC Comics", "human", "blue", "black");
whatHero();