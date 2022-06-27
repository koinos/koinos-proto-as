import { Writer, Reader } from "as-proto";

export namespace pob {
  export class public_key_record {
    static encode(message: public_key_record, writer: Writer): void {
      const unique_name_public_key = message.public_key;
      if (unique_name_public_key !== null) {
        writer.uint32(10);
        writer.bytes(unique_name_public_key);
      }
    }

    static decode(reader: Reader, length: i32): public_key_record {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new public_key_record();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.public_key = reader.bytes();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    public_key: Uint8Array | null;

    constructor(public_key: Uint8Array | null = null) {
      this.public_key = public_key;
    }
  }

  export class metadata {
    static encode(message: metadata, writer: Writer): void {
      const unique_name_seed = message.seed;
      if (unique_name_seed !== null) {
        writer.uint32(10);
        writer.bytes(unique_name_seed);
      }

      const unique_name_difficulty = message.difficulty;
      if (unique_name_difficulty !== null) {
        writer.uint32(18);
        writer.bytes(unique_name_difficulty);
      }

      if (message.last_block_time != 0) {
        writer.uint32(24);
        writer.uint64(message.last_block_time);
      }

      if (message.target_block_interval != 0) {
        writer.uint32(32);
        writer.uint64(message.target_block_interval);
      }
    }

    static decode(reader: Reader, length: i32): metadata {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new metadata();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.seed = reader.bytes();
            break;

          case 2:
            message.difficulty = reader.bytes();
            break;

          case 3:
            message.last_block_time = reader.uint64();
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

    seed: Uint8Array | null;
    difficulty: Uint8Array | null;
    last_block_time: u64;
    target_block_interval: u64;

    constructor(
      seed: Uint8Array | null = null,
      difficulty: Uint8Array | null = null,
      last_block_time: u64 = 0,
      target_block_interval: u64 = 0
    ) {
      this.seed = seed;
      this.difficulty = difficulty;
      this.last_block_time = last_block_time;
      this.target_block_interval = target_block_interval;
    }
  }

  export class signature_data {
    static encode(message: signature_data, writer: Writer): void {
      const unique_name_vrf_proof = message.vrf_proof;
      if (unique_name_vrf_proof !== null) {
        writer.uint32(10);
        writer.bytes(unique_name_vrf_proof);
      }

      const unique_name_vrf_hash = message.vrf_hash;
      if (unique_name_vrf_hash !== null) {
        writer.uint32(18);
        writer.bytes(unique_name_vrf_hash);
      }

      const unique_name_signature = message.signature;
      if (unique_name_signature !== null) {
        writer.uint32(26);
        writer.bytes(unique_name_signature);
      }
    }

    static decode(reader: Reader, length: i32): signature_data {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new signature_data();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.vrf_proof = reader.bytes();
            break;

          case 2:
            message.vrf_hash = reader.bytes();
            break;

          case 3:
            message.signature = reader.bytes();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    vrf_proof: Uint8Array | null;
    vrf_hash: Uint8Array | null;
    signature: Uint8Array | null;

    constructor(
      vrf_proof: Uint8Array | null = null,
      vrf_hash: Uint8Array | null = null,
      signature: Uint8Array | null = null
    ) {
      this.vrf_proof = vrf_proof;
      this.vrf_hash = vrf_hash;
      this.signature = signature;
    }
  }

  export class vrf_payload {
    static encode(message: vrf_payload, writer: Writer): void {
      const unique_name_seed = message.seed;
      if (unique_name_seed !== null) {
        writer.uint32(10);
        writer.bytes(unique_name_seed);
      }

      if (message.block_time != 0) {
        writer.uint32(16);
        writer.uint64(message.block_time);
      }
    }

    static decode(reader: Reader, length: i32): vrf_payload {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new vrf_payload();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.seed = reader.bytes();
            break;

          case 2:
            message.block_time = reader.uint64();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    seed: Uint8Array | null;
    block_time: u64;

    constructor(seed: Uint8Array | null = null, block_time: u64 = 0) {
      this.seed = seed;
      this.block_time = block_time;
    }
  }

  export class register_public_key_arguments {
    static encode(
      message: register_public_key_arguments,
      writer: Writer
    ): void {
      const unique_name_public_key = message.public_key;
      if (unique_name_public_key !== null) {
        writer.uint32(10);
        writer.bytes(unique_name_public_key);
      }
    }

    static decode(reader: Reader, length: i32): register_public_key_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new register_public_key_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.public_key = reader.bytes();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    public_key: Uint8Array | null;

    constructor(public_key: Uint8Array | null = null) {
      this.public_key = public_key;
    }
  }

  @unmanaged
  export class register_public_key_result {
    static encode(message: register_public_key_result, writer: Writer): void {}

    static decode(reader: Reader, length: i32): register_public_key_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new register_public_key_result();

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

  export class burn_arguments {
    static encode(message: burn_arguments, writer: Writer): void {
      if (message.token_amount != 0) {
        writer.uint32(8);
        writer.uint64(message.token_amount);
      }

      const unique_name_burn_address = message.burn_address;
      if (unique_name_burn_address !== null) {
        writer.uint32(18);
        writer.bytes(unique_name_burn_address);
      }

      const unique_name_vhp_address = message.vhp_address;
      if (unique_name_vhp_address !== null) {
        writer.uint32(26);
        writer.bytes(unique_name_vhp_address);
      }
    }

    static decode(reader: Reader, length: i32): burn_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new burn_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.token_amount = reader.uint64();
            break;

          case 2:
            message.burn_address = reader.bytes();
            break;

          case 3:
            message.vhp_address = reader.bytes();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    token_amount: u64;
    burn_address: Uint8Array | null;
    vhp_address: Uint8Array | null;

    constructor(
      token_amount: u64 = 0,
      burn_address: Uint8Array | null = null,
      vhp_address: Uint8Array | null = null
    ) {
      this.token_amount = token_amount;
      this.burn_address = burn_address;
      this.vhp_address = vhp_address;
    }
  }

  @unmanaged
  export class burn_result {
    static encode(message: burn_result, writer: Writer): void {}

    static decode(reader: Reader, length: i32): burn_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new burn_result();

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

  @unmanaged
  export class get_metadata_arguments {
    static encode(message: get_metadata_arguments, writer: Writer): void {}

    static decode(reader: Reader, length: i32): get_metadata_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_metadata_arguments();

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

  export class get_metadata_result {
    static encode(message: get_metadata_result, writer: Writer): void {
      const unique_name_value = message.value;
      if (unique_name_value !== null) {
        writer.uint32(10);
        writer.fork();
        metadata.encode(unique_name_value, writer);
        writer.ldelim();
      }
    }

    static decode(reader: Reader, length: i32): get_metadata_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_metadata_result();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.value = metadata.decode(reader, reader.uint32());
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    value: metadata | null;

    constructor(value: metadata | null = null) {
      this.value = value;
    }
  }

  export class register_public_key_event {
    static encode(message: register_public_key_event, writer: Writer): void {
      const unique_name_public_key = message.public_key;
      if (unique_name_public_key !== null) {
        writer.uint32(10);
        writer.bytes(unique_name_public_key);
      }

      const unique_name_address = message.address;
      if (unique_name_address !== null) {
        writer.uint32(18);
        writer.bytes(unique_name_address);
      }
    }

    static decode(reader: Reader, length: i32): register_public_key_event {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new register_public_key_event();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.public_key = reader.bytes();
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

    public_key: Uint8Array | null;
    address: Uint8Array | null;

    constructor(
      public_key: Uint8Array | null = null,
      address: Uint8Array | null = null
    ) {
      this.public_key = public_key;
      this.address = address;
    }
  }
}
