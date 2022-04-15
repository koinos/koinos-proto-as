import { Writer, Reader } from "as-proto";

@unmanaged
export class market {
  static encode(message: market, writer: Writer): void {
    writer.uint32(8);
    writer.uint64(message.resource_supply);

    writer.uint32(16);
    writer.uint64(message.rc_reserve);

    writer.uint32(24);
    writer.uint64(message.block_budget);

    writer.uint32(32);
    writer.uint64(message.block_limit);
  }

  static decode(reader: Reader, length: i32): market {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new market();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resource_supply = reader.uint64();
          break;

        case 2:
          message.rc_reserve = reader.uint64();
          break;

        case 3:
          message.block_budget = reader.uint64();
          break;

        case 4:
          message.block_limit = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  resource_supply: u64;
  rc_reserve: u64;
  block_budget: u64;
  block_limit: u64;

  constructor(
    resource_supply: u64 = 0,
    rc_reserve: u64 = 0,
    block_budget: u64 = 0,
    block_limit: u64 = 0
  ) {
    this.resource_supply = resource_supply;
    this.rc_reserve = rc_reserve;
    this.block_budget = block_budget;
    this.block_limit = block_limit;
  }
}

@unmanaged
export class resource_markets {
  static encode(message: resource_markets, writer: Writer): void {
    const field_disk_storage = message.disk_storage;
    if (field_disk_storage !== null) {
      writer.uint32(10);
      writer.fork();
      market.encode(field_disk_storage, writer);
      writer.ldelim();
    }

    const field_network_bandwidth = message.network_bandwidth;
    if (field_network_bandwidth !== null) {
      writer.uint32(18);
      writer.fork();
      market.encode(field_network_bandwidth, writer);
      writer.ldelim();
    }

    const field_compute_bandwidth = message.compute_bandwidth;
    if (field_compute_bandwidth !== null) {
      writer.uint32(26);
      writer.fork();
      market.encode(field_compute_bandwidth, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): resource_markets {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new resource_markets();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.disk_storage = market.decode(reader, reader.uint32());
          break;

        case 2:
          message.network_bandwidth = market.decode(reader, reader.uint32());
          break;

        case 3:
          message.compute_bandwidth = market.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  disk_storage: market | null;
  network_bandwidth: market | null;
  compute_bandwidth: market | null;

  constructor(
    disk_storage: market | null = null,
    network_bandwidth: market | null = null,
    compute_bandwidth: market | null = null
  ) {
    this.disk_storage = disk_storage;
    this.network_bandwidth = network_bandwidth;
    this.compute_bandwidth = compute_bandwidth;
  }
}

@unmanaged
export class get_resource_markets_arguments {
  static encode(
    message: get_resource_markets_arguments,
    writer: Writer
  ): void {}

  static decode(reader: Reader, length: i32): get_resource_markets_arguments {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new get_resource_markets_arguments();

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
export class get_resource_markets_result {
  static encode(message: get_resource_markets_result, writer: Writer): void {
    const field_value = message.value;
    if (field_value !== null) {
      writer.uint32(10);
      writer.fork();
      resource_markets.encode(field_value, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): get_resource_markets_result {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new get_resource_markets_result();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = resource_markets.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  value: resource_markets | null;

  constructor(value: resource_markets | null = null) {
    this.value = value;
  }
}
