export default function pixabayImage(name) {
  return fetch(
    `https://pixabay.com/api/?q=${name}&page=1&key=28495383-c7081478f2b14739d603dcbf8&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response => {
    return response.json();
  });
}
