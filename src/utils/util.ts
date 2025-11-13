export const stripOuterTags = (str: string) => {
  return str
    ?.replace(/<[^>]*>/g, '')
    ?.replace(/\n/g, '')
    ?.trim();
};
