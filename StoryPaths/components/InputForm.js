
import './App.css';

const App = () => {
    const [formData, setFormData] = useState({
      childName: '',
      villain: '',
      location: '',
      childAge: '',
      authorVoice: '',
      childPronouns: '',
      sidekickPronouns: '',
      childSidekick: '',
      storyTheme: ''
    });

    return (
        <div>
          <form onSubmit={generateStory}>
            
          <input
              type="text"
              name="childName"
              placeholder="Child's Name"
              value={formData.childName}
              onChange={handleChange}
            />
            <select
              name="childPronouns"
              value={formData.childPronouns}
              onChange={handleChange}
            >
              <option value="">Select Child's Pronouns</option>
              <option value="he/him">He/Him</option>
              <option value="she/her">She/Her</option>
              <option value="they/them">They/Them</option>
            </select>
            <input
              type="text"
              name="childSidekick"
              placeholder="Sidekick's Name"
              value={formData.childName}
              onChange={handleChange}
            />
            <select
              name="sidekickPronouns"
              value={formData.childPronouns}
              onChange={handleChange}
            >
              <option value="">Select Sidekick's Pronouns</option>
              <option value="he/him">He/Him</option>
              <option value="she/her">She/Her</option>
              <option value="they/them">They/Them</option>
            </select>
            <input
              type="text"
              name="villain"
              placeholder="Type of Villain"
              value={formData.villain}
              onChange={handleChange}
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={formData.location}
              onChange={handleChange}
            />
            <input
              type="number"
              name="childAge"
              placeholder="Child's Age"
              value={formData.childAge}
              onChange={handleChange}
            />
            <select
              name="authorVoice"
              value={formData.authorVoice}
              onChange={handleChange}
            >
              <option value="">Select Author's Voice</option>
              <option value="roald_dahl">Roald Dahl</option>
              <option value="jk_rowling">J.K. Rowling</option>
              <option value="eb_white">E.B. White</option>
              <option value="dr_seuss">Dr. Seuss</option>
              <option value="cs_lewis">CS Lewis</option>
              <option value="beverly_clear">Beverly Cleary</option>
              <option value="mark_twain">Mark Twain</option>
              {/* Add other authors here */}
            </select>
            <select
              name="storyTheme"
              value={formData.storyTheme}
              onChange={handleChange}
            >
              <option value="">Select Story Theme</option>
              <option value="friendship">Friendship</option>
              <option value="family">Empathy</option>
              <option value="adventure">Bravery</option>
              <option value="adventure">Acceptance</option>
              <option value="adventure">Perseverance</option>
              <option value="adventure">Kindness</option>
            </select>
    
            <button type="submit">Create your child's adventure</button>
          </form>
          
        </div>
      );
    };

export default InputStory;