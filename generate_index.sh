#!/bin/bash

rm index.ts
touch index.ts

echo "export { Protobuf } from 'as-proto';" >> index.ts
echo "" >> index.ts
echo "export * from './assembly/google/protobuf/any';" >> index.ts
echo "" >> index.ts

#find koinos -name "*.ts" -type f | while read -d $'\0' file
for file in $(find assembly/koinos -name "*.ts" -type f); do
   dirname=${file%/*}
   filename=${file##*/}
   noext=${filename%.*}

   echo "export * from './$dirname/$noext';" >> index.ts
done
