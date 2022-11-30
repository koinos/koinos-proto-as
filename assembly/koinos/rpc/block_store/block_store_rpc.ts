import { Writer, Reader } from "as-proto";
import { block_store } from "../../block_store/block_store";
import { protocol } from "../../protocol/protocol";
import { common } from "../../common";
import { rpc } from "../rpc";

export namespace block_store_rpc {
  export class get_blocks_by_id_request {
    static encode(message: get_blocks_by_id_request, writer: Writer): void {
      const unique_name_block_ids = message.block_ids;
      if (unique_name_block_ids.length !== 0) {
        for (let i = 0; i < unique_name_block_ids.length; ++i) {
          writer.uint32(10);
          writer.bytes(unique_name_block_ids[i]);
        }
      }

      if (message.return_block != false) {
        writer.uint32(16);
        writer.bool(message.return_block);
      }

      if (message.return_receipt != false) {
        writer.uint32(24);
        writer.bool(message.return_receipt);
      }
    }

    static decode(reader: Reader, length: i32): get_blocks_by_id_request {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_blocks_by_id_request();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.block_ids.push(reader.bytes());
            break;

          case 2:
            message.return_block = reader.bool();
            break;

          case 3:
            message.return_receipt = reader.bool();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    block_ids: Array<Uint8Array>;
    return_block: bool;
    return_receipt: bool;

    constructor(
      block_ids: Array<Uint8Array> = [],
      return_block: bool = false,
      return_receipt: bool = false
    ) {
      this.block_ids = block_ids;
      this.return_block = return_block;
      this.return_receipt = return_receipt;
    }
  }

  export class get_blocks_by_id_response {
    static encode(message: get_blocks_by_id_response, writer: Writer): void {
      const unique_name_block_items = message.block_items;
      for (let i = 0; i < unique_name_block_items.length; ++i) {
        writer.uint32(10);
        writer.fork();
        block_store.block_item.encode(unique_name_block_items[i], writer);
        writer.ldelim();
      }
    }

    static decode(reader: Reader, length: i32): get_blocks_by_id_response {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_blocks_by_id_response();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.block_items.push(
              block_store.block_item.decode(reader, reader.uint32())
            );
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    block_items: Array<block_store.block_item>;

    constructor(block_items: Array<block_store.block_item> = []) {
      this.block_items = block_items;
    }
  }

  export class get_blocks_by_height_request {
    static encode(message: get_blocks_by_height_request, writer: Writer): void {
      if (message.head_block_id.length != 0) {
        writer.uint32(10);
        writer.bytes(message.head_block_id);
      }

      if (message.ancestor_start_height != 0) {
        writer.uint32(16);
        writer.uint64(message.ancestor_start_height);
      }

      if (message.num_blocks != 0) {
        writer.uint32(24);
        writer.uint32(message.num_blocks);
      }

      if (message.return_block != false) {
        writer.uint32(32);
        writer.bool(message.return_block);
      }

      if (message.return_receipt != false) {
        writer.uint32(40);
        writer.bool(message.return_receipt);
      }
    }

    static decode(reader: Reader, length: i32): get_blocks_by_height_request {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_blocks_by_height_request();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.head_block_id = reader.bytes();
            break;

          case 2:
            message.ancestor_start_height = reader.uint64();
            break;

          case 3:
            message.num_blocks = reader.uint32();
            break;

          case 4:
            message.return_block = reader.bool();
            break;

          case 5:
            message.return_receipt = reader.bool();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    head_block_id: Uint8Array;
    ancestor_start_height: u64;
    num_blocks: u32;
    return_block: bool;
    return_receipt: bool;

    constructor(
      head_block_id: Uint8Array = new Uint8Array(0),
      ancestor_start_height: u64 = 0,
      num_blocks: u32 = 0,
      return_block: bool = false,
      return_receipt: bool = false
    ) {
      this.head_block_id = head_block_id;
      this.ancestor_start_height = ancestor_start_height;
      this.num_blocks = num_blocks;
      this.return_block = return_block;
      this.return_receipt = return_receipt;
    }
  }

  export class get_blocks_by_height_response {
    static encode(
      message: get_blocks_by_height_response,
      writer: Writer
    ): void {
      const unique_name_block_items = message.block_items;
      for (let i = 0; i < unique_name_block_items.length; ++i) {
        writer.uint32(10);
        writer.fork();
        block_store.block_item.encode(unique_name_block_items[i], writer);
        writer.ldelim();
      }
    }

    static decode(reader: Reader, length: i32): get_blocks_by_height_response {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_blocks_by_height_response();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.block_items.push(
              block_store.block_item.decode(reader, reader.uint32())
            );
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    block_items: Array<block_store.block_item>;

    constructor(block_items: Array<block_store.block_item> = []) {
      this.block_items = block_items;
    }
  }

  export class add_block_request {
    static encode(message: add_block_request, writer: Writer): void {
      const unique_name_block_to_add = message.block_to_add;
      if (unique_name_block_to_add !== null) {
        writer.uint32(10);
        writer.fork();
        protocol.block.encode(unique_name_block_to_add, writer);
        writer.ldelim();
      }

      const unique_name_receipt_to_add = message.receipt_to_add;
      if (unique_name_receipt_to_add !== null) {
        writer.uint32(18);
        writer.fork();
        protocol.block_receipt.encode(unique_name_receipt_to_add, writer);
        writer.ldelim();
      }
    }

    static decode(reader: Reader, length: i32): add_block_request {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new add_block_request();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.block_to_add = protocol.block.decode(
              reader,
              reader.uint32()
            );
            break;

          case 2:
            message.receipt_to_add = protocol.block_receipt.decode(
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

    block_to_add: protocol.block | null;
    receipt_to_add: protocol.block_receipt | null;

    constructor(
      block_to_add: protocol.block | null = null,
      receipt_to_add: protocol.block_receipt | null = null
    ) {
      this.block_to_add = block_to_add;
      this.receipt_to_add = receipt_to_add;
    }
  }

  @unmanaged
  export class add_block_response {
    static encode(message: add_block_response, writer: Writer): void {}

    static decode(reader: Reader, length: i32): add_block_response {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new add_block_response();

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
  export class get_highest_block_request {
    static encode(message: get_highest_block_request, writer: Writer): void {}

    static decode(reader: Reader, length: i32): get_highest_block_request {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_highest_block_request();

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

  export class get_highest_block_response {
    static encode(message: get_highest_block_response, writer: Writer): void {
      const unique_name_topology = message.topology;
      if (unique_name_topology !== null) {
        writer.uint32(10);
        writer.fork();
        common.block_topology.encode(unique_name_topology, writer);
        writer.ldelim();
      }
    }

    static decode(reader: Reader, length: i32): get_highest_block_response {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_highest_block_response();

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

  export class block_store_request {
    static encode(message: block_store_request, writer: Writer): void {
      const unique_name_reserved = message.reserved;
      if (unique_name_reserved !== null) {
        writer.uint32(10);
        writer.fork();
        rpc.reserved_rpc.encode(unique_name_reserved, writer);
        writer.ldelim();
      }

      const unique_name_get_blocks_by_id = message.get_blocks_by_id;
      if (unique_name_get_blocks_by_id !== null) {
        writer.uint32(18);
        writer.fork();
        get_blocks_by_id_request.encode(unique_name_get_blocks_by_id, writer);
        writer.ldelim();
      }

      const unique_name_get_blocks_by_height = message.get_blocks_by_height;
      if (unique_name_get_blocks_by_height !== null) {
        writer.uint32(26);
        writer.fork();
        get_blocks_by_height_request.encode(
          unique_name_get_blocks_by_height,
          writer
        );
        writer.ldelim();
      }

      const unique_name_add_block = message.add_block;
      if (unique_name_add_block !== null) {
        writer.uint32(34);
        writer.fork();
        add_block_request.encode(unique_name_add_block, writer);
        writer.ldelim();
      }

      const unique_name_get_highest_block = message.get_highest_block;
      if (unique_name_get_highest_block !== null) {
        writer.uint32(42);
        writer.fork();
        get_highest_block_request.encode(unique_name_get_highest_block, writer);
        writer.ldelim();
      }
    }

    static decode(reader: Reader, length: i32): block_store_request {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new block_store_request();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.reserved = rpc.reserved_rpc.decode(reader, reader.uint32());
            break;

          case 2:
            message.get_blocks_by_id = get_blocks_by_id_request.decode(
              reader,
              reader.uint32()
            );
            break;

          case 3:
            message.get_blocks_by_height = get_blocks_by_height_request.decode(
              reader,
              reader.uint32()
            );
            break;

          case 4:
            message.add_block = add_block_request.decode(
              reader,
              reader.uint32()
            );
            break;

          case 5:
            message.get_highest_block = get_highest_block_request.decode(
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

    reserved: rpc.reserved_rpc | null;
    get_blocks_by_id: get_blocks_by_id_request | null;
    get_blocks_by_height: get_blocks_by_height_request | null;
    add_block: add_block_request | null;
    get_highest_block: get_highest_block_request | null;

    constructor(
      reserved: rpc.reserved_rpc | null = null,
      get_blocks_by_id: get_blocks_by_id_request | null = null,
      get_blocks_by_height: get_blocks_by_height_request | null = null,
      add_block: add_block_request | null = null,
      get_highest_block: get_highest_block_request | null = null
    ) {
      this.reserved = reserved;
      this.get_blocks_by_id = get_blocks_by_id;
      this.get_blocks_by_height = get_blocks_by_height;
      this.add_block = add_block;
      this.get_highest_block = get_highest_block;
    }
  }

  export class block_store_response {
    static encode(message: block_store_response, writer: Writer): void {
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
        rpc.error_response.encode(unique_name_error, writer);
        writer.ldelim();
      }

      const unique_name_get_blocks_by_id = message.get_blocks_by_id;
      if (unique_name_get_blocks_by_id !== null) {
        writer.uint32(26);
        writer.fork();
        get_blocks_by_id_response.encode(unique_name_get_blocks_by_id, writer);
        writer.ldelim();
      }

      const unique_name_get_blocks_by_height = message.get_blocks_by_height;
      if (unique_name_get_blocks_by_height !== null) {
        writer.uint32(34);
        writer.fork();
        get_blocks_by_height_response.encode(
          unique_name_get_blocks_by_height,
          writer
        );
        writer.ldelim();
      }

      const unique_name_add_block = message.add_block;
      if (unique_name_add_block !== null) {
        writer.uint32(42);
        writer.fork();
        add_block_response.encode(unique_name_add_block, writer);
        writer.ldelim();
      }

      const unique_name_get_highest_block = message.get_highest_block;
      if (unique_name_get_highest_block !== null) {
        writer.uint32(50);
        writer.fork();
        get_highest_block_response.encode(
          unique_name_get_highest_block,
          writer
        );
        writer.ldelim();
      }
    }

    static decode(reader: Reader, length: i32): block_store_response {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new block_store_response();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.reserved = rpc.reserved_rpc.decode(reader, reader.uint32());
            break;

          case 2:
            message.error = rpc.error_response.decode(reader, reader.uint32());
            break;

          case 3:
            message.get_blocks_by_id = get_blocks_by_id_response.decode(
              reader,
              reader.uint32()
            );
            break;

          case 4:
            message.get_blocks_by_height = get_blocks_by_height_response.decode(
              reader,
              reader.uint32()
            );
            break;

          case 5:
            message.add_block = add_block_response.decode(
              reader,
              reader.uint32()
            );
            break;

          case 6:
            message.get_highest_block = get_highest_block_response.decode(
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

    reserved: rpc.reserved_rpc | null;
    error: rpc.error_response | null;
    get_blocks_by_id: get_blocks_by_id_response | null;
    get_blocks_by_height: get_blocks_by_height_response | null;
    add_block: add_block_response | null;
    get_highest_block: get_highest_block_response | null;

    constructor(
      reserved: rpc.reserved_rpc | null = null,
      error: rpc.error_response | null = null,
      get_blocks_by_id: get_blocks_by_id_response | null = null,
      get_blocks_by_height: get_blocks_by_height_response | null = null,
      add_block: add_block_response | null = null,
      get_highest_block: get_highest_block_response | null = null
    ) {
      this.reserved = reserved;
      this.error = error;
      this.get_blocks_by_id = get_blocks_by_id;
      this.get_blocks_by_height = get_blocks_by_height;
      this.add_block = add_block;
      this.get_highest_block = get_highest_block;
    }
  }
}
