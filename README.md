![](./public/og.png)

# 汉兜 Handle（Honma-Rika魔改版）

A Chinese Hanzi variation of [Wordle](https://www.powerlanguage.co.uk/wordle/). 汉字 Wordle.

[honma-rika.github.io/handle](https://honma-rika.github.io/handle/)

为方便一天之内多次解不同谜题，在第一次解谜成功后请使用**匿名（InPrivate）窗口**输入url进行后续解谜

## Development Setup

- Insall [Node.js](https://nodejs.org/en/) >=v16 and [yarn](https://yarnpkg.com/)
- Run `yarn install`
- Run `yarn build`
- Run `yarn preview` and visit `http://localhost:3370`

## 自定义谜题

***请勿剧透！PLEASE DO NOT SPOIL!***

- [honma-rika.github.io/handle/?date=1](honma-rika.github.io/handle/?date=1) 仍可畅玩每天变换的不同谜题（谜底暂时仍与原项目一致）
- [honma-rika.github.io/handle/?word={自定义汉字四字词语}](honma-rika.github.io/handle/?word=钟灵毓秀) 自行替换 *{自定义汉字四字词语}* 即可简单自定义谜题，但由于谜底明文暴露在url中，不太适合与他人分享

    例：[honma-rika.github.io/handle/?word=钟灵毓秀](honma-rika.github.io/handle/?word=钟灵毓秀)

- 将项目clone下来后自行修改 `./src/answers/list.ts` 中的 `self_defined_word` 变量，再执行 `yarn build` 与 `yarn preview` 两步操作，最后访问 `http://localhost:3370`

## 成语勘误

成语数据库储存于

- [./src/data/idioms.txt](./src/data/idioms.txt) - 已知的成语列表
- [./src/data/polyphones.json](./src/data/polyphones.json) - 特殊发音的成语列表

二者互不包含。

如遇到成语缺失或发音错误，请编辑 [./src/data/new.txt](./src/data/new.txt) 文件，一行一词，完成后执行 `pnpm run update` 命令，脚本会自动抓取 [汉典](https://www.zdic.net/) 的数据更新成语数据库。如遇汉典中也缺失的成语，其会留存在 new.txt 中，需要手动判断与添加。

## Tech Stack

- [Vue 3](https://v3.vuejs.org/)
- [Vite](https://vitejs.dev/)
- [VueUse](https://vueuse.org/)
- [UnoCSS](https://github.com/antfu/unocss)
- [Vitesse Lite](https://github.com/antfu/vitesse-lite)

## License

[MIT](./LICENSE) License © 2021-PRESENT [Anthony Fu](https://github.com/antfu)
