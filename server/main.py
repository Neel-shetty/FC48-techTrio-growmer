from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return "Hello word"


if __main__ ==" __name__":
    app.config(debug=True)