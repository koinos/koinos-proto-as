import { Writer, Reader } from "as-proto";

export namespace claim {
  @unmanaged
  export class claim_info {
    static encode(message: claim_info, writer: Writer): void {
      if (message.total_eth_accounts != 0) {
        writer.uint32(8);
        writer.uint32(message.total_eth_accounts);
      }

      if (message.eth_accounts_claimed != 0) {
        writer.uint32(16);
        writer.uint32(message.eth_accounts_claimed);
      }

      if (message.total_koin != 0) {
        writer.uint32(24);
        writer.uint64(message.total_koin);
      }

      if (message.koin_claimed != 0) {
        writer.uint32(32);
        writer.uint64(message.koin_claimed);
      }
    }

    static decode(reader: Reader, length: i32): claim_info {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new claim_info();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.total_eth_accounts = reader.uint32();
            break;

          case 2:
            message.eth_accounts_claimed = reader.uint32();
            break;

          case 3:
            message.total_koin = reader.uint64();
            break;

          case 4:
            message.koin_claimed = reader.uint64();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    total_eth_accounts: u32;
    eth_accounts_claimed: u32;
    total_koin: u64;
    koin_claimed: u64;

    constructor(
      total_eth_accounts: u32 = 0,
      eth_accounts_claimed: u32 = 0,
      total_koin: u64 = 0,
      koin_claimed: u64 = 0
    ) {
      this.total_eth_accounts = total_eth_accounts;
      this.eth_accounts_claimed = eth_accounts_claimed;
      this.total_koin = total_koin;
      this.koin_claimed = koin_claimed;
    }
  }

  @unmanaged
  export class claim_status {
    static encode(message: claim_status, writer: Writer): void {
      if (message.token_amount != 0) {
        writer.uint32(8);
        writer.uint64(message.token_amount);
      }

      if (message.claimed != false) {
        writer.uint32(16);
        writer.bool(message.claimed);
      }
    }

    static decode(reader: Reader, length: i32): claim_status {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new claim_status();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.token_amount = reader.uint64();
            break;

          case 2:
            message.claimed = reader.bool();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    token_amount: u64;
    claimed: bool;

    constructor(token_amount: u64 = 0, claimed: bool = false) {
      this.token_amount = token_amount;
      this.claimed = claimed;
    }
  }

  export class claim_arguments {
    static encode(message: claim_arguments, writer: Writer): void {
      if (message.eth_address.length != 0) {
        writer.uint32(10);
        writer.bytes(message.eth_address);
      }

      if (message.koin_address.length != 0) {
        writer.uint32(18);
        writer.bytes(message.koin_address);
      }

      if (message.signature.length != 0) {
        writer.uint32(26);
        writer.bytes(message.signature);
      }
    }

    static decode(reader: Reader, length: i32): claim_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new claim_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.eth_address = reader.bytes();
            break;

          case 2:
            message.koin_address = reader.bytes();
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

    eth_address: Uint8Array;
    koin_address: Uint8Array;
    signature: Uint8Array;

    constructor(
      eth_address: Uint8Array = new Uint8Array(0),
      koin_address: Uint8Array = new Uint8Array(0),
      signature: Uint8Array = new Uint8Array(0)
    ) {
      this.eth_address = eth_address;
      this.koin_address = koin_address;
      this.signature = signature;
    }
  }

  @unmanaged
  export class claim_result {
    static encode(message: claim_result, writer: Writer): void {}

    static decode(reader: Reader, length: i32): claim_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new claim_result();

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
  export class get_info_arguments {
    static encode(message: get_info_arguments, writer: Writer): void {}

    static decode(reader: Reader, length: i32): get_info_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_info_arguments();

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
  export class get_info_result {
    static encode(message: get_info_result, writer: Writer): void {
      const unique_name_value = message.value;
      if (unique_name_value !== null) {
        writer.uint32(10);
        writer.fork();
        claim_info.encode(unique_name_value, writer);
        writer.ldelim();
      }
    }

    static decode(reader: Reader, length: i32): get_info_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_info_result();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.value = claim_info.decode(reader, reader.uint32());
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    value: claim_info | null;

    constructor(value: claim_info | null = null) {
      this.value = value;
    }
  }

  export class check_claim_arguments {
    static encode(message: check_claim_arguments, writer: Writer): void {
      if (message.eth_address.length != 0) {
        writer.uint32(10);
        writer.bytes(message.eth_address);
      }
    }

    static decode(reader: Reader, length: i32): check_claim_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new check_claim_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.eth_address = reader.bytes();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    eth_address: Uint8Array;

    constructor(eth_address: Uint8Array = new Uint8Array(0)) {
      this.eth_address = eth_address;
    }
  }

  @unmanaged
  export class check_claim_result {
    static encode(message: check_claim_result, writer: Writer): void {
      const unique_name_value = message.value;
      if (unique_name_value !== null) {
        writer.uint32(10);
        writer.fork();
        claim_status.encode(unique_name_value, writer);
        writer.ldelim();
      }
    }

    static decode(reader: Reader, length: i32): check_claim_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new check_claim_result();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.value = claim_status.decode(reader, reader.uint32());
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    value: claim_status | null;

    constructor(value: claim_status | null = null) {
      this.value = value;
    }
  }
}
