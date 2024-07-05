import React from 'react';

const Watermark = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        padding: '20px',
        boxSizing: 'border-box',
      }}
    >
      <h1>Large Language Model Watermark Expansion</h1>
      <p>
        Unpublished exploration on watermarking LLMs. Thought it would be an
        interesting share!
      </p>
      <br></br>
      <div
        style={{
          width: '100%',
          maxWidth: '1200px',
          overflow: 'auto',
        }}
      >
        <iframe
          src="/llm-watermark.pdf"
          title="LLM Expansion PDF"
          style={{
            border: 'none',
            width: '100%',
            height: '800px',
          }}
          type="application/pdf"
        ></iframe>
      </div>
    </div>
  );
};

export default Watermark;
