// ML_Associate_Practise_2.txt
const questions02 = [
  {
    questionText: `Liam, an integration architect at NetFusion Inc., wants to implement a DevOps practice that will allow his team to manage and provision the infrastructure needed for their MuleSoft projects using version-controlled scripts. By doing so, they aim to achieve consistent and repeatable deployments across environments. Which DevOps practice is Liam focusing on?`,
    questionHint: "",
    correctAns: ["Infrastructure as Code (IaC)"],
    wrongAns: ["Continuous Monitoring", "Continuous Integration (CI)", "Configuration Management"]
  },
  {
    questionText: `An e-commerce platform consolidates product reviews from multiple third-party vendors and presents them on a single product page. These reviews are fetched from various sources, combined, and then displayed together. What composition pattern is predominantly at play in this system?`,
    questionHint: "",
    correctAns: ["Consolidation"],
    wrongAns: ["Choreography", "Orchestration", "Parallel Processing"]
  },
  {
    questionText: `A financial firm needs to compute risk analysis reports for a vast array of stocks every evening. Due to the sheer volume of stocks, they process the risk analysis for each stock simultaneously to save time. Which composition pattern is the firm using for this task?`,
    questionHint: "",
    correctAns: ["Parallel Processing"],
    wrongAns: ["Choreography", "Consolidation", "Orchestration"]
  },
  {
    questionText: `Emily, an integration architect, is trying to enforce a standard set of logging policies across all the APIs in her organization. She wants a reusable asset from the Anypoint Exchange that she can apply to multiple APIs to enforce these logging standards. What type of reusable asset should Emily utilize?`,
    questionHint: "",
    correctAns: ["API Policy"],
    wrongAns: ["Custom Module", "API Specification", "Example"]
  },
  {
    questionText: `GreenTech Solutions, a sustainability tech firm, currently uses a point-to-point integration method. They often face issues with system downtimes when adding new integrations. They’ve heard about MuleSoft’s API-led connectivity and wonder how it might address their challenges. Which advantage of API-led connectivity would be most directly beneficial for GreenTech Solutions?`,
    questionHint: "",
    correctAns: ["Reduces dependencies by making integrations modular, thus minimizing system-wide downtimes"],
    wrongAns: ["Eliminates the need for data storage", "Makes all integrations function without any APIs", "Requires a complete overhaul of the existing IT infrastructure to establish any integration"]
  },
  {
    questionText: `An e-commerce platform wants to integrate with a third-party payment gateway. Whenever a customer makes a payment, the details should be logged in the e-commerce platform’s database and the payment processed via the gateway. If the gateway confirms the payment, the e-commerce platform should update the order status. Which integration constituents are crucial in this solution?`,
    questionHint: "",
    correctAns: ["E-commerce API, transformation logic, payment gateway API, and message broker"],
    wrongAns: ["Payment gateway API, logging mechanism, direct database link, and batch processing", "E-commerce API, real-time streaming, payment gateway API, and FTP server", "Payment gateway database, FTP file transfers, e-commerce database, and batch processing"]
  },
  {
    questionText: `An e-commerce platform allows sellers to list products. When a product is listed, the platform automatically posts about the product on social media, sends emails to subscribers, and updates the internal inventory, all without any centralized coordination. Services know when and how to act based on specific events. Which composition pattern is primarily at play here?`,
    questionHint: "",
    correctAns: ["Choreography"],
    wrongAns: ["Aggregation", "Orchestration", "Synchronization"]
  },
  {
    questionText: `A large retailer decides to revamp its e-commerce system. The software team proposes to start with an API specification before delving into coding. What is the PRIMARY reason for starting with the API specification?`,
    questionHint: "",
    correctAns: ["It acts as a blueprint for developers, ensuring consistent understanding and expectations"],
    wrongAns: ["It ensures the application\'s user interface is attractive", "It reduces the need for software testing phases", "It guarantees faster development of the main application"]
  },
  {
    questionText: `BetaTech, a tech firm, has multiple teams working on a large-scale integration project. As the deadline approaches, they find that different teams have made different assumptions about the project requirements, leading to inconsistencies in deliverables. What might have been a root cause for this issue?`,
    questionHint: "",
    correctAns: ["Poor communication and lack of proper documentation"],
    wrongAns: ["Over-reliance on automated testing tools", "Inclusion of too many experienced members in the team", "Having a dedicated project manager"]
  },
  {
    questionText: `You are tasked with designing a RESTful API for a new MuleSoft application. The product manager wants to ensure that the application can allow clients to read, create, update, and delete resources. Which HTTP methods should be implemented to achieve this functionality?`,
    questionHint: "",
    correctAns: ["GET, POST, PUT, DELETE"],
    wrongAns: ["GET, POST, REMOVE, ADD", "FETCH, SAVE, UPDATE, DELETE", "READ, WRITE, UPDATE, DELETE"]
  },
  {
    questionText: `A music streaming service offers on-demand playback of songs to its subscribers. The system tracks each song played by users in real-time. At the end of each month, the service compiles a list of top songs based on user preferences. Artists can also receive feedback about their songs from multiple subscribers. Which interaction patterns are being utilized by this system?`,
    questionHint: "",
    correctAns: ["Stream, batch, and one-way"],
    wrongAns: ["Request-reply, batch, and multicast", "Stream, request-reply, and multicast", "One-way, batch, and multicast"]
  },
  {
    questionText: `Your company uses a cloud-based CRM system and an on-premises ERP system. The goal is to ensure that when a new customer is added to the CRM, the same customer details are also added to the ERP system. An integration solution has been proposed to automatically sync the customer data between the two systems. Which components should you expect to be part of this integration solution?`,
    questionHint: "",
    correctAns: ["CRM API, transformation logic, ERP API, and a message broker"],
    wrongAns: ["CRM API, ERP API, and a file-based data lake", "CRM database, direct database link, and ERP database", "FTP server, ERP API, and cloud storage"]
  },
  {
    questionText: `A travel booking system integrates with various services such as flights, hotels, and car rentals. When a user requests a complete travel package, the system first checks flight availability, once confirmed, it moves on to hotel booking, and after securing the hotel, it proceeds to car rental. Each step waits for a confirmation from the previous one. Which composition pattern represents this process?`,
    questionHint: "",
    correctAns: ["Orchestration"],
    wrongAns: ["Aggregation", "Choreography", "Transformation"]
  },
  {
    questionText: `A healthcare organization wants to sync patient records between their new cloud-based system and an older on-premises system. The sync should occur at regular intervals throughout the day, ensuring both systems have up-to-date patient data. Which integration approach is best suited for this need?`,
    questionHint: "",
    correctAns: ["Polling with API-led Connectivity"],
    wrongAns: ["Direct Database Integration", "Event-driven Architecture (EDA)", "Point-to-Point Integration"]
  },
  {
    questionText: `BlueSky Airlines, a major airline operator, is looking to improve its partner integrations for better real-time data sharing among its numerous affiliates and partners. They are considering MuleSoft’s API-led connectivity as a solution. How would this approach benefit BlueSky compared to a classic enterprise service bus (ESB) method?`,
    questionHint: "",
    correctAns: ["Facilitates swift and scalable partner integrations by exposing reusable and well-defined APIs"],
    wrongAns: ["It would restrict data sharing only within the organization, ensuring data security", "Allows for real-time adjustments by using a monolithic integration pattern", "It forces a single communication protocol for all integrations, simplifying the process"]
  },
  {
    questionText: `WhiteWave Corp, a global financial firm, wants to swiftly adapt to market changes and introduce new features without impacting their core systems. They are evaluating MuleSoft’s API-led connectivity approach against traditional point-to-point integration. Which advantage of API-led connectivity with Anypoint Platform is MOST relevant to WhiteWave Corp’s needs?`,
    questionHint: "",
    correctAns: ["Enables agility and flexibility by using reusable APIs, allowing rapid adaptation without affecting core systems"],
    wrongAns: ["It completely replaces core systems with a new infrastructure", "It mandates the use of a specific set of third-party tools", "Requires integration to be hardcoded for each use case, ensuring unique solutions"]
  },
  {
    questionText: `A global e-commerce company plans to launch a new feature that allows customers to get real-time notifications when an out-of-stock item becomes available again. They need to ensure immediate updates without causing too much overhead. Which integration technology is best suited for this scenario?`,
    questionHint: "",
    correctAns: ["Webhooks"],
    wrongAns: ["Batch Processing", "Point-to-Point Integration", "FTP Transfer"]
  },
  {
    questionText: `A global financial institution is looking to centralize its logging mechanism. Currently, they have disparate systems sending logs in various formats. They need an integration solution that can handle high volumes of data, normalize the diverse log formats, and send them to a centralized logging system in real-time. Which integration technology best fits this scenario?`,
    questionHint: "",
    correctAns: ["Real-time streaming with a message broker"],
    wrongAns: ["FTP-based file transfer", "Batch processing with nightly runs", "Direct API calls for each log entry"]
  },
  {
    questionText: `A global e-commerce platform allows customers to order products from various vendors. When a customer places an order, the system gathers available inventory details from multiple vendors, calculates the overall best price (including shipping and taxes), and finally confirms the order with the selected vendor. Which composition pattern best describes this process?`,
    questionHint: "",
    correctAns: ["Aggregation"],
    wrongAns: ["Orchestration", "Choreography", "Decoupling"]
  },
  {
    questionText: `James is testing a MuleSoft RESTful web service. When he sends a request to retrieve information about a specific product, the server sends a response indicating that the resource was not found. What HTTP Status Code is the server most likely using to indicate this?`,
    questionHint: "",
    correctAns: ["404 Not Found"],
    wrongAns: ["200 OK", "500 Internal Server Error", "401 Unauthorized"]
  },
  {
    questionText: `Sophia, a lead integration developer at CloudStream Technologies, is setting up a DevOps pipeline for her team’s MuleSoft projects. She wants to ensure that each code change is automatically built and tested before it’s merged. This process aims to catch any integration or unit test failures early. What is the DevOps practice she is implementing?`,
    questionHint: "",
    correctAns: ["Continuous Integration (CI)"],
    wrongAns: ["Continuous Deployment (CD)", "Infrastructure as Code (IaC)", "Automated Configuration Management"]
  },
  {
    questionText: `A finance company wants to aggregate monthly transaction data from various sources, process them together, and then generate comprehensive reports at the end of each month. Which integration technology would be most appropriate to handle this?`,
    questionHint: "",
    correctAns: ["Batch Processing"],
    wrongAns: ["Real-time API-led Connectivity", "Event-driven Architecture (EDA)", "Direct Database Integration"]
  },
  {
    questionText: `Sarah is building a RESTful web service using MuleSoft. She needs to send meta-information about the request, like the format of the data, the authentication token, and the accepted response format. Which HTTP component should Sarah use to send this meta-information?`,
    questionHint: "",
    correctAns: ["HTTP Headers"],
    wrongAns: ["HTTP Body", "HTTP Status Codes", "HTTP URI"]
  },
  {
    questionText: `A retail chain needs to synchronize inventory data between its various brick-and-mortar stores and its online e-commerce platform at the end of each business day. Which integration technology would best fulfill this requirement?`,
    questionHint: "",
    correctAns: ["Batch Processing"],
    wrongAns: ["Point-to-Point Integration", "Real-time API-led Connectivity", "Event-driven Architecture (EDA)"]
  },
  {
    questionText: `A retail company has multiple brick-and-mortar stores and an online e-commerce platform. They want an integration solution where any update to product availability in a store immediately reflects online. Which technology is most appropriate?`,
    questionHint: "",
    correctAns: ["Real-time API-led Connectivity"],
    wrongAns: ["FTP Transfer", "Batch Processing", "Direct Database Query"]
  },
  {
    questionText: `A pharmaceutical company has developed an integration solution to connect its laboratory equipment to a centralized system for real-time data monitoring and analysis. The solution fetches data from various devices, transforms it into a standard format, queues the data for processing, and then pushes it to the central system. Which combination of components best describes the integration constituents?`,
    questionHint: "",
    correctAns: ["Device APIs, transformation logic, message broker, and central system API"],
    wrongAns: ["Device SDKs, transformation logic, API gateway, and a relational database", "Device APIs, batch processing mechanism, transformation logic, and a file system", "Device databases, FTP server, data lake, and direct database link"]
  },
  {
    questionText: `Samantha, a MuleSoft developer, wants to kick-start her new integration project by utilizing a pre-built integration logic from Anypoint Exchange that links a CRM and an ERP system together. This would allow her to have a foundational logic on which she can further customize. Which type of reusable asset should Samantha search for in the Anypoint Exchange?`,
    questionHint: "",
    correctAns: ["Template"],
    wrongAns: ["API Fragment", "Example", "Connector"]
  },
  {
    questionText: `A weather monitoring system periodically collects data from different sensors placed in various regions. Every hour, this data is sent to a centralized server for analysis. Users can also query the server to get the current weather conditions for a specific region. When there is a prediction for severe weather, alerts are sent simultaneously to local authorities, news stations, and emergency services. Which interaction patterns does this system employ?`,
    questionHint: "",
    correctAns: ["Batch, request-reply, and multicast"],
    wrongAns: ["Stream, request-reply, and multicast", "One-way, request-reply, and stream", "Batch, one-way, and multicast"]
  },
  {
    questionText: `Lucas, an API designer, is aiming to create a set of APIs for his organization. Instead of writing every specification from scratch, he wants to use a pre-existing piece of RAML that defines certain standard elements that all his APIs would follow. What kind of reusable asset from the Anypoint Exchange would be the best fit for Lucas’s requirement?`,
    questionHint: "",
    correctAns: ["API Fragment"],
    wrongAns: ["Custom Module", "API Policy", "Connector"]
  },
  {
    questionText: `An e-commerce company is integrating its online platform with a third-party supplier to automate the ordering of low-stock items. The integration should ensure that when stock levels of a particular item drop below a certain threshold, an order is automatically placed with the supplier without manual intervention. Which approach is most suitable?`,
    questionHint: "",
    correctAns: ["Event-driven architecture (EDA) with webhooks"],
    wrongAns: ["Periodic database dumps to the supplier", "Scheduled FTP file transfers", "Direct database integration with the supplier\'s system"]
  },
  {
    questionText: `Anna, a lead integration developer at WebCore Systems, is planning to integrate a tool into her DevOps pipeline that will automate the process of building and deploying MuleSoft projects to various environments. This tool should also offer rollback capabilities in case of deployment failures. Which tool is most appropriate for this requirement?`,
    questionHint: "",
    correctAns: ["Jenkins"],
    wrongAns: ["Git", "Nagios", "Prometheus"]
  },
  {
    questionText: `A junior developer is designing a RESTful API for a MuleSoft application and wants to handle responses to clients. Which HTTP component provides status information about the request, indicating success, failure, or other information?`,
    questionHint: "",
    correctAns: ["HTTP Status Codes"],
    wrongAns: ["HTTP Headers", "HTTP Body", "HTTP Methods"]
  },
  {
    questionText: `GreenTech Innovations, a tech-driven sustainable solutions company, is considering integrating their applications and services. Their key objective is to quickly innovate and respond to evolving sustainability trends without compromising on existing solutions. Why might GreenTech opt for API-led connectivity with Anypoint Platform over traditional point-to-point integration?`,
    questionHint: "",
    correctAns: ["It emphasizes building modular and reusable APIs, promoting agility and rapid innovation without impacting existing systems"],
    wrongAns: ["API-led connectivity focuses on one-time-use, ensuring unique solutions for each project", "It enforces rewriting existing solutions, allowing for a fresh start", "The approach supports only a limited set of protocols, ensuring uniformity"]
  },
  {
    questionText: `You are consulting for a financial institution planning to offer a new online service. The project manager wants to jump directly into development, but you suggest starting with an API specification. What is the most compelling advantage of beginning with the API specification?`,
    questionHint: "",
    correctAns: ["It offers clarity on the service\'s interactions and interfaces before coding begins"],
    wrongAns: ["It offers immediate deployment of services without any delay", "It bypasses the need for team collaboration during development", "It reduces the cost of server infrastructure"]
  },
  {
    questionText: `Carlos, a MuleSoft developer, is working on a project that requires him to frequently integrate with a specific ERP system. Instead of building the connection logic from scratch every time, he wants to use a pre-defined component from the Anypoint Exchange that allows for quick integration with this system. What type of reusable asset should Carlos look for in the Anypoint Exchange?`,
    questionHint: "",
    correctAns: ["Connector"],
    wrongAns: ["API Fragment", "API Policy", "Template"]
  },
  {
    questionText: `Rebecca is working on a MuleSoft project where she needs to establish a connection to a third-party cloud storage service. She wants to find a reusable component in Anypoint Exchange that will allow her to integrate quickly with this specific system without creating a custom connection from scratch. Which type of reusable asset should she look for in Anypoint Exchange?`,
    questionHint: "",
    correctAns: ["Connector"],
    wrongAns: ["API Fragment", "Template", "Example"]
  },
  {
    questionText: `NexaRetail, an e-commerce giant, is in the process of enhancing customer experience. They often run promotional campaigns which necessitate quick changes in their application features. They’re considering MuleSoft’s API-led connectivity. Which attribute of API-led connectivity would assist NexaRetail in quickly rolling out these feature changes?`,
    questionHint: "",
    correctAns: ["Allows for agility by enabling adjustments at the Experience layer without altering underlying processes and systems"],
    wrongAns: ["The approach requires every system to communicate only through a central ESB", "Ensures that every change needs a comprehensive system testing", "It eliminates the need for software developers in the integration process"]
  },
  {
    questionText: `David, an integration specialist at GlobalTech, is in the process of selecting a tool that will allow his team to containerize their Mule applications so that they can ensure consistency across different environments. Which tool would best serve this purpose?`,
    questionHint: "",
    correctAns: ["Docker"],
    wrongAns: ["Bamboo", "Terraform", "Gradle"]
  },
  {
    questionText: `At CodeFlow Inc., the integration team wants to ensure that the code quality remains consistent and any vulnerabilities are promptly identified. They need a tool to automatically analyze their code base and identify potential issues. Which tool would best fit this requirement?`,
    questionHint: "",
    correctAns: ["SonarQube"],
    wrongAns: ["Maven", "Docker", "Ansible"]
  },
  {
    questionText: `TechUnicorn, a tech startup, is looking to develop APIs for its innovative solutions. The CTO suggests a “design-first” approach for API development. What is a KEY benefit of this approach?`,
    questionHint: "",
    correctAns: ["It allows stakeholders to provide feedback early in the process"],
    wrongAns: ["It prioritizes coding over design", "It eliminates the need for documentation", "It ensures that only senior developers are involved in the initial stages"]
  },
];

questionLists
  ? questionLists.push(...questions02)
  : (questionLists = questions02);
