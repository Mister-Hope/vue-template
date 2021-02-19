/* eslint-disable @typescript-eslint/naming-convention */

declare namespace NodeJS {
  interface Process {
    env: {
      ANALYZE: string;
      BASE_URL: string;
      NODE_ENV: string;
      VUE_APP_DEBUG?: string;
    };
  }
}
