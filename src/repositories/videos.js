import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND_TOP}/videos`;

async function create(objetoDoVideo) {
  try {
    let video = await fetch(`${URL_VIDEOS}?_embed=videos`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(objetoDoVideo),
    });
    video = video.json();
    return video;
  } catch (error) {
    return error;
  }
}

export default {
  create,
};
