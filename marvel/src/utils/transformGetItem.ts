export const transformItem = (item: any) => {
  const title: string = item?.name ? item.name : item.title;
  return {
    id: item.id,
    title,
    description: item.description,
    thumbnail: `${item.thumbnail.path}.${item.thumbnail.extension}`
  };
};
