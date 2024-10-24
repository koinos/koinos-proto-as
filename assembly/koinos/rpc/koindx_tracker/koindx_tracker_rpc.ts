import { Writer, Reader } from "as-proto";
import { rpc } from "../rpc";

export namespace koindx_tracker_rpc {
  export class pool_pair {
    static encode(message: pool_pair, writer: Writer): void {
      if (message.pool.length != 0) {
        writer.uint32(10);
        writer.bytes(message.pool);
      }

      if (message.token_a.length != 0) {
        writer.uint32(18);
        writer.string(message.token_a);
      }

      if (message.token_b.length != 0) {
        writer.uint32(26);
        writer.string(message.token_b);
      }
    }

    static decode(reader: Reader, length: i32): pool_pair {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new pool_pair();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.pool = reader.bytes();
            break;

          case 2:
            message.token_a = reader.string();
            break;

          case 3:
            message.token_b = reader.string();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    pool: Uint8Array;
    token_a: string;
    token_b: string;

    constructor(
      pool: Uint8Array = new Uint8Array(0),
      token_a: string = "",
      token_b: string = ""
    ) {
      this.pool = pool;
      this.token_a = token_a;
      this.token_b = token_b;
    }
  }

  export class get_pools_request {
    static encode(message: get_pools_request, writer: Writer): void {
      if (message.start.length != 0) {
        writer.uint32(10);
        writer.bytes(message.start);
      }

      if (message.pool.length != 0) {
        writer.uint32(18);
        writer.bytes(message.pool);
      }

      if (message.limit != 0) {
        writer.uint32(24);
        writer.uint64(message.limit);
      }
    }

    static decode(reader: Reader, length: i32): get_pools_request {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_pools_request();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.start = reader.bytes();
            break;

          case 2:
            message.pool = reader.bytes();
            break;

          case 3:
            message.limit = reader.uint64();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    start: Uint8Array;
    pool: Uint8Array;
    limit: u64;

    constructor(
      start: Uint8Array = new Uint8Array(0),
      pool: Uint8Array = new Uint8Array(0),
      limit: u64 = 0
    ) {
      this.start = start;
      this.pool = pool;
      this.limit = limit;
    }
  }

  export class get_pools_response {
    static encode(message: get_pools_response, writer: Writer): void {
      const unique_name_values = message.values;
      for (let i = 0; i < unique_name_values.length; ++i) {
        writer.uint32(10);
        writer.fork();
        pool_pair.encode(unique_name_values[i], writer);
        writer.ldelim();
      }
    }

    static decode(reader: Reader, length: i32): get_pools_response {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_pools_response();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.values.push(pool_pair.decode(reader, reader.uint32()));
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    values: Array<pool_pair>;

    constructor(values: Array<pool_pair> = []) {
      this.values = values;
    }
  }

  export class account_liquidity {
    static encode(message: account_liquidity, writer: Writer): void {
      if (message.address.length != 0) {
        writer.uint32(10);
        writer.bytes(message.address);
      }

      if (message.balance != 0) {
        writer.uint32(16);
        writer.uint64(message.balance);
      }

      if (message.coin_ms_hi != 0) {
        writer.uint32(24);
        writer.uint64(message.coin_ms_hi);
      }

      if (message.coin_ms_lo != 0) {
        writer.uint32(32);
        writer.uint64(message.coin_ms_lo);
      }
    }

    static decode(reader: Reader, length: i32): account_liquidity {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new account_liquidity();

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
            message.coin_ms_hi = reader.uint64();
            break;

          case 4:
            message.coin_ms_lo = reader.uint64();
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
    coin_ms_hi: u64;
    coin_ms_lo: u64;

    constructor(
      address: Uint8Array = new Uint8Array(0),
      balance: u64 = 0,
      coin_ms_hi: u64 = 0,
      coin_ms_lo: u64 = 0
    ) {
      this.address = address;
      this.balance = balance;
      this.coin_ms_hi = coin_ms_hi;
      this.coin_ms_lo = coin_ms_lo;
    }
  }

  export class get_liquidity_request {
    static encode(message: get_liquidity_request, writer: Writer): void {
      if (message.pool.length != 0) {
        writer.uint32(10);
        writer.bytes(message.pool);
      }

      if (message.start.length != 0) {
        writer.uint32(18);
        writer.bytes(message.start);
      }

      if (message.limit != 0) {
        writer.uint32(24);
        writer.uint64(message.limit);
      }

      if (message.start_ms != 0) {
        writer.uint32(32);
        writer.uint64(message.start_ms);
      }

      if (message.end_ms != 0) {
        writer.uint32(40);
        writer.uint64(message.end_ms);
      }
    }

    static decode(reader: Reader, length: i32): get_liquidity_request {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_liquidity_request();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.pool = reader.bytes();
            break;

          case 2:
            message.start = reader.bytes();
            break;

          case 3:
            message.limit = reader.uint64();
            break;

          case 4:
            message.start_ms = reader.uint64();
            break;

          case 5:
            message.end_ms = reader.uint64();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    pool: Uint8Array;
    start: Uint8Array;
    limit: u64;
    start_ms: u64;
    end_ms: u64;

    constructor(
      pool: Uint8Array = new Uint8Array(0),
      start: Uint8Array = new Uint8Array(0),
      limit: u64 = 0,
      start_ms: u64 = 0,
      end_ms: u64 = 0
    ) {
      this.pool = pool;
      this.start = start;
      this.limit = limit;
      this.start_ms = start_ms;
      this.end_ms = end_ms;
    }
  }

  export class get_liquidity_response {
    static encode(message: get_liquidity_response, writer: Writer): void {
      const unique_name_values = message.values;
      for (let i = 0; i < unique_name_values.length; ++i) {
        writer.uint32(10);
        writer.fork();
        account_liquidity.encode(unique_name_values[i], writer);
        writer.ldelim();
      }
    }

    static decode(reader: Reader, length: i32): get_liquidity_response {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_liquidity_response();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.values.push(
              account_liquidity.decode(reader, reader.uint32())
            );
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    values: Array<account_liquidity>;

    constructor(values: Array<account_liquidity> = []) {
      this.values = values;
    }
  }

  export class pool_tvl {
    static encode(message: pool_tvl, writer: Writer): void {
      if (message.pool.length != 0) {
        writer.uint32(10);
        writer.bytes(message.pool);
      }

      if (message.tvl != 0) {
        writer.uint32(16);
        writer.uint64(message.tvl);
      }
    }

    static decode(reader: Reader, length: i32): pool_tvl {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new pool_tvl();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.pool = reader.bytes();
            break;

          case 2:
            message.tvl = reader.uint64();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    pool: Uint8Array;
    tvl: u64;

    constructor(pool: Uint8Array = new Uint8Array(0), tvl: u64 = 0) {
      this.pool = pool;
      this.tvl = tvl;
    }
  }

  export class get_tvl_request {
    static encode(message: get_tvl_request, writer: Writer): void {
      if (message.start.length != 0) {
        writer.uint32(10);
        writer.bytes(message.start);
      }

      if (message.pool.length != 0) {
        writer.uint32(18);
        writer.bytes(message.pool);
      }

      if (message.limit != 0) {
        writer.uint32(24);
        writer.uint64(message.limit);
      }

      if (message.ms != 0) {
        writer.uint32(32);
        writer.uint64(message.ms);
      }
    }

    static decode(reader: Reader, length: i32): get_tvl_request {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_tvl_request();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.start = reader.bytes();
            break;

          case 2:
            message.pool = reader.bytes();
            break;

          case 3:
            message.limit = reader.uint64();
            break;

          case 4:
            message.ms = reader.uint64();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    start: Uint8Array;
    pool: Uint8Array;
    limit: u64;
    ms: u64;

    constructor(
      start: Uint8Array = new Uint8Array(0),
      pool: Uint8Array = new Uint8Array(0),
      limit: u64 = 0,
      ms: u64 = 0
    ) {
      this.start = start;
      this.pool = pool;
      this.limit = limit;
      this.ms = ms;
    }
  }

  export class get_tvl_response {
    static encode(message: get_tvl_response, writer: Writer): void {
      const unique_name_values = message.values;
      for (let i = 0; i < unique_name_values.length; ++i) {
        writer.uint32(10);
        writer.fork();
        pool_tvl.encode(unique_name_values[i], writer);
        writer.ldelim();
      }
    }

    static decode(reader: Reader, length: i32): get_tvl_response {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_tvl_response();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.values.push(pool_tvl.decode(reader, reader.uint32()));
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    values: Array<pool_tvl>;

    constructor(values: Array<pool_tvl> = []) {
      this.values = values;
    }
  }

  export class koindx_tracker_request {
    static encode(message: koindx_tracker_request, writer: Writer): void {
      const unique_name_reserved = message.reserved;
      if (unique_name_reserved !== null) {
        writer.uint32(10);
        writer.fork();
        rpc.reserved_rpc.encode(unique_name_reserved, writer);
        writer.ldelim();
      }

      const unique_name_get_pools = message.get_pools;
      if (unique_name_get_pools !== null) {
        writer.uint32(18);
        writer.fork();
        get_pools_request.encode(unique_name_get_pools, writer);
        writer.ldelim();
      }

      const unique_name_get_liquidity = message.get_liquidity;
      if (unique_name_get_liquidity !== null) {
        writer.uint32(26);
        writer.fork();
        get_liquidity_request.encode(unique_name_get_liquidity, writer);
        writer.ldelim();
      }

      const unique_name_get_tvl = message.get_tvl;
      if (unique_name_get_tvl !== null) {
        writer.uint32(34);
        writer.fork();
        get_tvl_request.encode(unique_name_get_tvl, writer);
        writer.ldelim();
      }
    }

    static decode(reader: Reader, length: i32): koindx_tracker_request {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new koindx_tracker_request();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.reserved = rpc.reserved_rpc.decode(reader, reader.uint32());
            break;

          case 2:
            message.get_pools = get_pools_request.decode(
              reader,
              reader.uint32()
            );
            break;

          case 3:
            message.get_liquidity = get_liquidity_request.decode(
              reader,
              reader.uint32()
            );
            break;

          case 4:
            message.get_tvl = get_tvl_request.decode(reader, reader.uint32());
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    reserved: rpc.reserved_rpc | null;
    get_pools: get_pools_request | null;
    get_liquidity: get_liquidity_request | null;
    get_tvl: get_tvl_request | null;

    constructor(
      reserved: rpc.reserved_rpc | null = null,
      get_pools: get_pools_request | null = null,
      get_liquidity: get_liquidity_request | null = null,
      get_tvl: get_tvl_request | null = null
    ) {
      this.reserved = reserved;
      this.get_pools = get_pools;
      this.get_liquidity = get_liquidity;
      this.get_tvl = get_tvl;
    }
  }

  export class koindx_tracker_response {
    static encode(message: koindx_tracker_response, writer: Writer): void {
      const unique_name_reserved = message.reserved;
      if (unique_name_reserved !== null) {
        writer.uint32(10);
        writer.fork();
        rpc.reserved_rpc.encode(unique_name_reserved, writer);
        writer.ldelim();
      }

      const unique_name_error = message.error;
      if (unique_name_error !== null) {
        writer.uint32(18);
        writer.fork();
        rpc.error_status.encode(unique_name_error, writer);
        writer.ldelim();
      }

      const unique_name_get_pools = message.get_pools;
      if (unique_name_get_pools !== null) {
        writer.uint32(26);
        writer.fork();
        get_pools_response.encode(unique_name_get_pools, writer);
        writer.ldelim();
      }

      const unique_name_get_liquidity = message.get_liquidity;
      if (unique_name_get_liquidity !== null) {
        writer.uint32(34);
        writer.fork();
        get_liquidity_response.encode(unique_name_get_liquidity, writer);
        writer.ldelim();
      }

      const unique_name_get_tvl = message.get_tvl;
      if (unique_name_get_tvl !== null) {
        writer.uint32(42);
        writer.fork();
        get_tvl_response.encode(unique_name_get_tvl, writer);
        writer.ldelim();
      }
    }

    static decode(reader: Reader, length: i32): koindx_tracker_response {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new koindx_tracker_response();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.reserved = rpc.reserved_rpc.decode(reader, reader.uint32());
            break;

          case 2:
            message.error = rpc.error_status.decode(reader, reader.uint32());
            break;

          case 3:
            message.get_pools = get_pools_response.decode(
              reader,
              reader.uint32()
            );
            break;

          case 4:
            message.get_liquidity = get_liquidity_response.decode(
              reader,
              reader.uint32()
            );
            break;

          case 5:
            message.get_tvl = get_tvl_response.decode(reader, reader.uint32());
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    reserved: rpc.reserved_rpc | null;
    error: rpc.error_status | null;
    get_pools: get_pools_response | null;
    get_liquidity: get_liquidity_response | null;
    get_tvl: get_tvl_response | null;

    constructor(
      reserved: rpc.reserved_rpc | null = null,
      error: rpc.error_status | null = null,
      get_pools: get_pools_response | null = null,
      get_liquidity: get_liquidity_response | null = null,
      get_tvl: get_tvl_response | null = null
    ) {
      this.reserved = reserved;
      this.error = error;
      this.get_pools = get_pools;
      this.get_liquidity = get_liquidity;
      this.get_tvl = get_tvl;
    }
  }
}
