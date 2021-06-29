import React, { Component } from 'react';
import SocialMediaAccounts from '../data/socialMediaAccounts';

const SocialMedia = props => {
    const { img, url } = props.account;

    return (
        <center style={{ display: 'inline-block', width: SocialMediaAccounts.map.length * 35, height: 25 }}>
            <a href={url}>
                <img src={img} style={{ width: 25, height: 25, paddingLeft: 5, paddingRight: 5 }} />
            </a>
        </center>
    )
}

const SocialMediaList = props => (
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

export default SocialMediaList;