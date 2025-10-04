import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

function Streaming() {
  return (
    <div
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      <Navbar />
      <div style={{ flex: 1 }}>
        <div
          className="streaming-page"
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
            A Comparison of Event Streaming Tools
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
              “It’s our choices… that show what we truly are, far more than our
              abilities”
            </em>
          </blockquote>
          <p style={{ marginBottom: '28px', opacity: 0.9 }}>
            <em>
              — Albus Dumbledore,{' '}
              <span style={{ fontStyle: 'italic' }}>
                Harry Potter and the Chamber of Secrets
              </span>
            </em>
          </p>

          <p style={{ fontSize: '18px', marginBottom: '16px' }}>
            Modern data-driven environments are often a hallmark of a successful
            software venture. It’s an incredible achievement to build
            applications capable of processing and consuming data at a rate
            unimaginable to humans for most of history.
          </p>
          <p style={{ fontSize: '18px', marginBottom: '16px' }}>
            For example, Stripe handles over 500 million API requests every day
            — and that’s not even counting the internal service calls required
            to process those requests.
          </p>
          <p style={{ fontSize: '18px', marginBottom: '28px' }}>
            <em>
              (Fun fact! That number is roughly equivalent to the population of
              the entire Earth when the first stock market emerged in Amsterdam
              in 1602)
            </em>
          </p>

          <p style={{ fontSize: '18px', marginBottom: '16px' }}>
            Setting aside the distributed communication optimizations that make
            these transactions possible over the network, let’s shift our focus
            to choosing the right tools to process massive, constantly changing
            amounts of data in real time on the application side. A good rule of
            thumb is this: when your system is generating thousands to millions
            of events per second, it’s time to consider leveraging an event
            streaming platform.
          </p>
          <p style={{ fontSize: '18px', marginBottom: '16px' }}>
            Two of the most widely used tools in this space are{' '}
            <span
              style={{
                fontWeight: 800,
                background: 'linear-gradient(#86e1ff, #39aaca)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Apache Kafka
            </span>{' '}
            and{' '}
            <span
              style={{
                fontWeight: 800,
                background: 'linear-gradient(#86e1ff, #39aaca)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Amazon SQS
            </span>
            . In this article, we’ll weigh their similarities and differences to
            help you make better decisions as an engineer.
          </p>
          <p style={{ fontSize: '18px', marginBottom: '16px' }}>
            <em>
              Disclaimer: This article is intended to be a very brief overview
              of these two tools. There’s a book’s worth of distinctions between
              these tools (idempotency, costs, integration, etc). If interested
              I recommend reading Kafka: The Definitive Guide: Real-Time Data
              and Stream Processing at Scaleby Gwen Shapira, Neha Narkhede, and
              Todd Palino, and AWS SQS in Practice by Richard Johnson
            </em>
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
            Architecture
          </h2>
          <p style={{ fontSize: '18px', marginBottom: '16px' }}>
            Kafka follows the architecture of a distributed streaming platform.
            It has producers (applications that send data) that publish events
            to topics (logical categories of events). Each topic is divided into
            partitions, which are stored on brokers (Kafka servers responsible
            for persisting and serving data). On the other side, consumers
            (applications that receive data) subscribe to topics and read events
            from these partitions. This partitioned design allows Kafka to scale
            horizontally and ensures that events are organized, distributed, and
            consumed efficiently.
          </p>
          <p style={{ fontSize: '18px', marginBottom: '16px' }}>
            On the other hand, Amazon SQS is a simple managed queueing service.
            One service publishes messages to a queue while another service
            retrieves and processes them - acting as a buffer between
            components. These processing services poll the queue for new
            messages. Once a message is consumed, it is removed from the queue —
            unlike Kafka, where past events remain available for re-reading.
            Because SQS is fully managed by AWS, it provides a reliable and
            automatically scalable messaging infrastructure without requiring
            manual management of the underlying servers or storage. It is a
            fitting choice for those already entwined in the AWS ecosystem.
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
            Performance
          </h2>
          <p style={{ fontSize: '18px', marginBottom: '16px' }}>
            Due to SQS’s message polling architecture - it has increased
            overhead leading to a slightly higher latency compared to Kafka.
            Kafka brokers push data quickly to consumers compared to SQS
            consumers waiting to poll the queue for messages. The typical
            latency of SQS is 10s - 100s of milliseconds compared to Kafka’s
            typical latency of 2 -10 milliseconds. Though Kafka wins this round
            due to its high-thoroughput and low-latency streaming, it’s
            important to not forget the simplicity of maintaining an SQS queue.
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
            Fault Tolerance
          </h2>
          <p style={{ fontSize: '18px', marginBottom: '16px' }}>
            Kafka offers large distributed storage, blurring the lines between
            an event streaming platform and a database. Event streams are stored
            in fault tolerant, distributed clusters of servers referenced as
            “brokers". In other words, events are written to disk and replicated
            across brokers ensuring reliable retention of this data. This also
            means clusters can be scaled horizontally to handle increased
            traffic. Though unlike a traditional database - Kafka stores events
            as an append-only log for each partition and data is immutable and
            expires after a configurable time or size.
          </p>
          <p style={{ fontSize: '18px', marginBottom: '16px' }}>
            SQS, pound for pound, offers a similar punch in reliability as
            messages are stored across multiple AWS availability zones. SQS
            provides high durability and fault tolerance by leveraging its
            underlying AWS infrastructure. This makes SQS much more manageable -
            especially with companies lacking a large headcount - as
            configurations are automatically created and changed without extra
            lift.
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
            Story
          </h2>
          <p style={{ fontSize: '18px', marginBottom: '16px' }}>
            Let’s impersonate Bob - a software engineer that reached a point at
            his e-commerce startup where he needs to find an event-streaming
            platform to handle the large amount of client purchases sent to his
            backend service to persist into the database. It is to his
            personality to have full control over the tools he uses - ever since
            his deep dives to understand the intricate customizations he could
            do on his linux machine as a kid. Kafka with its open-source highly
            customizable architecture draws him in like the moonlight to nightly
            insects.
          </p>
          <p style={{ fontSize: '18px', marginBottom: '16px' }}>
            But Bob looks past his abilities and takes into consideration his
            small team of 10 developers maintaining the entire system that keeps
            his venture running. Bob decides to utilize SQS queues despite the
            lower-latency and customization of Kafka. As much as the engineer in
            him longs for the knobs and dials of an open-source, self-managed
            cluster, the pragmatist in him sees the bigger picture. His
            10-person team is already stretched thin — constantly running both
            the frontend and backend services, managing customer data, and
            shipping new features. Maintaining a Kafka cluster would demand
            constant monitoring, scaling, and customization, pulling precious
            focus away from what really matters: growing the business.
          </p>
          <p style={{ fontSize: '18px', marginBottom: '16px' }}>
            In the end for Bob, choosing SQS isn’t a compromise of skill, but a
            recognition of the context of his companies resources. By picking SQS, Bob gives
            his team the time and energy to focus on building what is important
            at this time - features not infrastructure.
          </p>
          <p style={{ fontSize: '18px', marginBottom: '16px' }}>
            Bob dreams for the day his company scales to a point where he could
            afford a larger headcount but for now, Kafka can wait.
          </p>
        </div>
        <div style={{ height: '80px' }} />
      </div>
      <Footer />
    </div>
  );
}

export default Streaming;
