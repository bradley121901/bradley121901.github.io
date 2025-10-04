import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

function Monolith() {
  return (
    <div
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      <Navbar />
      <div style={{ flex: 1 }}>
        <div
          className="monolith-page"
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
            From Microservices Back to Monoliths
          </h1>

          <blockquote
            style={{
              margin: '20px 0 10px',
              paddingLeft: '16px',
              borderLeft: '4px solid rgba(134,225,255,0.5)',
              color: 'rgba(255,255,255,0.9)',
            }}
          >
            <em>“Can’t repeat the past?…Why of course you can!”</em>
          </blockquote>
          <p style={{ marginBottom: '28px', opacity: 0.9 }}>
            <em>
              — Nick Carraway,{' '}
              <span style={{ fontStyle: 'italic' }}>The Great Gatsby</span>
            </em>
          </p>

          <p style={{ fontSize: '18px', marginBottom: '16px' }}>
            In the 2010s, tech giants like Google, Amazon, and Netflix rapidly
            embraced microservices, moving away from their original monolithic
            designs to enable faster feature rollouts.
          </p>
          <p style={{ fontSize: '18px', marginBottom: '16px' }}>
            Coming back a decade later, the same companies who adopted and
            pioneered micro service architecture have been migrating back to the
            good ol' monolithic architecture.
          </p>
          <p style={{ fontSize: '18px', marginBottom: '16px' }}>
            This may not be a philosophy class but it is important to ask why?
            Why is it that the giant tech behemoths who eagerly adopted
            microservices have started transitioning back to monolithic
            architectures?
          </p>
          <p style={{ fontSize: '18px', marginBottom: '16px' }}>
            To answer that, let’s first define and differentiate the two
            approaches.
          </p>
          <p style={{ fontSize: '18px', marginBottom: '16px' }}>
            <span
              style={{
                fontWeight: 800,
                background: 'linear-gradient(#86e1ff, #39aaca)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Microservices
            </span>{' '}
            are a set of small independent services responsible for dedicated
            tasks. Each service is independent of one another and gets the
            luxury of each having its own dedicated tooling allowing for
            tooling flexibility. These services communicate with each other over the
            network using lightweight protocols such as HTTP. The division of
            responsibilities also allows for independent scaling - offering beefier
            infrastructure when it is really needed. Teams can iterate and
            deploy frequently without having to worry about their independent
            business units bringing down the entire application.
          </p>
          <p style={{ fontSize: '18px', marginBottom: '16px' }}>
            <span
              style={{
                fontWeight: 800,
                background: 'linear-gradient(#86e1ff, #39aaca)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Monoliths
            </span>
            , on the other hand, are unified codebases where business logic is
            tightly coupled together. This simplicity means teams only manage
            one codebase, with fewer concerns about orchestrating multiple
            services and communication between them. Monoliths are single unified units where one code base tightly
            couples business units together. This is simple in terms of focusing
            on one code base and less overhead orchestrating multiple services
            and their corresponding communication with each other - faster
            network calls which also allow the application to be less prone to
            network errors.
          </p>
          <p style={{ fontSize: '18px', marginBottom: '16px' }}>
            However, monoliths come with trade-offs. Any change to a single
            component requires redeploying the entire system, leading to longer
            deployment times and more extensive testing. A small bug can ripple
            through the tightly coupled architecture, causing widespread
            failures. Scaling is less efficient since the entire system must
            scale together, and adopting new tools is often constrained.
          </p>

          <h2
            style={{
              fontWeight: 800,
              fontSize: '24px',
              margin: '24px 0 12px',
              background: 'linear-gradient(#86e1ff, #39aaca)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            So, why return to monoliths despite these limitations?
          </h2>
          <p style={{ fontSize: '18px', marginBottom: '16px' }}>
            One clear reason is complexity overload. As companies scaled up, the
            increasing number of microservices became unmanageable. Too many
            services led to excessive operational overhead, as teams were
            overloaded with maintainability responsibilities. Consolidating
            microservices back into monoliths helped reduce this burden greatly.
          </p>
          <p style={{ fontSize: '18px', marginBottom: '16px' }}>
            Aside from that, my intuitive reasoning for the shift to monolithic
            architecture is because of the impact of a new technology sending
            tsunamis around the world. The rise of artificial intelligence may
            be a driving factor for the increased consolidation of microservices
            to monoliths. Tools like Cursor have revolutionized software
            development, automating tedious coding tasks and accelerating
            debugging and code comprehension. With much of the repetitive work
            now being handled by AI, companies no longer need large teams to
            manage multiple sets of microservices. Smaller teams, with modern
            day AI tooling, can effectively maintain larger, consolidated
            systems.
          </p>
          <p style={{ fontSize: '18px', marginBottom: '16px' }}>
            Additionally, AI tools are more effective when working with
            monolith's unified codebases. Crawling through a single repository
            is far more efficient than stringing together data from dozens of
            microservice code repositories. This boosts developer productivity
            even further.
          </p>

          <p style={{ fontSize: '18px', marginBottom: '16px' }}>
            Tech companies have invested a behemoth amount of capital partially
            on the prediction that these tools will continually improve and
            streamline software development. There is an increasing amount of
            pressure for companies to adopt these tools so as to not fall behind
            the acclaimed productivity boosts. Whether this is part of the
            reason for the migration to a new architecture, we can take this as
            an overall lesson to not overload your application with
            microservices unless they provide real, justifiable value.
          </p>
        </div>
        <div style={{ height: '80px' }} />
      </div>
      <Footer />
    </div>
  );
}

export default Monolith;
