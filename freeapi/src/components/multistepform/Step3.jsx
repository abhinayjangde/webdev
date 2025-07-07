function Step3({ formData, prevStep }) {
  const handleSubmit = () => {
    alert("Form submitted successfully!\n" + JSON.stringify(formData, null, 2));
  };

  return (
    <div>
      <h2>Step 3: Confirmation</h2>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
      <button onClick={prevStep}>Back</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Step3;
