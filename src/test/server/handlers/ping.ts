import { HttpResponse, http, delay } from "msw";

/**
 * MSWのモック実装サンプル
 */
export const pingHandlers = [
  http.get("/ping", async () => {
    await delay(1000);
    return HttpResponse.json({ message: "pong" });
  }),
];
