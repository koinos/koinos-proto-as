import { Writer, Reader } from "as-proto";

export namespace koin {
  @unmanaged
  export class mana_balance_object {
    static encode(message: mana_balance_object, writer: Writer): void {
      if (message.balance != 0) {
        writer.uint32(8);
        writer.uint64(message.balance);
      }

      if (message.mana != 0) {
        writer.uint32(16);
        writer.uint64(message.mana);
      }

      if (message.last_mana_update != 0) {
        writer.uint32(24);
        writer.uint64(message.last_mana_update);
      }
    }

    static decode(reader: Reader, length: i32): mana_balance_object {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new mana_balance_object();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.balance = reader.uint64();
            break;

          case 2:
            message.mana = reader.uint64();
            break;

          case 3:
            message.last_mana_update = reader.uint64();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    balance: u64;
    mana: u64;
    last_mana_update: u64;

    constructor(balance: u64 = 0, mana: u64 = 0, last_mana_update: u64 = 0) {
      this.balance = balance;
      this.mana = mana;
      this.last_mana_update = last_mana_update;
    }
  }
}
