import mitt from "mitt";

import type { Emitter, Handler, WildcardHandler } from "mitt";

export interface PwaEvent extends Emitter {
  on(type: "ready", handler: Handler<ServiceWorkerRegistration>): void;
  on(type: "registered", handler: Handler<ServiceWorkerRegistration>): void;
  on(type: "cached", handler: Handler<ServiceWorkerRegistration>): void;
  on(type: "updatefound", handler: Handler<ServiceWorkerRegistration>): void;
  on(type: "updated", handler: Handler<ServiceWorkerRegistration>): void;
  on(type: "offline", handler: Handler<void>): void;
  on(type: "error", handler: Handler<Error>): void;
  on(type: "*", handler: WildcardHandler): void;
  emit(type: "ready", event: ServiceWorkerRegistration): void;
  emit(type: "registered", event: ServiceWorkerRegistration): void;
  emit(type: "cached", event: ServiceWorkerRegistration): void;
  emit(type: "updatefound", event: ServiceWorkerRegistration): void;
  emit(type: "updated", event: ServiceWorkerRegistration): void;
  emit(type: "offline"): void;
  emit(type: "error", event: Error): void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  emit(type: "*", event?: any): void;
}

export const pwaEvent: PwaEvent = mitt();
