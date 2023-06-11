import React, { useEffect, useState } from 'react';
import Head from './Head';
import Foot from './Foot';
import axios from 'axios';
import jsPDF from 'jspdf';
import '../compontnts/css/YourName.css';
const YourName = () => {
  const [details, setDetails] = useState([]);
  const [editingIndex, setEditingIndex] = useState(-1);
  const [editedDetails, setEditedDetails] = useState({});


  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    console.log(storedUsername)
    // Fetch details from the backend API
    axios.get(`http://localhost:8080/book/${storedUsername}`) // Replace 'your-username' with the actual username
      .then(response => {
        setDetails(response.data);
      })
      .catch(error => {
        console.error('Error fetching details:', error);
      });
  }, []);

  const handleEdit = (index) => {
    // Set the index of the row being edited and initialize the edited details
    setEditingIndex(index);
    setEditedDetails(details[index]);
  };

  const handleSave = (index) => {
    // Perform the save logic here
    // In this example, we will update all the details of the detail
    const updatedDetails = [...details];
    updatedDetails[index] = editedDetails;

    // Make an API request to update the detail in the backend
    axios.put(`http://localhost:8080/book/${details[index].id}`, updatedDetails[index])
      .then(response => {
        // Update the details state with the updated details
        setDetails(updatedDetails);
        setEditingIndex(-1);
        setEditedDetails({});
      })
      .catch(error => {
        console.error('Error updating detail:', error);
      });
  };

  const handleCancel = () => {
    // Cancel the editing mode and reset the edited details
    setEditingIndex(-1);
    setEditedDetails({});
  };
  
//  const handleCancelbooking = (index) => {
//     // Handle cancel button click
//     // You can perform the cancelbooking logic here
//     console.log('cancel button clicked for index:', index);
//   };
const handleCancelbooking = (index) => {
  // Get the booking ID of the detail being canceled
  const bookingId = details[index].id;

  // Make an API request to cancel the booking
  axios.delete(`http://localhost:8080/book/${bookingId}`)
    .then(response => {
      // Remove the canceled booking from the details state
      const updatedDetails = [...details];
      updatedDetails.splice(index, 1);
      setDetails(updatedDetails);
      
    })
    .catch(error => {
      console.error('Error canceling booking:', error);
    });
};


  const handleDownload = (detail) => {
    const doc = new jsPDF();
  
    // Add row data to the PDF
    doc.text(`Name: ${detail.name}`, 10, 10);
    doc.text(`Email: ${detail.email}`, 10, 20);
    doc.text(`Country: ${detail.country}`, 10, 30);
    doc.text(`Phone Number: ${detail.phoneNumber}`, 10, 40);
    doc.text(`Adults: ${detail.adults}`, 10, 50);
    doc.text(`Children: ${detail.children}`, 10, 60);
    doc.text(`Check-in Date: ${detail.checkInDate}`, 10, 70);
    doc.text(`Check-out Date: ${detail.checkOutDate}`, 10, 80);
    doc.text(`Requirements: ${detail.requirements}`, 10, 90);
  
    // Save the PDF
    doc.save('table.pdf');
  };
  
  const handleInputChange = (e) => {
    // Handle input changes in the edited details
    const { name, value } = e.target;
    setEditedDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className='ybo'>
      <Head />

      <div className="conts">
        <main>
          <div>
            <h2>Your Booking</h2>
          </div>
          <div>
            <table className='cos-table' id="myTable">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Country</th>
                  <th>Phone Number</th>
                  <th>Adults</th>
                  <th>Children</th>
                  <th>Check-in Date</th>
                  <th>Check-out Date</th>
                  <th>Requirements</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {details.map((detail, index) => (
                  <tr key={index}>
                    <td>
                      {editingIndex === index ? (
                        <input
                          type="text"
                          name="name"
                          value={editedDetails.name || ''}
                          onChange={handleInputChange}
                        />
                      ) : (
                        detail.name
                      )}
                    </td>
                    <td>
                      {editingIndex === index ? (
                        <input
                          type="email"
                          name="email"
                          value={editedDetails.email || ''}
                          onChange={handleInputChange}
                        />
                      ) : (
                        detail.email
                      )}
                    </td>
                    <td>
                      {editingIndex === index ? (
                        <input
                          type="text"
                          name="country"
                          value={editedDetails.country || ''}
                          onChange={handleInputChange}
                        />
                      ) : (
                        detail.country
                      )}
                    </td>
                    <td>
                      {editingIndex === index ? (
                        <input
                          type="tel"
                          name="phoneNumber"
                          value={editedDetails.phoneNumber || ''}
                          onChange={handleInputChange}
                        />
                      ) : (
                        detail.phoneNumber
                      )}
                    </td>
                    <td>
                      {editingIndex === index ? (
                        <input
                          type="number"
                          name="adults"
                          value={editedDetails.adults || ''}
                          onChange={handleInputChange}
                        />
                      ) : (
                        detail.adults
                      )}
                    </td>
                    <td>
                      {editingIndex === index ? (
                        <input
                          type="number"
                          name="children"
                          value={editedDetails.children || ''}
                          onChange={handleInputChange}
                        />
                      ) : (
                        detail.children
                      )}
                    </td>
                    <td>
                      {editingIndex === index ? (
                        <input
                          type="date"
                          name="checkInDate"
                          value={editedDetails.checkInDate || ''}
                          onChange={handleInputChange}
                        />
                      ) : (
                        detail.checkInDate
                      )}
                    </td>
                    <td>
                      {editingIndex === index ? (
                        <input
                          type="date"
                          name="checkOutDate"
                          value={editedDetails.checkOutDate || ''}
                          onChange={handleInputChange}
                        />
                      ) : (
                        detail.checkOutDate
                      )}
                    </td>
                    <td>
                      {editingIndex === index ? (
                        <textarea
                          name="requirements"
                          value={editedDetails.requirements || ''}
                          onChange={handleInputChange}
                          rows={4}
                        />
                      ) : (
                        detail.requirements
                      )}
                    </td>
                    <td>
                      {editingIndex === index ? (
                        <>
                          <button onClick={() => handleSave(index)}>Save</button>
                          <button onClick={handleCancel}>Cancel</button>
                        </>
                      ) : (
                        <>
                          <button onClick={() => handleEdit(index)}>Edit</button>
                          <button onClick={() => handleCancelbooking(index)}>Cancel booking</button>

                          <button onClick={() => handleDownload(detail)}>Download</button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
      <Foot />
    </div>
  );
};

export default YourName;
