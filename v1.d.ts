declare function v1(options?: v1.UuidV1Options): string;
declare function v1(options: v1.UuidV1Options | undefined, buffer: Array<number>, offset?: number): Array<number>;
declare function v1(options: v1.UuidV1Options | undefined, buffer: Buffer, offset?: number): Buffer;

declare namespace v1 {
  export interface UuidV1Options {
    node?: any[];
    clockseq?: number;
    msecs?: number | Date;
    nsecs?: number;
  }
}

export = v1;
