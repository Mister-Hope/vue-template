import mitt from "mitt";

import type { Emitter } from "mitt";

export type PwaEvent = Emitter<{
  ready: ServiceWorkerRegistration;
  registered: ServiceWorkerRegistration;
  cached: ServiceWorkerRegistration;
  updatefound: ServiceWorkerRegistration;
  updated: ServiceWorkerRegistration;
  offline: void;
  error: Error;
}>;

export const pwaEvent: PwaEvent = mitt();
