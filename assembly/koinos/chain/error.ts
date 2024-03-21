import { Writer, Reader } from "as-proto";

export namespace error {
  export class error_details {
    static encode(message: error_details, writer: Writer): void {
      if (message.code != 0) {
        writer.uint32(8);
        writer.int32(message.code);
      }

      const unique_name_logs = message.logs;
      if (unique_name_logs.length !== 0) {
        for (let i = 0; i < unique_name_logs.length; ++i) {
          writer.uint32(18);
          writer.string(unique_name_logs[i]);
        }
      }
    }

    static decode(reader: Reader, length: i32): error_details {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new error_details();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.code = reader.int32();
            break;

          case 2:
            message.logs.push(reader.string());
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    code: i32;
    logs: Array<string>;

    constructor(code: i32 = 0, logs: Array<string> = []) {
      this.code = code;
      this.logs = logs;
    }
  }

  export enum error_code {
    success = 0,
    reversion = 1,
    internal_error = 100,
    system_authorization_failure = 101,
    invalid_contract = 102,
    insufficient_privileges = 103,
    insufficient_rc = 104,
    insufficient_return_buffer = 105,
    unknown_thunk = 106,
    unknown_operation = 107,
    read_only_context = 108,
    failure = -1,
    field_not_found = -100,
    unknown_hash_code = -101,
    unknown_dsa = -102,
    unknown_system_call = -103,
    operation_not_found = -104,
    authorization_failure = -200,
    invalid_nonce = -201,
    invalid_signature = -202,
    malformed_block = -203,
    malformed_transaction = -204,
    block_resource_failure = -205,
    unknown_backend = -1000,
    unexpected_state = -1001,
    missing_required_arguments = -1002,
    unknown_previous_block = -1003,
    unexpected_height = -1004,
    block_state_error = -1005,
    state_merkle_mismatch = -1006,
    unexpected_receipt = -1007,
    rpc_failure = -1008,
    pending_state_error = -1009,
    timestamp_out_of_bounds = -1010,
    indexer_failure = -1011,
    network_bandwidth_limit_exceeded = -1012,
    compute_bandwidth_limit_exceeded = -1013,
    disk_storage_limit_exceeded = -1014,
    pre_irreversibility_block = -1015,
  }
}
