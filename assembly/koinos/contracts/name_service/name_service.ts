import { Writer, Reader } from "as-proto";

export namespace name_service {
  export class name_record {
    static encode(message: name_record, writer: Writer): void {
      if (message.name.length != 0) {
        writer.uint32(10);
        writer.string(message.name);
      }
    }

    static decode(reader: Reader, length: i32): name_record {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new name_record();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.name = reader.string();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    name: string;

    constructor(name: string = "") {
      this.name = name;
    }
  }

  export class address_record {
    static encode(message: address_record, writer: Writer): void {
      if (message.address.length != 0) {
        writer.uint32(10);
        writer.bytes(message.address);
      }
    }

    static decode(reader: Reader, length: i32): address_record {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new address_record();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.address = reader.bytes();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    address: Uint8Array;

    constructor(address: Uint8Array = new Uint8Array(0)) {
      this.address = address;
    }
  }

  export class get_address_arguments {
    static encode(message: get_address_arguments, writer: Writer): void {
      if (message.name.length != 0) {
        writer.uint32(10);
        writer.string(message.name);
      }
    }

    static decode(reader: Reader, length: i32): get_address_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_address_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.name = reader.string();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    name: string;

    constructor(name: string = "") {
      this.name = name;
    }
  }

  export class get_address_result {
    static encode(message: get_address_result, writer: Writer): void {
      const unique_name_value = message.value;
      if (unique_name_value !== null) {
        writer.uint32(10);
        writer.fork();
        address_record.encode(unique_name_value, writer);
        writer.ldelim();
      }
    }

    static decode(reader: Reader, length: i32): get_address_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_address_result();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.value = address_record.decode(reader, reader.uint32());
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    value: address_record | null;

    constructor(value: address_record | null = null) {
      this.value = value;
    }
  }

  export class get_name_arguments {
    static encode(message: get_name_arguments, writer: Writer): void {
      if (message.address.length != 0) {
        writer.uint32(10);
        writer.bytes(message.address);
      }
    }

    static decode(reader: Reader, length: i32): get_name_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_name_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.address = reader.bytes();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    address: Uint8Array;

    constructor(address: Uint8Array = new Uint8Array(0)) {
      this.address = address;
    }
  }

  export class get_name_result {
    static encode(message: get_name_result, writer: Writer): void {
      const unique_name_value = message.value;
      if (unique_name_value !== null) {
        writer.uint32(10);
        writer.fork();
        name_record.encode(unique_name_value, writer);
        writer.ldelim();
      }
    }

    static decode(reader: Reader, length: i32): get_name_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_name_result();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.value = name_record.decode(reader, reader.uint32());
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    value: name_record | null;

    constructor(value: name_record | null = null) {
      this.value = value;
    }
  }

  export class set_record_arguments {
    static encode(message: set_record_arguments, writer: Writer): void {
      if (message.name.length != 0) {
        writer.uint32(10);
        writer.string(message.name);
      }

      if (message.address.length != 0) {
        writer.uint32(18);
        writer.bytes(message.address);
      }
    }

    static decode(reader: Reader, length: i32): set_record_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new set_record_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.name = reader.string();
            break;

          case 2:
            message.address = reader.bytes();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    name: string;
    address: Uint8Array;

    constructor(name: string = "", address: Uint8Array = new Uint8Array(0)) {
      this.name = name;
      this.address = address;
    }
  }

  @unmanaged
  export class set_record_result {
    static encode(message: set_record_result, writer: Writer): void {}

    static decode(reader: Reader, length: i32): set_record_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new set_record_result();

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

  export class record_update_event {
    static encode(message: record_update_event, writer: Writer): void {
      if (message.name.length != 0) {
        writer.uint32(10);
        writer.string(message.name);
      }

      if (message.address.length != 0) {
        writer.uint32(18);
        writer.bytes(message.address);
      }
    }

    static decode(reader: Reader, length: i32): record_update_event {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new record_update_event();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.name = reader.string();
            break;

          case 2:
            message.address = reader.bytes();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    name: string;
    address: Uint8Array;

    constructor(name: string = "", address: Uint8Array = new Uint8Array(0)) {
      this.name = name;
      this.address = address;
    }
  }
}
