import { Writer, Reader } from "as-proto";
import { contract_meta_item } from "../../contract_meta_store/contract_meta_store";
import { reserved_rpc, error_response } from "../rpc";

export class get_contract_meta_request {
  static encode(message: get_contract_meta_request, writer: Writer): void {
    const field_contract_id = message.contract_id;
    if (field_contract_id !== null) {
      writer.uint32(10);
      writer.bytes(field_contract_id);
    }
  }

  static decode(reader: Reader, length: i32): get_contract_meta_request {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new get_contract_meta_request();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contract_id = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  contract_id: Uint8Array | null;

  constructor(contract_id: Uint8Array | null = null) {
    this.contract_id = contract_id;
  }
}

export class get_contract_meta_response {
  static encode(message: get_contract_meta_response, writer: Writer): void {
    const field_meta = message.meta;
    if (field_meta !== null) {
      writer.uint32(10);
      writer.fork();
      contract_meta_item.encode(field_meta, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): get_contract_meta_response {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new get_contract_meta_response();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.meta = contract_meta_item.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  meta: contract_meta_item | null;

  constructor(meta: contract_meta_item | null = null) {
    this.meta = meta;
  }
}

export class contract_meta_store_request {
  static encode(message: contract_meta_store_request, writer: Writer): void {
    const field_reserved = message.reserved;
    if (field_reserved !== null) {
      writer.uint32(10);
      writer.fork();
      reserved_rpc.encode(field_reserved, writer);
      writer.ldelim();
    }

    const field_get_contract_meta = message.get_contract_meta;
    if (field_get_contract_meta !== null) {
      writer.uint32(18);
      writer.fork();
      get_contract_meta_request.encode(field_get_contract_meta, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): contract_meta_store_request {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new contract_meta_store_request();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reserved = reserved_rpc.decode(reader, reader.uint32());
          break;

        case 2:
          message.get_contract_meta = get_contract_meta_request.decode(
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

  reserved: reserved_rpc | null;
  get_contract_meta: get_contract_meta_request | null;

  constructor(
    reserved: reserved_rpc | null = null,
    get_contract_meta: get_contract_meta_request | null = null
  ) {
    this.reserved = reserved;
    this.get_contract_meta = get_contract_meta;
  }
}

export class contract_meta_store_response {
  static encode(message: contract_meta_store_response, writer: Writer): void {
    const field_reserved = message.reserved;
    if (field_reserved !== null) {
      writer.uint32(10);
      writer.fork();
      reserved_rpc.encode(field_reserved, writer);
      writer.ldelim();
    }

    const field_error = message.error;
    if (field_error !== null) {
      writer.uint32(18);
      writer.fork();
      error_response.encode(field_error, writer);
      writer.ldelim();
    }

    const field_get_contract_meta = message.get_contract_meta;
    if (field_get_contract_meta !== null) {
      writer.uint32(26);
      writer.fork();
      get_contract_meta_response.encode(field_get_contract_meta, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): contract_meta_store_response {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new contract_meta_store_response();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reserved = reserved_rpc.decode(reader, reader.uint32());
          break;

        case 2:
          message.error = error_response.decode(reader, reader.uint32());
          break;

        case 3:
          message.get_contract_meta = get_contract_meta_response.decode(
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

  reserved: reserved_rpc | null;
  error: error_response | null;
  get_contract_meta: get_contract_meta_response | null;

  constructor(
    reserved: reserved_rpc | null = null,
    error: error_response | null = null,
    get_contract_meta: get_contract_meta_response | null = null
  ) {
    this.reserved = reserved;
    this.error = error;
    this.get_contract_meta = get_contract_meta;
  }
}
