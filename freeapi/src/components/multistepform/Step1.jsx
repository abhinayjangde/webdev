function Step1({ formData, handleChange, nextStep, errors }) {
  return (
    <div>
      <h2>Step 1: User Info</h2>
      <label>Name:</label>
      <input name="name" value={formData.name} onChange={handleChange} />
      <div style={{ color: 'red' }}>{errors.name}</div>

      <label>Email:</label>
      <input name="email" value={formData.email} onChange={handleChange} />
      <div style={{ color: 'red' }}>{errors.email}</div>

      <button onClick={nextStep}>Next</button>
    </div>
  );
}

export default Step1;
