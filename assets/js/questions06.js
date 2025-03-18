// ML_Associate_Practise_6.txt
const questions06 = [
  {
    questionText: `Marie, an integration project manager, is overseeing a new initiative to integrate several legacy systems with modern cloud applications. During a project review, she’s trying to understand some of the common pitfalls that lead to integration project failures. Which of the following reasons is NOT typically a cause for the failure of IT integration projects?`,
    questionHint: "",
    correctAns: ["Using the latest technology for the sake of being modern"],
    wrongAns: ["Inadequate stakeholder communication", "Mismatched integration technologies", "Frequent changes to project scope"]
  },
  {
    questionText: `Your company wants to use a cloud-based email service where employees can send and receive emails without the IT department needing to maintain email servers or install email client software on each employee’s computer. Which cloud service model fits this description?`,
    questionHint: "",
    correctAns: ["Software as a Service (SaaS)"],
    wrongAns: ["Infrastructure as a Service (IaaS)", "Data as a Service (DaaS)", "Platform as a Service (PaaS)"]
  },
  {
    questionText: `Linda, an API product manager, wants to ensure that all the APIs deployed in her organization are monitored for their performance, potential issues, and usage patterns. She also wants to enforce certain policies, such as rate limiting, on some APIs. Which component of the Anypoint Platform is most suitable for Linda’s requirements?`,
    questionHint: "",
    correctAns: ["Anypoint API Manager"],
    wrongAns: ["Anypoint Runtime Fabric", "Anypoint Connector DevKit", "Anypoint Design Center"]
  },
  {
    questionText: `Liam is building a Mule application to integrate with an external database. To ensure optimal performance, he needs to retrieve data in smaller chunks rather than fetching everything at once. Which configuration in the Database connector would best help Liam achieve this?`,
    questionHint: "",
    correctAns: ["Configure \'Fetch Size\' to a specific number of rows"],
    wrongAns: ["Set the \'Streaming\' attribute to \'TRUE\'", "Implement \'Result Streaming\'", "Use \'Batch Processing\' to retrieve data"]
  },
  {
    questionText: `Martin is designing a Mule application that reads files from a shared network location. The files can be large, sometimes exceeding 1GB in size. He wants to ensure that his Mule application doesn’t run out of memory when processing these files. Which core connector feature should he use?`,
    questionHint: "",
    correctAns: ["Set the \'Streaming\' attribute to \'ALWAYS\' for the File connector"],
    wrongAns: ["Use the \'Batch Processing\' feature to process files in chunks", "Enable the \'Synchronous\' processing mode", "Implement a \'Rate Limiter\' to control the rate at which files are read"]
  },
  {
    questionText: `Jackson, a project lead, is working on a mission-critical integration project. As they approach the project’s final stages, they start noticing delays and inconsistencies. To prevent future projects from facing the same fate, which of the following should Jackson be MOST wary of as a common reason for integration project failures?`,
    questionHint: "",
    correctAns: ["Keeping all details and progress secret until the final reveal"],
    wrongAns: ["Periodic reviews with stakeholders", "Proper documentation of integration processes", "Effective collaboration among team members"]
  },
  {
    questionText: `A financial services firm wants to expose several of its services as APIs to their partners. They need a component in the Anypoint Platform that will allow them to set policies, control access, and monitor API usage. Which component should they leverage?`,
    questionHint: "",
    correctAns: ["Anypoint API Manager"],
    wrongAns: ["Anypoint Runtime Manager", "Anypoint Exchange", "Anypoint Design Center"]
  },
  {
    questionText: `A healthcare organization is planning to integrate its on-premises patient management system with a cloud-based lab result application. They aim to facilitate immediate data exchange between these two systems. Within the Anypoint Platform, which feature of Anypoint Connectors will be most advantageous for such seamless connectivity?`,
    questionHint: "",
    correctAns: ["Pre-built connectivity to commonly used software applications"],
    wrongAns: ["Customized error handling", "Drag-and-drop interface builder", "Automated data mapping capabilities"]
  },
  {
    questionText: `Laura, a tech lead, is planning to create an internal portal where all her company’s reusable assets, including APIs, connectors, and templates, can be discovered and consumed by other teams. Which component of the Anypoint Platform will best serve Laura’s needs?`,
    questionHint: "",
    correctAns: ["Anypoint Exchange"],
    wrongAns: ["Anypoint Visualizer", "Anypoint Monitoring", "Anypoint Design Center"]
  },
  {
    questionText: `A software company has developed a CRM application and wishes to offer it to businesses without requiring them to install any software or manage any servers. The software company will manage everything, including updates, backups, and server maintenance. Which cloud service model is this an example of?`,
    questionHint: "",
    correctAns: ["Software as a Service (SaaS)"],
    wrongAns: ["Infrastructure as a Service (IaaS)", "Platform as a Service (PaaS)", "Data as a Service (DaaS)"]
  },
  {
    questionText: `Alex is looking for a tool within the Anypoint Platform that will allow him to not only design and prototype his APIs but also to test and mock their behavior before actual implementation. Which component should Alex use for this purpose?`,
    questionHint: "",
    correctAns: ["Anypoint Design Center"],
    wrongAns: ["Anypoint Studio", "Anypoint Monitoring", "Anypoint Visualizer"]
  },
  {
    questionText: `Rebecca, an API manager, is tasked with applying security policies, throttling user access based on SLAs, and facilitating analytics on API usage within her organization. Which primary component of Anypoint Platform is best suited for Rebecca’s requirements?`,
    questionHint: "",
    correctAns: ["Anypoint API Manager"],
    wrongAns: ["Anypoint MQ", "Anypoint Exchange", "Anypoint DataWeave"]
  },
  {
    questionText: `Thomas, an API manager, needs to enforce a security policy on an API, ensuring that only specific IP addresses can access it. He also wants to set a rate limit on the number of requests a consumer can make within a minute. Which Anypoint Platform component will help Thomas achieve these goals?`,
    questionHint: "",
    correctAns: ["Anypoint API Manager"],
    wrongAns: ["Anypoint Monitoring", "Anypoint Design Center", "Anypoint MQ"]
  },
  {
    questionText: `Your organization has developed a new web application and is seeking a cloud solution where it can deploy the application, set up databases, and run background processes, but doesn’t want to manage or maintain the underlying servers, OS, or networking infrastructure. Which type of cloud service model aligns with these needs?`,
    questionHint: "",
    correctAns: ["Platform as a Service (PaaS)"],
    wrongAns: ["Infrastructure as a Service (IaaS)", "Software as a Service (SaaS)", "Function as a Service (FaaS)"]
  },
  {
    questionText: `Emma is designing a Mule application that fetches data from an external SFTP server. The server updates its data every evening, and Emma wants her application to automatically pick up these changes every morning without any manual intervention. Which core connector feature should she incorporate into her Mule application?`,
    questionHint: "",
    correctAns: ["The On Modified listener to detect changes in the SFTP server"],
    wrongAns: ["The For Each scope to iterate over all the SFTP files", "The Reconnection strategy for ensuring a steady connection to the SFTP server", "The Logger component to log every file fetch operation"]
  },
  {
    questionText: `As a MuleSoft Developer, you are tasked with deploying a Mule application to a cloud platform where the cloud provider manages the runtime, but you are responsible for managing the application and its configurations. Which cloud service model are you most likely using?`,
    questionHint: "",
    correctAns: ["Platform as a Service (PaaS)"],
    wrongAns: ["Software as a Service (SaaS)", "Infrastructure as a Service (IaaS)", "Data as a Service (DaaS)"]
  },
  {
    questionText: `A healthcare provider has multiple applications that handle patient data, and they’re looking to design and build new integrations efficiently. They need a tool within the Anypoint Platform where they can visually map and transform data between these systems without writing code. Which component best suits this need?`,
    questionHint: "",
    correctAns: ["Anypoint Design Center\'s Flow Designer"],
    wrongAns: ["Anypoint API Manager", "Anypoint Studio", "Anypoint Exchange"]
  },
  {
    questionText: `You are an Integration Architect at an organization that is looking to migrate its applications to the cloud. The organization wants to retain full control over the operating system and networking components, while also having the flexibility to choose its own infrastructure. Which cloud service model best fits this requirement?`,
    questionHint: "",
    correctAns: ["Infrastructure as a Service (IaaS)"],
    wrongAns: ["Platform as a Service (PaaS)", "Software as a Service (SaaS)", "Backend as a Service (BaaS)"]
  },
  {
    questionText: `A publishing house wants to centralize the storage, management, and publishing of its articles, books, and multimedia content. They are looking for a system that would allow authors, editors, and designers to collaborate and maintain versions of the content. Which enterprise system would best fulfill their needs?`,
    questionHint: "",
    correctAns: ["Content Management System (CMS)"],
    wrongAns: ["Customer Relationship Management (CRM)", "Data Warehouse", "Supply Chain Management (SCM)"]
  },
  {
    questionText: `A large multinational corporation wants to adopt MuleSoft for their integration needs. They are particularly interested in a component that allows developers to visually design, test, and debug integrations. The company emphasizes the need to quickly build integrations without having to write extensive code. Which component of the Anypoint Platform would you recommend for this purpose?`,
    questionHint: "",
    correctAns: ["Anypoint Studio"],
    wrongAns: ["Anypoint Exchange", "Anypoint Runtime Manager", "Anypoint API Manager"]
  },
  {
    questionText: `Michael, an API architect, wants to expose his company’s services as APIs while ensuring he can monitor, secure, and analyze traffic to these APIs. Which primary component of the Anypoint Platform should Michael use to fulfill these requirements?`,
    questionHint: "",
    correctAns: ["Anypoint API Manager"],
    wrongAns: ["Anypoint Studio", "Anypoint Runtime Manager", "Anypoint Exchange"]
  },
  {
    questionText: `A logistics company wants to synchronize their on-premises inventory system with an e-commerce platform in real-time. Given the volume and frequency of data, they’re concerned about potential data bottlenecks. Which characteristic of Anypoint Connectors would best mitigate this concern?`,
    questionHint: "",
    correctAns: ["Configurable data streaming"],
    wrongAns: ["Reusable integration templates", "Integrated debugging tools", "Built-in API version management"]
  },
  {
    questionText: `Emma is an API strategist for a large financial organization. She’s tasked with creating a centralized place where developers and partners can discover, learn, test, and consume the APIs offered by her company. Which component of the Anypoint Platform should Emma focus on?`,
    questionHint: "",
    correctAns: ["Anypoint Exchange"],
    wrongAns: ["Anypoint Runtime Manager", "Anypoint Studio", "Anypoint Visualizer"]
  },
  {
    questionText: `You are a consultant helping a company decide on which integration platform to adopt. The CIO of the company asks you which component of the Anypoint Platform allows for the design, build, and management of APIs. Furthermore, they are keen to ensure it provides capabilities to maintain API versions, monitor analytics, and set up policies. Which component of the Anypoint Platform best fits this requirement?`,
    questionHint: "",
    correctAns: ["Anypoint API Manager"],
    wrongAns: ["Anypoint Exchange", "Anypoint Studio", "Anypoint Runtime Manager"]
  },
  {
    questionText: `Liam is developing a Mule application that integrates with a third-party CRM system. The CRM system has its API with specific rate limits. Liam wants to ensure his Mule application doesn’t exceed these limits to avoid any disruptions. Which core connector feature should Liam employ to address this concern?`,
    questionHint: "",
    correctAns: ["The Throttling feature to control the request rate to the CRM system"],
    wrongAns: ["The Error Handling connector to catch any rate-limiting errors", "The Scheduler connector to ensure regular intervals between requests", "The HTTP Request connector with manual timeout settings"]
  },
  {
    questionText: `Rosa, the lead developer at a fintech company, is building a series of APIs that will be consumed by external partners. She wants a unified platform that will allow her to set up SLA tiers, manage API versions, and track the consumption of these APIs. Which component of the Anypoint Platform should Rosa use to manage these requirements?`,
    questionHint: "",
    correctAns: ["Anypoint API Manager"],
    wrongAns: ["Anypoint Studio", "Anypoint Exchange", "Anypoint Monitoring"]
  },
  {
    questionText: `The sales team at a medium-sized enterprise frequently collaborates with the marketing department. They need a system that can track customer interactions, manage leads, and forecast sales. What type of enterprise system will best address their requirements?`,
    questionHint: "",
    correctAns: ["Customer Relationship Management (CRM)"],
    wrongAns: ["Content Management System (CMS)", "Enterprise Resource Planning (ERP)", "Supply Chain Management (SCM)"]
  },
  {
    questionText: `Ella, a project manager, is reviewing an integration project that recently faced significant challenges leading to delays. She wishes to ensure future projects do not encounter similar obstacles. Which of the following reasons should she be MOST cautious of to prevent integration project failures?`,
    questionHint: "",
    correctAns: ["Lack of stakeholder involvement during the project\'s lifecycle"],
    wrongAns: ["Investing in training sessions for the project team", "Comprehensive documentation of each integration step", "Using a version control system"]
  },
  {
    questionText: `A retail organization is integrating their on-premises SAP ERP system with a cloud-based CRM platform. They are looking for a way within the Anypoint Platform to seamlessly connect these two systems without custom code. Which feature of Anypoint Connectors will best assist in this scenario?`,
    questionHint: "",
    correctAns: ["Out-of-the-box connectivity to popular applications and protocols"],
    wrongAns: ["Custom-built logging mechanisms", "Pre-built Mule events for streamlining development", "Direct SQL execution capabilities"]
  },
  {
    questionText: `WebFusion Corp is planning on creating reusable assets, connectors, and templates to expedite their integration processes. They are looking for a component within the Anypoint Platform that not only lets them store and share these assets but also provides capabilities to discover and reuse them. Which component would best serve their needs?`,
    questionHint: "",
    correctAns: ["Anypoint Exchange"],
    wrongAns: ["Anypoint Design Center", "Anypoint Visualizer", "Anypoint Monitoring"]
  },
  {
    questionText: `A financial institution is looking to leverage Anypoint Platform to integrate their legacy mainframe system with a new payment gateway. The institution is concerned about ensuring the data flow is continuous and resilient. Which characteristic of Anypoint Connectors would address this concern?`,
    questionHint: "",
    correctAns: ["Configurable data streaming"],
    wrongAns: ["Built-in load testing tools", "Embedded API documentation", "Integrated API mocking capabilities"]
  },
  {
    questionText: `A developer, Natalie, is working on a Mule application to integrate with an external RESTful service. The service occasionally goes down for maintenance, but Natalie wants to ensure that her application can gracefully handle such scenarios without any major disruptions. Which feature in the HTTP Request connector should she employ?`,
    questionHint: "",
    correctAns: ["Implement a reconnection strategy with specified retry mechanisms"],
    wrongAns: ["Configure the \'Response Timeout\' to a higher value", "Set up the \'Follow Redirects\' option", "Use the \'Automatic Streaming\' feature"]
  },
  {
    questionText: `A large multinational corporation wants to integrate all of its geographically dispersed human resources and financial systems. The primary goal is to centralize processes and data. The company is seeking a type of enterprise system that allows the aggregation, analysis, and presentation of data primarily from these areas. Which type of enterprise system best fits the company’s requirement?`,
    questionHint: "",
    correctAns: ["Enterprise Resource Planning (ERP)"],
    wrongAns: ["Content Management System (CMS)", "Customer Relationship Management (CRM)", "Data Warehouse"]
  },
  {
    questionText: `Liam, an API architect, wants to ensure that all the APIs developed within his organization follow a consistent design pattern. He’s looking for a tool where he can publish API design best practices, reusable API fragments, and provide templates for quick starts. Which component of Anypoint Platform would best suit Liam’s needs?`,
    questionHint: "",
    correctAns: ["Anypoint Exchange"],
    wrongAns: ["Anypoint Connector DevKit", "Anypoint MQ", "Anypoint Design Center"]
  },
  {
    questionText: `An e-commerce company has built several Mule applications and APIs. They need a solution to monitor these applications in real-time, check the health, and ensure they are functioning as expected in different environments. Which component of the Anypoint Platform should they leverage for this use case?`,
    questionHint: "",
    correctAns: ["Anypoint Runtime Manager"],
    wrongAns: ["Anypoint Design Center", "Anypoint Exchange", "Anypoint Connector DevKit"]
  },
  {
    questionText: `A manufacturing company is trying to streamline its operations from the acquisition of raw materials to the delivery of finished products to customers. They need an enterprise system that can help them manage the flow of goods, data, and finances related to a product. Which enterprise system is best suited for this purpose?`,
    questionHint: "",
    correctAns: ["Supply Chain Management (SCM)"],
    wrongAns: ["Content Management System (CMS)", "Customer Relationship Management (CRM)", "Enterprise Resource Planning (ERP)"]
  },
  {
    questionText: `Lucas, an integration architect, has been assigned a new project to integrate multiple systems across various departments in a large organization. As he evaluates the project’s roadmap, he reflects on past projects and their challenges. Which of the following is NOT commonly associated with IT integration project failures?`,
    questionHint: "",
    correctAns: ["Regularly gathering feedback from end-users"],
    wrongAns: ["Opting for a technology based solely on its market popularity", "Not allocating enough time for thorough testing", "Unclear project objectives and requirements"]
  },
  {
    questionText: `John, the CTO of a growing tech startup, is planning to adopt a comprehensive API management solution. He wants to ensure that their APIs are developed following a consistent design approach and that they can be easily consumed by internal teams and external partners. Which Anypoint Platform component should be John’s primary focus?`,
    questionHint: "",
    correctAns: ["Anypoint Exchange"],
    wrongAns: ["Anypoint MQ", "Anypoint Visualizer", "Anypoint DataWeave"]
  },
  {
    questionText: `An e-commerce company is seeking to enhance its customer experience by ensuring timely follow-ups, handling complaints efficiently, and offering personalized promotions. They are in search of an enterprise system that would allow them to capture, track, and analyze customer interactions across various touchpoints. Which enterprise system is most appropriate for their needs?`,
    questionHint: "",
    correctAns: ["Customer Relationship Management (CRM)"],
    wrongAns: ["Data Warehouse", "Content Management System (CMS)", "Enterprise Resource Planning (ERP)"]
  },
  {
    questionText: `In a recent company meeting, the CEO emphasized the need to avoid pitfalls that have historically plagued IT integration projects. As the lead integration developer, Michael recalls a project that was shelved last year. Which of the following was MOST LIKELY a significant contributing factor to the project’s failure?`,
    questionHint: "",
    correctAns: ["There was no clear communication between IT teams and business stakeholders"],
    wrongAns: ["The team used the latest version of integration software", "The team held weekly status update meetings", "The integration project was documented with detailed design specifications"]
  }
];

questionLists
  ? questionLists.push(...questions06)
  : (questionLists = questions06);
