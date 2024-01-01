const itemContainer = document.getElementById("item-container");
const loader = document.getElementById("loader");
const loaderTop = document.getElementById('loader-top');
const totalItems = 100;
const additionalItems = 20;
let loadedItems = 20;
let loading = false;  

const staticList = (start, end) => {
  for (let i = start; i <= end; i++) {
    const card = document.createElement("div");
    const text = document.createElement("h1");
    card.classList.add("card-item");
    text.classList.add("text-item");
    text.textContent = `Item ${i}`;
    card.appendChild(text);
    itemContainer.appendChild(card);
  }
};

window.addEventListener('load', () => staticList(1, loadedItems), window.scrollTo(0,0), loaderTop.style.display = "none");

const updateListItems = (start, end) => {
  const existingItems = itemContainer.querySelectorAll(".text-item");
  let index = 0;
  for (let i = start; i <= end; i++) {
    const textItem = existingItems[index];
    textItem.textContent = `Item ${i}`;
    index++;
  }
};

const scrollFunction = () => {
  if (window.scrollY === 0 && loadedItems > 0 && !loading) {
    loading = true;
    loaderTop.style.display = "block";
    console.log("top touched")
    // setTimeout(() => {
      const start = loadedItems - additionalItems + 1;
      const end = loadedItems;
      updateListItems(start, end);
      loadedItems -= additionalItems;
      loading = false;
      loaderTop.style.display = "none";
      window.scrollTo(50, 50);
    // }, 1500);
  } else if (window.innerHeight + window.scrollY >= document.body.offsetHeight && !loading && loadedItems < totalItems) {
    loading = true;
    console.log("bottom touched")
    // setTimeout(() => {
      if (loadedItems + additionalItems > totalItems) loadedItems = totalItems;  
      updateListItems(loadedItems + 1, loadedItems + additionalItems);
      loadedItems += additionalItems;
      loading = false;
      window.scrollTo(50, 50);
    // }, 1500);
  } else if (loadedItems >= totalItems) {
    loader.style.display = "none";
    const endMessage = document.createElement("p");
    endMessage.textContent = "End of Content.";
    itemContainer.appendChild(endMessage);
    window.removeEventListener("scroll", scrollFunction);  
  }
};

window.addEventListener("scroll", scrollFunction);



// const scrollFunction = () => {
//   if (window.scrollY === 0 && loadedItems > 0 && !loading) {
//     loading = true;
//     loaderTop.style.display = "block";

//     setTimeout(() => {
//       const start = loadedItems - additionalItems + 1;
//       const end = loadedItems;
//       updateListItems(start, end);
//       loadedItems -= additionalItems;
//       loading = false;
//       loaderTop.style.display = "none";
//       window.scrollTo(50, 50);
//     }, 1000);
//   } else if (window.innerHeight + window.scrollY >= document.body.offsetHeight && !loading && loadedItems < totalItems) {
//     loading = true;

//     setTimeout(() => {
//       if (loadedItems + additionalItems > totalItems) loadedItems = totalItems;
//       updateListItems(loadedItems + 1, loadedItems + additionalItems);
//       loadedItems += additionalItems;
//       loading = false;
//       window.scrollTo(50, 50);
//     }, 1000);
//   } else if (loadedItems >= totalItems) {
//     loader.style.display = "none";
//     const endMessage = document.createElement("p");
//     endMessage.textContent = "End of Content.";
//     itemContainer.appendChild(endMessage);
//     window.removeEventListener("scroll", scrollFunction);
//   }
// };

// window.addEventListener("scroll", scrollFunction);


// for the first scroll to the bottom, it is going to 21st to 40 items and in very few millisceonds it is shifting to 41 to 60. can you run the program. and check where is th isssue



// if(window.innerHeight + window.scrollY >= document.body.offsetHeight){
//   console.log(window)
// }

// const divItem = (first, last) => {
//   for (let i = first; i <= last; i++) {
//     const card = document.createElement("div");
//     const text = document.createElement("h1");
//     card.classList.add("card-item");
//     text.classList.add("text-item");
//     text.textContent = `Item ${i}`;
//     card.appendChild(text);
//     itemContainer.appendChild(card);
//   }
// };

// window.onload = () => {
//   divItem(1, loadedItems);
// };

// const scrollFunction = () => {
//   const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
//   rootElement.scrollTop / scrollTotal > .75? scrollToTopBtn.classList.add("isVisible"): scrollToTopBtn.classList.remove("isVisible")
//   if (
//     window.innerHeight + window.scrollY >= document.body.offsetHeight  &&
//     !loading && loadedItems < totalItems
//   ) {
//     loading = true;
//     setTimeout(() => {
//       loadedItems += additionalItems;
//       if (loadedItems > totalItems) loadedItems = totalItems;
//       divItem(loadedItems - additionalItems + 1, loadedItems);
//       console.log(`Items added-> ${loadedItems}`)
//       loading = false;
//     }, 1000);
//   } else if (loadedItems >= totalItems) {
//     loader.style.display = "none";
//     const endMessage = document.createElement("p");
//     endMessage.textContent = "You have reached the end.";
//     itemContainer.appendChild(endMessage);
//     window.removeEventListener("scroll", scrollFunction);
//   }
// };

// window.addEventListener("scroll", scrollFunction);
