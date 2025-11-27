# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

個人のポートフォリオサイト。React + TypeScript + Vite で構築されたシングルページアプリケーション (SPA) です。

## Development Commands

```bash
# 開発サーバーの起動 (自動的にブラウザが開く)
bun run dev

# ビルド
bun run build

# プレビュー (ビルド後の動作確認)
bun run preview

# テスト実行
bun run test

# リント実行 (警告もエラーとして扱う)
bun run lint

# フォーマット
bun run fmt

# フォーマットチェック
bun run fmt:check

# Zenn から記事データを取得
bun run fetch:notes
```

## Build Process

ビルド時には `prebuild` スクリプトが自動実行され、Zenn から最新の記事データを取得して `data/notes.json` に保存します。

## Architecture

### Routing

`src/main.tsx` でルーティングを定義。react-router を使用し、以下の 3 つのページで構成:

- `/` - AboutPage (プロフィール、スキル、資格)
- `/works` - WorksPage (制作物)
- `/notes` - NotesPage (Zenn の記事一覧)

### Configuration

`config.ts` が唯一のデータソースとして機能し、すべてのページで使用されるデータ (プロフィール、SNS、スキル、資格、制作物) を定義しています。

- 型定義は `src/types.ts` にあります
- `@/config` エイリアスでアクセス可能

### Path Aliases

`vite.config.ts` で以下のパスエイリアスを定義:

- `@/config` → `config.ts`
- `@/types` → `src/types.ts`
- `@/assets` → `src/assets`
- `@/data` → `data`

### Page Structure

各ページは `src/pages/` 配下に独自のディレクトリを持ち、以下の構造:

```
src/pages/
├── AboutPage/
├── WorksPage/
├── NotesPage/
└── NotFoundPage/
```

各ページディレクトリには:

- メインコンポーネント (`*Page.tsx`)
- サブコンポーネント (`components/`)
- ユーティリティ関数 (`lib.ts`)
- テストファイル (`lib.spec.ts`)
- エクスポート用インデックス (`index.ts`)

### SVG Icons

SVG ファイルは `vite-plugin-svgr` により React コンポーネントとしてインポート可能:

```typescript
import Icon from "@/assets/icon.svg?react";
```

### Testing

Vitest を使用。テストファイルは `*.spec.ts` の命名規則に従います。

## Pre-commit Hooks

Husky + lint-staged により、コミット前に以下が自動実行:

- Prettier によるフォーマット
- ESLint によるリント (警告もエラーとして扱う)

## External Data

`scripts/fetch-notes.ts` が Zenn API から記事データを取得し、`data/notes.json` に保存します。このスクリプトはビルド前に自動実行されます。
