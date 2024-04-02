module.exports = {
  input: 'src/api', // 出力先設定
  outputEachDir: false, // $api.ts を各エンドポイントディレクトリに作らない
  openapi: { inputFile: 'http://localhost:3000/api-json/' },
};
