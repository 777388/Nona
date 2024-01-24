import os
import sys
import requests
trace = lambda: sys.argv[1]
print(os.popen(f"dig +trace +noidnin +noidnout {trace()}").read())
print(os.popen(f"dig +trace +noidnin +noidnout +nssearch {trace()}").read())
print(requests.head("https://"+trace(), timeout=5))