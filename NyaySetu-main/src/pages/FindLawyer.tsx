import React, { useState } from 'react';

interface Lawyer {
  name: string;
  specialty: string;
  rating: string;
  experience: string;
  fees: string;
  image: string;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FindLawyer: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sample lawyer data
  const criminalLawyers: Lawyer[] = [
    {
      name: 'Adv. Rajesh Kumar',
      specialty: 'Criminal Law Specialist',
      rating: '⭐⭐⭐⭐⭐ (5.0)',
      experience: '12 Years',
      fees: '₹5,000',
      image: 'https://st2.depositphotos.com/4431055/11854/i/950/depositphotos_118543600-stock-photo-handsome-caucasian-lawyer.jpg',
    },
    {
      name: 'Adv. Neha Singh',
      specialty: 'Criminal Defense Attorney',
      rating: '⭐⭐⭐⭐ (4.8)',
      experience: '8 Years',
      fees: '₹4,500',
      image: 'https://st2.depositphotos.com/4431055/11854/i/950/depositphotos_118543600-stock-photo-handsome-caucasian-lawyer.jpg',
    },
  ];

  const familyLawyers: Lawyer[] = [
    {
      name: 'Adv. Priya Sharma',
      specialty: 'Divorce & Custody Expert',
      rating: '⭐⭐⭐⭐ (4.7)',
      experience: '10 Years',
      fees: '₹4,000',
      image: 'https://st2.depositphotos.com/4431055/11854/i/950/depositphotos_118543600-stock-photo-handsome-caucasian-lawyer.jpg',
    },
    {
      name: 'Adv. Rakesh Verma',
      specialty: 'Marriage & Adoption Lawyer',
      rating: '⭐⭐⭐⭐⭐ (5.0)',
      experience: '15 Years',
      fees: '₹5,500',
      image: 'https://st2.depositphotos.com/4431055/11854/i/950/depositphotos_118543600-stock-photo-handsome-caucasian-lawyer.jpg',
    },
  ];

  const corporateLawyers: Lawyer[] = [
    {
      name: 'Adv. Sameer Gupta',
      specialty: 'Corporate & Business Law',
      rating: '⭐⭐⭐⭐⭐ (5.0)',
      experience: '15 Years',
      fees: '₹7,000',
      image: 'https://st2.depositphotos.com/4431055/11854/i/950/depositphotos_118543600-stock-photo-handsome-caucasian-lawyer.jpg',
    },
    {
      name: 'Adv. Manish Tiwari',
      specialty: 'Startup & IP Law Expert',
      rating: '⭐⭐⭐⭐ (4.6)',
      experience: '11 Years',
      fees: '₹6,000',
      image: 'https://st2.depositphotos.com/4431055/11854/i/950/depositphotos_118543600-stock-photo-handsome-caucasian-lawyer.jpg',
    },
  ];

  const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      comments: '',
    });

    const handleInputChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      const { id, value } = e.target;
      setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const validateAndSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (!formData.name.trim() || !formData.email.trim() || !formData.comments.trim()) {
        alert('Please fill out all fields before submitting.');
        return;
      }
      alert('Your appointment has been booked!');
      setFormData({ name: '', email: '', comments: '' });
      onClose();
    };

    if (!isOpen) return null;

    return (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose}>
            ×
          </span>
          <h2>Book an Appointment</h2>
          <form onSubmit={validateAndSubmit}>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleInputChange}
              maxLength={100}
              required
            />
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              maxLength={100}
              required
            />
            <textarea
              id="comments"
              placeholder="Enter your comments"
              value={formData.comments}
              onChange={handleInputChange}
              rows={5}
              maxLength={500}
              style={{ resize: 'vertical' }}
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  };

  const LawyerCard: React.FC<Lawyer> = ({ name, specialty, rating, experience, fees, image }) => (
    <div className="lawyer-card">
      <img src={image} alt="Lawyer" />
      <h3>{name}</h3>
      <p>{specialty}</p>
      <p className="rating">{rating}</p>
      <p>Experience: {experience} | Fees: {fees}</p>
      <button className="book-btn" onClick={() => setIsModalOpen(true)}>
        Book Appointment
      </button>
    </div>
  );

  return (
    <div className="container">
      <div className="section">
        <div className="section-title">Criminal Law Specialists</div>
        <div className="lawyer-container">
          {criminalLawyers.map((lawyer, index) => (
            <LawyerCard key={index} {...lawyer} />
          ))}
        </div>
      </div>

      <div className="section">
        <div className="section-title">Family Law Specialists</div>
        <div className="lawyer-container">
          {familyLawyers.map((lawyer, index) => (
            <LawyerCard key={index} {...lawyer} />
          ))}
        </div>
      </div>

      <div className="section">
        <div className="section-title">Corporate Law Specialists</div>
        <div className="lawyer-container">
          {corporateLawyers.map((lawyer, index) => (
            <LawyerCard key={index} {...lawyer} />
          ))}
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

// Updated styles with centered content and media queries
const styles = `
  body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background: #f1f1f1;
  }
  .container {
    font-family: 'Arial', sans-serif;
    margin: 0 auto;
    padding: 0;
    background: #f1f1f1;
    display: flex;
    flex-direction: column;
    align-items: center; /* Center container content horizontally */
  }
  .section {
    padding: 40px 60px;
    background: white;
    margin: 30px auto;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
    max-width: 1200px;
    width: 100%;
    text-align: center; /* Center text within section */
  }
  .section-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 25px;
    text-align: center;
    color: #1f3c88;
  }
  .lawyer-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center; /* Center lawyer cards horizontally */
    gap: 20px;
  }
  .lawyer-card {
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: calc(33% - 20px);
    text-align: center; /* Center content within card */
    transition: transform 0.3s ease-in-out;
  }
  .lawyer-card:hover {
    transform: scale(1.05);
  }
  .lawyer-card img {
    width: 100%;
    height: 200px;
    border-radius: 10px;
    object-fit: cover;
    display: block;
    margin: 0 auto; /* Center image within card */
  }
  .lawyer-card h3 {
    margin: 10px 0;
    font-size: 20px;
    color: #333;
  }
  .lawyer-card p {
    color: #666;
    font-size: 16px;
    margin: 5px 0;
  }
  .rating {
    color: #f4b400;
    font-size: 18px;
  }
  .book-btn {
    background: #1f3c88;
    color: white;
    border: none;
    padding: 12px;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
    transition: background 0.3s;
  }
  .book-btn:hover {
    background: #7f1fa8;
  }
  .modal {
    display: flex;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center; /* Center modal vertically and horizontally */
  }
  .modal-content {
    background: white;
    padding: 40px;
    border-radius: 10px;
    width: 350px;
    text-align: center; /* Center content within modal */
  }
  .close {
    color: red;
    float: right;
    font-size: 28px;
    cursor: pointer;
  }
  .modal-content input,
  .modal-content textarea {
    width: 100%;
    padding: 8px;
    margin: 10px auto; /* Center inputs and textarea */
    border: 1px solid #ccc;
    border-radius: 5px;
    display: block;
  }
  .modal-content textarea {
    min-height: 100px;
    font-family: 'Arial', sans-serif;
    font-size: 16px;
  }
  .modal-content button {
    background: #1f3c88;
    color: white;
    padding: 10px;
    width: 100%;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 0 auto; /* Center button */
  }

  /* Media Queries */
  @media (max-width: 1024px) {
    .section {
      padding: 30px 40px;
      max-width: 90%;
    }
    .lawyer-card {
      width: calc(50% - 20px); /* 2 cards per row on tablets */
    }
    .modal-content {
      width: 80%;
      padding: 30px;
    }
  }

  @media (max-width: 768px) {
    .section {
      padding: 20px;
      margin: 20px auto;
    }
    .section-title {
      font-size: 20px;
    }
    .lawyer-container {
      justify-content: center;
    }
    .lawyer-card {
      width: calc(100% - 20px); /* 1 card per row on mobile */
    }
    .lawyer-card img {
      height: 150px;
    }
    .modal-content {
      width: 90%;
      padding: 20px;
    }
    .modal-content h2 {
      font-size: 18px;
    }
    .modal-content input,
    .modal-content textarea {
      font-size: 14px;
    }
    .modal-content button {
      font-size: 14px;
      padding: 8px;
    }
    .close {
      font-size: 24px;
    }
  }

  @media (max-width: 480px) {
    .section {
      padding: 15px;
      margin: 10px auto;
    }
    .section-title {
      font-size: 18px;
    }
    .lawyer-card h3 {
      font-size: 18px;
    }
    .lawyer-card p {
      font-size: 14px;
    }
    .rating {
      font-size: 16px;
    }
    .book-btn {
      font-size: 14px;
      padding: 10px;
    }
    .modal-content {
      width: 95%;
      padding: 15px;
    }
  }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);

export default FindLawyer;