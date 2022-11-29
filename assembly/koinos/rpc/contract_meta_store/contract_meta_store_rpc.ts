import { Writer, Reader } from "as-proto";
import { contract_meta_store } from "../../contract_meta_store/contract_meta_store";
import { rpc } from "../rpc";

export namespace contract_meta_store_rpc {
  export class get_contract_meta_request {
    static encode(message: get_contract_meta_request, writer: Writer): void {
      if (message.contract_id.length != 0) {
        writer.uint32(10);
        writer.bytes(message.contract_id);
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

    contract_id: Uint8Array;

    constructor(contract_id: Uint8Array = new Uint8Array(0)) {
      this.contract_id = contract_id;
    }
  }

  export class get_contract_meta_response {
    static encode(message: get_contract_meta_response, writer: Writer): void {
      const unique_name_meta = message.meta;
      if (unique_name_meta !== null) {
        writer.uint32(10);
        writer.fork();
        contract_meta_store.contract_meta_item.encode(unique_name_meta, writer);
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
            message.meta = contract_meta_store.contract_meta_item.decode(
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

    meta: contract_meta_store.contract_meta_item | null;

    constructor(meta: contract_meta_store.contract_meta_item | null = null) {
      this.meta = meta;
    }
  }

  export class contract_meta_store_request {
    static encode(message: contract_meta_store_request, writer: Writer): void {
      const unique_name_reserved = message.reserved;
      if (unique_name_reserved !== null) {
        writer.uint32(10);
        writer.fork();
        rpc.reserved_rpc.encode(unique_name_reserved, writer);
        writer.ldelim();
      }

      const unique_name_get_contract_meta = message.get_contract_meta;
      if (unique_name_get_contract_meta !== null) {
        writer.uint32(18);
        writer.fork();
        get_contract_meta_request.encode(unique_name_get_contract_meta, writer);
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
            message.reserved = rpc.reserved_rpc.decode(reader, reader.uint32());
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

    reserved: rpc.reserved_rpc | null;
    get_contract_meta: get_contract_meta_request | null;

    constructor(
      reserved: rpc.reserved_rpc | null = null,
      get_contract_meta: get_contract_meta_request | null = null
    ) {
      this.reserved = reserved;
      this.get_contract_meta = get_contract_meta;
    }
  }

  export class contract_meta_store_response {
    static encode(message: contract_meta_store_response, writer: Writer): void {
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

      const unique_name_get_contract_meta = message.get_contract_meta;
      if (unique_name_get_contract_meta !== null) {
        writer.uint32(26);
        writer.fork();
        get_contract_meta_response.encode(
          unique_name_get_contract_meta,
          writer
        );
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
            message.reserved = rpc.reserved_rpc.decode(reader, reader.uint32());
            break;

          case 2:
            message.error = rpc.error_response.decode(reader, reader.uint32());
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

    reserved: rpc.reserved_rpc | null;
    error: rpc.error_response | null;
    get_contract_meta: get_contract_meta_response | null;

    constructor(
      reserved: rpc.reserved_rpc | null = null,
      error: rpc.error_response | null = null,
      get_contract_meta: get_contract_meta_response | null = null
    ) {
      this.reserved = reserved;
      this.error = error;
      this.get_contract_meta = get_contract_meta;
    }
  }
}
