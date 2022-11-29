import { Writer, Reader } from "as-proto";

export namespace rpc {
  @unmanaged
  export class reserved_rpc {
    static encode(message: reserved_rpc, writer: Writer): void {}

    static decode(reader: Reader, length: i32): reserved_rpc {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new reserved_rpc();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    constructor() {}
  }

  export class error_response {
    static encode(message: error_response, writer: Writer): void {
      if (message.message.length != 0) {
        writer.uint32(10);
        writer.string(message.message);
      }

      if (message.data.length != 0) {
        writer.uint32(18);
        writer.string(message.data);
      }
    }

    static decode(reader: Reader, length: i32): error_response {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new error_response();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.message = reader.string();
            break;

          case 2:
            message.data = reader.string();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    message: string;
    data: string;

    constructor(message: string = "", data: string = "") {
      this.message = message;
      this.data = data;
    }
  }
}
