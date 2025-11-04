export const stripOuterTags = (str: string) => {
  return str
    ?.replace(/<[^>]*>/g, '') // remove all tags
    ?.replace(/\n/g, '') // remove newline characters
    ?.trim();
};
