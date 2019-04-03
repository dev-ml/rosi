export const minutesInHour = 60;
export const minutesInDay = 24 * minutesInHour;
export const hoursInDay = 24;

export const oneSecond = 1000;
export const oneMinute = 60 * oneSecond;
export const oneHour = minutesInHour * oneMinute;
export const oneDay = hoursInDay * oneHour;

export const defaultExtendDuration = 15 * oneMinute;
export const defaultMeetingDuration = 30 * oneMinute;
export const defaultConfirmationThreshold = 5 * oneMinute;

export const clockHoursForward = 10;
export const clockHoursBackwards = 1;
export const clockMaxTime = clockHoursForward * oneHour;
export const clockMinTime = clockHoursBackwards * oneHour;

export const maxSyncResults = 1000;
export const syncInterval = 5 * oneMinute;
export const uiTimeOffset = 1;