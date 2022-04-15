import { Writer, Reader } from "as-proto";
import { koinos } from "./koinos/transaction_store/transaction_store";
import { koinos } from "./koinos/rpc/rpc";

export namespace koinos {
  export namespace rpc {
    export namespace transaction_store {
      export class get_transactions_by_id_request {
        static encode(
          message: get_transactions_by_id_request,
          writer: Writer
        ): void {
          const transaction_ids = message.transaction_ids;
          if (transaction_ids.length !== 0) {
            for (let i = 0; i < transaction_ids.length; ++i) {
              writer.uint32(10);
              writer.bytes(transaction_ids[i]);
            }
          }
        }

        static decode(
          reader: Reader,
          length: i32
        ): get_transactions_by_id_request {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new get_transactions_by_id_request();

          while (reader.ptr < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                message.transaction_ids.push(reader.bytes());
                break;

              default:
                reader.skipType(tag & 7);
                break;
            }
          }

          return message;
        }

        transaction_ids: Array<Uint8Array>;

        constructor(transaction_ids: Array<Uint8Array> = []) {
          this.transaction_ids = transaction_ids;
        }
      }

      export class get_transactions_by_id_response {
        static encode(
          message: get_transactions_by_id_response,
          writer: Writer
        ): void {
          const transactions = message.transactions;
          for (let i = 0; i < transactions.length; ++i) {
            writer.uint32(10);
            writer.fork();
            koinos.transaction_store.transaction_item.encode(
              transactions[i],
              writer
            );
            writer.ldelim();
          }
        }

        static decode(
          reader: Reader,
          length: i32
        ): get_transactions_by_id_response {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new get_transactions_by_id_response();

          while (reader.ptr < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                message.transactions.push(
                  koinos.transaction_store.transaction_item.decode(
                    reader,
                    reader.uint32()
                  )
                );
                break;

              default:
                reader.skipType(tag & 7);
                break;
            }
          }

          return message;
        }

        transactions: Array<koinos.transaction_store.transaction_item>;

        constructor(
          transactions: Array<koinos.transaction_store.transaction_item> = []
        ) {
          this.transactions = transactions;
        }
      }

      export class transaction_store_request {
        static encode(
          message: transaction_store_request,
          writer: Writer
        ): void {
          const reserved = message.reserved;
          if (reserved !== null) {
            writer.uint32(10);
            writer.fork();
            koinos.rpc.reserved_rpc.encode(reserved, writer);
            writer.ldelim();
          }

          const get_transactions_by_id = message.get_transactions_by_id;
          if (get_transactions_by_id !== null) {
            writer.uint32(18);
            writer.fork();
            koinos.rpc.transaction_store.get_transactions_by_id_request.encode(
              get_transactions_by_id,
              writer
            );
            writer.ldelim();
          }
        }

        static decode(reader: Reader, length: i32): transaction_store_request {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new transaction_store_request();

          while (reader.ptr < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                message.reserved = koinos.rpc.reserved_rpc.decode(
                  reader,
                  reader.uint32()
                );
                break;

              case 2:
                message.get_transactions_by_id =
                  koinos.rpc.transaction_store.get_transactions_by_id_request.decode(
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

        reserved: koinos.rpc.reserved_rpc | null;
        get_transactions_by_id: koinos.rpc.transaction_store.get_transactions_by_id_request | null;

        constructor(
          reserved: koinos.rpc.reserved_rpc | null = null,
          get_transactions_by_id: koinos.rpc.transaction_store.get_transactions_by_id_request | null = null
        ) {
          this.reserved = reserved;
          this.get_transactions_by_id = get_transactions_by_id;
        }
      }

      export class transaction_store_response {
        static encode(
          message: transaction_store_response,
          writer: Writer
        ): void {
          const reserved = message.reserved;
          if (reserved !== null) {
            writer.uint32(10);
            writer.fork();
            koinos.rpc.reserved_rpc.encode(reserved, writer);
            writer.ldelim();
          }

          const error = message.error;
          if (error !== null) {
            writer.uint32(18);
            writer.fork();
            koinos.rpc.error_response.encode(error, writer);
            writer.ldelim();
          }

          const get_transactions_by_id = message.get_transactions_by_id;
          if (get_transactions_by_id !== null) {
            writer.uint32(26);
            writer.fork();
            koinos.rpc.transaction_store.get_transactions_by_id_response.encode(
              get_transactions_by_id,
              writer
            );
            writer.ldelim();
          }
        }

        static decode(reader: Reader, length: i32): transaction_store_response {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new transaction_store_response();

          while (reader.ptr < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                message.reserved = koinos.rpc.reserved_rpc.decode(
                  reader,
                  reader.uint32()
                );
                break;

              case 2:
                message.error = koinos.rpc.error_response.decode(
                  reader,
                  reader.uint32()
                );
                break;

              case 3:
                message.get_transactions_by_id =
                  koinos.rpc.transaction_store.get_transactions_by_id_response.decode(
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

        reserved: koinos.rpc.reserved_rpc | null;
        error: koinos.rpc.error_response | null;
        get_transactions_by_id: koinos.rpc.transaction_store.get_transactions_by_id_response | null;

        constructor(
          reserved: koinos.rpc.reserved_rpc | null = null,
          error: koinos.rpc.error_response | null = null,
          get_transactions_by_id: koinos.rpc.transaction_store.get_transactions_by_id_response | null = null
        ) {
          this.reserved = reserved;
          this.error = error;
          this.get_transactions_by_id = get_transactions_by_id;
        }
      }
    }
  }
}
