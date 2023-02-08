const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <div>
                <img src="/images/chad-montano-lP5MCM6nZ5A-unsplash.jpg" alt="taco" />
                <div>
                 Photo by <a href="https://unsplash.com/@briewilly?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Chad Montano</a> on <a href="https://unsplash.com/photos/lP5MCM6nZ5A?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>
              </div>
          </main>
      </Def>
    )
  }
  
module.exports = home

<a href="/places">
  <button className="btn-primary">Places Page</button>
</a>


