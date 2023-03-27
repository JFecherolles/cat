/**
 *  on trouve la chat voulue dans la liste des chats
 * @param {Array} chats - toutes les chats
 * @param {string} searchedSlug - le slug de la chat recherchée
 * @return {Object} - La chat trouvée
 */
export function findCat(chats, searchedSlug) {
  const chat = chats.find((testedCat) => {
    return testedCat.slug === searchedSlug;
  });
  return chat;
}
