import { isFavourite, toggleFavourite } from "../../utils/favourites.js";
import { heartOutline, filledHeart } from "../../ui/icons/svg.js";

export default function createArticleListHtml(container, articles) {
  if (articles.length === 0) {
    return "<div class='text-center'>No articles found</div>";
  }

  const articleElements = articles.map((recipe) => createArticleCard(recipe));
  container.innerHTML = "";
  container.className =
    "grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4";
  container.append(...articleElements);
}

function createArticleCard(article) {
  const { image, id, title, description } = article;

  const card = document.createElement("a");
  card.href = `/article.html?id=${id}`;
  card.className =
    "relative block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200 flex flex-col h-full";
  card.style.textDecoration = "none";

  const favBtn = document.createElement("button");
  favBtn.type = "button";
  favBtn.className =
    "absolute top-2 right-2 z-10 p-1 bg-white/80 rounded-full hover:bg-white shadow";
  favBtn.innerHTML = isFavourite(id) ? heartOutline() : filledHeart();
  favBtn.addEventListener("click", function (e) {
    e.preventDefault();
    toggleFavourite(id, article);
    favBtn.innerHTML = isFavourite(id) ? heartOutline() : filledHeart();
  });
  card.appendChild(favBtn);

  const img = document.createElement("img");
  img.src = image;
  img.alt = title;
  img.className = "w-full h-48 object-cover";
  card.appendChild(img);

  const content = document.createElement("div");
  content.className = "p-4 flex flex-col flex-1";

  const titleElement = document.createElement("h3");
  titleElement.textContent = title;
  titleElement.className =
    "text-lg font-semibold text-primary mb-2 text-center";
  content.appendChild(titleElement);

  const descElement = document.createElement("p");
  descElement.textContent = description;
  descElement.className = "text-gray-600 text-sm text-center";
  content.appendChild(descElement);

  card.appendChild(content);

  return card;
}
