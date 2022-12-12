import { Character, Comic, Post, Serie } from 'types/post';

export const transformItem = (item: any): Post => {
  const title: string = item?.name ? item.name : item.title;
  const descr: string = item.description
    ? `${item.description.slice(0, 170)}...`
    : 'Извините, данных нет';

  return {
    id: item.id,
    title,
    description: descr,
    thumbnail: `${item.thumbnail.path}.${item.thumbnail.extension}`
  };
};
export const transformChar = (char: any): Character => {
  const descr: string = char.description
    ? char.description
    : 'Извините, данных нет';
  return {
    id: char.id,
    name: char.name,
    description: descr,
    thumbnail: `${char.thumbnail.path}.${char.thumbnail.extension}`,
    comics: [...char.comics.items],
    series: [...char.series.items]
  };
};
export const transformComic = (comic: any): Comic => {
  const descr: string = comic.description
    ? comic.description
    : 'Извините, данных нет';
  return {
    id: comic.id,
    title: comic.title,
    description: descr,
    pageCount: comic.pageCount
      ? `${comic.pageCount} pages.`
      : 'No information about the number of pages',
    price: comic.prices.price ? `${comic.prices.price}$` : 'not available',
    thumbnail: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
    language: comic.textObjects.language || 'en-us',
    characters: [...comic.characters.items],
    series: [comic.series]
  };
};
export const transformSerie = (serie: any): Serie => {
  const descr: string = serie.description
    ? serie.description
    : 'Извините, данных нет';
  return {
    id: serie.id,
    title: serie.title,
    description: descr,
    thumbnail: `${serie.thumbnail.path}.${serie.thumbnail.extension}`,
    startYear: serie.startYear,
    endYear: serie.endYear,
    type: serie.type || 'no type',
    characters: [...serie.characters.items],
    comics: [...serie.comics.items]
  };
};
