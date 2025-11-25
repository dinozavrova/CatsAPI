const button = document.querySelector(".btn");
const image = document.querySelector(".img");
const url = "https://cataas.com/cat";

async function fetchHandler() {
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    image.src = URL.createObjectURL(blob);
  } catch (error) {
    console.error(error);
  }
}

button.addEventListener("click", fetchHandler);
