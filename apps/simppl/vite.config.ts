import _config, { defineConfig, loadEnv } from '@jinpro/vite-config';
import path from 'path';

const _path = (_: string) => path.resolve(__dirname, _);

const envPath = `${process.cwd()}/../../packages/config/vite`;
export default defineConfig(({ mode }) => {
  const env: Record<string, string> = { ...loadEnv(mode, envPath, '') };

  return {
    ..._config,
    envDir: envPath,
    resolve: {
      alias: {
        '@page': _path('./src/page'),
        '@component': _path('./src/component'),
        '@hoc': _path('./src/hoc'),
        '@hook': _path('./src/hook'),
        '@type': _path('../../type'),
      },
    },
    plugins: [..._config.plugins],
  };
});
