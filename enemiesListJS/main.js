const GetEnemies = () => {
    return [
        {
            FirstName: "J",
            LastName: "F",
            Offenses: [
                "Being a jerk to me in elementary school",
                "Not being nice to me in elementary school"
            ],
            IsReallyHated: true
        },
        {
            FirstName: "D",
            LastName: "V",
            Offenses: [
                "Being a jerk to me in elementary school",
                "Not being nice to me in elementary school"
            ],
            IsReallyHated: false
        },
        {
            FirstName: "D",
            LastName: "P",
            Offenses: [
                "Being a jerk to me in elementary school",
                "Not being nice to me in elementary school"
            ],
            IsReallyHated: true
        },
        {
            FirstName: "T",
            LastName: "G",
            Offenses: [
                "Being a jerk to me in elementary school",
                "Not being nice to me in elementary school"
            ],
            IsReallyHated: false
        }
    ]
}

const myEnemies = GetEnemies()

myEnemies.forEach((enemy) => {
    if (enemy.IsReallyHated === true) {
        console.log(`${enemy.FirstName} ${enemy.LastName} (Really, really hate)`)
    } else {
        console.log(`${enemy.FirstName} ${enemy.LastName}`)
    }
})