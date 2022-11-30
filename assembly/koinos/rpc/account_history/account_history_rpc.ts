import { Writer, Reader } from "as-proto";
import { account_history } from "../../account_history/account_history";
import { rpc } from "../rpc";

export namespace account_history_rpc {
  export class account_history_entry {
    static encode(message: account_history_entry, writer: Writer): void {
      if (message.seq_num != 0) {
        writer.uint32(8);
        writer.uint64(message.seq_num);
      }

      const unique_name_trx = message.trx;
      if (unique_name_trx !== null) {
        writer.uint32(18);
        writer.fork();
        account_history.transaction_record.encode(unique_name_trx, writer);
        writer.ldelim();
      }

      const unique_name_block = message.block;
      if (unique_name_block !== null) {
        writer.uint32(26);
        writer.fork();
        account_history.block_record.encode(unique_name_block, writer);
        writer.ldelim();
      }
    }

    static decode(reader: Reader, length: i32): account_history_entry {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new account_history_entry();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.seq_num = reader.uint64();
            break;

          case 2:
            message.trx = account_history.transaction_record.decode(
              reader,
              reader.uint32()
            );
            break;

          case 3:
            message.block = account_history.block_record.decode(
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

    seq_num: u64;
    trx: account_history.transaction_record | null;
    block: account_history.block_record | null;

    constructor(
      seq_num: u64 = 0,
      trx: account_history.transaction_record | null = null,
      block: account_history.block_record | null = null
    ) {
      this.seq_num = seq_num;
      this.trx = trx;
      this.block = block;
    }
  }

  export class get_account_history_request {
    static encode(message: get_account_history_request, writer: Writer): void {
      if (message.address.length != 0) {
        writer.uint32(10);
        writer.bytes(message.address);
      }

      if (message.seq_num != 0) {
        writer.uint32(16);
        writer.uint64(message.seq_num);
      }

      if (message.limit != 0) {
        writer.uint32(24);
        writer.uint64(message.limit);
      }

      if (message.ascending != false) {
        writer.uint32(32);
        writer.bool(message.ascending);
      }

      if (message.irreversible != false) {
        writer.uint32(40);
        writer.bool(message.irreversible);
      }
    }

    static decode(reader: Reader, length: i32): get_account_history_request {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_account_history_request();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.address = reader.bytes();
            break;

          case 2:
            message.seq_num = reader.uint64();
            break;

          case 3:
            message.limit = reader.uint64();
            break;

          case 4:
            message.ascending = reader.bool();
            break;

          case 5:
            message.irreversible = reader.bool();
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
    limit: u64;
    ascending: bool;
    irreversible: bool;

    constructor(
      address: Uint8Array = new Uint8Array(0),
      seq_num: u64 = 0,
      limit: u64 = 0,
      ascending: bool = false,
      irreversible: bool = false
    ) {
      this.address = address;
      this.seq_num = seq_num;
      this.limit = limit;
      this.ascending = ascending;
      this.irreversible = irreversible;
    }
  }

  export class get_account_history_response {
    static encode(message: get_account_history_response, writer: Writer): void {
      const unique_name_values = message.values;
      for (let i = 0; i < unique_name_values.length; ++i) {
        writer.uint32(10);
        writer.fork();
        account_history_entry.encode(unique_name_values[i], writer);
        writer.ldelim();
      }
    }

    static decode(reader: Reader, length: i32): get_account_history_response {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_account_history_response();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.values.push(
              account_history_entry.decode(reader, reader.uint32())
            );
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    values: Array<account_history_entry>;

    constructor(values: Array<account_history_entry> = []) {
      this.values = values;
    }
  }

  export class account_history_request {
    static encode(message: account_history_request, writer: Writer): void {
      const unique_name_reserved = message.reserved;
      if (unique_name_reserved !== null) {
        writer.uint32(10);
        writer.fork();
        rpc.reserved_rpc.encode(unique_name_reserved, writer);
        writer.ldelim();
      }

      const unique_name_get_account_history = message.get_account_history;
      if (unique_name_get_account_history !== null) {
        writer.uint32(18);
        writer.fork();
        get_account_history_request.encode(
          unique_name_get_account_history,
          writer
        );
        writer.ldelim();
      }
    }

    static decode(reader: Reader, length: i32): account_history_request {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new account_history_request();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.reserved = rpc.reserved_rpc.decode(reader, reader.uint32());
            break;

          case 2:
            message.get_account_history = get_account_history_request.decode(
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
    get_account_history: get_account_history_request | null;

    constructor(
      reserved: rpc.reserved_rpc | null = null,
      get_account_history: get_account_history_request | null = null
    ) {
      this.reserved = reserved;
      this.get_account_history = get_account_history;
    }
  }

  export class account_history_response {
    static encode(message: account_history_response, writer: Writer): void {
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

      const unique_name_get_account_history = message.get_account_history;
      if (unique_name_get_account_history !== null) {
        writer.uint32(26);
        writer.fork();
        get_account_history_response.encode(
          unique_name_get_account_history,
          writer
        );
        writer.ldelim();
      }
    }

    static decode(reader: Reader, length: i32): account_history_response {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new account_history_response();

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
            message.get_account_history = get_account_history_response.decode(
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
    get_account_history: get_account_history_response | null;

    constructor(
      reserved: rpc.reserved_rpc | null = null,
      error: rpc.error_response | null = null,
      get_account_history: get_account_history_response | null = null
    ) {
      this.reserved = reserved;
      this.error = error;
      this.get_account_history = get_account_history;
    }
  }
}
