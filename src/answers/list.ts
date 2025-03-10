/**
 * SPOILERS
 *
 * This file contains the list of answers for the game. It's not recommended to continue reading this file.
 *
 * 剧透警告
 *
 * 该文件包含了游戏的答案列表。不建议继续阅读。
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

import { seedShuffle } from './utils'
import { checkValidIdiom } from '~/logic'

export const self_defined_word = '心有灵犀' // '中单光一'

function prepare<T>(len: number, arr: T[]) {
  if (arr.length !== len)
    throw new Error(`expect array length ${arr.length} to be ${len}`)
  return arr
}

export const _PRE = prepare(1, [[]])

export const _2022_JAN = prepare(31, [
  ...Array.from({ length: 28 }, () => []),
  ['天南海北'],
  ['地动山摇'],
  ['福寿安康'],
])

export const _2022_FEB = prepare(28, [
  ['虎虎生威', '虎'],
  ['酒虎诗龙', '虎'],
  ['虎啸风生', '虎'],
  ['卧虎藏龙', '虎'],
  ['虎视眈眈', '虎'],
  ...seedShuffle([
    ['春华秋实'],
    ['一面之辞'],
    ['变化莫测'],
    ['穷山恶水'],
    ['百废待兴'],
    ['百年树人', '人'],
    ['吃里扒外'],
    ['井然有条'],
    ['本性难移'],
    ['口是心非', '是'],
    ['雄心勃勃'],
    ['各有千秋'],
    ['异口同声', '声'],
    ['因噎废食', '食'],
    ['惊世骇俗', '世'],
    ['同甘共苦', '同'],
    ['见风使舵'],
    ['地北天南'],
    ['锦上添花', '花'],
    ['应对如流'],
    ['入木三分', '木'],
    ['瓜田李下', '下'],
    ['语不投机'],
  ], '2022-02'),
])

export const _2022_MARCH = prepare(31, seedShuffle([
  ['孜孜不倦', '不'],
  ['胆战心惊', '心'],
  ['人老珠黄', '黄'],
  ['寄人篱下', '下'],
  ['行尸走肉', '行'],
  ['国泰民安', '安'],
  ['轻声细语', '语'],
  ['自不量力', '力'],
  ['平步青云', '云'],
  ['谈笑风生', '风'],
  ['见义勇为', '为'],
  ['回天乏术', '天'],
  ['首当其冲', '其'],
  ['千姿百态', '百'],
  ['蓬荜生辉', '生'],
  ['苦口婆心', '心'],
  ['独树一帜', '一'],
  ['走马观花', '花'],
  ['燃眉之急', '眉'],
  ['不翼而飞', '飞'],
  ['不言而喻', '言'],
  ['花前月下', '月'],
  ['春风化雨', '风'],
  ['高深莫测', '高'],
  ['铁石心肠', '石'],
  ['飞蛾扑火', '火'],
  ['鬼斧神工', '鬼'],
  ['无中生有', '生'],
  ['风调雨顺', '雨'],
  ['坐吃山空', '山'],
  ['愤世嫉俗', '世'],
], '2022-03'))

export const _2022_APRIL = prepare(30, seedShuffle([
  ['破釜沈舟', '破'],
  ['急转直下', '下'],
  ['独具匠心', '心'],
  ['不耻下问', '下'],
  ['声名鹊起', '名'],
  ['适得其反', '其'],
  ['精益求精', '精'],
  ['无往不利', '不'],
  ['百口莫辩', '口'],
  ['与世无争', '无'],
  ['返老还童', '老'],
  ['火上浇油', '上'],
  ['志在千里', '千'],
  ['闲情逸致', '情'],
  ['敬而远之', '而'],
  ['众目睽睽', '目'],
  ['蝇头小利', '小'],
  ['义结金兰', '金'],
  ['猴年马月', '年'],
  ['排山倒海', '山'],
  ['拾金不昧', '金'],
  ['喜出望外', '出'],
  ['鸡犬不宁', '不'],
  ['身临其境', '其'],
  ['同归于尽', '于'],
  ['杯水车薪', '车'],
  ['日新月异', '日'],
  ['未雨绸缪', '雨'],
  ['居安思危', '安'],
  ['百里挑一', '百'], // D100
], '2022-04'))

export const answers: string[][] = [
  ..._PRE,
  ..._2022_JAN,
  ..._2022_FEB,
  ..._2022_MARCH,
  ..._2022_APRIL,
]

// duplicated check
if (import.meta.hot) {
  const map = new Map<string, number>()
  answers.forEach((a, i) => {
    if (!a[0])
      return
    if (!map.has(a[0]))
      map.set(a[0], i)
    else
      throw new Error(`Word ${a[0]} is duplicated at ${map.get(a[0])}`)
    if (a[1] && !a[0].includes(a[1]))
      throw new Error(`Hint ${a[1]} is not included in ${a[0]}`)
    if (!checkValidIdiom(a[0], true))
      throw new Error(`${a[0]} is not a valid idiom`)
  })
}
