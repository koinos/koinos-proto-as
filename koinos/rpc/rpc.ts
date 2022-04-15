import { Writer, Reader } from "as-proto";

export namespace koinos {
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
        const message_2 = message.message;
        if (message_2 !== null) {
          writer.uint32(10);
          writer.string(message_2);
        }

        const data = message.data;
        if (data !== null) {
          writer.uint32(18);
          writer.string(data);
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

      message: string | null;
      data: string | null;

      constructor(message: string | null = null, data: string | null = null) {
        this.message = message;
        this.data = data;
      }
    }
  }
}
