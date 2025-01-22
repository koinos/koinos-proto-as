import { Writer, Reader } from "as-proto";
import { protocol } from "../protocol/protocol";

export namespace mempool {
  @unmanaged
  export class mempool_metadata {
    static encode(message: mempool_metadata, writer: Writer): void {
      if (message.seq_num != 0) {
        writer.uint32(8);
        writer.uint64(message.seq_num);
      }
    }

    static decode(reader: Reader, length: i32): mempool_metadata {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new mempool_metadata();

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

  @unmanaged
  export class address_resource_record {
    static encode(message: address_resource_record, writer: Writer): void {
      if (message.max_rc != 0) {
        writer.uint32(8);
        writer.uint64(message.max_rc);
      }

      if (message.current_rc != 0) {
        writer.uint32(16);
        writer.uint64(message.current_rc);
      }
    }

    static decode(reader: Reader, length: i32): address_resource_record {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new address_resource_record();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.max_rc = reader.uint64();
            break;

          case 2:
            message.current_rc = reader.uint64();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    max_rc: u64;
    current_rc: u64;

    constructor(max_rc: u64 = 0, current_rc: u64 = 0) {
      this.max_rc = max_rc;
      this.current_rc = current_rc;
    }
  }

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

      if (message.system_disk_storage_used != 0) {
        writer.uint32(40);
        writer.uint64(message.system_disk_storage_used);
      }

      if (message.system_network_bandwidth_used != 0) {
        writer.uint32(48);
        writer.uint64(message.system_network_bandwidth_used);
      }

      if (message.system_compute_bandwidth_used != 0) {
        writer.uint32(56);
        writer.uint64(message.system_compute_bandwidth_used);
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

          case 5:
            message.system_disk_storage_used = reader.uint64();
            break;

          case 6:
            message.system_network_bandwidth_used = reader.uint64();
            break;

          case 7:
            message.system_compute_bandwidth_used = reader.uint64();
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
    system_disk_storage_used: u64;
    system_network_bandwidth_used: u64;
    system_compute_bandwidth_used: u64;

    constructor(
      transaction: protocol.transaction | null = null,
      disk_storage_used: u64 = 0,
      network_bandwidth_used: u64 = 0,
      compute_bandwidth_used: u64 = 0,
      system_disk_storage_used: u64 = 0,
      system_network_bandwidth_used: u64 = 0,
      system_compute_bandwidth_used: u64 = 0
    ) {
      this.transaction = transaction;
      this.disk_storage_used = disk_storage_used;
      this.network_bandwidth_used = network_bandwidth_used;
      this.compute_bandwidth_used = compute_bandwidth_used;
      this.system_disk_storage_used = system_disk_storage_used;
      this.system_network_bandwidth_used = system_network_bandwidth_used;
      this.system_compute_bandwidth_used = system_compute_bandwidth_used;
    }
  }

  export class pending_transaction_record {
    static encode(message: pending_transaction_record, writer: Writer): void {
      const unique_name_pending_transaction = message.pending_transaction;
      if (unique_name_pending_transaction !== null) {
        writer.uint32(10);
        writer.fork();
        pending_transaction.encode(unique_name_pending_transaction, writer);
        writer.ldelim();
      }

      if (message.timestamp != 0) {
        writer.uint32(16);
        writer.uint64(message.timestamp);
      }
    }

    static decode(reader: Reader, length: i32): pending_transaction_record {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new pending_transaction_record();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.pending_transaction = pending_transaction.decode(
              reader,
              reader.uint32()
            );
            break;

          case 2:
            message.timestamp = reader.uint64();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    pending_transaction: pending_transaction | null;
    timestamp: u64;

    constructor(
      pending_transaction: pending_transaction | null = null,
      timestamp: u64 = 0
    ) {
      this.pending_transaction = pending_transaction;
      this.timestamp = timestamp;
    }
  }
}
