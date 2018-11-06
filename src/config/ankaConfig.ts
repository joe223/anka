import * as path from 'path'
import resolveConfig from '../utils/resolveConfig'
import * as ankaDefaultConfig from './ankaDefaultConfig'

const cwd = process.cwd()
const customConfig = <AnkaConfig>resolveConfig(['anka.config.js', 'anka.config.json'])

export default {
    ...ankaDefaultConfig,
    ...customConfig,
    template: customConfig.template ? {
        page: path.join(cwd, customConfig.template.page),
        component: path.join(cwd, customConfig.template.component)
    } : ankaDefaultConfig.template,
    parsers: customConfig.parsers ? customConfig.parsers.concat(ankaDefaultConfig.parsers) : ankaDefaultConfig.parsers,
    plugins: ankaDefaultConfig.plugins.concat(customConfig.plugins || [])
}
