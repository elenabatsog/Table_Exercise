$function () {
    let currentRow = -1;

    const rows = $("table tr:not(:first)");
    $("#nextButton").on("click", function() {
        rows.css("color", "black");

        currentRow++;

        if (currentRow >= rows.length) {
            currentRow = 0;
        }

        $(rows[currentRow]).css("color", "red");
    });

    $("#clearButton").on("click", function () {
        rows.css("color", "black");
        currentRow = -1;
    });
});