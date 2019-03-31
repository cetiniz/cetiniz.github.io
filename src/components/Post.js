import React from 'react';
import PropTypes from 'prop-types';

// Assets
const images = require.context('../images/', false, /\.(png|jpe?g|svg)$/);

// Styles
import componentStyles from './Post.css';


const Post = ({ postData, goBack }) => {
    const { text, title, data } = postData;

    const renderText = text => (
        <p className={componentStyles.text}>{text}</p>
    );

    const renderImage = image => {
        return (
            <div className={componentStyles.imageContainer}>
                <img src={images(image)} height={290} />
            </div>
        )
    };

    const mapTypeToRender = content => {
        console.log(content)
      switch (content.type) {
          case 'text':
              return renderText(content.text);
          case 'image':
              return renderImage(content.url);
      }
    };

    return (
        <>
            <p className={componentStyles.goBack} onClick={goBack}>Go Back</p>
            <div className={componentStyles.container}>
                <h3 style={{ marginBottom: 32 }}>{title}</h3>
                {data.map(content => mapTypeToRender(content))}
            </div>
        </>
    );
};

Post.propTypes = {
    text: PropTypes.string,
};

export default Post;
