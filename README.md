# minitoc

見出しを検索して目次を生成するシンプルな JavaScript ライブラリ。

## How To Use

CDN を読み込んみ `minitoc.init()` で実行します。

<!-- prettier-ignore -->
```html
<script src="https://cdn.jsdelivr.net/npm/minitoc@0.1.1/dist/minitoc.js"></script>
<script>minitoc.init()</script>
```

<!-- prettier-ignore -->
```html
<!-- 目次を出力したい場所に data-toc 属性を付与します -->
<div data-toc></div>

<!-- 見出しを検索したい場所に data-toc-container 属性を付与します -->
<div data-toc-container>
  <h2>テストh2</h2>
  <h3>テストh3</h3>
  <p>テスト文章テスト文章テスト文章テスト文章テスト文章テスト文章</p>
  ...
</div>
```

## Respect

- [jgallen23/toc: jQuery Table of Contents Plugin](https://github.com/jgallen23/toc)
- [tscanlin/tocbot: Build a table of contents from headings in an HTML document.](https://github.com/tscanlin/tocbot)

## License

- MIT

## Credit

- Author: [Qrac](https://qrac.jp)
- Organization: [QRANOKO](https://qranoko.jp)
