import { Writer, Reader } from "as-proto";

export namespace pow {
  export class difficulty_metadata {
    static encode(message: difficulty_metadata, writer: Writer): void {
      if (message.target.length != 0) {
        writer.uint32(10);
        writer.bytes(message.target);
      }

      if (message.last_block_time != 0) {
        writer.uint32(16);
        writer.uint64(message.last_block_time);
      }

      if (message.difficulty.length != 0) {
        writer.uint32(26);
        writer.bytes(message.difficulty);
      }

      if (message.target_block_interval != 0) {
        writer.uint32(32);
        writer.uint64(message.target_block_interval);
      }
    }

    static decode(reader: Reader, length: i32): difficulty_metadata {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new difficulty_metadata();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.target = reader.bytes();
            break;

          case 2:
            message.last_block_time = reader.uint64();
            break;

          case 3:
            message.difficulty = reader.bytes();
            break;

          case 4:
            message.target_block_interval = reader.uint64();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    target: Uint8Array;
    last_block_time: u64;
    difficulty: Uint8Array;
    target_block_interval: u64;

    constructor(
      target: Uint8Array = new Uint8Array(0),
      last_block_time: u64 = 0,
      difficulty: Uint8Array = new Uint8Array(0),
      target_block_interval: u64 = 0
    ) {
      this.target = target;
      this.last_block_time = last_block_time;
      this.difficulty = difficulty;
      this.target_block_interval = target_block_interval;
    }
  }

  @unmanaged
  export class get_difficulty_metadata_arguments {
    static encode(
      message: get_difficulty_metadata_arguments,
      writer: Writer
    ): void {}

    static decode(
      reader: Reader,
      length: i32
    ): get_difficulty_metadata_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_difficulty_metadata_arguments();

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

  export class get_difficulty_metadata_result {
    static encode(
      message: get_difficulty_metadata_result,
      writer: Writer
    ): void {
      const unique_name_value = message.value;
      if (unique_name_value !== null) {
        writer.uint32(10);
        writer.fork();
        difficulty_metadata.encode(unique_name_value, writer);
        writer.ldelim();
      }
    }

    static decode(reader: Reader, length: i32): get_difficulty_metadata_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_difficulty_metadata_result();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.value = difficulty_metadata.decode(reader, reader.uint32());
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    value: difficulty_metadata | null;

    constructor(value: difficulty_metadata | null = null) {
      this.value = value;
    }
  }

  export class pow_signature_data {
    static encode(message: pow_signature_data, writer: Writer): void {
      if (message.nonce.length != 0) {
        writer.uint32(10);
        writer.bytes(message.nonce);
      }

      if (message.recoverable_signature.length != 0) {
        writer.uint32(18);
        writer.bytes(message.recoverable_signature);
      }
    }

    static decode(reader: Reader, length: i32): pow_signature_data {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new pow_signature_data();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.nonce = reader.bytes();
            break;

          case 2:
            message.recoverable_signature = reader.bytes();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    nonce: Uint8Array;
    recoverable_signature: Uint8Array;

    constructor(
      nonce: Uint8Array = new Uint8Array(0),
      recoverable_signature: Uint8Array = new Uint8Array(0)
    ) {
      this.nonce = nonce;
      this.recoverable_signature = recoverable_signature;
    }
  }
}
