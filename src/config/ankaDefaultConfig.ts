// import * as path from 'path'
import * as path from 'path'
import sassParser from '../parsers/sassParser'
import fileParser from '../parsers/fileParser'
import styleParser from '../parsers/styleParser'
import scriptParser from '../parsers/scriptParser'
import templateParser from '../parsers/templateParser'
import saveFilePlugin from '../plugins/saveFilePlugin'
import extractDependencyPlugin from '../plugins/extractDependencyPlugin'


/*****************************************************
 *                   Danger zone
 *****************************************************/

/**
 * The path where WeChat miniprogram source files exist.
 * @default './src'
 */
export const sourceDir = './src'

/**
 * The path where WeChat miniprogram compiled files exist.
 * @default './dist'
 */
export const outputDir = './dist'

/**
 * The path where WeChat miniprogram pages exist.
 * @default './src/pages'
 */
export const pages = path.join(sourceDir, './pages')

/**
 * The path where WeChat miniprogram components exist.
 * @default './src/components'
 */
export const components = path.join(sourceDir, './components')

/**
 * Template for creating page and component.
 */
export const template = {
    page: path.join(__dirname, '../template/page'),
    component: path.join(__dirname, '../template/component')
}

/**
 * The path where WeChat miniprogram subpackages exist.
 * @default './src/subPackages'
 */
export const subPackages = path.join(sourceDir, './subPackages')

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
                parser: scriptParser,
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
        plugin: saveFilePlugin,
        options: {}
    }
]


/*****************************************************
 *               experimental configure
 *****************************************************/

