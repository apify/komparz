# benchmark-disk

Disk I/O benchmark Actor (single-file variant of `benchmark`). Loops forever writing 500 files of 25 MB each (pseudo-random bytes) in parallel, logging `writing` per iteration. Used to stress and measure container disk throughput.
