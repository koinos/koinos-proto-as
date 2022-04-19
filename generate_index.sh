#!/bin/bash

rm assembly/index.ts
touch assembly/index.ts

echo "export { Protobuf } from 'as-proto';" >> assembly/index.ts
echo "" >> assembly/index.ts
echo "export * from './google/protobuf/any';" >> assembly/index.ts
echo "" >> assembly/index.ts

cd assembly
for file in $(find koinos -name "*.ts" -type f); do
   dirname=${file%/*}
   filename=${file##*/}
   noext=${filename%.*}

   echo "export * from './$dirname/$noext';" >> index.ts
done
