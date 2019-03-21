import localforage from "localforage";

export const writeData = (key: any, data: any) => localforage.setItem(key, data);
export const readData = (key: any) => localforage.getItem(key);
export const removeData = (key: any) => localforage.removeItem(key);
export const clear = () => localforage.clear();
