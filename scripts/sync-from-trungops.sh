#!/bin/bash
# Sync generated content from TrungOPS into iamtrung.com/data/
# Run from iamtrung.com root: ./scripts/sync-from-trungops.sh

set -e

TRUNGOPS="../TrungOPS/context/website/output"
DEST="./data"

if [ ! -d "$TRUNGOPS" ]; then
  echo "Error: TrungOPS not found at $TRUNGOPS"
  echo "Expected sibling directory: ../TrungOPS"
  exit 1
fi

mkdir -p "$DEST"

cp "$TRUNGOPS/founder-diagnostic.json" "$DEST/founder-diagnostic.json"
cp "$TRUNGOPS/testimonials.json" "$DEST/testimonials.json"

echo "Synced from $TRUNGOPS to $DEST"
echo "Next: update data/*.ts files to reflect any JSON changes, then commit."
