import { expose, util } from '@chainlink/ea-bootstrap'
import { makeExecute } from './adapter'

const NAME = 'COINPAPRIKA'

export = { NAME, makeExecute, ...expose(util.wrapExecute(makeExecute())) }
