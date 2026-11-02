import os
import sys
import zlib
import re

sys.stdout.reconfigure(encoding='utf-8')

cert_dir = 'public/certificates'
for fname in sorted(os.listdir(cert_dir)):
    fpath = os.path.join(cert_dir, fname)
    if fname.endswith('.png'):
        print(f"\n===============================")
        print(f"PNG FILE: {fname}")
        print(f"===============================")
        continue
    if not fname.endswith('.pdf'):
        continue
    
    with open(fpath, 'rb') as f:
        data = f.read()

    print(f"\n===============================")
    print(f"FILE: {fname} ({len(data)} bytes)")
    print(f"===============================")

    # Extract all text chunks
    found_text = []
    # Try finding decompressed objects or plain strings
    parts = data.split(b'stream\r\n')
    if len(parts) == 1:
        parts = data.split(b'stream\n')

    for p in parts[1:]:
        end_idx = p.find(b'endstream')
        if end_idx == -1:
            continue
        raw_stream = p[:end_idx].rstrip(b'\r\n')
        try:
            decomp = zlib.decompress(raw_stream)
        except Exception:
            try:
                decomp = zlib.decompress(raw_stream, -15)
            except Exception:
                decomp = raw_stream

        # Look for parentheses strings: (Some text)
        for m in re.finditer(rb'\(([^()]{2,100})\)', decomp):
            txt = m.group(1).decode('latin1', errors='ignore').strip()
            # filter out font descriptors and binary gibberish
            if any(c.isalnum() for c in txt) and len(txt) > 2:
                found_text.append(txt)

    # Print first 40 extracted text items
    if found_text:
        # Deduplicate while preserving order
        seen = set()
        clean = []
        for t in found_text:
            if t not in seen:
                seen.add(t)
                clean.append(t)
        print("\n".join(clean[:35]))
    else:
        print("No readable text found via streams.")
