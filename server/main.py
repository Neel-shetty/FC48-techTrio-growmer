from flask import Flask, render_template, request, url_for, redirect, flash, send_from_directory
from werkzeug.security import generate_password_hash, check_password_hash
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine
# from flask_login import UserMixin, login_user, LoginManager, login_required, current_user, logout_user
from openai1 import get_score
from flask_cors import CORS
import psycopg2
from datetime import datetime


#Connecting to Database
app = Flask(__name__)
CORS(app)
app.config['SECRET_KEY'] = 'FANTOM'
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:5AbzfqI1Sy3L8nFF0e3t@containers-us-west-53.railway.app:6771/railway'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# engine = create_engine('postgresql+psycopg2://postgres:5AbzfqI1Sy3L8nFF0e3t@containers-us-west-53.railway.app:6771/railway')

# conn = psycopg2.connect(database="railway", user="postgres",
#                         password="5AbzfqI1Sy3L8nFF0e3t", host="containers-us-west-53.railway.app",
#                           port="6771")


# login_manager = LoginManager()
# login_manager.init_app(app)

def to_dict(self):  #Function to convert any rows into dictionary
    return {column.name: getattr(self, column.name) for column in self.__table__.columns}
##CREATE TABLE IN DB
class User( db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(100), unique=True)
    password = db.Column(db.String(100))
    name = db.Column(db.String(1000))
    phoneNumber = db.Column(db.String(10))
    score = db.Column(db.Integer)
#Line below only required once, when creating DB.
# with app.app_context():
#     db.create_all()

class Message( db.Model):
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String(10000))
    date_time = db.Column(db.DateTime, default=datetime.utcnow)
    score = db.Column(db.Integer)
    owner_id = db.Column(db.Integer)
with app.app_context():
    db.create_all()



@app.route('/')
def home():

    return {"status":1}


@app.route('/register', methods=["POST"])
def register():

    if request.method == "POST":
        if User.query.filter_by(email = request.args.get('email')).first():

            return {"status":0,"message":"account already exists"}
        new_user = User(
            email=request.args.get('email'),
            name=request.args.get('name'),
            password=request.args.get('password'),
            phoneNumber =request.args.get('phoneNumber'),
            score = 0,)
        new_user.password = generate_password_hash(new_user.password, method='pbkdf2:sha256', salt_length=8)
        db.session.add(new_user)
        db.session.commit()

    return {"status":1}


@app.route('/login', methods=['POST'])
def login():

    if request.method == 'POST':
        email = request.args.get('email')
        password = request.args.get('password')

        user = User.query.filter_by(email=email).first()

        if not user:

            return {"status":0,"message":"User not found,Please register"}

        elif not check_password_hash(user.password,password):

            return {"status":0,"message":"Password is not matching"}

        else:
            # login_user(user)

            return {"status":1,"score":user.score,"id":user.id,"name":user.name,"email":user.email,"phone number":user.phoneNumber}


@app.route('/details',methods=['GET','POST'])
def details():   

    id = request.args.get('id')
    # user = db.get_or_404(User, id)
    user = User.query.filter_by(id=id).first()
    user.score+=1
    db.session.commit()
    return {"status":1,"details":user.score}


@app.route('/score',methods=['PATCH'])
def score():

    id = request.args.get('id')
    text = request.args.get('text')
    user = User.query.filter_by(id=id).first()
    scoreText = get_score(text)
    user.score +=scoreText 
    db.session.commit()
    return {"status":1,"score":user.score}

@app.route('/message',methods=['POST'])
def add_message():
    if request.method == "POST":
        owner_id = request.args.get('user_id')
        text = request.args.get('text')
        scoreText = get_score(text)

        new_message = Message(
            text=text,
            date_time=datetime.now(),
            score=scoreText,
            owner_id=owner_id,
        )
        db.session.add(new_message)
        db.session.commit()
    return {"status":1}

@app.route('/scoring')
def scoring()

@app.route('/logout',methods=['GET'])
def logout():

    return {"status":1}
    

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")