import { Injectable } from '@angular/core';
import env from 'src/environments/environment';

const loads: { [url: string]: Promise<void> } = {};

/**
 * Loads third party integration scripts that are not managed by Webpack.
 */
@Injectable({ providedIn: 'root' })
export default class ScriptLoader {
  /**
   * Loads a remote script asynchronously
   * @param url the URL of the remote script to load.
   * @returns A Promise that resolves when the script has been successfully loaded and rejects if loading fails.
   * @example
   * ```ts
   * try {
   *   await scriptLoader.load('protocol://domain.suffix/script.js');
   * } catch {
   *    console.error('unable to load script');
   * }
   * ```
   */
  load(url: string) {
    if (loads[url]) return loads[url];

    loads[url] = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.onload = resolve;
      script.onerror = reject;
      script.src = url;
      script.async = true;
      script.defer = true;
      document.body.append(script);
    }).then(console.info.bind(console, `Loaded ${url}\n`));
    return loads[url];
  }


