import IconHeart from '../images/icons.svg';

const renderIngredients = () => {
  const name = 'Campari';
  const details = 'Campari';

  return `
    <div class="cocktail-list__cocktail-item">
      <div class='card-item__info'>
        <p class="card-item__name">${name}</p>
        <p class="card-item__details">${details}</p>
        <div class="button-wrap">
          <button type="button" class="cocktail-item__learn-more">Learn more</button>
          <button type="button" class="cocktail-item__remove">Remove
            <svg class="svg" width="21" height="19">
              <use href="${IconHeart}#icon-heart-filled"></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
  `
}

const getRandomIngredients = (htmlEl) => {
  // Todo: get data
  let content = '';
  for (let i = 0; i < 3; i++) {
    content += renderIngredients();
  }

  htmlEl.innerHTML = content;
}

const init = () => {
  const ingredientsEl = document.querySelector('.ingredients__JS');

  if (ingredientsEl) {
    getRandomIngredients(ingredientsEl);

  }
}

document.addEventListener('DOMContentLoaded', init)