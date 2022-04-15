import { Writer, Reader } from "as-proto";
import { transaction } from "../protocol/protocol";

export class transaction_item {
  static encode(message: transaction_item, writer: Writer): void {
    const field_transaction = message.transaction;
    if (field_transaction !== null) {
      writer.uint32(10);
      writer.fork();
      transaction.encode(field_transaction, writer);
      writer.ldelim();
    }

    const field_containing_blocks = message.containing_blocks;
    if (field_containing_blocks.length !== 0) {
      for (let i = 0; i < field_containing_blocks.length; ++i) {
        writer.uint32(18);
        writer.bytes(field_containing_blocks[i]);
      }
    }
  }

  static decode(reader: Reader, length: i32): transaction_item {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new transaction_item();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transaction = transaction.decode(reader, reader.uint32());
          break;

        case 2:
          message.containing_blocks.push(reader.bytes());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  transaction: transaction | null;
  containing_blocks: Array<Uint8Array>;

  constructor(
    transaction: transaction | null = null,
    containing_blocks: Array<Uint8Array> = []
  ) {
    this.transaction = transaction;
    this.containing_blocks = containing_blocks;
  }
}
