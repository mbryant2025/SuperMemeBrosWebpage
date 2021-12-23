""""
Required packages:

pip install bitdotio
pip install 'bitdotio[psycopg2]'
"""


import bitdotio
import json


def convertTime(t):
  t = int(t)
  hours = t // 3600
  minutes = int(((t - hours * 3600) / 60))
  seconds = int(t % 60)

  ret = ""

  if hours > 0:
    ret += str(hours) + ":"

  if minutes < 10:
    ret += "0" + str(minutes) + ":"
  else:
    ret += str(minutes) + ":"

  if seconds < 10:
    ret += "0" + str(seconds)
  else:
    ret += str(seconds)

  return ret

b = bitdotio.bitdotio("YRTR_9DkMkQQCDn2MtKXAF5S8mPj")

conn = b.get_connection()
cur = conn.cursor()
cur.execute('SELECT * FROM "mbryant2025/superMemeBros"."scores";')
data = cur.fetchall()

data.sort(key = lambda x: x[1]) 
data = data[0:10]
data = [(x[0], convertTime(x[1]), x[2]) for x in data]


print(data)

with open('data.txt', 'w') as outfile:
    json.dump(data, outfile)
