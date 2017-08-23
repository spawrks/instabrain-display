import os
import random
from flask import Flask, render_template

app = Flask(__name__,
            template_folder=os.path.abspath('src/templates'))


@app.route('/')
def index():
    # TODO: remove random seed from here and index.html
    return render_template('index.html', random_seed=random.randint(1, 9999))


if __name__ == '__main__':
    app.run(debug=True)
