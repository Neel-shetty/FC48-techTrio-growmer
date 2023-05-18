import os
#from dotenv import load_dotenv
from flask import Flask
from werkzeug.security import generate_password_hash, check_password_hash
from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin, login_user, LoginManager, login_required, current_user, logout_user
#load_dotenv()

app = Flask(__name__)

@app.route("/")
def home():
    return "Hello word"





if __name__ == "__main__":
    app.run(debug=True ,host="0.0.0.0")