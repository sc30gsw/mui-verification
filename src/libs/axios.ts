import axios from "axios";
import { throttle } from "lodash";

import { getBooleanEnv, mustGetEnv } from "../utils/env";

import type { AxiosError, AxiosInstance } from "axios";

export const client = axios.create({
  baseURL: getBooleanEnv("VITE_USE_MOCK_SERVER", false)
    ? "" // APIモックを利用する場合、baseURLは空文字設定しないとモックにバイパスされない
    : mustGetEnv("VITE_API_BASE_URL"),
  withCredentials: true,
});

const throttleAlert = throttle(alert, 2000);

export function setupInterceptors(instance: AxiosInstance) {
  instance.interceptors.response.use(
    (res) => res,
    (err: AxiosError<{ message?: string | string[] }>) => {
      if (!err || !err.response) return;
      const { status } = err.response;

      if (status === 400 || status === 403 || status === 404) {
        throttleAlert(
          "システムエラーが発生しました。" +
            "しばらく時間をおいて再度操作しても同じ問題が発生する場合は、" +
            "システム担当者にご連絡ください",
        );
      } else if (status >= 500) {
        // サーバーエラー
        throttleAlert(
          "システムエラーが発生しました。" +
            "しばらく時間をおいて再度操作しても同じ問題が発生する場合は、" +
            "システム担当者にご連絡ください",
        );
      }

      return Promise.reject(err);
    },
  );
}

setupInterceptors(client);
