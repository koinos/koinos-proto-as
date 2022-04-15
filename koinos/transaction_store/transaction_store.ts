import { Writer, Reader } from "as-proto";
import { koinos } from "./koinos/protocol/protocol";

export namespace koinos {
  export namespace transaction_store {
    export class transaction_item {
      static encode(message: transaction_item, writer: Writer): void {
        const transaction = message.transaction;
        if (transaction !== null) {
          writer.uint32(10);
          writer.fork();
          koinos.protocol.transaction.encode(transaction, writer);
          writer.ldelim();
        }

        const containing_blocks = message.containing_blocks;
        if (containing_blocks.length !== 0) {
          for (let i = 0; i < containing_blocks.length; ++i) {
            writer.uint32(18);
            writer.bytes(containing_blocks[i]);
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
              message.transaction = koinos.protocol.transaction.decode(
                reader,
                reader.uint32()
              );
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

      transaction: koinos.protocol.transaction | null;
      containing_blocks: Array<Uint8Array>;

      constructor(
        transaction: koinos.protocol.transaction | null = null,
        containing_blocks: Array<Uint8Array> = []
      ) {
        this.transaction = transaction;
        this.containing_blocks = containing_blocks;
      }
    }
  }
}
