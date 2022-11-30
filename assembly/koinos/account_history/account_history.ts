import { Writer, Reader } from "as-proto";
import { protocol } from "../protocol/protocol";

export namespace account_history {
  @unmanaged
  export class account_metadata {
    static encode(message: account_metadata, writer: Writer): void {
      if (message.seq_num != 0) {
        writer.uint32(8);
        writer.uint64(message.seq_num);
      }
    }

    static decode(reader: Reader, length: i32): account_metadata {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new account_metadata();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.seq_num = reader.uint64();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    seq_num: u64;

    constructor(seq_num: u64 = 0) {
      this.seq_num = seq_num;
    }
  }

  export class history_index {
    static encode(message: history_index, writer: Writer): void {
      if (message.address.length != 0) {
        writer.uint32(10);
        writer.bytes(message.address);
      }

      if (message.seq_num != 0) {
        writer.uint32(16);
        writer.uint64(message.seq_num);
      }
    }

    static decode(reader: Reader, length: i32): history_index {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new history_index();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.address = reader.bytes();
            break;

          case 2:
            message.seq_num = reader.uint64();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    address: Uint8Array;
    seq_num: u64;

    constructor(address: Uint8Array = new Uint8Array(0), seq_num: u64 = 0) {
      this.address = address;
      this.seq_num = seq_num;
    }
  }

  export class transaction_record {
    static encode(message: transaction_record, writer: Writer): void {
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
    }

    static decode(reader: Reader, length: i32): transaction_record {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new transaction_record();

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

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    transaction: protocol.transaction | null;
    receipt: protocol.transaction_receipt | null;

    constructor(
      transaction: protocol.transaction | null = null,
      receipt: protocol.transaction_receipt | null = null
    ) {
      this.transaction = transaction;
      this.receipt = receipt;
    }
  }

  export class block_record {
    static encode(message: block_record, writer: Writer): void {
      const unique_name_header = message.header;
      if (unique_name_header !== null) {
        writer.uint32(10);
        writer.fork();
        protocol.block_header.encode(unique_name_header, writer);
        writer.ldelim();
      }

      const unique_name_receipt = message.receipt;
      if (unique_name_receipt !== null) {
        writer.uint32(18);
        writer.fork();
        protocol.block_receipt.encode(unique_name_receipt, writer);
        writer.ldelim();
      }
    }

    static decode(reader: Reader, length: i32): block_record {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new block_record();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.header = protocol.block_header.decode(
              reader,
              reader.uint32()
            );
            break;

          case 2:
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

    header: protocol.block_header | null;
    receipt: protocol.block_receipt | null;

    constructor(
      header: protocol.block_header | null = null,
      receipt: protocol.block_receipt | null = null
    ) {
      this.header = header;
      this.receipt = receipt;
    }
  }

  export class history_record {
    static encode(message: history_record, writer: Writer): void {
      const unique_name_trx = message.trx;
      if (unique_name_trx !== null) {
        writer.uint32(10);
        writer.fork();
        transaction_record.encode(unique_name_trx, writer);
        writer.ldelim();
      }

      const unique_name_block = message.block;
      if (unique_name_block !== null) {
        writer.uint32(18);
        writer.fork();
        block_record.encode(unique_name_block, writer);
        writer.ldelim();
      }
    }

    static decode(reader: Reader, length: i32): history_record {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new history_record();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.trx = transaction_record.decode(reader, reader.uint32());
            break;

          case 2:
            message.block = block_record.decode(reader, reader.uint32());
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    trx: transaction_record | null;
    block: block_record | null;

    constructor(
      trx: transaction_record | null = null,
      block: block_record | null = null
    ) {
      this.trx = trx;
      this.block = block;
    }
  }
}
