import { Writer, Reader } from "as-proto";

export namespace koindx_tracker {
  export class liquidity_record {
    static encode(message: liquidity_record, writer: Writer): void {
      if (message.address.length != 0) {
        writer.uint32(10);
        writer.bytes(message.address);
      }

      if (message.balance != 0) {
        writer.uint32(16);
        writer.uint64(message.balance);
      }

      if (message.prev_coin_ms_hi != 0) {
        writer.uint32(24);
        writer.uint64(message.prev_coin_ms_hi);
      }

      if (message.prev_coin_ms_lo != 0) {
        writer.uint32(32);
        writer.uint64(message.prev_coin_ms_lo);
      }

      if (message.last_update != 0) {
        writer.uint32(40);
        writer.uint64(message.last_update);
      }
    }

    static decode(reader: Reader, length: i32): liquidity_record {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new liquidity_record();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.address = reader.bytes();
            break;

          case 2:
            message.balance = reader.uint64();
            break;

          case 3:
            message.prev_coin_ms_hi = reader.uint64();
            break;

          case 4:
            message.prev_coin_ms_lo = reader.uint64();
            break;

          case 5:
            message.last_update = reader.uint64();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    address: Uint8Array;
    balance: u64;
    prev_coin_ms_hi: u64;
    prev_coin_ms_lo: u64;
    last_update: u64;

    constructor(
      address: Uint8Array = new Uint8Array(0),
      balance: u64 = 0,
      prev_coin_ms_hi: u64 = 0,
      prev_coin_ms_lo: u64 = 0,
      last_update: u64 = 0
    ) {
      this.address = address;
      this.balance = balance;
      this.prev_coin_ms_hi = prev_coin_ms_hi;
      this.prev_coin_ms_lo = prev_coin_ms_lo;
      this.last_update = last_update;
    }
  }

  @unmanaged
  export class tvl_record {
    static encode(message: tvl_record, writer: Writer): void {
      if (message.value != 0) {
        writer.uint32(8);
        writer.uint64(message.value);
      }
    }

    static decode(reader: Reader, length: i32): tvl_record {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new tvl_record();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.value = reader.uint64();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    value: u64;

    constructor(value: u64 = 0) {
      this.value = value;
    }
  }

  export class initialize_event {
    static encode(message: initialize_event, writer: Writer): void {
      if (message.token_a.length != 0) {
        writer.uint32(10);
        writer.string(message.token_a);
      }

      if (message.token_b.length != 0) {
        writer.uint32(18);
        writer.string(message.token_b);
      }
    }

    static decode(reader: Reader, length: i32): initialize_event {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new initialize_event();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.token_a = reader.string();
            break;

          case 2:
            message.token_b = reader.string();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    token_a: string;
    token_b: string;

    constructor(token_a: string = "", token_b: string = "") {
      this.token_a = token_a;
      this.token_b = token_b;
    }
  }

  @unmanaged
  export class sync_event {
    static encode(message: sync_event, writer: Writer): void {
      if (message.reserve_a != 0) {
        writer.uint32(8);
        writer.uint64(message.reserve_a);
      }

      if (message.reserve_b != 0) {
        writer.uint32(16);
        writer.uint64(message.reserve_b);
      }
    }

    static decode(reader: Reader, length: i32): sync_event {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new sync_event();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.reserve_a = reader.uint64();
            break;

          case 2:
            message.reserve_b = reader.uint64();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    reserve_a: u64;
    reserve_b: u64;

    constructor(reserve_a: u64 = 0, reserve_b: u64 = 0) {
      this.reserve_a = reserve_a;
      this.reserve_b = reserve_b;
    }
  }
}
