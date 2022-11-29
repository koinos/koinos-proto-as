import { Writer, Reader } from "as-proto";

export namespace protocol {
  export class event_data {
    static encode(message: event_data, writer: Writer): void {
      if (message.sequence != 0) {
        writer.uint32(8);
        writer.uint32(message.sequence);
      }

      if (message.source.length != 0) {
        writer.uint32(18);
        writer.bytes(message.source);
      }

      if (message.name.length != 0) {
        writer.uint32(26);
        writer.string(message.name);
      }

      if (message.data.length != 0) {
        writer.uint32(34);
        writer.bytes(message.data);
      }

      const unique_name_impacted = message.impacted;
      if (unique_name_impacted.length !== 0) {
        for (let i = 0; i < unique_name_impacted.length; ++i) {
          writer.uint32(42);
          writer.bytes(unique_name_impacted[i]);
        }
      }
    }

    static decode(reader: Reader, length: i32): event_data {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new event_data();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.sequence = reader.uint32();
            break;

          case 2:
            message.source = reader.bytes();
            break;

          case 3:
            message.name = reader.string();
            break;

          case 4:
            message.data = reader.bytes();
            break;

          case 5:
            message.impacted.push(reader.bytes());
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    sequence: u32;
    source: Uint8Array;
    name: string;
    data: Uint8Array;
    impacted: Array<Uint8Array>;

    constructor(
      sequence: u32 = 0,
      source: Uint8Array = new Uint8Array(0),
      name: string = "",
      data: Uint8Array = new Uint8Array(0),
      impacted: Array<Uint8Array> = []
    ) {
      this.sequence = sequence;
      this.source = source;
      this.name = name;
      this.data = data;
      this.impacted = impacted;
    }
  }

  export class contract_call_bundle {
    static encode(message: contract_call_bundle, writer: Writer): void {
      if (message.contract_id.length != 0) {
        writer.uint32(10);
        writer.bytes(message.contract_id);
      }

      if (message.entry_point != 0) {
        writer.uint32(16);
        writer.uint32(message.entry_point);
      }
    }

    static decode(reader: Reader, length: i32): contract_call_bundle {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new contract_call_bundle();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.contract_id = reader.bytes();
            break;

          case 2:
            message.entry_point = reader.uint32();
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

    constructor(
      contract_id: Uint8Array = new Uint8Array(0),
      entry_point: u32 = 0
    ) {
      this.contract_id = contract_id;
      this.entry_point = entry_point;
    }
  }

  export class system_call_target {
    static encode(message: system_call_target, writer: Writer): void {
      if (message.thunk_id != 0) {
        writer.uint32(8);
        writer.uint32(message.thunk_id);
      }

      const unique_name_system_call_bundle = message.system_call_bundle;
      if (unique_name_system_call_bundle !== null) {
        writer.uint32(18);
        writer.fork();
        contract_call_bundle.encode(unique_name_system_call_bundle, writer);
        writer.ldelim();
      }
    }

    static decode(reader: Reader, length: i32): system_call_target {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new system_call_target();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.thunk_id = reader.uint32();
            break;

          case 2:
            message.system_call_bundle = contract_call_bundle.decode(
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

    thunk_id: u32;
    system_call_bundle: contract_call_bundle | null;

    constructor(
      thunk_id: u32 = 0,
      system_call_bundle: contract_call_bundle | null = null
    ) {
      this.thunk_id = thunk_id;
      this.system_call_bundle = system_call_bundle;
    }
  }

  export class upload_contract_operation {
    static encode(message: upload_contract_operation, writer: Writer): void {
      if (message.contract_id.length != 0) {
        writer.uint32(10);
        writer.bytes(message.contract_id);
      }

      if (message.bytecode.length != 0) {
        writer.uint32(18);
        writer.bytes(message.bytecode);
      }

      if (message.abi.length != 0) {
        writer.uint32(26);
        writer.string(message.abi);
      }

      if (message.authorizes_call_contract != false) {
        writer.uint32(32);
        writer.bool(message.authorizes_call_contract);
      }

      if (message.authorizes_transaction_application != false) {
        writer.uint32(40);
        writer.bool(message.authorizes_transaction_application);
      }

      if (message.authorizes_upload_contract != false) {
        writer.uint32(48);
        writer.bool(message.authorizes_upload_contract);
      }
    }

    static decode(reader: Reader, length: i32): upload_contract_operation {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new upload_contract_operation();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.contract_id = reader.bytes();
            break;

          case 2:
            message.bytecode = reader.bytes();
            break;

          case 3:
            message.abi = reader.string();
            break;

          case 4:
            message.authorizes_call_contract = reader.bool();
            break;

          case 5:
            message.authorizes_transaction_application = reader.bool();
            break;

          case 6:
            message.authorizes_upload_contract = reader.bool();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    contract_id: Uint8Array;
    bytecode: Uint8Array;
    abi: string;
    authorizes_call_contract: bool;
    authorizes_transaction_application: bool;
    authorizes_upload_contract: bool;

    constructor(
      contract_id: Uint8Array = new Uint8Array(0),
      bytecode: Uint8Array = new Uint8Array(0),
      abi: string = "",
      authorizes_call_contract: bool = false,
      authorizes_transaction_application: bool = false,
      authorizes_upload_contract: bool = false
    ) {
      this.contract_id = contract_id;
      this.bytecode = bytecode;
      this.abi = abi;
      this.authorizes_call_contract = authorizes_call_contract;
      this.authorizes_transaction_application =
        authorizes_transaction_application;
      this.authorizes_upload_contract = authorizes_upload_contract;
    }
  }

  export class call_contract_operation {
    static encode(message: call_contract_operation, writer: Writer): void {
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

    static decode(reader: Reader, length: i32): call_contract_operation {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new call_contract_operation();

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

  export class set_system_call_operation {
    static encode(message: set_system_call_operation, writer: Writer): void {
      if (message.call_id != 0) {
        writer.uint32(8);
        writer.uint32(message.call_id);
      }

      const unique_name_target = message.target;
      if (unique_name_target !== null) {
        writer.uint32(18);
        writer.fork();
        system_call_target.encode(unique_name_target, writer);
        writer.ldelim();
      }
    }

    static decode(reader: Reader, length: i32): set_system_call_operation {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new set_system_call_operation();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.call_id = reader.uint32();
            break;

          case 2:
            message.target = system_call_target.decode(reader, reader.uint32());
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    call_id: u32;
    target: system_call_target | null;

    constructor(call_id: u32 = 0, target: system_call_target | null = null) {
      this.call_id = call_id;
      this.target = target;
    }
  }

  export class set_system_contract_operation {
    static encode(
      message: set_system_contract_operation,
      writer: Writer
    ): void {
      if (message.contract_id.length != 0) {
        writer.uint32(10);
        writer.bytes(message.contract_id);
      }

      if (message.system_contract != false) {
        writer.uint32(16);
        writer.bool(message.system_contract);
      }
    }

    static decode(reader: Reader, length: i32): set_system_contract_operation {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new set_system_contract_operation();

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

  export class operation {
    static encode(message: operation, writer: Writer): void {
      const unique_name_upload_contract = message.upload_contract;
      if (unique_name_upload_contract !== null) {
        writer.uint32(10);
        writer.fork();
        upload_contract_operation.encode(unique_name_upload_contract, writer);
        writer.ldelim();
      }

      const unique_name_call_contract = message.call_contract;
      if (unique_name_call_contract !== null) {
        writer.uint32(18);
        writer.fork();
        call_contract_operation.encode(unique_name_call_contract, writer);
        writer.ldelim();
      }

      const unique_name_set_system_call = message.set_system_call;
      if (unique_name_set_system_call !== null) {
        writer.uint32(26);
        writer.fork();
        set_system_call_operation.encode(unique_name_set_system_call, writer);
        writer.ldelim();
      }

      const unique_name_set_system_contract = message.set_system_contract;
      if (unique_name_set_system_contract !== null) {
        writer.uint32(34);
        writer.fork();
        set_system_contract_operation.encode(
          unique_name_set_system_contract,
          writer
        );
        writer.ldelim();
      }
    }

    static decode(reader: Reader, length: i32): operation {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new operation();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.upload_contract = upload_contract_operation.decode(
              reader,
              reader.uint32()
            );
            break;

          case 2:
            message.call_contract = call_contract_operation.decode(
              reader,
              reader.uint32()
            );
            break;

          case 3:
            message.set_system_call = set_system_call_operation.decode(
              reader,
              reader.uint32()
            );
            break;

          case 4:
            message.set_system_contract = set_system_contract_operation.decode(
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

    upload_contract: upload_contract_operation | null;
    call_contract: call_contract_operation | null;
    set_system_call: set_system_call_operation | null;
    set_system_contract: set_system_contract_operation | null;

    constructor(
      upload_contract: upload_contract_operation | null = null,
      call_contract: call_contract_operation | null = null,
      set_system_call: set_system_call_operation | null = null,
      set_system_contract: set_system_contract_operation | null = null
    ) {
      this.upload_contract = upload_contract;
      this.call_contract = call_contract;
      this.set_system_call = set_system_call;
      this.set_system_contract = set_system_contract;
    }
  }

  export class transaction_header {
    static encode(message: transaction_header, writer: Writer): void {
      if (message.chain_id.length != 0) {
        writer.uint32(10);
        writer.bytes(message.chain_id);
      }

      if (message.rc_limit != 0) {
        writer.uint32(16);
        writer.uint64(message.rc_limit);
      }

      if (message.nonce.length != 0) {
        writer.uint32(26);
        writer.bytes(message.nonce);
      }

      if (message.operation_merkle_root.length != 0) {
        writer.uint32(34);
        writer.bytes(message.operation_merkle_root);
      }

      if (message.payer.length != 0) {
        writer.uint32(42);
        writer.bytes(message.payer);
      }

      if (message.payee.length != 0) {
        writer.uint32(50);
        writer.bytes(message.payee);
      }
    }

    static decode(reader: Reader, length: i32): transaction_header {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new transaction_header();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.chain_id = reader.bytes();
            break;

          case 2:
            message.rc_limit = reader.uint64();
            break;

          case 3:
            message.nonce = reader.bytes();
            break;

          case 4:
            message.operation_merkle_root = reader.bytes();
            break;

          case 5:
            message.payer = reader.bytes();
            break;

          case 6:
            message.payee = reader.bytes();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    chain_id: Uint8Array;
    rc_limit: u64;
    nonce: Uint8Array;
    operation_merkle_root: Uint8Array;
    payer: Uint8Array;
    payee: Uint8Array;

    constructor(
      chain_id: Uint8Array = new Uint8Array(0),
      rc_limit: u64 = 0,
      nonce: Uint8Array = new Uint8Array(0),
      operation_merkle_root: Uint8Array = new Uint8Array(0),
      payer: Uint8Array = new Uint8Array(0),
      payee: Uint8Array = new Uint8Array(0)
    ) {
      this.chain_id = chain_id;
      this.rc_limit = rc_limit;
      this.nonce = nonce;
      this.operation_merkle_root = operation_merkle_root;
      this.payer = payer;
      this.payee = payee;
    }
  }

  export class transaction {
    static encode(message: transaction, writer: Writer): void {
      if (message.id.length != 0) {
        writer.uint32(10);
        writer.bytes(message.id);
      }

      const unique_name_header = message.header;
      if (unique_name_header !== null) {
        writer.uint32(18);
        writer.fork();
        transaction_header.encode(unique_name_header, writer);
        writer.ldelim();
      }

      const unique_name_operations = message.operations;
      for (let i = 0; i < unique_name_operations.length; ++i) {
        writer.uint32(26);
        writer.fork();
        operation.encode(unique_name_operations[i], writer);
        writer.ldelim();
      }

      const unique_name_signatures = message.signatures;
      if (unique_name_signatures.length !== 0) {
        for (let i = 0; i < unique_name_signatures.length; ++i) {
          writer.uint32(34);
          writer.bytes(unique_name_signatures[i]);
        }
      }
    }

    static decode(reader: Reader, length: i32): transaction {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new transaction();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.id = reader.bytes();
            break;

          case 2:
            message.header = transaction_header.decode(reader, reader.uint32());
            break;

          case 3:
            message.operations.push(operation.decode(reader, reader.uint32()));
            break;

          case 4:
            message.signatures.push(reader.bytes());
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    id: Uint8Array;
    header: transaction_header | null;
    operations: Array<operation>;
    signatures: Array<Uint8Array>;

    constructor(
      id: Uint8Array = new Uint8Array(0),
      header: transaction_header | null = null,
      operations: Array<operation> = [],
      signatures: Array<Uint8Array> = []
    ) {
      this.id = id;
      this.header = header;
      this.operations = operations;
      this.signatures = signatures;
    }
  }

  export class transaction_receipt {
    static encode(message: transaction_receipt, writer: Writer): void {
      if (message.id.length != 0) {
        writer.uint32(10);
        writer.bytes(message.id);
      }

      if (message.payer.length != 0) {
        writer.uint32(18);
        writer.bytes(message.payer);
      }

      if (message.max_payer_rc != 0) {
        writer.uint32(24);
        writer.uint64(message.max_payer_rc);
      }

      if (message.rc_limit != 0) {
        writer.uint32(32);
        writer.uint64(message.rc_limit);
      }

      if (message.rc_used != 0) {
        writer.uint32(40);
        writer.uint64(message.rc_used);
      }

      if (message.disk_storage_used != 0) {
        writer.uint32(48);
        writer.uint64(message.disk_storage_used);
      }

      if (message.network_bandwidth_used != 0) {
        writer.uint32(56);
        writer.uint64(message.network_bandwidth_used);
      }

      if (message.compute_bandwidth_used != 0) {
        writer.uint32(64);
        writer.uint64(message.compute_bandwidth_used);
      }

      if (message.reverted != false) {
        writer.uint32(72);
        writer.bool(message.reverted);
      }

      const unique_name_events = message.events;
      for (let i = 0; i < unique_name_events.length; ++i) {
        writer.uint32(82);
        writer.fork();
        event_data.encode(unique_name_events[i], writer);
        writer.ldelim();
      }

      const unique_name_logs = message.logs;
      if (unique_name_logs.length !== 0) {
        for (let i = 0; i < unique_name_logs.length; ++i) {
          writer.uint32(90);
          writer.string(unique_name_logs[i]);
        }
      }
    }

    static decode(reader: Reader, length: i32): transaction_receipt {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new transaction_receipt();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.id = reader.bytes();
            break;

          case 2:
            message.payer = reader.bytes();
            break;

          case 3:
            message.max_payer_rc = reader.uint64();
            break;

          case 4:
            message.rc_limit = reader.uint64();
            break;

          case 5:
            message.rc_used = reader.uint64();
            break;

          case 6:
            message.disk_storage_used = reader.uint64();
            break;

          case 7:
            message.network_bandwidth_used = reader.uint64();
            break;

          case 8:
            message.compute_bandwidth_used = reader.uint64();
            break;

          case 9:
            message.reverted = reader.bool();
            break;

          case 10:
            message.events.push(event_data.decode(reader, reader.uint32()));
            break;

          case 11:
            message.logs.push(reader.string());
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    id: Uint8Array;
    payer: Uint8Array;
    max_payer_rc: u64;
    rc_limit: u64;
    rc_used: u64;
    disk_storage_used: u64;
    network_bandwidth_used: u64;
    compute_bandwidth_used: u64;
    reverted: bool;
    events: Array<event_data>;
    logs: Array<string>;

    constructor(
      id: Uint8Array = new Uint8Array(0),
      payer: Uint8Array = new Uint8Array(0),
      max_payer_rc: u64 = 0,
      rc_limit: u64 = 0,
      rc_used: u64 = 0,
      disk_storage_used: u64 = 0,
      network_bandwidth_used: u64 = 0,
      compute_bandwidth_used: u64 = 0,
      reverted: bool = false,
      events: Array<event_data> = [],
      logs: Array<string> = []
    ) {
      this.id = id;
      this.payer = payer;
      this.max_payer_rc = max_payer_rc;
      this.rc_limit = rc_limit;
      this.rc_used = rc_used;
      this.disk_storage_used = disk_storage_used;
      this.network_bandwidth_used = network_bandwidth_used;
      this.compute_bandwidth_used = compute_bandwidth_used;
      this.reverted = reverted;
      this.events = events;
      this.logs = logs;
    }
  }

  export class block_header {
    static encode(message: block_header, writer: Writer): void {
      if (message.previous.length != 0) {
        writer.uint32(10);
        writer.bytes(message.previous);
      }

      if (message.height != 0) {
        writer.uint32(16);
        writer.uint64(message.height);
      }

      if (message.timestamp != 0) {
        writer.uint32(24);
        writer.uint64(message.timestamp);
      }

      if (message.previous_state_merkle_root.length != 0) {
        writer.uint32(34);
        writer.bytes(message.previous_state_merkle_root);
      }

      if (message.transaction_merkle_root.length != 0) {
        writer.uint32(42);
        writer.bytes(message.transaction_merkle_root);
      }

      if (message.signer.length != 0) {
        writer.uint32(50);
        writer.bytes(message.signer);
      }

      const unique_name_approved_proposals = message.approved_proposals;
      if (unique_name_approved_proposals.length !== 0) {
        for (let i = 0; i < unique_name_approved_proposals.length; ++i) {
          writer.uint32(58);
          writer.bytes(unique_name_approved_proposals[i]);
        }
      }
    }

    static decode(reader: Reader, length: i32): block_header {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new block_header();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.previous = reader.bytes();
            break;

          case 2:
            message.height = reader.uint64();
            break;

          case 3:
            message.timestamp = reader.uint64();
            break;

          case 4:
            message.previous_state_merkle_root = reader.bytes();
            break;

          case 5:
            message.transaction_merkle_root = reader.bytes();
            break;

          case 6:
            message.signer = reader.bytes();
            break;

          case 7:
            message.approved_proposals.push(reader.bytes());
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    previous: Uint8Array;
    height: u64;
    timestamp: u64;
    previous_state_merkle_root: Uint8Array;
    transaction_merkle_root: Uint8Array;
    signer: Uint8Array;
    approved_proposals: Array<Uint8Array>;

    constructor(
      previous: Uint8Array = new Uint8Array(0),
      height: u64 = 0,
      timestamp: u64 = 0,
      previous_state_merkle_root: Uint8Array = new Uint8Array(0),
      transaction_merkle_root: Uint8Array = new Uint8Array(0),
      signer: Uint8Array = new Uint8Array(0),
      approved_proposals: Array<Uint8Array> = []
    ) {
      this.previous = previous;
      this.height = height;
      this.timestamp = timestamp;
      this.previous_state_merkle_root = previous_state_merkle_root;
      this.transaction_merkle_root = transaction_merkle_root;
      this.signer = signer;
      this.approved_proposals = approved_proposals;
    }
  }

  export class block {
    static encode(message: block, writer: Writer): void {
      if (message.id.length != 0) {
        writer.uint32(10);
        writer.bytes(message.id);
      }

      const unique_name_header = message.header;
      if (unique_name_header !== null) {
        writer.uint32(18);
        writer.fork();
        block_header.encode(unique_name_header, writer);
        writer.ldelim();
      }

      const unique_name_transactions = message.transactions;
      for (let i = 0; i < unique_name_transactions.length; ++i) {
        writer.uint32(26);
        writer.fork();
        transaction.encode(unique_name_transactions[i], writer);
        writer.ldelim();
      }

      if (message.signature.length != 0) {
        writer.uint32(34);
        writer.bytes(message.signature);
      }
    }

    static decode(reader: Reader, length: i32): block {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new block();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.id = reader.bytes();
            break;

          case 2:
            message.header = block_header.decode(reader, reader.uint32());
            break;

          case 3:
            message.transactions.push(
              transaction.decode(reader, reader.uint32())
            );
            break;

          case 4:
            message.signature = reader.bytes();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    id: Uint8Array;
    header: block_header | null;
    transactions: Array<transaction>;
    signature: Uint8Array;

    constructor(
      id: Uint8Array = new Uint8Array(0),
      header: block_header | null = null,
      transactions: Array<transaction> = [],
      signature: Uint8Array = new Uint8Array(0)
    ) {
      this.id = id;
      this.header = header;
      this.transactions = transactions;
      this.signature = signature;
    }
  }

  export class block_receipt {
    static encode(message: block_receipt, writer: Writer): void {
      if (message.id.length != 0) {
        writer.uint32(10);
        writer.bytes(message.id);
      }

      if (message.height != 0) {
        writer.uint32(16);
        writer.uint64(message.height);
      }

      if (message.disk_storage_used != 0) {
        writer.uint32(24);
        writer.uint64(message.disk_storage_used);
      }

      if (message.network_bandwidth_used != 0) {
        writer.uint32(32);
        writer.uint64(message.network_bandwidth_used);
      }

      if (message.compute_bandwidth_used != 0) {
        writer.uint32(40);
        writer.uint64(message.compute_bandwidth_used);
      }

      if (message.state_merkle_root.length != 0) {
        writer.uint32(50);
        writer.bytes(message.state_merkle_root);
      }

      const unique_name_events = message.events;
      for (let i = 0; i < unique_name_events.length; ++i) {
        writer.uint32(58);
        writer.fork();
        event_data.encode(unique_name_events[i], writer);
        writer.ldelim();
      }

      const unique_name_transaction_receipts = message.transaction_receipts;
      for (let i = 0; i < unique_name_transaction_receipts.length; ++i) {
        writer.uint32(66);
        writer.fork();
        transaction_receipt.encode(unique_name_transaction_receipts[i], writer);
        writer.ldelim();
      }

      const unique_name_logs = message.logs;
      if (unique_name_logs.length !== 0) {
        for (let i = 0; i < unique_name_logs.length; ++i) {
          writer.uint32(74);
          writer.string(unique_name_logs[i]);
        }
      }

      if (message.disk_storage_charged != 0) {
        writer.uint32(80);
        writer.uint64(message.disk_storage_charged);
      }

      if (message.network_bandwidth_charged != 0) {
        writer.uint32(88);
        writer.uint64(message.network_bandwidth_charged);
      }

      if (message.compute_bandwidth_charged != 0) {
        writer.uint32(96);
        writer.uint64(message.compute_bandwidth_charged);
      }
    }

    static decode(reader: Reader, length: i32): block_receipt {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new block_receipt();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.id = reader.bytes();
            break;

          case 2:
            message.height = reader.uint64();
            break;

          case 3:
            message.disk_storage_used = reader.uint64();
            break;

          case 4:
            message.network_bandwidth_used = reader.uint64();
            break;

          case 5:
            message.compute_bandwidth_used = reader.uint64();
            break;

          case 6:
            message.state_merkle_root = reader.bytes();
            break;

          case 7:
            message.events.push(event_data.decode(reader, reader.uint32()));
            break;

          case 8:
            message.transaction_receipts.push(
              transaction_receipt.decode(reader, reader.uint32())
            );
            break;

          case 9:
            message.logs.push(reader.string());
            break;

          case 10:
            message.disk_storage_charged = reader.uint64();
            break;

          case 11:
            message.network_bandwidth_charged = reader.uint64();
            break;

          case 12:
            message.compute_bandwidth_charged = reader.uint64();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    id: Uint8Array;
    height: u64;
    disk_storage_used: u64;
    network_bandwidth_used: u64;
    compute_bandwidth_used: u64;
    state_merkle_root: Uint8Array;
    events: Array<event_data>;
    transaction_receipts: Array<transaction_receipt>;
    logs: Array<string>;
    disk_storage_charged: u64;
    network_bandwidth_charged: u64;
    compute_bandwidth_charged: u64;

    constructor(
      id: Uint8Array = new Uint8Array(0),
      height: u64 = 0,
      disk_storage_used: u64 = 0,
      network_bandwidth_used: u64 = 0,
      compute_bandwidth_used: u64 = 0,
      state_merkle_root: Uint8Array = new Uint8Array(0),
      events: Array<event_data> = [],
      transaction_receipts: Array<transaction_receipt> = [],
      logs: Array<string> = [],
      disk_storage_charged: u64 = 0,
      network_bandwidth_charged: u64 = 0,
      compute_bandwidth_charged: u64 = 0
    ) {
      this.id = id;
      this.height = height;
      this.disk_storage_used = disk_storage_used;
      this.network_bandwidth_used = network_bandwidth_used;
      this.compute_bandwidth_used = compute_bandwidth_used;
      this.state_merkle_root = state_merkle_root;
      this.events = events;
      this.transaction_receipts = transaction_receipts;
      this.logs = logs;
      this.disk_storage_charged = disk_storage_charged;
      this.network_bandwidth_charged = network_bandwidth_charged;
      this.compute_bandwidth_charged = compute_bandwidth_charged;
    }
  }
}
