import { Writer, Reader } from "as-proto";
import { koinos } from "./koinos/block_store/block_store";
import { koinos } from "./koinos/protocol/protocol";
import { koinos } from "./koinos/common";
import { koinos } from "./koinos/rpc/rpc";

export namespace koinos {
  export namespace rpc {
    export namespace block_store {
      export class get_blocks_by_id_request {
        static encode(message: get_blocks_by_id_request, writer: Writer): void {
          const block_ids = message.block_ids;
          if (block_ids.length !== 0) {
            for (let i = 0; i < block_ids.length; ++i) {
              writer.uint32(10);
              writer.bytes(block_ids[i]);
            }
          }

          writer.uint32(16);
          writer.bool(message.return_block);

          writer.uint32(24);
          writer.bool(message.return_receipt);
        }

        static decode(reader: Reader, length: i32): get_blocks_by_id_request {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new get_blocks_by_id_request();

          while (reader.ptr < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                message.block_ids.push(reader.bytes());
                break;

              case 2:
                message.return_block = reader.bool();
                break;

              case 3:
                message.return_receipt = reader.bool();
                break;

              default:
                reader.skipType(tag & 7);
                break;
            }
          }

          return message;
        }

        block_ids: Array<Uint8Array>;
        return_block: bool;
        return_receipt: bool;

        constructor(
          block_ids: Array<Uint8Array> = [],
          return_block: bool = false,
          return_receipt: bool = false
        ) {
          this.block_ids = block_ids;
          this.return_block = return_block;
          this.return_receipt = return_receipt;
        }
      }

      export class get_blocks_by_id_response {
        static encode(
          message: get_blocks_by_id_response,
          writer: Writer
        ): void {
          const block_items = message.block_items;
          for (let i = 0; i < block_items.length; ++i) {
            writer.uint32(10);
            writer.fork();
            koinos.block_store.block_item.encode(block_items[i], writer);
            writer.ldelim();
          }
        }

        static decode(reader: Reader, length: i32): get_blocks_by_id_response {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new get_blocks_by_id_response();

          while (reader.ptr < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                message.block_items.push(
                  koinos.block_store.block_item.decode(reader, reader.uint32())
                );
                break;

              default:
                reader.skipType(tag & 7);
                break;
            }
          }

          return message;
        }

        block_items: Array<koinos.block_store.block_item>;

        constructor(block_items: Array<koinos.block_store.block_item> = []) {
          this.block_items = block_items;
        }
      }

      export class get_blocks_by_height_request {
        static encode(
          message: get_blocks_by_height_request,
          writer: Writer
        ): void {
          const head_block_id = message.head_block_id;
          if (head_block_id !== null) {
            writer.uint32(10);
            writer.bytes(head_block_id);
          }

          writer.uint32(16);
          writer.uint64(message.ancestor_start_height);

          writer.uint32(24);
          writer.uint32(message.num_blocks);

          writer.uint32(32);
          writer.bool(message.return_block);

          writer.uint32(40);
          writer.bool(message.return_receipt);
        }

        static decode(
          reader: Reader,
          length: i32
        ): get_blocks_by_height_request {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new get_blocks_by_height_request();

          while (reader.ptr < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                message.head_block_id = reader.bytes();
                break;

              case 2:
                message.ancestor_start_height = reader.uint64();
                break;

              case 3:
                message.num_blocks = reader.uint32();
                break;

              case 4:
                message.return_block = reader.bool();
                break;

              case 5:
                message.return_receipt = reader.bool();
                break;

              default:
                reader.skipType(tag & 7);
                break;
            }
          }

          return message;
        }

        head_block_id: Uint8Array | null;
        ancestor_start_height: u64;
        num_blocks: u32;
        return_block: bool;
        return_receipt: bool;

        constructor(
          head_block_id: Uint8Array | null = null,
          ancestor_start_height: u64 = 0,
          num_blocks: u32 = 0,
          return_block: bool = false,
          return_receipt: bool = false
        ) {
          this.head_block_id = head_block_id;
          this.ancestor_start_height = ancestor_start_height;
          this.num_blocks = num_blocks;
          this.return_block = return_block;
          this.return_receipt = return_receipt;
        }
      }

      export class get_blocks_by_height_response {
        static encode(
          message: get_blocks_by_height_response,
          writer: Writer
        ): void {
          const block_items = message.block_items;
          for (let i = 0; i < block_items.length; ++i) {
            writer.uint32(10);
            writer.fork();
            koinos.block_store.block_item.encode(block_items[i], writer);
            writer.ldelim();
          }
        }

        static decode(
          reader: Reader,
          length: i32
        ): get_blocks_by_height_response {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new get_blocks_by_height_response();

          while (reader.ptr < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                message.block_items.push(
                  koinos.block_store.block_item.decode(reader, reader.uint32())
                );
                break;

              default:
                reader.skipType(tag & 7);
                break;
            }
          }

          return message;
        }

        block_items: Array<koinos.block_store.block_item>;

        constructor(block_items: Array<koinos.block_store.block_item> = []) {
          this.block_items = block_items;
        }
      }

      export class add_block_request {
        static encode(message: add_block_request, writer: Writer): void {
          const block_to_add = message.block_to_add;
          if (block_to_add !== null) {
            writer.uint32(10);
            writer.fork();
            koinos.protocol.block.encode(block_to_add, writer);
            writer.ldelim();
          }

          const receipt_to_add = message.receipt_to_add;
          if (receipt_to_add !== null) {
            writer.uint32(18);
            writer.fork();
            koinos.protocol.block_receipt.encode(receipt_to_add, writer);
            writer.ldelim();
          }
        }

        static decode(reader: Reader, length: i32): add_block_request {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new add_block_request();

          while (reader.ptr < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                message.block_to_add = koinos.protocol.block.decode(
                  reader,
                  reader.uint32()
                );
                break;

              case 2:
                message.receipt_to_add = koinos.protocol.block_receipt.decode(
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

        block_to_add: koinos.protocol.block | null;
        receipt_to_add: koinos.protocol.block_receipt | null;

        constructor(
          block_to_add: koinos.protocol.block | null = null,
          receipt_to_add: koinos.protocol.block_receipt | null = null
        ) {
          this.block_to_add = block_to_add;
          this.receipt_to_add = receipt_to_add;
        }
      }

      @unmanaged
      export class add_block_response {
        static encode(message: add_block_response, writer: Writer): void {}

        static decode(reader: Reader, length: i32): add_block_response {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new add_block_response();

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
      export class get_highest_block_request {
        static encode(
          message: get_highest_block_request,
          writer: Writer
        ): void {}

        static decode(reader: Reader, length: i32): get_highest_block_request {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new get_highest_block_request();

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

      export class get_highest_block_response {
        static encode(
          message: get_highest_block_response,
          writer: Writer
        ): void {
          const topology = message.topology;
          if (topology !== null) {
            writer.uint32(10);
            writer.fork();
            koinos.block_topology.encode(topology, writer);
            writer.ldelim();
          }
        }

        static decode(reader: Reader, length: i32): get_highest_block_response {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new get_highest_block_response();

          while (reader.ptr < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                message.topology = koinos.block_topology.decode(
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

        topology: koinos.block_topology | null;

        constructor(topology: koinos.block_topology | null = null) {
          this.topology = topology;
        }
      }

      export class block_store_request {
        static encode(message: block_store_request, writer: Writer): void {
          const reserved = message.reserved;
          if (reserved !== null) {
            writer.uint32(10);
            writer.fork();
            koinos.rpc.reserved_rpc.encode(reserved, writer);
            writer.ldelim();
          }

          const get_blocks_by_id = message.get_blocks_by_id;
          if (get_blocks_by_id !== null) {
            writer.uint32(18);
            writer.fork();
            koinos.rpc.block_store.get_blocks_by_id_request.encode(
              get_blocks_by_id,
              writer
            );
            writer.ldelim();
          }

          const get_blocks_by_height = message.get_blocks_by_height;
          if (get_blocks_by_height !== null) {
            writer.uint32(26);
            writer.fork();
            koinos.rpc.block_store.get_blocks_by_height_request.encode(
              get_blocks_by_height,
              writer
            );
            writer.ldelim();
          }

          const add_block = message.add_block;
          if (add_block !== null) {
            writer.uint32(34);
            writer.fork();
            koinos.rpc.block_store.add_block_request.encode(add_block, writer);
            writer.ldelim();
          }

          const get_highest_block = message.get_highest_block;
          if (get_highest_block !== null) {
            writer.uint32(42);
            writer.fork();
            koinos.rpc.block_store.get_highest_block_request.encode(
              get_highest_block,
              writer
            );
            writer.ldelim();
          }
        }

        static decode(reader: Reader, length: i32): block_store_request {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new block_store_request();

          while (reader.ptr < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                message.reserved = koinos.rpc.reserved_rpc.decode(
                  reader,
                  reader.uint32()
                );
                break;

              case 2:
                message.get_blocks_by_id =
                  koinos.rpc.block_store.get_blocks_by_id_request.decode(
                    reader,
                    reader.uint32()
                  );
                break;

              case 3:
                message.get_blocks_by_height =
                  koinos.rpc.block_store.get_blocks_by_height_request.decode(
                    reader,
                    reader.uint32()
                  );
                break;

              case 4:
                message.add_block =
                  koinos.rpc.block_store.add_block_request.decode(
                    reader,
                    reader.uint32()
                  );
                break;

              case 5:
                message.get_highest_block =
                  koinos.rpc.block_store.get_highest_block_request.decode(
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

        reserved: koinos.rpc.reserved_rpc | null;
        get_blocks_by_id: koinos.rpc.block_store.get_blocks_by_id_request | null;
        get_blocks_by_height: koinos.rpc.block_store.get_blocks_by_height_request | null;
        add_block: koinos.rpc.block_store.add_block_request | null;
        get_highest_block: koinos.rpc.block_store.get_highest_block_request | null;

        constructor(
          reserved: koinos.rpc.reserved_rpc | null = null,
          get_blocks_by_id: koinos.rpc.block_store.get_blocks_by_id_request | null = null,
          get_blocks_by_height: koinos.rpc.block_store.get_blocks_by_height_request | null = null,
          add_block: koinos.rpc.block_store.add_block_request | null = null,
          get_highest_block: koinos.rpc.block_store.get_highest_block_request | null = null
        ) {
          this.reserved = reserved;
          this.get_blocks_by_id = get_blocks_by_id;
          this.get_blocks_by_height = get_blocks_by_height;
          this.add_block = add_block;
          this.get_highest_block = get_highest_block;
        }
      }

      export class block_store_response {
        static encode(message: block_store_response, writer: Writer): void {
          const reserved = message.reserved;
          if (reserved !== null) {
            writer.uint32(10);
            writer.fork();
            koinos.rpc.reserved_rpc.encode(reserved, writer);
            writer.ldelim();
          }

          const error = message.error;
          if (error !== null) {
            writer.uint32(18);
            writer.fork();
            koinos.rpc.error_response.encode(error, writer);
            writer.ldelim();
          }

          const get_blocks_by_id = message.get_blocks_by_id;
          if (get_blocks_by_id !== null) {
            writer.uint32(26);
            writer.fork();
            koinos.rpc.block_store.get_blocks_by_id_response.encode(
              get_blocks_by_id,
              writer
            );
            writer.ldelim();
          }

          const get_blocks_by_height = message.get_blocks_by_height;
          if (get_blocks_by_height !== null) {
            writer.uint32(34);
            writer.fork();
            koinos.rpc.block_store.get_blocks_by_height_response.encode(
              get_blocks_by_height,
              writer
            );
            writer.ldelim();
          }

          const add_block = message.add_block;
          if (add_block !== null) {
            writer.uint32(42);
            writer.fork();
            koinos.rpc.block_store.add_block_response.encode(add_block, writer);
            writer.ldelim();
          }

          const get_highest_block = message.get_highest_block;
          if (get_highest_block !== null) {
            writer.uint32(50);
            writer.fork();
            koinos.rpc.block_store.get_highest_block_response.encode(
              get_highest_block,
              writer
            );
            writer.ldelim();
          }
        }

        static decode(reader: Reader, length: i32): block_store_response {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new block_store_response();

          while (reader.ptr < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                message.reserved = koinos.rpc.reserved_rpc.decode(
                  reader,
                  reader.uint32()
                );
                break;

              case 2:
                message.error = koinos.rpc.error_response.decode(
                  reader,
                  reader.uint32()
                );
                break;

              case 3:
                message.get_blocks_by_id =
                  koinos.rpc.block_store.get_blocks_by_id_response.decode(
                    reader,
                    reader.uint32()
                  );
                break;

              case 4:
                message.get_blocks_by_height =
                  koinos.rpc.block_store.get_blocks_by_height_response.decode(
                    reader,
                    reader.uint32()
                  );
                break;

              case 5:
                message.add_block =
                  koinos.rpc.block_store.add_block_response.decode(
                    reader,
                    reader.uint32()
                  );
                break;

              case 6:
                message.get_highest_block =
                  koinos.rpc.block_store.get_highest_block_response.decode(
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

        reserved: koinos.rpc.reserved_rpc | null;
        error: koinos.rpc.error_response | null;
        get_blocks_by_id: koinos.rpc.block_store.get_blocks_by_id_response | null;
        get_blocks_by_height: koinos.rpc.block_store.get_blocks_by_height_response | null;
        add_block: koinos.rpc.block_store.add_block_response | null;
        get_highest_block: koinos.rpc.block_store.get_highest_block_response | null;

        constructor(
          reserved: koinos.rpc.reserved_rpc | null = null,
          error: koinos.rpc.error_response | null = null,
          get_blocks_by_id: koinos.rpc.block_store.get_blocks_by_id_response | null = null,
          get_blocks_by_height: koinos.rpc.block_store.get_blocks_by_height_response | null = null,
          add_block: koinos.rpc.block_store.add_block_response | null = null,
          get_highest_block: koinos.rpc.block_store.get_highest_block_response | null = null
        ) {
          this.reserved = reserved;
          this.error = error;
          this.get_blocks_by_id = get_blocks_by_id;
          this.get_blocks_by_height = get_blocks_by_height;
          this.add_block = add_block;
          this.get_highest_block = get_highest_block;
        }
      }
    }
  }
}
