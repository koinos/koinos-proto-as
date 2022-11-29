import { Writer, Reader } from "as-proto";
import { protocol } from "../../protocol/protocol";

export namespace governance {
  export class proposal_record {
    static encode(message: proposal_record, writer: Writer): void {
      const unique_name_operations = message.operations;
      for (let i = 0; i < unique_name_operations.length; ++i) {
        writer.uint32(10);
        writer.fork();
        protocol.operation.encode(unique_name_operations[i], writer);
        writer.ldelim();
      }

      if (message.operation_merkle_root.length != 0) {
        writer.uint32(18);
        writer.bytes(message.operation_merkle_root);
      }

      if (message.vote_start_height != 0) {
        writer.uint32(24);
        writer.uint64(message.vote_start_height);
      }

      if (message.vote_tally != 0) {
        writer.uint32(32);
        writer.uint64(message.vote_tally);
      }

      if (message.vote_threshold != 0) {
        writer.uint32(40);
        writer.uint64(message.vote_threshold);
      }

      if (message.shall_authorize != false) {
        writer.uint32(48);
        writer.bool(message.shall_authorize);
      }

      if (message.updates_governance != false) {
        writer.uint32(56);
        writer.bool(message.updates_governance);
      }

      if (message.status != 0) {
        writer.uint32(64);
        writer.int32(message.status);
      }

      if (message.fee != 0) {
        writer.uint32(72);
        writer.uint64(message.fee);
      }
    }

    static decode(reader: Reader, length: i32): proposal_record {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new proposal_record();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.operations.push(
              protocol.operation.decode(reader, reader.uint32())
            );
            break;

          case 2:
            message.operation_merkle_root = reader.bytes();
            break;

          case 3:
            message.vote_start_height = reader.uint64();
            break;

          case 4:
            message.vote_tally = reader.uint64();
            break;

          case 5:
            message.vote_threshold = reader.uint64();
            break;

          case 6:
            message.shall_authorize = reader.bool();
            break;

          case 7:
            message.updates_governance = reader.bool();
            break;

          case 8:
            message.status = reader.int32();
            break;

          case 9:
            message.fee = reader.uint64();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    operations: Array<protocol.operation>;
    operation_merkle_root: Uint8Array;
    vote_start_height: u64;
    vote_tally: u64;
    vote_threshold: u64;
    shall_authorize: bool;
    updates_governance: bool;
    status: proposal_status;
    fee: u64;

    constructor(
      operations: Array<protocol.operation> = [],
      operation_merkle_root: Uint8Array = new Uint8Array(0),
      vote_start_height: u64 = 0,
      vote_tally: u64 = 0,
      vote_threshold: u64 = 0,
      shall_authorize: bool = false,
      updates_governance: bool = false,
      status: proposal_status = 0,
      fee: u64 = 0
    ) {
      this.operations = operations;
      this.operation_merkle_root = operation_merkle_root;
      this.vote_start_height = vote_start_height;
      this.vote_tally = vote_tally;
      this.vote_threshold = vote_threshold;
      this.shall_authorize = shall_authorize;
      this.updates_governance = updates_governance;
      this.status = status;
      this.fee = fee;
    }
  }

  export class submit_proposal_arguments {
    static encode(message: submit_proposal_arguments, writer: Writer): void {
      const unique_name_operations = message.operations;
      for (let i = 0; i < unique_name_operations.length; ++i) {
        writer.uint32(10);
        writer.fork();
        protocol.operation.encode(unique_name_operations[i], writer);
        writer.ldelim();
      }

      if (message.operation_merkle_root.length != 0) {
        writer.uint32(18);
        writer.bytes(message.operation_merkle_root);
      }

      if (message.fee != 0) {
        writer.uint32(24);
        writer.uint64(message.fee);
      }
    }

    static decode(reader: Reader, length: i32): submit_proposal_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new submit_proposal_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.operations.push(
              protocol.operation.decode(reader, reader.uint32())
            );
            break;

          case 2:
            message.operation_merkle_root = reader.bytes();
            break;

          case 3:
            message.fee = reader.uint64();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    operations: Array<protocol.operation>;
    operation_merkle_root: Uint8Array;
    fee: u64;

    constructor(
      operations: Array<protocol.operation> = [],
      operation_merkle_root: Uint8Array = new Uint8Array(0),
      fee: u64 = 0
    ) {
      this.operations = operations;
      this.operation_merkle_root = operation_merkle_root;
      this.fee = fee;
    }
  }

  @unmanaged
  export class submit_proposal_result {
    static encode(message: submit_proposal_result, writer: Writer): void {}

    static decode(reader: Reader, length: i32): submit_proposal_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new submit_proposal_result();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    constructor() {}
  }

  export class get_proposal_by_id_arguments {
    static encode(message: get_proposal_by_id_arguments, writer: Writer): void {
      if (message.proposal_id.length != 0) {
        writer.uint32(10);
        writer.bytes(message.proposal_id);
      }
    }

    static decode(reader: Reader, length: i32): get_proposal_by_id_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_proposal_by_id_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.proposal_id = reader.bytes();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    proposal_id: Uint8Array;

    constructor(proposal_id: Uint8Array = new Uint8Array(0)) {
      this.proposal_id = proposal_id;
    }
  }

  export class get_proposal_by_id_result {
    static encode(message: get_proposal_by_id_result, writer: Writer): void {
      const unique_name_value = message.value;
      if (unique_name_value !== null) {
        writer.uint32(10);
        writer.fork();
        proposal_record.encode(unique_name_value, writer);
        writer.ldelim();
      }
    }

    static decode(reader: Reader, length: i32): get_proposal_by_id_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_proposal_by_id_result();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.value = proposal_record.decode(reader, reader.uint32());
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    value: proposal_record | null;

    constructor(value: proposal_record | null = null) {
      this.value = value;
    }
  }

  export class get_proposals_by_status_arguments {
    static encode(
      message: get_proposals_by_status_arguments,
      writer: Writer
    ): void {
      if (message.start_proposal.length != 0) {
        writer.uint32(10);
        writer.bytes(message.start_proposal);
      }

      if (message.limit != 0) {
        writer.uint32(16);
        writer.uint64(message.limit);
      }

      if (message.status != 0) {
        writer.uint32(24);
        writer.int32(message.status);
      }
    }

    static decode(
      reader: Reader,
      length: i32
    ): get_proposals_by_status_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_proposals_by_status_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.start_proposal = reader.bytes();
            break;

          case 2:
            message.limit = reader.uint64();
            break;

          case 3:
            message.status = reader.int32();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    start_proposal: Uint8Array;
    limit: u64;
    status: proposal_status;

    constructor(
      start_proposal: Uint8Array = new Uint8Array(0),
      limit: u64 = 0,
      status: proposal_status = 0
    ) {
      this.start_proposal = start_proposal;
      this.limit = limit;
      this.status = status;
    }
  }

  export class get_proposals_by_status_result {
    static encode(
      message: get_proposals_by_status_result,
      writer: Writer
    ): void {
      const unique_name_value = message.value;
      for (let i = 0; i < unique_name_value.length; ++i) {
        writer.uint32(10);
        writer.fork();
        proposal_record.encode(unique_name_value[i], writer);
        writer.ldelim();
      }
    }

    static decode(reader: Reader, length: i32): get_proposals_by_status_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_proposals_by_status_result();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.value.push(proposal_record.decode(reader, reader.uint32()));
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    value: Array<proposal_record>;

    constructor(value: Array<proposal_record> = []) {
      this.value = value;
    }
  }

  export class get_proposals_arguments {
    static encode(message: get_proposals_arguments, writer: Writer): void {
      if (message.start_proposal.length != 0) {
        writer.uint32(10);
        writer.bytes(message.start_proposal);
      }

      if (message.limit != 0) {
        writer.uint32(16);
        writer.uint64(message.limit);
      }
    }

    static decode(reader: Reader, length: i32): get_proposals_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_proposals_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.start_proposal = reader.bytes();
            break;

          case 2:
            message.limit = reader.uint64();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    start_proposal: Uint8Array;
    limit: u64;

    constructor(
      start_proposal: Uint8Array = new Uint8Array(0),
      limit: u64 = 0
    ) {
      this.start_proposal = start_proposal;
      this.limit = limit;
    }
  }

  export class get_proposals_result {
    static encode(message: get_proposals_result, writer: Writer): void {
      const unique_name_value = message.value;
      for (let i = 0; i < unique_name_value.length; ++i) {
        writer.uint32(10);
        writer.fork();
        proposal_record.encode(unique_name_value[i], writer);
        writer.ldelim();
      }
    }

    static decode(reader: Reader, length: i32): get_proposals_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_proposals_result();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.value.push(proposal_record.decode(reader, reader.uint32()));
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    value: Array<proposal_record>;

    constructor(value: Array<proposal_record> = []) {
      this.value = value;
    }
  }

  export class proposal_submission_event {
    static encode(message: proposal_submission_event, writer: Writer): void {
      const unique_name_proposal = message.proposal;
      if (unique_name_proposal !== null) {
        writer.uint32(10);
        writer.fork();
        proposal_record.encode(unique_name_proposal, writer);
        writer.ldelim();
      }
    }

    static decode(reader: Reader, length: i32): proposal_submission_event {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new proposal_submission_event();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.proposal = proposal_record.decode(reader, reader.uint32());
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    proposal: proposal_record | null;

    constructor(proposal: proposal_record | null = null) {
      this.proposal = proposal;
    }
  }

  export class proposal_status_event {
    static encode(message: proposal_status_event, writer: Writer): void {
      if (message.id.length != 0) {
        writer.uint32(10);
        writer.bytes(message.id);
      }

      if (message.status != 0) {
        writer.uint32(16);
        writer.int32(message.status);
      }
    }

    static decode(reader: Reader, length: i32): proposal_status_event {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new proposal_status_event();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.id = reader.bytes();
            break;

          case 2:
            message.status = reader.int32();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    id: Uint8Array;
    status: proposal_status;

    constructor(
      id: Uint8Array = new Uint8Array(0),
      status: proposal_status = 0
    ) {
      this.id = id;
      this.status = status;
    }
  }

  export class proposal_vote_event {
    static encode(message: proposal_vote_event, writer: Writer): void {
      if (message.id.length != 0) {
        writer.uint32(10);
        writer.bytes(message.id);
      }

      if (message.vote_tally != 0) {
        writer.uint32(16);
        writer.uint64(message.vote_tally);
      }

      if (message.vote_threshold != 0) {
        writer.uint32(24);
        writer.uint64(message.vote_threshold);
      }
    }

    static decode(reader: Reader, length: i32): proposal_vote_event {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new proposal_vote_event();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.id = reader.bytes();
            break;

          case 2:
            message.vote_tally = reader.uint64();
            break;

          case 3:
            message.vote_threshold = reader.uint64();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    id: Uint8Array;
    vote_tally: u64;
    vote_threshold: u64;

    constructor(
      id: Uint8Array = new Uint8Array(0),
      vote_tally: u64 = 0,
      vote_threshold: u64 = 0
    ) {
      this.id = id;
      this.vote_tally = vote_tally;
      this.vote_threshold = vote_threshold;
    }
  }

  export enum proposal_status {
    pending = 0,
    active = 1,
    approved = 2,
    expired = 3,
    applied = 4,
    failed = 5,
    reverted = 6,
  }
}
