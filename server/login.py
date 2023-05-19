import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
import json


cred_obj = credentials.Certificate('growmer-19c3b-firebase-adminsdk-oc0r6-0abc3eb775.json')
firebase_admin.initialize_app(cred_obj,{
    'databaseURL':'https://growmer-19c3b.firebaseio.com/'
})

ref = db.reference("/chats/1-2")
new_value=  'Updated Value'
ref.update({'userId': new_value})

# Print a success message
print('Data updated successfully.')