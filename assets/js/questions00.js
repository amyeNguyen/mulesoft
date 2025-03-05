// SAP Certified Development Associate - SAP Fiori Application Developer - Full _ ERPPrep(20).PDF
const questions00 = [
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
    questionText: `How can API-led connectivity help an enterprise close its IT delivery gap?`,
    questionHint: "",
    correctAns: ["APIs facilitate the production and consumption of reusable technology assets"],
    wrongAns: ["APIs provide a common language for IT to document business requirements","APIs create a Center for Enablement (C4E)","APIs process data more efficiently than point-to-point integrations"]
    },{
    questionText: `According to MuleSoft's API-led connectivity approach, which architecture should an organization adopt to increase the consumption and reuse of its technology assets?`,
    questionHint: "",
    correctAns: ["A multi-tier API architecture"],
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
    questionText: `An IT integration team is following MuleSoft's recommended product-centric API lifecycle. What are the steps that the team follows within the Implementation phase of the lifecycle?`,
    questionHint: "",
    correctAns: ["Build, Test"],
    wrongAns: ["Design, Test","Design, Deploy","Build, Monitor"]
    },{
    questionText: `Which role is primarily responsible for guiding implementation teams on choosing components and patterns to use in the detailed design and implementation of an integration solution as part of a typical MuleSoft integration project?`,
    questionHint: "",
    correctAns: ["Integration Architect"],
    wrongAns: ["API Designer","Operations","Technical Project Manager"]
    },{
    questionText: `An IT team must retain administrative access to the operating system of the virtual machines that run its on-premises applications. Which cloud computing service model allows the team to continue to meet this access requirement if the applications move to the cloud without modification?`,
    questionHint: "",
    correctAns: ["Infrastructure as a Service (IaaS)"],
    wrongAns: ["Platform as a Service (PaaS)","Software as a Service (SaaS)","Containers as a Service (CaaS)"]
    },{
    questionText: `Section 2: Recognize and interpret essential integration concepts and terminology`,
    questionHint: "", correctAns: ["OK"], wrongAns: []
    },{
    questionText: `A system administrator increases the memory allocated to a virtual machine that runs a Mule application to decrease the amount of time the application takes to process large files. Which scalability option is the administrator implementing?`,
    questionHint: "",
    correctAns: ["Vertical"],
    wrongAns: ["Horizontal","Reverse","Spiral"]
    },{
    questionText: ` An organization receives daily marketing data sets from a partner in a comma-separated values (CSV) file format. Which protocol fulfills the requirement from IT security that these data sets must be encrypted during transmission by default without including another encryption method?`,
    questionHint: "",
    correctAns: ["Secure File Transfer Protocol (SFTP)"],
    wrongAns: ["Hypertext Transfer Protocol (HTTP)","Lightweight Directory Access Protocol (LDAP)","Simple Mail Transport Protocol (SMTP)"]
    },{
    questionText: ` An API client invokes the getUser method of a SOAP web service. What is an example of a valid entry in the SOAP Body element of the response message from the web service?`,
    questionHint: "",
    correctAns: ["<m:Username>Astro</m:Username>"],
    wrongAns: ["{ \"Username\": \"Astro\" }","{ \"m:Username\": \"Astro }","Username: Astro"]
    },{
    questionText: ` While logging in to Anypoint Platform, providing a password followed by a verification code is known as what type of authentication?`,
    questionHint: "",
    correctAns: ["Multi-factor authentication"],
    wrongAns: ["Biometric authentication","Token-based authentication","OAuth 2.0 authentication"]
    },{
    questionText: ` Which DataWeave expression parses the name "Astro" from the following resource in a Mule message created by an HTTP listener? http://www.example.com/developers?name=Astro`,
    questionHint: "",
    correctAns: ["attributes.queryParams.name"],
    wrongAns: ["attributes.headers.name","attributes.uriParams.name","attributes.method.name"]
    },{
    questionText: ` In a typical REST request, which component processes an API invocation?`,
    questionHint: "",
    correctAns: ["API implementation"],
    wrongAns: ["API client","API developer","API specification"]
    },{
    questionText: ` An API designer must use Anypoint Platform to create a specification for an event-driven API with two messaging channels that uses Kafka as the underlying transport technology. According to MuleSoft, which type of API specification is most suitable to meet these requirements?`,
    questionHint: "",
    correctAns: ["AsyncAPI"],
    wrongAns: ["WSDL","OAS","RAML"]
    },{
    questionText: `Section 3: Recognize common integration problems, use cases, and technical solutions`,
    questionHint: "", correctAns: ["OK"], wrongAns: []
    },{
    questionText: ` An organization needs to procure an enterprise software system to improve personnel, benefits, and payroll administration. Which category of enterprise software addresses these functional areas, when used for its typical and intended purpose?`,
    questionHint: "",
    correctAns: ["Human Capital Management (HCM)"],
    wrongAns: ["Enterprise Resource Planning (ERP)","Customer Relationship Management (CRM)","IT Service Management (ITSM)"]
    },{
    questionText: ` According to MuleSoft, which integration approach is more likely to form tightly coupled connections between components and introduce single points of failure?`,
    questionHint: "",
    correctAns: ["Point-to-point"],
    wrongAns: ["EAI","SOA","Microservices"]
    },{
    questionText: ` An organization that uses Salesforce as its system of record for all customer data has acquired another company that uses a legacy CRM system. The organization must perform an initial one-time migration of customer accounts from the legacy CRM to Salesforce. After the migration, some applications from the acquired company must continue to create new customer accounts in the legacy CRM until the applications can all be updated to use Salesforce as the system of record. Consequently, the organization\'s IT team must create an integration between the legacy CRM and Salesforce to keep the customer account data consistent until the legacy CRM is retired. Which two fundamental integration use cases does the organization need to deliver to provide an end-to-end solution for this business scenario?`,
    questionHint: "(Choose two.)",
    correctAns: ["Bulk or batch data movement","Data sync between applications"],
    wrongAns: ["Sharing data with external partners","User interface integration","Broadcasting events"]
    },{
    questionText: ` An IT team must integrate a legacy application that is only accessible through a graphical user interface running on desktop computers. According to MuleSoft, which technology can the team use to integrate the legacy application\'s data with another system until an appropriate programmatic interface is available?`,
    questionHint: "",
    correctAns: ["Robotic Process Automation"],
    wrongAns: ["API Management","Electronic Data Interchange","NoSQL"]
    },{
    questionText: ` After completing the acquisition of a subsidiary, an organization must quickly create a solution to keep customer records synchronized between two different cloud-based CRM systems using APIs. Which integration technology, when used for its intended purpose, should the organization select to accomplish this objective if all other relevant factors are equal? `,
    questionHint: "",
    correctAns: ["Integration Platform as a Service (iPaaS)"],
    wrongAns: ["API Management (APIM)","Electronic Data Interchange (EDI)","Extract Transform Load (ETL)"]
    },{
    questionText: ` An insurance company uses an AS400 system to administer its life insurance, and two database-backed web applications to administer its life and health insurance business. Its Business Intelligence team needs to analyze terabytes of data from these various systems on a monthly basis to determine trends based on customers\' purchasing decisions. Which integration technology, when used for its typical and intended purpose, meets the requirement to aggregate large volumes of data directly from these different systems?`,
    questionHint: "",
    correctAns: ["ETL Platforms"],
    wrongAns: ["APIs or Remote Procedure Invocation","Robotic Process Automation","Managed File Transfers"]
    },{
    questionText: ` According to MuleSoft, which system integration term describes the data that is sent between two systems as part of an interaction?`,
    questionHint: "",
    correctAns: ["Message"],
    wrongAns: ["Variable","Memory","Specification"]
    },{
    questionText: `Section 4: Explain the common technical complexities and patterns`,
    questionHint: "", correctAns: ["OK"], wrongAns: []
    },{
    questionText: ` An organization has a requirement that any changes to customer data in its Salesforce system must be reflected in all other systems holding customer data. An integration application sends a single customer address change notification to each of these other systems. According to MuleSoft, which system integration interaction pattern does this integration application implement?`,
    questionHint: "",
    correctAns: ["Multicast"],
    wrongAns: ["Stream","Batch","Aggregation"]
    },{
    questionText: ` A commodity trading organization has developed a multi-tier API portfolio. The organization also developed a web application designed to show the prices of a commodity across different markets. The web application calls an Experience API, which then consumes commodity pricing data from three independent market APIs. The Experience API combines the commodity pricing data and returns it to the web application. The combining of data in this way is an example of which type of interaction composition pattern?`,
    questionHint: "",
    correctAns: ["Aggregation"],
    wrongAns: ["Orchestration","Choreography","Orchestrated aggregation"]
    },{
    questionText: ` Which approach would a MuleSoft architect recommend if an enterprise wanted to create new high-quality APIs in a consistent and repeatable way?`,
    questionHint: "",
    correctAns: ["API design first"],
    wrongAns: ["API deployment first","API code first","API implementation first"]
    },{
    questionText: ` What is observability in Anypoint Platform?`,
    questionHint: "",
    correctAns: ["A comprehensive set of capabilities such as logging, analytics, and monitoring"],
    wrongAns: ["A set of practices that combines software development and IT operations","Tooling for creating visualization around continuous integration and continuous delivery practices","The ability to query Exchange assets by filtering multiple criteria and returning only the information needed"]
    },{
    questionText: ` A developer deploys a Mule application to a CloudHub 2.0 shared space. Which cloud computing deployment model does this scenario represent, according to the National Institute of Standards and Technology (NIST)?`,
    questionHint: "",
    correctAns: ["Public cloud"],
    wrongAns: ["Private cloud","Hybrid cloud","Shared cloud"]
    },{
    questionText: ` According to MuleSoft, which implementation characteristic most accurately describes the intent of a microservices application architecture?`,
    questionHint: "",
    correctAns: ["Core business capabilities are implemented as multiple services and encapsulated in APIs"],
    wrongAns: ["Collaborating services are implemented and packaged using a common development platform","Collaborating applications are implemented using a lightweight API gateway (for example, Envoy)","Collaborating services are implemented using a single development stack (for example, Java EE, or .NET)"]
    },{
    questionText: ` A platform architect includes both an API gateway and a service mesh in the architecture of a distributed application for communication management. Which type of communication management does an API gateway typically perform in this architecture?`,
    questionHint: "",
    correctAns: ["Management of API communication between external API clients and the application"],
    wrongAns: ["Management of API communication between services within the application","Management of API communication between the servers hosting the application","Management of API communication between the Kubernetes pods running the application"]
    },{
    questionText: `Section 5: Describe the components and benefits of Anypoint Platform for system integration`,
    questionHint: "", correctAns: ["OK"], wrongAns: []
    },{
    questionText: ` Which Anypoint Platform component is used to author API specifications?`,
    questionHint: "",
    correctAns: ["API Designer"],
    wrongAns: ["API Proxy","Exchange","API Manager"]
    },{
    questionText: ` Which additional productivity benefit does Anypoint Exchange offer to an integration developer who is creating a Mule application that consumes an API using a REST API specification published in Exchange?`,
    questionHint: "",
    correctAns: ["Exchange transparently converts a REST API specification to a Mule connector"],
    wrongAns: ["Exchange transparently converts a REST API specification to an API gateway","Exchange transparently converts a REST API specification to an AsyncAPI specification","Exchange transparently converts a REST API specification to an API policy"]
    },{
    questionText: ` Which Anypoint Platform plane does Anypoint Runtime Manager belong to?`,
    questionHint: "",
    correctAns: ["Control Plane"],
    wrongAns: ["Runtime Plane","Data Plane","Application Plane"]
    },{
    questionText: ` Which Anypoint Platform runtime plane deployment option can be hosted on customer-managed infrastructure in a private cloud?`,
    questionHint: "",
    correctAns: ["Anypoint Runtime Fabric"],
    wrongAns: ["CloudHub Shared Space","CloudHub Private Space","AWS GovCloud"]
    },{
    questionText: ` A DevOps team needs to automate the application of API policies to production API instances managed by Anypoint Platform as part of a CI/CD pipeline. Which three Anypoint Platform components, when used for their typical and intended purposes, could the team use in its automation scripts to achieve this requirement?`,
    questionHint: "(Choose three.)",
    correctAns: ["API Manager API","Anypoint CLI","Access Management API"],
    wrongAns: ["API Catalog CLI","MuleSoft RPA","Runtime Manager API"]
    },{
    questionText: ` A developer on a MuleSoft integration project is building an application using Anypoint Studio and must use custom Java code to transform XML data from an API response into a JSON formatted file. According to MuleSoft best practices, why should the developer use DataWeave to translate the JSON formatted data to XML?`,
    questionHint: "",
    correctAns: ["DataWeave scripts can directly convert XML to JSON without any Java code"],
    wrongAns: ["DataWeave scripts can annotate objects to directly call out to Java libraries that convert XML to JSON","DataWeave can call a REST service to call Java libraries that convert XML to JSON ","DataWeave scripts can include JavaScript code to convert XML to JSON without any Java code"]
    },{
    questionText: ` Which Exchange asset type represents a WSDL file that specifies an API?`,
    questionHint: "",
    correctAns: ["SOAP APIs"],
    wrongAns: ["Rulesets","AsyncAPI Specifications","API Spec Fragments"]
    },{
    questionText: `Section 6: Describe the components and benefits of Anypoint Platform for API management`,
    questionHint: "", correctAns: ["OK"], wrongAns: []
    },{
    questionText: ` Which Anypoint Platform component enforces API best practices and compliance requirements?`,
    questionHint: "",
    correctAns: ["API Governance"],
    wrongAns: ["API Manager","API Community Manager","Anypoint Exchange"]
    },{
    questionText: ` Which three Anypoint Platform components together enable the sharing, application, and enforcement of rules for API design best practices?`,
    questionHint: "(Choose three.)",
    correctAns: ["API Governance","Exchange","API Designer"],
    wrongAns: ["API Manager","API Community Manager","Runtime Manager"]
    },{
    questionText: ` What is a typical productivity advantage of using Anypoint Platform to both design and govern an API?`,
    questionHint: "",
    correctAns: ["Compliance violations are discovered and resolved earlier"],
    wrongAns: ["Compliance alerts can be customized","Compliance violations are centrally logged and audited","Compliance rules can be enforced at runtime"]
    },{
    questionText: ` What advantage does an API-led approach to system integration using Anypoint Platform offer over a point-to-point integration using custom code?`,
    questionHint: "",
    correctAns: ["Reuse of integration assets at greater scale"],
    wrongAns: ["More programming language options for API implementations","Tighter coupling of systems","A single-tier API architecture"]
    }
  ];

questionLists
  ? questionLists.push(questions00)
  : (questionLists = [questions00]);
