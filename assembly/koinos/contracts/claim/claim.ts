import { Writer, Reader } from "as-proto";

export namespace claim {
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
      const unique_name_eth_address = message.eth_address;
      if (unique_name_eth_address !== null) {
        writer.uint32(10);
        writer.bytes(unique_name_eth_address);
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

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    eth_address: Uint8Array | null;

    constructor(eth_address: Uint8Array | null = null) {
      this.eth_address = eth_address;
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
}
