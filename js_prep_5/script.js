const checkeven = (value) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            value % 2 === 0 ? resolve("even") : reject("odd");
        }, 500);
    });

// async function run() {
//     await checkeven(1)
//         .then((res) => console.log(res))
//         .catch((rej) => console.log(rej));
//     console.log("run after promise.");
// }
// run();

async function run() {
    try {
        const res = await checkeven(1);
        // throw new Error("Bsss esehi");
        // console.log(res);
    } catch (error) {
        // console.log(error.message);
        // console.log(error.stack);
        console.log(error);
    } finally {
        console.log("run after promise.");
    }
}
run();
