import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

function Watermarking() {
  return (
    <div style={{ minHeight: '1000px', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <div style={{ minHeight: '1000px', display: 'flex', flexDirection: 'column' }}>
        <div style={{
          maxWidth: '1000px',
          maxHeight: '2000px',
          margin: '40px auto',
          padding: '0 20px'
        }}>
          <h1 style={{
            fontSize: '40px',
            marginBottom: '20px',
            background: 'linear-gradient(#86e1ff, #39aaca)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>Watermarking Large Language Models</h1>
          <blockquote style={{
            margin: '20px 0 10px',
            paddingLeft: '16px',
            borderLeft: '4px solid rgba(134,225,255,0.5)',
            color: 'rgba(255,255,255,0.9)'
          }}>
        <em>“Several of them would have protested if they could have found the right arguments.”</em>
          </blockquote>
          <p style={{ marginBottom: '28px', opacity: 0.9 }}>
            <em>— Boxer, <span style={{ fontStyle: 'italic' }}>Animal Farm</span></em>
          </p>
          <div style={{ marginTop: '20px'}}>
            <object
              data="/llm-watermark.pdf"
               type="application/pdf"
              width="100%"
              height="1000px"
              aria-label="Watermarking Large Language Models PDF"
            >
              <embed
                src="llm-watermark.pdf"
                type="application/pdf"
                width="100%"
                height="100%"
              />
              <p>
                Unable to display PDF. <a className="anchor-link" href="llm-watermark.pdf" target="_blank" rel="noreferrer">Open the PDF</a> or download it to view.
              </p>
            </object>
          </div>
        </div>
      </div>
      <div style={{ height: '80px' }} />
      <Footer />
    </div>
  );
}

export default Watermarking; 