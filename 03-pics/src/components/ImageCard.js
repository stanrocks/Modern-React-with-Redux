import React from 'react';

// Proper image sizing:
// 1. Let ImageCard render itself and its image
// 2. Reach into DOM and figure out the height of the image
// 3. Set the image height on state to get te component to rerender
// 4. When rerendering, assign a 'grid-row-end' to make sure the image takes up the appropriate space

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    // reference to image
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    // wait for image to load, then call setSpans
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  // using arrow f to bind this context
  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10 + 1);
    this.setState({ spans });
  };

  render() {
    const { description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
