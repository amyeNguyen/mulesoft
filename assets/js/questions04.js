// ML_Associate_Practise_4.txt
const questions04 = [
  {
    questionText: `A fintech company uses the Anypoint Platform for several critical applications. With a need for high availability and zero downtime, it’s essential for them to ensure their applications are always running and quickly recover if any issues arise. Which component of the Anypoint Platform is primarily responsible for the runtime environment of these applications?`,
    questionHint: "",
    correctAns: ["Anypoint Runtime Plane"],
    wrongAns: ["Anypoint Exchange", "Anypoint Design Center", "Anypoint Control Plane"]
  },
  {
    questionText: `A startup company with a focus on rapid development and scalability opts for the Anypoint Platform to integrate their multiple applications. They prefer an option that is fully managed by MuleSoft, ensuring they can focus solely on development without being concerned about infrastructure management. Which deployment option aligns with their preference?`,
    questionHint: "",
    correctAns: ["CloudHub"],
    wrongAns: ["Anypoint Platform PCE (Private Cloud Edition)", "MuleSoft Anypoint On-Premises", "Anypoint Runtime Fabric"]
  },
  {
    questionText: `Liam, a MuleSoft developer, is designing an API for a new e-commerce platform. He wants to ensure that the API’s lifecycle, from its creation to its retirement, is efficiently managed. Which feature of the Anypoint Platform will help Liam in realizing this goal?`,
    questionHint: "",
    correctAns: ["Anypoint API Designer"],
    wrongAns: ["Anypoint Analytics", "Anypoint Studio", "Anypoint Exchange"]
  },
  {
    questionText: `FastConnect, a SaaS provider, has been expanding its services portfolio rapidly and currently has over 150 microservices running. To ensure effective communication and discovery among these services and control traffic, they are considering introducing a solution. While they also want to have an endpoint for external consumers to manage and route incoming requests, they don’t want this solution to handle intra-service communications. What should FastConnect primarily focus on for intra-service communications?`,
    questionHint: "",
    correctAns: ["Service Mesh"],
    wrongAns: ["API Gateway", "Message Queue", "Webhook Relay"]
  },
  {
    questionText: `TechFirm Inc. is designing its new application infrastructure. They intend to build multiple microservices that need to communicate with each other reliably, discover services dynamically, and maintain a consistent security policy across them. Simultaneously, they also want an efficient way to expose certain services to their external clients with request throttling and endpoint monitoring. For the internal microservices communication and control, which of the following would be most suitable?`,
    questionHint: "",
    correctAns: ["Service Mesh"],
    wrongAns: ["API Gateway", "Load Balancer", "Remote Procedure Call (RPC)"]
  },
  {
    questionText: `A company is transitioning from a traditional IT model to an API-led approach. The IT head emphasizes the importance of developing APIs that can be used in multiple scenarios, not just the immediate project. By adopting this approach, what primary characteristic of an API-led IT delivery model is the company aiming to achieve?`,
    questionHint: "",
    correctAns: ["Reusability"],
    wrongAns: ["Project specificity", "Limited API exposure", "Single function focus"]
  },
  {
    questionText: `A logistics company is in the process of revamping its configuration management system. The system administrators need a format that’s easy to read, write, and update, even for those without a deep programming background. This format should also support comments for better documentation. Which of the following data formats best suits their needs?`,
    questionHint: "",
    correctAns: ["YAML"],
    wrongAns: ["XML", "JSON", "CSV"]
  },
  {
    questionText: `During a team meeting, Emily, a MuleSoft Developer, is asked to explain the importance of an API-led IT delivery model. Which statement best highlights a fundamental characteristic of this model?`,
    questionHint: "",
    correctAns: ["It emphasizes both the production and consumption of APIs to maximize their value"],
    wrongAns: ["It promotes only the creation of APIs, with no emphasis on their utilization", "It centralizes all APIs into one module for easier management", "It requires APIs to be rewritten each time a new consumer application is developed"]
  },
  {
    questionText: `A financial institution is looking to set up a secure communication channel to transmit confidential customer data between its data centers. They want to ensure that the data is encrypted during transmission and can authenticate the server and optionally the client. Which protocol should they primarily consider for this communication?`,
    questionHint: "",
    correctAns: ["TLS/SSL"],
    wrongAns: ["FTP", "HTTP", "SMTP"]
  },
  {
    questionText: `A growing e-commerce startup is expanding its operations globally. They want a way to resolve their domain name to multiple IP addresses, allowing clients to connect to the nearest server for better performance. Which protocol, specifically designed for translating domain names into IP addresses, would best serve their requirement?`,
    questionHint: "",
    correctAns: ["DNS"],
    wrongAns: ["FTP", "POP3", "UDP"]
  },
  {
    questionText: `A financial firm wants to build a robust system where its partners can securely access certain financial data via web interfaces, ensuring scalability, rate limiting, and security. Which class of integration technology would be best suited for this requirement?`,
    questionHint: "",
    correctAns: ["External API Gateway"],
    wrongAns: ["B2B Gateway", "Data Integration Tool", "Message Queue"]
  },
  {
    questionText: `A new integration project at TechCorp follows a strict sequence of phases from requirement gathering to deployment. Each phase relies on information from the previous stage and provides the basis for the next. What delivery methodology is TechCorp using?`,
    questionHint: "",
    correctAns: ["Waterfall"],
    wrongAns: ["Spiral", "Agile", "Scrum"]
  },
  {
    questionText: `Jennifer, an API Product Manager at a retail company, wants to ensure that the APIs developed by her team are consistent in design, adhere to the company’s standards, are reusable, and have centralized documentation. She’s also looking for a platform that can handle various API types. Which MuleSoft product should Jennifer turn to for achieving these objectives?`,
    questionHint: "",
    correctAns: ["Anypoint Exchange"],
    wrongAns: ["Anypoint Visualizer", "Anypoint Monitoring", "Anypoint Connector Kit"]
  },
  {
    questionText: `A FinTech application is retrieving financial transaction data from various banks. The data format provided by the banks uses key-value pairs enclosed in curly braces. Which data format are the banks most likely providing?`,
    questionHint: "",
    correctAns: ["JSON"],
    wrongAns: ["XML", "CSV", "HTML"]
  },
  {
    questionText: `A healthcare company wants to use the Anypoint Platform for integrating their existing systems. Due to stringent regulatory requirements and data sensitivity, they prefer to keep the entire platform within their own data center rather than using external hosting. Which deployment option should they choose for the Anypoint Platform?`,
    questionHint: "",
    correctAns: ["Anypoint Platform PCE (Private Cloud Edition)"],
    wrongAns: ["CloudHub", "Anypoint Public Cloud", "API Community Manager"]
  },
  {
    questionText: `While attending a technology seminar, Sara, a new Integration Architect, hears a keynote speaker discussing the “IT delivery gap.” Sara isn’t familiar with this term. Which of the following best explains what the IT delivery gap refers to?`,
    questionHint: "",
    correctAns: ["The chasm between the IT solutions the business needs and the rate at which IT can deliver them."],
    wrongAns: ["The disparity between the performance of old IT systems and new, cloud-based systems.", "The period it takes for an IT team to learn and adapt to a new software or tool.", "The gap between IT project budget allocations and actual expenditures."]
  },
  {
    questionText: `An e-commerce platform is planning to integrate with a third-party inventory management system. The third-party system provides a configuration file for integration, which uses indentation to represent structure and doesn’t use any closing tags. Which data format is the third-party system likely using?`,
    questionHint: "",
    correctAns: ["YAML"],
    wrongAns: ["XML", "JSON", "CSV"]
  },
  {
    questionText: `A healthcare provider is looking to streamline its process by ensuring that patient data from various clinics, using different data formats and protocols, are brought together in a unified format in their central data repository. Which integration technology class would be most appropriate to achieve this?`,
    questionHint: "",
    correctAns: ["Data Integration Tool"],
    wrongAns: ["Point-to-Point Integration", "Process Automation", "External API Gateway"]
  },
  {
    questionText: `An e-commerce platform is anticipating heavy traffic during an upcoming sale. To ensure uninterrupted service and optimal performance, they want to dynamically adjust their computing resources based on the incoming traffic, without manual intervention. Which principle of system scalability is the company looking to implement?`,
    questionHint: "",
    correctAns: ["Elastic Scaling"],
    wrongAns: ["Vertical Scaling", "Static Scaling", "Recursive Scaling"]
  },
  {
    questionText: `During an integration project’s planning phase, Lucas, a project manager, was presented with different IT delivery models. He wishes to adopt a model that not only helps in creating APIs efficiently but also ensures that these APIs find maximum utility across various application contexts. Which IT delivery model would best serve Lucas’s objective?`,
    questionHint: "",
    correctAns: ["API-led Connectivity"],
    wrongAns: ["Monolithic Application Delivery", "Siloed API Delivery", "Single-tier API Deployment"]
  },
  {
    questionText: `During a team meeting, the project manager mentions that the upcoming integration project will be broken down into small, manageable increments, and the team will collaborate with the stakeholders after each increment to gather feedback. Which delivery methodology is the project manager referring to?`,
    questionHint: "",
    correctAns: ["Scrum"],
    wrongAns: ["Waterfall", "Kanban", "V-Model"]
  },
  {
    questionText: `Sarah, an Integration Architect, is explaining to her team the advantages of the API-led Connectivity model. She mentions that this model aids in creating a layered architecture of APIs where some APIs handle data retrieval, some process data, and others provide experience-specific data to end-users. Which set of API layers is Sarah referring to?`,
    questionHint: "",
    correctAns: ["Data APIs, Process APIs, and Experience APIs"],
    wrongAns: ["Input APIs, Output APIs, and Interface APIs", "Backend APIs, Frontend APIs, and Middleware APIs", "Storage APIs, Function APIs, and UI APIs"]
  },
  {
    questionText: `A startup named QuickDev is building a platform that will cater to millions of external users. They anticipate heavy traffic and want to control how external requests access their back-end services. Specifically, they want to enforce rate limits, transform payloads, and have centralized logging for these incoming requests. Which solution should QuickDev primarily implement to manage this external access?`,
    questionHint: "",
    correctAns: ["API Gateway"],
    wrongAns: ["Load Balancer", "Service Mesh", "Message Broker"]
  },
  {
    questionText: `A large e-commerce platform plans to integrate its existing order management system (OMS) with a newly acquired warehouse management system (WMS). Whenever an order is placed, it should trigger a process in the WMS to reserve the item, and once the order is dispatched, the OMS should be updated. What are the primary integration use cases needed for a seamless integration between the two systems?`,
    questionHint: "",
    correctAns: ["Orchestration and Transformation"],
    wrongAns: ["Data Replication and Orchestration", "Transformation and Broadcast", "Data Synchronization and Broadcast"]
  },
  {
    questionText: `A tech startup is working on rapidly developing and deploying APIs. They need a centralized solution that provides capabilities for tracking and analyzing API analytics, managing configurations, and setting up alerts for deployed applications. Which component of the Anypoint Platform aligns with these requirements?`,
    questionHint: "",
    correctAns: ["Anypoint Control Plane"],
    wrongAns: ["Anypoint Design Center", "Anypoint Runtime Manager", "Anypoint API Manager"]
  },
  {
    questionText: `After launching a new set of APIs, eRetail Inc. wants to provide a single entry point for its external partners and developers to access these APIs, ensuring they can throttle requests, maintain security policies, and handle versioning. While they do have numerous microservices in their architecture, this solution is specifically for external API access. Which solution should eRetail Inc. primarily implement?`,
    questionHint: "",
    correctAns: ["API Gateway"],
    wrongAns: ["Service Mesh", "Message Queue", "Load Balancer"]
  },
  {
    questionText: `During a MuleSoft project, a developer receives a configuration file from an external system. Upon inspection, the developer notices that the file uses angle brackets and has nested hierarchies. Which data format is this external system most likely utilizing?`,
    questionHint: "",
    correctAns: ["XML"],
    wrongAns: ["CSV", "JSON", "YAML"]
  },
  {
    questionText: `A health tech startup wants to expose its data to third-party developers via an API. The data includes complex nested structures. The startup is looking for a lightweight, language-agnostic format that supports complex data structures and is widely adopted in the developer community for APIs. Which data format should they consider?`,
    questionHint: "",
    correctAns: ["JSON"],
    wrongAns: ["CSV", "HTML", "YAML"]
  },
  {
    questionText: `Sophia, an IT manager, is looking to implement Universal API Management (UAPIM) in her organization. She wants a solution that not only manages the lifecycle of APIs but also ensures they are discoverable and reusable. Which component of Anypoint Platform should Sophia primarily focus on?`,
    questionHint: "",
    correctAns: ["Anypoint Exchange"],
    wrongAns: ["Anypoint Visualizer", "Anypoint Runtime Manager", "Anypoint Security"]
  },
  {
    questionText: `John, the CIO of a fast-growing company, is researching ways to close the IT delivery gap. He reads about MuleSoft’s methodology and is keen to implement it. What fundamental technique is MuleSoft known for that helps bridge this gap?`,
    questionHint: "",
    correctAns: ["Championing the API-led connectivity approach to enhance agility and promote reusability"],
    wrongAns: ["Transitioning all operations to cloud services as quickly as possible", "Advocating for regular IT staff training on emerging technologies", "Encouraging businesses to reduce their IT demands to match the IT delivery rate"]
  },
  {
    questionText: `A multinational enterprise wishes to integrate its CRM system with its billing platform. The goal is that every time a new client is registered in the CRM, the billing platform should automatically generate an invoice for the registration fee and send it to the client. The two systems use different data formats. Which fundamental integration use cases are pivotal for a successful integration?`,
    questionHint: "",
    correctAns: ["Orchestration and Transformation"],
    wrongAns: ["Aggregation and Broadcast", "Transformation and Data Replication", "Data Synchronization and Aggregation"]
  },
  {
    questionText: `Your company has adopted a hybrid deployment model, wherein they host certain applications on-premises and others on the cloud. They require a component in the Anypoint Platform that allows centralized management of both on-premises and cloud deployments, ensuring streamlined operations. Which component would best serve this purpose?`,
    questionHint: "",
    correctAns: ["Anypoint Control Plane"],
    wrongAns: ["Anypoint Visualizer", "Anypoint Studio", "Anypoint MQ"]
  },
  {
    questionText: `TechFusion, a software development agency, is weighing the pros and cons of transitioning from their current monolithic design for their application to a microservices design. They recognize that microservices can accelerate deployment cycles but are wary of the potential overhead of managing multiple service databases. Which consideration regarding the switch to microservices is TechFusion contemplating?`,
    questionHint: "",
    correctAns: ["The simplicity of managing a single database in a monolithic design"],
    wrongAns: ["The reduced API calls in microservices", "The monolithic design’s inherent network resilience", "The single point of failure in microservices"]
  },
  {
    questionText: `An e-commerce company wants to set up a mechanism for transferring large files between its suppliers and its internal systems. These files are non-confidential product images, and the primary concern is the efficient transfer of large files rather than security. Which protocol would best fit this requirement?`,
    questionHint: "",
    correctAns: ["FTP"],
    wrongAns: ["SNMP", "DHCP", "ICMP"]
  },
  {
    questionText: `A pharmaceutical company is developing a new web application that will allow researchers to access and search for scientific articles. They want to retrieve these articles from various online databases. To ensure this retrieval process uses a standard method and structure across different systems, which protocol should the developers consider?`,
    questionHint: "",
    correctAns: ["SOAP"],
    wrongAns: ["IMAP", "DHCP", "ARP"]
  },
  {
    questionText: `A manufacturing company has multiple suppliers, and it wants to build an integration solution to fetch real-time inventory data from all its suppliers’ systems to ensure a consistent supply chain. The suppliers use different ERP systems, and the data formats vary. The company wishes to see a consolidated view of inventory data. Which integration use cases best match this requirement?`,
    questionHint: "",
    correctAns: ["Aggregation and Transformation"],
    wrongAns: ["Broadcast and Orchestration", "Data Replication and Transformation", "Orchestration and Synchronization"]
  },
  {
    questionText: `You are the API Manager of a large enterprise and are evaluating MuleSoft to manage the entire lifecycle of your APIs. You’re interested in a component that not only helps in the design and testing of APIs but also ensures that they are discoverable, reusable, and consistently documented. Which component of the Anypoint Platform would best fit your requirements?`,
    questionHint: "",
    correctAns: ["Anypoint Exchange"],
    wrongAns: ["Anypoint Studio", "Anypoint MQ", "Anypoint Security"]
  },
  {
    questionText: `Jennifer, a senior developer, is tasked with creating an API for a mobile application. She is advised to design the API in such a way that it provides a tailored data experience for mobile users without dealing directly with data sources. Which layer of the API-led Connectivity model is Jennifer working on?`,
    questionHint: "",
    correctAns: ["Experience APIs"],
    wrongAns: ["Data APIs", "Process APIs", "System APIs"]
  },
  {
    questionText: `Samantha, the CTO of a startup, is looking for a MuleSoft component that provides a unified approach to manage different kinds of APIs, be it public, private, or partner APIs, with an emphasis on complete lifecycle management. Which component should Samantha consider?`,
    questionHint: "",
    correctAns: ["Universal API Management (UAPIM)"],
    wrongAns: ["Anypoint Connector DevKit", "Anypoint Visualizer", "Anypoint Runtime Manager"]
  },
  {
    questionText: `Jake, an Integration Architect, is developing a strategy for a new IT project. He’s advocating for an API-led delivery model. Which role of this model will most likely help in ensuring that the developed APIs are not just produced but also effectively consumed by various applications?`,
    questionHint: "",
    correctAns: ["Implementing a discovery mechanism to make APIs easily findable for potential consumers"],
    wrongAns: ["Having a centralized team that restricts API access", "Mandating that each application should have its unique API", "Storing APIs in hidden repositories for security"]
  }
];

questionLists
  ? questionLists.push(...questions04)
  : (questionLists = questions04);
