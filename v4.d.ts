declare function v4(options?: v4.UuidV4Options): string;
declare function v4(options: v4.UuidV4Options | undefined, buffer: Array<number>, offset?: number): Array<number>;
declare function v4(options: v4.UuidV4Options | undefined, buffer: Buffer, offset?: number): Buffer;

declare namespace v4 {
  export type UuidV4Random = [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number];
  export interface UuidV4Options {
    random?: UuidV4Random;
    rng?: () => UuidV4Random;
  }
}

export = v4;
