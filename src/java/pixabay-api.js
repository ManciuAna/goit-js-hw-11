export function fetchImg(query) {
    const searchParams = new URLSearchParams({
      key: '47528182-162bfe7fcf4c610415cc64ee7',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    });
    const url = `https://pixabay.com/api/?${searchParams}`;
  
    return fetch(url).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
  }