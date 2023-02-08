import React, { Component } from 'react';
import Projects from './Projects';
import Socials from './Socials';
import me_apple from './assets/me_apple.jpg'

class App extends Component {
    state = { displayBio: false };

    toggleDisplayBio = () => { // always use setState to modify states in react - never change the state on its own
        this.setState( {displayBio : !this.state.displayBio }); //sets the opposite value of displayBio
    }

    render() {   
        return (
            <div>
                <img src={me_apple} alt='profile img' className="me_apple"/>
                <h1>Henlo</h1>
                <p>My name is Saiyam.</p>
                <p>I'm a bad ass mfer</p>

                
                {   this.state.displayBio ? (
                    <div>
                        <p>I live in Toronto, and pretty much code evey day.</p>
                        <p>My favorite language is Python</p>
                        <p>I also love cricket</p>
                        <button onClick={this.toggleDisplayBio}>Show Less</button>
                    </div>
                    ) : (
                        <div>
                            <button onClick={this.toggleDisplayBio}>Read More</button>
                        </div>
                    )
                }
                
                <hr/>
                <Projects/>
                <hr/>
                <div>
                    <Socials/>
                </div>
            </div>
        );
    }
}

export default App;