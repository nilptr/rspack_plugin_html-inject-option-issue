# rspack_plugin_html-inject-option-issue

This is a demo repo to reproduce the different behaviors of `rspack_plugin_html` and `html-webpack-plugin`'s `inject` option.

| rspack_plugin_html                              | html-webpack-plugin                               |
|-------------------------------------------------|---------------------------------------------------|
| ![rspack_plugin_html](./screenshots/rspack.png) | ![html-webpack-plugin](./screenshots/webpack.png) |

```bash
pnpm install

# webpack dev server
pnpm run dev:webpack

# rspack dev server
pnpm run dev:rspack
```
