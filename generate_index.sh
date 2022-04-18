#!/bin/bash

rm index.ts
touch index.ts

echo "export { Protobuf } from 'as-proto';" >> index.ts
echo "" >> index.ts
echo "export * from './google/protobuf/any';" >> index.ts
echo "" >> index.ts

#find koinos -name "*.ts" -type f | while read -d $'\0' file
for file in $(find koinos -name "*.ts" -type f); do
   dirname=${file%/*}
   filename=${file##*/}
   noext=${filename%.*}

   echo "export * as $noext from './$dirname/$noext';" >> index.ts
done
