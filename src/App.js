import './App.css';
import React, { useEffect, useState } from "react";
import OldFetch from './sandbox-components/oldfetch';
import NewFetch from './sandbox-components/newfetch';
import OldButton from './sandbox-components/oldwaybutton';
import NewButton from './sandbox-components/newwaybutton';
//pics
import oldwaybutton_code from './pics/oldwaybutton_code.PNG';
import newwaybutton_code from './pics/newwaybutton_code.PNG';
import oldfetch_code from './pics/oldfetch_code.PNG';
import newfetch_code from './pics/newfetch_code.PNG';
import usefetch_code from './pics/usefetch_code.PNG';

function App() {

  return (
    <div className="App">
      
        {/* Title */}
        <h1 className="sandbox-title">Hooks and how to use them</h1>
        <h4 className="sandbox-title">By : Jorge Luna</h4>

        <hr className="featurette-divider"/>

        {/* First Example */}
        <section>
          {/* Old Way */}
          <div className="container sandbox-section">
              <div className="row">
                <div className="col-md-4">
                  <h3>Before Hooks existed</h3>
                  <h4>this was the way</h4>
                  <OldButton />
                </div>
                <div className="col-md-8">
                  <img className="codepic" src={oldwaybutton_code}/>
                </div>
              </div>
              
          </div>

          {/* With Hook */}
          <div className="container sandbox-section">
              <div className="row">
                <div className="col-md-4">
                  <h3>Then Hooks appeared</h3>
                  <h4 className="greentext">this is the way</h4>
                  <NewButton />
                </div>
                <div className="col-md-8">
                <img className="codepic" src={newwaybutton_code}/>
                </div>
              </div>
          </div>
        </section>

        <hr className="featurette-divider"/>

        {/* Definition Section*/}
        <section>
          <h2>What are <b className="greentext">Hooks</b>, again?</h2>
          <h5 className="tldr-subtitle">In a nutshell: Hooks allows you to use states and other React stuff without needing to write a class.</h5>
          <div className="container">
              <div className="row">
                <div className="col-md-2"> 
                <img className="paragraph-img" src="https://image.freepik.com/vector-gratis/gancho-pesca-dibujo-mano-estilo-vintage-imagenes-predisenadas-blanco-negro-aislado_67600-567.jpg"></img>
                </div>
                <div className="col-md-10 paragraph">
                  <p>As you know, React is basically a JavaScript library to create and compose components. So, there are two ways to create or define components: doing a function or writing a class. When you wanted to work with states or fetching, before Reaction 16.8 version, you needed to write a class, and in great-scale projects it turned out more complicated that it needed to be. </p>
                  <p>Devs from React knew this, and so, they introduced <b>Hooks</b>, a more concise <b>way to work with states and other React features using functions and without needing to write complex classes</b>. And now that we mention the classes, no, you can't use hooks in classes.</p>
                  <p>In the case of the states, the syntax is the following:</p>
                  <pre className="code-showroom">
                  <code >
                      const [<i>name_of_state</i>, <i>name_of_stateSetter</i>] = useState(<i>initial_value</i>)
                  </code>
                  </pre>
                  <p>We use the <b><i>useState()</i></b> function to generate two bindings: <b>the state</b> itself and <b>the state setter</b></p>
                </div>
              </div>

          </div>
        </section>

        <hr className="featurette-divider"/>

        {/*useEffect() Example*/}
        <section>
        <h2>Using useEffect() and how <b className="greentext">Hooks</b> makes your code elegant</h2>
          <h5 className="tldr-subtitle">Separation of concerns is now more easy</h5>
          {/* Old Way */}
          <div className="container sandbox-section">
              <div className="row">
                <div className="col-md-4">
                  <h3>Fetching data</h3>
                  <h4>The old way</h4>
                  <OldFetch />
                </div>
                <div className="col-md-8">
                  <img className="codepic" src={oldfetch_code}/>
                </div>
              </div>
              
          </div>

          {/* With Hook */}
          <div className="container sandbox-section">
              <div className="row">
                <div className="col-md-4">
                  <h3>Praise the hook!</h3>
                  <h4 className="greentext">Separation of concerns</h4>
                  <NewFetch />
                </div>
                <div className="col-md-8">
                <img className="codepic-upper" src={usefetch_code}/>
                <img className="codepic" src={newfetch_code}/>
                </div>
              </div>
          </div>
        </section>
        <hr className="featurette-divider"/>

        {/* Definition Section*/}
        <section>
          <h2>useEffect() Syntax</h2>
  
          <div className="container">
              <div className="row">
                {/* <div className="col-md-2"> 
                <img className="paragraph-img" src="https://image.freepik.com/vector-gratis/gancho-pesca-dibujo-mano-estilo-vintage-imagenes-predisenadas-blanco-negro-aislado_67600-567.jpg"></img>
                </div> */}
                <div className="col-md-12 paragraph">
                  <p>The components on React use either props and/or states to set or calculate the output. If the functional component makes calculations that don’t target the output value, then these calculations are named side-effects.</p>
                  <p>An example of side-effects would be fetch data request, manipulating the real DOM, timers, etc. </p>
                  <p>In the case of the useEffect, the syntax is the following:</p>
                  <pre className="code-showroom">
                  <code >
                      useEffect(<i>callback</i>[, <i>dependencies</i>]);
                  </code>
                  </pre>
                  <p>Where <b>callback</b> is the function containing side-effect logic, <b>dependencies</b> is an optional array  </p>

                </div>
              </div>

          </div>
        </section>
    </div>
  );
}

export default App;
