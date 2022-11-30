import { Writer, Reader } from "as-proto";
import { transaction_store } from "../../transaction_store/transaction_store";
import { rpc } from "../rpc";

export namespace transaction_store_rpc {
  export class get_transactions_by_id_request {
    static encode(
      message: get_transactions_by_id_request,
      writer: Writer
    ): void {
      const unique_name_transaction_ids = message.transaction_ids;
      if (unique_name_transaction_ids.length !== 0) {
        for (let i = 0; i < unique_name_transaction_ids.length; ++i) {
          writer.uint32(10);
          writer.bytes(unique_name_transaction_ids[i]);
        }
      }
    }

    static decode(reader: Reader, length: i32): get_transactions_by_id_request {
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
      const unique_name_transactions = message.transactions;
      for (let i = 0; i < unique_name_transactions.length; ++i) {
        writer.uint32(10);
        writer.fork();
        transaction_store.transaction_item.encode(
          unique_name_transactions[i],
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
              transaction_store.transaction_item.decode(reader, reader.uint32())
            );
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    transactions: Array<transaction_store.transaction_item>;

    constructor(transactions: Array<transaction_store.transaction_item> = []) {
      this.transactions = transactions;
    }
  }

  export class transaction_store_request {
    static encode(message: transaction_store_request, writer: Writer): void {
      const unique_name_reserved = message.reserved;
      if (unique_name_reserved !== null) {
        writer.uint32(10);
        writer.fork();
        rpc.reserved_rpc.encode(unique_name_reserved, writer);
        writer.ldelim();
      }

      const unique_name_get_transactions_by_id = message.get_transactions_by_id;
      if (unique_name_get_transactions_by_id !== null) {
        writer.uint32(18);
        writer.fork();
        get_transactions_by_id_request.encode(
          unique_name_get_transactions_by_id,
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
            message.reserved = rpc.reserved_rpc.decode(reader, reader.uint32());

            message.get_transactions_by_id = null;

            break;

          case 2:
            message.get_transactions_by_id =
              get_transactions_by_id_request.decode(reader, reader.uint32());

            message.reserved = null;

            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    reserved: rpc.reserved_rpc | null;
    get_transactions_by_id: get_transactions_by_id_request | null;

    constructor(
      reserved: rpc.reserved_rpc | null = null,
      get_transactions_by_id: get_transactions_by_id_request | null = null
    ) {
      this.reserved = reserved;
      this.get_transactions_by_id = get_transactions_by_id;
    }
  }

  export class transaction_store_response {
    static encode(message: transaction_store_response, writer: Writer): void {
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

      const unique_name_get_transactions_by_id = message.get_transactions_by_id;
      if (unique_name_get_transactions_by_id !== null) {
        writer.uint32(26);
        writer.fork();
        get_transactions_by_id_response.encode(
          unique_name_get_transactions_by_id,
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
            message.reserved = rpc.reserved_rpc.decode(reader, reader.uint32());

            message.error = null;
            message.get_transactions_by_id = null;

            break;

          case 2:
            message.error = rpc.error_response.decode(reader, reader.uint32());

            message.reserved = null;
            message.get_transactions_by_id = null;

            break;

          case 3:
            message.get_transactions_by_id =
              get_transactions_by_id_response.decode(reader, reader.uint32());

            message.reserved = null;
            message.error = null;

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
    get_transactions_by_id: get_transactions_by_id_response | null;

    constructor(
      reserved: rpc.reserved_rpc | null = null,
      error: rpc.error_response | null = null,
      get_transactions_by_id: get_transactions_by_id_response | null = null
    ) {
      this.reserved = reserved;
      this.error = error;
      this.get_transactions_by_id = get_transactions_by_id;
    }
  }
}
