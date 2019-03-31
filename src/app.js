import React, { Component } from 'react';

// Post data
import { posts } from './posts/posts.json';

// Styles
import componentStyles from './app.css';

// Components
import Divider from './components/Divider';
import PostPreview from "./components/PostPreview";
import Post from "./components/Post";

class App extends Component {
  state = {
    activePost: null,
    showActivePost: false,
  };

  handlePostSelection = postData => {
    this.setState({ activePost: postData, showActivePost: true });
  };

  handlePostReset = () => {
    this.setState({ activePost: null, showActivePost: false });
  };

  renderActivePost = () => {
    const { activePost } = this.state;

    return (
      <div className={componentStyles.postContainer}>
          <Post postData={activePost} goBack={this.handlePostReset} />
      </div>
    );
  };

  renderMainPage = () => (
      <div className={componentStyles.pageContainer}>
        <h1 style={{ margin: '48px 0px' }}>365 Days of Learning</h1>
        {posts.map(post => {
          return <PostPreview title={post.title} text={post.summary} readMore={() => this.handlePostSelection(post)} />;
        })}
      </div>
  );
  render() {
      const { showActivePost } = this.state;
      return showActivePost ? this.renderActivePost() : this.renderMainPage();
  }
}

export default App;
