export const clearStorageWithException = (
  exception: string,
  remove: (key: string[]) => false | void
) => {
  const removeList: string[] = [];
  const len = window.localStorage.length;

  for (let index = 0; index < len; index++) {
    if (window.localStorage.key(index) !== exception)
      removeList.push(window.localStorage.key(index) as string);
  }

  if (removeList.length) remove(removeList);
};
