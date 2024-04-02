# phase1-admin-frontend

## Getting Started

### 推奨環境

- node.js: v20.9.0
- npm: 10.2.4

### 依存関係のインストール

```bash
npm install
```

または

```bash
npm ci
```

`npm ci` については [こちら](https://qiita.com/mstssk/items/8759c71f328cab802670) も参照

### 開発用サーバーの起動

```bash
npm run dev
```

### テストの実行

```bash
npm run test
```

### Lint

```bash
npm run lint
```

書き込む場合は

```bash
npm run lint:fix
```

### フォーマット

```bash
npm run format
```

### Storybook

```bash
npm run storybook
```

または

```bash
npm run sb
```

### API 型自動生成

Backend API ドキュメント（Swagger）の json 版がローカルで見られる（ <http://localhost:3000/api-json/> でアクセスできる）状態で、

```bash
npm run api:build
```

詳しくは[こちら](https://www.notion.so/openapi2aspida-405aae316cc24f90b14791ead8af3789)を参照

## 環境変数

環境変数は、`.env`ファイルに記述します。
`.env.development`は、開発環境のみで使用されます。

| 環境変数               | 説明                                           |
| :--------------------- | :--------------------------------------------- |
| `VITE_API_BASE_URL`    | バックエンドの URL                             |
| `VITE_USE_MOCK_SERVER` | バックエンドのモックサーバーを使用するかどうか |

## ディレクトリ構成

ソースコードは、次のディレクトリ構成に従ってください。
プロジェクト構成は[alan2207/bulletproof-react](https://github.com/alan2207/bulletproof-react)を参考に、本プロジェクトに合わせてカスタマイズしています。

```text
phase1-admin-frontend-frontend
└ src
    ├ assets : 画像などアセット類
    ├ api : API呼び出し実装。axios, aspidaを利用し、HTTPリクエストに必要な実装を自動生成する
    │  ├ aspida.ts : aspidaの実装
    │  └ ... : aspidaのルールに基づいたAPI定義の実装、リクエスト・レスポンスDTO実装
    ├ components : アプリ全体で使われるコンポーネント実装
    │  ├ ui-elements: AtomicDesignのatoms, molecules, organismsに相当するコンポーネント
    │  ├ templates : AtomicDesignのtemplatesに相当するコンポーネント
    │  ├ layouts : AtomicDesignのlayoutsに相当するコンポーネント
    │  ├ functional : 見た目を伴わないコンポーネント。ログイン判定（未ログイン時にログインページ遷移させるコンポーネント）など
    │  └ index.ts : エントリーポイント
    ├ constants : アプリ全体で使われる定数定義
    │  └ xxx.ts : （例）
    ├ features : 機能単位にコンポーネントやロジックをまとめるディレクトリ
    │  ├ xxx : xxx機能
    │  │  ├ components : コンポーネント実装。機能内で閉じるものや、ページコンポーネントをここに実装する
    │  │  │  ├ xxxPage.tsx : （例）
    │  │  │  └ XxxForm.tsx : （例）
    │  │  ├ constants : 定数定義
    │  │  │  └ xxx.ts : （例）
    │  │  ├ hooks : カスタムフック実装。SWRでラッピングしたAPI呼び出しなど
    │  │  │  └ useXxx.ts : （例）
    │  │  ├ types : 型定義実装
    │  │  │  └ xxx.ts : （例）
    │  │  ├ utils : ユーティリティ実装
    │  │  │  └ xxx.ts : （例）
    │  │  ├ theme : MUIのテーマ関連実装　※機能・階層ごとにカラーテーマを変えるデザインのため
    │  │  │  └ index.tsx
    │  │  └ index.ts : エントリーポイント
    ├ hooks : アプリ全体で使われるカスタムフック
    │  └ useXxx.ts : （例）
    ├ libs : アプリ全体でライブラリを使用するための実装
    │  ├ axios.ts : axiosのclient生成実装
    │  └ xxx.ts : （例）
    ├ providers : context, provider定義
    │  ├ app.tsx : MUIなどのproviderをラッピング
    │  └ xxx.tsx : （例）
    ├ routes : ルーティング定義
    │  └ index.tsx : ルーティング設定
    ├ stores : アプリ全体で使われる状態管理実装
    │  └ xxx.ts
    ├ test : テスト用実装。主にAPIモック（msw）など
    │  ├ server
    │  │  ├ handlers : APIモック（msw）の振る舞い実装
    │  │  │  ├ xxx.ts : （例）
    │  │  │  └ index.ts : エントリーポイント
    │  │  └ worker.ts : APIモック（msw）用実装
    │  ├ setup.ts : APIモック（msw）用実装
    │  └ xxx.tsx : （例）
    ├ theme : MUIのテーマ関連実装
    │  └ index.tsx
    ├ types : アプリ全体で使われる型定義
    │  └ index.ts
    ├ utils : アプリ全体で使われるユーティリティ実装
    │  └ xxx.ts : （例）
    ├ index.css : crafty-cosmos-frontend でいうところの ./src/index.css
    └ index.tsx : crafty-cosmos-frontend でいうところの ./src/index.tsx
```
