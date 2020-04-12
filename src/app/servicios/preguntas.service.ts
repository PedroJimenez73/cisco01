import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PreguntasService {

  preguntasMaster = 
    [
        {
            type: 'simple',
            pic: null,
            question: 'A receiving host computes the checksum on a frame and determines that the frame is damaged. The frame is then discarded. At which OSI layer did this happen?',
            answers: [
                'session', 
                'transport', 
                'network', 
                'data link', 
                'physical'
            ],
            corrects: ['D'],
            feedback: [
                'The Data Link layer provides the physical transmission of the data and handles error notification, network topology, and flow control. The Data Link layer formats the message into pieces, each called a data frame, and adds a customized header containing the hardware destination and source address. Protocols Data Unit (PDU) on Datalink layer is called frame. According to this question the frame is damaged and discarded which will happen at the Data Link layer.'
            ]
        },
        {
            type: 'multi',
            pic: null,
            question: 'Which three statements about RSTP are true? (Choose three)',
            answers: [
                'RSTP significantly reduces topology reconverging time after a link failure.',
                'RSTP expands the STP port roles by adding the alternate and backup roles.',
                'RSTP port states are blocking, discarding, learning, or forwarding.',
                'RSTP provides a faster transition to the forwarding state on point-to-point links than STP does.',
                'RSTP also uses the STP proposal-agreement sequence.',
                'RSTP uses the same timer-based process as STP on point-to-point links.',
            ],
            corrects: ['A', 'B', '', 'D', '', ''],
            feedback: [
                'One big disadvantage of STP is the low convergence which is very important in switched network. To overcome this problem, in 2001, the IEEE with document 802.1w introduced an evolution of the Spanning Tree Protocol: Rapid Spanning Tree Protocol (RSTP), which significantly reduces the convergence time after a topology change occurs in the network. While STP can take 30 to 50 seconds to transit from a blocking state to a forwarding state, RSTP is typically able to respond less than 10 seconds of a physical link failure. RSTP works by adding an alternative port and a backup port compared to STP. These ports are allowed to immediately enter the forwarding state rather than passively wait for the network to converge.',
                'RSTP bridge port roles:',
                '• Root port - A forwarding port that is the closest to the root bridge in terms of path cost',
                '•	Designated port - A forwarding port for every LAN segment',
                '•	Alternate port - A best alternate path to the root bridge. This path is different than using the root port. The alternative port moves to the forwarding state if there is a failure on the designated port for the segment.',
                '•	Backup port - A backup/redundant path to a segment where another bridge port already connects. The backup port applies only when a single switch has two links to the same segment (collision domain). To have two links to the same collision domain, the switch must be attached toa hub.',
                '•	Disabled port - Not strictly part of STP, a network administrator can manually disable a port',
            ]
        },
        {
            type: 'multi',
            pic: null,
            question: 'If IP routing is enabled, which two commands set the gateway of last resort to the default gateway? (Choose two)',
            answers: [
                'ip default-gateway 0.0.0.0',
                'ip route 172.16.2.1 0.0.0.0 0.0.0.0',
                'ip default-network 0.0.0.0',
                'ip default-route 0.0.0.0 0.0.0.0 172.16.2.1',
                'ip route 0.0.0.0 0.0.0.0 172.16.2.1',
            ],
            corrects: ['', '', 'C', '', 'E'],
            feedback: [
                'Both the "ip default-network" and "ip route 0.0.0.0 0.0.0.0 (next hop)" commands can be used to set the default gateway in a Cisco router',

            ]
        },
        {
            type: 'simple',
            pic: null,
            question: 'A router receives information about network 192.168.10.0/24 from multiple sources. What will the router consider the most reliable information about the path to that network?',
            answers: [
                'a directly connected interface with an address of 192.168.10.254/24', 
                'a static route to network 192.168.10.0/24', 
                'a RIP update for network 192.168.10.0/24', 
                'an OSPF update for network 192.168.0.0/16', 
                'a default route with a next hop address of 192.168.10.1',
                'a static route to network 192.168.10.0/24 with a local serial interface configured as the next hop',
            ],
            corrects: ['A'],
            feedback: [
                'When there is more than one way to reach a destination, it will choose the best one based on a couple of things. ',
                'First, it will choose the route that has the longest match; meaning the most specific route. So, in this case the /24 routes will be chosen over the /16 routes. Next, from all the /24 routes it will choose the one with the lowest administrative distance. Directly connected routes have an AD of 1 so this will be the route chosen.',
            ]
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which Cisco Catalyst feature automatically disables the port in an operational PortFast upon receipt of a BPDU?',
            answers: [
                'BackboneFast', 
                'UplinkFast', 
                'Root Guard', 
                'BPDU Guard', 
                'BPDU Filter',
            ],
            corrects: ['D'],
            feedback: [
                'We only enable PortFast feature on access ports (ports connected to end stations). But if someone does not know he can accidentally plug that port to another switch and a loop may occur when BPDUs are being transmitted and received on these ports. ',
                'With BPDU Guard, when a PortFast receives a BPDU, it will be shut down to prevent a loop.',
            ]
        },
        {
            type: 'multi',
            pic: null,
            question: 'A network administrator needs to configure port security on a switch. Which two statements are true? (Choose two.)',
            answers: [
                'The network administrator can apply port security to dynamic access ports.',
                'The network administrator can apply port security to EtherChannels.',
                'When dynamic MAC address learning is enabled on an interface, the switch can learn new addresses, up to the maximum defined.',
                'The sticky learning feature allows the addition of dynamically learned addresses to the running configuration.',
                'The network administrator can configure static secure or sticky secure MAC addresses in the voice VLAN.',
            ],
            corrects: ['', '', 'C', 'D', ''],
            feedback: [
                'Follow these guidelines when configuring port security:',
                '•	Port security can only be configured on static access ports, trunk ports, or 802.1Q tunnel ports.',
                '•	A secure port cannot be a dynamic access port.',
                '•	A secure port cannot be a destination port for Switched Port Analyzer (SPAN).',
                '•	A secure port cannot belong to a Fast EtherChannel or Gigabit EtherChannel port group.',
                '•	You cannot configure static secure or sticky secure MAC addresses on a voice VLAN. + When you enable port security on an interface that is also configured with a voice VLAN, you must set the maximum allowed secure addresses on the port to at least two. + If any type of port security is enabled on the access VLAN, dynamic port security is automatically enabled on the voice VLAN.',
                '•	When a voice VLAN is configured on a secure port that is also configured as a sticky secure port, all addresses seen on the voice VLAN are learned as dynamic secure addresses, and all addresses seen on the access VLAN (to which the port belongs) are learned as sticky secure addresses.',
                '•	The switch does not support port security aging of sticky secure MAC addresses.',
                '•	The protect and restrict options cannot be simultaneously enabled on an interface.',
            ]
        },
        {
            type: 'simple',
            pic: null,
            question: 'In GLBP, which router will respond to client ARP requests?',
            answers: [
                'The active virtual gateway will reply with one of four possible virtual MAC addresses.', 
                'All GLBP member routers will reply in round-robin fashion.', 
                'The active virtual gateway will reply with its own hardware MAC address.', 
                'The GLBP member routers will reply with one of four possible burned in hardware addresses.', 
            ],
            corrects: ['A'],
            feedback: [
                'One disadvantage of HSRP and VRRP is that only one router is in use, other routers must wait for the primary to fail because they can be used. However, Gateway Load Balancing Protocol (GLBP) can use of up to four routers simultaneously. In GLBP, there is still only one virtual IP address, but each router has a different virtual MAC address.',
                'First a GLBP group must elect an Active Virtual Gateway (AVG). The AVG is responsible for replying ARP requests from hosts/clients. It replies with different virtual MAC addresses that correspond to different routers (known as Active Virtual Forwarders - AVFs) so that clients can send traffic to different routers in that GLBP group (load sharing).',
            ]
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which option about JSON is true?',
            answers: [
                'uses predefined tags or angle brackets (<>) to delimit markup text', 
                'used to describe structured data that includes arrays', 
                'used for storing information', 
                'similar to HTML, it is more verbose than XML', 
            ],
            corrects: ['B'],
            feedback: [
                'JSON data is written as name/value pairs. A name/value pair consists of a field name (in double quotes), followed by a colon, followed by a value:',
                '“name”:”Mark”',
                'JSON can use arrays. Array values must be of type string, number, object, array, boolean or null. For example:',
                '{“name”:”John”,“age”:30, “cars”:[ “Ford”, “BMW”, “Fiat” ]}',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which QoS tool can you use to optimize voice traffic on a network that is primarily intended for data traffic?',
            answers: [
                'WRED', 
                'FIFO', 
                'PQ', 
                'WFQ', 
            ],
            corrects: ['C'],
            feedback: [
                'With Priority Queueing (PQ), traffic is classified into high, medium, normal, and low priority queues. The high priority traffic is serviced first, then medium priority traffic, followed by normal and low priority traffic.  Therefore, we can assign higher priority for voice traffic.',
                'Also, with PQ, higher priority traffic can starve the lower priority queues of bandwidth. No bandwidth guarantees are possible -> It is still good because this network is mostly used for data traffic, so voice traffic amount is small.',
                'With First In First Out (FIFO) or Weighted Fair Queueing (WFQ), there is no priority servicing so they are not suitable here.',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which protocol advertises a virtual IP address to facilitate transparent failover of a Cisco routing device?',
            answers: [
                'FHRP', 
                'DHCP', 
                'RSMLT', 
                'ESRP', 
            ],
            corrects: ['A'],
            feedback: [
                'First Hop Redundancy Protocol (FHRP) is a protocol that enables two or more devices to work together in a group, sharing a single IP address, the virtual IP address. One router is elected to handle all requests sent to the virtual IP address. With HSRP, this is the active router. An HSRP group has one active router and at least one standby router.',
            ],
        },
        {
            type: 'multi',
            pic: null,
            question: 'What are two requirements for an HSRP group? (Choose two)',
            answers: [
                'exactly one active router',
                'one or more standby routers',
                'one or more backup virtual routers',
                'exactly one standby active router',
                'exactly one backup virtual router',
            ],
            corrects: ['A', 'B', '', '', ''],
            feedback: [
                'A set of routers that run HSRP works in concert to present the illusion of a single default gateway router to the hosts on the LAN. This set of routers is known as an HSRP group or standby group. A single router that is elected from the group is responsible for the forwarding of the packets that hosts send to the virtual router. This router is known as the active router. Another router is elected as the standby router. If the active router fails, the standby assumes the packet forwarding duties. Although an arbitrary number of routers may run HSRP, only the active router forwards the packets that are sent to the virtual router IP address.',
                'In order to minimize network traffic, only the active and the standby routers send periodic HSRP messages after the protocol has completed the election process. Additional routers in the HSRP group remain in the Listen state. If the active router fails, the standby router takes over as the active router. If the standby router fails or becomes the active roster, another router is elected as the standby router.',
                'There is exactly one active router and one standby router in an HSRP group. Answer A is surely a correct but other answer are not correct. Answers C, D and E are wrong terminologies, so they are surely not correct. Therefore, answer B is a best answer.',
            ]
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which value to use in HSRP protocol election process?',
            answers: [
                'interface', 
                'virtual IP address', 
                'priority', 
                'router ID', 
            ],
            corrects: ['C'],
            feedback: [
                'HSRP election is based on a priority value (0 to 255) that is configured on each router in the group. By default, the priority is 100. The router with the highest priority value (255 is highest) becomes the active router for the group. If all router priorities are equal or set to the default value, the router with the highest IP address on the HSRP interface becomes the active router. ',
                'Below is an example of assigning HSRP priority of 200 to R1: R1(config-if)# standby 1 priority 200',
            ],
        },
        {
            type: 'multi',
            pic: null,
            question: 'Which three statements about HSRP operation are true? (Choose three)',
            answers: [
                'The virtual IP address and virtual MAC address are active on the HSRP Master router.',
                'The HSRP default timers are a 3 second hello interval and a 10 second dead interval.',
                'HSRP supports only clear-text authentication.',
                'The HSRP virtual IP address must be on a different subnet than the routers’ interfaces on the same LAN.',
                'The HSRP virtual IP address must be the same as one of the router’s interface addresses on the LAN.',
                'HSRP supports up to 255 groups per interface, enabling an administrative form of load balancing.',
            ],
            corrects: ['A', 'B', '', '', '','F'],
            feedback: [
                'The virtual MAC address of HSRP version 1 is 0000.0C07.ACxx, where xx is the HSRP group number in hexadecimal based on the respective interface. For example, HSRP group 10 uses the HSRP virtual MAC address of 0000.0C07.AC0A. HSRP version 2 uses a virtual MAC address of 0000.0C9F.FXXX (XXX: HSRP group in hexadecimal)',
            ]
        },
        {
            type: 'multi',
            pic: null,
            question: 'What is true about Ethernet? (Choose two)',
            answers: [
                '802.2 Protocol',
                '802.3 Protocol',
                '10BaseT half duplex',
                'CSMA/CD stops transmitting when congestion occurs',
                'CSMA/CA stops transmitting when congestion occurs',
            ],
            corrects: ['', 'B', '', 'D', ''],
            feedback: [
                'Carrier sense multiple access with collision detection (CSMA/CD) is a media access control method used most notably in early Ethernet (IEEE 802.3) technology for local area networking. When collision detection (CD) observes a collision (excess current above what it is generating, i.e. > 24 mA for coaxial Ethernet), it stops transmission immediately and instead transmits a 32-bit jam sequence.',
                'Note: CSMA/CA (Carrier Sense Multiple Access/Collision Avoidance) is a protocol for carrier transmission used in wireless networks. Unlike CSMA/CD (Carrier Sense Multiple Access/Collision Detect) which deals with transmissions after a collision has occurred, CSMA/CA acts to prevent collisions before they happen.',
            ]
        },
        {
            type: 'simple',
            pic: null,
            question: 'If a router has 3 hosts connected in one port and two other hosts connected in another port, how may broadcast domains are present on the router?',
            answers: [
                '5', 
                '2', 
                '3', 
                '4', 
            ],
            corrects: ['B'],
            feedback: [
                'Each port of a router is a broadcast domain. This router has 2 ports so it has 2 broadcast domains.',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which MTU size can cause a baby giant error?',
            answers: [
                '1500', 
                '9216', 
                '1600', 
                '1518', 
            ],
            corrects: ['D'],
            feedback: [
                'Ethernet frame size refers to the whole Ethernet frame, including the header and the trailer while MTU size refers only to Ethernet payload. Baby giant frames refer to Ethernet frame size up to 1600 bytes, and jumbo frame refers to Ethernet frame size up to 9216 bytes.',
                'For example, standard Ethernet frame MTU is 1500 bytes. This does not include the Ethernet header and Cyclic Redundancy Check (CRC) trailer, which is 18 bytes in length, to make the total Ethernet frame size of 1518. So according to strict definition, MTU size of 1600 cannot be classified as baby giant frames as the whole Ethernet frames will surely larger than 1600 -> Answer C is not correct.',
                'Answer D is a better choice as the MTU is 1518, so the whole Ethernet frame would be 1536 (1518 + 18 Ethernet header and CRC trailer). This satisfies the requirement of baby giant frames “Baby giant frames refer to Ethernet frame size up to 1600 bytes”.',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'A network interface port has collision detection and carrier sensing enabled on a shared twisted pair network. From this statement, what is known about the network interface port?',
            answers: [
                'This is a 10 Mb/s switch port.', 
                'This is a 100 Mb/s switch port.', 
                'This is an Ethernet port operating at half duplex.', 
                'This is an Ethernet port operating at full duplex.', 
                'This is a port on a network interface card in a PC.',
            ],
            corrects: ['C'],
            feedback: [
                'Modern Ethernet networks built with switches and full-duplex connections no longer utilize CSMA/CD. CSMA/CD is only used in obsolete shared media Ethernet (which uses repeater or hub).',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'What interconnection cable can you use when you use a MDI connection?',
            answers: [
                'cut-through', 
                'straight-through',
                'crossover', 
                'rollover',
            ],
            corrects: ['C'],
            feedback: [
                'MDI stands for “Medium Dependent Interface”. MDI is a type of Ethernet port found on network devices. When connecting two devices with MDI ports (two hosts, for example) an Ethernet crossover cable is required. The crossover cable switches the send and receive ports on the two connectors, allowing data to flow correctly between two MDI ports.',
            ],
        },
        {
            type: 'multi',
            pic: null,
            question: 'For what two purposes does the Ethernet protocol use physical addresses? (Choose two)',
            answers: [
                'to uniquely identify devices at Layer 2',
                'to allow communication with devices on a different network',
                'to differentiate a Layer 2 frame from a Layer 3 packet',
                'to establish a priority system to determine which device gets to transmit first',
                'to allow communication between different devices on the same network',
                'to allow detection of a remote device when its physical address is unknown',
            ],
            corrects: ['A', '', '', '', 'E',''],
            feedback: [
                'Physical addresses or MAC addresses are used to identify devices at layer 2 -> A is correct. MAC addresses are only used to communicate on the same network. To communicate on different network we have to use Layer 3 addresses (IP addresses) -> B is not correct; E is correct.',
                'Layer 2 frame and Layer 3 packet can be recognized via headers. Layer 3 packet also contains physical address -> C is not correct.On Ethernet, each frame has the same priority to transmit by default -> D is not correct.All devices need a physical address to identify itself. If not, they can not communicate -> F is not correct.',
            ]
        },
        {
            type: 'simple',
            pic: null,
            question: 'What is a valid HSRP virtual MAC address?',
            answers: [
                '0007.B400.AE01', 
                '0000.5E00.01A3',
                '0007.5E00.B301', 
                '0000.0C07.AC15',
            ],
            corrects: ['D'],
            feedback: [
                'In most cases when you configure routers to be part of an HSRP group, they listen for the HSRP MAC address for that group as well as their own burned-in MAC address. The exception is routers whose Ethernet controllers only recognize a single MAC address (for example, the Lance controller on the Cisco 2500 and Cisco 4500 routers). ',
                'These routers use the HSRP MAC address when they are the Active router, and their burned in address when they are not. HSRP uses the following MAC address on all media except Token Ring: 0000.0c07.ac** (where ** is the HSRP group number)',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which deployment model is the most secure when considering risks to cloud adoption?',
            answers: [
                'public cloud', 
                'hybrid cloud',
                'community cloud', 
                'private cloud',
            ],
            corrects: ['D'],
            feedback: [
                'Explanation: Private cloud is the most secure option when considering risks to cloud adoption in your company.',
            ],
        },
        {
            type: 'multi',
            pic: null,
            question: 'Which three technical services support cloud computing?',
            answers: [
                'network-monitored power sources',
                'layer 3 network routing',
                'ip localization',
                'redundant connections',
                'VPN connectivity',
                'extended SAN services',
            ],
            corrects: ['', 'B', 'C', '', '','F'],
            feedback: [
                'Four technical services are essential to supporting the high level of flexibility, resource availability, and transparent resource connectivity required for cloud computing:',
                '•	The Layer 3 network offers the traditional routed interconnection between remote sites and provides end-user access to cloud services.',
                '•	The extended LAN between two or more sites offers transparent transport and supports application and operating system mobility.',
                '•	Extended SAN services support data access and accurate data replication.',
                '•	IP Localization improves northbound and southbound traffic as well as server-to-server workflows.',
            ]
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which major component of the network virtualization architecture isolate users according to policy?',
            answers: [
                'policy enforcement', 
                'network access control',
                'network services virtualization', 
                'other',
            ],
            corrects: ['B'],
            feedback: [
                'Network virtualization architecture has three main components:',
                '•	Network access control and segmentation of classes of users: Users are authenticated and either allowed or denied into a logical partition. Users are segmented into employees, contractors and consultants, and guests, with respective access to IT assets. This component identifies users who are authorized to access the network and then places them into the appropriate logical partition.',
                '•	Path isolation: Network isolation is preserved across the entire enterprise: from the edge to the campus to the WAN and back again. This component maintains traffic partitioned over a routed infrastructure and transports traffic over and between isolated partitions. The function of mapping isolated paths to VLANs and to virtual services is also performed in component.',
                '•	Network Services virtualization: This component provides access to shared or dedicated network services such as security, quality of service (QoS), and address management (Dynamic Host Configuration Protocol [DHCP] and Domain Name System [DNS]). It also applies policy per partition and isolates application environments, if required.',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which cloud service is typically used to provide DNS and DHCP services to an enterprise?',
            answers: [
                'IaaS', 
                'DaaS',
                'SaaS', 
                'PaaS',
            ],
            corrects: ['A'],
            feedback: [
                'Below are the 3 cloud supporting services cloud providers provide to customer:',
                '•	SaaS (Software as a Service): SaaS uses the web to deliver applications that are managed by a third-party vendor and whose interface is accessed on the clients’ side. Most SaaS applications can be run directly from a web browser without any downloads or installations required, although some require plugins.',
                '•	PaaS (Platform as a Service): are used for applications, and other development, while providing cloud components to software. What developers gain with PaaS is a framework they can build upon to develop or customize applications. PaaS makes the development, testing, and deployment of applications quick, simple, and cost-effective. With this technology, enterprise operations, or a third-party provider, can manage OSes, virtualization, servers, storage, networking, and the PaaS software itself. Developers, however, manage the applications.',
                '•	IaaS (Infrastructure as a Service): self-service models for accessing, monitoring, and managing remote datacenter infrastructures, such as compute (virtualized or bare metal), storage, networking, and networking services (e.g. firewalls). Instead of having to purchase hardware outright, users can purchase IaaS based on consumption, like electricity or other utility billing.',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'What does the Cloudlock Apps Firewall do to mitigate security concerns from an application perspective?',
            answers: [
                'It allows the administrator to quarantine malicious files so that the application can function, just not maliciously.', 
                'It discovers and controls cloud apps that are connected to a company\'s corporate environment.',
                'It deletes any application that does not belong in the network.', 
                'It sends the application information to an administrator to act on.',
            ],
            corrects: ['B'],
            feedback: [
                'Cloudlock uses advanced machine learning algorithms to detect anomalies based on multiple factors. It also identifies activities outside whitelisted countries and spots actions that seem to take place at impossible speeds across distances.',
                'Cloudlock\'s data loss prevention (DLP) technology continuously monitors cloud environments to detect and secure sensitive information. It provides countless out-of-the-box policies as well as highly tunable custom policies.',
                'The Cloudlock Apps Firewall discovers and controls cloud apps connected to your corporate environment. You can see a crowd-sourced Community Trust Rating for individual apps, and you can ban or whitelist them based on risk.'
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which exfiltration method does an attacker use to hide and encode data inside DNS requests and queries?',
            answers: [
                'DNS tunneling',
                'DNSCrypt',
                'DNS security',
                'DNSSEC'
            ],
            corrects: ['A'],
            feedback: [
                'DNS tunneling utilizes the DNS protocol to communicate non-DNS traffic over port 53. It sends HTTP and other protocol traffic over DNS. There are various, legitimate reasons to utilize DNS tunneling. For example, DNS tunneling is often used as a login mechanism for hotspot security controls at airports or hotels to access internet. DNS tunneling is also used by antivirus to look up signatures for files. However, there are also malicious reasons to use DNS Tunneling VPN services.',
            ]
        },
        {
            type: 'multi',
            pic: null,
            question: 'Which three statements about DWDM are true? (Choose three)',
            answers: [
                'It allows a single strand of fiber to support bidirectional communications',
                'It is used for long-distance and submarine cable systems',
                'It can multiplex up to 256 channels on a single fiber',
                'It supports both the SDH and SONET standards',
                'Each channel can carry up to a 1-Gbps signal',
                'It supports simplex communications over multiple strands of fiber',
            ],
            corrects: ['A', 'B', '', 'D', '',''],
            feedback: [
                'A newer fiber-optic media development for long-range communications is called dense wavelength-division multiplexing (DWDM). DWDM multiplies the amount of bandwidth that a single strand of fiber can support.',
                'DWDM circuits are used in all modern submarine communications cable systems and other long-haul circuits.',
                'Specifically, DWDM:',
                '•	Enables bidirectional communications over one strand of fiber -> Answer A is correct',
                '•	Assigns incoming optical signals to specific wavelengths of light (i.e., frequencies)',
                '•	Each channel is capable of carrying a 10-Gbps multiplexed signal -> Answer E is not correct',
                '•	Can multiplex more than 80 different channels of data (i.e., wavelengths) onto a single fiber -> Answer C is not correct',
                '•	Can amplify these wavelengths to boost the signal strength',
                '•	Supports SONET and SDH standards',
            ]
        },
        {
            type: 'multi',
            pic: null,
            question: 'Which two server types are used to support DNS lookup? (Choose two)',
            answers: [
                'web server',
                'name resolver',
                'authoritative name sever',
                'ESX host',
                'file transfer server',
            ],
            corrects: ['', 'B', 'C', '', ''],
            feedback: [
                'All DNS servers fall into one of four categories: Recursive resolvers, root name servers, TLD name servers, and authoritative name servers. In a typical DNS lookup (when there is no caching in play), these four DNS servers work together in harmony to complete the task of delivering the IP address for a specified domain to the client (the client is usually a stub resolver – a simple resolver built into an operating system).',
            ]
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which command would you configure globally on a Cisco router that would allow you to view directly connected Cisco devices?',
            answers: [
                'cdp run', 
                'enable cdp',
                'cdp enable', 
                'run cdp',
            ],
            corrects: ['A'],
            feedback: [
                'CDP is enabled by default on all Cisco routers. If it is turned off by any reason, we can turn it on again with the following command on global configuration mode: cdp run',
                'Note: CDP can be turned on or turned off on each interface. For example, to turn off CDP on an interface we use this command: no cdp enable',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which statement about LLDP is true?',
            answers: [
                'It is a Cisco proprietary protocol.', 
                'It is configured in global configuration mode.',
                'The LLDP update frequency is a fixed value.', 
                'It runs over the transport layer.',
            ],
            corrects: ['B'],
            feedback: [
                'Link Layer Discovery Protocol (LLDP) is a industry standard protocol that allows devices to advertise, and discover connected devices, and there capabilities (same as CDP of Cisco). To enable it on Cisco devices, we must use this command under global configuration mode: lldp run',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which LLDP extension provides additional support for VoIP?',
            answers: [
                'TLV', 
                'LLDP-MED',
                'LLDPv3', 
                'LLDP-VOIP',
            ],
            corrects: ['B'],
            feedback: [
                'LLDP for Media Endpoint Devices (LLDP-MED) is an extension to LLDP that operates between endpoint devices such as IP phones and network devices such as switches. It specifically provides support for voice over IP (VoIP) applications.',
            ],
        },
        {
            type: 'multi',
            pic: null,
            question: 'Which two TLVs does LLDP support? (Choose two)',
            answers: [
                'system description',
                'port duplex',
                'management address',
                'native VLAN',
                'spanning tree',
            ],
            corrects: ['A', '', 'C', '', ''],
            feedback: [
                'The switch supports these basic management TLVs. These are mandatory LLDP TLVs.',
                '•	Port description',
                '•	System name',
                '•	System description',
                '•	System capabilities',
                '•	Management address',
            ]
        },
        {
            type: 'multi',
            pic: null,
            question: 'Which two statements about IPv4 multicast traffic are true? (Choose two)',
            answers: [
                'It burdens the source host without affecting remote hosts.',
                'It uses a minimum amount of network bandwidth.',
                'It is bandwidth-intensive.',
                'It simultaneously delivers multiple streams of data.',
                'It is the most efficient way to deliver data to multiple receivers.',
            ],
            corrects: ['', 'B', '', '', 'E'],
            feedback: [
                'IP multicast is a bandwidth-conserving technology that reduces traffic by simultaneously delivering a single stream of information to potentially thousands of corporate recipients and homes.',
                'IP multicast delivers application source traffic to multiple receivers without burdening the source or the receivers while using a minimum of network bandwidth.',
            ]
        },
        {
            type: 'multi',
            pic: null,
            question: 'Which destination IP address can a host use to send one message to multiple devices across different subnets?',
            answers: [
                '172.20.1.0',
                '127.0.0.1',
                '192.168.0.119',
                '239.255.0.1',
            ],
            corrects: ['', '', '', 'D'],
            feedback: [
                'In order to send traffic to multiple devices (not all) across different subnets we need to use multicast addresses, which are in the range 224.0.0.0 through 239.255.255.255 -> D is correct.',
            ]
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which RFC was created to alleviate the depletion of IPv4 public addresses?',
            answers: [
                'RFC 4193', 
                'RFC 1519',
                'RFC 1518', 
                'RFC 1918',
            ],
            corrects: ['D'],
            feedback: [
                'The RFC 1518 is Classless Interdomain Routing (CIDR), which is created to save the IPv4 addresses because we can now assign IP addresses classless.',
                'Therefore, instead of assigning the whole block of a class B or C address, now smaller blocks of a class can be assigned. For example, instead of assigning a whole block of 200.1.45.0/24, a smaller block, like 200.1.45.0/27 or 200.1.45.32/27, can be assigned.',
                'The RFC 1918 is Address Allocation for Private Internets, which reserves IP addresses for private and internal use. These addresses can be used for networks that do not need to connect to the Internet.',
                'Therefore the RFC 1918 is the best choice to “alleviate the depletion of IPv4 public addresses”.',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which IPv6 feature is supported in IPv4 but is not commonly used?',
            answers: [
                'unicast', 
                'multicast',
                'anycast', 
                'broadcast',
            ],
            corrects: ['C'],
            feedback: [
                'Only three connection types are commonly known and used in Internet Protocol version four (IPv4) networks: unicast, multicast and broadcast. A fourth connection type, Anycast, was unknown until IPv6 made it a standard connection type. Anycast is not standardized in IPv4 but can be emulated. IPv4 Anycast addressing is a good solution to provide localization for services and servers in order to obtain robustness, redundancy and resiliency.',
                'The basic idea of Anycast is very simple: multiple servers, which share the same IP address, host the same service. The routing infrastructure sends IP packets to the nearest server (according to the metric of the routing protocol used). The major benefits of employing Anycast in IPv4 are improved latency times, server load balancing, and improved security.',
            ],
        },
        {
            type: 'multi',
            pic: null,
            question: 'What are two benefits of private IPv4 IP addresses? (Choose two)',
            answers: [
                'They are routed the same as public IP addresses.',
                'They are less costly than public IP addresses.',
                'They can be assigned to devices without Internet connections.',
                'They eliminate the necessity for NAT policies.',
                'They eliminate duplicate IP conflicts.',
            ],
            corrects: ['', 'B', 'C', '',''],
            feedback: [
                'Usually using private IPv4 addresses in a organization is free so surely they are less costly than public IP addresses which you have to buy -> B is correct.',
                'Also, we can use private IPv4 addresses to devices that do not need to connect to the Internet because Internet requires public IPv4 addresses -> C is correct.',
                'Answer D is not correct as we still need to use NAT policies to limit which private IPv4 addresses in our company can access our resources.',
            ]
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which address class includes network 191.168.0.1/27?',
            answers: [
                'Class C', 
                'Class B',
                'Class D', 
                'Class A',
            ],
            corrects: ['B'],
            feedback: [
                'This is a tricky question if you don’t have a close look on the network. The first octet is 191, not 192 so it belongs to class B, not class C.',
            ],
        },
        {
            type: 'multi',
            pic: null,
            question: 'Which two statements are true for multicast MAC address directions?',
            answers: [
                '01:00:5E:xx:xx:xx',
                'one to one',
                '01 00 xx xxxxxxx',
                '02 xx xxxxxxx',
                'one to many',
            ],
            corrects: ['A', '', '', '','E'],
            feedback: [
                'The Internet authorities have reserved the multicast address range of 01:00:5E:00:00:00 to 01:00:5E:7F:FF:FF for Ethernet and Fiber Distributed Data Interface (FDDI) media access control (MAC) addresses.',
            ]
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which switching method duplicates the first six bytes of a frame before making a switching decision?',
            answers: [
                'fragment-free switching', 
                'cut-through switching',
                'store-and-forward switching', 
                'ASIC switching',
            ],
            corrects: ['B'],
            feedback: [
                'In cut-through switching, the switch copies into its memory only the destination MAC address (first six bytes of the frame) of the frame. After processing these first six bytes, the switch had enough information to make a forwarding decision and move the frame to the appropriate switchport. This switching method is faster than store-and-forward switching method.',
                'In store-and-forward switching, the switch copies each complete Ethernet frame into the switch memory and computes a Cyclic Redundancy Check (CRC) for errors. If a CRC error is found, the Ethernet frame is dropped. If no CRC error is found then that frame is forwarded.',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which statement about switch access ports is true?',
            answers: [
                'They drop packets with 802.1Q tags.', 
                'A VLAN must be assigned to an access port before it is created.',
                'They can receive traffic from more than one VLAN with no voice support', 
                'By default, they carry traffic for VLAN 10.',
            ],
            corrects: ['A'],
            feedback: [
                'A VLAN does not need to be assigned to any port -> B is not correct.',
                'An access port can only receive traffic from one VLAN -> C is not correct.',
                'If not assigned to a specific VLAN, an access port carries traffic for VLAN 1 by default -> D is not correct.',
                'An access port will drop packets with 802.1Q tags -> A is correct. Notice that 802.1Q tags are used to packets moving on trunk links.',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'When is the best time to perform an anti-virus signature update?',
            answers: [
                'Every time a new update is available.', 
                'When the local scanner has detected a new virus.',
                'When a new virus is discovered in the wild.', 
                'When the system detects a browser hook.',
            ],
            corrects: ['A'],
            feedback: [
                'You can automatically check for Anti-Virus signature updates from Ciscos signature server every 24 hours or to manually check for Anti-Virus signature updates at any time by clicking Update.',
                'When a newer signature file is available on the server, the new signature file will be downloaded to your device. ',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which statement about application blocking is true?',
            answers: [
                'It blocks access to specific programs.', 
                'It blocks access to files with specific extensions.',
                'It blocks access to specific network addresses.', 
                'It blocks access to specific network services.',
            ],
            corrects: ['A'],
            feedback: [
                'Application filters allow you to quickly create application conditions for access control rules. They simplify policy creation and administration and grant you assurance that the system will control web traffic as expected. ',
                'For example, you could create an access control rule that identifies and blocks all high risk, low business relevance applications. If a user attempts to use one of those applications, the session',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which feature allows a device to use a switch port that is configured for half-duplex to access the network?',
            answers: [
                'CSMA/CD', 
                'IGMP',
                'port security', 
                'split horizon',
            ],
            corrects: ['A'],
            feedback: [
                'Carrier Sense Multiple Access with Collision Detection (CSMA/CD) is the LAN access method used in Ethernet. When a device wants to gain access to the network, it checks to see if the network is free. ',
                'If the network is not free, the device waits a random amount of time before retrying. If the network is free and two devices access the line at exactly the same time, their signals collide. When the collision is detected, they both back off and wait a random amount of time before retrying.',
                'CSMA/CD is used with devices operating in half-duplex mode only. CSMA/CD helps devices connecting to half-duplex switch ports operate correctly.',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which option is an invalid hostname for a switch?',
            answers: [
                '5witch-Cisco', 
                'Switch-Cisco!',
                '5witchCisc0', 
                'SwitchCisc0',
            ],
            corrects: ['B'],
            feedback: [
                'The “!” is a special character which is not allowed in the hostname of Cisco device.',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'Two hosts are attached to a switch with the default configuration. Which statement about the configuration is true?',
            answers: [
                'IP routing must be enabled to allow the two hosts to communicate.', 
                'The two hosts are in the same broadcast domain.',
                'The switch must be configured with a VLAN to allow the two hosts to communicate.', 
                'Port security prevents the hosts from connecting to the switch.',
            ],
            corrects: ['B'],
            feedback: [
                'All ports on a Layer 2 switch are in the same broadcast domain. Only router ports separate broadcast domains.',
            ],
        },
        {
            type: 'multi',
            pic: null,
            question: 'Which three statements accurately describe layer 2 Ethernet switches? (choose three)',
            answers: [
                'Micro segmentation decreases the number of collisions on the network.',
                'If a switch receives a frame for an unknown destination, it uses ARP to resolve the address.',
                'Spanning Tree Protocol allows switches to automatically share vlan information.',
                'In a properly functioning network with redundant switched paths, each switched segment will contain one root bridge with all its ports in the forwarding state. All other switches in that broadcast domain will have only one root port.',
                'Establishing vlans increases the number of broadcast domains.',
                'Switches that are configured with vlans make forwarding decisions based on both layer 2 and layer 3 address information.',
            ],
            corrects: ['A', '', '', 'D','E',''],
            feedback: [
                'Micro segmentation is a network design (functionality) where each workstation or device on a network gets its own dedicated segment (collision domain) to the switch. ',
                'Each network device gets the full bandwidth of the segment and does not have to share the segment with other devices. Micro segmentation reduces and can even eliminate collisions because each segment is its own collision domain -> A is correct.',
                'Note: Micro segmentation decreases the number of collisions, but it increases the number of collision domains.',
                'D and E are correct based on the theory of STP and VLAN.',
            ]
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which utility can you use to determine whether a switch can send echo requests and replies?',
            answers: [
                'ping', 
                'traceroute',
                'ssh', 
                'telnet',
            ],
            corrects: ['A'],
            feedback: [
                '“ping” command is used to send echo requests and receive echo replies.',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'What type of MAC address is aged automatically by the switch?',
            answers: [
                'Dynamic', 
                'Static',
                'Auto', 
                'Secure',
            ],
            corrects: ['A'],
            feedback: [
                'To switch frames between LAN ports efficiently, the switch maintains an address table. When the switch receives a frame, it associates the media access control (MAC) address of the sending network device with the LAN port on which it was received.',
                'The switch dynamically builds the address table by using the MAC source address of the frames received. When the switch receives a frame for a MAC destination address not listed in its address table, it floods the frame to all LAN ports of the same VLAN except the port that received the frame.',
                'When the destination station replies, the switch adds its relevant MAC source address and port ID to the address table.',
                'The switch then forwards subsequent frames to a single LAN port without flooding all LAN ports. When the switch dynamically builds the MAC address table, it also specifies the time before an entry ages out and is discarded from the MAC address table. The default is 300 seconds.',
            ],
        },
        {
            type: 'multi',
            pic: null,
            question: 'Which two circumstances can cause collision domain issues on VLAN domain? (Choose two)',
            answers: [
                'duplex mismatches on Ethernet segments in the same VLAN',
                'multiple errors on switchport interfaces',
                'congestion on the switch inband path',
                'a failing NIC in an end device',
                'an overloaded shared segment',
            ],
            corrects: ['A', '', 'C', '',''],
            feedback: [
                'On an Ethernet connection, a duplex mismatch is a condition where two connected devices operate in different duplex modes, that is, one operates in half duplex while the other one operates in full duplex.',
                'Duplex mismatch can easily cause collision domain issue as the device that operates in full duplex mode turns off CSMA/CD.',
                'So, it is eager to send data immediately without checking if the link is free to use -> A is correct.',
                'An “inband path” is the path which provides path for management traffic (like CDP, VTP, PAgP…) but we are not sure why congestion on the switch inband path can cause collision domain issues. Maybe congestion on inband path prevents the JAM signal (sent when a collision occurs on the link) to be sent correctly on the link.',
            ]
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which statement about native VLAN traffic is true?',
            answers: [
                'Cisco Discovery Protocol traffic travels on the native VLAN by default', 
                'Traffic on the native VLAN is tagged with 1 by default',
                'Control plane traffic is blocked on the native VLAN.', 
                'The native VLAN is typically disabled for security reasons',
            ],
            corrects: ['A'],
            feedback: [
                'Traffic on the native VLAN is untagged -> Answer B is not correct.',
                'Control plane traffic (like CDP, VTP, STP…) runs on VLAN 1 by default. They are not blocked on the native VLAN -> Answer C is not correct.',
                'If the answer says “the native VLAN should be set so that no real traffic running on it for security reasons” then it is correct but the native VLAN is not typically disabled -> Answer D is not correct.',
                'CDP runs on VLAN 1 by default and the native VLAN is also VLAN 1 by default, so answer A is the best choice here.',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which statement describes the effect of this configuration? \n Router#configure terminal \n Router(config)#vlan 10 \n Router(config-vlan)#do show vlan',
            answers: [
                'The VLAN 10 VTP configuration is displayed.', 
                'VLAN 10 spanning-tree output is displayed.',
                'The VLAN 10 configuration is saved when the router exits VLAN configuration mode.', 
                'VLAN 10 is added to the VLAN database.',
            ],
            corrects: ['C'],
            feedback: [
                'With the configuration above, when we type “do show vlan” we would not see VLAN 10 in the VLAN database because it has not been created yet. VLAN 10 is only created when we exits VLAN configuration mode (with “exit” command).',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which method does a connected trunk port use to tag VLAN traffic?',
            answers: [
                'IEEE 802.1w', 
                'IEEE 802.1D',
                'IEEE 802.1Q', 
                'IEEE 802.1p',
            ],
            corrects: ['C'],
            feedback: [
                'IEEE 802.1Q is the networking standard that supports virtual LANs (VLANs) on an Ethernet network. ',
                'When a frame enters the VLAN-aware portion of the network (a trunk link, for example), a VLAN ID tag is added to represent the VLAN membership of that frame. ',
                'The picture below shows how VLAN tag is added and removed while going through the network.',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which action is taken by a switch port enabled for PoE power classification override?',
            answers: [
                'When a powered device begins drawing power from a PoE switch port a syslog message is generated', 
                'As power usage on a PoE switch port is checked data flow to the connected device is temporarily paused',
                'If a switch determines that a device is using less than the minimum configured power it assumes the device has failed and disconnects', 
                'If a monitored port exceeds the maximum administrative value for power, the port is shutdown and err-disabled',
            ],
            corrects: ['D'],
            feedback: [
                'PoE monitoring and policing compares the power consumption on ports with the administrative maximum value (either a configured maximum value or the port’s default value). ',
                'If the power consumption on a monitored port exceeds the administrative maximum value, the following actions occur:',
                '•	A syslog message is issued.',
                '•	The monitored port is shut down and error-disabled.',
                '•	The allocated power is freed.',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'In which way does a spine and-leaf architecture allow for scalability in a network when additional access ports are required?',
            answers: [
                'A spine switch and a leaf switch can be added with redundant connections between them', 
                'A spine switch can be added with at least 40 GB uplinks',
                'A leaf switch can be added with a single connection to a core spine switch', 
                'A leaf switch can be added with connections to every spine switch',
            ],
            corrects: ['D'],
            feedback: [
                'Spine-leaf architecture is typically deployed as two layers: spines (such as an aggregation layer), and leaves (such as an access layer). Spine-leaf topologies provide high-bandwidth, low-latency, nonblocking server-to-server connectivity.',
                'Leaf (aggregation) switches are what provide devices access to the fabric (the network of spine and leaf switches) and are typically deployed at the top of the rack. Generally, devices connect to the leaf switches. ',
                'Devices can include servers, Layer 4-7 services (firewalls and load balancers), and WAN or Internet routers. Leaf switches do not connect to other leaf switches. In spine-and-leaf architecture, every leaf should connect to every spine in a full mesh.',
                'Spine (aggregation) switches are used to connect to all leaf switches and are typically deployed at the end or middle of the row. Spine switches do not connect to other spine switches.',
            ],
        },
        {
            type: 'multi',
            pic: null,
            question: 'What are two reasons that cause late collisions to increment on an Ethernet interface? (Choose two)',
            answers: [
                'when the sending device waits 15 seconds before sending the frame again',
                'when the cable length limits are exceeded',
                'when one side of the connection is configured for half-duplex',
                'when Carrier Sense Multiple Access/Collision Detection is used',
                'when a collision occurs after the 32nd byte of a frame has been transmitted',
            ],
            corrects: ['', 'B', 'C', '',''],
            feedback: [
                'A late collision is defined as any collision that occurs after the first 512 bits (or 64th byte) of the frame have been transmitted.',
                ' The usual possible causes are full-duplex/half-duplex mismatch, exceeded Ethernet cable length limits, or defective hardware such as incorrect cabling, non-compliant number of hubs in the network, or a bad NIC.',
                'Late collisions should never occur in a properly designed Ethernet network. They usually occur when Ethernet cables are too long or when there are too many repeaters in the network.',
            ]
        },
        {
            type: 'multi',
            pic: null,
            question: 'What are two southbound APIs? (Choose two)',
            answers: [
                'Thrift',
                'NETCONF',
                'Open Flow',
                'DSC',
                'CORBA',
            ],
            corrects: ['', 'B', 'C', '',''],
            feedback: [
                'OpenFlow is a well-known southbound API. OpenFlow defines the way the SDN Controller should interact with the forwarding plane to make adjustments to the network, so it can better adapt to changing business requirements.',
                'The Network Configuration Protocol (NetConf) uses Extensible Markup Language (XML) to install, manipulate and delete configuration to network devices.Other southbound APIs are:',
                '•	onePK: a Cisco proprietary SBI to inspect or modify the network element configuration without hardware upgrades.',
                '•	OpFlex: an open-standard, distributed control system. It send “summary policy” to network elements.',
            ]
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which unified access point mode continues to serve wireless clients after losing connectivity to the Cisco Wireless LAN Controller?',
            answers: [
                'sniffer', 
                'mesh',
                'flex connect', 
                'local',
            ],
            corrects: ['C'],
            feedback: [
                'In previous releases, whenever a FlexConnect access point disassociates from a controller, it moves to the standalone mode.',
                'The clients that are centrally switched are disassociated. However, the FlexConnect access point continues to serve locally switched clients.',
                'When the FlexConnect access point rejoins the controller (or a standby controller), all clients are disconnected and are authenticated again.',
                'This functionality has been enhanced and the connection between the clients and the FlexConnect access points are maintained intact and the clients experience seamless connectivity. When both the access point and the controller have the same configuration, the connection between the clients and APs is maintained.',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which statement about Link Aggregation when implemented on a Cisco Wireless LAN Controller is true?',
            answers: [
                'To pass client traffic two or more ports must be configured', 
                'The EtherChannel must be configured in “mode active”',
                'When enabled the WLC bandwidth drops to 500 Mbps', 
                'One functional physical port is needed to pass client traffic',
            ],
            corrects: ['C'],
            feedback: [
                'Link aggregation (LAG) is a partial implementation of the 802.3ad port aggregation standard. It bundles all of the controller’s distribution system ports into a single 802.3ad port channel.',
                'Restriction for Link aggregation:',
                '•	LAG requires the EtherChannel to be configured for ‘mode on’ on both the controller and the Catalyst switch -> Answer B is not correct.',
                '•	If the recommended load-balancing method cannot be configured on the Catalyst switch, then configure the LAG connection as a single member link or disable LAG on the controller -> Answer A is not correct while answer D is correct.',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which mode allows access points to be managed by Cisco Wireless LAN Controllers?',
            answers: [
                'autonomous', 
                'lightweight',
                'bridge', 
                'mobility express',
            ],
            corrects: ['B'],
            feedback: [
                'A Lightweight Access Point (LAP) is an AP that is designed to be connected to a wireless LAN (WLAN) controller (WLC). APs are “lightweight,” which means that they cannot act independently of a wireless LAN controller (WLC).',
                'The WLC manages the AP configurations and firmware. The APs are “zero touch” deployed, and individual configuration of APs is not necessary.',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which feature on the Cisco Wireless LAN Controller when enabled restricts management access from specific networks?',
            answers: [
                'CPU ACL', 
                'TACACS',
                'Flex ACL', 
                'RADIUS',
            ],
            corrects: ['A'],
            feedback: [
                'Whenever you want to control which devices can talk to the main CPU, a CPU ACL is used. CPU ACLs only filter traffic towards the CPU, and not any traffic exiting or generated by the CPU.',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which 802.11 frame type is association response?',
            answers: [
                'management', 
                'protected frame',
                'control', 
                'action',
            ],
            corrects: ['A'],
            feedback: [
                'There are three main types of 802.11 frames: the Data Frame, the Management Frame and the Control Frame. Association Response belongs to Management Frame.',
                'Association response is sent in response to an association request.',
            ],
        },
        {
            type: 'multi',
            pic: null,
            question: 'When configuring a WLAN with WPA2 PSK in the Cisco Wireless LAN Controller GUI, which two formats are available to select? (Choose two)',
            answers: [
                'ASCII',
                'base64',
                'binary',
                'decimal',
                'hexadecimal',
            ],
            corrects: ['A', '', '', '','E'],
            feedback: [
                'When configuring a WLAN with WPA2 Preshared Key (PSK), we can choose the encryption key format as either ASCII or HEX.',
            ]
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which IPv6 address type provides communication between subnets and cannot route on the Internet?',
            answers: [
                'global unicast', 
                'unique local',
                'link-local', 
                'multicast',
            ],
            corrects: ['B'],
            feedback: [
                'A IPv6 Unique Local Address is an IPv6 address in the block FC00::/7. It is the approximate IPv6 counterpart of the IPv4 private address. It is not routable on the global Internet.',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which command automatically generates an IPv6 address from a specified IPv6 prefix and MAC address of an interface?',
            answers: [
                'ipv6 address dhcp', 
                'ipv6 address 2001:068:5:112::64 eui-64',
                'ipv6 address autoconfig', 
                'ipv6 address 2001:068:5:112:2/64 link-local',
            ],
            corrects: ['C'],
            feedback: [
                'The “ipv6 address autoconfig” command causes the device to perform IPv6 stateless address auto-configuration to discover prefixes on the link and then to add the EUI-64 based addresses to the interface.',
                'Addresses are configured depending on the prefixes received in Router Advertisement (RA) messages. The device will listen for RA messages which are transmitted periodically from the router (DHCP Server).',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which IPv6 address block sends packets to a group address rather than a single address?',
            answers: [
                '2000::/3', 
                'FC00::/7',
                'FE80::/10', 
                'FF00::/8',
            ],
            corrects: ['D'],
            feedback: [
                'FF00::/8 is used for IPv6 multicast and this is the IPv6 type of address the question wants to ask.',
            ],
        },
        {
            type: 'multi',
            pic: null,
            question: 'When configuring IPv6 on an interface, which two IPv6 multicast groups are joined? (Choose two)',
            answers: [
                '2000::/3',
                '2002::5',
                'FC00::/7',
                'FF02::1',
                'FF02::2',
            ],
            corrects: ['', '', '', 'D','E'],
            feedback: [
                'When an interface is configured with IPv6 address, it automatically joins the all nodes (FF02::1) and solicited-node (FF02::1:FFxx:xxxx) multicast groups.',
                'The all-node group is used to communicate with all interfaces on the local link, and the solicited-nodes multicast group is required for link-layer address resolution.',
                'Routers also join a third multicast group, the all-routers group (FF02::2).',
            ]
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which command should you enter to configure an LLDP delay time of 5 seconds?',
            answers: [
                'lldp reinit 5', 
                'lldp reinit 5000',
                'lldp holdtime 5', 
                'lldp timer 5000',
            ],
            corrects: ['A'],
            feedback: [
                '•	lldp holdtime seconds: Specify the amount of time a receiving device should hold the information from your device before discarding it',
                '•	lldp reinit delay: Specify the delay time in seconds for LLDP to initialize on an interface',
                '•	lldp timer rate: Set the sending frequency of LLDP updates in seconds',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which command is used to enable LLDP globally on a Cisco IOS ISR?',
            answers: [
                'lldp run', 
                'lldp enable',
                'lldp transmit', 
                'cdp run',
                'cdp enable',
            ],
            corrects: ['A'],
            feedback: [
                'Link Layer Discovery Protocol (LLDP) is a industry standard protocol that allows devices to advertise, and discover connected devices, and there capabilities (same as CDP of Cisco).',
                'To enable it on Cisco devices, we have to use this command under global configuration mode: lldp run',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which command is used to specify the delay time in seconds for LLDP to initialize on any interface?',
            answers: [
                'lldp timer', 
                'lldp holdtime',
                'lldp reinit', 
                'lldp tlv-select',
            ],
            corrects: ['C'],
            feedback: [
                '•	lldp holdtime seconds: Specify the amount of time a receiving device should hold the information from your device before discarding it',
                '•	lldp reinit delay: Specify the delay time in seconds for LLDP to initialize on an interface',
                '•	lldp timer rate: Set the sending frequency of LLDP updates in seconds',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'A Cisco IP phone receive untagged data traffic from an attached PC. Which action is taken by the phone?',
            answers: [
                'It allows the traffic to pass through unchanged', 
                'It drops the traffic',
                'It tags the traffic with the default VLAN', 
                'It tags the traffic with the native VLAN',
            ],
            corrects: ['A'],
            feedback: [
                'Untagged traffic from the device attached to the Cisco IP Phone passes through the phone unchanged, regardless of the trust state of the access port on the phone.',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which mode must be used to configure EtherChannel between two switches without using a negotiation protocol?',
            answers: [
                'on', 
                'auto',
                'active', 
                'desirable',
            ],
            corrects: ['A'],
            feedback: [
                'The Static Persistence (or “on” mode) bundles the links unconditionally and no negotiation protocol is used. In this mode, neither PAgP nor LACP packets are sent or received.',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'Your organization needs to resolve DNS entries stored in an Amazon Route 53 private zone "awscloud:internal" from the corporate network. An AWS Direct Connect connection with a private virtual interface is configured to provide access to a VPC with the CIDR block 192.168.0.0/16. A DNS Resolver (BIND) is configured on an Amazon Elastic Compute Cloud (EC2) instance with the IP address 192.168.10.5 within the VPC. The DNS Resolver has standard root server hints configured and conditional forwarding for "awscloud.internal" to the IP address 192.168.0.2. From your PC on the corporate network, you query the DNS server at 192.168.10.5 for www.amazon.com. The query is successful and returns the appropriate response. When you query for "server.awscloud.internal", the query times out. You receive no response. How should you enable successful queries for "server.awscloud.internal"?',
            answers: [
                'Attach an internet gateway to the VPC and create a default route.', 
                'Configure the VPC settings for enableDnsHostnames and enableDnsSupport as True',
                'Relocate the BIND DNS Resolver to the corporate network.', 
                'Update the security group for the EC2 instance at 192.168.10.5 to allow UDP Port 53 outbound.',
            ],
            corrects: ['B'],
            feedback: [
                'Your VPC has attributes that determine whether instances launched in the VPC receive public DNS hostnames that correspond to their public IP addresses, and whether DNS resolution through the Amazon DNS server is supported for the VPC.',
                'If enableDnsHostnames and enableDnsSupport attributes are set to true, the following occurs: ',
                '•	Instances with a public IP address receive corresponding public DNS hostnames.',
                '•	The Amazon-provided DNS server can resolve Amazon-provided private DNS hostnames. ',
                'If either or both of the attributes is set to false, the following occurs: ',
                '•	Instances with a public IP address do not receive corresponding public DNS hostnames. ',
                '•	The Amazon-provided DNS server cannot resolve Amazon-provided private DNS hostnames. ',
                '•	Instances receive custom private DNS hostnames if there is a custom domain name in the DHCP options set. If you are not using the Amazon-provided DNS server, your custom domain name servers must resolve the hostname as appropriate. ',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which command must you enter to guarantee that an HSRP router with higher priority becomes the HSRP primary router after it is reloaded?',
            answers: [
                'standby 10 preempt', 
                'standby 10 version 1',
                'standby 10 priority 150', 
                'standby 10 version 2',
            ],
            corrects: ['A'],
            feedback: [
                'The “preempt” command enables the HSRP router with the highest priority to immediately become the active router.',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which MAC address is recognized as a VRRP virtual address?',
            answers: [
                '0000.5E00.010a', 
                '0005.3711.0975',
                '0000.0C07.AC99', 
                '0007.C070.AB01',
            ],
            corrects: ['A'],
            feedback: [
                'With VRRP, the virtual router’s MAC address is 0000.5E00.01xx , in which xx is the VRRP group',
            ],
        },
        {
            type: 'multi',
            pic: null,
            question: 'Which two capacities of Cisco DNA Center make it more extensible? (Choose two)',
            answers: [
                'adapters that support all families of Cisco IOS software',
                'SDKs that support interaction with third-party network equipment',
                'customized versions for small, medium, and large enterprises',
                'REST APIs that allow for external applications to interact natively with Cisco DNA Center',
                'modular design that is upgradable as needed',
            ],
            corrects: ['', 'B', '', 'D',''],
            feedback: [
                'Cisco DNA Center offers 360-degree extensibility through four distinct types of platform capabilities:',
                '•	Intent-based APIs leverage the controller and enable business and IT applications to deliver intent to the network and to reap network analytics and insights for IT and business innovation.',
                '•	Process adapters, built on integration APIs, allow integration with other IT and network systems to streamline IT operations and processes.',
                '•	Domain adapters, built on integration APIs, allow integration with other infrastructure domains such as data center, WAN, and security to deliver a consistent intent-based infrastructure across the entire IT environment.',
                '•	SDKs allow management to be extended to third-party vendor’s network devices to offer support for diverse environments.',
            ]
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which keyword in a NAT configuration enables the use of one outside IP address for multiple inside hosts?',
            answers: [
                'source', 
                'static',
                'pool', 
                'overload',
            ],
            corrects: ['D'],
            feedback: [
                'By adding the keyword “overload” at the end of a NAT statement, NAT becomes PAT (Port Address Translation).',
                'This is also a kind of dynamic NAT that maps multiple private IP addresses to a single public IP address (many-to-one) by using different ports.',
                'Static NAT and Dynamic NAT both require a one-to-one mapping from the inside local to the inside global address.',
                'By using PAT, you can have thousands of users connect to the Internet using only one real global IP address. PAT is the technology that helps us not run out of public IP address on the Internet. This is the most popular type of NAT.',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which type of address is the public IP address of a NAT device?',
            answers: [
                'outside global', 
                'outside local',
                'inside global', 
                'inside local',
                'outside public',
                'inside public',
            ],
            corrects: ['C'],
            feedback: [
                'NAT use four types of addresses:',
                '•	Inside local address – The IP address assigned to a host on the inside network. The address is usually not an IP address assigned by the Internet Network Information Center (InterNIC) or service provider. This address is likely to be an RFC 1918 private address.',
                '•	Inside global address – A legitimate IP address assigned by the InterNIC or service provider that represents one or more inside local IP addresses to the outside world.',
                '•	Outside local address – The IP address of an outside host as it is known to the hosts on the inside network.',
                '•	Outside global address – The IP address assigned to a host on the outside network. The owner of the host assigns this address.',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'Router A learns the same route from two different neighbors, one of the neighbor routers is an OSPF neighbor and the other is an EIGRP neighbor. What is the administrative distance of the route that will be installed in the routing table?',
            answers: [
                '20', 
                '90',
                '110', 
                '115',
            ],
            corrects: ['B'],
            feedback: [
                'The Administrative distance (AD) of EIGRP is 90 while the AD of OSPF is 110 so EIGRP route will be chosen to install into the routing table.',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which configuration is needed to generate an RSA key for SSH on a router?',
            answers: [
                'Configure the version of SSH', 
                'Configure VTY access',
                'Create a user', 
                'Assign a DNS domain name',
            ],
            corrects: ['D'],
            feedback: [
                'In order to generate an RSA key for SSH, we need to configure the hostname and a DNS domain name on the router',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which set of action satisfy the requirement for multi-factor authentication?',
            answers: [
                'The user swipes a key fob, then clicks through an email link', 
                'The user enters a user name and password, and then clicks a notification in an authentication app on a mobile device',
                'The user enters a PIN into an RSA token, and then enters the displayed RSA key on a login screen', 
                'The user enters a user name and password and then re-enters the credentials on a second screen',
            ],
            corrects: ['A'],
            feedback: [
                'This is an example of how two-factor authentication (2FA) works:',
                '•	The user logs in to the website or service with their username and password.',
                '•	The password is validated by an authentication server and, if correct, the user becomes eligible for the second factor.',
                '•	The authentication server sends a unique code to the user’s second-factor method (such as a smartphone app).',
                '•	The user confirms their identity by providing the additional authentication for their second-factor method.',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which network allows devices to communicate without the need to access the Internet?',
            answers: [
                '172.9.0.0/16', 
                '172.28.0.0/16',
                '192.0.0.0/8', 
                '209.165.201.0/24',
            ],
            corrects: ['B'],
            feedback: [
                'This question asks about the private ranges of IPv4 addresses. The private ranges of each class of IPv4 are listed below:',
                '•	Class A private IP address ranges from 10.0.0.0 to 10.255.255.255',
                '•	Class B private IP address ranges from 172.16.0.0 to 172.31.255.255',
                '•	Class C private IP address ranges from 192.168.0.0 to 192.168.255.255',
                'Only the network 172.28.0.0/16 belongs to the private IP address (of class B).',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'What is the primary effect of the spanning-tree portfast command?',
            answers: [
                'It enables BPDU messages', 
                'It minimizes spanning-tree convergence time',
                'It immediately puts the port into the forwarding state when the switch is reloaded', 
                'It immediately enables the port in the listening state',
            ],
            corrects: ['C'],
            feedback: [
                'Portfast feature should only be used on edge ports (ports directly connected to end stations).',
                'Neither edge ports or PortFast enabled ports generate topology changes when the link toggles so we cannot say Portfast reduces the STP convergence time.',
                'PortFast causes a switch or trunk port to enter the spanning tree forwarding state immediately, bypassing the listening and learning states so answer C is the best choice.',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which result occurs when PortFast is enabled on an interface that is connected to another switch?',
            answers: [
                'Spanning tree may fail to detect a switching loop in the network that causes broadcast storms', 
                'VTP is allowed to propagate VLAN configuration information from switch to switch automatically.',
                'Root port choice and spanning tree recalculation are accelerated when a switch link goes down ', 
                'After spanning tree converges PortFast shuts down any port that receives BPDUs.',
            ],
            corrects: ['A'],
            feedback: [
                'Enabling the PortFast feature causes a switch or a trunk port to enter the STP forwarding-state immediately or upon a linkup event, thus bypassing the listening and learning states.',
                'To enable portfast on a trunk port you need the trunk keyword “spanning-tree portfast trunk“',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'Two switches are connected and using Cisco Dynamic Trunking Protocol. SW1 is set to Dynamic Desirable. SW2 is set to Dynamic Auto.  What is the result of this configuration?',
            answers: [
                'The link is in a downstate.', 
                'The link is in an error disables stale',
                'The link is becomes an access port', 
                'The link becomes a trunkport',
            ],
            corrects: ['D'],
            feedback: [
                'Dynamic Desirable + Dynamic Desirable/Dynamic Auto/Trunk will form a trunk link.',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which command should you enter to configure a device as an NTP server?',
            answers: [
                'ntp server', 
                'ntp peer',
                'ntp authenticate ', 
                'ntp master',
            ],
            corrects: ['D'],
            feedback: [
                'To configure a Cisco device as an Authoritative NTP Server, use the ntp master command.',
            ],
        },
        {
            type: 'multi',
            pic: null,
            question: 'Which two tasks must be performed to configure NTP to a trusted server in client mode on a single network device? (Choose two)',
            answers: [
                'Enable NTP authentication',
                'Verify the time zone',
                'Disable NTP broadcasts',
                'Specify the IP address of the NTP server',
                'Set the NTP server private key',
            ],
            corrects: ['A', '', '', 'D',''],
            feedback: [
                'To configure authentication, perform this task in privileged mode:',
                'Step 1: Configure an authentication key pair for NTP and specify whether the key will be trusted or untrusted.',
                'Step 2: Set the IP address of the NTP server and the public key.',
                'Step 3: Enable NTP client mode.',
                'Step 4: Enable NTP authentication.',
                'Step 5: Verify the NTP configuration.',
            ]
        },
        {
            type: 'multi',
            pic: null,
            question: 'Which two actions are performed by the Weighted Random Early Detection mechanism? (Choose two)',
            answers: [
                'It drops lower-priority packets before it drops higher-priority packets',
                'It can identify different flows with a high level of granularity',
                'It guarantees the delivery of high-priority packets',
                'It can mitigate congestion by preventing the queue from filling up',
                'It supports protocol discovery',
            ],
            corrects: ['A', '', '', 'D',''],
            feedback: [
                'Weighted Random Early Detection (WRED) is just a congestion avoidance mechanism. WRED drops packets selectively based on IP precedence. Edge routers assign IP precedences to packets as they enter the network. When a packet arrives, the following events occur:',
                '1. The average queue size is calculated.',
                '2. If the average is less than the minimum queue threshold, the arriving packet is queued.',
                '3. If the average is between the minimum queue threshold for that type of traffic and the maximum threshold for the interface, the packet is either dropped or queued, depending on the packet drop probability for that type of traffic.',
                '4. If the average queue size is greater than the maximum threshold, the packet is dropped.',
                'WRED reduces the chances of tail drop (when the queue is full, the packet is dropped) by selectively dropping packets when the output interface begins to show signs of congestion (thus it can mitigate congestion by preventing the queue from filling up).',
                'By dropping some packets early rather than waiting until the queue is full, WRED avoids dropping large numbers of packets at once and minimizes the chances of global synchronization. Thus, WRED allows the transmission line to be used fully at all times.',
                'WRED generally drops packets selectively based on IP precedence. Packets with a higher IP precedence are less likely to be dropped than packets with a lower precedence. Thus, the higher the priority of a packet, the higher the probability that the packet will be delivered',
            ]
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which command enables a router to become a DHCP client?',
            answers: [
                'ip address dhcp', 
                'ip helper-address',
                'ip dhcp pool', 
                'ip dhcp client',
            ],
            corrects: ['A'],
            feedback: [
                'If we want to get an IP address from the DHCP server on a Cisco device, we can use the command “ip address dhcp”. The command “ip helper-address” enables a router to become a DHCP Relay Agent.',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which feature or protocol determines whether the QoS on the network is sufficient to support IP services?',
            answers: [
                'LLDP', 
                'CDP',
                'IP SLA', 
                'EEM',
            ],
            corrects: ['C'],
            feedback: [
                'IP SLA allows an IT professional to collect information about network performance in real time. Therefore it helps determine whether the QoS on the network is sufficient for IP services or not.',
                'Cisco IOS Embedded Event Manager (EEM) is a powerful and flexible subsystem that provides real-time network event detection and onboard automation.',
                'It gives you the ability to adapt the behavior of your network devices to align with your business needs.',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'A network engineer must back up 20 network router configurations globally within a customer environment. Which protocol allows the engineer to perform this function using the Cisco IOS MIB?',
            answers: [
                'COP', 
                'SNMP',
                'SMTP', 
                'ARP',
            ],
            corrects: ['B'],
            feedback: [
                'SNMP is an application-layer protocol that provides a message format for communication between SNMP managers and agents. ',
                'SNMP provides a standardized framework and a common language used for the monitoring and management of devices in a network.',
                'The SNMP framework has three parts:',
                '•	An SNMP manager',
                '•	An SNMP agent',
                '•	A Management Information Base (MIB)',
                'The Management Information Base (MIB) is a virtual information storage area for network management information, which consists of collections of managed objects.',
                'With SNMP, the network administrator can send commands to multiple routers to do the backup.',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'What is the primary difference between AAA authentication and authorization?',
            answers: [
                'Authentication verifies a username and password, and authorization handles the communication between the authentication agent and the user database', 
                'Authentication identifies a user who is attempting to access a system, and authorization validates the users password',
                'Authentication identifies and verifies a user who is attempting to access a system, and authorization controls the tasks the user can perform', 
                'Authentication controls the system processes a user can access and authorization logs 9ie activities the user initiates',
            ],
            corrects: ['C'],
            feedback: [
                'AAA stands for Authentication, Authorization and Accounting.',
                '•	Authentication: Specify who you are (usually via login username & password)',
                '•	Authorization: Specify what actions you can do, what resource you can access',
                '•	Accounting: Monitor what you do, how long you do it (can be used for billing and auditing)',
                'An example of AAA is shown below:',
                '•	Authentication: “I am a normal user. My username/password is user_tom/learnforever“',
                '•	Authorization: “user_tom can access LearnCCNA server via HTTP and FTP“',
                '•	Accounting: “user_tom accessed LearnCCNA server for 2 hours“. This user only uses “show” commands.',
            ],
        },
        {
            type: 'multi',
            pic: null,
            question: 'Which two of these are characteristics of the 802.1Q protocol? (Choose two)',
            answers: [
                'It is a layer 2 messaging protocol which maintains vlan configurations across network.',
                'It includes an 8-bit field which specifies the priority of a frame.',
                'It is used exclusively for tagging vlan frames and does not address network reconvergence following switched network topology changes.',
                'It modifies the 802.3 frame header and thus requires that the FCS be recomputed.',
                'It is a trunking protocol capable of earring untagged frames.',
            ],
            corrects: ['', '', '', 'D','E'],
            feedback: [
                'IEEE 802.1Q is the networking standard that supports Virtual LANs (VLANs) on an Ethernet network. It is a protocol that allows VLANs to communicate with one another using a router.',
                '802.1Q trunks support tagged and untagged frames.If a switch receives untagged frames on a trunk port, it believes that frame is a part of the native VLAN. Also, frames from a native VLAN are not tagged when exiting the switch via a trunk port.',
                'The 802.1q frame format is same as 802.3. The only change is the addition of 4 bytes fields. That additional header includes a field with which to identify the VLAN number. Because inserting this header changes the frame, 802.1Q encapsulation forces a recalculation of the original FCS field in the Ethernet trailer.',
                'Note: Frame Check Sequence (FCS) is a four-octet field used to verify that the frame was received without loss or error. FCS is based on the contents of the entire frame.',
            ]
        },
        {
            type: 'multi',
            pic: null,
            question: 'How to create a trunk port and allow VLAN 20? (Choose three)',
            answers: [
                'switchport trunk encapsulation dot1q',
                'switchport mode trunk',
                'switchport trunk allowed vlan 20',
                'switchport trunk native vlan 20',
            ],
            corrects: ['A', 'B', 'C', ''],
            feedback: [
                'In switches that support both InterSwitch Link (ISL) and 802.1Q trunking encapsulations, we need to specify an trunking protocol so we must use the command “switchport trunk encapsulation dot1q” command first to set the trunk mode to 802.1Q.',
                'Then we configure trunking interface with the “switchport mode trunk” command.',
                'Then we explicitly allow vlan 20 with the command “switchport trunk allowed vlan 20” command. By default all VLANs are allowed to pass but after entering this command, only VLAN 20 is allowed',
            ]
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which statement about DTP is true?',
            answers: [
                'It uses the native VLAN.', 
                'It negotiates a trunk link after VTP has been configured.',
                'It uses desirable mode by default.', 
                'It sends data on VLAN 1.',
            ],
            corrects: ['D'],
            feedback: [
                'Control traffic like CDP, DTP, PAgP, and VTP uses VLAN 1 to operate, even if you change the native VLAN.',
            ],
        },
        {
            type: 'multi',
            pic: null,
            question: 'What is true about DTP? (Choose three)',
            answers: [
                'Layer 2 protocol',
                'Layer 3 protocol',
                'Proprietary protocol',
                'enabled by default',
                'disabled by default',
            ],
            corrects: ['A', '', 'C', 'D',''],
            feedback: [
                'The Dynamic Trunking Protocol (DTP) is a proprietary networking protocol developed by Cisco Systems for the purpose of negotiating trunking on a link between two VLAN-aware switches, and for negotiating the type of trunking encapsulation to be used.',
                'It is a Layer 2 protocol and it is enabled by default on Cisco switches (so the interfaces of your switches will be in “dynamic auto” or “dynamic desirable” mode).',
                'If you want to turn it off, use the “switchport nonegotiate” under interface mode.',
            ]
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which IEEE standard protocol is initiated as a result of successful DTP completion in a switch over FastEthernet?',
            answers: [
                '802.3ad', 
                '802.1w',
                '802.1Q', 
                '802.1d',
            ],
            corrects: ['C'],
            feedback: [
                'Dynamic Trunking Protocol (DTP) is a Cisco proprietary protocol for negotiating trunking on a link between two devices and for negotiating the type of trunking encapsulation (802.1Q) to be used.',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'If the primary root bridge experiences a power loss, which switch takes over?',
            answers: [
                'switch 0040.0ВС0.90C5', 
                'switch 00E0.F90B.6BE3',
                'switch 0004.9A1A.C182', 
                'switch 00E0.F726.3DC6',
            ],
            corrects: ['C'],
            feedback: [
                'The switches compare their Bridge ID with each other to find out who will be the root bridge. The root bridge is the bridge with the lowest bridge ID.',
                'Bridge ID = Bridge Priority + MAC Address',
                'In this question the bridge priority was not mentioned so we suppose they are the same. Therefore the switch with lowest MAC address will become the new root bridge.',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'If primary and secondary root switches with priority 16384 both experience catastrophic losses, which tertiary switch can take over?',
            answers: [
                'a switch with priority 20480', 
                'a switch with priority 8192',
                'a switch with priority 4096', 
                'a switch with priority 12288',
            ],
            corrects: ['A'],
            feedback: [
                'This is a tricky question. We know the switch with lowest value of priority is elected the root switch.',
                'Therefore in this question the switches with priority of 4096, 8192, 12288 (which are lower than the current value of the root bridge 16384) are not joining the root bridge election by somehow.',
                'The only suitable answer is the switch with priority 20480 will become the root bridge.',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which spanning-tree protocol rides on top of another spanning-tree protocol?',
            answers: [
                'MSTP', 
                'RSTP',
                'PVST+', 
                'Mono Spanning Tree',
            ],
            corrects: ['A'],
            feedback: [
                'Multiple Spanning Tree (MST) rides on top of RSTP so it converges very fast.',
                'The idea behind MST is that some VLANs can be mapped to a single spanning tree instance because most networks do not need more than a few logical topologies.',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which IEEE standard does PVST+ use to tunnel information?',
            answers: [
                '802.1x', 
                '802.1q',
                '802.1w', 
                '802.1s',
            ],
            corrects: ['B'],
            feedback: [
                'Cisco developed PVST+ to allow strolling numerous STP instances, even over an 802.1Q network via the use of a tunneling mechanism.',
                'PVST+ utilizes Cisco gadgets to hook up with a Mono Spanning Tree area to a PVST+ region.',
                'No particular configuration is needed to attain this. PVST+ affords assist for 802.1Q trunks and the mapping of a couple of spanning trees to the single spanning tree of popular 802.1Q switches strolling Mono Spanning Tree.',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which process is associated with spanning-tree convergence?',
            answers: [
                'determining the path cost', 
                'electing designated ports',
                'learning the sender bridge ID', 
                'assigning the port ID',
            ],
            corrects: ['B'],
            feedback: [
                'SPT must performs three steps to provide a loop-free network topology:',
                '1. Elects one root bridge',
                '2. Select one root port per nonroot bridge',
                '3. Select one designated port on each network segment -> Answer B is correct.',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'When an interface is configured with PortFast BPDU guard, how does the interface respond when it receives a BPDU?',
            answers: [
                'It continues operating normally.', 
                'It goes into an errdisable state.',
                'It goes into a down/down state.', 
                'It becomes the root bridge for the configured VLAN.',
            ],
            corrects: ['B'],
            feedback: [
                'PortFast BPDU guard prevents loops by moving a nontrunking port into an errdisable state when a BPDU is received on that port. ',
                'When you enable BPDU guard on the switch, spanning tree shuts down PortFast-configured interfaces that receive BPDUs instead of putting them into the spanning tree blocking state.',
                'In a valid configuration, PortFast-configured interfaces do not receive BPDUs (because PortFast should only be configured on interfaces which are connected to hosts). ',
                'If a PortFast-configured interface receives a BPDU, an invalid configuration exists. BPDU guard provides a secure response to invalid configurations because the administrator must manually put the interface back in service.',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which spanning-tree feature places a port immediately into a forwarding stated?',
            answers: [
                'BPDU guard', 
                'PortFast',
                'loop guard', 
                'UDLD',
                'Uplink Fast',
            ],
            corrects: ['B'],
            feedback: [
                'When you enable PortFast on the switch, spanning tree places ports in the forwarding state immediately, instead of going through the listening, learning, and forwarding states.',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which type does a port become when it receives the best BPDU on a bridge?',
            answers: [
                'The designated port', 
                'The backup port',
                'The alternate port', 
                'The root port',
            ],
            corrects: ['D'],
            feedback: [
                'Root port is the port on non-root bridge which is closest to the root bridge (in term of cost). Therefore when a port receives the best BPDU on a non-root bridge it will become the root port.',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which value can you modify to configure a specific interface as the preferred forwarding interface?',
            answers: [
                'The interface number', 
                'The port priority',
                'The VLAN priority', 
                'The hello time',
            ],
            corrects: ['B'],
            feedback: [
                'We can configure the port priority to change the preferred forwarding interface as we wish. For example we can change the port priority of an interface for VLAN 20 to 64 as follows: spanning-tree vlan 20 port-priority 64',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'What is one benefit of PVST+?',
            answers: [
                'PVST+ reduces the CPU cycles for all the switches in the network.', 
                'PVST+ automatically selects the root bridge location, to provide optimization.',
                'PVST+ allows the root switch location to be optimized per vlan', 
                'PVST+ supports Layer 3 load balancing without loops.',
            ],
            corrects: ['C'],
            feedback: [
                'Per VLAN Spanning Tree (PVST) maintains a spanning tree instance for each VLAN configured in the network.',
                'It means a switch can be the root bridge of a VLAN while another switch can be the root bridge of other VLANs in a common topology.',
                'For example, Switch 1 can be the root bridge for Voice data while Switch 2 can be the root bridge for Video data. If designed correctly, it can optimize the network traffic.',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'A BPDU guard is configured on an interface that has PortFast enable. Which state does the interface enter when it receives a BPDU?',
            answers: [
                'Blocking', 
                'Shutdown',
                'Listening', 
                'Errdisable',
            ],
            corrects: ['D'],
            feedback: [
                'PortFast BPDU guard prevents loops by moving a nontrunking port into an errdisable state when a BPDU is received on that port.',
                'In a valid configuration, PortFast-configured interfaces do not receive BPDUs (because PortFast should only be configured on interfaces which are connected to hosts).',
                'If a PortFast-configured interface receives a BPDU, an invalid configuration exists. BPDU guard provides a secure response to invalid configurations because the administrator must manually put the interface back in service.',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'When you enable PortFast on a switch port, the port immediately transitions to which state?',
            answers: [
                'Blocking', 
                'Forwarding',
                'Learning', 
                'Listening',
            ],
            corrects: ['B'],
            feedback: [
                'PortFast causes a switch or trunk port to enter the spanning tree forwarding state immediately, bypassing the listening and learning states.',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which statement about spanning-tree root-bridge election is true?',
            answers: [
                'It is always performed automatically', 
                'Each VLAN must have its own root bridge',
                'Each VLAN must use the same root bridge', 
                'Each root bridge must reside on the same root switch',
            ],
            corrects: ['B'],
            feedback: [
                'Answer A is not correct as we can choose which switch to become root bridge by configuring bridge priority. The switch with lowest bridge priority (value) would become the root bridge.',
                'For answer B, this paragraph from Cisco confirms it is the correct answer:“When you implement a root bridge in a switching network, you usually refer to the root bridge as the root switch. Each VLAN must have its own root bridge because each VLAN is a separate broadcast domain. The roots for the different VLANs can all reside in a single switch or in various switches.”',
                'The meaning of answer C is not clear but maybe it means “every VLAN must use the same root bridge” which is not correct as Sw1 can be the root bridge for VLANs 1, 3, 5 but Sw2 can be the root bridge for VLAN 2, 4, 6…',
                'From the quote above we can say answer D is not correct.',
            ],
        },
        {
            type: 'multi',
            pic: null,
            question: 'A question about BPDU. What would a PortFast BPDU guard port do when it is configured on a port? (Choose two)',
            answers: [
                'err-disabled when port receives BPDUs',
                'supported only on nontrunking access ports',
                'forward when port receives BPDUs',
                'supported on trunk ports',
            ],
            corrects: ['A', 'B', '', ''],
            feedback: [
                'PortFast BPDU guard prevents loops by moving a nontrunking port into an errdisable state when a BPDU is received on that port.',
                'When you enable BPDU guard on the switch, spanning tree shuts down PortFast-configured interfaces that receive BPDUs instead of putting them into the spanning tree blocking state.',
                'In a valid configuration, PortFast-configured interfaces do not receive BPDUs. If a PortFast-configured interface receives a BPDU, an invalid configuration exists.',
                'BPDU guard provides a secure response to invalid configurations because the administrator must manually put the interface back in service.',
            ]
        },
        {
            type: 'multi',
            pic: null,
            question: 'Which two spanning-tree port states does RSTP combine to allow faster convergence? (Choose two)',
            answers: [
                'discarding',
                'listening',
                'blocking',
                'forwarding',
                'learning',
            ],
            corrects: ['', 'B', 'C', '',''],
            feedback: [
                'There are only three port states left in RSTP that correspond to the three possible operational states. The 802.1D blocking, and listening states are merged into the 802.1w discarding state.',
                '•	Discarding – the port does not forward frames, process received frames, or learn MAC addresses – but it does listen for BPDUs (like the STP blocking state)',
                '•	Learning – receives and transmits BPDUs and learns MAC addresses but does not yet forward frames (same as STP).',
                '•	Forwarding – receives and sends data, normal operation, learns MAC address, receives and transmits BPDUs (same as STP).',
            ]
        },
        {
            type: 'multi',
            pic: null,
            question: 'Which two switch states are valid for 802.1w? (Choose two)',
            answers: [
                'listening',
                'backup',
                'disabled',
                'learning',
                'discarding',
            ],
            corrects: ['', '', '', 'D','E'],
            feedback: [
                'IEEE 802.1w is Rapid Spanning Tree Protocol (RSTP). There are only three port states left in RSTP that correspond to the three possible operational states. The 802.1D disabled, blocking, and listening states are merged into the 802.1w discarding state.',
                '•	Discarding – the port does not forward frames, process received frames, or learn MAC addresses – but it does listen for BPDUs (like the STP blocking state)',
                '•	Learning – receives and transmits BPDUs and learns MAC addresses but does not yet forward frames (same as STP).',
                '•	Forwarding – receives and sends data, normal operation, learns MAC address, receives and transmits BPDUs (same as STP).',
            ]
        },
        {
            type: 'multi',
            pic: null,
            question: 'Which two states are the port states when RSTP has converged? (choose two)',
            answers: [
                'discarding',
                'learning',
                'disabled',
                'forwarding',
                'listening',
            ],
            corrects: ['A', '', '', 'D',''],
            feedback: [
                'RSTP only has 3 port states that are discarding, learning and forwarding. When RSTP has converged there are only 2 port states left: discarding and forwarding.',
            ]
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which option describes how a switch in rapid PVST+ mode responds to a topology change?',
            answers: [
                'It immediately deletes dynamic MAC addresses that were learned by all ports on the switch.', 
                'It sets a timer to delete all MAC addresses that were learned dynamically by ports in the same STP instance.',
                'It sets a timer to delete dynamic MAC addresses that were learned by all ports on the switch.', 
                'It immediately deletes all MAC addresses that were learned dynamically by ports in the same STP instance.',
            ],
            corrects: ['D'],
            feedback: [
                'Rapid PVST+—This spanning-tree mode is the same as PVST+ except that is uses a rapid convergence based on the IEEE 802.1w standard.',
                'To provide rapid convergence, the rapid PVST+ immediately deletes dynamically learned MAC address entries on a per-port basis upon receiving a topology change. ',
                'By contrast, PVST+ uses a short aging time for dynamically learned MAC address entries.',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which port state is introduced by Rapid-PVST?',
            answers: [
                'learning', 
                'listening',
                'discarding', 
                'forwarding',
            ],
            corrects: ['C'],
            feedback: [
                'PVST+ is based on IEEE802.1D Spanning Tree Protocol (STP).',
                'But PVST+ has only 3 port states (discarding, learning and forwarding) while STP has 5 port states (blocking, listening, learning, forwarding and disabled). So discarding is a new port state in PVST+.',
            ],
        },
        {
            type: 'multi',
            pic: null,
            question: 'A network administrator needs to configure port security on a switch. Which two statements are true? (Choose two)',
            answers: [
                'The network administrator can apply port security to dynamic access ports',
                'The network administrator can configure static secure or sticky secure mac addresses in the voice vlan',
                'The sticky learning feature allows the addition of dynamically learned addresses to the running configuration.',
                'The network administrator can apply port security to EtherChannels.',
                'When dynamic mac address learning is enabled on an interface, the switch can learn new addresses up to the maximum defined.',
            ],
            corrects: ['', '', 'C', '','E'],
            feedback: [
                'Follow these guidelines when configuring port security:',
                '•	Port security can only be configured on static access ports, trunk ports, or 802.1Q tunnel ports. -> A is not correct.',
                '•	A secure port cannot be a dynamic access port.',
                '•	A secure port cannot be a destination port for Switched Port Analyzer (SPAN).',
                '•	A secure port cannot belong to a Fast EtherChannel or Gigabit EtherChannel port group. -> D is not correct',
                '•	You cannot configure static secure or sticky secure MAC addresses on a voice VLAN. -> B is not correct.',
                '•	When you enable port security on an interface that is also configured with a voice VLAN, you must set the maximum allowed secure addresses on the port to at least two.',
                '•	If any type of port security is enabled on the access VLAN, dynamic port security is automatically enabled on the voice VLAN.',
                '•	When a voice VLAN is configured on a secure port that is also configured as a sticky secure port, all addresses seen on the voice VLAN are learned as dynamic secure addresses, and all addresses seen on the access VLAN (to which the port belongs) are learned as sticky secure addresses.',
                '•	The switch does not support port security aging of sticky secure MAC addresses.',
                '•	The protect and restrict options cannot be simultaneously enabled on an interface.'
            ]
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which option is the default switch port port-security violation mode?',
            answers: [
                'shutdown', 
                'protect',
                'shutdown vlan', 
                'restrict',
            ],
            corrects: ['A'],
            feedback: [
                'Shutdown is the default switch port port-security violation mode. When in this mode, the switch will automatically force the switchport into an error disabled (err-disable) state when a violation occurs.',
                'While in this state, the switchport forwards no traffic. The switchport can be brought out of this error disabled state by issuing the errdisable recovery cause CLI command or by disabling and re-enabling the switchport.',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'By default, how many MAC addresses are permitted to be learned on a switch port with port security enabled?',
            answers: [
                '8', 
                '2',
                '1', 
                '0',
            ],
            corrects: ['C'],
            feedback: [
                'By default, port security limits the MAC address that can connect to a switch port to one. If the maximum number of MAC addresses is reached, when another MAC address attempting to access the port a security violation occurs.',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'Select the action that results from executing these commands: Switch(config-if)# switchport port-security Switch(config-if)# switchport port-security mac-address sticky',
            answers: [
                'A dynamically learned MAC address is saved in the startup-configuration file.', 
                'A dynamically learned MAC address is saved in the running-configuration file.',
                'A dynamically learned MAC address is saved in the VLAN database.', 
                'Statically configured MAC addresses are saved in the startup-configuration file if frames from that address are received.',
                'Statically configured MAC addresses are saved in the running-configuration file if frames from that address are received.',
            ],
            corrects: ['B'],
            feedback: [
                'The full syntax of the second command is: switchport port-security mac-address sticky [MAC]',
                'If we don’t specify the MAC address (like in this question) then the switch will dynamically learn the attached MAC Address and place it into your running-configuration -> B is correct.',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which condition does the err-disabled status indicate on an Ethernet interface?',
            answers: [
                'There is a duplex mismatch.', 
                'The device at the other end of the connection is powered off.',
                'The serial interface is disabled.', 
                'The interface is configured with the shutdown command.',
                'Port security has disabled the interface.',
                'The interface is fully functioning.',
            ],
            corrects: ['E'],
            feedback: [
                'There are various reasons for the interface to go into errdisable. The reason can be:',
                '•	Duplex mismatch',
                '•	Port channel misconfiguration',
                '•	BPDU guard violation',
                '•	UniDirectional Link Detection (UDLD) condition',
                '•	Late-collision detection',
                '•	Link-flap detection',
                '•	Security violation',
                '•	Port Aggregation Protocol (PAgP) flap',
                '•	Layer 2 Tunneling Protocol (L2TP) guard',
                '•	DHCP snooping rate-limit',
                '•	Incorrect GBIC / Small Form-Factor Pluggable (SFP) module or cable',
                '•	Address Resolution Protocol (ARP) inspection',
                '•	Inline power',
                'Therefore, in fact there are two correct answers in this question, which are “There is a duplex mismatch” and “Port security has disabled the interface” but maybe you should choose the port security answer as it is the most popular reason.',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which port security violation mode allows traffic from valid mac address to pass but block traffic from invalid MAC address?',
            answers: [
                'protect', 
                'shutdown',
                'shutdown vlan', 
                'restrict',
            ],
            corrects: ['A'],
            feedback: [
                'In fact both “protect” and “restrict” mode allows traffic from passing with a valid MAC address so this question is not good.',
                'This is a quote from Cisco for these two modes:protect: drops packets with unknown source addresses until you remove a sufficient number of secure MAC addresses to drop below the maximum value.',
                'restrict: drops packets with unknown source addresses until you remove a sufficient number of secure MAC addresses to drop below the maximum value and causes the SecurityViolation counter to increment.',
                'Therefore the only difference between these two modes is “restrict” mode causes the SecurityViolation counter to increment (only useful for statistics).',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which command can you enter in a network switch configuration so that learned MAC addresses are saved in configuration as they connect?',
            answers: [
                'Switch(config-if)#switch port-security', 
                'Switch(config-if)#switch port-security mac-address sticky',
                'Switch(config-if)#switch port-security maximum 10', 
                'Switch(config-if)#switch mode access',
            ],
            corrects: ['B'],
            feedback: [
                'The full command should be “switchport port-security mac-address sticky” but we can abbreviate in Cisco command.',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which feature can you use to monitor traffic on a switch by replicating it to another port or ports on the same switch?',
            answers: [
                'copy run start', 
                'traceroute',
                'the ICMP Echo IP SLA', 
                'SPAN',
            ],
            corrects: ['D'],
            feedback: [
                'Switched Port Analyzer (SPAN) is used to analyze network traffic passing through ports on a switch.',
                'For example we can configure the Switch to monitor its interface Fa0/0, which connects to the Core, by sending all traffic to/from Fa0/0 to its Fa0/1 interface.',
                'At Fa0/1 interface we connect to a computer and use such a software like Wireshark to capture the packets.',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'What is the status of port-channel if LACP is misconfigured?',
            answers: [
                'Forwarding', 
                'Enabled',
                'Disabled', 
                'Errdisabled',
            ],
            corrects: ['C'],
            feedback: [
                'EtherChannel misconfiguration occurs when the channel parameters do not match on both sides of the EtherChannel, resulting in the following message:',
                '%PM-SP-4-ERR_DISABLE: channel-misconfig error detected on Po3, putting E1/3 in err-disable state',
                'Therefore from the output above we can see that when miconfigured, the physical (member) interface is put into err-disable state.',
                'But this question asks above “the status of port-channel” (not the physical member interface) so answer “Disabled” is a better choice.',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'What parameter can be different on ports within an EtherChannel?',
            answers: [
                'speed', 
                'DTP negotiation settings',
                'trunk encapsulation', 
                'duplex',
            ],
            corrects: ['B'],
            feedback: [
                'All interfaces in an EtherChannel must be configured identically to form an EtherChannel. Specific settings that must be identical include:',
                '•	Speed settings',
                '•	Duplex settings',
                '•	STP settings',
                '•	VLAN membership (for access ports)',
                '•	Native VLAN (for trunk ports)',
                '•	Allowed VLANs (for trunk ports)',
                '•	Trunking Encapsulation (ISL or 802.1Q, for trunk ports)',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which option is the industry-standard protocol for EtherChannel?',
            answers: [
                'LACP', 
                'PAGP',
                'Cisco Discovery Protocol', 
                'DTP',
            ],
            corrects: ['A'],
            feedback: [
                'LACP is the IEEE Standard (IEEE 802.3ad) and is the most common dynamic Etherchannel protocol, whereas PAgP is a Cisco proprietary protocol and works only between supported vendors and Cisco devices.',
            ],
        },
        {
            type: 'multi',
            pic: null,
            question: 'Which two EtherChannel PAgP modes can you configure? (Choose two)',
            answers: [
                'Auto',
                'Desirable',
                'Active',
                'Passive',
                'On',
            ],
            corrects: ['A', 'B', '', '',''],
            feedback: [
                
                '',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which statement about slow inter VLAN forwarding is true?',
            answers: [
                'The VLAN is experiencing slowness in the point-to-point collisionless connection.', 
                'The VLANs are experiencing slowness because multiple devices are connected to the same hub.',
                'The local VLAN is working normally, but traffic to the alternate VLAN is forwarded slower than expected.', 
                'The entire VLAN is experiencing slowness.',
                'The VLANs are experiencing slowness due to a duplex mismatch.',
            ],
            corrects: ['E'],
            feedback: [
                'The causes of slow interVLAN are usually duplex mismatch, collision domain issues or user misconfiguration.',
            ],
        },
        {
            type: 'multi',
            pic: null,
            question: 'Which two steps must you perform to enable router-on-stick on a switch?',
            answers: [
                'connect the router to a trunk port',
                'configure the subinterface number exactly the same as the matching VLAN',
                'configure full duplex',
                'configure an ip route to the vlan destination network',
                'assign the access port to the vlan',
            ],
            corrects: ['A', '', '', '','E'],
            feedback: [
                'This question only asks about enable router-on-stick on a switch, not a router. We don’t have subinterface on a switch so B is not a correct answer.',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which step in the router boot process searches for an IOS image to load into the router?',
            answers: [
                'bootstrap', 
                'POST',
                'mini-IOS', 
                'ROMMON mode',
            ],
            corrects: ['A'],
            feedback: [
                'The following details the router boot process:',
                '1. The router is powered on.',
                '2. The router first runs Power-On Self Test (POST)',
                '3. The bootstrap checks the Configuration Register value to specify where to load the IOS.',
                'By default (the default value of Configuration Register is 2102, in hexadecimal), the router first looks for “boot system” commands in startup-config file. If it finds these commands, it will run boot system commands in order they appear in startup-config to locate the IOS. If not, the IOS image is loaded from Flash .',
                'If the IOS is not found in Flash, the bootstrap can try to load the IOS from TFTP server or from ROM (mini-IOS).',
                '4. After the IOS is found, it is loaded into RAM.',
                '5. The IOS attempts to load the configuration file (startup-config) from NVRAM to RAM.',
                'If the startup-config is not found in NVRAM, the IOS attempts to load a configuration file from TFTP. If no TFTP server responds, the router enters Setup Mode (Initial Configuration Mode).',
                'For more information about booting process please read our Cisco Router Boot Sequence tutorial.',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'If a router has four interfaces and each interface is connected to four switches, how many broadcast domains are present on the router?',
            answers: [
                '1', 
                '2',
                '4', 
                '8',
            ],
            corrects: ['C'],
            feedback: [
                'Remember that only route interface can separate broadcast domain (while switch interface separate collision domain) so the broadcast domains are equal to the number of router interfaces, which is four in this case.',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'What is the purpose of the POST operation on a router?',
            answers: [
                'determine whether additional hardware has been added', 
                'locate an IOS image for booting',
                'enable a TFTP server', 
                'set the configuration register',
            ],
            corrects: ['A'],
            feedback: [
                'In short, when powered on the router needs to do:',
                '1. Run POST to check hardware',
                '2. Search for a valid IOS (the Operating System of the router)',
                '3. Search for a configuration file (all the configurations applied to this router)',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which command can you execute to set the user inactivity timer to 10 seconds?',
            answers: [
                'SW1(config-line)#exec-timeout 0 10', 
                'SW1(config-line)#exec-timeout 10',
                'SW1(config-line)#absolute-timeout 0 10', 
                'SW1(config-line)#absolute-timeout 10',
            ],
            corrects: ['A'],
            feedback: [
                'The “exec-timeout” command is used to configure the inactive session timeout on the console port or the virtual terminal.',
                'The syntax of this command is: exec-timeout minutes [seconds]',
                'Therefore we need to use the “exec-timeout 0 10” command to set the user inactivity timer to 10 seconds.',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'A Cisco router is booting and has just completed the POST process. It is now ready to find and load an IOS image. What function does the router perform next?',
            answers: [
                'It checks the configuration register', 
                'It attempts to boot from a TFTP server',
                'It loads the first image file in flash memory', 
                'It inspects the configuration file in NVRAM for boot instructions',
            ],
            corrects: ['A'],
            feedback: [
                'When you turn the router on, it runs through the following boot process.The Power-On Self Test (POST) checks the router’s hardware. When the POST completes successfully, the System OK LED indicator comes on.',
                'The router checks the configuration register to identify where to load the IOS image from. A setting of 0×2102 means that the router will use information in the startup-config file to locate the IOS image.',
                'If the startup-config file is missing or does not specify a location, it will check the following locations for the IOS image:',
                '1. Flash (the default location)',
                '2. TFTP server',
                '3. ROM (used if no other source is found)',
                'The router loads the configuration file into RAM (which configures the router). The router can load a configuration file from:',
                '•	NVRAM (startup-configuration file)',
                '•	TFTP server',
                'If a configuration file is not found, the router starts in setup mode.',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which of the following privilege level is the most secured?',
            answers: [
                'Level 0', 
                'Level 1',
                'Level 15', 
                'Level 16',
            ],
            corrects: ['C'],
            feedback: [
                'By default, the Cisco IOS CLI has two privilege levels enabled, level 1 and level 15.',
                '•	User EXEC mode (privilege level 1): provides the lowest EXEC mode user privileges and allows only user-level commands available at the Router> prompt.',
                '•	Privileged EXEC mode (privilege level 15): includes all enable-level commands at the Router# prompt. Level 15 users can execute all commands and this is the most secured and powerful privilege level.',
                'However, there are actually 16 privilege levels available on the CLI, from 0 to 15 and you can assign users to any of those levels. Zero-level access allows only five commands -logout, enable, disable, help, and exit.',
                'User level (level 1) provides very limited read-only access to the router, and privileged level (level 15) provides complete control over the router.',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'What to do when the router password was forgotten?',
            answers: [
                'use default password cisco to reset', 
                'access router physically',
                'use ssl/vpn', 
                'Type confreg 0x2142 at the rommon 1',
            ],
            corrects: ['D'],
            feedback: [
                'To reset the password we can type “confreg 0x2142” under rommon mode to set the configuration register to 2142 in hexadecimal (the prefix 0x means hexadecimal (base 16)). With this setting when that router reboots, it bypasses the startup-config.',
            ],
        },
        {
            type: 'multi',
            pic: null,
            question: 'Which two Cisco IOS commands, used in troubleshooting, can enable debug output to a remote location? (Choose two)',
            answers: [
                'no logging console',
                'logging host ip-address',
                'terminal monitor',
                'show logging | redirect flashioutput.txt',
                'snmp-server enable traps syslog',
            ],
            corrects: ['', 'B', 'C', '',''],
            feedback: [
                'The “no logging console” turns off logging to the console connection (it is turned on by default) and it is often used if the console received large amount of logging output.',
                'But this command is not recommended in normal configuration -> A is not correct.',
                'The command “logging host ip-address” instructs the device to send syslog messages to an external syslog server -> B is correct.',
                'The “show logging | redirect flashioutput.txt” command will put the text file in the router flash memory because we did not specify a remote location (like tftp) -> D is not correct.',
                'The command “snmp-server enable traps syslog” instructs the device to send syslog messages to your network management server as SNMP traps instead of syslog packets. This command itself does not enable debug output to a remote location -> E is not correct.',
                'By default, Cisco IOS does not send log messages to a terminal session over IP, that is, telnet or SSH connections don’t get log messages. But notice that console connections on a serial cable do have logging enabled by default.',
                'The command “terminal monitor” helps logging messages appear on the your current terminal session.',
                'First we don’t think this is a correct answer but after reading the question again, we believe it is a suitable one as a Telnet/SSH session may be considered a “remote location” -> C is correct.',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which statement about recovering a password on a Cisco router is true?',
            answers: [
                'The default reset password is cisco', 
                'It requires a secure SSL/VPN connection',
                'A factory reset is required if you forget the password', 
                'It requires physical access to the router',
            ],
            corrects: ['D'],
            feedback: [
                'Other choices are surely incorrect so only “physical access” answer is the correct one. In order to recover a password on a Cisco router, the first thing you have to do is either switch off or shut down the router.',
            ],
        },
        {
            type: 'multi',
            pic: null,
            question: 'Which three commands can you use to set a router boot image? (Choose three)',
            answers: [
                'Router(config)# boot system flash c4500-p-mz.121-20.bin',
                'Router(config)# boot system tftp c7300-js-mz.122-33.SB8a.bin',
                'Router(config)#boot system rom c7301-advipservicesk9-mz.124-24.T4.bin',
                'Router> boot flash:c180x-adventerprisek9-mz-124-6T.bin',
                'Router(config)#boot flash:c180x-adventerprisek9-mz-124-6T.bin',
                'Router(config)#boot bootldr bootflash:c4500-jk9s-mz.122-23f.bin',
            ],
            corrects: ['A', 'B', 'C', '','',''],
            feedback: [
                'The correct syntax of the “boot” command is “boot system” path. In which the popular for path can be:',
                '• flash',
                '• rom',
                '• tftp',
                '• ftp',
                '• IP address (IP address of the server containing the system image file)',
                'Therefore answers A, B, C are correct.',
            ],
        },
        {
            type: 'multi',
            pic: null,
            question: 'Which two options are the best reasons to use an IPV4 private IP space? (Choose two)',
            answers: [
                'to enable intra-enterprise communication', 
                'to conserve global address space',
                'to manage routing overhead', 
                'to connect applications',
                'to implement NAT'
            ],
            corrects: ['A','B','','',''],
            feedback: [
                'In the intra-enterprise communication and to conserve global address space are best reasons to use an IPV4 private IP space',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which option is a benefit of switch stacking?',
            answers: [
                'It provides redundancy with no impact on resource usage.', 
                'It simplifies adding and removing hosts.',
                'It supports better performance of high-needs applications.', 
                'It provides higher port density with better resource usage.',
            ],
            corrects: ['D'],
            feedback: [
                'Switch stacking technology allows the network engineer to make that stack of physical switches act like one switch. The stacking cables together make a ring between the switches. That is, the switches connect in series, with the last switch connecting again to the first.',
                'Answer B is not correct as switch stacking is about connecting switches together so that they act as one switch, not about adding and removing hosts.Answer C is not correct because switch stacking has nothing to do with performance of high-needs applications.',
                'Surely switch stacking provides redundancy as stacking creates a ring of connection with two opposite paths. Whenever a frame is ready for transmission onto the path, a calculation is made to see which path has the most available bandwidth. The entire frame is then copied onto this half of the path.',
                'With switch stacking, STP, CDP and VTP would run on one switch, not multiple switches. Also there would be one MAC address table, and it would reference all ports on all physical switches so we may say switch stacking has better resource usage. Also if we consider all stacking switches as one logical switch then surely the port density is increase very much. Therefore answer D is the most suitable one.',
            ],
        },
        {
            type: 'multi',
            pic: null,
            question: 'Which two options describe benefits of aggregated chassis technology? (Choose two)',
            answers: [
                'It reduces management overhead',
                'Switches can be located anywhere regardless of there physical location',
                'It requires only one IP address per VLAN',
                'It requires only three IP addresses per VLAN',
                'It supports HSRP VRRP GLBP',
                'It support redundant configuration files',
            ],
            corrects: ['A', '', 'C', '','',''],
            feedback: [
                'Chassis aggregation is a Cisco technology to make multiple switches operate as a single switch. It is similar to stacking but meant for powerful switches (like the 6500 and 6800 series switches).',
                'Chassis aggregation is often used in the core layer and distribution layer (while switching stacking is used for access layer).',
                'The books do not mention about the benefits of chassis aggregation but they are the same as switch stacking.',
                '•	The stack would have a single management IP address.',
                '•	The engineer would connect with Telnet or SSH to one switch (with that one management IP address), not multiple switches.',
                '•	One configuration file would include all interfaces in all physical switches.',
                '•	STP, CDP, VTP would run on one switch, not multiple switches.',
                '•	The switch ports would appear as if all are on the same switch.',
                '•	There would be one MAC address table, and it would reference all ports on all physical switches.',
                'VSS is a chassis aggregation technology but it is dedicated for Cisco Catalyst 6500 or 4500 Series Switches. VSS increases operational efficiency by simplifying the network, reducing switch management overhead by at least 50 percent -> A is correct',
                'Single point of management, IP address, and routing instance for the Cisco Catalyst 6500 virtual switch',
                '•	Single configuration file and node to manage. Removes the need to configure redundant switches twice with identical policies.',
                '•	Only one gateway IP address is required per VLAN, instead of the three IP addresses per VLAN used today -> C is correct while D is not correct.',
                '•	Removes the need for Hot Standby Router Protocol (HSRP), Virtual Router Redundancy Protocol (VRRP), and Gateway Load Balancing Protocol (GLBP)-> so maybe E is not correct.',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'How is master redundancy provided on a stacked switches?',
            answers: [
                '1:N', 
                'N:1',
                '1:1', 
                '1+N',
                'N+1',
            ],
            corrects: ['A'],
            feedback: [
                '1:N master redundancy: Every switch in the stack can act as the master. If the current master fails, another master is elected from the stack.',
                '1:N master redundancy allows each stack member to serve as a master, providing the highest reliability for forwarding. Each switch in the stack can serve as a master, creating a 1:N availability scheme for network control. In the unlikely event of a single unit failure, all other units continue to forward traffic and maintain operation.',
                'N+1 simply means that there is a power backup in place should any single system component fail. The ‘N’ in this equation stands for the number of components necessary to run your system.',
                'The ‘+1’ means there is one independent backup should a component of that system fail. An example of “N+1” is your family has 5 members, so you need 5 cups to drink. But you have one extra cup for redundancy (6 cups in total) so that if any cup breaks, you still have enough cups for the family.',
            ],
        },
        {
            type: 'multi',
            pic: null,
            question: 'Which two benefits can you get by stacking Cisco switches? (Choose two)',
            answers: [
                'Each switch in the stack handles the MAC table independently from the others',
                'You can add or remove switches without taking the stack down',
                'Each switch in the stack can use a different IOS image',
                'The stack enables any active member to take over as the master switch if the existing master fails',
                'You can license the entire stack with a single master license',
            ],
            corrects: ['', 'B', '', 'D',''],
            feedback: [
                'Each stack has only one configuration file, which is distributed to each member in the stack. This allows each switch in the stack to share the same network topology, MAC address, and routing information. In addition, it allows for any member to become the master, if the master ever fails -> Answer D is correct while answer A is not correct.',
                'Switches can be added and deleted to a working stack without affecting stack performance. When a new switch is added, the master switch automatically configures the unit with the currently running Cisco IOS Software image and configuration of the stack.',
                'The stack will gather information such as switching table information and update the MAC tables as new addresses are learned. The network manager does not have to do anything to bring up the switch before it is ready to operate. Similarly, switches can be removed from a working stack without any operational effect on the remaining switches.',
                'When the stack discovers that a series of ports is no longer present, it will update this information without affecting forwarding or routing. A working stack can accept new members or delete old ones without service interruption -> Answer B is correct.',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which technology provides chassis redundancy in a VSS environment?',
            answers: [
                'BFD', 
                'multichassis EtherChannels',
                'VRRP', 
                'StackWise',
            ],
            corrects: ['B'],
            feedback: [
                'A multichassis EtherChannel (MEC) is a port channel that spans the two chassis of a VSS. The access switch views the MEC as a standard port channel.',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which identification number is valid for an extended ACL?',
            answers: [
                '1', 
                '64',
                '99', 
                '100',
                '299',
                '1099',
            ],
            corrects: ['D'],
            feedback: [
                'Below is the range of standard and extended access list:',
                '',
                'In most cases we only need to remember 1-99 is dedicated for standard access lists while 100 to 199 is dedicated for extended access lists.',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which statement about named ACLs is true?',
            answers: [
                'They support standard and extended ACLs.', 
                'They are used to filter usernames and passwords for Telnet and SSH.',
                'They are used to filter Layer 7 traffic.', 
                'They support standard ACLs only.',
                'They are used to rate limit traffic destined to targeted networks.',
            ],
            corrects: ['A'],
            feedback: [
                'The syntax of a named ACL is:',
                'ip access-list {standard | extended} {name | number}',
                'Therefore we can configure a standard acl with keyword “standard” and configure an extended acl with keyword “extended”. For example this is how to configure an named extended access-list:',
                'Router(config)#ip access-list extended in_to_out permit tcp host 10.0.0.1 host 187.100.1.6 eq telnet',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which range represents the standard access list?',
            answers: [
                '99', 
                '150',
                '299', 
                '2000',
            ],
            corrects: ['A'],
            feedback: [
                'Below is the range of standard and extended access list',
                '',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which statement identifies the functionality of virtual machines?',
            answers: [
                'Virtualized servers run most efficiently when they are physically connected to a switch that is separate from the hypervisor', 
                'The hypervisor can virtualize physical components including CPU, memory, and storage',
                'Each hypervisor can support a single virtual machine and a single software switch', 
                'The hypervisor communicates on Layer 3 without the need for additional resources',
            ],
            corrects: ['B'],
            feedback: [
                'In the virtual machines, the hypervisor can virtualize physical components including CPU, memory, and storage.',
            ]
        },
        {
            type: 'multi',
            pic: null,
            question: 'Which of the following are the valid numbers of standard ACL? (Choose two)',
            answers: [
                '50',
                '1550',
                '150',
                '1250',
                '2050',
            ],
            corrects: ['A', 'B', '', '',''],
            feedback: [
                'The range of standard ACL is 1-99, 1300-1999 so 50 and 1550 are two valid numbers.',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which item represents the standard IP ACL?',
            answers: [
                'Access-list 110 permit any any', 
                'Access-list 50 deny 192.168.1.1 0.0.0.255',
                'Access list 101 deny tvp any host 192.168.1.1', 
                'Access-list 2500 deny tcp any host 192.168.1.1 eq 22',
            ],
            corrects: ['B'],
            feedback: [
                'The range of standard ACL is 1-99, 1300-1999 so 50 is a valid number for standard ACL.',
            ]
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which command can you enter to route all traffic that is destined for 192.168.0.0/20 to a specific interface?',
            answers: [
                'router(config)#ip route 192.168.0.0 255.255.240.0 GigabitEthernet0/1', 
                'router(config)#ip route 0.0.0.0 255.255.255.0 GigabitEthernet0/1',
                'router(config)#ip route 0.0.0.0 0.0.0.0 GigabitEthernet0/1', 
                'router(config)#ip route 192.168.0.0 255.255.255.0 GigabitEthernet0/1',
            ],
            corrects: ['A'],
            feedback: [
                'The simple syntax of static route: ip route destination-network-address subnet-mask {next-hop-IP-address | exit-interface}',
                '•	destination-network-address: destination network address of the remote network',
                '•	subnet mask: subnet mask of the destination network',
                '•	next-hop-IP-address: the IP address of the receiving interface on the next-hop router',
                '•	exit-interface: the local interface of this router where the packets will go out',
            ]
        },
        {
            type: 'multi',
            pic: null,
            question: 'Which three statements about static routing are true? (Choose three)',
            answers: [
                'It uses consistent route determination.',
                'It is best used for small-scale deployments.',
                'Routing is disrupted when links fail.',
                'It requires more resources than other routing methods.',
                'It is best used for large-scale deployments.',
                'Routers can use update messages to reroute when links fail.',
            ],
            corrects: ['A', 'B', 'C', '','',''],
            feedback: [
                'The static routing specifies a fixed destination so it is “consistent”. It is best used for small-scaled places where there are a few routers only.',
                'When links fail, static route cannot automatically find an alternative path like dynamic routing so routing is disrupted.',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'If host Z needs to send data through router R1 to a storage server, which destination MAC address does host Z use to transmit packets?',
            answers: [
                'the host Z MAC address', 
                'the MAC address of the interface on R1 that connects to the storage server',
                'the MAC address of the interface on R1 that connects to host Z', 
                'the MAC address of the storage server interface',
            ],
            corrects: ['C'],
            feedback: [
                'Host Z will use ARP to get the MAC address of the interface on R1 that connects to it and use this MAC as the destination MAC address.',
                'It use the IP address of the storage server as the destination IP address.',
            ]
        },
        {
            type: 'simple',
            pic: null,
            question: 'When a router makes a routing decision for a packet that is received from one network and destined to another, which portion of the packet does if replace?',
            answers: [
                'Layer 2 frame header and trailer', 
                'Layer 3 IP address',
                'Layer 5 session', 
                'Layer 4 protocol',
            ],
            corrects: ['A'],
            feedback: [
                'The Layer 2 information (source and destination MAC) would be changed when passing through each router. ',
                'The Layer 3 information (source and destination IP addresses) remains unchanged.',
            ]
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which component of the routing table ranks routing protocols according to their preferences?',
            answers: [
                'administrative distance', 
                'next hop',
                'metric', 
                'routing protocol code',
            ],
            corrects: ['A'],
            feedback: [
                'The administrative distance of each protocol is compared to see if that route is better or not.',
            ]
        },
        {
            type: 'simple',
            pic: null,
            question: 'How does a router handle an incoming packet whose destination network is missing from the routing table?',
            answers: [
                'It broadcast the packet to each interface on the router', 
                'It discards the packet',
                'It broadcasts the packet to each network on the router', 
                'It routes the packet to the default route',
            ],
            corrects: ['B'],
            feedback: [
                'If there is a default route then surely the router will forward all unknown traffic to there.',
                'But if there is no default route in the routing table then the router will discard the packet. In this question we suppose there is no default route in the routing table. Otherwise the question should state it (this question is unclear).',
            ]
        },
        {
            type: 'simple',
            pic: null,
            question: 'When a device learns multiple routes to a specific network, it installs the route with?',
            answers: [
                'longest bit match (highest subnet mask)', 
                'lowest AD',
                'lowest metric', 
                'equal load balancing',
            ],
            corrects: ['B'],
            feedback: [
                'Making a forwarding decision actually consists of three sets of processes: the routing protocols, the routing table, and the actual process which makes a forwarding decision and switches packets. ',
                'The longest prefix match always wins among the routes actually installed in the routing table, while the routing protocol with the lowest administrative distance always wins when installing routes into the routing table.',
            ]
        },
        {
            type: 'simple',
            pic: null,
            question: 'When a router is unable to find a known route in the routing table, how does it handle the packet?',
            answers: [
                'It discards the packet', 
                'It sends the packet over the route with the best metric',
                'It sends the packet to the next hop address', 
                'It sends the packet to the gateway of last resort',
            ],
            corrects: ['A'],
            feedback: [
                'In fact this question is not clear. If we understand that “router is unable to find a known route in the routing table” and there is no default route in the routing table then the router will surely discard the packet -> A is correct. But we are not sure if there is a default route or not so let learn more about gateway of last resort.',
                'A Gateway of Last Resort is a route used by the router when no other known route exists to send the IP packet. For CCNA level, when ip routing feature is enabled, a gateway of last resort is usually created by:',
                'The “ip default-network” command (but dynamic routing protocols have different behaviors). But in general, the “ip default-network” cannot set the gateway of last resort without a known route in the routing table.',
                'Creating a static route to network 0.0.0.0 0.0.0.0 is another way to set the gateway of last resort on a router. This is the reason why this question is not clear as it does not tell us if a default route exists or not.',
            ]
        },
        {
            type: 'simple',
            pic: null,
            question: 'f router R1 knows a static route to a destination network and then learns about the same destination network through a dynamic routing protocol, how does R1 respond?',
            answers: [
                'It refuses to advertise the dynamic route to other neighbors', 
                'It sends a withdrawal signal to the neighboring router',
                'It disables the routing protocol', 
                'It prefers the static route',
            ],
            corrects: ['D'],
            feedback: [
                'The default administrative distance value of static route is 1 which is always smaller than any dynamic routing protocol so it is always preferred to dynamic routing protocols.',
            ]
        },
        {
            type: 'multi',
            pic: null,
            question: 'Which two statements about floating static routes are true? (Choose two)',
            answers: [
                'They are routes to the exact /32 destination address',
                'They are used when a route to the destination network is missing',
                'They have a higher administrative distance than the default static route administrative distance',
                'They are used as back-up routes when the primary route goes down',
                'They are dynamic routes that are learned from a server',
            ],
            corrects: ['', '', 'C', 'D',''],
            feedback: [
                'Floating static routes are static routes that have an administrative distance greater than the administrative distance (AD) of another static route or dynamic routes. By default a static route has an AD of 1 then floating static route must have the AD greater than 1.',
                'Floating static route has a manually configured administrative distance greater than that of the primary route and therefore would not be in the routing table until the primary route fails.',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which definition of a host route is true?',
            answers: [
                'A route that is manually configured', 
                'A route used when a destination route is missing',
                'A route to the exact /32 destination address', 
                'Dynamic route learned from the server',
            ],
            corrects: ['C'],
            feedback: [
                'A host route for IPv4 has the mask /32, and a host route for IPv6 has the mask /128.',
                'If an IPv4 address is configured with a mask of /32 on an interface of the router, which is typical for loopback interfaces, the host route appears in the routing table only as connected (for example in the routing table we will see this line: “C 10.10.10.1/32 is directly connected, Loopback0”.',
            ]
        },
        {
            type: 'simple',
            pic: null,
            question: 'When troubleshooting Ethernet connectivity issues, how can you verify that an IP address is known to a router?',
            answers: [
                'Check whether the IP address is in the routing table', 
                'Check whether an ACL is blocking the IP address',
                'Check whether the IP address is in the CAM table', 
                'Check whether the IP address is in the ARP table',
            ],
            corrects: ['D'],
            feedback: [
                'If the IP address exists in the routing table then we can say the local router knew the way to reach that destination. But this question wants to ask if the destination has communicated to the local router or not (“an IP address is known to a router”). Maybe it is a tricky question.',
            ]
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which command would you use on a Cisco router to verify the Layer 3 path to a host?',
            answers: [
                'traced address ', 
                'traceroute address',
                'telnet address', 
                'ssh address',
            ],
            corrects: ['B'],
            feedback: [
                'To check the connectivity between a host and a destination (through some networks) we can use both “tracert” and “ping” commands.',
                'But the difference between these 2 commands is the “tracert” command can display a list of near-side router interfaces in the path between the source and the destination.',
                'The “traceroute” command has the same function of the “tracert” command but it is used on Cisco routers only, not on a PC -> B is correct.',
            ]
        },
        {
            type: 'simple',
            pic: null,
            question: 'What is the correct routing match to reach 172.16.1.5/32?',
            answers: [
                '172.16.1.0/26', 
                '172.16.1.0/25',
                '172.16.1.0/24', 
                'the default route',
            ],
            corrects: ['A'],
            feedback: [
                'Although all above answers are correct but 172.16.1.0/26 is the best choice as it is the most specific prefix-match one.',
            ]
        },
        {
            type: 'simple',
            pic: null,
            question: 'How many usable host are there per subnet if you have the address of 192.168.10.0 with a subnet mask of 255.255.255.240?',
            answers: [
                '4', 
                '8',
                '16', 
                '14',
            ],
            corrects: ['D'],
            feedback: [
                'From the subnet mask of 255.255.255.240 (/28) we learn there are 24 – 2 = 14 hosts per subnet.',
            ]
        },
        {
            type: 'multi',
            pic: null,
            question: 'Assuming a subnet mask of 255.255.248.0, three of the following addresses are valid host addresses. Which are these addresses? (Choose three)',
            answers: [
                '172.16.9.0',
                '172.16.8.0',
                '172.16.31.0',
                '172.16.20.0',
            ],
            corrects: ['A', '', 'C', 'D'],
            feedback: [
                'From the subnet mask of 255.255.248.0 we learn that the increment is 8 therefore 172.16.8.0 is a network address which cannot be assigned to a host.',
                'Other network addresses are 172.16.16.0, 172.16.24.0, 172.16.32.0… Notice that 172.16.31.0 is a valid host address (which belongs to 172.16.24.0 to 172.16.31.255 subnet).',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which IP configuration does the CIDR notation 192.168.1.1/25 refer?',
            answers: [
                '192.168.1.1 255.255.255.64', 
                '192.168.1.1 255.255.255.1',
                '192.168.1.1 255.255.255.32', 
                '192.168.1.1 255.255.255.256',
                '192.168.1.1 255.255.255.128',
            ],
            corrects: ['E'],
            feedback: [
                '“/25” means 1111 1111.1111 1111.1000 0000 in binary or 255.255.255.128 in decimal.'
            ]
        },
        {
            type: 'multi',
            pic: null,
            question: 'For which two reasons was RFC 1918 address space define (Choose two)',
            answers: [
                'to preserve public IPv4 address space',
                'to reduce the occurrence of overlapping IP addresses',
                'to preserve public IPv6 address space',
                'reduce the size of ISP routing tables',
                'to support the NAT protocol',
            ],
            corrects: ['A', 'B', '', '',''],
            feedback: [
                'The RFC 1518 is Classless Interdomain Routing (CIDR). CIDR is a mechanism developed to help alleviate the problem of exhaustion of IP addresses and growth of routing tables.',
                'The problems were:',
                '•	With the classful routing system, individual networks were either limited to 254 hosts (/24) or 65,534 hosts (/16). For many network enterprises, 254 hosts were not enough and 65,534 were too large to be used efficiently.',
                '•	Routing information overload. The size and rate of growth of the routing tables in Internet routers is beyond the ability of current software (and people) to effectively manage.',
                '•	Eventual exhaustion of IP network numbers.',
                'To solve these problem, CIDR was selected as the solution in 1992.',
                'In contrast to classful routing, which categorizes addresses into one of three blocks, CIDR allows for blocks of IP addresses to be allocated to Internet service providers. The blocks are then split up and assigned to the provider’s customers.',
                'According to the CIDR standard, the first part of an IP address is a prefix, which identifies the network. The prefix is followed by the host identifier so that information packets can be sent to particular computers within the network. A CIDR address includes the standard 32-bit IP address and also the network prefix. ',
                'For example, a CIDR address of 200.1.45.2/26, the “/26” indicates the first 26 bits are used to identify the unique network, leaving the remaining bits to identify the specific hosts.',
                'Therefore, instead of assigning the whole block of a class B or C address, now smaller blocks of a class can be assigned. For example, instead of assigning a whole block of 200.1.45.0/24, a smaller block, like 200.1.45.0/27 or 200.1.45.32/27, can be assigned.',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'What routing protocol use first-hand information?',
            answers: [
                'link-state', 
                'distance-vector',
                'path-vector', 
                'other',
            ],
            corrects: ['A'],
            feedback: [
                'The information available to a distance vector router has been compared to the information available from a road sign. Link state routing protocols are like a road map. ',
                'A link state router cannot be fooled as easily into making bad routing decisions, because it has a complete picture of the network. The reason is that unlike the routing-by-rumor approach of distance vector, link state routers have firsthand information from all their peer routers. Each router originates information about itself, its directly connected links, and the state of those links (hence the name). ',
                'This information is passed around from router to router, each router making a copy of it, but never changing it. The ultimate objective is that every router has identical information about the internetwork, and each router will independently calculate its own best paths.'
            ]
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which parameter or parameters are used to calculate OSPF cost in Cisco routers?',
            answers: [
                'Bandwidth, Delay and MTU', 
                'Bandwidth',
                'Bandwidth and MTU', 
                'Bandwidth, MTU, Reliability, Delay and Load',
            ],
            corrects: ['B'],
            feedback: [
                'The well-known formula to calculate OSPF cost is Cost = 108 / Bandwidth so B is the correct answer.',
            ]
        },
        {
            type: 'simple',
            pic: null,
            question: 'What routing protocol use first-hand information from peers?',
            answers: [
                'link state', 
                'distance-vector',
                'path-vector', 
                'other',
            ],
            corrects: ['A'],
            feedback: [
                'Link state routers have firsthand information from all their peer routers. Each router originates information about itself, its directly connected links, and the state of those links (hence the name). ',
                'This information is passed around from router to router, each router making a copy of it, but never changing it. The ultimate objective is that every router has identical information about the internetwork, and each router will independently calculate its own best paths.'
            ]
        },
        {
            type: 'multi',
            pic: null,
            question: 'Why do large OSPF networks use a hierarchical design? (Choose three)',
            answers: [
                'to confine network instability to single areas of the network',
                'to reduce the complexity of router configuration',
                'to speed up convergence',
                'to lower costs by replacing routers with distribution layer switches',
                'to decrease latency by increasing bandwidth',
                'to reduce routing overhead',
            ],
            corrects: ['A', '', 'C', '','','F'],
            feedback: [
                'Hierarchical design of OSPF (basically means that you can separate the larger internetwork into smaller internetworks called areas) helps us create a network with all features listed above (decrease routing overhead, speed up convergence, confine network instability to single areas of the network).',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'What is the effect of this configuration? ip arp inspection vlan 2 interface fastethernet 0/1  switchport mode access  switchport access vlan 2',
            answers: [
                'All ARP packets are dropped by the switch', 
                'Egress traffic is passed only if the destination is a DHCP server.',
                'All ingress and egress traffic is dropped because the interface is untrusted', 
                'The switch discard all ingress ARP traffic with invalid MAC-to-IP address bindings',
            ],
            corrects: ['D'],
            feedback: [
                'Dynamic ARP inspection is an ingress security feature; it does not perform any egress checking.'
            ]
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which statement about the IP SLAs ICMP Echo operation is true?',
            answers: [
                'The frequency of the operation specified in milliseconds.', 
                'It is used to identify the best source interface from which to send traffic.',
                'It is configured in enable mode.', 
                'It is used to determine the frequency of ICMP packets.',
            ],
            corrects: ['D'],
            feedback: [
                'The ICMP Echo operation measures end-to-end response time between a Cisco router and any devices using IP. ',
                'Response time is computed by measuring the time taken between sending an ICMP Echo request message to the destination and receiving an ICMP Echo reply. Many customers use IP SLAs ICMP-based operations, in-house ping testing, or ping-based dedicated probes for response time measurements.'
            ]
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which function does IP SLA ICMP ECHO operation perform to assist with troubleshooting?',
            answers: [
                'one way jitter measurement', 
                'congestion detection',
                'hop-by-hop response time', 
                'packet-loss detection',
            ],
            corrects: ['C'],
            feedback: [
                'The ICMP Echo operation measures end-to-end response time between a Cisco router and any devices using IP. ',
                'Response time is computed by measuring the time taken between sending an ICMP Echo request message to the destination and receiving an ICMP Echo reply. Many customers use IP SLAs ICMP-based operations, in-house ping testing, or ping-based dedicated probes for response time measurements.'
            ]
        },
        {
            type: 'multi',
            pic: null,
            question: 'Which two IP SLA operations can you use to measure the end-to-end response time for all IP traffic between a Cisco router and an end device?',
            answers: [
                'ICMP path echo',
                'UDP echo',
                'ICMP path jitter',
                'UDP jitter',
                'TCP connect',
                'ICMP echo',
            
            ],
            corrects: ['A', '', '', '','','F'],
            feedback: [
                'To measure end-to-end response time we have to use ICMP echo to continuously ping to a remote device. The difference between ICMP path echo and ICMP echo is the former can measure hop-by-hop response time on its whole path while the latter can only measure to a specific destination.',
            ],
        },
        {
            type: 'multi',
            pic: null,
            question: 'Which two commands can you use to verify an IP SLA? (Choose two)',
            answers: [
                'show ip sla application',
                'show ip sla reaction-configuration',
                'show ip sla statistics',
                'show ip sla configuration',
            ],
            corrects: ['', '', 'C', 'D'],
            feedback: [
                'Verifying IP SLAs Operations',
                'Perform this task to display and interpret the results of an IP SLAs operation. Check the output for fields that correspond to the criteria in your service level agreement to determine whether the service metrics are acceptable.',
                'SUMMARY STEPS',
                '1. enable',
                '2. show ip sla statistics',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'What is the effect of the overload keyword in a static NAT translation configuration?',
            answers: [
                'It enables port address translation.', 
                'It enables the use of a secondary pool of IP addresses when the first pool is depleted.',
                'It enables the inside interface to receive traffic.', 
                'It enables the outside interface to forward traffic.',
            ],
            corrects: ['A'],
            feedback: [
                'By adding the keyword “overload” at the end of a NAT statement, NAT becomes PAT (Port Address Translation). This is also a kind of dynamic NAT that maps multiple private IP addresses to a single public IP address (many-to-one) by using different ports.',
                'Static NAT and Dynamic NAT both require a one-to-one mapping from the inside local to the inside global address. By using PAT, you can have thousands of users connect to the Internet using only one real global IP address.',
                'PAT is the technology that helps us not run out of public IP address on the Internet. This is the most popular type of NAT.',
            ]   
        },
        {
            type: 'multi',
            pic: null,
            question: 'Which two types of NAT addresses are used in a Cisco NAT device? (Choose two)',
            answers: [
                'inside local',
                'inside global',
                'inside private',
                'outside private',
                'external global',
                'external local',
            ],
            corrects: ['A', 'B', '', '','',''],
            feedback: [
                'NAT use four types of addresses:',
                'Inside local address – The IP address assigned to a host on the inside network. The address is usually not an IP address assigned by the Internet Network Information Center (InterNIC) or service provider. This address is likely to be an RFC 1918 private address. ',
                'Inside global address – A legitimate IP address assigned by the InterNIC or service provider that represents one or more inside local IP addresses to the outside world. ',
                'Outside local address – The IP address of an outside host as it is known to the hosts on the inside network. ',
                'Outside global address – The IP address assigned to a host on the outside network. The owner of the host assigns this address.',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which type of address is the public IP address of a NAT device?',
            answers: [
                'outside global', 
                'outside local',
                'inside global', 
                'inside local',
                'outside public',
                'inside public',
            ],
            corrects: ['C'],
            feedback: [
                'NAT use four types of addresses:',
                'Inside local address – The IP address assigned to a host on the inside network. The address is usually not an IP address assigned by the Internet Network Information Center (InterNIC) or service provider. This address is likely to be an RFC 1918 private address. ',
                'Inside global address – A legitimate IP address assigned by the InterNIC or service provider that represents one or more inside local IP addresses to the outside world -> This is the public IP address of a NAT device.',
                'Outside local address – The IP address of an outside host as it is known to the hosts on the inside network. ',
                'Outside global address – The IP address assigned to a host on the outside network. The owner of the host assigns this address.',
            ]   
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which NAT function can map multiple inside addresses to a single outside address?',
            answers: [
                'PAT',
                'SFTP',
                'RARP',
                'ARP',
                'TFTP',
            ],
            corrects: ['A'],
            feedback: [
                'By adding the keyword “overload” at the end of a NAT statement, NAT becomes PAT (Port Address Translation). This is also a kind of dynamic NAT that maps multiple private IP addresses to a single public IP address (many-to-one) by using different ports.',
            ]   
        },
        {
            type: 'simple',
            pic: null,
            question: 'What is the first step in the NAT configuration process?',
            answers: [
                'Define inside and outside interfaces.',
                'Define public and private IP addresses.',
                'Define IP address pools.',
                'Define global and local interfaces.',
            ],
            corrects: ['A'],
            feedback: [
                'In NAT configuration we should specify the inside and outside interfaces first with the command “ip nat inside” and “ip nat outside” under interface mode.',
            ]   
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which statement about the inside interface configuration in a NAT deployment is true?',
            answers: [
                'It is defined globally',
                'It identifies the location of source addresses for outgoing packets to be translated using access or route maps.',
                'It must be configured if static NAT is used',
                'It identifies the public IP address that traffic will use to reach the internet.',
            ],
            corrects: ['B'],
            feedback: [
                'When we specify a NAT “inside” interface (via the “ip nat inside” command under interface mode), we are specifying the source IP addresses. Later in the “ip nat” command under global configuration mode, we will specify the access or route map for these source addresses.',
            ]   
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which NAT type is used to translate a single inside address to a single outside address?',
            answers: [
                'dynamic NAT',
                'NAT overload',
                'PAT',
                'static NAT',
            ],
            corrects: ['D'],
            feedback: [
                'There are two types of NAT translation: dynamic and static.',
                'Static NAT: Designed to allow one-to-one mapping between local and global addresses. This flavor requires you to have one real Internet IP address for every host on your network',
                'Dynamic NAT: Designed to map an unregistered IP address to a registered IP address from a pool of registered IP addresses. You don’t have to statically configure your router to map an inside to an outside address as in static NAT, but you do have to have enough real IP addresses for everyone who wants to send packets through the Internet. ',
                'With dynamic NAT, you can configure the NAT router with more IP addresses in the inside local address list than in the inside global address pool. When being defined in the inside global address pool, the router allocates registered public IP addresses from the pool until all are allocated. ',
                'If all the public IP addresses are already allocated, the router discards the packet that requires a public IP address.',
                'In this question we only want to translate a single inside address to a single outside address so static NAT should be used.',
            ]   
        },
        {
            type: 'multi',
            pic: null,
            question: 'What are two benefits of using NAT? (choose two)',
            answers: [
                'NAT protects network security because private networks are not advertised.',
                'NAT accelerates the routing process because no modifications are made on the packets. ',
                'Dynamic NAT facilitates connections from the outside of the network.',
                'NAT facilitates end-to-end communication when IPsec is enable.',
                'NAT eliminates the need to re-address all host that require external access.',
                'NAT conserves addresses through host MAC-level multiplexing.',
            ],
            corrects: ['A', '', '', '','E',''],
            feedback: [
                'By not reveal the internal IP addresses, NAT adds some security to the inside network -> A is correct.',
                'NAT has to modify the source IP addresses in the packets -> B is not correct.',
                'Connection from the outside to a network through “NAT” is more difficult than a normal network because IP addresses of inside hosts are hidden -> C is not correct.',
                'In order for IPsec to work with NAT we need to allow additional protocols, including Internet Key Exchange (IKE), Encapsulating Security Payload (ESP) and Authentication Header (AH) -> more complex -> D is not correct.',
                'By allocating specific public IP addresses to inside hosts, NAT eliminates the need to re-address the inside hosts -> E is correct.',
                'NAT does conserve addresses but not through host MAC-level multiplexing. It conserves addresses by allowing many private IP addresses to use the same public IP address to go to the Internet -> F is not correct.',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which command can you enter to create a NAT pool of 6 addresses?',
            answers: [
                'Router(config)#ip nat pool test 175.17.12.69 175.17.12.74 prefix-length 24',
                'Router(config)#ip nat pool test 175.17.12.69 175.17.13.74 prefix-length 16',
                'Router(config)#ip nat pool test 175.17.12.66 175.17.12.72 prefix-length 8',
                'Router(config)#ip nat pool test 175.17.12.69 175.17.12.76 prefix-length 8',
            ],
            corrects: ['A'],
            feedback: [
                'The syntax to create a NAT pool is:',
                'Router(config)#ip nat pool pool_name start_ip end_ip { netmask netmask | prefix-length prefix-length }',
                'Therefore answer A is surely correct. Answer B is not correct as it creates many addresses (from 12.69 to 12.255 then to 13.74).',
                'Answer C and D are not correct as we cannot use prefix-length of 8 (/8) for a class B subnet.',
            ]   
        },
        {
            type: 'simple',
            pic: null,
            question: 'How does NAT overloading provide one-to-many address translation?',
            answers: [
                'It uses a pool of addresses',
                'It converts IPV4 addresses to unused IPv6 Addresses',
                'It assigns a unique TCP/UDP port to each session',
                'It uses virtual MAC Address and Virtual IP Addresses',
            ],
            corrects: ['C'],
            feedback: [
                'By adding the keyword “overload” at the end of a NAT statement, NAT becomes PAT (Port Address Translation). This is also a kind of dynamic NAT that maps multiple private IP addresses to a single public IP address (many-to-one) by using different ports.',
            ]   
        },
        {
            type: 'simple',
            pic: null,
            question: 'What is the danger of the permit any entry in a NAT access list?',
            answers: [
                'It can lead to overloaded resources on the router.',
                'It can cause too many addresses to be assigned to the same interface.',
                'It can disable the overload command.',
                'It prevents the correct translation of IP addresses on the inside network.',
            ],
            corrects: ['A'],
            feedback: [
                'Using permit any can result in NAT consuming too many router resources, which can cause network problems. You should only limit the NAT access list to a specific range of IP addresses.',
            ]   
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which protocol advertises a virtual IP address to facilitate transparent failover of a Cisco routing device?',
            answers: [
                'FHRP',
                'DHCP',
                'RSMLT',
                'ESRP',
            ],
            corrects: ['A'],
            feedback: [
                'First Hop Redundancy Protocol (FHRP) is a protocol that enables two or more devices to work together in a group, sharing a single IP address, the virtual IP address. ',
                'One router is elected to handle all requests sent to the virtual IP address. With HSRP, this is the active router. An HSRP group has one active router and at least one standby router.',
            ]   
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which standards-based First Hop Redundancy Protocol is a Cisco supported alternative to Hot Standby Router Protocol?',
            answers: [
                'VRRP',
                'GLBP',
                'TFTP',
                'DHCP',
            ],
            corrects: ['A'],
            feedback: [
                'Virtual Router Redundancy Protocol (VRRP) is one of the First Hop Redundancy Protocols that is supported by Cisco. Unlike HSRP and GLBP (which are Cisco proprietary protocols), VRRP is an industry standard protocol.',
            ]   
        },
        {
            type: 'multi',
            pic: null,
            question: 'What are two requirements for an HSRP group? (Choose two)',
            answers: [
                'exactly one active router',
                'one or more standby routers',
                'one or more backup virtual routers',
                'exactly one standby active router',
                'exactly one backup virtual router',
            ],
            corrects: ['A', 'B', '', '',''],
            feedback: [
                'From this paragraph:',
                '“A set of routers that run HSRP works in concert to present the illusion of a single default gateway router to the hosts on the LAN. This set of routers is known as an HSRP group or standby group. A single router that is elected from the group is responsible for the forwarding of the packets that hosts send to the virtual router. ',
                'This router is known as the active router. Another router is elected as the standby router. If the active router fails, the standby assumes the packet forwarding duties. Although an arbitrary number of routers may run HSRP, only the active router forwards the packets that are sent to the virtual router IP address.',
                'In order to minimize network traffic, only the active and the standby routers send periodic HSRP messages after the protocol has completed the election process. Additional routers in the HSRP group remain in the Listen state. ',
                'If the active router fails, the standby router takes over as the active router. If the standby router fails or becomes the active router, another router is elected as the standby router.”',
                '-> There is exactly one active router and one standby router in an HSRP group. Answer A is surely a correct but other answers are not correct. Answers C, D and E are wrong terminologies so they are surely not correct. Therefore answer B is a best choice left (although it is not totally correct).',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which standards-based First Hop Redundancy Protocol is a Cisco supported alternative to Hot Standby Router Protocol?',
            answers: [
                'VRRP',
                'GLBP',
                'TFTP',
                'DHCP',
            ],
            corrects: ['A'],
            feedback: [
                'There are three First Hop Redundancy Protocols which are HSRP, VRRP and GLBP. HSRP and GLBP are Cisco proprietary protocols while VRRP is a standards-based protocol.',
            ]   
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which value to use in HSRP protocol election process?',
            answers: [
                'interface',
                'virtual IP address',
                'priority',
                'router ID',
            ],
            corrects: ['C'],
            feedback: [
                'HSRP election is based on a priority value (0 to 255) that is configured on each router in the group. By default, the priority is 100. The router with the highest priority value (255 is highest) becomes the active router for the group. ',
                'If all router priorities are equal or set to the default value, the router with the highest IP address on the HSRP interface becomes the active router. Below is an example of assigning HSRP priority of 200 to R1:',
                'R1(config-if)# standby 1 priority 200',
            ]   
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which of the following is needed to be enable back the role of active in HSRP?',
            answers: [
                'preempt',
                'priority',
                'other options',
                'other options',
            ],
            corrects: ['A'],
            feedback: [
                'The “preempt” command enables the HSRP router with the highest priority to immediately become the active router. For example if we have a new router joining an HSRP of 1 and we want this router becomes the active router immediately (provided it had the highest HSRP priority) then we will need this additional command:',
                'New_Router(config-if)#standby 1 preempt',
            ]   
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which HSRP feature was new in HSRPv2?',
            answers: [
                'Group numbers that are greater than 255',
                'Virtual MAC addresses',
                'tracking',
                'preemption',
            ],
            corrects: ['A'],
            feedback: [
                'Both HSRP version 1 & version 2 support preempt command -> Answer D is not correct.',
                'In HSRP version 1, group numbers are restricted to the range from 0 to 255. HSRP version 2 expands the group number range from 0 to 4095 -> A is correct.',
            ]   
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which configuration command can you apply to a HSRP router so that its local interface becomes active if all other routers in the group fail?',
            answers: [
                'no additional config is required',
                'standby 1 track ethernet',
                'standby 1 preempt',
                'standby 1 priority 250',
            ],
            corrects: ['A'],
            feedback: [
                'When all other routers in the group fail, the local router will not receive any HSRP Hello messages so it will become “active”. Notice that in this case the “preempt” command is not necessary. ',
                'The “preempt” command is only useful when the local router receives a HSRP Hello message from the active HSRP router with a lower priority (then the local router will decide to take over the active role).',
            ]   
        },
        {
            type: 'simple',
            pic: null,
            question: 'What is a valid HSRP virtual MAC address?',
            answers: [
                '0000.5E00.01A3',
                '0007.B400.AE01',
                '0000.0C07.AC15',
                '0007.5E00.B301',
            ],
            corrects: ['C'],
            feedback: [
                'With HSRP, two or more devices support a virtual router with a fictitious MAC address and unique IP address. There are two version of HSRP.',
                '•	With HSRP version 1, the virtual router’s MAC address is 0000.0c07.ACxx , in which xx is the HSRP group. Therefore C is correct.',
                '•	With HSRP version 2, the virtual MAC address is 0000.0C9F.Fxxx, in which xxx is the HSRP group.',
            ]   
        },
        {
            type: 'multi',
            pic: null,
            question: 'In which two formats can the IPv6 address fd15:0db8:0000:0000:0700:0003:400F:572B be written? (Choose two)',
            answers: [
                'fd15:0db8:0000:0000:700:3:400F:527B',
                'fd15:0db8::7:3:4F:527B',
                'fd15::db8::700:3:400F:527B',
                'fd15:db8::700:3:400F:527B',
                'fd15:db8:0::700:3:4F:527B',
            ],
            corrects: ['A', '', '', 'D',''],
            feedback: [
                'In this case we use two rules:',
                '•	Leading zeros in a field are optional',
                '•	Successive fields of 0 are represented as ::, but only once in an address',
            ],
        },
        {
            type: 'multi',
            pic: null,
            question: 'Which statements about IPv6 prefixes are true?',
            answers: [
                'FEC0::/10 is used for IPv6 broadcast.',
                'FC00::/7 is used in private networks.',
                'FE80::/8 is used for link-local unicast.',
                'FE80::/10 is used for link-local unicast',
                '2001::1/127 is used for loopback addresses.',
                'FF00::/8 is used for IPv6 multicast.',
            ],
            corrects: ['', 'B', '', 'D','','F'],
            feedback: [
                'For more information about IPv6, please read our IPv6 tutorial.',
            ],
        },
        {
            type: 'multi',
            pic: null,
            question: 'Which statements about IPv6 and routing protocols are true? (Choose two)',
            answers: [
                'EIGRPv3 was developed to support IPv6 routing.',
                'OSPFv3 was developed to support IPv6 routing.',
                'Loopback addresses are used to form routing adjacencies.',
                'EIGRP, OSPF, and BGP are the only routing protocols that support IPv6.',
                'Link-local addresses are used to form routing adjacencies.',
            ],
            corrects: ['', 'B', '', '','E'],
            feedback: [
                'Link-local addresses only used for communications within the local subnetwork (automatic address configuration, neighbor discovery, router discovery, and by many routing protocols). ',
                'It is only valid on the current subnet. It is usually created dynamically using a link-local prefix of FE80::/10 and a 64-bit interface identifier (based on 48-bit MAC address).',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which technology supports the stateless assignment of IPv6 addresses?',
            answers: [
                'DNS',
                'DHCPv6',
                'DHCP',
                'autoconfiguration',
            ],
            corrects: ['B'],
            feedback: [
                'There are several ways to assign IPv6 to a device:',
                '•	Static IPv6: The IPv6 address, subnet prefix length and default gateway are configured manually in the system configuration file.',
                '•	Dynamic Host Configuration Protocol for IPv6 (DHCPv6): this mode requires a DHCPv6 server in your LAN. This is the most used mode for IPv6 assignment. There are two methods of DHCPv6:',
                'a.	stateless mode: Only extended information, such as primary and optional secondary DNS server, is obtained from a DHCPv6 server. IPv6 address is not assigned, so the IPv6 address from the Ethernet configuration is set for a Static address of Ethernet interface.',
                'b.	stateful mode: DHCPv6 server maintains a database of leased IPv6 addresses, and assigns to the client an unused IPv6 address. The DHCPv6 server specifies also a primary and optional secondary DNS server. The DNS server is used to resolve the IP address for a known host name.',
                '•	IPv6 Stateless Address Autoconfiguration (SLAAC): provides the ability to address a host based on a network prefix that is advertised from a local network router via Router Advertisements (RA). Notice that with this mode, the device which requires an IPV6 always receive a dynamic IPv6 address.',
                'The question asks about “stateless assignment of IPv6 addresses” which means stateless mode of DHCPv6.',
            ]   
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which IPv6 header field is equivalent to the TTL?',
            answers: [
                'Hop Limit',
                'Flow Label',
                'TTD',
                'Hop Count',
                'Scan Timer',
            ],
            corrects: ['A'],
            feedback: [
                'This field is same as Time To Live (TTL) in IPv4, which is used to stop packet to loop in the network infinitely. The value of Hop Limit field is decremented by 1 when it passes a Layer 3 device (like a router). When this field reaches 0 the packet is dropped.',
            ]   
        },
        {
            type: 'multi',
            pic: null,
            question: 'Which two statements about the “tunnel mode ipv6ip” command are true? (Choose two)',
            answers: [
                'It enables the transmission of IPv6 packets within the configured tunnel.',
                'It specifies IPv4 as the encapsulation protocol.',
                'It specifies IPv6 as the encapsulation protocol.',
                'It specifies IPv6 as the transport protocol.',
                'It specifies that the tunnel is a Teredo tunnel.',
            ],
            corrects: ['A', 'B', '', '',''],
            feedback: [
                'The “tunnel mode ipv6ip” command specifies IPv6 as the passenger protocol and IPv4 as both the encapsulation and transport protocol for the manual IPv6 tunnel. ',
                'Notice that the tunnel source and destination are configured with IPv4 addressing and the tunnel interface is configured with IPv6.',
            ],
        },
        {
            type: 'multi',
            pic: null,
            question: 'Which two features can dynamically assign IPv6 addresses? (Choose two)',
            answers: [
                'IPv6 stateless autoconfiguration',
                'DHCP',
                'NHRP',
                'IPv6 stateful autoconfiguration',
                'ISATAP tunneling',
            ],
            corrects: ['A', '', '', 'D',''],
            feedback: [
                'Answer “DHCP” is not correct because DHCP can only assign IPv4 address. To assign IPv6 address, DHCPv6 should be used instead.',
                'Answer “NHRP” is not correct because it is a protocol used in DMVPN.',
                'Answer “ISATAP tunneling” is not correct because it is an IPv6 transition mechanism to transmit IPv6 packets between dual-stack nodes on top of an IPv4 network.',
                'The two types of autoconfiguration are “stateless” and “stateful.”',
                'Stateful autoconfiguration is the IPv6 equivalent of DHCP. A new protocol, called DHCPv6 (and based closely on DHCP), is used to pass out addressing and service information in the same way that DHCP is used in IPv4. ',
                'This is called “stateful” because the DHCP server and the client must both maintain state information to keep addresses from conflicting, to handle leases, and to renew addresses over time -> Answer “IPv6 stateful autoconfiguration” is correct.',
                'Stateless Autoconfiguration allows an interface to automatically “lease” an IPv6 address and does not require the establishment of an server to delve out address space. ',
                'Stateless autoconfiguration allows a host to propose an address which will probably be unique (based on the network prefix and its Ethernet MAC address) and propose its use on the network. Because no server has to approve the use of the address, or pass it out, stateless autoconfiguration is simpler. ',
                'This is the default mode of operation for most IPv6 systems, including servers. So answer “IPv6 stateless autoconfiguration” is correct too.',
            ],
        },
        {
            type: 'multi',
            pic: null,
            question: 'Which two statements about IPv6 router advertisement messages are true? (Choose two)',
            answers: [
                'They use ICMPv6 type 134.',
                'The advertised prefix length must be 64 bits.',
                'The advertised prefix length must be 48 bits.',
                'They are sourced from the configured IPv6 interface address.',
                'Their destination is always the link-local address of the neighboring node.',
            ],
            corrects: ['A', 'B', '', '',''],
            feedback: [
                'IPv6 router advertisement message is one type of the ICMPv6 packets with Type field value of 134. It lists many facts, including the link-local IPv6 address of the router. Normally, it is sent to the all-IPv6-hosts local-scope multicast address of FF02::1. ',
                'When sent in response to router solicitation messages (ICMPv6 Type 133), it flows back to either the unicast address of the host that sent the RS or to the all-IPv6-hosts address FF02::1.',
                'The advertised IPv6 prefix length must be 64 bits for the stateless address autoconfiguration to be operational.',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'What is one requirement for interfaces to run IPv6?',
            answers: [
                'An IPv6 address must be configured on the interface.',
                'An IPv4 address must be configured.',
                'Stateless autoconfiguration must be enabled after enabling IPv6 on the interface.',
                'IPv6 must be enabled with the ipv6 enable command in global configuration mode.',
            ],
            corrects: ['A'],
            feedback: [
                'To run IPv6 on an interface we have to configure an IPv6 on that interface somehow -> A is correct.',
                'IPv6 must be enabled first but with the “ipv6 unicast-routing”, not “ipv6 enable” command -> D is not correct.',
            ]   
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which entity assigns IPv6 addresses to end users?',
            answers: [
                'ICANN',
                'APNIC',
                'RIR',
                'ISPs',
            ],
            corrects: ['D'],
            feedback: [
                'According to the official IANA website “Users are assigned IP addresses by Internet service providers (ISPs). ISPs obtain allocations of IP addresses from a local Internet registry (LIR) or National Internet Registry (NIR), or from their appropriate Regional Internet Registry (RIR)',
            ]   
        },
        {
            type: 'multi',
            pic: null,
            question: 'What are types of IPv6 static routes? (Choose three)',
            answers: [
                'Recursive routes',
                'Directly connected routes',
                'Fully specified routes',
                'Advertised routes',
                'Virtual links',
                'Redistributed routes'
            ],
            corrects: ['A', 'B', 'C', '','',''],
            feedback: [
                'Directly connected routes: In directly attached static routes, only the output interface is specified. The destination is assumed to be directly attached to this interface, so the packet destination is used as the next-hop address. This example shows such a definition:',
                'ipv6 route 2001:DB8::/32 gigabitethernet1/0/0',
                'The example specifies that all destinations with address prefix 2001:DB8::/32 are directly reachable through interface GigabitEthernet1/0/0.',
                'Recursive Static Routes: In a recursive static route, only the next hop is specified. The output interface is derived from the next hop. This example shows such a definition:',
                'ipv6 route 2001:DB8::/32 2001:DB8:3000:1',
                'This example specifies that all destinations with address prefix 2001:DB8::/32 are reachable via the host with address 2001:DB8:3000:1.',
                'Fully Specified Static Routes: In a fully specified static route, both the output interface and the next hop are specified. This form of static route is used when the output interface is a multi-access one and it is necessary to explicitly identify the next hop. ',
                'The next hop must be directly attached to the specified output interface. The following example shows a definition of a fully specified static route:',
                'ipv6 route 2001:DB8:/32 gigabitethernet1/0/0 2001:DB8:3000:1',
                'A fully specified route is valid (that is, a candidate for insertion into the IPv6 routing table) when the specified IPv6 interface is IPv6-enabled and up.',
                'Besides three of the static IPv routes, there is one more type of IPv6 static route, that is Floating Static Routes (static route with a higher administrative distance than the dynamic routing protocol it is backing up)',
            ],
        },
        {
            type: 'multi',
            pic: null,
            question: 'Which two statements about unique local IPv6 addresses are true? (Choose two)',
            answers: [
                'They are identical to IPv4 private addresses.',
                'They are defined by RFC 1884',
                'They use the prefix FEC0::/10',
                'They use the prefix FC00::/7',
                'They can be routed on the IPv6 global internet.',
            ],
            corrects: ['A', '', '', 'D',''],
            feedback: [
                'A IPv6 Unique Local Address is an IPv6 address in the block FC00::/7. It is the approximate IPv6 counterpart of the IPv4 private address. It is not routable on the global Internet.',
                'Note: In the past, Site-local addresses (FEC0::/10) are equivalent to private IP addresses in IPv4 but now they are deprecated.',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'What is the binary pattern of unique IPv6 unique local address?',
            answers: [
                '00000000',
                '11111100',
                '11111111',
                '11111101',
            ],
            corrects: ['B'],
            feedback: [
                'A IPv6 Unique Local Address is an IPv6 address in the block FC00::/7, which means that IPv6 Unique Local addresses begin with 7 bits with exact binary pattern as 1111 110 -> Answer B is correct.',
                'Note: IPv6 Unique Local Address is the approximate IPv6 counterpart of the IPv4 private address. It is not routable on the global Internet.',
            ]   
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which IPv6 function serves the same purpose as ARP entry verification on an IPv4 network?',
            answers: [
                'interface ip address verification',
                'MAC address table verification',
                'neighbor discovery verification',
                'Routing table entry verification',
            ],
            corrects: ['C'],
            feedback: [
                'Neighbor Discovery Protocol is an umbrella that defines these mechanisms: Substitute of ARP – Since ARP has been removed in IPv6, IPv6 follows a newer way to find the link-layer addresses of nodes on the local link. This new mechanism uses a mix of ICMPv6 messages and multicast addresses',
            ]   
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which type of IP address of IPv6 that also exist in IPv4 but barely used?',
            answers: [
                'unicast',
                'multicast',
                'anycast',
                'broadcast',
            ],
            corrects: ['C'],
            feedback: [
                'Only three connection types are commonly known and used in Internet Protocol version four (IPv4) networks: unicast, multicast and broadcast. A fourth connection type, Anycast, was unknown until IPv6 made it a standard connection type. ',
                'Anycast is not standardized in IPv4 but can be emulated. IPv4 Anycast addressing is a good solution to provide localization for services and servers in order to obtain robustness, redundancy and resiliency.',
                'The basic idea of Anycast is very simple: multiple servers, which share the same IP address, host the same service. The routing infrastructure sends IP packets to the nearest server (according to the metric of the routing protocol used). ',
                'The major benefits of employing Anycast in IPv4 are improved latency times, server load balancing, and improved security.',
            ]   
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which command can you enter to configure an IPv6 floating static route?',
            answers: [
                'Router(config)# ipv6 route static resolve default',
                'Router(config)# ipv6 route::/0 serial0/1',
                'Router(config)# ipv6 route FE80:0202::/32 serial 0/1 201',
                'Router(config)# ipv6 route FE80:0202::/32 serial 0/1 1',
            ],
            corrects: ['C'],
            feedback: [
                'Floating static routes are static routes that have an administrative distance greater than the administrative distance (AD) of another static route or dynamic routes. By default a static route has an AD of 1 then floating static route must have the AD greater than 1 -> Answer A is correct as it has the AD of 201.',
            ]   
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which statement about IPv6 link-local addresses is true?',
            answers: [
                'They must be configured on all IPv6 interface',
                'They must be globally unique',
                'They must be manually configured',
                'They are advertised globally on the network',
            ],
            corrects: ['A'],
            feedback: [
                'Link-local addresses refer only to a particular physical link and are used for addressing on a single link for purposes such as automatic address configuration and neighbor discovery protocol. Link-local addresses can be used to reach the neighboring nodes attached to the same link. ',
                'The nodes do not need a globally unique address to communicate. Routers will not forward datagram using link-local addresses. All IPv6 enabled interfaces have a link-local unicast address.',
                'A link-local address is an IPv6 unicast address that can be automatically configured on any interface using the link-local prefix FE80::/10 (1111 1110 10) and the interface identifier in the modified EUI-64 format. ',
                'Link-local addresses are not necessarily bound to the MAC address (configured in a EUI-64 format). Link-local addresses can also be manually configured in the FE80::/10 format using the “ipv6 address link-local” command.',
                'In summary, if you do not configure a link-local on an IPv6 enabled interface, it will automatically use the FE80::/10 and the interface identifier in the modified EUI-64 format to form a link-local address.',
            ]   
        },
        {
            type: 'multi',
            pic: null,
            question: 'Which two statements about IPv6 address 2002:ab10:beef::/48 are true? (Choose two)',
            answers: [
                'The embedded IPv4 address can be globally routed',
                'It is used for an ISATAP tunnel',
                'The embedded IPv4 address is an RFC 1918 address',
                'The MAC address 20:02:b0:10:be:ef is embedded into the IPv6 address',
                'It is used for a 6to4 tunnel',
            ],
            corrects: ['A', '', '', '','E'],
            feedback: [
                'Any IPv6 address that begins with the 2002::/16 prefix is known as a 6to4 address. A 6to4 gateway adds its IPv4 address to this 2002::/16, creating a unique /48 prefix (because an IPv4 consists of 32 bits).',
                'For example: In the IPv6 address 2002:ab10:beef::/48, “ab10:beef” is equivalent to 171.16.190.239 (convert “ab” in hexadecimal to “171” in decimal; “10” in hexadecimal to “16” in decimal…). Therefore the corresponding IPv4 address can be globally routed.',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'What is the most efficient subnet mask for a point to point IPv6 connection?',
            answers: [
                '/127',
                '/128',
                '/64',
                '/48',
                '/32',
            ],
            corrects: ['A'],
            feedback: [
                'On inter-router point-to-point links, it is useful, for security and other reasons, to use 127-bit IPv6 prefixes. Such a practice parallels the use of 31-bit prefixes in IPv4.',
            ]   
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which address block identifies all link-local addresses?',
            answers: [
                'FC00::/7',
                'FC00::/8',
                'FE80::/10',
                'FF00::/8',
            ],
            corrects: ['C'],
            feedback: [
                'Link-local addresses only used for communications within the local subnetwork (automatic address configuration, neighbor discovery, router discovery, and by many routing protocols). ',
                'It is only valid on the current subnet. It is usually created dynamically using a link-local prefix of FE80::/10 and a 64-bit interface identifier (based on 48-bit MAC address).',
            ]   
        },
        {
            type: 'multi',
            pic: null,
            question: 'What are the two statements about EUI-64 addressing? (Choose two)',
            answers: [
                'A locally administrated address has the universal/local bit set to 0',
                'A 64-bit interface identifier is derived from the interface MAC address',
                'A 96-bit interface identifier is derived from the interface MAC address',
                'The address includes the hex digits FFFE after the first 24 bits of the interface MAC address',
                'The address includes the hex digits FFFE after the last 24 bits of the interface MAC address',
            ],
            corrects: ['A', '', '', 'D',''],
            feedback: [
                'Extended Unique Identifier (EUI) allows a host to assign itself a unique 64-Bit IPv6 interface identifier (EUI-64). This feature is a key benefit over IPv4 as it eliminates the need of manual configuration or DHCP as in the world of IPv4. ',
                'The IPv6 EUI-64 format address is obtained through the 48-bit MAC address. The MAC address is first separated into two 24-bits, with one being OUI (Organizationally Unique Identifier) and the other being NIC specific. ',
                'The 16-bit 0xFFFE is then inserted between these two 24-bits for the 64-bit EUI address. IEEE has chosen FFFE as a reserved value which can only appear in EUI-64 generated from the an EUI-48 MAC address.',
                'For example, suppose we have the MAC address of C601.420F.0007. It would be divided into two 24-bit parts, which are “C60142” (OUI) and “0F0007” (NIC). Then “FFFE” is inserted in the middle. Therefore we have the address: C601.42FF.FE0F.0007.',
                'Then, according to the RFC 3513 we need to invert the Universal/Local bit (“U/L” bit) in the 7th position of the first octet. The “u” bit is set to 1 to indicate Universal, and it is set to zero (0) to indicate local scope.',
                'Therefore with the subnet of 2001:DB8:0:1::/64, the full IPv6 address is 2001:DB8:0:1:C601:42FF:FE0F:7/64',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which IPv6 address is the all-router multicast group?',
            answers: [
                'FF02::1',
                'FF02::2',
                'FF02::3',
                'FF02::4',
            ],
            corrects: ['B'],
            feedback: [
                'A packet sent to an all-router multicast group is received and processed by all IPv6 routers on the link or network',
            ]   
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which condition indicates that service password-encryption is enabled?',
            answers: [
                'The local username password is in clear text in the configuration.',
                'The enable secret is in clear text in the configuration.',
                'The local username password is encrypted in the configuration.',
                'The enable secret is encrypted in the configuration.',
            ],
            corrects: ['C'],
            feedback: [
                'The service password-encryption command will encrypt all current and future passwords so any password existed in the configuration will be encrypted.',
            ]   
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which command can you enter to configure a local username with an encrypted password and EXEC mode user privileges?',
            answers: [
                'Router(config)#username jdone privilege 1 password 7 08314D5D1A48',
                'Router(config)#username jdone privilege 1 password 7 PASSWORD1',
                'Router(config)#username jdone privilege 15 password 0 08314D5D1A48',
                'Router(config)#username jdone privilege 15 password 0 PASSWORD1',
            ],
            corrects: ['A'],
            feedback: [
                'Usually we enter a command like this:',
                'username bill password westward',
                'And the system display this command as follows:',
                'username bill password 7 21398211',
                'The encrypted version of the password is 21398211. The password was encrypted by the Cisco-defined encryption algorithm, as indicated by the “7”.',
                'However, if you enter the following command: “username bill password 7 21398211”, the system determines that the password is already encrypted and performs no encryption. Instead, it displays the command exactly as you entered it.',
            ]   
        },
        {
            type: 'simple',
            pic: null,
            question: 'What is the result of setting the no login command? Router#config t Router(config)#line vty 0 4 Router(config-line)#password c1sc0 Router(config-line)#no login',
            answers: [
                'Telnet access is denied.',
                'Telnet access requires a new password at the first login.',
                'Telnet access requires a new password.',
                'no password is required for telnet access.',
            ],
            corrects: ['D'],
            feedback: [
                'This configuration will let someone telnet to that router without the password (so the line “password c1sco” is not necessary).',
            ]   
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which protocol authenticates connected devices before allowing them to access the LAN?',
            answers: [
                '802.1d',
                '802.11',
                '802.1w',
                '802.1x',
            ],
            corrects: ['D'],
            feedback: [
                '802.1x is an IEEE Standard for port-based Network Access Control (PNAC). It is part of the IEEE 802.1 group of networking protocols. It provides an authentication mechanism to devices wishing to attach to a LAN.',
            ]   
        },
        {
            type: 'simple',
            pic: null,
            question: 'What should be part of a comprehensive network security plan?',
            answers: [
                'Allow users to develop their own approach to network security',
                'Physically secure network equipment from potential access by unauthorized individuals',
                'Encourage users to use personal information in their passwords to minimize the likelihood of passwords being forgotten',
                'Delay deployment of software patches and updates until their effect on end-user equipment is well known and widely reported',
                'Minimize network overhead by deactivating automatic antivirus client updates',
            ],
            corrects: ['B'],
            feedback: [
                'All other answers are not recommended for a network security plan so only B is the correct answer.',
            ]   
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which password types are encrypted?',
            answers: [
                'SSH',
                'Telnet',
                'enable secret',
                'enable password',
            ],
            corrects: ['C'],
            feedback: [
                'The “enable secret” password is always encrypted (independent of the “service password-encryption” command) using MD5 hash algorithm.',
                'Note: The “enable password” does not encrypt the password and can be view in clear text in the running-config. In order to encrypt the “enable password”, use the “service password-encryption” command. In general, don’t use enable password, use enable secret instead.',
            ]   
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which of the following encrypts the traffic on a leased line?',
            answers: [
                'telnet',
                'ssh',
                'vtp',
                'vpn',
                'dmvpn',
            ],
            corrects: ['B'],
            feedback: [
                'SSH, or secure shell, is a secure protocol that provides a built-in encryption mechanism for establishing a secured connection between two parties, authenticating each side to the other, and passing commands and output back and forth.',
                'Note: Virtual Private Networks (VPNs) are only secure if encrypted. The word “private” only means a given user’s virtual network is not shared with others. In reality a VPN still runs on a shared infrastructure and is not secured if not encrypted. ',
                'VPNs are used over a connection you already have. That might be a leased line. It might be an ADSL connection. It could be a mobile network connection.',
                'Therefore answer “SSH” is still better than the answer “VPN”.',
            ]   
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which command is necessary to permit SSH or Telnet access to a Cisco switch that is otherwise configured for these vty line protocols?',
            answers: [
                'transport type all',
                'transport output all',
                'transport preferred all',
                'transport input all',
            ],
            corrects: ['D'],
            feedback: [
                'The “transport input” command is used to define which protocols to use to connect to a specific line (vty, console, aux…) of the router. The “transport input all” command will allow all protocols (including SSH and Telnet) to do this.',
            ]   
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which user-mode password has just been set?  R1#config  R1(config)#line vty 0 4  R1(config-line)#password C1scO  R1(config-line)#login',
            answers: [
                'Telnet',
                'Auxiliary',
                'SSH',
                'Console',
            ],
            corrects: ['A'],
            feedback: [
                'The VTY lines are the Virtual Terminal lines of the router, used solely to control inbound Telnet connections. They are virtual, in the sense that they are a function of software – there is no hardware associated with them',
            ]   
        },
        {
            type: 'multi',
            pic: null,
            question: 'Which two passwords must be supplied in order to connect by Telnet to a properly secured Cisco switch and make changes to the device configuration? (Choose two)',
            answers: [
                'tty password',
                'enable secret password',
                'vty password',
                'aux password',
                'console password',
                'username password',
            ],
            corrects: ['', 'B', 'C', '','',''],
            feedback: [
                'When you connect to a switch/router via Telnet, you first need to provide Telnet password first. Then to access Privileged mode (Switch#) you need to provide secret password after typing “enable” before making any changes.',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which IEEE mechanism is responsible for the authentication of devices when they attempt to connect to a local network?',
            answers: [
                '802.1x',
                '802.11',
                '802.2x',
                '802.3x',
            ],
            corrects: ['A'],
            feedback: [
                '802.1x is an IEEE Standard for port-based Network Access Control (PNAC). It is part of the IEEE 802.1 group of networking protocols. It provides an authentication mechanism to devices wishing to attach to a LAN.',
            ]   
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which IPsec security protocol should be used when confidentiality is required?',
            answers: [
                'AH',
                'MD5',
                'PSK',
                'ESP',
            ],
            corrects: ['D'],
            feedback: [
                'IPsec is a pair of protocols, Encapsulating Security Payload (ESP) and Authentication Header (AH), which provide security services for IP datagrams.',
                'ESP can provide the properties authentication, integrity, replay protection, and confidentiality of the data (it secures everything in the packet that follows the IP header).',
                'AH provides authentication, integrity, and replay protection (but not confidentiality) of the sender.',
            ]   
        },
        {
            type: 'multi',
            pic: null,
            question: 'Which two statements about stateful firewalls in an enterprise network are true? (Choose two)',
            answers: [
                'They are more susceptible to DoS attacks than stateless firewalls',
                'They can filter HTTP and HTTPS traffic in the inbound direction only',
                'They are most effective when placed in front of the router connected to the internet',
                'They can track the number of active TCP connections',
                'They can use information about previous packets to make decisions about future packets',
            ],
            corrects: ['', '', '', 'D','E'],
            feedback: [
                'The stateful firewall (with ASA being in that category) monitors the state of each TCP connection from the time the first TCP connection initiation request is sent using a SYN packet, and tracking the state of the connection like the packet sequence and TCP flags looking for any deviations or anomalies in the TCP connection state and blocking them.',
                'Although a TCP connection is a bi-directional connection, the stateful firewall keeps track of the initiator of the TCP connection, thus adding directionality to a TCP connection. A stateful firewall allows connections in one direction (for example, TCP destination port 80 for a web server) only by default and maintains a state table that also records the random TCP source port used by the client, as a part of the connection state. ',
                'Such firewalls that treat the bidirectional communications of a TCP connection as a single connection and maintain the current state of connections are called stateful firewalls -> This allows tracking of future packets through the established connection -> Answer E is correct.',
                'Some firewalls monitor the traffic in each direction without maintaining any state of the TCP connections, but monitoring traffic as per the defined security policies. Such firewalls are called stateless firewalls.',
                'In stateful inspection, the firewall not only inspects packets up through the application layer/layer7 determining a packet’s header information and data content, but also monitors and keeps track of the connection’s state. ',
                'For all active connections traversing the firewall, the state information, which may include IP addresses and ports involved, the sequence numbers and acknowledgement numbers of the packets traversing the connection, TCP packet flags, etc. is maintained in a state table (-> answer D is correct). ',
                'Filtering decisions are based not only on rules but also on the connection state established by prior packets on that connection. This enables to prevent a variety of DoS, DDoS, and other security violations -> stateful firewall is effective for Dos, DDos attack -> Answer A is not correct.',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which interface counter can you use to diagnose a duplex mismatch problem?',
            answers: [
                'runts',
                'CRC errors',
                'no carrier',
                'late collisions',
                'deferred',
                'giants',
            ],
            corrects: ['D'],
            feedback: [
                'A late collision is defined as any collision that occurs after the first 512 bits of the frame have been transmitted. The usual possible causes are full-duplex/half-duplex mismatch, exceeded Ethernet cable length limits, or defective hardware such as incorrect cabling, non-compliant number of hubs in the network, or a bad NIC.',
            ]   
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which command can be used from a PC to verify the connectivity between hosts that connect through a switch in the same LAN?',
            answers: [
                'tracert address',
                'ping address',
                'arp address',
                'traceroute address',
            ],
            corrects: ['B'],
            feedback: [
                'To check the connectivity between a host and a destination (through some networks) we can use both “tracert” and “ping” commands. But the difference between these two commands is the “tracert” command can display a list of near-side router interfaces in the path between the source and the destination. ',
                'In this question the PC and the host are in the same VLAN so “tracert” command is not useful as there is no router to go through. Therefore the best answer in this case is “ping address”.',
                'Note: “traceroute” command has the same function of the “tracert” command but it is used on Cisco routers only, not on a PC.',
            ]   
        },
        {
            type: 'multi',
            pic: null,
            question: 'When troubleshooting client DNS issues, which two tasks must you perform? (Choose two)',
            answers: [
                'Ping a public website IP address.',
                'Ping the DNS Server.',
                'Determine whether a DHCP address has been assigned.',
                'Determine whether the hardware address is correct.',
                'Determine whether the name servers have been configured',
            ],
            corrects: ['', 'B', '', '','E'],
            feedback: [
                'Complete these steps to troubleshoot this problem:',
                'Ensure the router can reach the DNS server. Ping the DNS server from the router using its IP address, and make sure that the ip name-server command is used to configure the IP address of the DNS server on the router.',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which symptom most commonly indicates that two connecting interface are configured with a duplex mismatch?',
            answers: [
                'an interface with up/down state',
                'an interface with down/down state',
                'late collisions on the interface',
                'the spanning tree process shutting down',
            ],
            corrects: ['C'],
            feedback: [
                'A late collision is defined as any collision that occurs after the first 512 bits of the frame have been transmitted. The usual possible causes are full-duplex/half-duplex mismatch, exceeded Ethernet cable length limits, or defective hardware such as incorrect cabling, non-compliant number of hubs in the network, or a bad NIC.',
                'Note: On an Ethernet connection, a duplex mismatch is a condition where two connected devices operate in different duplex modes, that is, one operates in half duplex while the other one operates in full duplex.',
                'Duplex mismatch would not cause the link to be down/down, but would only result in poor performance like increase late collisions on the interface.',
            ]   
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which command can you enter to display duplicate IP addresses that the DHCP server assigns?',
            answers: [
                'show ip dhcp conflict 10.0.2.12',
                'show ip dhcp database 10.0.2.12',
                'show ip dhcp server statistics',
                'show ip dhcp binding 10.0.2.12',
            ],
            corrects: ['A'],
            feedback: [
                'The command “show ip dhcp conflict” is used to display address conflicts found by a Cisco IOS DHCP Server when addresses are offered to the client',
            ]   
        },
        {
            type: 'simple',
            pic: null,
            question: 'What is the default lease time for a DHCP binding?',
            answers: [
                '24 hours',
                '12 hours',
                '48 hours',
                '36 hours',
            ],
            corrects: ['A'],
            feedback: [
                'We can use the “lease” command to specify the duration of the lease: lease {days [hours][minutes] | infinite}',
                'The default is a one-day lease',
            ]   
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which statement is correct regarding the operation of DHCP?',
            answers: [
                'A DHCP client uses a ping to detect address conflicts.',
                'A DHCP server uses a gratuitous ARP to detect DHCP clients.',
                'A DHCP client uses a gratuitous ARP to detect a DHCP server.',
                'If an address conflict is detected, the address is removed from the pool and an administrator must resolve the conflict.',
                'If an address conflict is detected, the address is removed from the pool for an amount of time configurable by the administrator.',
                'If an address conflict is detected, the address is removed from the pool and will not be reused until the server is rebooted.',
            ],
            corrects: ['D'],
            feedback: [
                'An address conflict occurs when two hosts use the same IP address. During address assignment, DHCP checks for conflicts using ping and gratuitous ARP. If a conflict is detected, the address is removed from the pool. The address will not be assigned until the administrator resolves the conflict.',
            ]   
        },
        {
            type: 'simple',
            pic: null,
            question: 'Where information about untrusted hosts are stored?',
            answers: [
                'CAM table',
                'Trunk table',
                'MAC table',
                'binding database',
            ],
            corrects: ['D'],
            feedback: [
                'The DHCP snooping binding database is also referred to as the DHCP snooping binding table. The DHCP snooping feature dynamically builds and maintains the database using information extracted from intercepted DHCP messages. ',
                'The database contains an entry for each untrusted host with a leased IP address if the host is associated with a VLAN that has DHCP snooping enabled. The database does not contain entries for hosts connected through trusted interfaces.',
            ]   
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which command can you enter to determine the addresses that have been assigned on a DHCP Server?',
            answers: [
                'show ip dhcp database',
                'show ip dhcp pool',
                'show ip dhcp binding',
                'show ip dhcp server statistic',
            ],
            corrects: ['C'],
            feedback: [
                'The “show ip dhcp binding” command displays the IP address bindings and their associated leases.',
            ]   
        },
        {
            type: 'multi',
            pic: null,
            question: 'Requirement to configure DHCP binding (Choose two)',
            answers: [
                'DHCP pool',
                'IP address',
                'Hardware address',
                'other option',
            ],
            corrects: ['', 'B', 'C', ''],
            feedback: [
                'An address binding is a mapping between the IP address and MAC address of a client. The IP address of a client can be assigned manually by an administrator or assigned automatically from a pool by a DHCP server. Manual bindings are IP addresses that have been manually mapped to the MAC addresses of hosts that are found in the DHCP database.',
                'All DHCP clients send a client identifier (DHCP option 61) in the DHCP packet. To configure manual bindings, you must enter the client-identifier DHCP pool configuration command with the appropriate hexadecimal values identifying the DHCP client.',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'While troubleshooting a DHCP client that is behaving erratically, you discover that the client has been assigned the same IP address as a printer that is a static IP address. Which option is the best way to resolve the problem?',
            answers: [
                'Configure a static route to the client',
                'Assign the client the same IP address as the router',
                'Move the client to another IP subnet',
                'Move the printer to another IP subnet',
                'Reserve the printer IP address',
            ],
            corrects: ['E'],
            feedback: [
                'In this case the printer is statically assigned an IP address so we have to make sure DHCP server does not assign the same IP address to another device. We can configure the DHCP server with the command “ip dhcp excluded-address <ip-address>” (suppose it is a Cisco device).',
            ]   
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which statement about the Cisco ACI fabric is most accurate?',
            answers: [
                'The APIC is able to enforce security by inserting itself into the data path.',
                'The fabric header carries the EPG from the egress to the ingress leaf switch.',
                'An APIC is a cluster of at least three APIC controllers, providing a single point of management without a single point of failure.',
                'The spine switch rewrites the EPG from ingress to egress when it performs the forwarding proxy function',
            ],
            corrects: ['C'],
            feedback: [
                'In the Cisco ACI fabric, the fabric header carries the EPG from the egress to the ingress leaf switch',
            ]   
        },
        {
            type: 'multi',
            pic: null,
            question: 'What are two characteristics of a controller-based network? (Choose two)',
            answers: [
                'The administrator can make configuration updates from the CLI',
                'It uses northbound and southbound APIs to communicate between architectural layers',
                'It moves the control plane to a central point',
                'It decentralizes the control plane, which allows each device to make its own forwarding decisions',
                'It uses Telnet to report system issues.',
            ],
            corrects: ['', 'B', 'C', '','',''],
            feedback: [
                'The controller-based network uses northbound and southbound APIs to communicate between architectural layers. Also moves the control plane to a central point',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'How does HSRP provide first hop redundancy?',
            answers: [
                'It load-balances traffic by assigning the same metric value to more than one route to the same destination in the IP routing table',
                'It load-balances Layer 2 traffic along the path by flooding traffic out all interfaces configured with the same VLAN',
                'It forwards multiple packets to the same destination over different routed links and data path',
                'It uses a shared virtual IMC and a virtual IP address to a group of routers that serve as the default gateway for hosts on a LAN',
            ],
            corrects: ['C'],
            feedback: [
                'HSRP forwards multiple packets to the same destination over different routed links and data path',
            ]   
        },
        {
            type: 'simple',
            pic: null,
            question: 'If a notice-level messaging is sent to a syslog server, which event has occurred?',
            answers: [
                'network device has restarted',
                'An ARP Inspection has failed',
                'A routing instance has flapped',
                'A debug operation is running',
            ],
            corrects: ['C'],
            feedback: [
                'Usually no action is required when a route flaps so it generates the notification syslog level message (level 5).',
            ]   
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which command must you enter to guarantee that an HSRP router with higher priority becomes the HSRP primary router after it is reloaded?',
            answers: [
                'standby 10 preempt',
                'standby 10 version 1',
                'standby 10 priority 150',
                'standby 10 version 2',
            ],
            corrects: ['A'],
            feedback: [
                'The “preempt” command enables the HSRP router with the highest priority to immediately become the active router.',
            ]   
        },
        {
            type: 'simple',
            pic: null,
            question: 'Refer to the configuration Which password must an engineer use to enter the enable mode?  Atlanta#config t  Atlanta(config)#aaa new-model  Atlanta(config)#aaa authentication login default local  Atlanta(config)#line vty 0 4  Atlanta(config-line)#login authentication default  Atlanta(config-line)#exit  Atlanta(config)#username ciscoadmin password adminadmin123  Atlanta(config)#username ciscoadmin privilege 15  Atlanta(config)#enable password cisco123  Atlanta(config)#enable secret testing1234  Atlanta(config)#end',
            answers: [
                'adminadmin123',
                'default',
                'testing1234',
                'cisco123',
            ],
            corrects: ['C'],
            feedback: [
                'If neither the enable password command nor the enable secret command is configured, and if there is a line password configured for the console, the console line password serves as the enable password for all VTY sessions -> The “enable secret” will be used first if available, then “enable password” and line password',
            ]   
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which configuration is needed to generate an RSA key for SSH on a router?',
            answers: [
                'Configure the version of SSH',
                'Configure VTY access',
                'Create a user with a password',
                'Assign a DNS domain name',
            ],
            corrects: ['D'],
            feedback: [
                'In order to generate an RSA key for SSH, we need to configure the hostname and a DNS domain name on the router (a username and password is also required). Therefore, in fact both answer C and answer D are correct.',
            ]   
        },
        {
            type: 'simple',
            pic: null,
            question: 'When a site-to-site VPN is used, which protocol is responsible for the transport of user data?',
            answers: [
                'IKEv2',
                'IKEv1',
                'IPsec ',
                'MD5',
            ],
            corrects: ['C'],
            feedback: [
                'A site-to-site VPN allows offices in multiple fixed locations to establish secure connections with each other over a public network such as the Internet. A site-to-site VPN means that two sites create a VPN tunnel by encrypting and sending data between two devices. One set of rules for creating a site-to-site VPN is defined by IPsec.',
            ]   
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which set of action satisfy the requirement for multi-factor authentication?',
            answers: [
                'The user swipes a key fob, then clicks through an email link',
                'The user enters a user name and password, and then clicks a notification in an authentication app on a mobile device',
                'The user enters a PIN into an RSA token, and then enters the displayed RSA key on a login screen',
                'The user enters a user name and password and then re-enters the credentials on a second screen',
            ],
            corrects: ['A'],
            feedback: [
                'This is an example of how two-factor authentication (2FA) works:',
                '1. The user logs in to the website or service with their username and password.',
                '2. The password is validated by an authentication server and, if correct, the user becomes eligible for the second factor.',
                '3. The authentication server sends a unique code to the user’s second-factor method (such as a smartphone app).',
                '4. The user confirms their identity by providing the additional authentication for their second-factor method.',
            ]   
        },
        {
            type: 'simple',
            pic: null,
            question: 'What is the effect of this configuration?  ip arp inspection vlan 2  interface fastethernet 0/1  switchport mode access  switchport access vlan 2',
            answers: [
                'All ARP packets are dropped by the switch',
                'Egress traffic is passed only if the destination is a DHCP server.',
                'All ingress and egress traffic is dropped because the interface is untrusted',
                'The switch discard all ingress ARP traffic with invalid MAC-to-IP address bindings',
            ],
            corrects: ['D'],
            feedback: [
                'Dynamic ARP inspection is an ingress security feature; it does not perform any egress checking.',
            ]   
        },
        {
            type: 'simple',
            pic: null,
            question: 'What is the effect of this configuration?  ip arp inspection vlan 2  interface fastethernet 0/1  switchport mode access switchport access vlan 2',
            answers: [
                'The switch port interface trust state becomes untrusted',
                'The switch port remains administratively down until the interface is connected to another switch',
                'Dynamic ARP inspection is disabled because the ARP ACL is missing',
                'The switch port remains down until it is configured to trust or untrust incoming packets',
            ],
            corrects: ['A'],
            feedback: [
                'Dynamic ARP inspection (DAI) is a security feature that validates ARP packets in a network. It intercepts, logs, and discards ARP packets with invalid IP-to-MAC address bindings. This capability protects the network from certain man-in-the-middle attacks. After enabling DAI, all ports become untrusted ports.',
            ]   
        },
        {
            type: 'simple',
            pic: null,
            question: 'An engineer must configure a WLAN using the strongest encryption type for WPA2-PSK. Which cipher fulfills the configuration requirement?',
            answers: [
                'WEP',
                'RC4',
                'AES',
                'TKIP',
            ],
            corrects: ['C'],
            feedback: [
                'Many routers provide WPA2-PSK (TKIP), WPA2-PSK (AES), and WPA2-PSK (TKIP/AES) as options. TKIP is actually an older encryption protocol introduced with WPA to replace the very-insecure WEP encryption at the time. ',
                'TKIP is actually quite similar to WEP encryption. TKIP is no longer considered secure, and is now deprecated. In other words, you shouldn’t be using it.',
                'AES is a more secure encryption protocol introduced with WPA2 and it is currently the strongest encryption type for WPA2-PSK.',
            ]   
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which unified access point mode continues to serve wireless clients after losing connectivity to the Cisco Wireless LAN Controller?',
            answers: [
                'sniffer',
                'mesh',
                'flex connect',
                'local',
            ],
            corrects: ['C'],
            feedback: [
                'In previous releases, whenever a FlexConnect access point disassociates from a controller, it moves to the standalone mode. The clients that are centrally switched are disassociated. However, the FlexConnect access point continues to serve locally switched clients. ',
                ' When the FlexConnect access point rejoins the controller (or a standby controller), all clients are disconnected and are authenticated again. This functionality has been enhanced and the connection between the clients and the FlexConnect access points are maintained intact and the clients experience seamless connectivity. ',
                'When both the access point and the controller have the same configuration, the connection between the clients and APs is maintained.',
            ]   
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which QoS Profile is selected in the GUI when configuring a voice over WLAN deployment?',
            answers: [
                'Bronze',
                'Platinum',
                'Silver',
                'Gold',
            ],
            corrects: ['B'],
            feedback: [
                'Cisco Unified Wireless Network solution WLANs support four levels of QoS: Platinum/Voice, Gold/Video, Silver/Best Effort (default), and Bronze/Background.',
            ]   
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which statement about Link Aggregation when implemented on a Cisco Wireless LAN Controller is true?',
            answers: [
                'To pass client traffic two or more ports must be configured',
                'The EtherChannel must be configured in “mode active”',
                'When enabled the WLC bandwidth drops to 500 Mbps',
                'One functional physical port is needed to pass client traffic',
            ],
            corrects: ['D'],
            feedback: [
                'Link aggregation (LAG) is a partial implementation of the 802.3ad port aggregation standard. It bundles all of the controller’s distribution system ports into a single 802.3ad port channel.',
                'Restriction for Link aggregation:',
                '•	LAG requires the EtherChannel to be configured for ‘mode on’ on both the controller and the Catalyst switch -> Answer B is not correct.',
                '•	If the recommended load-balancing method cannot be configured on the Catalyst switch, then configure the LAG connection as a single member link or disable LAG on the controller -> Answer A is not correct while answer D is correct.',
            ]   
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which mode allows access points to be managed by Cisco Wireless LAN Controllers?',
            answers: [
                'autonomous',
                'lightweight',
                'bridge',
                'mobility express',
            ],
            corrects: ['B'],
            feedback: [
                'A Lightweight Access Point (LAP) is an AP that is designed to be connected to a wireless LAN (WLAN) controller (WLC). APs are “lightweight,” which means that they cannot act independently of a wireless LAN controller (WLC). ',
                ' The WLC manages the AP configurations and firmware. The APs are “zero touch” deployed, and individual configuration of APs is not necessary.',
            ]   
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which statement correctly compares traditional networks and controller-based networks?',
            answers: [
                'Only traditional networks offer a centralized control plane',
                'Only traditional networks natively support centralized management',
                'Traditional and controller-based networks abstract policies from device configurations ',
                'Only controller-based networks decouple the control plane and the data plane',
            ],
            corrects: ['D'],
            feedback: [
                'Most traditional devices use a distributed architecture, in which each control plane is resided in a networking device. Therefore they need to communicate with each other via messages to work correctly.',
                'In contrast to distributed architecture, centralized (or controller-based) architectures centralizes the control of networking devices into one device, called SDN controller -> Answer D is correct.',
            ]   
        },
        {
            type: 'multi',
            pic: null,
            question: 'Which two encoding methods are supported by REST APIs? (Choose two)',
            answers: [
                'YAML',
                'JSON',
                'EBCDIC',
                'SGML',
                'XML',
            ],
            corrects: ['', 'B', '', '','E'],
            feedback: [
                'The Application Policy Infrastructure Controller (APIC) REST API is a programmatic interface that uses REST architecture. The API accepts and returns HTTP (not enabled by default) or HTTPS messages that contain JavaScript Object Notation (JSON) or Extensible Markup Language (XML) documents.',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'A network engineer must back up 20 network router configurations globally within a customer environment. Which protocol allows the engineer to perform this function using the Cisco IOS MIB?',
            answers: [
                'COP',
                'SNMP',
                'SMTP',
                'ARP',
            ],
            corrects: ['B'],
            feedback: [
                'SNMP is an application-layer protocol that provides a message format for communication between SNMP managers and agents. SNMP provides a standardized framework and a common language used for the monitoring and management of devices in a network.',
                'The SNMP framework has three parts:',
                '•	An SNMP manager',
                '•	An SNMP agent',
                '•	A Management Information Base (MIB)',
                'The Management Information Base (MIB) is a virtual information storage area for network management information, which consists of collections of managed objects.',
                'With SNMP, the network administrator can send commands to multiple routers to do the backup.',
            ]   
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which statement about MPLS is true?',
            answers: [
                'It operates in Layer 1.',
                'It operates between Layer 2 and Layer 3.',
                'It operates in Layer 3.',
                'It operates in Layer 2.',
            ],
            corrects: ['B'],
            feedback: [
                'MPLS operates at a layer that lies between traditional definitions of Layer 2 (data link layer) and Layer 3 (network layer), and thus is often referred to as a “layer 2.5” protocol.',
            ]   
        },
        {
            type: 'multi',
            pic: null,
            question: 'Which two statements about MPLS are true? (Choose two)',
            answers: [
                'It provides automatic authentication',
                'It can carry multiple protocols, including IPv4 and IPv6',
                'It encapsulates all traffic in an IPv4 header',
                'It uses labels to separate and forward customer traffic',
                'It tags customer traffic using 802.1q',
            ],
            corrects: ['', 'B', '', 'D',''],
            feedback: [
                'MPLS supports IPv4, IPv6, IPX, AppleTalk at the network layer. MPLS supports Ethernet, Token Ring, FDDI, ATM, FR, PPP at the link layer.',
                'MPLS uses label switching to forward packets over Ethernet. Labels are assigned to packets based on groupings or forwarding equivalence classes (FECs). The label is added between the Layer 2 and the Layer 3 header.',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'What is the benefit of point-to-point leased line?',
            answers: [
                'Low cost',
                'Full-mesh capability',
                'Flexibility of design',
                'Simply configuration',
            ],
            corrects: ['D'],
            feedback: [
                'Point-to-point leased line is the most expensive interconnection between two ends as the line is dedicated to a single user, the user should still pay for all available bandwidth, including those unused. -> A is not correct.',
                'With the cost of point-to-point leased line, the full-mesh capability is only achieved when your company has very very strong budget to pay all the bills. To create a full-mesh topology for n sites, we need n*(n-1)/2 leased line connections. ',
                'For example if we have 6 sites then we need 6*5/2 = 15 leased line connections -> It is nearly impossible for a normal company to achieve full-mesh topology -> B is not correct.',
                'Flexibility is not an advantage of leased line connection -> C is not correct.',
                'Point-to-point leased line simplifies the configuration as the circuit is available on a permanent basis and does not require a connection to be set up before traffic is passed. It does not require to define a permanent virtual circuit (PVC) in the configuration either -> D is correct.',
            ]   
        },
        {
            type: 'multi',
            pic: null,
            question: 'What are two authentication types of MLPPP?',
            answers: [
                'PEAP',
                'LEAP',
                'PAP',
                'CHAP',
                'TACACS+',
            ],
            corrects: ['', '', 'C', 'D',''],
            feedback: [
                'The Multilink PPP feature provides load balancing functionality over multiple WAN links while providing multivendor interoperability and support for packet fragmentation, proper sequencing, and load calculation on both inbound and outbound traffic.',
                'Multilink PPP combines multiple physical links into a logical bundle called a Multilink PPP bundle. A Multilink PPP bundle is a single, virtual interface that connects to the peer system. ',
                'Having a single interface (Multilink PPP bundle interface) provides a single point to apply hierarchical queueing, shaping, and policing to traffic flows. Individual links in a bundle do not perform any hierarchical queueing. None of the links have any knowledge about the traffic on parallel links.',
                'MLPPP supports two authentication protocols: Password Authentication protocol (PAP) and Challenge-Handshake Authentication Protocol (CHAP)',
            ],
        },
        {
            type: 'multi',
            pic: null,
            question: 'Which two authentication methods are compatible with MLPPP on a serial interface? (Choose two)',
            answers: [
                'LEAP ',
                'PEAP ',
                'CHAP ',
                'TACACS+ ',
                'PAP',
            ],
            corrects: ['', '', 'C', '','E'],
            feedback: [
                'The Multilink PPP (MLPPP) supports CHAP and PAP authentication methods (same as PPP).',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'During which phase of PPPoE is PPP authentication performed?',
            answers: [
                'the PPP Session phase',
                'Phase 2',
                'the Active Discovery phase',
                'the Authentication phase',
                'Phase 1',
            ],
            corrects: ['A'],
            feedback: [
                'PPPoE provides a standard method of employing the authentication methods of the Point-to-Point Protocol (PPP) over an Ethernet network. When used by ISPs, PPPoE allows authenticated assignment of IP addresses. ',
                'In this type of implementation, the PPPoE client and server are interconnected by Layer 2 bridging protocols running over a DSL or other broadband connection.',
                'PPPoE is composed of two main phases:',
                '•	Active Discovery Phase: In this phase, the PPPoE client locates a PPPoE server, called an access concentrator. During this phase, a Session ID is assigned and the PPPoE layer is established.',
                '•	PPP Session Phase: In this phase, PPP options are negotiated and authentication is performed. Once the link setup is completed, PPPoE functions as a Layer 2 encapsulation method, allowing data to be transferred over the PPP link within PPPoE headers.',
            ]   
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which type of interface can negotiate an IP address for a PPPoE client?',
            answers: [
                'Ethernet',
                'dialer',
                'serial',
                'Frame Relay',
            ],
            corrects: ['B'],
            feedback: [
                'In the Dialer interface, we can use the “ip address negotiated” command to ask for an IP address from the PPPoE Server.',
            ]   
        },
        {
            type: 'simple',
            pic: null,
            question: 'A user configured OSPF and advertised the Gigabit Ethernet interface in OSPF. By default, which type of OSPF network does this interface belong to?',
            answers: [
                'point-to-multipoint',
                'point-to-point',
                'broadcast',
                'nonbroadcast',
            ],
            corrects: ['C'],
            feedback: [
                'The Broadcast network type is the default for an OSPF enabled ethernet interface (while Point-to-Point is the default OSPF network type for Serial interface with HDLC and PPP encapsulation).',
            ]   
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which route does R1 select for traffic that is destined to 192.168.16.2?  R1#show ip route  D    192.168.16.0/26 [90/2679326] via 192.168.1.1  R    192.168.16.0/24 [120/3] via 192.168.1.2  O    192.168.16.0/21 [110/2] via 192.168.1.3  i L1 192.168.16.0/27 [115/30] via 192.168.1.4',
            answers: [
                '192.168.16.0/21',
                '102.168.16.0/24',
                '102.168 26.0/26 ',
                '102.168.16.0/27',
            ],
            corrects: ['D'],
            feedback: [
                'The destination IP addresses match all four entries in the routing table but the 192.168.16.0/27 has the longest prefix so it will be chosen. This is called the “longest prefix match” rule.',
            ]   
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which feature builds a FIB and an adjacency table to expedite packet forwarding?',
            answers: [
                'cut through',
                'fast switching',
                'process switching',
                'Cisco Express Forwarding',
            ],
            corrects: ['D'],
            feedback: [
                'Cisco Express Forwarding (CEF) provides the ability to switch packets through a device in a very quick and efficient way while also keeping the load on the router’s processor low. CEF is made up of two different main components: the Forwarding Information Base (FIB) and the Adjacency Table. These are automatically updated at the same time as the routing table.',
                'The Forwarding Information Base (FIB) contains destination reachability information as well as next hop information. This information is then used by the router to make forwarding decisions. The FIB allows for very efficient and easy lookups.',
                'The adjacency table is tasked with maintaining the layer 2 next-hop information for the FIB.',
            ]   
        },
        {
            type: 'multi',
            pic: null,
            question: 'Which two statements about late collisions are true? (Choose two)',
            answers: [
                'They may indicate a duplex mismatch.',
                'By definition, they occur after the 512th bit of the frame has been transmitted.',
                'They indicate received frames that did not pass the FCS match.',
                'They are frames that exceed 1518 bytes.',
                'They occur when CRC errors and interference occur on the cable.',
            ],
            corrects: ['A', 'B', '', '',''],
            feedback: [
                'A late collision is defined as any collision that occurs after the first 512 bits of the frame have been transmitted. The usual possible causes are full-duplex/half-duplex mismatch, exceeded Ethernet cable length limits, or defective hardware such as incorrect cabling, non-compliant number of hubs in the network, or a bad NIC.',
            ],
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which command can you enter to verify echo request and echo reply?',
            answers: [
                'ping',
                'traceroute',
                'tracert',
                'telnet',
            ],
            corrects: ['A'],
            feedback: [
                'The ping command first sends an echo request packet to an address, then waits for an echo reply. The ping is successful only if:',
                '•	The echo request gets to the destination, and',
                '•	The destination is able to get an echo reply back to the source within a predetermined time called a timeout. The default value of this timeout is two seconds on Cisco routers.',
            ]   
        },
        {
            type: 'simple',
            pic: null,
            question: 'Which command shows your active Telnet connections?',
            answers: [
                'show sessions ',
                'show cdp neighbors',
                'show users ',
                'show queue',
            ],
            corrects: ['A'],
            feedback: [
                'The “show users” shows telnet/ssh connections to your router while “show sessions” shows telnet/ssh connections from your router (to other devices). The question asks about “your active Telnet connections”, meaning connections from your router so the answer should be A.',
            ]   
        },
    ];

    preguntasDrag = [
        {
            type: 'drag',
            pic: null,
            question: 'Drag drop the descriptions from the left on to the correct configuration-management technologies on the right.',
            dropBoxes: [
                {name: 'Ansible', boxes: ['','']},
                {name: 'Chef', boxes: ['','']},
                {name: 'Puppet', boxes: ['','']}
            ],
            dragBoxes: [
                'uses Ruby for fundamental configuration elements',
                'uses TCP port 10002 for configuration push jobs',
                'uses SSH for remote device communication',
                'fundamental configuration elements are stored in a manifest',
                'uses TCP 8140 for communication',
                'uses YAML for fundamental configuration elements'
            ],
            corrects: [
                {drop: 'Ansible', drags: ['uses SSH for remote device communication','uses YAML for fundamental configuration elements']},
                {drop: 'Chef', drags: ['uses Ruby for fundamental configuration elements','uses TCP port 10002 for configuration push jobs']},
                {drop: 'Puppet', drags: ['fundamental configuration elements are stored in a manifest','uses TCP 8140 for communication']}
            ],
            feedback: [
                'The focus of Ansible is to be streamlined and fast, and to require no node agent installation. Thus, Ansible performs all functions over SSH. Ansible is built on Python, in contrast to the Ruby foundation of Puppet and Chef.',
                'TCP port 10002 is the command port. It may be configured in the Chef Push Jobs configuration file . This port allows Chef Push Jobs clients to communicate with the Chef Push Jobs server.',
                'Puppet is an open-source configuration management solution, which is built with Ruby and offers custom Domain Specific Language (DSL) and Embedded Ruby (ERB) templates to create custom Puppet language files, offering a declarative-paradigm programming approach.',
                'A Puppet piece of code is called a manifest, and is a file with .pp extension.'
            ]
        },
        {
            type: 'drag',
            pic: null,
            question: 'Drag and drop the description of file-transfer protocols from the left onto the correct protocols on the right.',
            dropBoxes: [
                {name: 'FTP', boxes: ['','','']},
                {name: 'TFTP', boxes: ['','','']}
            ],
            dragBoxes: [
                'does not require user authentication',
                'uses UDP',
                'uses TCP',
                'uses ports 20 and 21',
                'provides reliability when loading and IOS image upon boot up',
                'uses port 69'
            ],
            corrects: [
                {drop: 'FTP', drags: ['uses TCP', 'uses ports 20 and 21', 'provides reliability when loading and IOS image upon boot up']},
                {drop: 'TFTP', drags: ['does not require user authentication', 'uses UDP', 'uses port 69']}
            ],
            feedback: [
                'No explanation'
            ]
        },
        {
            type: 'drag',
            pic: null,
            question: 'Drag and drop the WLAN components from the left onto the correct descriptions on the right.',
            dropBoxes: [
                {name: 'device that provides Wi-Fi devices with a connection to a wired network', boxes: ['']},
                {name: 'device that manages access points', boxes: ['']},
                {name: 'used to support mobility management on the WLC', boxes: ['']},
                {name: 'applied to the WLAN for wireless client communication', boxes: ['']},
                {name: 'used for out of band management of a WLC', boxes: ['']}
            ],
            dragBoxes: [
                'dynamic interface',
                'access point',
                'services port',
                'virtual interface',
                'wireless LAN controller'
            ],
            corrects: [
                {drop: 'device that provides Wi-Fi devices with a connection to a wired network', drags: ['access point']},
                {drop: 'device that manages access points', drags: ['wireless LAN controller']},
                {drop: 'used to support mobility management on the WLC', drags: ['virtual interface']},
                {drop: 'applied to the WLAN for wireless client communication', drags: ['dynamic interface']},
                {drop: 'used for out of band management of a WLC', drags: ['services port']}
            ],
            feedback: [
                'The service port can be used management purposes, primarily for out-of-band management. However, AP management traffic is not possible across the service port. In most cases, the service port is used as a “last resort” means of accessing the controller GUI for management purposes. For example, in the case where the system distribution ports on the controller are down or their communication to the wired network is otherwise degraded.',
                'A dynamic interface with the Dynamic AP Management option enabled is used as the tunnel source for packets from the controller to the access point and as the destination for CAPWAP packets from the access point to the controller.',
                'The virtual interface is used to support mobility management, Dynamic Host Configuration Protocol (DHCP) relay, and embedded Layer 3 security such as guest web authentication. It also maintains the DNS gateway host name used by Layer 3 security and mobility managers to verify the source of certificates when Layer 3 web authorization is enabled.',
                'Reference: https://www.cisco.com/c/en/us/td/docs/wireless/controller/8-5/config-guide/b_cg85/ports_and_interfaces.html'
            ]
        },
        {
            type: 'drag',
            pic: null,
            question: 'Drag and drop the functions from the left onto the correct network components on the right.',
            dropBoxes: [
                {name: 'DHCP Server', boxes: ['','','']},
                {name: 'DNS Server', boxes: ['','']}
            ],
            dragBoxes: [
                'holds the TCP/IP settings to be distributed to the clients',
                'resolves web URLs to IP addresses',
                'stores a list of IP addresses mapped to names',
                'assigns a default gateway to a client',
                'assigns IP addressess to enabled clients'
            ],
            corrects: [
                {drop: 'DHCP Server', drags: ['holds the TCP/IP settings to be distributed to the clients', 'assigns a default gateway to a client', 'assigns IP addressess to enabled clients']},
                {drop: 'DNS Server', drags: ['resolves web URLs to IP addresses', 'stores a list of IP addresses mapped to names']},
            ],
            feedback: [
                'No explanation',
            ]
        },
        {
            type: 'drag',
            pic: null,
            question: 'Drag and drop the networking parameters from the left on to the correct values on the right.',
            dropBoxes: [
                {name: 'Connection Oriented', boxes: ['','','']},
                {name: 'Connectionless', boxes: ['','','']}
            ],
            dragBoxes: [
                'SMTP',
                'SNMP',
                'TFTP',
                'VoIP',
                'SSH',
                'FTP'
            ],
            corrects: [
                {drop: 'Connection Oriented', drags: ['SMTP', 'SSH', 'FTP']},
                {drop: 'Connectionless', drags: ['SNMP', 'TFTP', 'VoIP']}
            ],
            feedback: [
                'SSH uses TCP port 22 while SNMP uses UDP port 161 and 162.'
            ]
        },
        {
            type: 'drag',
            pic: null,
            question: 'Drag the OSPF parameters to the correct places on the right.',
            dropBoxes: [
                {name: 'must be unique', boxes: ['','']},
                {name: 'must match', boxes: ['','','']}
            ],
            dragBoxes: [
                'netmask',
                'router ID',
                'IP address',
                'area ID',
                'timers'
            ],
            corrects: [
                {drop: 'must be unique', drags: ['IP address','router ID']},
                {drop: 'must match', drags: ['area ID','timers','netmask']}
            ],
            feedback: [
                'No explanation'
            ]
        },
        {
            type: 'drag',
            pic: null,
            question: 'Drag and drop the AAA functions from the left onto the correct AAA services on the right.',
            dropBoxes: [
                {name: 'Authentication', boxes: ['','']},
                {name: 'Authorization', boxes: ['','']},
                {name: 'Accounting', boxes: ['','']}
            ],
            dragBoxes: [
                'records user activities',
                'restricts the services that are available to a user',
                'identifies the user',
                'controls the actions that a user can perform',
                'provides analytical information for the network administrator',
                'verifies the password associated with a user'
            ],
            corrects: [
                {drop: 'Authentication', drags: ['identifies the user', 'verifies the password associated with a user']},
                {drop: 'Authorization', drags: ['restricts the services that are available to a user', 'controls the actions that a user can perform']},
                {drop: 'Accounting', drags: ['records user activities', 'provides analytical information for the network administrator']}
            ],
            feedback: [
                'No explanation'
            ]
        },
        {
            type: 'drag',
            pic: null,
            question: 'Drag and drop the application protocols from the left onto the suitable transport protocols on the right.',
            dropBoxes: [
                {name: 'TCP', boxes: ['','','']},
                {name: 'UDP', boxes: ['','','']}
            ],
            dragBoxes: [
                'SMTP',
                'SNMP',
                'DHCP',
                'TFTP',
                'FTP',
                'SSH'
            ],
            corrects: [
                {drop: 'TCP', drags: ['SMTP', 'FTP', 'SSH']},
                {drop: 'UDP', drags: ['SNMP', 'DHCP', 'TFTP']}
            ],
            feedback: [
                'No explanation'
            ]
        },
        {
            type: 'drag',
            pic: null,
            question: 'Drag and drop the IPv4 network subnets from the left onto the correct usable host ranges on the right.',
            dropBoxes: [
                {name: '172.28.228.1 – 172.28.229.254', boxes: ['']},
                {name: '172.28.224.1 – 172.28.231.254', boxes: ['']},
                {name: '172.28.228.129 – 172.28.228.254', boxes: ['']},
                {name: '172.28.228.145 – 172.28.228.150', boxes: ['']},
                {name: '172.28.192.1 – 172.28.255.254', boxes: ['']}
            ],
            dragBoxes: [
                '172.28.228.144/18',
                '172.28.228.144/21',
                '172.28.228.144/23',
                '172.28.228.144/25',
                '172.28.228.144/29'
            ],
            corrects: [
                {drop: '172.28.228.1 – 172.28.229.254', drags: ['172.28.228.144/23']},
                {drop: '172.28.224.1 – 172.28.231.254', drags: ['172.28.228.144/21']},
                {drop: '172.28.228.129 – 172.28.228.254', drags: ['172.28.228.144/25']},
                {drop: '172.28.228.145 – 172.28.228.150', drags: ['172.28.228.144/29']},
                {drop: '172.28.192.1 – 172.28.255.254', drags: ['172.28.228.144/18']}
            ],
            feedback: [
                'This subnet question requires us to grasp how to subnet very well. To quickly find out the subnet range, we have to find out the increment and the network address of each subnet. Let’s take an example with the subnet 172.28.228.144/18:',
                'From the /18 (= 1100 0000 in the 3rd octet), we find out the increment is 64. Therefore the network address of this subnet must be the greatest multiple of the increment but not greater than the value in the 3rd octet (228). We can find out the 3rd octet of the network address is 192 (because 192 = 64 * 3 and 192 < 228) -> The network address is 172.28.192.0. So the first usable host should be 172.28.192.1 and it matches with the 5th answer on the right. In this case we don’t need to calculate the broadcast address because we found the correct answer.',
                'Let’s take another example with subnet 172.28.228.144/23 -> The increment is 2 (as /23 = 1111 1110 in 3rd octet) -> The 3rd octet of the network address is 228 (because 228 is the multiply of 2 and equal to the 3rd octet) -> The network address is 172.28.228.0 -> The first usable host is 172.28.228.1. It is not necessary but if we want to find out the broadcast address of this subnet, we can find out the next network address, which is 172.28.(228 + the increment number).0 or 172.28.230.0 then reduce 1 bit -> 172.28.229.255 is the broadcast address of our subnet. Therefore the last usable host is 172.28.229.254.',
                'If you are still unclear about how to do subnetting quickly, please read part 3 of our “Subnetting Tutorial – Subnetting Made Easy” at https://www.9tut.com/subnetting-tutorial/3'
            ]
        },
        {
            type: 'drag',
            pic: null,
            question: 'Drag and drop the Cisco Wireless LAN Controller security settings from the left onto the correct security mechanism categories on the right.',
            dropBoxes: [
                {name: 'Layer 2 Security Mechanism', boxes: ['','']},
                {name: 'Layer 3 Security Mechanisms (for WLAN)', boxes: ['','']}
            ],
            dragBoxes: [
                'web policy',
                'Passthrough',
                'WPA+WPA2',
                '802.1X'
            ],
            corrects: [
                {drop: 'Layer 2 Security Mechanism', drags: ['WPA+WPA2', '802.1X']},
                {drop: 'Layer 3 Security Mechanisms (for WLAN)', drags: ['web policy', 'Passthrough']}
            ],
            feedback: [
                'Layer 2 Security Mechanism includes WPA+WPA2, 802.1X, Static WEP, CKIP while Layer 3 Security Mechanisms (for WLAN) includes IPSec, VPN Pass-Through, Web Passthrough...',
                'Reference: https://www.cisco.com/c/en/us/support/docs/wireless/4400-series-wireless-lan-controllers/106082-wlc-compatibility-matrix.html'
            ]
        },
        {
            type: 'drag',
            pic: null,
            question: 'Drag and drop the Cisco Wireless LAN Controller security settings from the left onto the correct security mechanism categories on the right.',
            dropBoxes: [
                {name: 'Layer 2 Security Mechanism', boxes: ['','']},
                {name: 'Layer 3 Security Mechanisms (for WLAN)', boxes: ['','']}
            ],
            dragBoxes: [
                'web policy',
                'Passthrough',
                'WPA+WPA2',
                '802.1X'
            ],
            corrects: [
                {drop: 'Layer 2 Security Mechanism', drags: ['WPA+WPA2', '802.1X']},
                {drop: 'Layer 3 Security Mechanisms (for WLAN)', drags: ['web policy', 'Passthrough']}
            ],
            feedback: [
                'Layer 2 Security Mechanism includes WPA+WPA2, 802.1X, Static WEP, CKIP while Layer 3 Security Mechanisms (for WLAN) includes IPSec, VPN Pass-Through, Web Passthrough...',
                'Reference: https://www.cisco.com/c/en/us/support/docs/wireless/4400-series-wireless-lan-controllers/106082-wlc-compatibility-matrix.html'
            ]
        },
        {
            type: 'drag',
            pic: null,
            question: 'Drag and Drop the benefits of a Cisco Wireless LAN Controller from the left onto the correct examples on the right',
            dropBoxes: [
                {name: 'Controller provides centralized management of users and VLANs', boxes: ['']},
                {name: 'Access points auto adjust signal strength', boxes: ['']},
                {name: 'Controller image auto deployed to access Points', boxes: ['']},
                {name: 'Controller uses loadbalancing to maximize throughput', boxes: ['']}
            ],
            dragBoxes: [
                'Dynamic RF Feature',
                'Easy Deployment Process',
                'Optimized user performance',
                'Easy upgrade process'
            ],
            corrects: [
                {drop: 'Controller provides centralized management of users and VLANs', drags: ['Easy Deployment Process']},
                {drop: 'Access points auto adjust signal strength', drags: ['Dynamic RF Feature']},
                {drop: 'Controller image auto deployed to access Points', drags: ['Easy upgrade process']},
                {drop: 'Controller uses loadbalancing to maximize throughput', drags: ['Optimized user performance']},
            ],
            feedback: [
                'No explanation'
            ]
        },
        {
            type: 'drag',
            pic: null,
            question: 'Drag and drop the threat-mitigation techniques from the left onto the types of threat or attack they mitigate on the right.',
            dropBoxes: [
                {name: '802.1q double tagging', boxes: ['']},
                {name: 'ARP spoofing', boxes: ['']},
                {name: 'unwanted superior BPDUs', boxes: ['']},
                {name: 'unwanted BPDUs on PortFast-enabled interfaces', boxes: ['']}
            ],
            dragBoxes: [
                'Configure BPDU guard',
                'Configure dynamic ARP inspection',
                'Configure root guard',
                'Configure VACL'
            ],
            corrects: [
                {drop: '802.1q double tagging', drags: ['Configure VACL']},
                {drop: 'ARP spoofing', drags: ['Configure dynamic ARP inspection']},
                {drop: 'unwanted superior BPDUs', drags: ['Configure root guard']},
                {drop: 'unwanted BPDUs on PortFast-enabled interfaces', drags: ['Configure BPDU guard']},
            ],
            feedback: [
                'Double-Tagging attack:',
                'In this attack, the attacking computer generates frames with two 802.1Q tags. The first tag matches the native VLAN of the trunk port (VLAN 10 in this case), and the second matches the VLAN of a host it wants to attack (VLAN 20).',
                'When the packet from the attacker reaches Switch A, Switch A only sees the first VLAN 10 and it matches with its native VLAN 10 so this VLAN tag is removed. Switch A forwards the frame out all links with the same native VLAN 10. Switch B receives the frame with an tag of VLAN 20 so it removes this tag and forwards out to the Victim computer.',
                'Note: This attack only works if the trunk (between two switches) has the same native VLAN as the attacker.',
                'To mitigate this type of attack, you can use VLAN access control lists (VACLs, which applies to all traffic within a VLAN. We can use VACL to drop attacker traffic to specific victims/servers) or implement Private VLANs.',
                'ARP attack (like ARP poisoning/spoofing) is a type of attack in which a malicious actor sends falsified ARP messages over a local area network as ARP allows a gratuitous reply from a host even if an ARP request was not received. This results in the linking of an attacker’s MAC address with the IP address of a legitimate computer or server on the network. This is an attack based on ARP which is at Layer 2. Dynamic ARP inspection (DAI) is a security feature that validates ARP packets in a network which can be used to mitigate this type of attack.'
            ]
        },
        {
            type: 'drag',
            pic: 'assets/dandd1.png',
            question: 'Refer to the exhibit, drag and drop the networking parameters from the left onto the correct values on the right.',
            dropBoxes: [
                {name: '00:0C:22', boxes: ['']},
                {name: '00:0C:22:83:79:A3', boxes: ['']},
                {name: '192.168.1.193', boxes: ['']},
                {name: '192.168.1.200', boxes: ['']},
                {name: '255.255.255.192', boxes: ['']},
            ],
            dragBoxes: [
                'default gateway',
                'host IP address',
                'NIC MAC address',
                'NIC vendor OUI',
                'subnet mask'
            ],
            corrects: [
                {drop: '00:0C:22', drags: ['NIC vendor OUI']},
                {drop: '00:0C:22:83:79:A3', drags: ['NIC MAC address']},
                {drop: '192.168.1.193', drags: ['default gateway']},
                {drop: '192.168.1.200', drags: ['host IP address']},
                {drop: '255.255.255.192', drags: ['subnet mask']}
            ],
            feedback: [
                'The “ip route” and “ip addr show eth1” are Linux commands.',
                '+ “ip route”: display the routing table',
                '+ “ip addr show eth1”: get depth information (only on eth1 interface) about your network interfaces like IP Address, MAC Address information'
            ]
        },
        {
            type: 'drag',
            pic: null,
            question: 'Drag drop about STP port roles.',
            dropBoxes: [
                {name: 'path to the root bridge that excludes the root port', boxes: ['']},
                {name: 'elect port for an individual LAN segment', boxes: ['']},
                {name: 'port that is excluded from the spanning-tree process', boxes: ['']},
                {name: 'elected port for the spanning tree topology as a whole', boxes: ['']}
            ],
            dragBoxes: [
                'disable',
                'alternate',
                'root',
                'designated'
            ],
            corrects: [
                {drop: 'path to the root bridge that excludes the root port', drags: ['alternate']},
                {drop: 'elect port for an individual LAN segment', drags: ['designated']},
                {drop: 'port that is excluded from the spanning-tree process', drags: ['disable']},
                {drop: 'elected port for the spanning tree topology as a whole', drags: ['root']}
            ],
            feedback: [
                'No explanation'
            ]
        },
        {
            type: 'drag',
            pic: null,
            question: 'Drag drop about Cable types.',
            dropBoxes: [
                {name: 'Copper', boxes: ['','','']},
                {name: 'Fiber', boxes: ['','','']}
            ],
            dragBoxes: [
                '1000BASE-LX',
                '10GBASE-LR',
                '10BASE-T',
                '1000BASE-SC',
                '100BASE-TX',
                '10GBASE-T'
            ],
            corrects: [
                {drop: 'Copper', drags: ['10BASE-T','100BASE-TX','10GBASE-T']},
                {drop: 'Fiber', drags: ['10GBASE-LR','1000BASE-LX','1000BASE-SC']}
            ],
            feedback: [
                'The “T” letter symbolizes for “twisted pair cable” so all “BASE-T…” types are copper.'
            ]
        },
        {
            type: 'drag',
            pic: null,
            question: 'Drag drop about QoS.',
            dropBoxes: [
                {name: 'uses route maps to match traffic criteria', boxes: ['']},
                {name: 'service level that provides basic connectivity without differentiation', boxes: ['']},
                {name: 'identification tool ideal for handling web applications', boxes: ['']},
                {name: 'policies traffic based on its bandwidth allocation', boxes: ['']},
                {name: 'service level that provides preferred handling', boxes: ['']},
                {name: 'service level that provides reserved network resources', boxes: ['']},
            ],
            dragBoxes: [
                'CAR',
                'Best effort',
                'Soft QoS',
                'Hard QoS',
                'PBR',
                'NBAR'
            ],
            corrects: [
                {drop: 'uses route maps to match traffic criteria', drags: ['PBR']},
                {drop: 'service level that provides basic connectivity without differentiation', drags: ['Best effort']},
                {drop: 'identification tool ideal for handling web applications', drags: ['NBAR']},
                {drop: 'policies traffic based on its bandwidth allocation', drags: ['CAR']},
                {drop: 'service level that provides preferred handling', drags: ['Soft QoS']},
                {drop: 'service level that provides reserved network resources', drags: ['Hard QoS']},
            ],
            feedback: [
                'Committed Access Rate (CAR)',
                'Network-based application recognition (NBAR)',
                'Policy-based routing (PBR)',
                'Soft QoS: also known as Differentiated Services (Diffserv), which ensures resources for applications based on available bandwidth',
                'Hard QoS: Differentiated Service (DiffServ) is an appropriate example for this type of QoS service'
            ]
        },
        {
            type: 'drag',
            pic: null,
            question: 'Drag and drop the items on the right to the correspondent definitions on the left.',
            dropBoxes: [
                {name: 'disables the switch port when it receives a BPDU', boxes: ['']},
                {name: 'drops all BPDU received on the switch port', boxes: ['']},
                {name: 'enables quick convergence when a direct link to a non-end device fails', boxes: ['']},
                {name: 'forces the switch to transition directly from the blocking state to the forwarding state', boxes: ['']},
                {name: 'prevents the port from becoming a locked port', boxes: ['']}
            ],
            dragBoxes: [
                'BPDU Filter',
                'BPDU guard',
                'PortFast',
                'Root guard',
                'UplinkFast'
            ],
            corrects: [
                {drop: 'disables the switch port when it receives a BPDU', drags: ['BPDU guard']},
                {drop: 'drops all BPDU received on the switch port', drags: ['BPDU Filter']},
                {drop: 'enables quick convergence when a direct link to a non-end device fails', drags: ['UplinkFast']},
                {drop: 'forces the switch to transition directly from the blocking state to the forwarding state', drags: ['PortFast']},
                {drop: 'prevents the port from becoming a locked port', drags: ['Root guard']}
            ],
            feedback: [
                'No explanation'
            ]
        },
        {
            type: 'drag',
            pic: null,
            question: 'Drag and drop the values in a routing table from the left onto the correct meanings on the right',
            dropBoxes: [
                {name: 'code that indicates the method by which the router learned the route', boxes: ['']},
                {name: 'value used by the router to determine the preferred route', boxes: ['']},
                {name: 'indicator of the trustworthiness of the route', boxes: ['']},
                {name: 'network to which the router forwards packets on the associated route', boxes: ['']},
                {name: 'remote network address', boxes: ['']}
            ],
            dragBoxes: [
                'Administrative distance',
                'Destination network',
                'Metric',
                'Next hop',
                'Route source'
            ],
            corrects: [
                {drop: 'code that indicates the method by which the router learned the route', drags: ['Route source']},
                {drop: 'value used by the router to determine the preferred route', drags: ['Metric']},
                {drop: 'indicator of the trustworthiness of the route', drags: ['Administrative distance']},
                {drop: 'network to which the router forwards packets on the associated route', drags: ['Next hop']},
                {drop: 'remote network address', drags: ['Destination network']}
            ],
            feedback: [
                'No explanation'
            ]
        },
        {
            type: 'drag',
            pic: null,
            question: 'Drag and drop the CSMA components from the left onto the correct descriptions on the right',
            dropBoxes: [
                {name: 'Access mode used for Ethernet network', boxes: ['']},
                {name: 'Access mode used for Wi-fi networks', boxes: ['']},
                {name: 'Access mode used in the controlled area network', boxes: ['']},
                {name: 'Rules that define the system response when a collision occurs on an Ethernet network', boxes: ['']},
                {name: 'Rules that define the system response when a collision occurs on a Wi-fi network', boxes: ['']}
            ],
            dragBoxes: [
                '1-persistent',
                'CSMA/CA',
                'CSMA/CD',
                'O-peristent',
                'P-persistent'
            ],
            corrects: [
                {drop: 'Access mode used for Ethernet network', drags: ['1-persistent']},
                {drop: 'Access mode used for Wi-fi networks', drags: ['P-persistent']},
                {drop: 'Access mode used in the controlled area network', drags: ['O-peristent']},
                {drop: 'Rules that define the system response when a collision occurs on an Ethernet network', drags: ['CSMA/CD']},
                {drop: 'Rules that define the system response when a collision occurs on a Wi-fi network', drags: ['CSMA/CA']}
            ],
            feedback: [
                '1-persistent CSMA is an aggressive transmission algorithm. When the transmitting node is ready to transmit, it senses the transmission medium for idle or busy. If idle, then it transmits immediately. If busy, then it senses the transmission medium continuously until it becomes idle, then transmits the message (a frame) unconditionally (i.e. with probability=1). In case of a collision, the sender waits for a random period of time and attempts the same procedure again. 1-persistent CSMA is used in CSMA/CD systems including Ethernet.',
                'Non persistent CSMA is a non aggressive transmission algorithm. When the transmitting node is ready to transmit data, it senses the transmission medium for idle or busy. If idle, then it transmits immediately. If busy, then it waits for a random period of time (during which it does not sense the transmission medium) before repeating the whole logic cycle (which started with sensing the transmission medium for idle or busy) again. This approach reduces collision, results in overall higher medium throughput but with a penalty of longer initial delay compared to 1–persistent.',
                'P-persistent is an approach between 1-persistent and non-persistent CSMA access modes. [1]When the transmitting node is ready to transmit data, it senses the transmission medium for idle or busy. If idle, then it transmits immediately. If busy, then it senses the transmission medium continuously until it becomes idle, then transmits with probability p. If the node does not transmit (the probability of this event is 1-p), it waits until the next available time slot. If the transmission medium is not busy, it transmits again with the same probability p. This probabilistic hold-off repeats until the frame is finally transmitted or when the medium is found to become busy again (i.e. some other node has already started transmitting). In the latter case the node repeats the whole logic cycle (which started with sensing the transmission medium for idle or busy) again. p-persistent CSMA is used in CSMA/CA systems including Wi-Fi and other packet radio systems.',
                'O-persistent Each node is assigned a transmission order by a supervisory node. When the transmission medium goes idle, nodes wait for their time slot in accordance with their assigned transmission order. The node assigned to transmit first transmits immediately. The node assigned to transmit second waits one time slot (but by that time the first node has already started transmitting). Nodes monitor the medium for transmissions from other nodes and update their assigned order with each detected transmission (i.e. they move one position closer to the front of the queue).[2] O-persistent CSMA is used by CobraNet, LonWorks and the controller area network.',
                'Reference: https://en.wikipedia.org/wiki/Carrier-sense_multiple_access'
            ]
        },
        {
            type: 'drag',
            pic: null,
            question: 'Drag and drop the CSMA components from the left onto the correct descriptions on the right',
            dropBoxes: [
                {name: '::', boxes: ['']},
                {name: '2020:10D8:0:0:85:800:52:7348', boxes: ['']},
                {name: 'DB:FC:93:FF:FE:D8:05:0A', boxes: ['']},
                {name: 'FF01::1', boxes: ['']},
            ],
            dragBoxes: [
                'Modified EUI-64',
                'multicast',
                'unicast',
                'unspecified',
            ],
            corrects: [
                {drop: '::', drags: ['unspecified']},
                {drop: '2020:10D8:0:0:85:800:52:7348', drags: ['unicast']},
                {drop: 'DB:FC:93:FF:FE:D8:05:0A', drags: ['Modified EUI-64']},
                {drop: 'FF01::1', drags: ['multicast']},
            ],
            feedback: [
                'No explanation'
            ]
        },
    ];

    constructor() { }

    getPreguntas() {
        return this.preguntasMaster;
    }

    getPreguntasDrag() {
        return this.preguntasDrag;
    }

}
