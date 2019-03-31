import React from 'react';
import PropTypes from 'prop-types';

// Styles
import componentStyles from './PostPreview.css';

const PostPreview = ({ title, text, readMore }) => {
    return (
        <div className={componentStyles.container}>
            <h3 className={componentStyles.title}>{title}</h3>
            <p className={componentStyles.text}>{`${text.substring(0, 500)}...`}</p>
            <p className={componentStyles.readMore} onClick={readMore}>Read more</p>
        </div>
    );
};


PostPreview.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    readMore: PropTypes.func,
};

export default PostPreview;
