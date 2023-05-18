from flask import Flask, render_template, request, url_for, redirect, flash, send_from_directory
from werkzeug.security import generate_password_hash, check_password_hash
from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin, login_user, LoginManager, login_required, current_user, logout_user

#Connecting to Database
app = Flask(__name__)

app.config['SECRET_KEY'] = 'FANTOM'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

login_manager = LoginManager()
login_manager.init_app(app)

def to_dict(self):  #Function to convert any rows into dictionary
    return {column.name: getattr(self, column.name) for column in self.__table__.columns}
##CREATE TABLE IN DB
class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(100), unique=True)
    password = db.Column(db.String(100))
    name = db.Column(db.String(1000))
    phoneNumber = db.Column(db.String(10))
    score = db.Column(db.Integer)
#Line below only required once, when creating DB.
# with app.app_context():
#     db.create_all()

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

@app.route('/')
def home():
    return {"Status":1}


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
        login_user(new_user)
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
            login_user(user)

    return {"status":1,"score":user.score,"id":user.id,"name":user.name,"email":user.email,"phone number":user.phoneNumber}


@app.route('/secrets',methods=['GET'])
@login_required
def secrets():
    score1 = User.query.with_entities(User.score)
    return {"status":1}

@app.route('/score/<int:user_id>',methods=['PATCH'])
@login_required
def score(user_id):
    new_score = 1
    user = db.session.query(User).get(user_id)
    user.score = new_score
    db.session.commit()



@app.route('/logout',methods=['GET'])
def logout():
    return {"status":1}


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")