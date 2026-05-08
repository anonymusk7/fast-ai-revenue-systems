const selectedItems = document.querySelector("#selected-items");
const queueList = document.querySelector("#queue-list");
const addButtons = document.querySelectorAll("[data-product]");
const quoteForm = document.querySelector("#quote-form");
const quantity = document.querySelector("#quantity");
const callback = document.querySelector("#callback");
const gst = document.querySelector("#gst");

const currentItems = new Set();

function renderSelection() {
  selectedItems.value = Array.from(currentItems).join("\n");
}

addButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentItems.add(button.dataset.product);
    renderSelection();
  });
});

quoteForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const items = selectedItems.value.trim() || "General product enquiry";
  const card = document.createElement("article");
  const invoiceNeed = gst.checked ? "GST invoice required" : "No GST invoice requested";

  card.innerHTML = `
    <strong>Sample order created</strong>
    <span>${items.replace(/\n/g, ", ")} - ${quantity.value}</span>
    <small>Callback: ${callback.value}. ${invoiceNeed}.</small>
  `;

  queueList.prepend(card);
});
