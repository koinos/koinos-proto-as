import { Writer, Reader } from "as-proto";
import {
  transaction,
  transaction_receipt,
  block,
  block_receipt,
  event_data,
} from "../protocol/protocol";
import { block_topology } from "../common";

export class transaction_accepted {
  static encode(message: transaction_accepted, writer: Writer): void {
    const field_transaction = message.transaction;
    if (field_transaction !== null) {
      writer.uint32(10);
      writer.fork();
      transaction.encode(field_transaction, writer);
      writer.ldelim();
    }

    const field_receipt = message.receipt;
    if (field_receipt !== null) {
      writer.uint32(18);
      writer.fork();
      transaction_receipt.encode(field_receipt, writer);
      writer.ldelim();
    }

    writer.uint32(24);
    writer.uint64(message.height);
  }

  static decode(reader: Reader, length: i32): transaction_accepted {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new transaction_accepted();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transaction = transaction.decode(reader, reader.uint32());
          break;

        case 2:
          message.receipt = transaction_receipt.decode(reader, reader.uint32());
          break;

        case 3:
          message.height = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  transaction: transaction | null;
  receipt: transaction_receipt | null;
  height: u64;

  constructor(
    transaction: transaction | null = null,
    receipt: transaction_receipt | null = null,
    height: u64 = 0
  ) {
    this.transaction = transaction;
    this.receipt = receipt;
    this.height = height;
  }
}

export class transaction_failed {
  static encode(message: transaction_failed, writer: Writer): void {
    const field_id = message.id;
    if (field_id !== null) {
      writer.uint32(10);
      writer.bytes(field_id);
    }
  }

  static decode(reader: Reader, length: i32): transaction_failed {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new transaction_failed();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  id: Uint8Array | null;

  constructor(id: Uint8Array | null = null) {
    this.id = id;
  }
}

export class mempool_accepted {
  static encode(message: mempool_accepted, writer: Writer): void {
    const field_transaction = message.transaction;
    if (field_transaction !== null) {
      writer.uint32(10);
      writer.fork();
      transaction.encode(field_transaction, writer);
      writer.ldelim();
    }

    const field_receipt = message.receipt;
    if (field_receipt !== null) {
      writer.uint32(18);
      writer.fork();
      transaction_receipt.encode(field_receipt, writer);
      writer.ldelim();
    }

    writer.uint32(24);
    writer.uint64(message.height);

    writer.uint32(32);
    writer.uint64(message.pending_rc_used);
  }

  static decode(reader: Reader, length: i32): mempool_accepted {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new mempool_accepted();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transaction = transaction.decode(reader, reader.uint32());
          break;

        case 2:
          message.receipt = transaction_receipt.decode(reader, reader.uint32());
          break;

        case 3:
          message.height = reader.uint64();
          break;

        case 4:
          message.pending_rc_used = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  transaction: transaction | null;
  receipt: transaction_receipt | null;
  height: u64;
  pending_rc_used: u64;

  constructor(
    transaction: transaction | null = null,
    receipt: transaction_receipt | null = null,
    height: u64 = 0,
    pending_rc_used: u64 = 0
  ) {
    this.transaction = transaction;
    this.receipt = receipt;
    this.height = height;
    this.pending_rc_used = pending_rc_used;
  }
}

export class block_accepted {
  static encode(message: block_accepted, writer: Writer): void {
    const field_block = message.block;
    if (field_block !== null) {
      writer.uint32(10);
      writer.fork();
      block.encode(field_block, writer);
      writer.ldelim();
    }

    const field_receipt = message.receipt;
    if (field_receipt !== null) {
      writer.uint32(18);
      writer.fork();
      block_receipt.encode(field_receipt, writer);
      writer.ldelim();
    }

    writer.uint32(24);
    writer.bool(message.live);
  }

  static decode(reader: Reader, length: i32): block_accepted {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new block_accepted();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.block = block.decode(reader, reader.uint32());
          break;

        case 2:
          message.receipt = block_receipt.decode(reader, reader.uint32());
          break;

        case 3:
          message.live = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  block: block | null;
  receipt: block_receipt | null;
  live: bool;

  constructor(
    block: block | null = null,
    receipt: block_receipt | null = null,
    live: bool = false
  ) {
    this.block = block;
    this.receipt = receipt;
    this.live = live;
  }
}

export class block_irreversible {
  static encode(message: block_irreversible, writer: Writer): void {
    const field_topology = message.topology;
    if (field_topology !== null) {
      writer.uint32(10);
      writer.fork();
      block_topology.encode(field_topology, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): block_irreversible {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new block_irreversible();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.topology = block_topology.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  topology: block_topology | null;

  constructor(topology: block_topology | null = null) {
    this.topology = topology;
  }
}

export class fork_heads {
  static encode(message: fork_heads, writer: Writer): void {
    const field_last_irreversible_block = message.last_irreversible_block;
    if (field_last_irreversible_block !== null) {
      writer.uint32(10);
      writer.fork();
      block_topology.encode(field_last_irreversible_block, writer);
      writer.ldelim();
    }

    const field_heads = message.heads;
    for (let i = 0; i < field_heads.length; ++i) {
      writer.uint32(18);
      writer.fork();
      block_topology.encode(field_heads[i], writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): fork_heads {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new fork_heads();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.last_irreversible_block = block_topology.decode(
            reader,
            reader.uint32()
          );
          break;

        case 2:
          message.heads.push(block_topology.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  last_irreversible_block: block_topology | null;
  heads: Array<block_topology>;

  constructor(
    last_irreversible_block: block_topology | null = null,
    heads: Array<block_topology> = []
  ) {
    this.last_irreversible_block = last_irreversible_block;
    this.heads = heads;
  }
}

@unmanaged
export class gossip_status {
  static encode(message: gossip_status, writer: Writer): void {
    writer.uint32(8);
    writer.bool(message.enabled);
  }

  static decode(reader: Reader, length: i32): gossip_status {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new gossip_status();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.enabled = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  enabled: bool;

  constructor(enabled: bool = false) {
    this.enabled = enabled;
  }
}

export class event_parcel {
  static encode(message: event_parcel, writer: Writer): void {
    const field_block_id = message.block_id;
    if (field_block_id !== null) {
      writer.uint32(10);
      writer.bytes(field_block_id);
    }

    writer.uint32(16);
    writer.uint64(message.height);

    const field_transaction_id = message.transaction_id;
    if (field_transaction_id !== null) {
      writer.uint32(26);
      writer.bytes(field_transaction_id);
    }

    const field_event = message.event;
    if (field_event !== null) {
      writer.uint32(34);
      writer.fork();
      event_data.encode(field_event, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): event_parcel {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new event_parcel();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.block_id = reader.bytes();
          break;

        case 2:
          message.height = reader.uint64();
          break;

        case 3:
          message.transaction_id = reader.bytes();
          break;

        case 4:
          message.event = event_data.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  block_id: Uint8Array | null;
  height: u64;
  transaction_id: Uint8Array | null;
  event: event_data | null;

  constructor(
    block_id: Uint8Array | null = null,
    height: u64 = 0,
    transaction_id: Uint8Array | null = null,
    event: event_data | null = null
  ) {
    this.block_id = block_id;
    this.height = height;
    this.transaction_id = transaction_id;
    this.event = event;
  }
}
