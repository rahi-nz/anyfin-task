const Store = {
  set: (key: string, data: Object) => {
    if (!process.browser) return;

    if (data === undefined) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, JSON.stringify(data));
    }
  },
  get: (key: string) => {
    if (!process.browser) return undefined;
    const data = localStorage.getItem(key);
    if (!data) return undefined;
    return JSON.parse(data);
  },
};

export default Store;
