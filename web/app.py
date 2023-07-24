from flask import render_template, Flask


app = Flask(__name__)
app.config['SECRET_KEY'] = 'my secret key!'

@app.route('/')
def home_view():
    return render_template('home.html')

@app.route('/about')
def about_view():
    return render_template('about.html')

@app.route('/skills')
def skills_view():
    return render_template('skills.html')

@app.route('/contact')
def contact_view():
    return render_template('contact.html')

if __name__ == '__main__':
    app.run(host='localhost',port=8080,debug=True)
