import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

function Protocols() {
  return (
    <div
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      <Navbar />
      <div style={{ flex: 1 }}>
        <div
          className="protocol-page"
          style={{
            maxWidth: '900px',
            margin: '40px auto',
            padding: '0 20px',
            lineHeight: '1.8',
          }}
        >
          <h1
            style={{
              fontSize: '40px',
              marginBottom: '20px',
              background: 'linear-gradient(#86e1ff, #39aaca)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            A Comparision of API Communication Protocols (REST v.s. GraphQL v.s.
            gRPC)
          </h1>
          <blockquote
            style={{
              margin: '20px 0 10px',
              paddingLeft: '16px',
              borderLeft: '4px solid rgba(134,225,255,0.5)',
              color: 'rgba(255,255,255,0.9)',
            }}
          >
            <em>
              “When we strive to become better than we are, everything around us
              becomes better, too.”
            </em>
          </blockquote>
          <p style={{ marginBottom: '28px', opacity: 0.9 }}>
            <em>
              — Paulo Coelho,{' '}
              <span style={{ fontStyle: 'italic' }}>The Alchemist</span>
            </em>
          </p>
          <p style={{ fontSize: '18px', marginBottom: '16px' }}>
            If you’re a software developer, then I can bet you’ve heard of{' '}
            <span
              style={{
                fontWeight: 800,
                background: 'linear-gradient(#86e1ff, #39aaca)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Representational State Transfer (REST)
            </span>
            . If not, you’re probably a COBOL developer who decided to pursue a
            life of a hermit and live under a rock since the 2000s.
          </p>
          <p style={{ fontSize: '18px', marginBottom: '16px' }}>
            There’s a reason why REST has become so popular and a staple choice
            for API development. Its intuitive endpoint names explicitly state
            the entities to perform CRUD operations on, allowing for great
            readability. REST communicates using HTTP requests, which are
            efficient and stateless—every request is self-contained and carries
            only the information needed for processing. Not to mention the
            performance boost, since responses can be cached server-side. What’s
            not to love?
          </p>
          <p style={{ fontSize: '18px', marginBottom: '16px' }}>
            Well, Facebook had something to say about that when they pioneered a
            new, highly adopted query language:{' '}
            <span
              style={{
                fontWeight: 800,
                background: 'linear-gradient(#86e1ff, #39aaca)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              GraphQL
            </span>
            . Traditional REST APIs often led to receiving more data than needed
            (over-fetching) or required multiple requests for data
            (under-fetching), which strained mobile networks—especially as these
            networks are more unreliable and slower than wired connections or
            traditional WiFi. Furthermore, having different client applications
            such as iOS, Android, and web often required different subsets of
            data from the same services.
          </p>
          <p style={{ fontSize: '18px', marginBottom: '16px' }}>
            Introducing GraphQL—the one-stop interface to query data from
            multiple services. It’s a strongly typed, static query language that
            gives clients the flexibility to declaratively specify their data
            requirements, with the server responding in the exact data shape
            requested. Say goodbye to over-fetching and under-fetching, and say
            hello to a new world of efficiency. Quite the tempting tool for your
            API gateway!
          </p>
          <p style={{ fontSize: '18px', marginBottom: '16px' }}>
            That said, GraphQL isn’t perfect. One limitation is that its
            specification does not natively define a scalar type for binary
            data. I faced this blocker while migrating a feature from REST to
            GraphQL as part of a roadmap to deprecate a bloated API gateway.
            This feature required a response containing a PDF file, which meant
            I had to base64 encode and decode the data on the backend and
            frontend, respectively. This encoding increased the network load of
            responses by 33%, which really irked my inner soul. Alas, I decided
            to keep this feature behind the REST API gateway and resigned myself
            to dreaming of the day when GraphQL supports binary data (and easier
            caching implementation, since GraphQL also breaks immediate proxy
            caching).
          </p>
          <p style={{ fontSize: '18px', marginBottom: '16px' }}>
            Now equipped with this knowledge to better decide how to build your
            API, you might still be leaning toward REST. But before you commit,
            Google has something say:{' '}
            <span
              style={{
                fontWeight: 800,
                background: 'linear-gradient(#86e1ff, #39aaca)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              gRPC
            </span>
            . The big tech behemoth’s answer to modern APIs emerged from Remote
            Procedure Call (RPC). We’ll pause this article for now, as I need to
            get back to building, but when my time frees up, I’ll update this
            post with a brief summary and comparison of gRPC with the other API
            communication protocols mentioned.
          </p>
          <p style={{ fontSize: '18px', marginBottom: '16px' }}>
            To conclude, whatever tooling you decide to build your API with,
            remember this: as a great engineer, research and understand all the
            options available to you. Weigh the benefits and drawbacks of each
            choice while considering the overall architecture of your service.
            I’ve seen countless poor design decisions come back to bite back
            harshly down the road. Choose wisely, my friend, and I’ll see you
            again on our next learning journey!
          </p>
        </div>
        <div style={{ height: '80px' }} />
      </div>
      <Footer />
    </div>
  );
}

export default Protocols;
