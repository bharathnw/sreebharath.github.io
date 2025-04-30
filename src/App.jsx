
import React from 'react'

const App = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">Sree Bharath</h1>
        <p className="text-xl">Fullstack Software Engineer | .NET | Angular | React | Cloud</p>
      </header>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">About Me</h2>
        <p>
          Experienced Software Engineer with 7+ years of experience building scalable, high-performance apps in .NET, Angular, React, and microservices. Adept in AWS, Azure, Redis, RabbitMQ, and real-time apps.
        </p>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Skills</h2>
        <ul className="list-disc list-inside">
          <li>Languages: C#, Java, Python, TypeScript, JavaScript</li>
          <li>Frameworks: .NET Core, Angular, React, Node.js, FastAPI</li>
          <li>Cloud & DevOps: AWS, Azure, Docker, Jenkins, GitHub Actions</li>
          <li>Tools: Redis, RabbitMQ, Kafka, SignalR, OAuth2.0, JWT</li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Projects</h2>
        <ul className="list-disc list-inside">
          <li><strong>Crystal Ball (Epoca)</strong>: AI chatbot with OpenAI, FastAPI, Redis, and real-time file transfer</li>
          <li><strong>CXR Currency Exchange</strong>: Multi-currency accounting platform with dynamic reporting</li>
          <li><strong>IBW Surveyors</strong>: Scheduling and sensor monitoring app with role-based access</li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Contact</h2>
        <p>Email: msreebharath21@gmail.com</p>
        <p>LinkedIn: <a className="text-blue-500 underline" href="https://www.linkedin.com/in/sreebharath/" target="_blank">sreebharath</a></p>
      </section>
    </div>
  )
}

export default App
