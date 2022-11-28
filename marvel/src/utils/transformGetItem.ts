export const transformItem = (item: any) => {
  const title: string = item?.name ? item.name : item.title;
  return {
    id: item.id,
    title,
    description: item.description,
    thumbnail: `${item.thumbnail.path}.${item.thumbnail.extension}`
  };
};
export const transformChar = (char: any) => {
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
