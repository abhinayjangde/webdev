from flask import Flask, render_template, request, session, redirect, url_for, flash
from cs50 import SQL
from flask_session import Session
from flask_cors import CORS

app = Flask(__name__)
db = SQL("sqlite:///mydb.db")

# Configure CORS
CORS(app)

# Configure session to use filesystem (instead of signed cookies)
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

@app.route('/')
def index():
    app.name = "FlaskApp"
    flash("This is a flash message test!", "info")
    return render_template('index.html', session=session)

@app.route('/register', methods=['GET','POST'])
def register():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        password = request.form['password']
        if not name and not email and not password:
            return render_template('error.html', message="All fields are required.")
        elif not name:
            return render_template('error.html', message="Name is required.")
        elif not email:
            return render_template('error.html', message="Email is required.")
        elif not password:
            return render_template('error.html', message="Password is required.")
        
        db.execute("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", name, email, password)
        return render_template('success.html', title="Registration", name=name)
    return render_template('register.html')

@app.route('/login', methods=['GET','POST'])
def login():
    if request.method == 'GET':
        return render_template('login.html')
    
    email = request.form['email']
    password = request.form['password']
    if not email and not password:
        return render_template('error.html', message="Email and Password are required.")
    elif not email:
        return render_template('error.html', message="Email is required.")
    elif not password:
        return render_template('error.html', message="Password is required.")
    user = db.execute("SELECT * FROM users WHERE email = ? AND password = ?", email, password)
    if len(user) != 1:
        return render_template('error.html', message="Invalid email or password.")
    session["name"] = user[0]['name']
    return render_template('success.html', title="Login", name=session["name"])

@app.route('/logout')
def logout():
    session.clear()
    return render_template('index.html', session=session)

@app.route("/flash-test")
def flash_test():
    
    return {
        "message": "This is a test response for CORS.",
        "success": True
    }

@app.errorhandler(404)
def page_not_found(e):
    print(e)
    return render_template("404.html"), 404

# if __name__ == '__main__':
#     app.run(debug=True)