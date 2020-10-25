const canvas = document.getElementById("myFirstCanvas")
const ctx = canvas.getContext("2d");

function shuffle(array) {
    const newArray = [];

    while (array.length) {
        const index = Math.floor(Math.random() * Math.floor(array.length - 1));
        newArray.push(...array.splice(index, 1));
    }

    return newArray;
}

function plot(array) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let item in array) {
        ctx.fillRect(item, array[item], 2, 2);
    }
}

function sleep(ms) {
    return new Promise((resolve) =>
        setTimeout(resolve, ms));
}

function insertionSort2(array) {
    let i = 1;
    const interval = setInterval(
        function () {
            for (let j = i; j > 0; j--) {
                if (array[j] > array[j - 1]) {
                    break;
                }
                let content = array[j];
                array[j] = array[j - 1];
                array[j - 1] = content;
            }
            plot(array);
            if (i === array.length - 1) {
                clearInterval(interval);
            }
            i++
        },
        100
    )
}

async function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        for (let j = i; j > 0; j--) {
            if (array[j] > array[j - 1]) {
                break;
            }
            let content = array[j];
            array[j] = array[j - 1];
            array[j - 1] = content;
        }

        await sleep(50);
        plot(array);
    }
}

let arr = [];
for (let i = 0; i < canvas.width; i++) {
    arr.push(i);
}

arr = shuffle(arr);
plot(arr);
insertionSort(arr).then(() => alert('Congratulations!'));
// let interval = setInterval(function () {
//     arr = shuffle(arr);
//     plot(arr);
// }, 100);
