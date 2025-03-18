// ML_Associate_Practise_5.txt
const questions05 = [
  {
    questionText: `Carlos runs a startup with a digital product that experiences sudden spikes in traffic. He wants to ensure that the Mule application can handle large numbers of users without manual scaling or infrastructure adjustments. He is also looking to minimize upfront infrastructure investments. Which deployment option should Carlos consider?`,
    questionHint: "",
    correctAns: ["Pure Cloud Deployment"],
    wrongAns: ["On-Premise Deployment", "Private Cloud Deployment", "Hybrid Deployment"]
  },
  {
    questionText: `A multinational bank wants to integrate its new mobile banking application with its existing core banking system. Customers should be able to check account balances, transfer funds between accounts, and view transaction history. The core banking system offers SOAP web services for these operations. Considering latency and data format issues, which fundamental integration use cases are primarily required?`,
    questionHint: "",
    correctAns: ["Transformation and Orchestration"],
    wrongAns: ["Data Synchronization and Orchestration", "Transformation and Aggregation", "Broadcast and Data Replication"]
  },
  {
    questionText: `A leading e-commerce organization is currently using the Anypoint Platform for its integrations. They are expanding their operations and anticipate a significant surge in traffic. They need to ensure that their deployed integrations can efficiently handle the incoming traffic and that any issues with applications can be quickly diagnosed. Which component of the Anypoint Platform should be the focus of their scalability and reliability efforts?`,
    questionHint: "",
    correctAns: ["Anypoint Runtime Plane"],
    wrongAns: ["Anypoint Exchange", "Anypoint Control Plane", "Anypoint Studio"]
  },
  {
    questionText: `A retail company wants to connect its legacy CRM system with a modern cloud-based marketing platform. To expedite the integration process and reduce development time, what feature of Anypoint Connectors should they prioritize?`,
    questionHint: "",
    correctAns: ["In-built connectivity to a wide range of applications and protocols"],
    wrongAns: ["Ability to add custom policies to connectors", "Real-time monitoring capabilities", "Enhanced transformation logic"]
  },
  {
    questionText: `A manufacturing company has deployed several Mule applications using Anypoint Platform. They want to ensure that their deployed applications run without interruption and can handle incoming traffic and process data. Which component of the Anypoint Platform facilitates this?`,
    questionHint: "",
    correctAns: ["Anypoint Runtime Plane"],
    wrongAns: ["Anypoint Management Center", "Anypoint Studio", "Anypoint Monitoring"]
  },
  {
    questionText: `Your organization is creating a cloud-based system that offers services to millions of users globally. To ensure the system remains responsive and available even during peak demands or unexpected spikes in traffic, which principle of system scalability should you primarily consider?`,
    questionHint: "",
    correctAns: ["Horizontal Scaling"],
    wrongAns: ["Static Scaling", "Vertical Scaling", "Recursive Scaling"]
  },
  {
    questionText: `Sophia, a project manager, is analyzing the reasons behind the premature termination of several IT integration projects in her organization. Which of the following reasons should she NOT consider as a common cause of integration project failures?`,
    questionHint: "",
    correctAns: ["Regular feedback sessions with end-users."],
    wrongAns: ["Adoption of the most expensive integration tools in the market.", "Inadequate testing leading to overlooked issues.", "Ambiguous project objectives and scope."]
  },
  {
    questionText: `Jessica, an API manager, wants to set up a portal where developers can discover, access, and test APIs that her organization provides. She also wants to document best practices, display API documentation, and allow developers to provide feedback. Which component of the Anypoint Platform is best suited for Jessica’s needs?`,
    questionHint: "",
    correctAns: ["Anypoint Exchange"],
    wrongAns: ["Anypoint Design Center", "Anypoint Security", "Anypoint Runtime Fabric"]
  },
  {
    questionText: `A rapidly growing e-commerce startup aims to integrate its CRM, e-commerce platform, and inventory management system. They’re considering a direct connection between each system, but they’re concerned about future scalability. What is the primary drawback of adopting a direct Point-to-Point integration approach in this context?`,
    questionHint: "",
    correctAns: ["It creates tightly coupled systems which can become complex with growth"],
    wrongAns: ["It is suited only for legacy systems", "It is more suited for batch processing", "It doesn\'t support real-time data integration"]
  },
  {
    questionText: `Alex, a CTO, has been facing challenges in aligning the rapid business demands with the pace at which his IT team can deliver solutions. He came across the term “IT delivery gap” in a recent white paper from MuleSoft. Which definition aligns most accurately with this term?`,
    questionHint: "",
    correctAns: ["The discrepancy between business demands for IT solutions and IT\'s actual delivery capacity."],
    wrongAns: ["The gap between what a business spends on IT and the returns it receives.", "The difference in technology platforms used by the IT team over the years.", "The time it takes for IT to roll out a new system or software once requested."]
  },
  {
    questionText: `A financial enterprise is looking to modernize its infrastructure. They want to ensure that different applications and services can run on the same physical hardware without interfering with each other, maximizing hardware utilization. Which type of virtualization would be best suited for this requirement?`,
    questionHint: "",
    correctAns: ["Server Virtualization"],
    wrongAns: ["Storage Virtualization", "Data Virtualization", "Network Virtualization"]
  },
  {
    questionText: `TechFin Inc., a financial tech company, has developed a new payment gateway using a microservices architecture. While they enjoy the benefits of scalability and independent deployments, they are facing challenges with transaction tracing, complex inter-service communication, and service orchestration. What is a known drawback of microservices that TechFin Inc. is experiencing?`,
    questionHint: "",
    correctAns: ["Increased operational complexity"],
    wrongAns: ["Easier debugging due to isolated services", "Reduced need for API documentation.", "Tight coupling between services"]
  },
  {
    questionText: `Rebecca is the IT director of a financial institution that processes sensitive user data. The organization is required by regulatory laws to keep certain datasets within its physical boundaries. However, to cater to a global clientele, they also need to ensure some application modules are available worldwide. Which deployment architecture best suits Rebecca’s needs?`,
    questionHint: "",
    correctAns: ["Hybrid Deployment"],
    wrongAns: ["Pure Cloud Deployment", "On-Premise Deployment", "Serverless Deployment"]
  },
  {
    questionText: `Nathan, an API product manager, is looking to manage the entire lifecycle of his company’s APIs, from design to deployment, to monitoring and managing these APIs. He also wants a unified platform that can handle these APIs whether they are public, private, or partner-specific. Which MuleSoft approach will help Nathan in achieving these goals?`,
    questionHint: "",
    correctAns: ["Universal API Management (UAPIM)"],
    wrongAns: ["Anypoint API Fragmentation", "Anypoint Connector Utility", "Anypoint Exchange Expansion"]
  },
  {
    questionText: `Lucas is consulting for a small business that has minimal IT infrastructure. They require a Mule application deployment with quick scalability options without investing in hardware. Which deployment architecture would best fit their needs?`,
    questionHint: "",
    correctAns: ["Pure Cloud Deployment"],
    wrongAns: ["On-Premise Deployment", "Hybrid Deployment", "Private Cloud Deployment"]
  },
  {
    questionText: `GreenScape, a landscaping software company, has been using a monolithic architecture for their platform. As they expand their service offerings, they wish to improve scalability and deployment flexibility. However, they are concerned about the potential increase in the cost and complexity of monitoring multiple services. Which application architecture tradeoff is GreenScape considering?`,
    questionHint: "",
    correctAns: ["The increased monitoring complexity with microservices architectures"],
    wrongAns: ["The scalability benefits of monolithic architectures", "The deployment flexibility of monolithic architectures", "The reduced API interactions in microservices architectures"]
  },
  {
    questionText: `FinConnect, a fintech startup, recently transitioned from a monolithic to a microservices architecture for their banking software. They are enjoying faster deployment cycles but find that a failure in one service can sometimes cascade and affect other services. What is a known drawback of microservices that FinConnect is experiencing?`,
    questionHint: "",
    correctAns: ["Service interdependence leading to cascading failures"],
    wrongAns: ["Inherent resilience of individual services", "Reduced inter-service dependencies", "Faster debugging due to isolated services"]
  },
  {
    questionText: `A manufacturing company has multiple outdated servers located in different departments. The IT team wants to consolidate these servers and run multiple applications on a single server, ensuring each application believes it has its dedicated resources and operating system. Which type of virtualization should the company implement?`,
    questionHint: "",
    correctAns: ["Server Virtualization"],
    wrongAns: ["Data Virtualization", "Network Virtualization", "Storage Virtualization"]
  },
  {
    questionText: `You are a MuleSoft Architect designing a new integration system for an e-commerce company that expects rapid growth and fluctuations in traffic. To ensure that the system can handle the expected load, which principle of system scalability should be a primary focus?`,
    questionHint: "",
    correctAns: ["Server Clustering"],
    wrongAns: ["Virtual Machine Overprovisioning", "Storage Compression", "Disk Defragmentation"]
  },
  {
    questionText: `A multinational corporation wants to standardize its internal operations and processes across its various branches globally. They aim to integrate different functions such as finance, human resources, and procurement into one unified system. Which enterprise system should they consider?`,
    questionHint: "",
    correctAns: ["Enterprise Resource Planning (ERP)"],
    wrongAns: ["Supply Chain Management (SCM)", "Content Management System (CMS)", "Data Warehouse"]
  },
  {
    questionText: `Sophia is designing a Mule application to connect to an FTP server. The server requires passive mode for all connections due to its firewall configurations. Which option in the FTP connector should Sophia employ to ensure successful communication?`,
    questionHint: "",
    correctAns: ["Enable the \'Use Passive Mode\' option"],
    wrongAns: ["Set the \'Connection Mode\' to \'ACTIVE\'.", "Check the \'Streaming\' option for data transfer", "Implement the \'Reconnection\' strategy"]
  },
  {
    questionText: `After a merger between two companies, the IT team is tasked with integrating two Customer Relationship Management (CRM) systems. One CRM is a legacy system built in the 1990s, while the other is a modern SaaS solution. The IT team wants to keep both systems temporarily while ensuring a smooth data flow between them. Which integration approach could be the most challenging due to potential inflexibility and maintenance concerns?`,
    questionHint: "",
    correctAns: ["Point-to-Point Integration"],
    wrongAns: ["API-led Connectivity", "Hybrid Integration", "Service Oriented Architecture (SOA)"]
  },
  {
    questionText: `A financial organization is deploying its integrations on the Anypoint Platform. They need a component that offers management capabilities for deployed Mule applications, like monitoring, analytics, and configuration. Which part of the Anypoint Platform should they focus on?`,
    questionHint: "",
    correctAns: ["Anypoint Control Plane"],
    wrongAns: ["Anypoint Design Center", "Anypoint Exchange", "Anypoint Runtime Plane"]
  },
  {
    questionText: `Nina is planning to deploy a Mule application for her organization. Due to the sensitive nature of the data involved, she needs to ensure that the application’s database remains within the organization’s private network while the application logic can be accessed globally. Which deployment architecture should Nina opt for?`,
    questionHint: "",
    correctAns: ["Hybrid Deployment"],
    wrongAns: ["On-Premise Deployment", "Pure Cloud Deployment", "Cloud-Only Data Deployment"]
  },
  {
    questionText: `A large multinational corporation is aiming to consolidate its various data centers globally. They wish to pool resources, ensuring more efficient allocation and flexibility, while managing the storage from a central location. Which type of virtualization would best fit their objective?`,
    questionHint: "",
    correctAns: ["Storage Virtualization"],
    wrongAns: ["Server Virtualization", "Network Virtualization", "Data Virtualization"]
  },
  {
    questionText: `Jennifer, an IT manager, has recently attended a MuleSoft seminar. She learned about MuleSoft’s approach to bridge the IT delivery gap. Which of the following best describes MuleSoft’s strategy in this context?`,
    questionHint: "",
    correctAns: ["Promote the development and use of reusable APIs to accelerate delivery"],
    wrongAns: ["Invest in faster computers and storage solutions", "Encourage businesses to reduce their IT demands", "Shift all IT operations to the cloud"]
  },
  {
    questionText: `Alex, a Lead API Strategist at a fintech company, is aiming to standardize API development processes across various teams. He is keen on having a uniform approach from API design, testing, and deployment to ensuring its maintenance post-deployment. Furthermore, Alex wants a centralized repository where reusable assets can be shared across teams. Which MuleSoft solution best addresses Alex’s needs?`,
    questionHint: "",
    correctAns: ["Universal API Management (UAPIM)"],
    wrongAns: ["Anypoint Analytics", "Anypoint Runtime Fabric", "Anypoint DataGraph"]
  },
  {
    questionText: `Your company wants to replace its legacy integration approach. The primary driver behind this decision is the current method’s lack of scalability, agility, and its rigid structure that stifles rapid innovation. Which legacy integration approach is the company most likely trying to move away from?`,
    questionHint: "",
    correctAns: ["Point-to-Point Integration"],
    wrongAns: ["Service Oriented Architecture (SOA)", "API-led Connectivity", "Hybrid Integration"]
  },
  {
    questionText: `You work as an integration consultant for XYZ Corp, a global retail company. They want to build a solution where their online store, inventory system, and CRM communicate seamlessly. When a customer places an order online, the inventory should be updated, and the CRM should register the sale against the customer’s record. What fundamental integration use cases are needed to achieve this end-to-end solution?`,
    questionHint: "",
    correctAns: ["Orchestration and Transformation"],
    wrongAns: ["Data Replication and Synchronization", "Broadcast and Aggregation", "API Orchestration and Synchronization"]
  },
  {
    questionText: `A financial organization, with decades of operational history, has multiple old systems in place. The company wants to integrate a modern online payment gateway without replacing their existing systems. They are considering integration approaches to keep the old systems while benefiting from the new gateway. Which integration approach describes this scenario?`,
    questionHint: "",
    correctAns: ["Hybrid Integration"],
    wrongAns: ["Greenfield Integration", "Point-to-Point Integration", "Big Bang Integration"]
  },
  {
    questionText: `During the IT team’s monthly review at TechFusion Corp, they identified challenges with the current integration method they have in place. The approach tends to have an increased total cost of ownership (TCO), with every system change leading to multiple adjustments in integration touchpoints. What integration approach is TechFusion Corp most likely using?`,
    questionHint: "",
    correctAns: ["Point-to-Point Integration"],
    wrongAns: ["Microservices Architecture", "Event-Driven Architecture (EDA)", "API-led Connectivity"]
  },
  {
    questionText: `Sophia, an API developer, wants to ensure that she follows a methodical approach to design, test, deploy, and monitor her APIs. She is also keen on having a centralized place where her team can collaborate, discover reusable assets, and ensure that they meet the organizational standards. Which MuleSoft product can assist Sophia in her objectives?`,
    questionHint: "",
    correctAns: ["Anypoint Exchange"],
    wrongAns: ["Anypoint Studio", "Anypoint MQ", "Anypoint Scheduler"]
  },
  {
    questionText: `A finance firm needs to integrate their SQL database with a cloud-based analytics tool. They require a solution that can handle complex data transformations during this integration. Which characteristic of Anypoint Connectors would be most beneficial in this scenario?`,
    questionHint: "",
    correctAns: ["DataWeave transformation support"],
    wrongAns: ["API lifecycle management capabilities", "Drag-and-drop interface for design", "Built-in OAuth authentication"]
  },
  {
    questionText: `Linda, an IT strategist, is recommending MuleSoft’s methodology to address the persistent IT delivery gap her company has been grappling with. What core strategy does MuleSoft advocate to bridge this gap?`,
    questionHint: "",
    correctAns: ["Implementing an API-led connectivity approach to foster reusability and agility"],
    wrongAns: ["Prioritizing the shift to a fully cloud-based infrastructure", "Focusing on adopting the latest programming languages and tools", "Reducing IT projects to only those that have a direct monetary return"]
  },
  {
    questionText: `A healthcare company needs to maintain electronic health records (EHR) for its patients. Due to strict healthcare regulations, they are required to store sensitive patient data within the country’s borders. However, for their global research partners, they need certain non-sensitive datasets available worldwide. Which deployment architecture should the company opt for to fulfill these requirements?`,
    questionHint: "",
    correctAns: ["Hybrid Deployment"],
    wrongAns: ["Pure Cloud Deployment", "On-Premise Deployment", "Decentralized Deployment"]
  },
  {
    questionText: `A large e-commerce company is revamping its decade-old platform. They have a single codebase handling everything from user authentication, inventory management, payment processing, to shipment tracking. The company is finding it increasingly difficult to deploy changes, maintain stability, and onboard new developers. They are considering a shift in their application architecture. Which approach would be most suitable for them to address these challenges?`,
    questionHint: "",
    correctAns: ["Decompose the platform into microservices based on business capabilities"],
    wrongAns: ["Migrate to a more modern monolithic architecture", "Adopt a hybrid model, combining both microservices and monolithic traits", "Enhance the existing platform by adding more features to the monolith"]
  },
  {
    questionText: `Carlos, a CTO, wants to gain insight into the real-time API traffic within his organization. He wishes to analyze the performance, identify errors, and get detailed analytics of the APIs in deployment. Which component of the Anypoint Platform should Carlos leverage to achieve this?`,
    questionHint: "",
    correctAns: ["Anypoint Monitoring"],
    wrongAns: ["Anypoint Runtime Manager", "Anypoint Studio", "Anypoint Connector DevKit"]
  },
  {
    questionText: `A large multinational company is planning to modernize its IT landscape. While they have various legacy systems in place, they’re also adopting cloud-based solutions. They want an approach that allows components to be reused, ensuring flexibility and rapid development. Which integration approach might they find limiting due to potential lack of reusability?`,
    questionHint: "",
    correctAns: ["Point-to-Point Integration"],
    wrongAns: ["Event-Driven Architecture (EDA)", "API-led Connectivity", "Microservices Architecture"]
  },
  {
    questionText: `FitTrek, a fitness app company, wishes to integrate with various wearable device platforms to fetch fitness data and provide a consolidated report to the user. This report will use data like heart rate, steps taken, and calories burned, which may come from different wearables. Which integration use cases best suit the requirement?`,
    questionHint: "",
    correctAns: ["Aggregation and Transformation"],
    wrongAns: ["Broadcast and Transformation", "Orchestration and Synchronization", "Data Replication and Broadcast"]
  },
  {
    questionText: `During a project review meeting, team members discussed the increasing challenges they faced in meeting business demands with their IT capabilities. The term “IT delivery gap” was introduced. Which of the following best defines the concept of the IT delivery gap?`,
    questionHint: "",
    correctAns: ["The disparity between IT\'s capability to deliver projects and the business\'s demand for them"],
    wrongAns: ["The amount of time it takes to deliver an IT project", "The difference in the versions of software between development and production environments", "The budgetary difference between what IT projects cost and the funds allocated"]
  }
];

questionLists
  ? questionLists.push(...questions05)
  : (questionLists = questions05);
