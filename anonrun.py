import os
import sys
run = lambda: sys.argv[1]
print(os.popen(run()).read())