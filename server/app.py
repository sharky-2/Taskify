import webview
import os
import threading

from flask import Flask, render_template, jsonify, request, redirect, url_for, session
from dotenv import load_dotenv

app = Flask(__name__)
@app.route("/", methods=["GET"])
def welcome():
    return render_template("welcome.html")

@app.route("/registration")
def registration():
    return render_template("registration.html")

@app.route("/index")
def index():
    return render_template("index.html")

def run_flask():
    app.run(debug=False, use_reloader=False)

if __name__ == "__main__": 

    app.run(debug=True) 

    # flask_thread = threading.Thread(target=run_flask)
    # flask_thread.start()
    # webview.create_window("Taskify", "http://127.0.0.1:5000", width=600, height=900)
    # webview.start()