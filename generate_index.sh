#!/bin/bash

rm index.ts
touch index.ts

echo "export { Protobuf } from 'as-proto';" >> index.ts
echo "" >> index.ts
echo "export { any } from './assembly/google/protobuf/any';" >> index.ts
echo "" >> index.ts

for file in $(find assembly/koinos -name "*.ts" -type f); do
   dirname=${file%/*}
   filename=${file##*/}
   noext=${filename%.*}

   echo "export { $noext } from './$dirname/$noext';" >> index.ts
done
