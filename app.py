from flask import Flask, render_template, request, redirect
import sqlite3
app = Flask(__name__)
 

@app.route('/',methods=['GET','POST'])

def login():
    print("1")
    if request.method == 'POST':
        print("2")
        name = request.form['email']
        print("3")
        password = request.form['password']
        connection = sqlite3.connect('database.db')
        cursor = connection.cursor()
        cursor.execute("INSERT INTO user (email,password) VALUES (?,?)",(name,password))
        connection.commit()
        connection.close()
        print("Data Added successfully")
        #return redirect('/index1')
        return render_template('user.html')
    return render_template('login.html')


if __name__ == '__main__':
 
    app.run()
