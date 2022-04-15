import { Writer, Reader } from "as-proto";
import { koinos } from "./koinos/rpc/rpc";

export namespace koinos {
  export namespace rpc {
    export namespace p2p {
      @unmanaged
      export class get_gossip_status_request {
        static encode(
          message: get_gossip_status_request,
          writer: Writer
        ): void {}

        static decode(reader: Reader, length: i32): get_gossip_status_request {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new get_gossip_status_request();

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
      export class get_gossip_status_response {
        static encode(
          message: get_gossip_status_response,
          writer: Writer
        ): void {
          writer.uint32(8);
          writer.bool(message.enabled);
        }

        static decode(reader: Reader, length: i32): get_gossip_status_response {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new get_gossip_status_response();

          while (reader.ptr < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                message.enabled = reader.bool();
                break;

              default:
                reader.skipType(tag & 7);
                break;
            }
          }

          return message;
        }

        enabled: bool;

        constructor(enabled: bool = false) {
          this.enabled = enabled;
        }
      }

      @unmanaged
      export class p2p_request {
        static encode(message: p2p_request, writer: Writer): void {
          const reserved = message.reserved;
          if (reserved !== null) {
            writer.uint32(10);
            writer.fork();
            koinos.rpc.reserved_rpc.encode(reserved, writer);
            writer.ldelim();
          }

          const get_gossip_status = message.get_gossip_status;
          if (get_gossip_status !== null) {
            writer.uint32(18);
            writer.fork();
            koinos.rpc.p2p.get_gossip_status_request.encode(
              get_gossip_status,
              writer
            );
            writer.ldelim();
          }
        }

        static decode(reader: Reader, length: i32): p2p_request {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new p2p_request();

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
                message.get_gossip_status =
                  koinos.rpc.p2p.get_gossip_status_request.decode(
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
        get_gossip_status: koinos.rpc.p2p.get_gossip_status_request | null;

        constructor(
          reserved: koinos.rpc.reserved_rpc | null = null,
          get_gossip_status: koinos.rpc.p2p.get_gossip_status_request | null = null
        ) {
          this.reserved = reserved;
          this.get_gossip_status = get_gossip_status;
        }
      }

      export class p2p_response {
        static encode(message: p2p_response, writer: Writer): void {
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

          const get_gossip_status = message.get_gossip_status;
          if (get_gossip_status !== null) {
            writer.uint32(26);
            writer.fork();
            koinos.rpc.p2p.get_gossip_status_response.encode(
              get_gossip_status,
              writer
            );
            writer.ldelim();
          }
        }

        static decode(reader: Reader, length: i32): p2p_response {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new p2p_response();

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
                message.get_gossip_status =
                  koinos.rpc.p2p.get_gossip_status_response.decode(
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
        get_gossip_status: koinos.rpc.p2p.get_gossip_status_response | null;

        constructor(
          reserved: koinos.rpc.reserved_rpc | null = null,
          error: koinos.rpc.error_response | null = null,
          get_gossip_status: koinos.rpc.p2p.get_gossip_status_response | null = null
        ) {
          this.reserved = reserved;
          this.error = error;
          this.get_gossip_status = get_gossip_status;
        }
      }
    }
  }
}
