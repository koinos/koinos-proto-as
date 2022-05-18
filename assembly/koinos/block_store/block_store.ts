import { Writer, Reader } from "as-proto";
import { protocol } from "../protocol/protocol";

export namespace block_store {
  export class block_item {
    static encode(message: block_item, writer: Writer): void {
      if (message.block_id.length != 0) {
        writer.uint32(10);
        writer.bytes(message.block_id);
      }

      if (message.block_height != 0) {
        writer.uint32(16);
        writer.uint64(message.block_height);
      }

      const unique_name_block = message.block;
      if (unique_name_block !== null) {
        writer.uint32(26);
        writer.fork();
        protocol.block.encode(unique_name_block, writer);
        writer.ldelim();
      }

      const unique_name_receipt = message.receipt;
      if (unique_name_receipt !== null) {
        writer.uint32(34);
        writer.fork();
        protocol.block_receipt.encode(unique_name_receipt, writer);
        writer.ldelim();
      }
    }

    static decode(reader: Reader, length: i32): block_item {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new block_item();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.block_id = reader.bytes();
            break;

          case 2:
            message.block_height = reader.uint64();
            break;

          case 3:
            message.block = protocol.block.decode(reader, reader.uint32());
            break;

          case 4:
            message.receipt = protocol.block_receipt.decode(
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

    block_id: Uint8Array;
    block_height: u64;
    block: protocol.block | null;
    receipt: protocol.block_receipt | null;

    constructor(
      block_id: Uint8Array = new Uint8Array(0),
      block_height: u64 = 0,
      block: protocol.block | null = null,
      receipt: protocol.block_receipt | null = null
    ) {
      this.block_id = block_id;
      this.block_height = block_height;
      this.block = block;
      this.receipt = receipt;
    }
  }

  export class block_record {
    static encode(message: block_record, writer: Writer): void {
      if (message.block_id.length != 0) {
        writer.uint32(10);
        writer.bytes(message.block_id);
      }

      if (message.block_height != 0) {
        writer.uint32(16);
        writer.uint64(message.block_height);
      }

      const unique_name_block = message.block;
      if (unique_name_block !== null) {
        writer.uint32(26);
        writer.fork();
        protocol.block.encode(unique_name_block, writer);
        writer.ldelim();
      }

      const unique_name_receipt = message.receipt;
      if (unique_name_receipt !== null) {
        writer.uint32(34);
        writer.fork();
        protocol.block_receipt.encode(unique_name_receipt, writer);
        writer.ldelim();
      }

      const unique_name_previous_block_ids = message.previous_block_ids;
      if (unique_name_previous_block_ids.length !== 0) {
        for (let i = 0; i < unique_name_previous_block_ids.length; ++i) {
          writer.uint32(42);
          writer.bytes(unique_name_previous_block_ids[i]);
        }
      }
    }

    static decode(reader: Reader, length: i32): block_record {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new block_record();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.block_id = reader.bytes();
            break;

          case 2:
            message.block_height = reader.uint64();
            break;

          case 3:
            message.block = protocol.block.decode(reader, reader.uint32());
            break;

          case 4:
            message.receipt = protocol.block_receipt.decode(
              reader,
              reader.uint32()
            );
            break;

          case 5:
            message.previous_block_ids.push(reader.bytes());
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    block_id: Uint8Array;
    block_height: u64;
    block: protocol.block | null;
    receipt: protocol.block_receipt | null;
    previous_block_ids: Array<Uint8Array>;

    constructor(
      block_id: Uint8Array = new Uint8Array(0),
      block_height: u64 = 0,
      block: protocol.block | null = null,
      receipt: protocol.block_receipt | null = null,
      previous_block_ids: Array<Uint8Array> = []
    ) {
      this.block_id = block_id;
      this.block_height = block_height;
      this.block = block;
      this.receipt = receipt;
      this.previous_block_ids = previous_block_ids;
    }
  }
}
