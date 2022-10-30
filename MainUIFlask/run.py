# -*- encoding: utf-8 -*-
"""
Copyright (c) 2019 - present AppSeed.us
"""

from flask_migrate import Migrate
from flask import render_template, request, redirect

from sys import exit
from decouple import config

from apps.config import config_dict
from apps import create_app, db

# WARNING: Don't run with debug turned on in production!
DEBUG = config('DEBUG', default=True, cast=bool)

# The configuration
get_config_mode = 'Debug' if DEBUG else 'Production'

try:

    # Load the configuration using the default values
    app_config = config_dict[get_config_mode.capitalize()]

except KeyError:
    exit('Error: Invalid <config_mode>. Expected values [Debug, Production] ')

app = create_app(app_config)
Migrate(app, db)

if DEBUG:
    app.logger.info('DEBUG       = ' + str(DEBUG))
    app.logger.info('Environment = ' + get_config_mode)
    app.logger.info('DBMS        = ' + app_config.SQLALCHEMY_DATABASE_URI)

if __name__ == "__main__":
    app.run()

@app.route('/online')  
def online():  
    return render_template("online.html");  

@app.route('/offline')  
def offline():  
    return render_template("offline.html");

@app.route('/upload',methods=['POST'])
def upload():
    if request.method=='POST':
        f=request.files['file']
        f.save(f.filename)
        return redirect('offline.html')

from werkzeug.utils import secure_filename
import os
app.config['UPLOAD_DIRECTORY'] = 'upload/'
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024 # 16MB
app.config['ALLOWED EXTENSIONS'] = ['.pdf, .jpeg, .jpg']