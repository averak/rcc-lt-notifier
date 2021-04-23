# RCC LT Notifier

![code check](https://github.com/averak/rcc-lt-notifier/workflows/code%20check/badge.svg)
![deploy](https://github.com/averak/rcc-lt-notifier/workflows/deploy/badge.svg)
[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)

次週の LT 担当者にメールで通知する GAS プロジェクト

[名簿テンプレート](https://docs.google.com/spreadsheets/d/1F1eYPMke_ZaDNKCwdDvcxglRdkr5Ixsao_LjI1j-Ovk/edit?usp=sharing)を Google Drive 上の任意のフォルダへコピーして使用します。

## 機能一覧

- 配信管理
  - メールの文面定義
  - メール送信
    - 例年は`配信`ボタンをクリックしていた
    - 自動送信にするのもあり？（要検討）
- 名簿管理
  - `未/終/延`のステータス
- 遅延状況を表示

## 開発

### 開発環境

- Node.js 14.\*
- yarn 1.\*

### インストール方法

#### 1. インストール

```sh
$ yarn
```

#### 2. clasp の設定

下記コマンドを実行後，RCC ドライブへのアクセス権限のあるアカウントでログインしてください。

```sh
$ npx clasp login
```
