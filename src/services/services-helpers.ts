export type AllowedQueryKeys = Record<string, string | number>;


/**
 * Converts an object into a URI compatible query string, which
 * can then be used inside API queries.
 * @param queryObject the object to parse
 * @example
 * ```{type: video, term: pele}```
 * is parsed into ```name=video&term=pele```
 */
export const formatQuery = (queryObject: AllowedQueryKeys) => {
  let result = '';
  Object.keys(queryObject).forEach((key, index, keysList) => {
    const value = queryObject[key as keyof typeof queryObject] as string;
    result += `${key}=${value}`;
    if (index < keysList.length - 1) result += '&';
  });

  return result;
};
