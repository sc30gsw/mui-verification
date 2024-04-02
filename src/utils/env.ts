/**
 * 環境変数を取得する
 * 取得できなかった場合は例外が投げられる
 * @param key 環境変数を特定するキー文字列
 * @returns 環境変数の値
 */
export const mustGetEnv = (key: string) => {
  const value = import.meta.env[key]
  if (typeof value !== 'string') {
    throw new Error(`${key} should be defined`)
  }
  return value
}

/**
 * boolean型の環境変数を取得する
 * 取得できなかった場合は、引数で指定したデフォルト値を返す
 * @param key 環境変数を特定するキー文字列
 * @param defaultValue 環境変数が取得できなかった場合に採用するデフォルト値
 * @returns 環境変数の値（boolean型）。取得できなかった場合は `defaultValue`
 */
export const getBooleanEnv = (key: string, defaultValue: boolean) => {
  const value = import.meta.env[key]
  if (typeof value !== 'string') {
    return defaultValue
  }
  return value === 'TRUE'
}
