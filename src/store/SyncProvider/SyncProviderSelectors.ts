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
