import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

function Watermarking() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{
          maxWidth: '1000px',
          margin: '40px auto',
          padding: '0 20px',
          display: 'flex',
          flexDirection: 'column',
        }}>
          <h1 style={{
            fontSize: 'calc(28px + 2vw)',
            marginBottom: '20px',
            background: 'linear-gradient(#86e1ff, #39aaca)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textAlign: 'center'
          }}>
            Watermarking Large Language Models
          </h1>

          <blockquote style={{
            margin: '20px 0 10px',
            paddingLeft: '16px',
            borderLeft: '4px solid rgba(134,225,255,0.5)',
            color: 'rgba(255,255,255,0.9)',
            fontStyle: 'italic'
          }}>
            “Several of them would have protested if they could have found the right arguments.”
          </blockquote>
          <p style={{ marginBottom: '28px', opacity: 0.9, textAlign: 'left' }}>
            — Boxer, <span style={{ fontStyle: 'italic' }}>Animal Farm</span>
          </p>

          <p style={{ textAlign: 'center', marginTop: '10px' }}>
            <a href="/llm-watermark.pdf" target="_blank" rel="noreferrer" style={{ color: '#39aaca' }}>
              Open PDF in new tab
            </a>
          </p>
          
          <div style={{
            marginTop: '20px',
            width: '100%',
            height: '80vh',
            overflow: 'auto',
            border: '1px solid rgba(134,225,255,0.3)',
            borderRadius: '8px'
          }}>
            <object
              data="/llm-watermark.pdf"
              type="application/pdf"
              width="100%"
              height="100%"
              aria-label="Watermarking Large Language Models PDF"
            >
              <embed
                src="/llm-watermark.pdf"
                type="application/pdf"
                width="100%"
                height="100%"
              />
              <p style={{ padding: '10px', textAlign: 'center' }}>
                Unable to display PDF.{' '}
                <a href="/llm-watermark.pdf" target="_blank" rel="noreferrer" style={{ color: '#39aaca' }}>
                  Open the PDF
                </a>{' '}
                or download it to view.
              </p>
            </object>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Watermarking;
