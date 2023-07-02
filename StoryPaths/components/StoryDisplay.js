import './App.css';
import styles from './components/Styles';

const StoryDisplay = ({ story }) => {
    return (
      <div>
        {story ? (
          <div className="story">
            <p>{story}</p>
          </div>
        ) : (
          <p>Enter the details and click the button to generate your story!</p>
        )}
      </div>
    );
  };
  
  // TODO: Take output story which is already in paragraphs, break into separate objects, and allow for inserting images from DALL-E sporadically between the paragraphs
  
  export default StoryDisplay;