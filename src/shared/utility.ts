import { minutesInDay, oneMinute, minutesInHour } from "./consts";

export const formatTimeStamp = (timeStamp: number): string => {
  return new Date(timeStamp).toLocaleTimeString("en-US", {hour: "2-digit", minute: "2-digit", hour12: false});
};

export const millisecondsToMinutes = (milliseconds: number): number => {
  return Math.ceil(milliseconds / oneMinute);
};

export const roundEpochToMinutes = (epoch: number): number => {
  return epoch - (epoch % oneMinute);
};

export const updateObject = (oldObject: any, updatedProperties: any) => {
  return {
      ...oldObject,
      ...updatedProperties,
  };
};

export const dayMinuteToRadian = (minute: number) => {
  const minuteRadian = 2 * Math.PI / (minutesInDay / 2);
  const startingRadian = -0.5 * Math.PI;
  return startingRadian + minute * minuteRadian;
};

export const formatHoursMinutes = (timeInMinutes: number) => {
  const hours = Math.floor(timeInMinutes / minutesInHour) ? `${Math.floor(timeInMinutes / minutesInHour)} h` : "";
  const minutes = `${timeInMinutes % minutesInHour} min`;
  return `${hours} ${minutes}`;
};

export const checkValidity = ( value: any, rules: any ) => {
  let isValid = true;
  if ( !rules ) {
      return true;
  }

  if ( rules.required ) {
      isValid = value.trim() !== "" && isValid;
  }

  if ( rules.minLength ) {
      isValid = value.length >= rules.minLength && isValid;
  }

  if ( rules.maxLength ) {
      isValid = value.length <= rules.maxLength && isValid;
  }

  if ( rules.isEmail ) {
      // tslint:disable-next-line: max-line-length
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test( value ) && isValid;
  }

  if ( rules.isNumeric ) {
      const pattern = /^\d+$/;
      isValid = pattern.test( value ) && isValid;
  }

  return isValid;
};

export const uuidv4 = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    // tslint:disable-next-line:no-bitwise
    const r = Math.random() * 16 | 0;
    // tslint:disable-next-line:no-bitwise
    const v = c === "x" ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};
