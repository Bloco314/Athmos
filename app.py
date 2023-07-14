from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/gameover')
def gameover():
    return render_template('gameOver.html')

@app.route('/sobre')
def sobre():
    return render_template('sobre.html')

@app.route('/firststage')
def jogo1():
    return render_template('first.html')

@app.route('/secondstage')
def jogo2():
    return render_template('second.html')

@app.route('/thirdstage')
def jogo3():
    return render_template('third.html')

@app.route('/fourthstage')
def jogo4():
    return render_template('fourth.html')

@app.route('/fifthstage')
def jogo5():
    return render_template('fifth.html')

if __name__ == '__main__':
    app.run()
