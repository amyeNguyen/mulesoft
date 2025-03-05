{
questionText: `Section 1: Identify the roles, responsibilities, and lifecycle phases of a integration project`,
questionHint: "",
correctAns: ["OK"],    
wrongAns: []
},{
questionText: `What organizational deficiency is a common cause of IT project failure, according to MuleSoft's surveys of global IT leaders?`,
questionHint: "",
correctAns: ["Lack of enablement"],
wrongAns: ["Lack of project managers","Lack of recruiters","Lack of planning"]
},{
questionText: `How can API-led connectivity help an enterprise close its IT delivery gap?`
questionHint: "",
correctAns: ["APIs facilitate the production and consumption of reusable technology assets"],
wrongAns: ["APIs provide a common language for IT to document business requirements","APIs create a Center for Enablement (C4E)","APIs process data more efficiently than point-to-point integrations"]
},{
questionText: `According to MuleSoft's API-led connectivity approach, which architecture should an organization adopt to increase the consumption and reuse of its technology assets?`,
questionHint: "",
correctAns: ["A multi-tier API architecture",
wrongAns: ["A one-size-fits-all API architecture","A SOAP-based web services architecture","A monolithic API architecture"]
},{
questionText: `In which three areas is the MuleSoft Catalyst approach to delivery primarily focused?`,
questionHint: "(Choose three.)",
correctAns: ["A Organizational enablement","Technology delivery","Business outcomes"],
wrongAns: ["User acceptance testing","Anypoint Platform administration","Technology selection"]
},{
questionText: `An integration team is transitioning to DevOps principles. Which key DevOps practice should the team adopt to begin its transition to a DevOps approach?`,
questionHint: "",
correctAns: ["Continuous integration"],
wrongAns: ["Manual testing","Passive monitoring","Separation of development and operations"]
},{
questionText: `An IT integration team is following MuleSoft's recommended product-centric API lifecycle. What are the steps that the team follows within the Implementation phase of the lifecycle?`
questionHint: "",
correctAns: ["Build, Test"],
wrongAns: ["Design, Test","Design, Deploy","Build, Monitor"]
},{
7. Which role is primarily responsible for guiding implementation teams on choosing components and patterns to use in the detailed design and implementation of an integration solution as part of a typical MuleSoft integration project?
A Integration Architect
B API Designer
C Operations
D Technical Project Manager
8. An IT team must retain administrative access to the operating system of the virtual machines that run its on-premises applications. Which cloud computing service model allows the team to continue to meet this access requirement if the applications move to the cloud without modification?
A Infrastructure as a Service (IaaS)
B Platform as a Service (PaaS)
C Software as a Service (SaaS)
D Containers as a Service (CaaS)
Section 2: Recognize and interpret essential integration concepts and terminology
9. A system administrator increases the memory allocated to a virtual machine that runs a Mule application to decrease the amount of time the application takes to process large files. Which scalability option is the administrator implementing?
A Vertical
B Horizontal
C Reverse
D Spiral
10. An organization receives daily marketing data sets from a partner in a comma-separated values (CSV) file format. Which protocol fulfills the requirement from IT security that these data sets must be encrypted during transmission by default without including another encryption method?
A Secure File Transfer Protocol (SFTP)
B Hypertext Transfer Protocol (HTTP)
C Lightweight Directory Access Protocol (LDAP)
D Simple Mail Transport Protocol (SMTP)
11. An API client invokes the getUser method of a SOAP web service. What is an example of a valid entry in the SOAP Body element of the response message from the web service?
A <m:Username>Astro</m:Username>
B { "Username": "Astro" }
C { "m:Username": "Astro" }
D Username: Astro
12. While logging in to Anypoint Platform, providing a password followed by a verification code is known as what type of authentication?
A Multi-factor authentication
B Biometric authentication
C Token-based authentication
D OAuth 2.0 authentication
13. Which DataWeave expression parses the name "Astro" from the following resource in a Mule message created by an HTTP listener? http://www.example.com/developers?name=Astro
A attributes.queryParams.name
B attributes.headers.name
C attributes.uriParams.name
D attributes.method.name
14. In a typical REST request, which component processes an API invocation?
A API implementation
B API client
C API developer
D API specification
15. An API designer must use Anypoint Platform to create a specification for an event-driven API with two messaging channels that uses Kafka as the underlying transport technology. According to MuleSoft, which type of API specification is most suitable to meet these requirements?
A AsyncAPI
B WSDL
C OAS
D RAML
Section 3: Recognize common integration problems, use cases, and technical solutions
16. An organization needs to procure an enterprise software system to improve personnel, benefits, and payroll administration. Which category of enterprise software addresses these functional areas, when used for its typical and intended purpose?
A Human Capital Management (HCM)
B Enterprise Resource Planning (ERP)
C Customer Relationship Management (CRM)
D IT Service Management (ITSM)
17. According to MuleSoft, which integration approach is more likely to form tightly coupled connections between components and introduce single points of failure?
A Point-to-point
B EAI
C SOA
D Microservices
18. An organization that uses Salesforce as its system of record for all customer data has acquired another company that uses a legacy CRM system. The organization must perform an initial one-time migration of customer accounts from the legacy CRM to Salesforce. After the migration, some applications from the acquired company must continue to create new customer accounts in the legacy CRM until the applications can all be updated to use Salesforce as the system of record. Consequently, the organization's IT team must create an integration between the legacy CRM and Salesforce to keep the customer account data consistent until the legacy CRM is retired. Which two fundamental integration use cases does the organization need to deliver to provide an end-to-end solution for this business scenario?
Hint: (Choose two.)
A Bulk or batch data movement
B Data sync between applications
C Sharing data with external partners
D User interface integration
E Broadcasting events
19. An IT team must integrate a legacy application that is only accessible through a graphical user interface running on desktop computers. According to MuleSoft, which technology can the team use to integrate the legacy application's data with another system until an appropriate programmatic interface is available?
A Robotic Process Automation
B API Management
C Electronic Data Interchange
D NoSQL
20. After completing the acquisition of a subsidiary, an organization must quickly create a solution to keep customer records synchronized between two different cloud-based CRM systems using APIs. Which integration technology, when used for its intended purpose, should the organization select to accomplish this objective if all other relevant factors are equal? 
A Integration Platform as a Service (iPaaS)
B API Management (APIM)
C Electronic Data Interchange (EDI)
D Extract Transform Load (ETL)
21. An insurance company uses an AS400 system to administer its life insurance, and two database-backed web applications to administer its life and health insurance business. Its Business Intelligence team needs to analyze terabytes of data from these various systems on a monthly basis to determine trends based on customers' purchasing decisions. Which integration technology, when used for its typical and intended purpose, meets the requirement to aggregate large volumes of data directly from these different systems?
A ETL Platforms
B APIs or Remote Procedure Invocation
C Robotic Process Automation
D Managed File Transfers
22. According to MuleSoft, which system integration term describes the data that is sent between two systems as part of an interaction?
A Message
B Variable
C Memory
D Specification
Section 4: Explain the common technical complexities and patterns
23. An organization has a requirement that any changes to customer data in its Salesforce system must be reflected in all other systems holding customer data. An integration application sends a single customer address change notification to each of these other systems. According to MuleSoft, which system integration interaction pattern does this integration application implement?
A Multicast
B Stream
C Batch
D Aggregation
24. A commodity trading organization has developed a multi-tier API portfolio. The organization also developed a web application designed to show the prices of a commodity across different markets. The web application calls an Experience API, which then consumes commodity pricing data from three independent market APIs. The Experience API combines the commodity pricing data and returns it to the web application. The combining of data in this way is an example of which type of interaction composition pattern?
A Aggregation
B Orchestration
C Choreography
D Orchestrated aggregation
25. Which approach would a MuleSoft architect recommend if an enterprise wanted to create new high-quality APIs in a consistent and repeatable way?
A API design first
B API deployment first
C API code first
D API implementation first
26. What is observability in Anypoint Platform?
A A comprehensive set of capabilities such as logging, analytics, and monitoring
B A set of practices that combines software development and IT operations
C Tooling for creating visualization around continuous integration and continuous delivery practices
D The ability to query Exchange assets by filtering multiple criteria and returning only the information needed
27. A developer deploys a Mule application to a CloudHub 2.0 shared space. Which cloud computing deployment model does this scenario represent, according to the National Institute of Standards and Technology (NIST)?
A Public cloud
B Private cloud
C Hybrid cloud
D Shared cloud
28. According to MuleSoft, which implementation characteristic most accurately describes the intent of a microservices application architecture?
A Core business capabilities are implemented as multiple services and encapsulated in APIs
B Collaborating services are implemented and packaged using a common development platform
C Collaborating applications are implemented using a lightweight API gateway (for example, Envoy)
D Collaborating services are implemented using a single development stack (for example, Java EE, or .NET)
29. A platform architect includes both an API gateway and a service mesh in the architecture of a distributed application for communication management. Which type of communication management does an API gateway typically perform in this architecture?
A Management of API communication between external API clients and the application
B Management of API communication between services within the application
C Management of API communication between the servers hosting the application
D Management of API communication between the Kubernetes pods running the application
Section 5: Describe the components and benefits of Anypoint Platform for system integration
30. Which Anypoint Platform component is used to author API specifications?
A API Designer
B API Proxy
C Exchange
D API Manager
31. Which additional productivity benefit does Anypoint Exchange offer to an integration developer who is creating a Mule application that consumes an API using a REST API specification published in Exchange?
A Exchange transparently converts a REST API specification to a Mule connector
B Exchange transparently converts a REST API specification to an API gateway
C Exchange transparently converts a REST API specification to an AsyncAPI specification
D Exchange transparently converts a REST API specification to an API policy
32. Which Anypoint Platform plane does Anypoint Runtime Manager belong to?
A Control Plane
B Runtime Plane
C Data Plane
D Application Plane
33. Which Anypoint Platform runtime plane deployment option can be hosted on customer-managed infrastructure in a private cloud?
A Anypoint Runtime Fabric
B CloudHub Shared Space
C CloudHub Private Space
D AWS GovCloud
34. A DevOps team needs to automate the application of API policies to production API instances managed by Anypoint Platform as part of a CI/CD pipeline. Which three Anypoint Platform components, when used for their typical and intended purposes, could the team use in its automation scripts to achieve this requirement? (Choose three.)
A API Manager API
B Anypoint CLI
C Access Management API
D API Catalog CLI
E MuleSoft RPA
F Runtime Manager API
35. A developer on a MuleSoft integration project is building an application using Anypoint Studio and must use custom Java code to transform XML data from an API response into a JSON formatted file. According to MuleSoft best practices, why should the developer use DataWeave to translate the JSON formatted data to XML?
A DataWeave scripts can directly convert XML to JSON without any Java code
B DataWeave scripts can annotate objects to directly call out to Java libraries that convert XML to JSON
C DataWeave can call a REST service to call Java libraries that convert XML to JSON 
D DataWeave scripts can include JavaScript code to convert XML to JSON without any Java code
36. Which Exchange asset type represents a WSDL file that specifies an API?
A SOAP APIs
B Rulesets
C AsyncAPI Specifications
D API Spec Fragments
Section 6: Describe the components and benefits of Anypoint Platform for API management
37. Which Anypoint Platform component enforces API best practices and compliance requirements?
A API Governance
B API Manager
C API Community Manager
D Anypoint Exchange
38. Which three Anypoint Platform components together enable the sharing, application, and enforcement of rules for API design best practices? (Choose three.)
A API Governance
B Exchange
C API Designer
D API Manager
E API Community Manager
F Runtime Manager
39. What is a typical productivity advantage of using Anypoint Platform to both design and govern an API?
A Compliance violations are discovered and resolved earlier
B Compliance alerts can be customized
C Compliance violations are centrally logged and audited
D Compliance rules can be enforced at runtime
40. What advantage does an API-led approach to system integration using Anypoint Platform offer over a point-to-point integration using custom code?
A Reuse of integration assets at greater scale
B More programming language options for API implementations
C Tighter coupling of systems
D A single-tier API architecture