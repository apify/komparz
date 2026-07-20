# benchmark

Disk I/O benchmark Actor. Loops forever writing 500 files of 25 MB each (pseudo-random bytes) in parallel to the working directory, logging `writing` on every iteration. Used to stress and measure container disk throughput.
