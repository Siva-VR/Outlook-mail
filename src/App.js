import React, { useState } from 'react';
import './App.css'; // Import CSS file for styling

// Sample email data
const emails = [
  { id: 1, folder: 'inbox', subject: 'Task for Interview Evaluation: React.js and Redux Application', body: 'We are excited to invite you to participate in our interview process e at [Zenorservices]. As part of the evaluation process, we would like you to complete the following tasks related to React.js and Redux. These tasks are designed to assess your frontend development skills and understanding of state management in React applications.' },
  { id: 2, folder: 'inbox', subject: 'Meeting Reminder', body: 'Just a reminder about our meeting tomorrow.' },
  { id: 3, folder: 'inbox', subject: 'Report', body: 'Please find attached the report.' },
  { id: 4, folder: 'inbox', subject: 'Feedback', body: 'Your feedback is appreciated.' },
  { id: 5, folder: 'inbox', subject: 'Invitation', body: 'You are invited to the party.' },
  { id: 6, folder: 'inbox', subject: 'Job Offer', body: 'Congratulations! You got the job.' },
  { id: 7, folder: 'inbox', subject: 'Request', body: 'Can you help with this request?' },
  { id: 8, folder: 'inbox', subject: 'Newsletter', body: 'Check out our latest newsletter.' },
  { id: 9, folder: 'inbox', subject: 'Important Announcement', body: 'Please read the attached announcement.' },
  { id: 10, folder: 'inbox', subject: 'Reminder', body: 'Just a gentle reminder.' },
  { id: 11, folder: 'inbox', subject: 'Survey', body: 'We value your feedback. Please take our survey.' },
  { id: 12, folder: 'inbox', subject: 'Project Update', body: 'Here is the latest update on the project.' },
  { id: 13, folder: 'inbox', subject: 'Thank You', body: 'Thank you for your cooperation.' },
  { id: 14, folder: 'inbox', subject: 'Query', body: 'Do you have any questions?' },
  { id: 15, folder: 'inbox', subject: 'Invitation', body: 'Join us for the event.' },
  { id: 16, folder: 'inbox', subject: 'Feedback Request', body: 'Your feedback is valuable to us.' },
  { id: 17, folder: 'inbox', subject: 'Follow-up', body: 'Just following up on our previous conversation.' },
  { id: 18, folder: 'inbox', subject: 'Promotion', body: 'Take advantage of our promotion.' },
  { id: 19, folder: 'inbox', subject: 'Complaint', body: 'We apologize for any inconvenience caused.' },
  { id: 20, folder: 'inbox', subject: 'Training Session', body: 'Join us for the training session tomorrow.' },
  { id: 21, folder: 'sent', subject: 'Proposal', body: 'Attached is the proposal document.' },
  { id: 22, folder: 'sent', subject: 'Meeting Minutes', body: 'Minutes of the meeting attached.' },
  { id: 23, folder: 'sent', subject: 'Monthly Report', body: 'Monthly report for your review.' },
  { id: 24, folder: 'sent', subject: 'Confirmation', body: 'Confirmation of your registration.' },
  { id: 25, folder: 'sent', subject: 'Acknowledgment', body: 'Acknowledgment of receipt attached.' },
  { id: 26, folder: 'sent', subject: 'Thank You', body: 'Thank you for your cooperation.' },
  { id: 27, folder: 'sent', subject: 'Follow-up', body: 'Following up on our previous communication.' },
  { id: 28, folder: 'sent', subject: 'Invitation', body: 'You\'re invited to our event.' },
  { id: 29, folder: 'sent', subject: 'Feedback Request', body: 'We value your opinion. Please provide feedback.' },
  { id: 30, folder: 'sent', subject: 'Project Update', body: 'Project update enclosed.' },
  { id: 31, folder: 'sent', subject: 'Promotion', body: 'Take advantage of our promotion.' },
  { id: 32, folder: 'sent', subject: 'Reminder', body: 'Just a reminder about the upcoming deadline.' },
  { id: 33, folder: 'sent', subject: 'Thank You', body: 'Thank you for your support.' },
  { id: 34, folder: 'sent', subject: 'Invitation', body: 'Invitation to our product launch event.' },
  { id: 35, folder: 'sent', subject: 'Feedback Request', body: 'Please provide feedback to help us improve.' },
  { id: 36, folder: 'sent', subject: 'Follow-up', body: 'Following up on our recent conversation.' },
  { id: 37, folder: 'sent', subject: 'Project Update', body: 'Latest project update attached.' },
  { id: 38, folder: 'sent', subject: 'Promotion', body: 'Check out our latest promotion.' },
  { id: 39, folder: 'sent', subject: 'Thank You', body: 'Thank you for your cooperation.' },
  { id: 40, folder: 'sent', subject: 'Invitation', body: 'Invitation to our event next week.' },
  { id: 41, folder: 'draft', subject: 'Feedback Request', body: 'We appreciate your feedback.' },
  { id: 42, folder: 'draft', subject: 'Follow-up', body: 'Just following up on our previous communication.' },
  { id: 43, folder: 'draft', subject: 'Project Update', body: 'Latest project update enclosed.' },
  { id: 44, folder: 'draft', subject: 'Promotion', body: 'Exclusive promotion for our valued customers.' },
  { id: 45, folder: 'draft', subject: 'Thank You', body: 'Thank you for your continued support.' },
  { id: 46, folder: 'draft', subject: 'Invitation', body: 'Invitation to our special event.' },
  { id: 47, folder: 'draft', subject: 'Feedback Request', body: 'Your feedback is important to us.' },
  { id: 48, folder: 'draft', subject: 'Follow-up', body: 'Following up on our previous conversation.' },
  { id: 49, folder: 'draft', subject: 'Project Update', body: 'Project update attached.' },
  { id: 50, folder: 'draft', subject: 'Promotion', body: 'Special promotion inside.' },
  { id: 51, folder: 'draft', subject: 'Thank You', body: 'Thank you for your cooperation.' },
  { id: 52, folder: 'draft', subject: 'Invitation', body: 'You\'re invited to our event.' },
  { id: 53, folder: 'draft', subject: 'Feedback Request', body: 'We appreciate your feedback.' },
  { id: 54, folder: 'draft', subject: 'Follow-up', body: 'Just following up on our previous communication.' },
  { id: 55, folder: 'draft', subject: 'Project Update', body: 'Latest project update enclosed.' },
  { id: 56, folder: 'draft', subject: 'Promotion', body: 'Check out our latest promotion.' },
  { id: 57, folder: 'draft', subject: 'Thank You', body: 'Thank you for your cooperation.' },
  { id: 58, folder: 'draft', subject: 'Invitation', body: 'Invitation to our event next week.' },
  { id: 59, folder: 'draft', subject: 'Feedback Request', body: 'We appreciate your feedback.' },
  { id: 60, folder: 'draft', subject: 'Follow-up', body: 'Just following up on our previous communication.' },
  { id: 61, folder: 'deleted', subject: 'Project Update', body: 'Latest project update enclosed.' },
  { id: 62, folder: 'deleted', subject: 'Promotion', body: 'Special promotion inside.' },
  { id: 63, folder: 'deleted', subject: 'Thank You', body: 'Thank you for your cooperation.' },
  { id: 64, folder: 'deleted', subject: 'Invitation', body: 'You\'re invited to our event.' },
  { id: 65, folder: 'deleted', subject: 'Feedback Request', body: 'We appreciate your feedback.' },
  { id: 66, folder: 'deleted', subject: 'Follow-up', body: 'Just following up on our previous communication.' },
  { id: 67, folder: 'deleted', subject: 'Project Update', body: 'Latest project update enclosed.' },
  { id: 68, folder: 'deleted', subject: 'Promotion', body: 'Check out our latest promotion.' },
  { id: 69, folder: 'deleted', subject: 'Thank You', body: 'Thank you for your cooperation.' },
  { id: 70, folder: 'deleted', subject: 'Invitation', body: 'Invitation to our event next week.' },
  { id: 71, folder: 'deleted', subject: 'Feedback Request', body: 'We appreciate your feedback.' },
  { id: 72, folder: 'deleted', subject: 'Follow-up', body: 'Just following up on our previous communication.' },
  { id: 73, folder: 'deleted', subject: 'Project Update', body: 'Latest project update enclosed.' },
  { id: 74, folder: 'deleted', subject: 'Promotion', body: 'Special promotion inside.' },
  { id: 75, folder: 'deleted', subject: 'Thank You', body: 'Thank you for your cooperation.' },
  { id: 76, folder: 'deleted', subject: 'Invitation', body: 'You\'re invited to our event.' },
  { id: 77, folder: 'deleted', subject: 'Feedback Request', body: 'We appreciate your feedback.' },
  { id: 78, folder: 'deleted', subject: 'Follow-up', body: 'Just following up on our previous communication.' },
  { id: 79, folder: 'deleted', subject: 'Project Update', body: 'Latest project update enclosed.' },
  { id: 80, folder: 'deleted', subject: 'Promotion', body: 'Check out our latest promotion.' },
  { id: 81, folder: 'deleted', subject: 'Thank You', body: 'Thank you for your cooperation.' },
  { id: 82, folder: 'deleted', subject: 'Invitation', body: 'Invitation to our event next week.' },
  { id: 83, folder: 'deleted', subject: 'Feedback Request', body: 'We appreciate your feedback.' },
  { id: 84, folder: 'deleted', subject: 'Follow-up', body: 'Just following up on our previous communication.' },
  { id: 85, folder: 'deleted', subject: 'Project Update', body: 'Latest project update enclosed.' },
  { id: 86, folder: 'deleted', subject: 'Promotion', body: 'Special promotion inside.' },
  { id: 87, folder: 'deleted', subject: 'Thank You', body: 'Thank you for your cooperation.' },
  { id: 88, folder: 'deleted', subject: 'Invitation', body: 'You\'re invited to our event.' },
  { id: 89, folder: 'deleted', subject: 'Feedback Request', body: 'We appreciate your feedback.' },
  { id: 90, folder: 'deleted', subject: 'Follow-up', body: 'Just following up on our previous communication.' },
];

const FOLDERS = ['inbox', 'sent', 'draft', 'deleted'];

const App = () => {
  const [selectedFolder, setSelectedFolder] = useState('inbox');
  const [selectedEmail, setSelectedEmail] = useState(null);

  const selectFolder = (folder) => {
    setSelectedFolder(folder);
    setSelectedEmail(null); // Reset selected email when switching folders
  };

  const selectEmail = (email) => {
    setSelectedEmail(email);
  };

  return (
    <div className="App">
      <div className="folders">
        {FOLDERS.map(folder => (
          <button key={folder} className={selectedFolder === folder ? 'active' : ''} onClick={() => selectFolder(folder)}>{folder}</button>
        ))}
      </div>
      <div className="email-list">
        <h2>{selectedFolder.toUpperCase()} ({emails.filter(email => email.folder === selectedFolder).length})</h2>
        <ul>
          {emails.filter(email => email.folder === selectedFolder).map(email => (
            <li key={email.id} onClick={() => selectEmail(email)}>{email.subject}</li>
          ))}
        </ul>
      </div>
      <div className="email-details">
        <h2>Email Details</h2>
        {selectedEmail && (
          <div>
            <h3>Subject: {selectedEmail.subject}</h3>
            <p>{selectedEmail.body}</p>
            <div className="email-actions">
              <button className="action-button">Reply</button>
              <button className="action-button">Forward</button>
              <button className="action-button">Delete</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
