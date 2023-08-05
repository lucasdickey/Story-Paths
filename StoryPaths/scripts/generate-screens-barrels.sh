#!/bin/bash
set -e

SCREENS_INDEX_FILE="src/screens/index.ts"
SCREENS_TYPES_FILE="src/screens/route-params.ts"
 
rm -f $SCREENS_INDEX_FILE
rm -f $SCREENS_TYPES_FILE
npm run generate-barrels:screens
sed -i '' '/export \* from/d' $SCREENS_INDEX_FILE
sed "s|export { default as \(.*\)Screen } from '\(.*\)';|import type { \1RouteParams } from '\2';|g" $SCREENS_INDEX_FILE > $SCREENS_TYPES_FILE
echo "" >> $SCREENS_TYPES_FILE
echo "export type RouteParamList = {" >> $SCREENS_TYPES_FILE
sed "s|export { default as \(.*\)Screen } from '\(.*\)';|  \1: \1RouteParams;|g" $SCREENS_INDEX_FILE >> $SCREENS_TYPES_FILE
echo "};" >> $SCREENS_TYPES_FILE
