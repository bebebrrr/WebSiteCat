// scripts.js
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("toggleParagraphsColor").addEventListener("click", toggleParagraphsColor);
    document.getElementById("toggleClassBackground").addEventListener("click", toggleClassBackground);
    document.getElementById("itemNumber").addEventListener("change", changeListItemColor);
    document.getElementById("toggleHeaderColor").addEventListener("click", toggleHeaderColor);
    document.getElementById("styleParagraphs").addEventListener("click", styleParagraphs);

    const paragraphs = document.querySelectorAll("section:nth-of-type(7) p.clickable");
    paragraphs.forEach(paragraph => {
        paragraph.addEventListener("click", incrementClickCount);
    });
});

let isRed = false;
function toggleParagraphsColor() {
    const paragraphs = document.getElementsByTagName("p");
    isRed = !isRed;
    for (let p of paragraphs) {
        p.style.color = isRed ? "red" : "black";
    }
    document.getElementById("toggleParagraphsColor").textContent = isRed ? "Вернуть черный цвет" : "Изменить цвет абзацев";
}

let isPink = true;
function toggleClassBackground() {
    const elements = document.getElementsByClassName("highlight");
    for (let el of elements) {
        el.style.backgroundColor = isPink ? "pink" : "turquoise";
    }
    isPink = !isPink;
    document.getElementById("toggleClassBackground").textContent = isPink ? "Сделать заливку бирюзовой" : "Сделать заливку розовой";
}

function showParagraphContent() {
    const content = document.getElementById("paragraphContent").innerHTML;
    alert(content);
}

function changeListItemColor() {
    const itemNumber = parseInt(document.getElementById("itemNumber").value, 10);
    const listItems = document.querySelectorAll("ol li");
    listItems.forEach((item, index) => {
        item.style.color = (index + 1 === itemNumber) ? "red" : "black";
    });
}

let isHeaderPink = true;
function toggleHeaderColor() {
    const headers = document.getElementsByTagName("h2");
    for (let header of headers) {
        header.style.backgroundColor = isHeaderPink ? "pink" : "turquoise";
    }
    isHeaderPink = !isHeaderPink;
    document.getElementById("toggleHeaderColor").textContent = isHeaderPink ? "Сделать заливку бирюзовой" : "Сделать заливку розовой";
}

function styleParagraphs() {
    const paragraphs = document.querySelectorAll("section:nth-of-type(6) p");
    paragraphs.forEach((p, index) => {
        p.style.fontStyle = "italic";
        if (!p.innerHTML.endsWith(`(${index + 1})`)) {
            p.innerHTML += ` (${index + 1})`;
        }
    });
}

let clickCount = 0;
function incrementClickCount() {
    clickCount++;
    document.getElementById("clickCount").value = clickCount;
}
