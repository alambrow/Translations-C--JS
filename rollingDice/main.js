console.log("Let's rolle some dice, baby!");
console.log("____________________________");

const Roll = () => {
    const dieValue = Math.floor(Math.random() * 6);
    return dieValue + 1;
}

for (let i = 0; i < 10; i++) {

    const firstDie = Roll()
    const secondDie = Roll()
    let message = `${firstDie} + ${secondDie} == ${firstDie + secondDie}`
    if (firstDie === secondDie) {
        message += " DOUBLES!";
    }

    console.log(message)
}
