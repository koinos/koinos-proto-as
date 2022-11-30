import { Writer, Reader } from "as-proto";
import { protocol } from "../protocol/protocol";
import { common } from "../common";

export namespace broadcast {
  export class transaction_accepted {
    static encode(message: transaction_accepted, writer: Writer): void {
      const unique_name_transaction = message.transaction;
      if (unique_name_transaction !== null) {
        writer.uint32(10);
        writer.fork();
        protocol.transaction.encode(unique_name_transaction, writer);
        writer.ldelim();
      }

      const unique_name_receipt = message.receipt;
      if (unique_name_receipt !== null) {
        writer.uint32(18);
        writer.fork();
        protocol.transaction_receipt.encode(unique_name_receipt, writer);
        writer.ldelim();
      }

      if (message.height != 0) {
        writer.uint32(24);
        writer.uint64(message.height);
      }
    }

    static decode(reader: Reader, length: i32): transaction_accepted {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new transaction_accepted();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.transaction = protocol.transaction.decode(
              reader,
              reader.uint32()
            );
            break;

          case 2:
            message.receipt = protocol.transaction_receipt.decode(
              reader,
              reader.uint32()
            );
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

    transaction: protocol.transaction | null;
    receipt: protocol.transaction_receipt | null;
    height: u64;

    constructor(
      transaction: protocol.transaction | null = null,
      receipt: protocol.transaction_receipt | null = null,
      height: u64 = 0
    ) {
      this.transaction = transaction;
      this.receipt = receipt;
      this.height = height;
    }
  }

  export class transaction_failed {
    static encode(message: transaction_failed, writer: Writer): void {
      if (message.id.length != 0) {
        writer.uint32(10);
        writer.bytes(message.id);
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

    id: Uint8Array;

    constructor(id: Uint8Array = new Uint8Array(0)) {
      this.id = id;
    }
  }

  export class mempool_accepted {
    static encode(message: mempool_accepted, writer: Writer): void {
      const unique_name_transaction = message.transaction;
      if (unique_name_transaction !== null) {
        writer.uint32(10);
        writer.fork();
        protocol.transaction.encode(unique_name_transaction, writer);
        writer.ldelim();
      }

      const unique_name_receipt = message.receipt;
      if (unique_name_receipt !== null) {
        writer.uint32(18);
        writer.fork();
        protocol.transaction_receipt.encode(unique_name_receipt, writer);
        writer.ldelim();
      }

      if (message.height != 0) {
        writer.uint32(24);
        writer.uint64(message.height);
      }

      if (message.pending_rc_used != 0) {
        writer.uint32(32);
        writer.uint64(message.pending_rc_used);
      }
    }

    static decode(reader: Reader, length: i32): mempool_accepted {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new mempool_accepted();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.transaction = protocol.transaction.decode(
              reader,
              reader.uint32()
            );
            break;

          case 2:
            message.receipt = protocol.transaction_receipt.decode(
              reader,
              reader.uint32()
            );
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

    transaction: protocol.transaction | null;
    receipt: protocol.transaction_receipt | null;
    height: u64;
    pending_rc_used: u64;

    constructor(
      transaction: protocol.transaction | null = null,
      receipt: protocol.transaction_receipt | null = null,
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
      const unique_name_block = message.block;
      if (unique_name_block !== null) {
        writer.uint32(10);
        writer.fork();
        protocol.block.encode(unique_name_block, writer);
        writer.ldelim();
      }

      const unique_name_receipt = message.receipt;
      if (unique_name_receipt !== null) {
        writer.uint32(18);
        writer.fork();
        protocol.block_receipt.encode(unique_name_receipt, writer);
        writer.ldelim();
      }

      if (message.live != false) {
        writer.uint32(24);
        writer.bool(message.live);
      }

      if (message.head != false) {
        writer.uint32(32);
        writer.bool(message.head);
      }
    }

    static decode(reader: Reader, length: i32): block_accepted {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new block_accepted();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.block = protocol.block.decode(reader, reader.uint32());
            break;

          case 2:
            message.receipt = protocol.block_receipt.decode(
              reader,
              reader.uint32()
            );
            break;

          case 3:
            message.live = reader.bool();
            break;

          case 4:
            message.head = reader.bool();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    block: protocol.block | null;
    receipt: protocol.block_receipt | null;
    live: bool;
    head: bool;

    constructor(
      block: protocol.block | null = null,
      receipt: protocol.block_receipt | null = null,
      live: bool = false,
      head: bool = false
    ) {
      this.block = block;
      this.receipt = receipt;
      this.live = live;
      this.head = head;
    }
  }

  export class block_irreversible {
    static encode(message: block_irreversible, writer: Writer): void {
      const unique_name_topology = message.topology;
      if (unique_name_topology !== null) {
        writer.uint32(10);
        writer.fork();
        common.block_topology.encode(unique_name_topology, writer);
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
            message.topology = common.block_topology.decode(
              reader,
              reader.uint32()
            );
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    topology: common.block_topology | null;

    constructor(topology: common.block_topology | null = null) {
      this.topology = topology;
    }
  }

  export class fork_heads {
    static encode(message: fork_heads, writer: Writer): void {
      const unique_name_last_irreversible_block =
        message.last_irreversible_block;
      if (unique_name_last_irreversible_block !== null) {
        writer.uint32(10);
        writer.fork();
        common.block_topology.encode(
          unique_name_last_irreversible_block,
          writer
        );
        writer.ldelim();
      }

      const unique_name_heads = message.heads;
      for (let i = 0; i < unique_name_heads.length; ++i) {
        writer.uint32(18);
        writer.fork();
        common.block_topology.encode(unique_name_heads[i], writer);
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
            message.last_irreversible_block = common.block_topology.decode(
              reader,
              reader.uint32()
            );
            break;

          case 2:
            message.heads.push(
              common.block_topology.decode(reader, reader.uint32())
            );
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    last_irreversible_block: common.block_topology | null;
    heads: Array<common.block_topology>;

    constructor(
      last_irreversible_block: common.block_topology | null = null,
      heads: Array<common.block_topology> = []
    ) {
      this.last_irreversible_block = last_irreversible_block;
      this.heads = heads;
    }
  }

  @unmanaged
  export class gossip_status {
    static encode(message: gossip_status, writer: Writer): void {
      if (message.enabled != false) {
        writer.uint32(8);
        writer.bool(message.enabled);
      }
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
      if (message.block_id.length != 0) {
        writer.uint32(10);
        writer.bytes(message.block_id);
      }

      if (message.height != 0) {
        writer.uint32(16);
        writer.uint64(message.height);
      }

      if (message.transaction_id.length != 0) {
        writer.uint32(26);
        writer.bytes(message.transaction_id);
      }

      const unique_name_event = message.event;
      if (unique_name_event !== null) {
        writer.uint32(34);
        writer.fork();
        protocol.event_data.encode(unique_name_event, writer);
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
            message.event = protocol.event_data.decode(reader, reader.uint32());
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    block_id: Uint8Array;
    height: u64;
    transaction_id: Uint8Array;
    event: protocol.event_data | null;

    constructor(
      block_id: Uint8Array = new Uint8Array(0),
      height: u64 = 0,
      transaction_id: Uint8Array = new Uint8Array(0),
      event: protocol.event_data | null = null
    ) {
      this.block_id = block_id;
      this.height = height;
      this.transaction_id = transaction_id;
      this.event = event;
    }
  }
}
