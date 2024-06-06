import React, { useState } from 'react';
import './postpage.css';
import Picker from '@emoji-mart/react';
import hashtagsData from './hastags.json';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DatePicker from 'react-datepicker';
import TimePicker from 'react-time-picker';
import { BsEmojiGrin } from "react-icons/bs";
import { FaCalendarAlt, FaClock } from 'react-icons/fa';
import { HiUser } from "react-icons/hi2";
import logocollege from '../Asset/college-logo.png';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-time-picker/dist/TimePicker.css';

function Postpage() {
  const currentDate = new Date();
  const currentFormattedTime = `${currentDate.getHours()}:${currentDate.getMinutes()}`;
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [selectedTime, setSelectedTime] = useState(currentFormattedTime);
  const [isPickerVisible, setPickerVisible] = useState(false);
  const [currentEmoji, setCurrentEmoji] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [suggestedHashtags, setSuggestedHashtags] = useState([]);
  const [selectedHashtags, setSelectedHashtags] = useState([]);

  const handleEmojiSelect = (emoji) => {
    setCurrentEmoji(currentEmoji + emoji.native);
    setPickerVisible(false);
  };

  const maxCharacters = 2500;

  const handleChange = (event) => {
    const value = event.target.value;
    setCurrentEmoji(value);

    const words = value.split(/\s+/);
    const lastWord = words[words.length - 1];

    if (lastWord.startsWith('#') && lastWord.length > 1) {
      setInputValue(lastWord);
      const suggestions = hashtagsData.hashtags.find(item => item.letter.toLowerCase() === lastWord.replace('#', ''))?.suggestions || [];
      setSuggestedHashtags(suggestions);
    } else {
      setInputValue('');
      setSuggestedHashtags([]);
    }

    if (value.length <= maxCharacters) {
      setCurrentEmoji(value);
    } else {
      setInputValue('');
      setSuggestedHashtags([]);
    }
  };

  const handleHashtagClick = (hashtag) => {
    const words = currentEmoji.split(/\s+/);
    
    if (words.length > 100) {
      const firstPart = words.slice(0, 100).join(' ');
      const secondPart = words.slice(100).join(' ');
      const newValue = `${firstPart} ${hashtag} ${secondPart}`;
      setCurrentEmoji(newValue);
    } else {
      const newValue = `${currentEmoji} ${hashtag}`;
      setCurrentEmoji(newValue);
    }
    
    setInputValue('');
    setSuggestedHashtags([]);
    setSelectedHashtags([...selectedHashtags, hashtag]);
  };

  const togglePicker = () => {
    setPickerVisible(!isPickerVisible);
  };

  return (
    <>
      <div className="container-post-page">
        <div>
          <label  htmlFor="logo-college" className="logo-content">
            <img src={logocollege} className='logocollege' style={{ width: '25px', height: '25px', objectFit: 'cover' }} alt="Logo" />
            <p className="logo-text-head ">cape_institute_of_technology</p>
          </label>

          <textarea
            id="logo-college"
            name="logo-college"
            className=" text-controls-textarea mb-3 p-2"
            value={currentEmoji}
            onChange={handleChange}
            rows="6"
            cols="40"
            style={{ color: '#184D32', width: '100%', height:'170px', borderRadius: '5px'}}
            placeholder="Write a caption...."
          />


          <div className='row '>

            <div className='col-md-8 emoji'>

              <div>
                <BsEmojiGrin className="emoji-button" onClick={togglePicker}/>
                <HiUser  className="contact-button"/>
              </div>

              <div className='col-md-4 count-number'>
                {currentEmoji.length}/{maxCharacters}
              </div>

              <div className="containerpicker">
                <div className={isPickerVisible ? 'd-block' : 'd-none'}>
                  {isPickerVisible && (
                    <Picker onEmojiSelect={handleEmojiSelect}/>
                  )}
                </div>
              </div>

              <div className='.selected-hashtags-container'>
                <p className="top-header">#Add Hashtag</p>
                <p className="top-para">Checkout out the top Hashtag suggestion :</p>

                <div className="suggested-hashtags-container" style={{ width: '550px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                  {["#add location", "#books", "#photoshop", "#chess","#businessi", "#fitness", "#art", "#fashion", "#music", "#love", "#fun","#adds"].map((hashtag, i) => (
                    <div key={i} onClick={() => handleHashtagClick(hashtag)} className="selected-hashtag">
                      {hashtag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="schedule">       
          <Accordion className='accordion-design'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <div className='schedule-content'>
                Schedule
                <p className='schedule-message'>Select a date to make your photo or video <span className="publish-span">publish</span></p>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div className='private-public'>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  className="radio-input"
                />
                <label htmlFor="female" className="radio-label">From private to public</label>
                <p className="private-message">Photo or video will be private before publishing</p>
              </div>
            </AccordionDetails>
            <AccordionActions>
              <div className='crm-block'>
                <div className='searchbar'>
                  <div className="searcher">
                    <div className="input-wrapper">
                      <DatePicker
                        className="datepicker"
                        selected={selectedDate}
                        onChange={date => setSelectedDate(date)}
                        dateFormat="MMMMMM/dd/yyyy" // Month displayed as words
                        placeholderText="Select Date"
                        showYearDropdown
                        scrollableYearDropdown
                        yearDropdownItemNumber={15}
                      />
                    </div>
                    <div className="input-wrapper">
                      <TimePicker
                        className="timepicker"
                        value={selectedTime}
                        onChange={time => setSelectedTime(time)}
                        disableClock={true}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </AccordionActions>
          </Accordion>
        </div>
      </div>
    </>
  );
}

export default Postpage;
