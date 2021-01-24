export const getEntities = state => state.contacts.entities;
export const getFilter = state => state.contacts.filter;
export const getIsLoading = state => state.contacts.isLoading;

export const getVisibleContacts = state => {
  const allContacts = getEntities(state);
  const filter = getFilter(state);
  const normalizedFilter = filter.toLowerCase();
  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};
