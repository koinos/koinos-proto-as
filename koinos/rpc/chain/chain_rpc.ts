import { Writer, Reader } from "as-proto";
import { koinos } from "./koinos/protocol/protocol";
import { koinos } from "./koinos/common";
import { koinos } from "./koinos/chain/chain";
import { koinos } from "./koinos/rpc/rpc";

export namespace koinos {
  export namespace rpc {
    export namespace chain {
      export class submit_block_request {
        static encode(message: submit_block_request, writer: Writer): void {
          const block = message.block;
          if (block !== null) {
            writer.uint32(10);
            writer.fork();
            koinos.protocol.block.encode(block, writer);
            writer.ldelim();
          }
        }

        static decode(reader: Reader, length: i32): submit_block_request {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new submit_block_request();

          while (reader.ptr < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                message.block = koinos.protocol.block.decode(
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

        block: koinos.protocol.block | null;

        constructor(block: koinos.protocol.block | null = null) {
          this.block = block;
        }
      }

      export class submit_block_response {
        static encode(message: submit_block_response, writer: Writer): void {
          const receipt = message.receipt;
          if (receipt !== null) {
            writer.uint32(10);
            writer.fork();
            koinos.protocol.block_receipt.encode(receipt, writer);
            writer.ldelim();
          }
        }

        static decode(reader: Reader, length: i32): submit_block_response {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new submit_block_response();

          while (reader.ptr < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                message.receipt = koinos.protocol.block_receipt.decode(
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

        receipt: koinos.protocol.block_receipt | null;

        constructor(receipt: koinos.protocol.block_receipt | null = null) {
          this.receipt = receipt;
        }
      }

      export class submit_transaction_request {
        static encode(
          message: submit_transaction_request,
          writer: Writer
        ): void {
          const transaction = message.transaction;
          if (transaction !== null) {
            writer.uint32(10);
            writer.fork();
            koinos.protocol.transaction.encode(transaction, writer);
            writer.ldelim();
          }
        }

        static decode(reader: Reader, length: i32): submit_transaction_request {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new submit_transaction_request();

          while (reader.ptr < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                message.transaction = koinos.protocol.transaction.decode(
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

        transaction: koinos.protocol.transaction | null;

        constructor(transaction: koinos.protocol.transaction | null = null) {
          this.transaction = transaction;
        }
      }

      export class submit_transaction_response {
        static encode(
          message: submit_transaction_response,
          writer: Writer
        ): void {
          const receipt = message.receipt;
          if (receipt !== null) {
            writer.uint32(10);
            writer.fork();
            koinos.protocol.transaction_receipt.encode(receipt, writer);
            writer.ldelim();
          }
        }

        static decode(
          reader: Reader,
          length: i32
        ): submit_transaction_response {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new submit_transaction_response();

          while (reader.ptr < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                message.receipt = koinos.protocol.transaction_receipt.decode(
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

        receipt: koinos.protocol.transaction_receipt | null;

        constructor(
          receipt: koinos.protocol.transaction_receipt | null = null
        ) {
          this.receipt = receipt;
        }
      }

      @unmanaged
      export class get_head_info_request {
        static encode(message: get_head_info_request, writer: Writer): void {}

        static decode(reader: Reader, length: i32): get_head_info_request {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new get_head_info_request();

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

      export class get_head_info_response {
        static encode(message: get_head_info_response, writer: Writer): void {
          const head_topology = message.head_topology;
          if (head_topology !== null) {
            writer.uint32(10);
            writer.fork();
            koinos.block_topology.encode(head_topology, writer);
            writer.ldelim();
          }

          writer.uint32(16);
          writer.uint64(message.last_irreversible_block);

          const head_state_merkle_root = message.head_state_merkle_root;
          if (head_state_merkle_root !== null) {
            writer.uint32(26);
            writer.bytes(head_state_merkle_root);
          }
        }

        static decode(reader: Reader, length: i32): get_head_info_response {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new get_head_info_response();

          while (reader.ptr < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                message.head_topology = koinos.block_topology.decode(
                  reader,
                  reader.uint32()
                );
                break;

              case 2:
                message.last_irreversible_block = reader.uint64();
                break;

              case 3:
                message.head_state_merkle_root = reader.bytes();
                break;

              default:
                reader.skipType(tag & 7);
                break;
            }
          }

          return message;
        }

        head_topology: koinos.block_topology | null;
        last_irreversible_block: u64;
        head_state_merkle_root: Uint8Array | null;

        constructor(
          head_topology: koinos.block_topology | null = null,
          last_irreversible_block: u64 = 0,
          head_state_merkle_root: Uint8Array | null = null
        ) {
          this.head_topology = head_topology;
          this.last_irreversible_block = last_irreversible_block;
          this.head_state_merkle_root = head_state_merkle_root;
        }
      }

      @unmanaged
      export class get_chain_id_request {
        static encode(message: get_chain_id_request, writer: Writer): void {}

        static decode(reader: Reader, length: i32): get_chain_id_request {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new get_chain_id_request();

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

      export class get_chain_id_response {
        static encode(message: get_chain_id_response, writer: Writer): void {
          const chain_id = message.chain_id;
          if (chain_id !== null) {
            writer.uint32(10);
            writer.bytes(chain_id);
          }
        }

        static decode(reader: Reader, length: i32): get_chain_id_response {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new get_chain_id_response();

          while (reader.ptr < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                message.chain_id = reader.bytes();
                break;

              default:
                reader.skipType(tag & 7);
                break;
            }
          }

          return message;
        }

        chain_id: Uint8Array | null;

        constructor(chain_id: Uint8Array | null = null) {
          this.chain_id = chain_id;
        }
      }

      @unmanaged
      export class get_fork_heads_request {
        static encode(message: get_fork_heads_request, writer: Writer): void {}

        static decode(reader: Reader, length: i32): get_fork_heads_request {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new get_fork_heads_request();

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

      export class get_fork_heads_response {
        static encode(message: get_fork_heads_response, writer: Writer): void {
          const last_irreversible_block = message.last_irreversible_block;
          if (last_irreversible_block !== null) {
            writer.uint32(10);
            writer.fork();
            koinos.block_topology.encode(last_irreversible_block, writer);
            writer.ldelim();
          }

          const fork_heads = message.fork_heads;
          for (let i = 0; i < fork_heads.length; ++i) {
            writer.uint32(18);
            writer.fork();
            koinos.block_topology.encode(fork_heads[i], writer);
            writer.ldelim();
          }
        }

        static decode(reader: Reader, length: i32): get_fork_heads_response {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new get_fork_heads_response();

          while (reader.ptr < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                message.last_irreversible_block = koinos.block_topology.decode(
                  reader,
                  reader.uint32()
                );
                break;

              case 2:
                message.fork_heads.push(
                  koinos.block_topology.decode(reader, reader.uint32())
                );
                break;

              default:
                reader.skipType(tag & 7);
                break;
            }
          }

          return message;
        }

        last_irreversible_block: koinos.block_topology | null;
        fork_heads: Array<koinos.block_topology>;

        constructor(
          last_irreversible_block: koinos.block_topology | null = null,
          fork_heads: Array<koinos.block_topology> = []
        ) {
          this.last_irreversible_block = last_irreversible_block;
          this.fork_heads = fork_heads;
        }
      }

      export class read_contract_request {
        static encode(message: read_contract_request, writer: Writer): void {
          const contract_id = message.contract_id;
          if (contract_id !== null) {
            writer.uint32(10);
            writer.bytes(contract_id);
          }

          writer.uint32(16);
          writer.uint32(message.entry_point);

          const args = message.args;
          if (args !== null) {
            writer.uint32(26);
            writer.bytes(args);
          }
        }

        static decode(reader: Reader, length: i32): read_contract_request {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new read_contract_request();

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

        contract_id: Uint8Array | null;
        entry_point: u32;
        args: Uint8Array | null;

        constructor(
          contract_id: Uint8Array | null = null,
          entry_point: u32 = 0,
          args: Uint8Array | null = null
        ) {
          this.contract_id = contract_id;
          this.entry_point = entry_point;
          this.args = args;
        }
      }

      export class read_contract_response {
        static encode(message: read_contract_response, writer: Writer): void {
          const result = message.result;
          if (result !== null) {
            writer.uint32(10);
            writer.bytes(result);
          }

          const logs = message.logs;
          if (logs.length !== 0) {
            for (let i = 0; i < logs.length; ++i) {
              writer.uint32(18);
              writer.string(logs[i]);
            }
          }
        }

        static decode(reader: Reader, length: i32): read_contract_response {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new read_contract_response();

          while (reader.ptr < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                message.result = reader.bytes();
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

        result: Uint8Array | null;
        logs: Array<string>;

        constructor(
          result: Uint8Array | null = null,
          logs: Array<string> = []
        ) {
          this.result = result;
          this.logs = logs;
        }
      }

      export class get_account_nonce_request {
        static encode(
          message: get_account_nonce_request,
          writer: Writer
        ): void {
          const account = message.account;
          if (account !== null) {
            writer.uint32(10);
            writer.bytes(account);
          }
        }

        static decode(reader: Reader, length: i32): get_account_nonce_request {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new get_account_nonce_request();

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

        account: Uint8Array | null;

        constructor(account: Uint8Array | null = null) {
          this.account = account;
        }
      }

      export class get_account_nonce_response {
        static encode(
          message: get_account_nonce_response,
          writer: Writer
        ): void {
          const nonce = message.nonce;
          if (nonce !== null) {
            writer.uint32(10);
            writer.bytes(nonce);
          }
        }

        static decode(reader: Reader, length: i32): get_account_nonce_response {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new get_account_nonce_response();

          while (reader.ptr < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                message.nonce = reader.bytes();
                break;

              default:
                reader.skipType(tag & 7);
                break;
            }
          }

          return message;
        }

        nonce: Uint8Array | null;

        constructor(nonce: Uint8Array | null = null) {
          this.nonce = nonce;
        }
      }

      export class get_account_rc_request {
        static encode(message: get_account_rc_request, writer: Writer): void {
          const account = message.account;
          if (account !== null) {
            writer.uint32(10);
            writer.bytes(account);
          }
        }

        static decode(reader: Reader, length: i32): get_account_rc_request {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new get_account_rc_request();

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

        account: Uint8Array | null;

        constructor(account: Uint8Array | null = null) {
          this.account = account;
        }
      }

      @unmanaged
      export class get_account_rc_response {
        static encode(message: get_account_rc_response, writer: Writer): void {
          writer.uint32(8);
          writer.uint64(message.rc);
        }

        static decode(reader: Reader, length: i32): get_account_rc_response {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new get_account_rc_response();

          while (reader.ptr < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                message.rc = reader.uint64();
                break;

              default:
                reader.skipType(tag & 7);
                break;
            }
          }

          return message;
        }

        rc: u64;

        constructor(rc: u64 = 0) {
          this.rc = rc;
        }
      }

      @unmanaged
      export class get_resource_limits_request {
        static encode(
          message: get_resource_limits_request,
          writer: Writer
        ): void {}

        static decode(
          reader: Reader,
          length: i32
        ): get_resource_limits_request {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new get_resource_limits_request();

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
      export class get_resource_limits_response {
        static encode(
          message: get_resource_limits_response,
          writer: Writer
        ): void {
          const resource_limit_data = message.resource_limit_data;
          if (resource_limit_data !== null) {
            writer.uint32(10);
            writer.fork();
            koinos.chain.resource_limit_data.encode(
              resource_limit_data,
              writer
            );
            writer.ldelim();
          }
        }

        static decode(
          reader: Reader,
          length: i32
        ): get_resource_limits_response {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new get_resource_limits_response();

          while (reader.ptr < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                message.resource_limit_data =
                  koinos.chain.resource_limit_data.decode(
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

        resource_limit_data: koinos.chain.resource_limit_data | null;

        constructor(
          resource_limit_data: koinos.chain.resource_limit_data | null = null
        ) {
          this.resource_limit_data = resource_limit_data;
        }
      }

      export class chain_request {
        static encode(message: chain_request, writer: Writer): void {
          const reserved = message.reserved;
          if (reserved !== null) {
            writer.uint32(10);
            writer.fork();
            koinos.rpc.reserved_rpc.encode(reserved, writer);
            writer.ldelim();
          }

          const submit_block = message.submit_block;
          if (submit_block !== null) {
            writer.uint32(18);
            writer.fork();
            koinos.rpc.chain.submit_block_request.encode(submit_block, writer);
            writer.ldelim();
          }

          const submit_transaction = message.submit_transaction;
          if (submit_transaction !== null) {
            writer.uint32(26);
            writer.fork();
            koinos.rpc.chain.submit_transaction_request.encode(
              submit_transaction,
              writer
            );
            writer.ldelim();
          }

          const get_head_info = message.get_head_info;
          if (get_head_info !== null) {
            writer.uint32(34);
            writer.fork();
            koinos.rpc.chain.get_head_info_request.encode(
              get_head_info,
              writer
            );
            writer.ldelim();
          }

          const get_chain_id = message.get_chain_id;
          if (get_chain_id !== null) {
            writer.uint32(42);
            writer.fork();
            koinos.rpc.chain.get_chain_id_request.encode(get_chain_id, writer);
            writer.ldelim();
          }

          const get_fork_heads = message.get_fork_heads;
          if (get_fork_heads !== null) {
            writer.uint32(50);
            writer.fork();
            koinos.rpc.chain.get_fork_heads_request.encode(
              get_fork_heads,
              writer
            );
            writer.ldelim();
          }

          const read_contract = message.read_contract;
          if (read_contract !== null) {
            writer.uint32(58);
            writer.fork();
            koinos.rpc.chain.read_contract_request.encode(
              read_contract,
              writer
            );
            writer.ldelim();
          }

          const get_account_nonce = message.get_account_nonce;
          if (get_account_nonce !== null) {
            writer.uint32(66);
            writer.fork();
            koinos.rpc.chain.get_account_nonce_request.encode(
              get_account_nonce,
              writer
            );
            writer.ldelim();
          }

          const get_account_rc = message.get_account_rc;
          if (get_account_rc !== null) {
            writer.uint32(74);
            writer.fork();
            koinos.rpc.chain.get_account_rc_request.encode(
              get_account_rc,
              writer
            );
            writer.ldelim();
          }

          const get_resource_limits = message.get_resource_limits;
          if (get_resource_limits !== null) {
            writer.uint32(82);
            writer.fork();
            koinos.rpc.chain.get_resource_limits_request.encode(
              get_resource_limits,
              writer
            );
            writer.ldelim();
          }
        }

        static decode(reader: Reader, length: i32): chain_request {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new chain_request();

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
                message.submit_block =
                  koinos.rpc.chain.submit_block_request.decode(
                    reader,
                    reader.uint32()
                  );
                break;

              case 3:
                message.submit_transaction =
                  koinos.rpc.chain.submit_transaction_request.decode(
                    reader,
                    reader.uint32()
                  );
                break;

              case 4:
                message.get_head_info =
                  koinos.rpc.chain.get_head_info_request.decode(
                    reader,
                    reader.uint32()
                  );
                break;

              case 5:
                message.get_chain_id =
                  koinos.rpc.chain.get_chain_id_request.decode(
                    reader,
                    reader.uint32()
                  );
                break;

              case 6:
                message.get_fork_heads =
                  koinos.rpc.chain.get_fork_heads_request.decode(
                    reader,
                    reader.uint32()
                  );
                break;

              case 7:
                message.read_contract =
                  koinos.rpc.chain.read_contract_request.decode(
                    reader,
                    reader.uint32()
                  );
                break;

              case 8:
                message.get_account_nonce =
                  koinos.rpc.chain.get_account_nonce_request.decode(
                    reader,
                    reader.uint32()
                  );
                break;

              case 9:
                message.get_account_rc =
                  koinos.rpc.chain.get_account_rc_request.decode(
                    reader,
                    reader.uint32()
                  );
                break;

              case 10:
                message.get_resource_limits =
                  koinos.rpc.chain.get_resource_limits_request.decode(
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
        submit_block: koinos.rpc.chain.submit_block_request | null;
        submit_transaction: koinos.rpc.chain.submit_transaction_request | null;
        get_head_info: koinos.rpc.chain.get_head_info_request | null;
        get_chain_id: koinos.rpc.chain.get_chain_id_request | null;
        get_fork_heads: koinos.rpc.chain.get_fork_heads_request | null;
        read_contract: koinos.rpc.chain.read_contract_request | null;
        get_account_nonce: koinos.rpc.chain.get_account_nonce_request | null;
        get_account_rc: koinos.rpc.chain.get_account_rc_request | null;
        get_resource_limits: koinos.rpc.chain.get_resource_limits_request | null;

        constructor(
          reserved: koinos.rpc.reserved_rpc | null = null,
          submit_block: koinos.rpc.chain.submit_block_request | null = null,
          submit_transaction: koinos.rpc.chain.submit_transaction_request | null = null,
          get_head_info: koinos.rpc.chain.get_head_info_request | null = null,
          get_chain_id: koinos.rpc.chain.get_chain_id_request | null = null,
          get_fork_heads: koinos.rpc.chain.get_fork_heads_request | null = null,
          read_contract: koinos.rpc.chain.read_contract_request | null = null,
          get_account_nonce: koinos.rpc.chain.get_account_nonce_request | null = null,
          get_account_rc: koinos.rpc.chain.get_account_rc_request | null = null,
          get_resource_limits: koinos.rpc.chain.get_resource_limits_request | null = null
        ) {
          this.reserved = reserved;
          this.submit_block = submit_block;
          this.submit_transaction = submit_transaction;
          this.get_head_info = get_head_info;
          this.get_chain_id = get_chain_id;
          this.get_fork_heads = get_fork_heads;
          this.read_contract = read_contract;
          this.get_account_nonce = get_account_nonce;
          this.get_account_rc = get_account_rc;
          this.get_resource_limits = get_resource_limits;
        }
      }

      export class chain_response {
        static encode(message: chain_response, writer: Writer): void {
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

          const submit_block = message.submit_block;
          if (submit_block !== null) {
            writer.uint32(26);
            writer.fork();
            koinos.rpc.chain.submit_block_response.encode(submit_block, writer);
            writer.ldelim();
          }

          const submit_transaction = message.submit_transaction;
          if (submit_transaction !== null) {
            writer.uint32(34);
            writer.fork();
            koinos.rpc.chain.submit_transaction_response.encode(
              submit_transaction,
              writer
            );
            writer.ldelim();
          }

          const get_head_info = message.get_head_info;
          if (get_head_info !== null) {
            writer.uint32(42);
            writer.fork();
            koinos.rpc.chain.get_head_info_response.encode(
              get_head_info,
              writer
            );
            writer.ldelim();
          }

          const get_chain_id = message.get_chain_id;
          if (get_chain_id !== null) {
            writer.uint32(50);
            writer.fork();
            koinos.rpc.chain.get_chain_id_response.encode(get_chain_id, writer);
            writer.ldelim();
          }

          const get_fork_heads = message.get_fork_heads;
          if (get_fork_heads !== null) {
            writer.uint32(58);
            writer.fork();
            koinos.rpc.chain.get_fork_heads_response.encode(
              get_fork_heads,
              writer
            );
            writer.ldelim();
          }

          const read_contract = message.read_contract;
          if (read_contract !== null) {
            writer.uint32(66);
            writer.fork();
            koinos.rpc.chain.read_contract_response.encode(
              read_contract,
              writer
            );
            writer.ldelim();
          }

          const get_account_nonce = message.get_account_nonce;
          if (get_account_nonce !== null) {
            writer.uint32(74);
            writer.fork();
            koinos.rpc.chain.get_account_nonce_response.encode(
              get_account_nonce,
              writer
            );
            writer.ldelim();
          }

          const get_account_rc = message.get_account_rc;
          if (get_account_rc !== null) {
            writer.uint32(82);
            writer.fork();
            koinos.rpc.chain.get_account_rc_response.encode(
              get_account_rc,
              writer
            );
            writer.ldelim();
          }

          const get_resource_limits = message.get_resource_limits;
          if (get_resource_limits !== null) {
            writer.uint32(90);
            writer.fork();
            koinos.rpc.chain.get_resource_limits_response.encode(
              get_resource_limits,
              writer
            );
            writer.ldelim();
          }
        }

        static decode(reader: Reader, length: i32): chain_response {
          const end: usize = length < 0 ? reader.end : reader.ptr + length;
          const message = new chain_response();

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
                message.submit_block =
                  koinos.rpc.chain.submit_block_response.decode(
                    reader,
                    reader.uint32()
                  );
                break;

              case 4:
                message.submit_transaction =
                  koinos.rpc.chain.submit_transaction_response.decode(
                    reader,
                    reader.uint32()
                  );
                break;

              case 5:
                message.get_head_info =
                  koinos.rpc.chain.get_head_info_response.decode(
                    reader,
                    reader.uint32()
                  );
                break;

              case 6:
                message.get_chain_id =
                  koinos.rpc.chain.get_chain_id_response.decode(
                    reader,
                    reader.uint32()
                  );
                break;

              case 7:
                message.get_fork_heads =
                  koinos.rpc.chain.get_fork_heads_response.decode(
                    reader,
                    reader.uint32()
                  );
                break;

              case 8:
                message.read_contract =
                  koinos.rpc.chain.read_contract_response.decode(
                    reader,
                    reader.uint32()
                  );
                break;

              case 9:
                message.get_account_nonce =
                  koinos.rpc.chain.get_account_nonce_response.decode(
                    reader,
                    reader.uint32()
                  );
                break;

              case 10:
                message.get_account_rc =
                  koinos.rpc.chain.get_account_rc_response.decode(
                    reader,
                    reader.uint32()
                  );
                break;

              case 11:
                message.get_resource_limits =
                  koinos.rpc.chain.get_resource_limits_response.decode(
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
        submit_block: koinos.rpc.chain.submit_block_response | null;
        submit_transaction: koinos.rpc.chain.submit_transaction_response | null;
        get_head_info: koinos.rpc.chain.get_head_info_response | null;
        get_chain_id: koinos.rpc.chain.get_chain_id_response | null;
        get_fork_heads: koinos.rpc.chain.get_fork_heads_response | null;
        read_contract: koinos.rpc.chain.read_contract_response | null;
        get_account_nonce: koinos.rpc.chain.get_account_nonce_response | null;
        get_account_rc: koinos.rpc.chain.get_account_rc_response | null;
        get_resource_limits: koinos.rpc.chain.get_resource_limits_response | null;

        constructor(
          reserved: koinos.rpc.reserved_rpc | null = null,
          error: koinos.rpc.error_response | null = null,
          submit_block: koinos.rpc.chain.submit_block_response | null = null,
          submit_transaction: koinos.rpc.chain.submit_transaction_response | null = null,
          get_head_info: koinos.rpc.chain.get_head_info_response | null = null,
          get_chain_id: koinos.rpc.chain.get_chain_id_response | null = null,
          get_fork_heads: koinos.rpc.chain.get_fork_heads_response | null = null,
          read_contract: koinos.rpc.chain.read_contract_response | null = null,
          get_account_nonce: koinos.rpc.chain.get_account_nonce_response | null = null,
          get_account_rc: koinos.rpc.chain.get_account_rc_response | null = null,
          get_resource_limits: koinos.rpc.chain.get_resource_limits_response | null = null
        ) {
          this.reserved = reserved;
          this.error = error;
          this.submit_block = submit_block;
          this.submit_transaction = submit_transaction;
          this.get_head_info = get_head_info;
          this.get_chain_id = get_chain_id;
          this.get_fork_heads = get_fork_heads;
          this.read_contract = read_contract;
          this.get_account_nonce = get_account_nonce;
          this.get_account_rc = get_account_rc;
          this.get_resource_limits = get_resource_limits;
        }
      }
    }
  }
}
