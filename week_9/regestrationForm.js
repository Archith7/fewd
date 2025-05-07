import { useState } from 'react';

const RegistrationForm = () => {
  // Form state
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    phoneNumber: ''
  });

  // Errors state
  const [errors, setErrors] = useState({});

  // Form submission state
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Skills state
  const [skills, setSkills] = useState({
    React: false,
    Node: false,
    Java: false,
    Python: false
  });

  // Languages state (array of selected languages)
  const [languages, setLanguages] = useState([]);

  // Multiple phone numbers state
  const [phoneNumbers, setPhoneNumbers] = useState(['']);

  // Selected skills and languages for display
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  // Available languages for dropdown
  const availableLanguages = [
    'English', 'Hindi', 'Telugu', 'French', 'Spanish'
  ];

  // Handle input change for registration form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle checkbox change for skills
  const handleSkillChange = (e) => {
    const { name, checked } = e.target;
    setSkills({
      ...skills,
      [name]: checked
    });
  };

  // Handle multiple select for languages
  const handleLanguageChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions).map(option => option.value);
    setLanguages(selectedOptions);
  };

  // Handle phone number input change
  const handlePhoneNumberChange = (index, value) => {
    const updatedPhoneNumbers = [...phoneNumbers];
    updatedPhoneNumbers[index] = value;
    setPhoneNumbers(updatedPhoneNumbers);
  };

  // Add new phone number field
  const addPhoneNumberField = () => {
    setPhoneNumbers([...phoneNumbers, '']);
  };

  // Remove phone number field
  const removePhoneNumberField = (index) => {
    if (phoneNumbers.length > 1) {
      const updatedPhoneNumbers = phoneNumbers.filter((_, i) => i !== index);
      setPhoneNumbers(updatedPhoneNumbers);
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    // Username validation
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone number validation
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Phone number must be 10 digits';
    }

    // Additional phone numbers validation
    const phoneNumberErrors = [];
    let hasPhoneErrors = false;
    phoneNumbers.forEach((phone, index) => {
      if (phone && !/^\d{10}$/.test(phone)) {
        phoneNumberErrors[index] = 'Phone number must be 10 digits';
        hasPhoneErrors = true;
      }
    });

    if (hasPhoneErrors) {
      newErrors.phoneNumbers = phoneNumberErrors;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      // Process selected skills
      const selectedSkillsArray = Object.entries(skills)
        .filter(([_, isChecked]) => isChecked)
        .map(([skill]) => skill);
      
      setSelectedSkills(selectedSkillsArray);
      setSelectedLanguages(languages);
      setIsSubmitted(true);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-6">Registration Form</h2>
      
      <div className="space-y-4">
        {/* Username field */}
        <div>
          <label className="block text-sm font-medium mb-1">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
          />
          {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
        </div>

        {/* Password field */}
        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>

        {/* Email field */}
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Primary phone number field */}
        <div>
          <label className="block text-sm font-medium mb-1">Primary Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            placeholder="10 digits"
            className="w-full px-3 py-2 border rounded"
          />
          {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
        </div>

        {/* Skills checkboxes */}
        <div>
          <label className="block text-sm font-medium mb-2">Skills</label>
          <div className="flex flex-wrap gap-4">
            {Object.keys(skills).map((skill) => (
              <div key={skill} className="flex items-center">
                <input
                  type="checkbox"
                  id={skill}
                  name={skill}
                  checked={skills[skill]}
                  onChange={handleSkillChange}
                  className="mr-2"
                />
                <label htmlFor={skill}>{skill}</label>
              </div>
            ))}
          </div>
        </div>

        {/* Languages multi-select dropdown */}
        <div>
          <label className="block text-sm font-medium mb-1">Preferred Languages</label>
          <select
            multiple
            value={languages}
            onChange={handleLanguageChange}
            className="w-full px-3 py-2 border rounded"
            size={5}
          >
            {availableLanguages.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
          <p className="text-sm text-gray-500 mt-1">Hold Ctrl/Cmd to select multiple options</p>
        </div>

        {/* Dynamic phone number fields */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="block text-sm font-medium">Additional Phone Numbers</label>
            <button 
              type="button" 
              onClick={addPhoneNumberField}
              className="px-2 py-1 bg-blue-500 text-white rounded text-sm"
            >
              Add Phone
            </button>
          </div>
          
          {phoneNumbers.map((phone, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <input
                type="tel"
                value={phone}
                onChange={(e) => handlePhoneNumberChange(index, e.target.value)}
                placeholder="10 digits"
                className="flex-grow px-3 py-2 border rounded"
              />
              <button
                type="button"
                onClick={() => removePhoneNumberField(index)}
                className="px-2 py-1 bg-red-500 text-white rounded"
                disabled={phoneNumbers.length === 1}
              >
                Remove
              </button>
            </div>
          ))}
          {errors.phoneNumbers && errors.phoneNumbers.map((error, index) => (
            error && <p key={index} className="text-red-500 text-sm mt-1">Phone #{index + 1}: {error}</p>
          ))}
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Register
        </button>
      </div>

      {/* Display selected skills and languages */}
      {isSubmitted && (
        <div className="mt-8 p-4 border rounded bg-gray-50">
          <h3 className="text-lg font-semibold mb-2">Registration Summary</h3>
          
          <div className="mb-4">
            <h4 className="font-medium">Selected Skills:</h4>
            {selectedSkills.length > 0 ? (
              <ul className="list-disc pl-5">
                {selectedSkills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No skills selected</p>
            )}
          </div>
          
          <div>
            <h4 className="font-medium">Preferred Languages:</h4>
            {selectedLanguages.length > 0 ? (
              <ul className="list-disc pl-5">
                {selectedLanguages.map((lang) => (
                  <li key={lang}>{lang}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No languages selected</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;
