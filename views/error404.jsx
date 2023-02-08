const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
          </main>
      </Def>
    )
  }
  <div>
    <img src="/images/yan-lvb8DXEBEmc-unsplash.jpg" alt="puppy"/>
    <div>
      Photo by <a href="https://unsplash.com/@yan1109?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">yan</a> on <a href="https://unsplash.com/photos/lvb8DXEBEmc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
    </div>
  </div>
  
module.exports = error404

