// Variables
const newThoughtText = document.querySelector(".new-thought__input");
const URL = "http://happy-thoughts-api-sprint-4.herokuapp.com";

// Buttons
const themeButton = document.querySelector(".theme_switch");
const newThought = document.querySelector(".new-thought__form");

// Containers
const body = document.querySelector("body");
const newThoughtsContainer = document.querySelector(".thoughts__container");
const error = document.querySelector(".error");

// Global functions
const addThought = () => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: newThoughtText.value,
    }),
  };
  fetch(`${URL}/thoughts`, options)
    .then(() => fetchThoughts())
    .catch((err) => (error.innerText = "Ooops, something went wrong"))
    .finally((newThoughtText.value = ""));
};

const likeThought = () => {
  const options = {
    method: "PUT",
  };
  fetch(`${URL}/thoughts/like/${event.target.dataset.id}`, options)
    .then(() => fetchThoughts())
    .catch((err) => (error.innerText = "Ooops, something went wrong"));
};

const deleteThought = () => {
  {
    const options = {
      method: "DELETE",
    };
    fetch(`${URL}/thoughts/${event.target.dataset.id}`, options)
      .then(() => fetchThoughts())
      .catch((err) => (error.innerText = "Ooops, something went wrong"));
  }
};

// Theme switch
themeButton.addEventListener("click", () => body.classList.toggle("darktheme"));

const fetchThoughts = () => {
  fetch(`${URL}/thoughts`)
    .then((res) => res.json())
    .then((data) => {
      newThoughtsContainer.innerHTML = "";
      data.data.forEach((thought) => {
        newThoughtsContainer.innerHTML += `
        <div class="single-thought__container container">
          <div class="single-thought__container-1st-part">
            <span class="single-thought__container-text">
              ${thought.message}
            </span>
            <button class="single-thought__container-delete" data-id=${
              thought._id
            }></button>
          </div>
          <div class="single-thought__container-2nd-part">
            <button class="single-thought__container-like ${
              thought.hearts > 0 && "single-thought__container-like-clicked"
            }" data-id=${thought._id}></button>
            <span class="single-thought__container-like-counter">x ${
              thought.hearts
            }</span>
          </div>
        </div>
        `;
      });
      const deleteButton = document.querySelectorAll(
        ".single-thought__container-delete"
      );
      deleteButton.forEach((singleDeleteButton) => {
        singleDeleteButton.addEventListener("click", (event) =>
          deleteThought()
        );
      });
      const likeButton = document.querySelectorAll(
        ".single-thought__container-like"
      );
      likeButton.forEach((singleLikeButton) => {
        singleLikeButton.addEventListener("click", (event) => likeThought());
      });
    })
    .catch((err) => console.log(err));
};

fetchThoughts();

newThoughtText.addEventListener("keyup", (event) => {
  if (newThoughtText.value.length <= 3) {
    error.innerText =
      "Your happy thought should consist of minimum 4 characters";
  } else if (newThoughtText.value.length >= 66) {
    error.innerText =
      "Your happy thought should consist of maximum 65 characters";
  } else {
    error.innerText = "";
  }
});

newThought.addEventListener("submit", (event) => {
  event.preventDefault();
  if (newThoughtText.value.length > 3 && newThoughtText.value.length < 66) {
    addThought();
  }
});
