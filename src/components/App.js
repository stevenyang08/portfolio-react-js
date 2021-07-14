import React, { Component, Profiler } from 'react';
import Projects from './Projects';
import SocialMediaList from './SocialMediaList';
import Title from './Title';
import profile from '../assets/profile.png';

// class RegularClass {}
// class ComponentClass extends Component {}

// const regularClassInstance = new RegularClass();
// const componentClassInstance = new ComponentClass();

// console.log('regularClassInstance', regularClassInstance);
// console.log('componentClassInstance', componentClassInstance);

class App extends Component {
    state = { displayBio: false };

    toggleDisplayBio = () => {
        // Standard
        this.setState({ displayBio: !this.state.displayBio }); 

        // Not correct.  Should not directly change state
        // this.state.displayBio = !this.state.displayBio;
    }

    render() {
        let bio = this.state.displayBio ? (
            <div>
            <p>I live in Denver and enjoying doing all sorts of hobbies.</p>
            <p>I love doing iOS development and use Swift for the most part.</p>
            <p>I am learning web development to help out at work and it's been very fun.</p>
            <p>React JS is definitely my go to when it comes to web dev.</p>
            <button onClick={this.toggleDisplayBio}>Show Less</button>
        </div>
        ) : (
            <div>
                <button onClick={this.toggleDisplayBio}>Read More</button>
            </div>
        )

        return (
        <div>
            <img src={profile} alt='profile' className='profile' />
            <h1>Hello!</h1>
            <p>My name is Steven Yang.</p>
            <Title />
            {bio}
            <hr />
            <Projects />
            <hr />
            <SocialMediaList />
        </div>
        )
    }
}

export default App;