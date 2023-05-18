import firebase_admin
from firebase_admin import credentials
from firebase_admin import auth

cred = firebase_admin.credentials.Certificate('path/to/refreshToken.json')
default_app = firebase_admin.initialize_app(cred)
email = 'blahblah'
password='blahbaljh'

user=auth.create_user(email=email,password=password)


