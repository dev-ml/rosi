export const formatTimeStamp = (timeStamp: number): string => {
  return new Date(timeStamp).toLocaleTimeString("en-US", {hour: "2-digit", minute: "2-digit", hour12: false});
};

export const millisecondsToMinutes = (milliseconds: number): number => {
  return Math.floor((milliseconds / 1000) / 60);
}

export const uuidv4 = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    // tslint:disable-next-line:no-bitwise
    const r = Math.random() * 16 | 0;
    // tslint:disable-next-line:no-bitwise
    const v = c === "x" ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};
