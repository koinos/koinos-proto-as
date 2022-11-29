import { Writer, Reader } from "as-proto";

export namespace contract_meta_store {
  export class contract_meta_item {
    static encode(message: contract_meta_item, writer: Writer): void {
      if (message.abi.length != 0) {
        writer.uint32(10);
        writer.string(message.abi);
      }
    }

    static decode(reader: Reader, length: i32): contract_meta_item {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new contract_meta_item();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.abi = reader.string();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    abi: string;

    constructor(abi: string = "") {
      this.abi = abi;
    }
  }
}
