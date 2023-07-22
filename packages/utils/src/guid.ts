import { customAlphabet } from 'nanoid/non-secure'

/**
 * 没有以下值
 * n: node
 * s: scene
 */
const alphabet = '1234567890abcdefghijklmopqrtuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
const guid = customAlphabet(alphabet, 11)

export default guid
