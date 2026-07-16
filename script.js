$(document).ready(function () {
    let currentRow = -1;

    const rows = $("table tr:not(:first)");
    $("#nextButton").click(function() {
        rows.css("color", "black");

        currentRow++;

        if (currentRow >= rows.length) {
            currentRow = 0;
        }

        $(rows[currentRow]).css("color", "red");
    });

    $("#clearButton").click(function () {
        rows.css("color", "black");
        currentRow = -1;
    });
});