# log-test

Log-rate test Actor. Reads `logDelaySeconds` from input and logs an incrementing counter at that interval, forever (exits with error if the input is missing). Used to test log throughput and streaming.
