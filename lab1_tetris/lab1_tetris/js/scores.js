function restart() {
    document.location.href = "index.html";
}

function showData() {
    let table = (JSON.parse(localStorage.getItem("lab1_tetris.hightscores")));
    if (table) {
        table.sort(function (a, b) {
            return Number(b[1]) - Number(a[1]);
        });

        for (let i = 0; i < 5; i++) {
            let line = document.getElementById(`line${i}`);
            let el = table[i][1];
            if (el) {
                line.textContent = table[i][0] + " . ".repeat(30 - table[i][0].length) + table[i][1];
            }
        }
    }
}