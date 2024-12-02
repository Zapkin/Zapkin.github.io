/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
interface ImportMetaGlob {
  glob: <T>(glob: string) => Record<string, () => Promise<T>>
}

interface ImportMeta extends ImportMetaGlob {}
