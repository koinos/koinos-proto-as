import { Writer, Reader } from "as-proto";

export namespace any {
  export class Any {
    static encode(message: Any, writer: Writer): void {
      const field_type_url = message.type_url;
      if (field_type_url !== null) {
        writer.uint32(10);
        writer.string(field_type_url);
      }

      const field_value = message.value;
      if (field_value !== null) {
        writer.uint32(18);
        writer.bytes(field_value);
      }
    }

    static decode(reader: Reader, length: i32): Any {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new Any();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.type_url = reader.string();
            break;

          case 2:
            message.value = reader.bytes();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    type_url: string | null;
    value: Uint8Array | null;

    constructor(type_url: string | null = null, value: Uint8Array | null = null) {
      this.type_url = type_url;
      this.value = value;
    }
  }
}