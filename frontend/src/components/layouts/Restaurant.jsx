import React from 'react'

export default function Restaurant() {
  return (
    <div col-sm-12 col-md-6 col-lg-3 my-3>
      <div className="card p-3 rounded">
        <img src="https://b.zmtcdn.com/data/pictures/2/3001462/ec530846fa48f8d9419df00168ec9b33.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A" alt="Downing Street" />
{/* Heading & address          */}
        <div className="card-body d-flex flex-column">
            <h5 className="card-tittle">Downing Street</h5>
            <p className="rest_address">123, street, Place, City - 00000, State</p>
{/* Reviews & Rating  */}
            <div className="rating-outer">
                <div className="rating-inner"></div>
                <span id="no_of_reviews">(150 reviews)</span>   
            </div>
        </div>
      </div>
    </div>
  )
}
