// Soal 1
const delayedGreeting = () => {
    console.log("Mulai!")

    setTimeout(() => {
        console.log("Selamat Pagi!");
    }, 3000)

    console.log("Selesai!")
}
delayedGreeting()

// Soal 2
const checkNumber = (number) => {
    return new Promise((resolve, reject) => {
        if (number > 10) {
            resolve("Number Valid")
        } else {
            reject("Number Not Valid")
        }
    })
}

checkNumber(5).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
})

// Soal 3
const fetchUserData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
        const data = await response.json()


        console.log("Nama : ", data.name);
        console.log("Email : ", data.email);
    } catch (error) {
        console.log(error);
    }
}

fetchUserData()