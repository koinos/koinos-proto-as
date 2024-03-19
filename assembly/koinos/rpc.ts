import { Writer, Reader } from "as-proto";
import { any } from "../google/protobuf/any";

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

  export class error_status {
    static encode(message: error_status, writer: Writer): void {
      if (message.message.length != 0) {
        writer.uint32(10);
        writer.string(message.message);
      }

      if (message.data.length != 0) {
        writer.uint32(18);
        writer.string(message.data);
      }

      if (message.code != 0) {
        writer.uint32(24);
        writer.int32(message.code);
      }

      const unique_name_details = message.details;
      for (let i = 0; i < unique_name_details.length; ++i) {
        writer.uint32(82);
        writer.fork();
        any.Any.encode(unique_name_details[i], writer);
        writer.ldelim();
      }
    }

    static decode(reader: Reader, length: i32): error_status {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new error_status();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.message = reader.string();
            break;

          case 2:
            message.data = reader.string();
            break;

          case 3:
            message.code = reader.int32();
            break;

          case 10:
            message.details.push(any.Any.decode(reader, reader.uint32()));
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
    code: i32;
    details: Array<any.Any>;

    constructor(
      message: string = "",
      data: string = "",
      code: i32 = 0,
      details: Array<any.Any> = []
    ) {
      this.message = message;
      this.data = data;
      this.code = code;
      this.details = details;
    }
  }
}
