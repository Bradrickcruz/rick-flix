import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND_TOP}/categorias`;

async function getAll() {
  try {
    let allCategories = await fetch(`${URL_CATEGORIES}`);
    allCategories = await allCategories.json();
    return allCategories;
  } catch (err) {
    return err;
  }
}

async function getAllWithVideos() {
  try {
    let allCategoriesWithVideos = await fetch(
      // eslint-disable-next-line
      `${URL_CATEGORIES}?_embed=videos`
    );
    allCategoriesWithVideos = await allCategoriesWithVideos.json();

    return allCategoriesWithVideos;
  } catch (error) {
    return error;
  }
}

export default {
  getAllWithVideos,
  getAll,
};
