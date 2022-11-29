import { Writer, Reader } from "as-proto";
import { chain } from "./chain";
import { protocol } from "../protocol/protocol";
import { value } from "./value";
import { authority } from "./authority";

export namespace system_calls {
  @unmanaged
  export class nop_arguments {
    static encode(message: nop_arguments, writer: Writer): void {}

    static decode(reader: Reader, length: i32): nop_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new nop_arguments();

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

  @unmanaged
  export class nop_result {
    static encode(message: nop_result, writer: Writer): void {}

    static decode(reader: Reader, length: i32): nop_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new nop_result();

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

  @unmanaged
  export class get_head_info_arguments {
    static encode(message: get_head_info_arguments, writer: Writer): void {}

    static decode(reader: Reader, length: i32): get_head_info_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_head_info_arguments();

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

  export class get_head_info_result {
    static encode(message: get_head_info_result, writer: Writer): void {
      const unique_name_value = message.value;
      if (unique_name_value !== null) {
        writer.uint32(10);
        writer.fork();
        chain.head_info.encode(unique_name_value, writer);
        writer.ldelim();
      }
    }

    static decode(reader: Reader, length: i32): get_head_info_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_head_info_result();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.value = chain.head_info.decode(reader, reader.uint32());
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    value: chain.head_info | null;

    constructor(value: chain.head_info | null = null) {
      this.value = value;
    }
  }

  export class apply_block_arguments {
    static encode(message: apply_block_arguments, writer: Writer): void {
      const unique_name_block = message.block;
      if (unique_name_block !== null) {
        writer.uint32(10);
        writer.fork();
        protocol.block.encode(unique_name_block, writer);
        writer.ldelim();
      }
    }

    static decode(reader: Reader, length: i32): apply_block_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new apply_block_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.block = protocol.block.decode(reader, reader.uint32());
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    block: protocol.block | null;

    constructor(block: protocol.block | null = null) {
      this.block = block;
    }
  }

  @unmanaged
  export class apply_block_result {
    static encode(message: apply_block_result, writer: Writer): void {}

    static decode(reader: Reader, length: i32): apply_block_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new apply_block_result();

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

  export class apply_transaction_arguments {
    static encode(message: apply_transaction_arguments, writer: Writer): void {
      const unique_name_transaction = message.transaction;
      if (unique_name_transaction !== null) {
        writer.uint32(10);
        writer.fork();
        protocol.transaction.encode(unique_name_transaction, writer);
        writer.ldelim();
      }
    }

    static decode(reader: Reader, length: i32): apply_transaction_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new apply_transaction_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.transaction = protocol.transaction.decode(
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

    constructor(transaction: protocol.transaction | null = null) {
      this.transaction = transaction;
    }
  }

  @unmanaged
  export class apply_transaction_result {
    static encode(message: apply_transaction_result, writer: Writer): void {}

    static decode(reader: Reader, length: i32): apply_transaction_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new apply_transaction_result();

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

  export class apply_upload_contract_operation_arguments {
    static encode(
      message: apply_upload_contract_operation_arguments,
      writer: Writer
    ): void {
      const unique_name_op = message.op;
      if (unique_name_op !== null) {
        writer.uint32(10);
        writer.fork();
        protocol.upload_contract_operation.encode(unique_name_op, writer);
        writer.ldelim();
      }
    }

    static decode(
      reader: Reader,
      length: i32
    ): apply_upload_contract_operation_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new apply_upload_contract_operation_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.op = protocol.upload_contract_operation.decode(
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

    op: protocol.upload_contract_operation | null;

    constructor(op: protocol.upload_contract_operation | null = null) {
      this.op = op;
    }
  }

  @unmanaged
  export class apply_upload_contract_operation_result {
    static encode(
      message: apply_upload_contract_operation_result,
      writer: Writer
    ): void {}

    static decode(
      reader: Reader,
      length: i32
    ): apply_upload_contract_operation_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new apply_upload_contract_operation_result();

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

  export class apply_call_contract_operation_arguments {
    static encode(
      message: apply_call_contract_operation_arguments,
      writer: Writer
    ): void {
      const unique_name_op = message.op;
      if (unique_name_op !== null) {
        writer.uint32(10);
        writer.fork();
        protocol.call_contract_operation.encode(unique_name_op, writer);
        writer.ldelim();
      }
    }

    static decode(
      reader: Reader,
      length: i32
    ): apply_call_contract_operation_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new apply_call_contract_operation_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.op = protocol.call_contract_operation.decode(
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

    op: protocol.call_contract_operation | null;

    constructor(op: protocol.call_contract_operation | null = null) {
      this.op = op;
    }
  }

  @unmanaged
  export class apply_call_contract_operation_result {
    static encode(
      message: apply_call_contract_operation_result,
      writer: Writer
    ): void {}

    static decode(
      reader: Reader,
      length: i32
    ): apply_call_contract_operation_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new apply_call_contract_operation_result();

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

  export class apply_set_system_call_operation_arguments {
    static encode(
      message: apply_set_system_call_operation_arguments,
      writer: Writer
    ): void {
      const unique_name_op = message.op;
      if (unique_name_op !== null) {
        writer.uint32(10);
        writer.fork();
        protocol.set_system_call_operation.encode(unique_name_op, writer);
        writer.ldelim();
      }
    }

    static decode(
      reader: Reader,
      length: i32
    ): apply_set_system_call_operation_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new apply_set_system_call_operation_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.op = protocol.set_system_call_operation.decode(
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

    op: protocol.set_system_call_operation | null;

    constructor(op: protocol.set_system_call_operation | null = null) {
      this.op = op;
    }
  }

  @unmanaged
  export class apply_set_system_call_operation_result {
    static encode(
      message: apply_set_system_call_operation_result,
      writer: Writer
    ): void {}

    static decode(
      reader: Reader,
      length: i32
    ): apply_set_system_call_operation_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new apply_set_system_call_operation_result();

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

  export class apply_set_system_contract_operation_arguments {
    static encode(
      message: apply_set_system_contract_operation_arguments,
      writer: Writer
    ): void {
      const unique_name_op = message.op;
      if (unique_name_op !== null) {
        writer.uint32(10);
        writer.fork();
        protocol.set_system_contract_operation.encode(unique_name_op, writer);
        writer.ldelim();
      }
    }

    static decode(
      reader: Reader,
      length: i32
    ): apply_set_system_contract_operation_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new apply_set_system_contract_operation_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.op = protocol.set_system_contract_operation.decode(
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

    op: protocol.set_system_contract_operation | null;

    constructor(op: protocol.set_system_contract_operation | null = null) {
      this.op = op;
    }
  }

  @unmanaged
  export class apply_set_system_contract_operation_result {
    static encode(
      message: apply_set_system_contract_operation_result,
      writer: Writer
    ): void {}

    static decode(
      reader: Reader,
      length: i32
    ): apply_set_system_contract_operation_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new apply_set_system_contract_operation_result();

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

  @unmanaged
  export class pre_block_callback_arguments {
    static encode(
      message: pre_block_callback_arguments,
      writer: Writer
    ): void {}

    static decode(reader: Reader, length: i32): pre_block_callback_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new pre_block_callback_arguments();

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

  @unmanaged
  export class pre_block_callback_result {
    static encode(message: pre_block_callback_result, writer: Writer): void {}

    static decode(reader: Reader, length: i32): pre_block_callback_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new pre_block_callback_result();

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

  @unmanaged
  export class post_block_callback_arguments {
    static encode(
      message: post_block_callback_arguments,
      writer: Writer
    ): void {}

    static decode(reader: Reader, length: i32): post_block_callback_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new post_block_callback_arguments();

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

  @unmanaged
  export class post_block_callback_result {
    static encode(message: post_block_callback_result, writer: Writer): void {}

    static decode(reader: Reader, length: i32): post_block_callback_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new post_block_callback_result();

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

  @unmanaged
  export class pre_transaction_callback_arguments {
    static encode(
      message: pre_transaction_callback_arguments,
      writer: Writer
    ): void {}

    static decode(
      reader: Reader,
      length: i32
    ): pre_transaction_callback_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new pre_transaction_callback_arguments();

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

  @unmanaged
  export class pre_transaction_callback_result {
    static encode(
      message: pre_transaction_callback_result,
      writer: Writer
    ): void {}

    static decode(
      reader: Reader,
      length: i32
    ): pre_transaction_callback_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new pre_transaction_callback_result();

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

  @unmanaged
  export class post_transaction_callback_arguments {
    static encode(
      message: post_transaction_callback_arguments,
      writer: Writer
    ): void {}

    static decode(
      reader: Reader,
      length: i32
    ): post_transaction_callback_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new post_transaction_callback_arguments();

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

  @unmanaged
  export class post_transaction_callback_result {
    static encode(
      message: post_transaction_callback_result,
      writer: Writer
    ): void {}

    static decode(
      reader: Reader,
      length: i32
    ): post_transaction_callback_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new post_transaction_callback_result();

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

  @unmanaged
  export class get_chain_id_arguments {
    static encode(message: get_chain_id_arguments, writer: Writer): void {}

    static decode(reader: Reader, length: i32): get_chain_id_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_chain_id_arguments();

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

  export class get_chain_id_result {
    static encode(message: get_chain_id_result, writer: Writer): void {
      if (message.value.length != 0) {
        writer.uint32(10);
        writer.bytes(message.value);
      }
    }

    static decode(reader: Reader, length: i32): get_chain_id_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_chain_id_result();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.value = reader.bytes();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    value: Uint8Array;

    constructor(value: Uint8Array = new Uint8Array(0)) {
      this.value = value;
    }
  }

  export class process_block_signature_arguments {
    static encode(
      message: process_block_signature_arguments,
      writer: Writer
    ): void {
      if (message.digest.length != 0) {
        writer.uint32(10);
        writer.bytes(message.digest);
      }

      const unique_name_header = message.header;
      if (unique_name_header !== null) {
        writer.uint32(18);
        writer.fork();
        protocol.block_header.encode(unique_name_header, writer);
        writer.ldelim();
      }

      if (message.signature.length != 0) {
        writer.uint32(26);
        writer.bytes(message.signature);
      }
    }

    static decode(
      reader: Reader,
      length: i32
    ): process_block_signature_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new process_block_signature_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.digest = reader.bytes();
            break;

          case 2:
            message.header = protocol.block_header.decode(
              reader,
              reader.uint32()
            );
            break;

          case 3:
            message.signature = reader.bytes();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    digest: Uint8Array;
    header: protocol.block_header | null;
    signature: Uint8Array;

    constructor(
      digest: Uint8Array = new Uint8Array(0),
      header: protocol.block_header | null = null,
      signature: Uint8Array = new Uint8Array(0)
    ) {
      this.digest = digest;
      this.header = header;
      this.signature = signature;
    }
  }

  @unmanaged
  export class process_block_signature_result {
    static encode(
      message: process_block_signature_result,
      writer: Writer
    ): void {
      if (message.value != false) {
        writer.uint32(8);
        writer.bool(message.value);
      }
    }

    static decode(reader: Reader, length: i32): process_block_signature_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new process_block_signature_result();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.value = reader.bool();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    value: bool;

    constructor(value: bool = false) {
      this.value = value;
    }
  }

  @unmanaged
  export class get_transaction_arguments {
    static encode(message: get_transaction_arguments, writer: Writer): void {}

    static decode(reader: Reader, length: i32): get_transaction_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_transaction_arguments();

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

  export class get_transaction_result {
    static encode(message: get_transaction_result, writer: Writer): void {
      const unique_name_value = message.value;
      if (unique_name_value !== null) {
        writer.uint32(10);
        writer.fork();
        protocol.transaction.encode(unique_name_value, writer);
        writer.ldelim();
      }
    }

    static decode(reader: Reader, length: i32): get_transaction_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_transaction_result();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.value = protocol.transaction.decode(
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

    value: protocol.transaction | null;

    constructor(value: protocol.transaction | null = null) {
      this.value = value;
    }
  }

  export class get_transaction_field_arguments {
    static encode(
      message: get_transaction_field_arguments,
      writer: Writer
    ): void {
      if (message.field.length != 0) {
        writer.uint32(10);
        writer.string(message.field);
      }
    }

    static decode(
      reader: Reader,
      length: i32
    ): get_transaction_field_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_transaction_field_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.field = reader.string();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    field: string;

    constructor(field: string = "") {
      this.field = field;
    }
  }

  export class get_transaction_field_result {
    static encode(message: get_transaction_field_result, writer: Writer): void {
      const unique_name_value = message.value;
      if (unique_name_value !== null) {
        writer.uint32(10);
        writer.fork();
        value.value_type.encode(unique_name_value, writer);
        writer.ldelim();
      }
    }

    static decode(reader: Reader, length: i32): get_transaction_field_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_transaction_field_result();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.value = value.value_type.decode(reader, reader.uint32());
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    value: value.value_type | null;

    constructor(value: value.value_type | null = null) {
      this.value = value;
    }
  }

  @unmanaged
  export class get_block_arguments {
    static encode(message: get_block_arguments, writer: Writer): void {}

    static decode(reader: Reader, length: i32): get_block_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_block_arguments();

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

  export class get_block_result {
    static encode(message: get_block_result, writer: Writer): void {
      const unique_name_value = message.value;
      if (unique_name_value !== null) {
        writer.uint32(10);
        writer.fork();
        protocol.block.encode(unique_name_value, writer);
        writer.ldelim();
      }
    }

    static decode(reader: Reader, length: i32): get_block_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_block_result();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.value = protocol.block.decode(reader, reader.uint32());
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    value: protocol.block | null;

    constructor(value: protocol.block | null = null) {
      this.value = value;
    }
  }

  export class get_block_field_arguments {
    static encode(message: get_block_field_arguments, writer: Writer): void {
      if (message.field.length != 0) {
        writer.uint32(10);
        writer.string(message.field);
      }
    }

    static decode(reader: Reader, length: i32): get_block_field_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_block_field_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.field = reader.string();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    field: string;

    constructor(field: string = "") {
      this.field = field;
    }
  }

  export class get_block_field_result {
    static encode(message: get_block_field_result, writer: Writer): void {
      const unique_name_value = message.value;
      if (unique_name_value !== null) {
        writer.uint32(10);
        writer.fork();
        value.value_type.encode(unique_name_value, writer);
        writer.ldelim();
      }
    }

    static decode(reader: Reader, length: i32): get_block_field_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_block_field_result();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.value = value.value_type.decode(reader, reader.uint32());
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    value: value.value_type | null;

    constructor(value: value.value_type | null = null) {
      this.value = value;
    }
  }

  @unmanaged
  export class get_last_irreversible_block_arguments {
    static encode(
      message: get_last_irreversible_block_arguments,
      writer: Writer
    ): void {}

    static decode(
      reader: Reader,
      length: i32
    ): get_last_irreversible_block_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_last_irreversible_block_arguments();

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

  @unmanaged
  export class get_last_irreversible_block_result {
    static encode(
      message: get_last_irreversible_block_result,
      writer: Writer
    ): void {
      if (message.value != 0) {
        writer.uint32(8);
        writer.uint64(message.value);
      }
    }

    static decode(
      reader: Reader,
      length: i32
    ): get_last_irreversible_block_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_last_irreversible_block_result();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.value = reader.uint64();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    value: u64;

    constructor(value: u64 = 0) {
      this.value = value;
    }
  }

  export class get_account_nonce_arguments {
    static encode(message: get_account_nonce_arguments, writer: Writer): void {
      if (message.account.length != 0) {
        writer.uint32(10);
        writer.bytes(message.account);
      }
    }

    static decode(reader: Reader, length: i32): get_account_nonce_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_account_nonce_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.account = reader.bytes();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    account: Uint8Array;

    constructor(account: Uint8Array = new Uint8Array(0)) {
      this.account = account;
    }
  }

  export class get_account_nonce_result {
    static encode(message: get_account_nonce_result, writer: Writer): void {
      if (message.value.length != 0) {
        writer.uint32(10);
        writer.bytes(message.value);
      }
    }

    static decode(reader: Reader, length: i32): get_account_nonce_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_account_nonce_result();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.value = reader.bytes();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    value: Uint8Array;

    constructor(value: Uint8Array = new Uint8Array(0)) {
      this.value = value;
    }
  }

  export class verify_account_nonce_arguments {
    static encode(
      message: verify_account_nonce_arguments,
      writer: Writer
    ): void {
      if (message.account.length != 0) {
        writer.uint32(10);
        writer.bytes(message.account);
      }

      if (message.nonce.length != 0) {
        writer.uint32(18);
        writer.bytes(message.nonce);
      }
    }

    static decode(reader: Reader, length: i32): verify_account_nonce_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new verify_account_nonce_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.account = reader.bytes();
            break;

          case 2:
            message.nonce = reader.bytes();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    account: Uint8Array;
    nonce: Uint8Array;

    constructor(
      account: Uint8Array = new Uint8Array(0),
      nonce: Uint8Array = new Uint8Array(0)
    ) {
      this.account = account;
      this.nonce = nonce;
    }
  }

  @unmanaged
  export class verify_account_nonce_result {
    static encode(message: verify_account_nonce_result, writer: Writer): void {
      if (message.value != false) {
        writer.uint32(8);
        writer.bool(message.value);
      }
    }

    static decode(reader: Reader, length: i32): verify_account_nonce_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new verify_account_nonce_result();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.value = reader.bool();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    value: bool;

    constructor(value: bool = false) {
      this.value = value;
    }
  }

  export class set_account_nonce_arguments {
    static encode(message: set_account_nonce_arguments, writer: Writer): void {
      if (message.account.length != 0) {
        writer.uint32(10);
        writer.bytes(message.account);
      }

      if (message.nonce.length != 0) {
        writer.uint32(18);
        writer.bytes(message.nonce);
      }
    }

    static decode(reader: Reader, length: i32): set_account_nonce_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new set_account_nonce_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.account = reader.bytes();
            break;

          case 2:
            message.nonce = reader.bytes();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    account: Uint8Array;
    nonce: Uint8Array;

    constructor(
      account: Uint8Array = new Uint8Array(0),
      nonce: Uint8Array = new Uint8Array(0)
    ) {
      this.account = account;
      this.nonce = nonce;
    }
  }

  @unmanaged
  export class set_account_nonce_result {
    static encode(message: set_account_nonce_result, writer: Writer): void {}

    static decode(reader: Reader, length: i32): set_account_nonce_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new set_account_nonce_result();

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

  @unmanaged
  export class check_system_authority_arguments {
    static encode(
      message: check_system_authority_arguments,
      writer: Writer
    ): void {}

    static decode(
      reader: Reader,
      length: i32
    ): check_system_authority_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new check_system_authority_arguments();

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

  @unmanaged
  export class check_system_authority_result {
    static encode(
      message: check_system_authority_result,
      writer: Writer
    ): void {
      if (message.value != false) {
        writer.uint32(8);
        writer.bool(message.value);
      }
    }

    static decode(reader: Reader, length: i32): check_system_authority_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new check_system_authority_result();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.value = reader.bool();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    value: bool;

    constructor(value: bool = false) {
      this.value = value;
    }
  }

  @unmanaged
  export class get_operation_arguments {
    static encode(message: get_operation_arguments, writer: Writer): void {}

    static decode(reader: Reader, length: i32): get_operation_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_operation_arguments();

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

  export class get_operation_result {
    static encode(message: get_operation_result, writer: Writer): void {
      const unique_name_value = message.value;
      if (unique_name_value !== null) {
        writer.uint32(10);
        writer.fork();
        protocol.operation.encode(unique_name_value, writer);
        writer.ldelim();
      }
    }

    static decode(reader: Reader, length: i32): get_operation_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_operation_result();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.value = protocol.operation.decode(reader, reader.uint32());
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    value: protocol.operation | null;

    constructor(value: protocol.operation | null = null) {
      this.value = value;
    }
  }

  export class get_account_rc_arguments {
    static encode(message: get_account_rc_arguments, writer: Writer): void {
      if (message.account.length != 0) {
        writer.uint32(10);
        writer.bytes(message.account);
      }
    }

    static decode(reader: Reader, length: i32): get_account_rc_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_account_rc_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.account = reader.bytes();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    account: Uint8Array;

    constructor(account: Uint8Array = new Uint8Array(0)) {
      this.account = account;
    }
  }

  @unmanaged
  export class get_account_rc_result {
    static encode(message: get_account_rc_result, writer: Writer): void {
      if (message.value != 0) {
        writer.uint32(8);
        writer.uint64(message.value);
      }
    }

    static decode(reader: Reader, length: i32): get_account_rc_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_account_rc_result();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.value = reader.uint64();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    value: u64;

    constructor(value: u64 = 0) {
      this.value = value;
    }
  }

  export class consume_account_rc_arguments {
    static encode(message: consume_account_rc_arguments, writer: Writer): void {
      if (message.account.length != 0) {
        writer.uint32(10);
        writer.bytes(message.account);
      }

      if (message.value != 0) {
        writer.uint32(16);
        writer.uint64(message.value);
      }
    }

    static decode(reader: Reader, length: i32): consume_account_rc_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new consume_account_rc_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.account = reader.bytes();
            break;

          case 2:
            message.value = reader.uint64();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    account: Uint8Array;
    value: u64;

    constructor(account: Uint8Array = new Uint8Array(0), value: u64 = 0) {
      this.account = account;
      this.value = value;
    }
  }

  @unmanaged
  export class consume_account_rc_result {
    static encode(message: consume_account_rc_result, writer: Writer): void {
      if (message.value != false) {
        writer.uint32(8);
        writer.bool(message.value);
      }
    }

    static decode(reader: Reader, length: i32): consume_account_rc_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new consume_account_rc_result();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.value = reader.bool();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    value: bool;

    constructor(value: bool = false) {
      this.value = value;
    }
  }

  @unmanaged
  export class get_resource_limits_arguments {
    static encode(
      message: get_resource_limits_arguments,
      writer: Writer
    ): void {}

    static decode(reader: Reader, length: i32): get_resource_limits_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_resource_limits_arguments();

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

  @unmanaged
  export class get_resource_limits_result {
    static encode(message: get_resource_limits_result, writer: Writer): void {
      const unique_name_value = message.value;
      if (unique_name_value !== null) {
        writer.uint32(10);
        writer.fork();
        chain.resource_limit_data.encode(unique_name_value, writer);
        writer.ldelim();
      }
    }

    static decode(reader: Reader, length: i32): get_resource_limits_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_resource_limits_result();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.value = chain.resource_limit_data.decode(
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

    value: chain.resource_limit_data | null;

    constructor(value: chain.resource_limit_data | null = null) {
      this.value = value;
    }
  }

  @unmanaged
  export class consume_block_resources_arguments {
    static encode(
      message: consume_block_resources_arguments,
      writer: Writer
    ): void {
      if (message.disk_storage_consumed != 0) {
        writer.uint32(8);
        writer.uint64(message.disk_storage_consumed);
      }

      if (message.network_bandwidth_consumed != 0) {
        writer.uint32(16);
        writer.uint64(message.network_bandwidth_consumed);
      }

      if (message.compute_bandwidth_consumed != 0) {
        writer.uint32(24);
        writer.uint64(message.compute_bandwidth_consumed);
      }
    }

    static decode(
      reader: Reader,
      length: i32
    ): consume_block_resources_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new consume_block_resources_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.disk_storage_consumed = reader.uint64();
            break;

          case 2:
            message.network_bandwidth_consumed = reader.uint64();
            break;

          case 3:
            message.compute_bandwidth_consumed = reader.uint64();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    disk_storage_consumed: u64;
    network_bandwidth_consumed: u64;
    compute_bandwidth_consumed: u64;

    constructor(
      disk_storage_consumed: u64 = 0,
      network_bandwidth_consumed: u64 = 0,
      compute_bandwidth_consumed: u64 = 0
    ) {
      this.disk_storage_consumed = disk_storage_consumed;
      this.network_bandwidth_consumed = network_bandwidth_consumed;
      this.compute_bandwidth_consumed = compute_bandwidth_consumed;
    }
  }

  @unmanaged
  export class consume_block_resources_result {
    static encode(
      message: consume_block_resources_result,
      writer: Writer
    ): void {
      if (message.value != false) {
        writer.uint32(8);
        writer.bool(message.value);
      }
    }

    static decode(reader: Reader, length: i32): consume_block_resources_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new consume_block_resources_result();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.value = reader.bool();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    value: bool;

    constructor(value: bool = false) {
      this.value = value;
    }
  }

  export class put_object_arguments {
    static encode(message: put_object_arguments, writer: Writer): void {
      const unique_name_space = message.space;
      if (unique_name_space !== null) {
        writer.uint32(10);
        writer.fork();
        chain.object_space.encode(unique_name_space, writer);
        writer.ldelim();
      }

      if (message.key.length != 0) {
        writer.uint32(18);
        writer.bytes(message.key);
      }

      if (message.obj.length != 0) {
        writer.uint32(26);
        writer.bytes(message.obj);
      }
    }

    static decode(reader: Reader, length: i32): put_object_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new put_object_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.space = chain.object_space.decode(reader, reader.uint32());
            break;

          case 2:
            message.key = reader.bytes();
            break;

          case 3:
            message.obj = reader.bytes();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    space: chain.object_space | null;
    key: Uint8Array;
    obj: Uint8Array;

    constructor(
      space: chain.object_space | null = null,
      key: Uint8Array = new Uint8Array(0),
      obj: Uint8Array = new Uint8Array(0)
    ) {
      this.space = space;
      this.key = key;
      this.obj = obj;
    }
  }

  @unmanaged
  export class put_object_result {
    static encode(message: put_object_result, writer: Writer): void {}

    static decode(reader: Reader, length: i32): put_object_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new put_object_result();

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

  export class remove_object_arguments {
    static encode(message: remove_object_arguments, writer: Writer): void {
      const unique_name_space = message.space;
      if (unique_name_space !== null) {
        writer.uint32(10);
        writer.fork();
        chain.object_space.encode(unique_name_space, writer);
        writer.ldelim();
      }

      if (message.key.length != 0) {
        writer.uint32(18);
        writer.bytes(message.key);
      }
    }

    static decode(reader: Reader, length: i32): remove_object_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new remove_object_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.space = chain.object_space.decode(reader, reader.uint32());
            break;

          case 2:
            message.key = reader.bytes();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    space: chain.object_space | null;
    key: Uint8Array;

    constructor(
      space: chain.object_space | null = null,
      key: Uint8Array = new Uint8Array(0)
    ) {
      this.space = space;
      this.key = key;
    }
  }

  @unmanaged
  export class remove_object_result {
    static encode(message: remove_object_result, writer: Writer): void {}

    static decode(reader: Reader, length: i32): remove_object_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new remove_object_result();

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

  export class get_object_arguments {
    static encode(message: get_object_arguments, writer: Writer): void {
      const unique_name_space = message.space;
      if (unique_name_space !== null) {
        writer.uint32(10);
        writer.fork();
        chain.object_space.encode(unique_name_space, writer);
        writer.ldelim();
      }

      if (message.key.length != 0) {
        writer.uint32(18);
        writer.bytes(message.key);
      }
    }

    static decode(reader: Reader, length: i32): get_object_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_object_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.space = chain.object_space.decode(reader, reader.uint32());
            break;

          case 2:
            message.key = reader.bytes();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    space: chain.object_space | null;
    key: Uint8Array;

    constructor(
      space: chain.object_space | null = null,
      key: Uint8Array = new Uint8Array(0)
    ) {
      this.space = space;
      this.key = key;
    }
  }

  export class database_object {
    static encode(message: database_object, writer: Writer): void {
      if (message.exists != false) {
        writer.uint32(8);
        writer.bool(message.exists);
      }

      if (message.value.length != 0) {
        writer.uint32(18);
        writer.bytes(message.value);
      }

      if (message.key.length != 0) {
        writer.uint32(26);
        writer.bytes(message.key);
      }
    }

    static decode(reader: Reader, length: i32): database_object {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new database_object();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.exists = reader.bool();
            break;

          case 2:
            message.value = reader.bytes();
            break;

          case 3:
            message.key = reader.bytes();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    exists: bool;
    value: Uint8Array;
    key: Uint8Array;

    constructor(
      exists: bool = false,
      value: Uint8Array = new Uint8Array(0),
      key: Uint8Array = new Uint8Array(0)
    ) {
      this.exists = exists;
      this.value = value;
      this.key = key;
    }
  }

  export class get_object_result {
    static encode(message: get_object_result, writer: Writer): void {
      const unique_name_value = message.value;
      if (unique_name_value !== null) {
        writer.uint32(10);
        writer.fork();
        database_object.encode(unique_name_value, writer);
        writer.ldelim();
      }
    }

    static decode(reader: Reader, length: i32): get_object_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_object_result();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.value = database_object.decode(reader, reader.uint32());
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    value: database_object | null;

    constructor(value: database_object | null = null) {
      this.value = value;
    }
  }

  export class get_next_object_arguments {
    static encode(message: get_next_object_arguments, writer: Writer): void {
      const unique_name_space = message.space;
      if (unique_name_space !== null) {
        writer.uint32(10);
        writer.fork();
        chain.object_space.encode(unique_name_space, writer);
        writer.ldelim();
      }

      if (message.key.length != 0) {
        writer.uint32(18);
        writer.bytes(message.key);
      }
    }

    static decode(reader: Reader, length: i32): get_next_object_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_next_object_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.space = chain.object_space.decode(reader, reader.uint32());
            break;

          case 2:
            message.key = reader.bytes();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    space: chain.object_space | null;
    key: Uint8Array;

    constructor(
      space: chain.object_space | null = null,
      key: Uint8Array = new Uint8Array(0)
    ) {
      this.space = space;
      this.key = key;
    }
  }

  export class get_next_object_result {
    static encode(message: get_next_object_result, writer: Writer): void {
      const unique_name_value = message.value;
      if (unique_name_value !== null) {
        writer.uint32(10);
        writer.fork();
        database_object.encode(unique_name_value, writer);
        writer.ldelim();
      }
    }

    static decode(reader: Reader, length: i32): get_next_object_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_next_object_result();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.value = database_object.decode(reader, reader.uint32());
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    value: database_object | null;

    constructor(value: database_object | null = null) {
      this.value = value;
    }
  }

  export class get_prev_object_arguments {
    static encode(message: get_prev_object_arguments, writer: Writer): void {
      const unique_name_space = message.space;
      if (unique_name_space !== null) {
        writer.uint32(10);
        writer.fork();
        chain.object_space.encode(unique_name_space, writer);
        writer.ldelim();
      }

      if (message.key.length != 0) {
        writer.uint32(18);
        writer.bytes(message.key);
      }
    }

    static decode(reader: Reader, length: i32): get_prev_object_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_prev_object_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.space = chain.object_space.decode(reader, reader.uint32());
            break;

          case 2:
            message.key = reader.bytes();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    space: chain.object_space | null;
    key: Uint8Array;

    constructor(
      space: chain.object_space | null = null,
      key: Uint8Array = new Uint8Array(0)
    ) {
      this.space = space;
      this.key = key;
    }
  }

  export class get_prev_object_result {
    static encode(message: get_prev_object_result, writer: Writer): void {
      const unique_name_value = message.value;
      if (unique_name_value !== null) {
        writer.uint32(10);
        writer.fork();
        database_object.encode(unique_name_value, writer);
        writer.ldelim();
      }
    }

    static decode(reader: Reader, length: i32): get_prev_object_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_prev_object_result();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.value = database_object.decode(reader, reader.uint32());
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    value: database_object | null;

    constructor(value: database_object | null = null) {
      this.value = value;
    }
  }

  export class log_arguments {
    static encode(message: log_arguments, writer: Writer): void {
      if (message.message.length != 0) {
        writer.uint32(10);
        writer.string(message.message);
      }
    }

    static decode(reader: Reader, length: i32): log_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new log_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.message = reader.string();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    message: string;

    constructor(message: string = "") {
      this.message = message;
    }
  }

  @unmanaged
  export class log_result {
    static encode(message: log_result, writer: Writer): void {}

    static decode(reader: Reader, length: i32): log_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new log_result();

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

  export class event_arguments {
    static encode(message: event_arguments, writer: Writer): void {
      if (message.name.length != 0) {
        writer.uint32(10);
        writer.string(message.name);
      }

      if (message.data.length != 0) {
        writer.uint32(18);
        writer.bytes(message.data);
      }

      const unique_name_impacted = message.impacted;
      if (unique_name_impacted.length !== 0) {
        for (let i = 0; i < unique_name_impacted.length; ++i) {
          writer.uint32(26);
          writer.bytes(unique_name_impacted[i]);
        }
      }
    }

    static decode(reader: Reader, length: i32): event_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new event_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.name = reader.string();
            break;

          case 2:
            message.data = reader.bytes();
            break;

          case 3:
            message.impacted.push(reader.bytes());
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    name: string;
    data: Uint8Array;
    impacted: Array<Uint8Array>;

    constructor(
      name: string = "",
      data: Uint8Array = new Uint8Array(0),
      impacted: Array<Uint8Array> = []
    ) {
      this.name = name;
      this.data = data;
      this.impacted = impacted;
    }
  }

  @unmanaged
  export class event_result {
    static encode(message: event_result, writer: Writer): void {}

    static decode(reader: Reader, length: i32): event_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new event_result();

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

  export class hash_arguments {
    static encode(message: hash_arguments, writer: Writer): void {
      if (message.code != 0) {
        writer.uint32(8);
        writer.uint64(message.code);
      }

      if (message.obj.length != 0) {
        writer.uint32(18);
        writer.bytes(message.obj);
      }

      if (message.size != 0) {
        writer.uint32(24);
        writer.uint64(message.size);
      }
    }

    static decode(reader: Reader, length: i32): hash_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new hash_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.code = reader.uint64();
            break;

          case 2:
            message.obj = reader.bytes();
            break;

          case 3:
            message.size = reader.uint64();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    code: u64;
    obj: Uint8Array;
    size: u64;

    constructor(
      code: u64 = 0,
      obj: Uint8Array = new Uint8Array(0),
      size: u64 = 0
    ) {
      this.code = code;
      this.obj = obj;
      this.size = size;
    }
  }

  export class hash_result {
    static encode(message: hash_result, writer: Writer): void {
      if (message.value.length != 0) {
        writer.uint32(10);
        writer.bytes(message.value);
      }
    }

    static decode(reader: Reader, length: i32): hash_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new hash_result();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.value = reader.bytes();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    value: Uint8Array;

    constructor(value: Uint8Array = new Uint8Array(0)) {
      this.value = value;
    }
  }

  export class recover_public_key_arguments {
    static encode(message: recover_public_key_arguments, writer: Writer): void {
      if (message.type != 0) {
        writer.uint32(8);
        writer.int32(message.type);
      }

      if (message.signature.length != 0) {
        writer.uint32(18);
        writer.bytes(message.signature);
      }

      if (message.digest.length != 0) {
        writer.uint32(26);
        writer.bytes(message.digest);
      }

      if (message.compressed != false) {
        writer.uint32(32);
        writer.bool(message.compressed);
      }
    }

    static decode(reader: Reader, length: i32): recover_public_key_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new recover_public_key_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.type = reader.int32();
            break;

          case 2:
            message.signature = reader.bytes();
            break;

          case 3:
            message.digest = reader.bytes();
            break;

          case 4:
            message.compressed = reader.bool();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    type: chain.dsa;
    signature: Uint8Array;
    digest: Uint8Array;
    compressed: bool;

    constructor(
      type: chain.dsa = 0,
      signature: Uint8Array = new Uint8Array(0),
      digest: Uint8Array = new Uint8Array(0),
      compressed: bool = false
    ) {
      this.type = type;
      this.signature = signature;
      this.digest = digest;
      this.compressed = compressed;
    }
  }

  export class recover_public_key_result {
    static encode(message: recover_public_key_result, writer: Writer): void {
      if (message.value.length != 0) {
        writer.uint32(10);
        writer.bytes(message.value);
      }
    }

    static decode(reader: Reader, length: i32): recover_public_key_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new recover_public_key_result();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.value = reader.bytes();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    value: Uint8Array;

    constructor(value: Uint8Array = new Uint8Array(0)) {
      this.value = value;
    }
  }

  export class verify_merkle_root_arguments {
    static encode(message: verify_merkle_root_arguments, writer: Writer): void {
      if (message.root.length != 0) {
        writer.uint32(10);
        writer.bytes(message.root);
      }

      const unique_name_hashes = message.hashes;
      if (unique_name_hashes.length !== 0) {
        for (let i = 0; i < unique_name_hashes.length; ++i) {
          writer.uint32(18);
          writer.bytes(unique_name_hashes[i]);
        }
      }
    }

    static decode(reader: Reader, length: i32): verify_merkle_root_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new verify_merkle_root_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.root = reader.bytes();
            break;

          case 2:
            message.hashes.push(reader.bytes());
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    root: Uint8Array;
    hashes: Array<Uint8Array>;

    constructor(
      root: Uint8Array = new Uint8Array(0),
      hashes: Array<Uint8Array> = []
    ) {
      this.root = root;
      this.hashes = hashes;
    }
  }

  @unmanaged
  export class verify_merkle_root_result {
    static encode(message: verify_merkle_root_result, writer: Writer): void {
      if (message.value != false) {
        writer.uint32(8);
        writer.bool(message.value);
      }
    }

    static decode(reader: Reader, length: i32): verify_merkle_root_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new verify_merkle_root_result();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.value = reader.bool();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    value: bool;

    constructor(value: bool = false) {
      this.value = value;
    }
  }

  export class verify_signature_arguments {
    static encode(message: verify_signature_arguments, writer: Writer): void {
      if (message.type != 0) {
        writer.uint32(8);
        writer.int32(message.type);
      }

      if (message.public_key.length != 0) {
        writer.uint32(18);
        writer.bytes(message.public_key);
      }

      if (message.signature.length != 0) {
        writer.uint32(26);
        writer.bytes(message.signature);
      }

      if (message.digest.length != 0) {
        writer.uint32(34);
        writer.bytes(message.digest);
      }

      if (message.compressed != false) {
        writer.uint32(40);
        writer.bool(message.compressed);
      }
    }

    static decode(reader: Reader, length: i32): verify_signature_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new verify_signature_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.type = reader.int32();
            break;

          case 2:
            message.public_key = reader.bytes();
            break;

          case 3:
            message.signature = reader.bytes();
            break;

          case 4:
            message.digest = reader.bytes();
            break;

          case 5:
            message.compressed = reader.bool();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    type: chain.dsa;
    public_key: Uint8Array;
    signature: Uint8Array;
    digest: Uint8Array;
    compressed: bool;

    constructor(
      type: chain.dsa = 0,
      public_key: Uint8Array = new Uint8Array(0),
      signature: Uint8Array = new Uint8Array(0),
      digest: Uint8Array = new Uint8Array(0),
      compressed: bool = false
    ) {
      this.type = type;
      this.public_key = public_key;
      this.signature = signature;
      this.digest = digest;
      this.compressed = compressed;
    }
  }

  @unmanaged
  export class verify_signature_result {
    static encode(message: verify_signature_result, writer: Writer): void {
      if (message.value != false) {
        writer.uint32(8);
        writer.bool(message.value);
      }
    }

    static decode(reader: Reader, length: i32): verify_signature_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new verify_signature_result();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.value = reader.bool();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    value: bool;

    constructor(value: bool = false) {
      this.value = value;
    }
  }

  export class verify_vrf_proof_arguments {
    static encode(message: verify_vrf_proof_arguments, writer: Writer): void {
      if (message.type != 0) {
        writer.uint32(8);
        writer.int32(message.type);
      }

      if (message.public_key.length != 0) {
        writer.uint32(18);
        writer.bytes(message.public_key);
      }

      if (message.proof.length != 0) {
        writer.uint32(26);
        writer.bytes(message.proof);
      }

      if (message.hash.length != 0) {
        writer.uint32(34);
        writer.bytes(message.hash);
      }

      if (message.message.length != 0) {
        writer.uint32(42);
        writer.bytes(message.message);
      }
    }

    static decode(reader: Reader, length: i32): verify_vrf_proof_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new verify_vrf_proof_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.type = reader.int32();
            break;

          case 2:
            message.public_key = reader.bytes();
            break;

          case 3:
            message.proof = reader.bytes();
            break;

          case 4:
            message.hash = reader.bytes();
            break;

          case 5:
            message.message = reader.bytes();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    type: chain.dsa;
    public_key: Uint8Array;
    proof: Uint8Array;
    hash: Uint8Array;
    message: Uint8Array;

    constructor(
      type: chain.dsa = 0,
      public_key: Uint8Array = new Uint8Array(0),
      proof: Uint8Array = new Uint8Array(0),
      hash: Uint8Array = new Uint8Array(0),
      message: Uint8Array = new Uint8Array(0)
    ) {
      this.type = type;
      this.public_key = public_key;
      this.proof = proof;
      this.hash = hash;
      this.message = message;
    }
  }

  @unmanaged
  export class verify_vrf_proof_result {
    static encode(message: verify_vrf_proof_result, writer: Writer): void {
      if (message.value != false) {
        writer.uint32(8);
        writer.bool(message.value);
      }
    }

    static decode(reader: Reader, length: i32): verify_vrf_proof_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new verify_vrf_proof_result();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.value = reader.bool();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    value: bool;

    constructor(value: bool = false) {
      this.value = value;
    }
  }

  export class call_arguments {
    static encode(message: call_arguments, writer: Writer): void {
      if (message.contract_id.length != 0) {
        writer.uint32(10);
        writer.bytes(message.contract_id);
      }

      if (message.entry_point != 0) {
        writer.uint32(16);
        writer.uint32(message.entry_point);
      }

      if (message.args.length != 0) {
        writer.uint32(26);
        writer.bytes(message.args);
      }
    }

    static decode(reader: Reader, length: i32): call_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new call_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.contract_id = reader.bytes();
            break;

          case 2:
            message.entry_point = reader.uint32();
            break;

          case 3:
            message.args = reader.bytes();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    contract_id: Uint8Array;
    entry_point: u32;
    args: Uint8Array;

    constructor(
      contract_id: Uint8Array = new Uint8Array(0),
      entry_point: u32 = 0,
      args: Uint8Array = new Uint8Array(0)
    ) {
      this.contract_id = contract_id;
      this.entry_point = entry_point;
      this.args = args;
    }
  }

  export class call_result {
    static encode(message: call_result, writer: Writer): void {
      if (message.value.length != 0) {
        writer.uint32(10);
        writer.bytes(message.value);
      }
    }

    static decode(reader: Reader, length: i32): call_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new call_result();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.value = reader.bytes();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    value: Uint8Array;

    constructor(value: Uint8Array = new Uint8Array(0)) {
      this.value = value;
    }
  }

  @unmanaged
  export class get_arguments_arguments {
    static encode(message: get_arguments_arguments, writer: Writer): void {}

    static decode(reader: Reader, length: i32): get_arguments_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_arguments_arguments();

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

  export class get_arguments_result {
    static encode(message: get_arguments_result, writer: Writer): void {
      const unique_name_value = message.value;
      if (unique_name_value !== null) {
        writer.uint32(10);
        writer.fork();
        chain.argument_data.encode(unique_name_value, writer);
        writer.ldelim();
      }
    }

    static decode(reader: Reader, length: i32): get_arguments_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_arguments_result();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.value = chain.argument_data.decode(reader, reader.uint32());
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    value: chain.argument_data | null;

    constructor(value: chain.argument_data | null = null) {
      this.value = value;
    }
  }

  export class exit_arguments {
    static encode(message: exit_arguments, writer: Writer): void {
      if (message.code != 0) {
        writer.uint32(8);
        writer.int32(message.code);
      }

      const unique_name_res = message.res;
      if (unique_name_res !== null) {
        writer.uint32(18);
        writer.fork();
        chain.result.encode(unique_name_res, writer);
        writer.ldelim();
      }
    }

    static decode(reader: Reader, length: i32): exit_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new exit_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.code = reader.int32();
            break;

          case 2:
            message.res = chain.result.decode(reader, reader.uint32());
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    code: i32;
    res: chain.result | null;

    constructor(code: i32 = 0, res: chain.result | null = null) {
      this.code = code;
      this.res = res;
    }
  }

  @unmanaged
  export class exit_result {
    static encode(message: exit_result, writer: Writer): void {}

    static decode(reader: Reader, length: i32): exit_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new exit_result();

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

  @unmanaged
  export class get_contract_id_arguments {
    static encode(message: get_contract_id_arguments, writer: Writer): void {}

    static decode(reader: Reader, length: i32): get_contract_id_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_contract_id_arguments();

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

  export class get_contract_id_result {
    static encode(message: get_contract_id_result, writer: Writer): void {
      if (message.value.length != 0) {
        writer.uint32(10);
        writer.bytes(message.value);
      }
    }

    static decode(reader: Reader, length: i32): get_contract_id_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_contract_id_result();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.value = reader.bytes();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    value: Uint8Array;

    constructor(value: Uint8Array = new Uint8Array(0)) {
      this.value = value;
    }
  }

  @unmanaged
  export class get_caller_arguments {
    static encode(message: get_caller_arguments, writer: Writer): void {}

    static decode(reader: Reader, length: i32): get_caller_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_caller_arguments();

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

  export class get_caller_result {
    static encode(message: get_caller_result, writer: Writer): void {
      const unique_name_value = message.value;
      if (unique_name_value !== null) {
        writer.uint32(10);
        writer.fork();
        chain.caller_data.encode(unique_name_value, writer);
        writer.ldelim();
      }
    }

    static decode(reader: Reader, length: i32): get_caller_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new get_caller_result();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.value = chain.caller_data.decode(reader, reader.uint32());
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    value: chain.caller_data | null;

    constructor(value: chain.caller_data | null = null) {
      this.value = value;
    }
  }

  export class check_authority_arguments {
    static encode(message: check_authority_arguments, writer: Writer): void {
      if (message.type != 0) {
        writer.uint32(8);
        writer.int32(message.type);
      }

      if (message.account.length != 0) {
        writer.uint32(18);
        writer.bytes(message.account);
      }

      if (message.data.length != 0) {
        writer.uint32(26);
        writer.bytes(message.data);
      }
    }

    static decode(reader: Reader, length: i32): check_authority_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new check_authority_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.type = reader.int32();
            break;

          case 2:
            message.account = reader.bytes();
            break;

          case 3:
            message.data = reader.bytes();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    type: authority.authorization_type;
    account: Uint8Array;
    data: Uint8Array;

    constructor(
      type: authority.authorization_type = 0,
      account: Uint8Array = new Uint8Array(0),
      data: Uint8Array = new Uint8Array(0)
    ) {
      this.type = type;
      this.account = account;
      this.data = data;
    }
  }

  @unmanaged
  export class check_authority_result {
    static encode(message: check_authority_result, writer: Writer): void {
      if (message.value != false) {
        writer.uint32(8);
        writer.bool(message.value);
      }
    }

    static decode(reader: Reader, length: i32): check_authority_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new check_authority_result();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.value = reader.bool();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    value: bool;

    constructor(value: bool = false) {
      this.value = value;
    }
  }
}
