function logSubmit(event) {
    event.preventDefault();
    const selectHeight = document.querySelector("#inputHeight").value;
    const selectWidth = document.querySelector("#inputWidth").value;
    makeGrid(selectHeight, selectWidth);
}
const selectSize = document.querySelector("#sizePicker");
selectSize.addEventListener("submit", logSubmit); //grid veiw upon clicking submit button
const selectColor = document.querySelector("#colorPicker");
const designCanevas = document.querySelector("#pixelCanvas");

function makeGrid(gridHeight, gridWidth) {
    while (designCanevas.firstChild) {
        designCanevas.removeChild(designCanevas.firstChild); //reset the grid
    }
    for (var verticalRow = 0; verticalRow < gridHeight; ++verticalRow) {
        const inRow = designCanevas.insertRow(verticalRow); //insert rows to table
        for (var horizontalColumn = 0; horizontalColumn < gridWidth; ++horizontalColumn) {
            const inCell = inRow.insertCell(horizontalColumn); //insert columns to rows
            innerHTML = "";

            function insideCell(event) {
                const selectColor = document.querySelector("#colorPicker");
                inCell.setAttribute("style", "background-color:" + selectColor.value);
            }
            inCell.addEventListener("click", insideCell); //add color inside cell
            function clearCell(event) {
                inCell.style.backgroundColor = "";
            }
            inCell.addEventListener("dblclick", clearCell); //remove color inside cell
        }
    }
}
