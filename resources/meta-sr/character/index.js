import { Data, Meta } from '#miao'
import { alias } from './alias.js'

let data = Data.readJSON('resources/meta-sr/character/data.json', 'miao')
let meta = Meta.create('sr', 'char')
meta.addData(data)
meta.addAlias(alias)
