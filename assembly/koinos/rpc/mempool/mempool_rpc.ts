import { Writer, Reader } from "as-proto";
import { protocol } from "../../protocol/protocol";
import { rpc } from "../rpc";

export namespace mempool_rpc {
  export class pending_transaction {
    static encode(message: pending_transaction, writer: Writer): void {
      const unique_name_transaction = message.transaction;
      if (unique_name_transaction !== null) {
        writer.uint32(10);
        writer.fork();
        protocol.transaction.encode(unique_name_transaction, writer);
        writer.ldelim();
      }

      if (message.disk_storage_used != 0) {
        writer.uint32(16);
        writer.uint64(message.disk_storage_used);
      }

      if (message.network_bandwidth_used != 0) {
        writer.uint32(24);
        writer.uint64(message.network_bandwidth_used);
      }

      if (message.compute_bandwidth_used != 0) {
        writer.uint32(32);
        writer.uint64(message.compute_bandwidth_used);
      }
    }

    static decode(reader: Reader, length: i32): pending_transaction {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new pending_transaction();

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
            message.disk_storage_used = reader.uint64();
            break;

          case 3:
            message.network_bandwidth_used = reader.uint64();
            break;

          case 4:
            message.compute_bandwidth_used = reader.uint64();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    transaction: protocol.transaction | null;
    disk_storage_used: u64;
    network_bandwidth_used: u64;
    compute_bandwidth_used: u64;

    constructor(
      transaction: protocol.transaction | null = null,
      disk_storage_used: u64 = 0,
      network_bandwidth_used: u64 = 0,
      compute_bandwidth_used: u64 = 0
    ) {
      this.transaction = transaction;
      this.disk_storage_used = disk_storage_used;
      this.network_bandwidth_used = network_bandwidth_used;
      this.compute_bandwidth_used = compute_bandwidth_used;
    }
  }

  export class check_pending_account_resources_request {
    static encode(
      message: check_pending_account_resources_request,
      writer: Writer
    ): void {
      if (message.payer.length != 0) {
        writer.uint32(10);
        writer.bytes(message.payer);
      }

      if (message.max_payer_rc != 0) {
        writer.uint32(16);
        writer.uint64(message.max_payer_rc);
      }

      if (message.rc_limit != 0) {
        writer.uint32(24);
        writer.uint64(message.rc_limit);
      }
    }

    static decode(
      reader: Reader,
      length: i32
    ): check_pending_account_resources_request {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new check_pending_account_resources_request();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.payer = reader.bytes();
            break;

          case 2:
            message.max_payer_rc = reader.uint64();
            break;

          case 3:
            message.rc_limit = reader.uint64();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    payer: Uint8Array;
    max_payer_rc: u64;
    rc_limit: u64;

    constructor(
      payer: Uint8Array = new Uint8Array(0),
      max_payer_rc: u64 = 0,
      rc_limit: u64 = 0
    ) {
      this.payer = payer;
      this.max_payer_rc = max_payer_rc;
      this.rc_limit = rc_limit;
    }
  }

  @unmanaged
  export class check_pending_account_resources_response {
    static encode(
      message: check_pending_account_resources_response,
      writer: Writer
    ): void {
      if (message.success != false) {
        writer.uint32(8);
        writer.bool(message.success);
      }
    }

    static decode(
      reader: Reader,
      length: i32
    ): check_pending_account_resources_response {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new check_pending_account_resources_response();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.success = reader.bool();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    success: bool;

    constructor(success: bool = false) {
      this.success = success;
    }
  }

  @unmanaged
  export class get_pending_transactions_request {
    static encode(
      message: get_pending_transactions_request,
      writer: Writer
    ): void {
      if (message.limit != 0) {
        writer.uint32(8);
        writer.uint64(message.limit);
      }
    }

    static decode(
      reader: Reader,
      length: i32
    ): get_pending_transactions_request {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_pending_transactions_request();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.limit = reader.uint64();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    limit: u64;

    constructor(limit: u64 = 0) {
      this.limit = limit;
    }
  }

  export class get_pending_transactions_response {
    static encode(
      message: get_pending_transactions_response,
      writer: Writer
    ): void {
      const unique_name_pending_transactions = message.pending_transactions;
      for (let i = 0; i < unique_name_pending_transactions.length; ++i) {
        writer.uint32(10);
        writer.fork();
        pending_transaction.encode(unique_name_pending_transactions[i], writer);
        writer.ldelim();
      }
    }

    static decode(
      reader: Reader,
      length: i32
    ): get_pending_transactions_response {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_pending_transactions_response();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.pending_transactions.push(
              pending_transaction.decode(reader, reader.uint32())
            );
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    pending_transactions: Array<pending_transaction>;

    constructor(pending_transactions: Array<pending_transaction> = []) {
      this.pending_transactions = pending_transactions;
    }
  }

  export class mempool_request {
    static encode(message: mempool_request, writer: Writer): void {
      const unique_name_reserved = message.reserved;
      if (unique_name_reserved !== null) {
        writer.uint32(10);
        writer.fork();
        rpc.reserved_rpc.encode(unique_name_reserved, writer);
        writer.ldelim();
      }

      const unique_name_check_pending_account_resources =
        message.check_pending_account_resources;
      if (unique_name_check_pending_account_resources !== null) {
        writer.uint32(18);
        writer.fork();
        check_pending_account_resources_request.encode(
          unique_name_check_pending_account_resources,
          writer
        );
        writer.ldelim();
      }

      const unique_name_get_pending_transactions =
        message.get_pending_transactions;
      if (unique_name_get_pending_transactions !== null) {
        writer.uint32(26);
        writer.fork();
        get_pending_transactions_request.encode(
          unique_name_get_pending_transactions,
          writer
        );
        writer.ldelim();
      }
    }

    static decode(reader: Reader, length: i32): mempool_request {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new mempool_request();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.reserved = rpc.reserved_rpc.decode(reader, reader.uint32());
            break;

          case 2:
            message.check_pending_account_resources =
              check_pending_account_resources_request.decode(
                reader,
                reader.uint32()
              );
            break;

          case 3:
            message.get_pending_transactions =
              get_pending_transactions_request.decode(reader, reader.uint32());
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    reserved: rpc.reserved_rpc | null;
    check_pending_account_resources: check_pending_account_resources_request | null;
    get_pending_transactions: get_pending_transactions_request | null;

    constructor(
      reserved: rpc.reserved_rpc | null = null,
      check_pending_account_resources: check_pending_account_resources_request | null = null,
      get_pending_transactions: get_pending_transactions_request | null = null
    ) {
      this.reserved = reserved;
      this.check_pending_account_resources = check_pending_account_resources;
      this.get_pending_transactions = get_pending_transactions;
    }
  }

  export class mempool_response {
    static encode(message: mempool_response, writer: Writer): void {
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

      const unique_name_check_pending_account_resources =
        message.check_pending_account_resources;
      if (unique_name_check_pending_account_resources !== null) {
        writer.uint32(26);
        writer.fork();
        check_pending_account_resources_response.encode(
          unique_name_check_pending_account_resources,
          writer
        );
        writer.ldelim();
      }

      const unique_name_get_pending_transactions =
        message.get_pending_transactions;
      if (unique_name_get_pending_transactions !== null) {
        writer.uint32(34);
        writer.fork();
        get_pending_transactions_response.encode(
          unique_name_get_pending_transactions,
          writer
        );
        writer.ldelim();
      }
    }

    static decode(reader: Reader, length: i32): mempool_response {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new mempool_response();

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
            message.check_pending_account_resources =
              check_pending_account_resources_response.decode(
                reader,
                reader.uint32()
              );
            break;

          case 4:
            message.get_pending_transactions =
              get_pending_transactions_response.decode(reader, reader.uint32());
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
    check_pending_account_resources: check_pending_account_resources_response | null;
    get_pending_transactions: get_pending_transactions_response | null;

    constructor(
      reserved: rpc.reserved_rpc | null = null,
      error: rpc.error_response | null = null,
      check_pending_account_resources: check_pending_account_resources_response | null = null,
      get_pending_transactions: get_pending_transactions_response | null = null
    ) {
      this.reserved = reserved;
      this.error = error;
      this.check_pending_account_resources = check_pending_account_resources;
      this.get_pending_transactions = get_pending_transactions;
    }
  }
}
