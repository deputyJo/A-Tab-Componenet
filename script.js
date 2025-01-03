const tabContainer = document.querySelector(".tab-container");

//change the focus to the first tab button
document.querySelector(".btn1").focus();


tabContainer.addEventListener("click", (event) => {

    //Check if one of the tab buttons has been clicked
    if (event.target.classList.contains("btn")) {

        //show/hide the tab content
        setAttributes();
    }

});


//left/right keyboard navigation
tabContainer.addEventListener("keyup", (e) => {

    if (e.key === "ArrowLeft") {
        setFocus("left");
    }

    else if (e.key === "ArrowRight") {
        setFocus("right");
    }

    setAttributes();

});


//set focus depending on the left or right arrow movement
function setFocus(direction) {

    const currentElement = document.activeElement;

    const element = direction === "left" ? currentElement.previousElementSibling : currentElement.nextElementSibling;

    //move the focus to the first or last element
    if (!element) {

        if (direction === "left") {
            currentElement.parentElement.lastElementChild.focus();
        }

        else {
            currentElement.parentElement.firstElementChild.focus();
        }
    }

    //move focus to the next element
    else {
        element.focus();
    }


}

//show/hide the tab content
function setAttributes() {

    const currentElement = document.activeElement;
    let currentTab = null;

    Array.from(document.querySelector(".tab-content").children).forEach(child => {
        if (child.id === currentElement.getAttribute("data-id")) {
            currentTab = child;
            return;
        }
    });

    setAttributeFunction(document.querySelector(".tab-content").children, "hidden", true);

    removeAttributeFunction(currentElement.parentElement.children, "aria-selected");

    currentTab.removeAttribute("hidden");
    currentElement.setAttribute("aria-selected", true);

}

function setAttributeFunction(parent, attribute, state = "") {
    Array.from(parent).forEach(child => {
        child.setAttribute(attribute, state);
    });;
}

function removeAttributeFunction(parent, attribute) {
    Array.from(parent).forEach(child => {
        child.removeAttribute(attribute);
    });;
}

