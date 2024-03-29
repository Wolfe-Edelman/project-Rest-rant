const React = require('react')
const Def = require('./default')

function index () {
    return (
      <Def>
          <main>
              <h1>INDEX</h1>
              <p>This is the index page</p>
          </main>
      </Def>
    )
  }
  
module.exports = index

function index (data) {
  let placesFormatted = data.places.map((place) => {
    return (
      <div className="col-sm-6">
        <h2>{place.name}</h2>
        <p className="text-center">
          {place.cuisines}
        </p>
        <img src={place.pic} alt={place.name}/>
        <p className="text-center">
          Located in {place.city}, {place.state}
        </p>
      </div>
    )
  })
  return (
    <Def>
        <main>
            <h1>Places to Rant or Rave About</h1>
            <div className="row">
              {placesFormatted}
            </div>
        </main>
    </Def>
)}





















































































































