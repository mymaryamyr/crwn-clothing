import React from "react";
import './menu-item.styles.scss';
import { withRouter } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <div 
        onClick={() => history.push(`${match.url}${linkUrl}`)}
        style={{
            backgroundImage: `url(${imageUrl})`
        }} 
        className={`${size} menu-item`} >
        <div className="content">
            <h1 className="title">{ title.toUpperCase() }</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
)

export default withRouter(MenuItem);