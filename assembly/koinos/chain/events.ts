import { Writer, Reader } from "as-proto";
import { protocol } from "../protocol/protocol";

export namespace events {
  export class set_system_call_event {
    static encode(message: set_system_call_event, writer: Writer): void {
      if (message.call_id != 0) {
        writer.uint32(8);
        writer.uint32(message.call_id);
      }

      const unique_name_target = message.target;
      if (unique_name_target !== null) {
        writer.uint32(18);
        writer.fork();
        protocol.system_call_target.encode(unique_name_target, writer);
        writer.ldelim();
      }
    }

    static decode(reader: Reader, length: i32): set_system_call_event {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new set_system_call_event();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.call_id = reader.uint32();
            break;

          case 2:
            message.target = protocol.system_call_target.decode(
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

    call_id: u32;
    target: protocol.system_call_target | null;

    constructor(
      call_id: u32 = 0,
      target: protocol.system_call_target | null = null
    ) {
      this.call_id = call_id;
      this.target = target;
    }
  }

  export class set_system_contract_event {
    static encode(message: set_system_contract_event, writer: Writer): void {
      if (message.contract_id.length != 0) {
        writer.uint32(10);
        writer.bytes(message.contract_id);
      }

      if (message.system_contract != false) {
        writer.uint32(16);
        writer.bool(message.system_contract);
      }
    }

    static decode(reader: Reader, length: i32): set_system_contract_event {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new set_system_contract_event();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.contract_id = reader.bytes();
            break;

          case 2:
            message.system_contract = reader.bool();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    contract_id: Uint8Array;
    system_contract: bool;

    constructor(
      contract_id: Uint8Array = new Uint8Array(0),
      system_contract: bool = false
    ) {
      this.contract_id = contract_id;
      this.system_contract = system_contract;
    }
  }
}
