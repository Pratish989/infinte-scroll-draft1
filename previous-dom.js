
if(window.innerHeight + window.scrollY >= document.body.offsetHeight){
 console.log(window)
}

const divItem = (first, last) => {
 for (let i = first; i <= last; i++) {
   const card = document.createElement("div");
   const text = document.createElement("h1");
   card.classList.add("card-item");
   text.classList.add("text-item");
   text.textContent = `Item ${i}`;
   card.appendChild(text);
   itemContainer.appendChild(card);
 }
};

window.onload = () => {
 divItem(1, loadedItems);
};

const scrollFunction = () => {
 const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
 rootElement.scrollTop / scrollTotal > .75? scrollToTopBtn.classList.add("isVisible"): scrollToTopBtn.classList.remove("isVisible")
 if (
   window.innerHeight + window.scrollY >= document.body.offsetHeight  &&
   !loading && loadedItems < totalItems
 ) {
   loading = true;
   setTimeout(() => {
     loadedItems += additionalItems;
     if (loadedItems > totalItems) loadedItems = totalItems;
     divItem(loadedItems - additionalItems + 1, loadedItems);
     console.log(`Items added-> ${loadedItems}`)
     loading = false;
   }, 1000);
 } else if (loadedItems >= totalItems) {
   loader.style.display = "none";
   const endMessage = document.createElement("p");
   endMessage.textContent = "You have reached the end.";
   itemContainer.appendChild(endMessage);
   window.removeEventListener("scroll", scrollFunction);
 }
};

window.addEventListener("scroll", scrollFunction);






// const itemContainer = document.getElementById("item-container");
// const loader = document.getElementById("loader");
// const totalItems = 100;
// const additionalItems = 20;
// let loadedItems = 20;
// let loading = false;

// const staticList = (start, end) => {
//   for (let i = start; i <= end; i++) {
//     const card = document.createElement("div");
//     const text = document.createElement("h1");
//     card.classList.add("card-item");
//     text.classList.add("text-item");
//     text.textContent = `Item ${i}`;
//     card.appendChild(text);
//     itemContainer.appendChild(card);
//   }
// };

// const updateListItems = (start, end) => {
//   for (let i = start; i <= end; i++) {
//     const card = document.createElement("div");
//     const text = document.createElement("h1");
//     card.classList.add("card-item");
//     text.classList.add("text-item");
//     text.textContent = `Item ${i}`;
//     card.appendChild(text);
//     itemContainer.insertBefore(card, itemContainer.firstChild);
//   }
// };

// const scrollFunction = () => {
//   if (
//     window.innerHeight + window.scrollY >= document.body.offsetHeight &&
//     !loading &&
//     loadedItems < totalItems
//   ) {
//     loading = true;
//     setTimeout(() => {
//       if (loadedItems + additionalItems > totalItems) {
//         loadedItems = totalItems;
//       }
//       updateListItems(loadedItems + 1, loadedItems + additionalItems);
//       console.log(`Items added -> ${loadedItems}`);
//       loadedItems += additionalItems;
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

// // Initial static items
// staticList(1, 20);
