import React, { Component } from 'react';
import SocialMediaAccounts from './data/socialMediaAccounts';

class SocialMedia extends Component {
    openSite = (url) => {
        return(
            <a href={url} />
        )
    }
    render() {
        const { img, url } = this.props.account;

        return (
            <center style={{ display: 'inline-block', width: SocialMediaAccounts.map.length * 35, height: 25 }}>
                <a href={url}>
                    <img src={img} style={{ width: 25, height: 25, paddingLeft: 5, paddingRight: 5 }} />
                </a>
            </center>
        )
    }
}

class SocialMediaList extends Component {
    render() {
        return (
            <center>
                <h2>Connect With Me</h2>
                <div>
                {
                    SocialMediaAccounts.map( ACCOUNT => {
                        return (
                            <SocialMedia key={ACCOUNT.id} account={ACCOUNT} />
                        );
                    })
                }
                </div>
            </center> 
        )
    }
}

export default SocialMediaList;