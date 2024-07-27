import React from 'react'

export default function Restaurant() {
  return (
    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
        <div className="card p-3 rounded">
            <img 
            src="https://b.zmtcdn.com/data/pictures/chains/1/47211/346447036c0c9839ee54aa34fcab3fa7.jpg?fit=around%7C300:273&crop=300:273;*,*"
            alt="Dominos"
            />
            {/*headng and adress*/}
            <div className="card-body d-flex flex-column">
                <h5 className="card-tittle">Dominos Pizza</h5>
                <p className="rest_address">3, 123 streat, CBD, City-400614, Maharashtra</p>
            {/*reviews and rating */}
                 <div className="rating-outer">
                    <div className="rating-inner"></div>
                        <span id="no_of_reviews">(150 reviews)</span>
                    </div>
                 </div>
            </div>
        </div>
      
   
  );
}
