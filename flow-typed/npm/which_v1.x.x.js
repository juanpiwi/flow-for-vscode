// flow-typed signature: 3527b04d4cb61613b894c1cf1e2ed702
// flow-typed version: 5a228fa13b/which_v1.x.x/flow_>=v0.75.x

declare module "which" {
  declare type Options = {|path?: string, pathExt?: string, all?: boolean|};
  declare function whichAsync(cmd: string, cb: (err: ?Error, path: string) => void): void;
  declare function whichAsync(cmd: string, options: Options, cb: (err: ?Error, path: string) => void): void;

  declare function whichSync(cmd: string, options?: Options): string;
  declare function whichSync(cmd: string, options: {|...Options, noThrow?: false|}): string;
  declare function whichSync(cmd: string, options: {|...Options, noThrow: true|}): ?string;
  declare module.exports: {
  [[call]]: typeof whichAsync,
    sync: typeof whichSync
  }
}
