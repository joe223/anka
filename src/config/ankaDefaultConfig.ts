// import * as path from 'path'
import * as path from 'path'
import sassParser from '../parsers/sassParser'
import fileParser from '../parsers/fileParser'
import styleParser from '../parsers/styleParser'
import babelParser from '../parsers/babelParser'
import scriptParser from '../parsers/scriptParser'
import templateParser from '../parsers/templateParser'
import saveFilePlugin from '../plugins/saveFilePlugin'
import wxImportPlugin from '../plugins/wxImportPlugin'
import typescriptParser from '../parsers/typescriptParser'
import extractDependencyPlugin from '../plugins/extractDependencyPlugin'

import {
    IgnoredConfigration,
    ParsersConfigration,
    PluginsConfigration
} from '../../types/types'

const normalize = require('normalize-path')

/*****************************************************
 *                   Danger zone
 *****************************************************/

/**
 * The path where WeChat miniprogram source files exist.
 * @default './src'
 */
export const sourceDir = normalize(path.join('.', 'src'))

/**
 * The path where WeChat miniprogram compiled files exist.
 * @default './dist'
 */
export const outputDir = normalize(path.join('.', 'dist'))

/**
 * The path where WeChat miniprogram pages exist.
 * @default './src/pages'
 */
export const pages = normalize(path.join('.', 'pages'))

/**
 * The path where WeChat miniprogram components exist.
 * @default './src/components'
 */
export const components = normalize(path.join('.', 'components'))

/**
 * Template for creating page and component.
 */
export const template = {
    page: normalize(path.join(__dirname, '..', 'template', 'page')),
    component: normalize(path.join(__dirname, '..', 'template', 'component'))
}

/**
 * The path where WeChat miniprogram subpackages exist.
 * @default './src/subPackages'
 */
export const subPackages = normalize(path.join('.', 'subPackages'))

/*****************************************************
 *                 Custom configure
 *****************************************************/

/**
 * Whether to output compile information.
 * @default false
 */
export const quiet = false

/**
 * Anka development mode.
 * @default false
 */
export const devMode = false

/**
 * Register file parser.
 */
export const parsers: ParsersConfigration = [
    {
        match: /.*\.(js|es)$/,
        parsers: [
            {
                parser: babelParser,
                options: {}
            }
        ]
    },
    {
        match: /.*\.(wxss|css|postcss)$/,
        parsers: [
            {
                parser: styleParser,
                options: {}
            }
        ]
    },
    {
        match: /.*\.(sass|scss)$/,
        parsers: [
            {
                parser: sassParser,
                options: {}
            }
        ]
    },
    {
        match: /.*\.(ts|typescript)$/,
        parsers: [
            {
                parser: typescriptParser,
                options: {}
            }
        ]
    }
]

/**
 * Whether to output debug information.
 * @default false
 */
export const debug: boolean = false

/**
 * Register plugin.
 */
export const plugins: PluginsConfigration = [
    {
        plugin: extractDependencyPlugin,
        options: {}
    },
    {
        plugin: wxImportPlugin,
        options: {}
    },
    {
        plugin: saveFilePlugin,
        options: {}
    }
]

/**
 * Files that will be ignored in compilation.
 */
export const ignored: IgnoredConfigration = []

/*****************************************************
 *               experimental configure
 *****************************************************/

