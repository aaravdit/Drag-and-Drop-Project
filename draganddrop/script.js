//DOM Element
const boxes = document.querySelectorAll(".box");
image = document.querySelector(".image");

//Loop through each boxes element
boxes.forEach(box=> {
    //when a draggable element dragged over a box element
box.addEventListener("dragover", (e) => {
    e.preventDefault();
box.classList.add("hovered");
});

//when a draggable element is dropped
box.addEventListener("drop", () =>{
    box.appendChild(image);
    box.classList.remove("hovered");
});




});
