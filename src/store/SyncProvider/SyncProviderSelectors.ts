import { createSelector } from "redux-starter-kit";

export const isConnected = createSelector(
  ["syncProvider.connected"],
);

export const isConnecting = createSelector(
  ["syncProvider.connecting"],
);

export const hasAutoSync = createSelector(
  ["syncProvider.autoSync"],
);

export const getSyncSettings = createSelector(
  ["syncProvider.syncSettings"],
);

export const isSyncSettingsConfigured = createSelector(
  ["syncProvider.syncSettings"],
  (syncSettings: any) => {
    return syncSettings.clientId && syncSettings.apiKey && syncSettings.calendarId
  }
);
