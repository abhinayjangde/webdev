function Step2({ formData, handleChange, nextStep, prevStep, errors }) {
  return (
    <div>
      <h2>Step 2: Address Info</h2>
      <label>Address:</label>
      <input name="address" value={formData.address} onChange={handleChange} />
      <div style={{ color: 'red' }}>{errors.address}</div>

      <label>City:</label>
      <input name="city" value={formData.city} onChange={handleChange} />
      <div style={{ color: 'red' }}>{errors.city}</div>

      <button onClick={prevStep}>Back</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );
}

export default Step2;
