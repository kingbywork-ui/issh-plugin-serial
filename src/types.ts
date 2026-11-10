// 插件侧类型已收敛到统一 Gateway SDK（packages/issh-gateway/src/types）。
// 本文件仅保留 re-export；Web Serial 类型（SerialPort 等）来自运行时 lib，
// 插件专属串口形状在 serialApi.ts（SerialOptions、SerialPortWriter）。
// 历史差异说明：原本地 IsshPluginContext.gateway 仅声明 ui.registerPanel 与 log，
// 为 SDK PluginGateway 的窄化子集；宿主传入完整 PluginGateway 可直接赋值，行为不变。
export type {
    IsshPlugin,
    IsshPluginContext,
    IsshPluginManifest,
    PluginStorage,
} from '../../../packages/issh-gateway/src/types'
