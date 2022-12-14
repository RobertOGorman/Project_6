export function openPopup(popup) {
  popup.classList.add("popup_open");
  document.addEventListener("keyup", handleEscPress);
  document.addEventListener("click", closePopupOnRemoteClick);
}

export function closePopup(popup) {
  popup.classList.remove("popup_open");
  document.removeEventListener("keyup", handleEscPress);
  document.removeEventListener("click", closePopupOnRemoteClick);
}

export function handleEscPress(e) {
  if (e.key === "Escape") {
    const openedPopup = document.querySelector(".popup_open");
    closePopup(openedPopup);
  }
}

export function closePopupOnRemoteClick(evt) {
  if (evt.target.classList.contains("popup")) {
    closePopup(evt.target);
  }
}

export function openImagePreview(link, name) {
  previewImage.src = this._link;
  previewImage.alt = `Photo of ${name}`;
  previewTitle.textContent = name;
  openModalWindow(previewModal);
}
