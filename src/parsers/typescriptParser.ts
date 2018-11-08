import config from '../config'
import * as ts from 'typescript'
import * as utils from '../utils'
import File from '../core/class/File'

const { logger } = utils



/**
 * Typescript file parser.
 *
 * @for any file that does not matche parsers.
 */
export default <Parser>function (this: ParserInjection, file: File, compilation: Compilation, callback?: Function) {
    file.content = file.content instanceof Buffer ? file.content.toString() : file.content

    const tsConfig = <ts.TranspileOptions>utils.resolveConfig(['tsconfig.json', 'tsconfig.js'], config.cwd)
    const result = ts.transpileModule(file.content, {
        compilerOptions: tsConfig.compilerOptions,
        fileName: file.sourceFile
    })

    try {
        file.content = result.outputText
        if (config.ankaConfig.devMode) {
            file.sourceMap = result.sourceMapText
        }
        file.updateExt('.js')
    } catch (err) {
        logger.error('Compile error', err.message, err)
    }

    callback()
}
