import { Writer, Reader } from "as-proto";
import { any } from "../../google/protobuf/any";

export namespace value {
  export class value_type {
    static encode(message: value_type, writer: Writer): void {
      const unique_name_message_value = message.message_value;
      if (unique_name_message_value !== null) {
        writer.uint32(10);
        writer.fork();
        any.Any.encode(unique_name_message_value, writer);
        writer.ldelim();
      }

      if (message.int32_value !== null) {
        writer.uint32(16);
        writer.int32(message.int32_value);
      }

      if (message.int64_value !== null) {
        writer.uint32(24);
        writer.int64(message.int64_value);
      }

      if (message.uint32_value !== null) {
        writer.uint32(32);
        writer.uint32(message.uint32_value);
      }

      if (message.uint64_value !== null) {
        writer.uint32(40);
        writer.uint64(message.uint64_value);
      }

      if (message.sint32_value !== null) {
        writer.uint32(48);
        writer.sint32(message.sint32_value);
      }

      if (message.sint64_value !== null) {
        writer.uint32(56);
        writer.sint64(message.sint64_value);
      }

      if (message.fixed32_value !== null) {
        writer.uint32(69);
        writer.fixed32(message.fixed32_value);
      }

      if (message.fixed64_value !== null) {
        writer.uint32(73);
        writer.fixed64(message.fixed64_value);
      }

      if (message.sfixed32_value !== null) {
        writer.uint32(85);
        writer.sfixed32(message.sfixed32_value);
      }

      if (message.sfixed64_value !== null) {
        writer.uint32(89);
        writer.sfixed64(message.sfixed64_value);
      }

      if (message.bool_value !== null) {
        writer.uint32(96);
        writer.bool(message.bool_value);
      }

      if (message.string_value !== null) {
        writer.uint32(106);
        writer.string(message.string_value);
      }

      if (message.bytes_value !== null) {
        writer.uint32(114);
        writer.bytes(message.bytes_value);
      }
    }

    static decode(reader: Reader, length: i32): value_type {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new value_type();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.message_value = any.Any.decode(reader, reader.uint32());

            message.int32_value = null;
            message.int64_value = null;
            message.uint32_value = null;
            message.uint64_value = null;
            message.sint32_value = null;
            message.sint64_value = null;
            message.fixed32_value = null;
            message.fixed64_value = null;
            message.sfixed32_value = null;
            message.sfixed64_value = null;
            message.bool_value = null;
            message.string_value = null;
            message.bytes_value = null;

            break;

          case 2:
            message.int32_value = reader.int32();

            message.message_value = null;
            message.int64_value = null;
            message.uint32_value = null;
            message.uint64_value = null;
            message.sint32_value = null;
            message.sint64_value = null;
            message.fixed32_value = null;
            message.fixed64_value = null;
            message.sfixed32_value = null;
            message.sfixed64_value = null;
            message.bool_value = null;
            message.string_value = null;
            message.bytes_value = null;

            break;

          case 3:
            message.int64_value = reader.int64();

            message.message_value = null;
            message.int32_value = null;
            message.uint32_value = null;
            message.uint64_value = null;
            message.sint32_value = null;
            message.sint64_value = null;
            message.fixed32_value = null;
            message.fixed64_value = null;
            message.sfixed32_value = null;
            message.sfixed64_value = null;
            message.bool_value = null;
            message.string_value = null;
            message.bytes_value = null;

            break;

          case 4:
            message.uint32_value = reader.uint32();

            message.message_value = null;
            message.int32_value = null;
            message.int64_value = null;
            message.uint64_value = null;
            message.sint32_value = null;
            message.sint64_value = null;
            message.fixed32_value = null;
            message.fixed64_value = null;
            message.sfixed32_value = null;
            message.sfixed64_value = null;
            message.bool_value = null;
            message.string_value = null;
            message.bytes_value = null;

            break;

          case 5:
            message.uint64_value = reader.uint64();

            message.message_value = null;
            message.int32_value = null;
            message.int64_value = null;
            message.uint32_value = null;
            message.sint32_value = null;
            message.sint64_value = null;
            message.fixed32_value = null;
            message.fixed64_value = null;
            message.sfixed32_value = null;
            message.sfixed64_value = null;
            message.bool_value = null;
            message.string_value = null;
            message.bytes_value = null;

            break;

          case 6:
            message.sint32_value = reader.sint32();

            message.message_value = null;
            message.int32_value = null;
            message.int64_value = null;
            message.uint32_value = null;
            message.uint64_value = null;
            message.sint64_value = null;
            message.fixed32_value = null;
            message.fixed64_value = null;
            message.sfixed32_value = null;
            message.sfixed64_value = null;
            message.bool_value = null;
            message.string_value = null;
            message.bytes_value = null;

            break;

          case 7:
            message.sint64_value = reader.sint64();

            message.message_value = null;
            message.int32_value = null;
            message.int64_value = null;
            message.uint32_value = null;
            message.uint64_value = null;
            message.sint32_value = null;
            message.fixed32_value = null;
            message.fixed64_value = null;
            message.sfixed32_value = null;
            message.sfixed64_value = null;
            message.bool_value = null;
            message.string_value = null;
            message.bytes_value = null;

            break;

          case 8:
            message.fixed32_value = reader.fixed32();

            message.message_value = null;
            message.int32_value = null;
            message.int64_value = null;
            message.uint32_value = null;
            message.uint64_value = null;
            message.sint32_value = null;
            message.sint64_value = null;
            message.fixed64_value = null;
            message.sfixed32_value = null;
            message.sfixed64_value = null;
            message.bool_value = null;
            message.string_value = null;
            message.bytes_value = null;

            break;

          case 9:
            message.fixed64_value = reader.fixed64();

            message.message_value = null;
            message.int32_value = null;
            message.int64_value = null;
            message.uint32_value = null;
            message.uint64_value = null;
            message.sint32_value = null;
            message.sint64_value = null;
            message.fixed32_value = null;
            message.sfixed32_value = null;
            message.sfixed64_value = null;
            message.bool_value = null;
            message.string_value = null;
            message.bytes_value = null;

            break;

          case 10:
            message.sfixed32_value = reader.sfixed32();

            message.message_value = null;
            message.int32_value = null;
            message.int64_value = null;
            message.uint32_value = null;
            message.uint64_value = null;
            message.sint32_value = null;
            message.sint64_value = null;
            message.fixed32_value = null;
            message.fixed64_value = null;
            message.sfixed64_value = null;
            message.bool_value = null;
            message.string_value = null;
            message.bytes_value = null;

            break;

          case 11:
            message.sfixed64_value = reader.sfixed64();

            message.message_value = null;
            message.int32_value = null;
            message.int64_value = null;
            message.uint32_value = null;
            message.uint64_value = null;
            message.sint32_value = null;
            message.sint64_value = null;
            message.fixed32_value = null;
            message.fixed64_value = null;
            message.sfixed32_value = null;
            message.bool_value = null;
            message.string_value = null;
            message.bytes_value = null;

            break;

          case 12:
            message.bool_value = reader.bool();

            message.message_value = null;
            message.int32_value = null;
            message.int64_value = null;
            message.uint32_value = null;
            message.uint64_value = null;
            message.sint32_value = null;
            message.sint64_value = null;
            message.fixed32_value = null;
            message.fixed64_value = null;
            message.sfixed32_value = null;
            message.sfixed64_value = null;
            message.string_value = null;
            message.bytes_value = null;

            break;

          case 13:
            message.string_value = reader.string();

            message.message_value = null;
            message.int32_value = null;
            message.int64_value = null;
            message.uint32_value = null;
            message.uint64_value = null;
            message.sint32_value = null;
            message.sint64_value = null;
            message.fixed32_value = null;
            message.fixed64_value = null;
            message.sfixed32_value = null;
            message.sfixed64_value = null;
            message.bool_value = null;
            message.bytes_value = null;

            break;

          case 14:
            message.bytes_value = reader.bytes();

            message.message_value = null;
            message.int32_value = null;
            message.int64_value = null;
            message.uint32_value = null;
            message.uint64_value = null;
            message.sint32_value = null;
            message.sint64_value = null;
            message.fixed32_value = null;
            message.fixed64_value = null;
            message.sfixed32_value = null;
            message.sfixed64_value = null;
            message.bool_value = null;
            message.string_value = null;

            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    message_value: any.Any | null;
    int32_value: i32 | null;
    int64_value: i64 | null;
    uint32_value: u32 | null;
    uint64_value: u64 | null;
    sint32_value: i32 | null;
    sint64_value: i64 | null;
    fixed32_value: i32 | null;
    fixed64_value: i64 | null;
    sfixed32_value: i32 | null;
    sfixed64_value: i64 | null;
    bool_value: bool | null;
    string_value: string | null;
    bytes_value: Uint8Array | null;

    constructor(
      message_value: any.Any | null = null,
      int32_value: i32 | null = null,
      int64_value: i64 | null = null,
      uint32_value: u32 | null = null,
      uint64_value: u64 | null = null,
      sint32_value: i32 | null = null,
      sint64_value: i64 | null = null,
      fixed32_value: i32 | null = null,
      fixed64_value: i64 | null = null,
      sfixed32_value: i32 | null = null,
      sfixed64_value: i64 | null = null,
      bool_value: bool | null = null,
      string_value: string | null = null,
      bytes_value: Uint8Array | null = null
    ) {
      this.message_value = message_value;
      this.int32_value = int32_value;
      this.int64_value = int64_value;
      this.uint32_value = uint32_value;
      this.uint64_value = uint64_value;
      this.sint32_value = sint32_value;
      this.sint64_value = sint64_value;
      this.fixed32_value = fixed32_value;
      this.fixed64_value = fixed64_value;
      this.sfixed32_value = sfixed32_value;
      this.sfixed64_value = sfixed64_value;
      this.bool_value = bool_value;
      this.string_value = string_value;
      this.bytes_value = bytes_value;
    }
  }

  export class enum_type {
    static encode(message: enum_type, writer: Writer): void {
      if (message.name.length != 0) {
        writer.uint32(10);
        writer.string(message.name);
      }

      if (message.number != 0) {
        writer.uint32(16);
        writer.int32(message.number);
      }
    }

    static decode(reader: Reader, length: i32): enum_type {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new enum_type();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.name = reader.string();
            break;

          case 2:
            message.number = reader.int32();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    name: string;
    number: i32;

    constructor(name: string = "", number: i32 = 0) {
      this.name = name;
      this.number = number;
    }
  }

  export class list_type {
    static encode(message: list_type, writer: Writer): void {
      const unique_name_values = message.values;
      for (let i = 0; i < unique_name_values.length; ++i) {
        writer.uint32(10);
        writer.fork();
        value_type.encode(unique_name_values[i], writer);
        writer.ldelim();
      }
    }

    static decode(reader: Reader, length: i32): list_type {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new list_type();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.values.push(value_type.decode(reader, reader.uint32()));
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    values: Array<value_type>;

    constructor(values: Array<value_type> = []) {
      this.values = values;
    }
  }
}
