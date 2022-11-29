import { Writer, Reader } from "as-proto";

export namespace authority {
  export class call_data {
    static encode(message: call_data, writer: Writer): void {
      if (message.contract_id.length != 0) {
        writer.uint32(10);
        writer.bytes(message.contract_id);
      }

      if (message.entry_point != 0) {
        writer.uint32(16);
        writer.uint32(message.entry_point);
      }

      if (message.caller.length != 0) {
        writer.uint32(26);
        writer.bytes(message.caller);
      }

      if (message.data.length != 0) {
        writer.uint32(34);
        writer.bytes(message.data);
      }
    }

    static decode(reader: Reader, length: i32): call_data {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new call_data();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.contract_id = reader.bytes();
            break;

          case 2:
            message.entry_point = reader.uint32();
            break;

          case 3:
            message.caller = reader.bytes();
            break;

          case 4:
            message.data = reader.bytes();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    contract_id: Uint8Array;
    entry_point: u32;
    caller: Uint8Array;
    data: Uint8Array;

    constructor(
      contract_id: Uint8Array = new Uint8Array(0),
      entry_point: u32 = 0,
      caller: Uint8Array = new Uint8Array(0),
      data: Uint8Array = new Uint8Array(0)
    ) {
      this.contract_id = contract_id;
      this.entry_point = entry_point;
      this.caller = caller;
      this.data = data;
    }
  }

  export class authorize_arguments {
    static encode(message: authorize_arguments, writer: Writer): void {
      if (message.type != 0) {
        writer.uint32(8);
        writer.int32(message.type);
      }

      const unique_name_call = message.call;
      if (unique_name_call !== null) {
        writer.uint32(18);
        writer.fork();
        call_data.encode(unique_name_call, writer);
        writer.ldelim();
      }
    }

    static decode(reader: Reader, length: i32): authorize_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new authorize_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.type = reader.int32();
            break;

          case 2:
            message.call = call_data.decode(reader, reader.uint32());
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    type: authorization_type;
    call: call_data | null;

    constructor(type: authorization_type = 0, call: call_data | null = null) {
      this.type = type;
      this.call = call;
    }
  }

  @unmanaged
  export class authorize_result {
    static encode(message: authorize_result, writer: Writer): void {
      if (message.value != false) {
        writer.uint32(8);
        writer.bool(message.value);
      }
    }

    static decode(reader: Reader, length: i32): authorize_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new authorize_result();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.value = reader.bool();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    value: bool;

    constructor(value: bool = false) {
      this.value = value;
    }
  }

  export enum authorization_type {
    contract_call = 0,
    transaction_application = 1,
    contract_upload = 2,
  }
}
