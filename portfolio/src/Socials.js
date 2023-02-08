import React, { Component } from 'react';
import SOCIALS from './data/socials';

class Social extends Component {
    render() {
        const { image, link } = this.props.social; // avoids requiring this.title=... , this.image=...

        return(
            <span>
                <a href={link}>
                    <img src={image} alt='social-profile' style={{ width:50, height:50, margin: 10}}/>
                </a>
            </span>
        );
    }
}

class Socials extends Component {
    render() {
        return (
            <div>
                <h2>Socials</h2>
                <div>
                    {
                        SOCIALS.map(SOCIAL => {
                            return(
                                <Social key={SOCIAL.id} social={SOCIAL}/>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Socials;