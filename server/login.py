import firebase_admin
from firebase_admin import credentials,auth
import psycopg2



cred =credentials.Certificate("growmer-19c3b-firebase-adminsdk-oc0r6-0abc3eb775.json")
firebase_admin.initialize_app(cred)

def get_connection():
    try:
        return psycopg2.connect(
            database="railway",
            user="postgres",
            password="5AbzfqI1Sy3L8nFF0e3t",
            host="containers-us-west-53.railway.app",
            port=6771,
        )
    except:
        return False
conn = get_connection()
 
curr = conn.cursor()

curr.execute('SELECT email FROM "user";')

data = curr.fetchall()
for row in data:
    print(row)
 
# CLOSE THE CONNECTION
conn.close()

uid = "some"
custom_token = auth.create_custom_token(uid)
print(custom_token)