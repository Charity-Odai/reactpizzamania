import React from 'react'

function Content() {
  return (
    <div>
        <div className="container m">
  <h2 className="text-center">About Pizza</h2>
  <div className="row ">
    <div className="col-md-6">
      <img src={require('./Imagess/meat.jpg')} alt='a' className="img-responsive"/>
    </div>
    <div className="col-md-6">
      <h3>Pizza is awesome!</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>   
  </div>  
</div>

<div className="container m">
  <div className="row">
    <h3 className="text-center">Pizza Types</h3>

    <div className="col-md-3">
      <div className="thumbnail">
        <img src={require('./Imagess/table.jpg')} alt="pepperonni"/>
          <div className="caption">
            <h3>Pepperoni Pizza</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>           
          </div>
      </div>
    </div>
    
    <div className="col-md-3">
      <div className="thumbnail">
        <img src={require('./Imagess/cheese.jpg')} alt="veg"/>
          <div className="caption">
            <h3>Vegetable Pizza</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>          
          </div>
      </div>
    </div>
   
    <div className="col-md-3">
      <div className="thumbnail">
        <img src={require('./Imagess/cheese.jpg')} alt="cheese"/>
          <div className="caption">
            <h3>Cheese Pizza</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>   
          </div>
      </div>
    </div>
    
    <div className="col-md-3">
      <div className="thumbnail">
        <img src={require('./Imagess/meat.jpg')} alt="meat"/>
          <div className="caption">
            <h3>Meat Pizza</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>          
          </div>
      </div>
    </div>

  </div>
</div>
    </div>
  )
}

export default Content