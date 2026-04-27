import type { StorybookConfig } from '@storybook/react-vite';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import type { Plugin } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Vite plugin to fix Storybook 10 MDX resolution issue.
 * MDX compiled files reference file:// protocol paths that Rollup can't resolve.
 */
function fixMdxResolve(): Plugin {
  const projectRoot = resolve(__dirname, '..');
  const shimPath = resolve(projectRoot, 'node_modules/@storybook/addon-docs/dist/mdx-react-shim.js');
  return {
    name: 'fix-mdx-resolve',
    enforce: 'pre',
    resolveId(source) {
      if (source.includes('mdx-react-shim')) {
        return shimPath;
      }
      if (source.includes('file://') && source.includes('node_modules')) {
        const cleaned = source.replace(/^file:\/\/\.?\//, '');
        return resolve(projectRoot, cleaned);
      }
      return null;
    },
    load(id) {
      // If commonjs resolver is trying to load the relative path, redirect
      if (id.includes('mdx-react-shim') && !id.startsWith('/')) {
        return `export * from "@mdx-js/react";`;
      }
      return null;
    },
  };
}

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(ts|tsx)',
  ],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@chromatic-com/storybook',
  ],
  framework: '@storybook/react-vite',
  viteFinal: async (config) => {
    // Remove library build config that conflicts with Storybook
    if (config.build) {
      delete (config.build as Record<string, unknown>).lib;
      delete (config.build as Record<string, unknown>).rollupOptions;
    }

    // Remove vite-plugin-dts (it's for library builds, not Storybook)
    if (config.plugins) {
      config.plugins = config.plugins.filter((plugin) => {
        if (plugin && typeof plugin === 'object' && 'name' in plugin) {
          return (plugin as { name: string }).name !== 'vite:dts';
        }
        return true;
      });
    }

    // Add MDX resolve fix plugin
    config.plugins = config.plugins ?? [];
    config.plugins.push(fixMdxResolve());

    config.resolve = config.resolve ?? {};
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': resolve(__dirname, '../src'),
    };

    return config;
  },
};

export default config;
