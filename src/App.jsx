import { useState } from "react";
import "./App.css";

function Balloons() {
  return (
    <div className="balloon-container">
      <div className="balloon balloon-pink b1">
        <span>♥</span>
      </div>

      <div className="balloon balloon-purple b2">
        <span>♥</span>
      </div>

      <div className="balloon balloon-blue b3">
        <span>♥</span>
      </div>

      <div className="balloon balloon-orange b4">
        <span>♥</span>
      </div>

      <div className="balloon balloon-pink b5">
        <span>♥</span>
      </div>

      <div className="balloon balloon-purple b6">
        <span>♥</span>
      </div>
    </div>
  );
}

<div className="clouds">
  <div className="cloud cloud1"></div>
  <div className="cloud cloud2"></div>
  <div className="cloud cloud3"></div>
</div>

function Lights() {
  return (
    <div className="lights">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

function Clouds() {
  return (
    <div className="clouds">
      <div className="cloud cloud1"></div>
      <div className="cloud cloud2"></div>
      <div className="cloud cloud3"></div>
    </div>
  );
}

function App() {
  const [screen, setScreen] = useState(1);

  const nextScreen = () => {
    setScreen((current) => current + 1);
  };

  const restart = () => {
    setScreen(1);
  };

  return (
    <main className="birthday-app">

      {/* Background decorations appear on EVERY screen */}
      <Lights />
      <Balloons />
      <Clouds />

      {/* Small floating hearts */}
      <div className="floating-hearts">
        <span>♥</span>
        <span>♥</span>
        <span>♥</span>
        <span>♥</span>
        <span>♥</span>
        <span>♥</span>
      </div>

      {/* ================= SCREEN 1 ================= */}

      {screen === 1 && (
        <section className="birthday-screen">

          <div className="birthday-card">

            <div className="gift-icon">🎁</div>

            <p className="subtitle">
              SOMETHING SPECIAL IS
              <br />
              WAITING FOR YOU...
            </p>

            <h1>
              Hey! <span className="wave">👋</span>
            </h1>

            <p className="description">
              I have a little surprise for you.
            </p>

            <button onClick={nextScreen}>
              Come on! Have a look at it 💕
            </button>

            <div className="dots">
              <i className="active"></i>
              <i></i>
              <i></i>
              <i></i>
            </div>

          </div>

        </section>
      )}

      {/* ================= SCREEN 2 ================= */}

      {screen === 2 && (
        <section className="birthday-screen">

          <div className="birthday-card">

            <div className="heart-icon">
              💖
            </div>

            <p className="subtitle">
              A VERY SPECIAL DAY
            </p>

            <h1>
              Happy
              <br />
              Birthday!
            </h1>

            <p className="description">
              Today is all about celebrating
              <br />
              someone truly wonderful.
            </p>

            <button onClick={nextScreen}>
              Continue 💌
            </button>

            <div className="dots">
              <i></i>
              <i className="active"></i>
              <i></i>
              <i></i>
            </div>

          </div>

        </section>
      )}

      {/* ================= SCREEN 3 ================= */}

      {screen === 3 && (
        <section className="birthday-screen">

          <div className="birthday-card cake-card">

            <div className="party-icon">
              🎉
            </div>

            <p className="subtitle">
              LET'S CELEBRATE!
            </p>

            <h2>
              Cake Time 🍰
            </h2>

            <p className="description">
              Because every
              <br />
              birthday needs a cake!
            </p>

            {/* Cake */}
            <div className="cake">

              <div className="candle">
                <div className="flame"></div>
              </div>

              <div className="cake-icing">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="cake-body">
                <div className="sprinkles">
                  <b></b>
                  <b></b>
                  <b></b>
                  <b></b>
                  <b></b>
                  <b></b>
                </div>
              </div>

              <div className="cake-plate"></div>

            </div>

            <button onClick={nextScreen}>
              Let's make a wish ✨
            </button>

            <div className="dots">
              <i></i>
              <i></i>
              <i className="active"></i>
              <i></i>
            </div>

          </div>

        </section>
      )}

      {/* ================= SCREEN 4 ================= */}

      {screen === 4 && (
        <section className="birthday-screen">

          <div className="birthday-card">

            <div className="wish-face">
              🤫
            </div>

            <h2>
              Close your eyes
            </h2>

            <div className="wish-line"></div>

            <p className="description">
              Take a deep breath...
              <br />
              and make your birthday wish.
            </p>

            <button onClick={nextScreen}>
              My wish is ready ✨
            </button>

            <div className="dots">
              <i></i>
              <i></i>
              <i></i>
              <i className="active"></i>
            </div>

          </div>

        </section>
      )}

      {/* ================= SCREEN 5 ================= */}

      {screen === 5 && (
        <section className="birthday-screen">

          <div className="birthday-card">

            <div className="present-icon">
              🎁
            </div>

            <p className="subtitle">
              REVEAL YOUR
            </p>

            <h2>
              Birthday Wishes
            </h2>

            <p className="description">
              All your wishes are
              <br />
              coming true! 💕
            </p>

            <button onClick={nextScreen}>
              Let's see →
            </button>

            <div className="dots">
              <i></i>
              <i></i>
              <i></i>
              <i className="active"></i>
            </div>

          </div>

        </section>
      )}

      {/* ================= SCREEN 6 ================= */}

      {screen === 6 && (
        <section className="birthday-screen final-screen">

          <div className="confetti">
            <span>🎉</span>
            <span>✨</span>
            <span>🎊</span>
            <span>💕</span>
            <span>🌟</span>
            <span>🎀</span>
          </div>

          <div className="birthday-card final-card">

            <div className="present-icon">
              🎁
            </div>

            <h2>
              All Wishes
              <br />
              Discovered! 💕
            </h2>

            <p className="description">
              May your life always be filled with
              <br />
              happiness, love, laughter and
              <br />
              beautiful memories.
            </p>

            <div className="Letter for you">

              <div>
                <span>💖</span>
                Sometimes gentle,Sometimes fierce.
              </div>

              <div>
                <span>🌟</span>
                Sometimes still, Sometimes untamed.
              </div>

              <div>
                <span>🎁</span>
                Sometimes blooming, Sometimes becoming
              </div>

              <div>
                <span>🌈</span>
                U hold contradictions, and that is ur beauty.
              </div>

            </div>

            <button onClick={restart}>
              Start Again 🔄
            </button>

          </div>

        </section>
      )}

    </main>
  );
}

export default App;