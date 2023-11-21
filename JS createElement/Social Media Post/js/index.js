console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.
// Create the elements --------------------------------------------
const article1 = document.createElement("article");
article1.classList.add("post");

const pText = document.createElement("p");
pText.classList.add("post__content");
pText.textContent =
  "consectetur adipisicing elit.consectetur adipisicing elit.";

const footer = document.createElement("footer");
footer.classList.add("post__footer");

const span = document.createElement("span");
span.classList.add("post__username");
span.textContent = "@Mani";

const button = document.createElement("button");
button.classList.add("post__button");
button.setAttribute("type", "button");
button.setAttribute("data-js", "like-button");
button.textContent = "♥ Like";

// Append the elements --------------------------------------------
document.body.append(article1);

article1.append(pText);
article1.append(footer);

footer.append(span);
footer.append(button);
